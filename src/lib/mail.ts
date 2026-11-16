import { Resend } from "resend";
import { site } from "@/content/site";

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

type Sent = { ok: true; dev?: true } | { ok: false; status: 502 | 503; error: string };

/** Emails the team through Resend. In development without keys, logs the message instead. */
export async function notifyTeam(mail: { subject: string; text: string; replyTo?: string; tag: string }): Promise<Sent> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.MAIL_FROM;
  const to = process.env.MAIL_TO ?? site.emails.hello;

  if (!apiKey || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[${mail.tag}] Email is not configured. Would have sent:\n${mail.subject}\n\n${mail.text}`);
      return { ok: true, dev: true };
    }
    console.error(`[${mail.tag}] RESEND_API_KEY or MAIL_FROM is missing`);
    return { ok: false, status: 503, error: "This form is not configured yet." };
  }

  const { error } = await new Resend(apiKey).emails.send({ from, to, replyTo: mail.replyTo, subject: mail.subject, text: mail.text });
  if (error) {
    console.error(`[${mail.tag}] Resend failed`, error);
    return { ok: false, status: 502, error: "Could not send right now." };
  }
  return { ok: true };
}
