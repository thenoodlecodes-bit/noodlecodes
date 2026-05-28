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
  const lines = [
    `New project inquiry from the NoodleCodes site`,
    ``,
    `Name:     ${name}`,
    `Email:    ${email}`,
    `Company:  ${data.company || "—"}`,
    `Role:     ${data.role || "—"}`,
    `Service:  ${data.service || "—"}`,
    `Budget:   ${data.budget || "—"}`,
    `Timeline: ${data.timeline || "—"}`,
    `Source:   ${data.source || "—"}`,
    ``,
    `Message:`,
    message,
  ];
  const text = lines.join("\n");

  // ---- Deliver ----
  // If RESEND_API_KEY is configured, send a real email via the Resend REST API
  // (no extra dependency needed). Otherwise, just log it server-side.
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
        return NextResponse.json(
          { ok: false, error: "Email delivery failed." },
          { status: 502 }
        );
      }
    } catch (err) {
      console.error("Resend request threw:", err);
      return NextResponse.json(
        { ok: false, error: "Email delivery failed." },
        { status: 502 }
      );
    }
  } else {
    // No email provider configured — log so nothing is lost in dev.
    console.log("[contact] New submission (no RESEND_API_KEY set):\n" + text);
  }

  return NextResponse.json({ ok: true });
}
