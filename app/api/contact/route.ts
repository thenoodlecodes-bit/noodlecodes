import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
  role?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  source?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  // ---- Validation ----
  const errors: Record<string, string> = {};
  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const message = (data.message || "").trim();

  if (!name) errors.name = "Name is required.";
  if (!email || !EMAIL_RE.test(email)) errors.email = "A valid email is required.";
  if (!message) errors.message = "A short project description is required.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  // ---- Compose the message ----
  const submittedAt = new Date().toISOString();
  const lines = [
    `New project inquiry from the NoodleCodes site`,
    ``,
    `Submitted: ${submittedAt}`,
    `Name:      ${name}`,
    `Email:     ${email}`,
    `Company:   ${data.company || "—"}`,
    `Role:      ${data.role || "—"}`,
    `Service:   ${data.service || "—"}`,
    `Budget:    ${data.budget || "—"}`,
    `Timeline:  ${data.timeline || "—"}`,
    `Source:    ${data.source || "—"}`,
    ``,
    `Message:`,
    message,
  ];
  const text = lines.join("\n");

  // Record the structured row so we can fan out to multiple destinations
  // (Google Sheets, email, server log) without re-shaping the payload each time.
  const row = {
    submittedAt,
    name,
    email,
    company: data.company || "",
    role: data.role || "",
    service: data.service || "",
    budget: data.budget || "",
    timeline: data.timeline || "",
    source: data.source || "",
    message,
  };

  // ---- Deliver: Google Sheets (Apps Script web app) ----
  // Set SHEETS_WEBHOOK_URL in .env.local to your deployed Apps Script web-app
  // URL. We fire-and-forget here so a Sheets failure never blocks the user's
  // submission — they still get a success response and (if Resend is set) an
  // email copy. Errors are logged for debugging.
  const sheetsUrl = process.env.SHEETS_WEBHOOK_URL;
  if (sheetsUrl) {
    try {
      const sheetsRes = await fetch(sheetsUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(row),
      });
      if (!sheetsRes.ok) {
        console.error(
          "[contact] Sheets webhook returned non-OK:",
          sheetsRes.status,
          await sheetsRes.text().catch(() => "")
        );
      }
    } catch (err) {
      console.error("[contact] Sheets webhook threw:", err);
    }
  }

  // ---- Deliver: email (Resend) ----
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "thenoodlecodes@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL || "thenoodlecodes@gmail.com";

  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to,
          reply_to: email,
          subject: `New inquiry — ${name}${data.service ? ` (${data.service})` : ""}`,
          text,
        }),
      });

      if (!res.ok) {
        const detail = await res.text();
        console.error("Resend error:", detail);
        // Only fail the request if Sheets is ALSO not configured — otherwise
        // the submission is already safely recorded.
        if (!sheetsUrl) {
          return NextResponse.json(
            { ok: false, error: "Delivery failed." },
            { status: 502 }
          );
        }
      }
    } catch (err) {
      console.error("Resend request threw:", err);
      if (!sheetsUrl) {
        return NextResponse.json(
          { ok: false, error: "Delivery failed." },
          { status: 502 }
        );
      }
    }
  } else if (!sheetsUrl) {
    // Neither destination configured — log so dev submissions aren't lost.
    console.log("[contact] New submission (no provider set):\n" + text);
  }

  return NextResponse.json({ ok: true });
}
