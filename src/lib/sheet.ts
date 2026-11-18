// Appends a row to the enquiry Google Sheet through its Apps Script web app.
// Columns: submittedAt, name, email, company, role, service, budget, timeline, source, message, phone, country.

export type SheetRow = {
  name: string;
  email: string;
  company?: string;
  role?: string;
  service: string;
  budget?: string;
  timeline?: string;
  source: string;
  message: string;
  phone?: string;
  country?: string;
};

type Saved = { ok: true } | { ok: false; reason: "missing" | "failed" };

export async function saveToSheet(row: SheetRow): Promise<Saved> {
  const url = process.env.ENQUIRY_SHEET_URL;
  if (!url) return { ok: false, reason: "missing" };

  try {
    // Apps Script answers a POST with a redirect to the result, which fetch follows.
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ submittedAt: new Date().toISOString(), ...row }),
      redirect: "follow",
      signal: AbortSignal.timeout(10_000),
    });
    const body = (await res.json().catch(() => ({}))) as { ok?: boolean; err?: string };
    if (!res.ok || !body.ok) {
      console.error("[sheet] The sheet did not accept the row", res.status, body.err ?? "");
      return { ok: false, reason: "failed" };
    }
    return { ok: true };
  } catch (err) {
    console.error("[sheet] Could not reach the sheet", err);
    return { ok: false, reason: "failed" };
  }
}
