import { Resend } from "resend";
import { site } from "@/content/site";
import { saveToSheet, type SheetRow } from "./sheet";

// Best-effort limit per server instance. Put a real limiter (Upstash, Vercel WAF) in front for heavy traffic.
const WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

export function limited(request: Request, bucket: string, max = 5) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  const key = `${bucket}:${ip}`;
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > max;
}

export async function readJson(request: Request): Promise<unknown | undefined> {
  try {
    return await request.json();
  } catch {
    return undefined;
  }
}

type Mail = { subject: string; text: string; replyTo?: string };
type Sent = { ok: true } | { ok: false; status: 502 | 503; error: string };

/** Emails the team through Resend, when RESEND_API_KEY and MAIL_FROM are set. */
async function email(mail: Mail, tag: string): Promise<"sent" | "missing" | "failed"> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.MAIL_FROM;
  if (!apiKey || !from) return "missing";
  const to = process.env.MAIL_TO ?? site.emails.hello;
  const { error } = await new Resend(apiKey).emails.send({ from, to, replyTo: mail.replyTo, subject: mail.subject, text: mail.text });
  if (error) {
    console.error(`[${tag}] Resend failed`, error);
    return "failed";
  }
  return "sent";
}

/**
 * Saves the enquiry to the Google Sheet and emails the team, in parallel.
 * It counts as delivered when either one works. In development with neither set up, it logs instead.
 */
export async function deliver({ tag, row, mail }: { tag: string; row: SheetRow; mail: Mail }): Promise<Sent> {
  const [sheet, mailed] = await Promise.all([saveToSheet(row), email(mail, tag)]);
  if (sheet.ok || mailed === "sent") return { ok: true };

  const nothingSetUp = !sheet.ok && sheet.reason === "missing" && mailed === "missing";
  if (nothingSetUp && process.env.NODE_ENV !== "production") {
    console.info(`[${tag}] Neither ENQUIRY_SHEET_URL nor Resend is set. Would have sent:\n${mail.subject}\n\n${mail.text}`);
    return { ok: true };
  }
  if (nothingSetUp) {
    console.error(`[${tag}] Set ENQUIRY_SHEET_URL or RESEND_API_KEY and MAIL_FROM`);
    return { ok: false, status: 503, error: "This form is not set up yet." };
  }
  return { ok: false, status: 502, error: "Could not send right now." };
}
