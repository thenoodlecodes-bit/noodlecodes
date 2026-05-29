// Diagnostic: POST a row to the Apps Script webhook using the same fetch
// the Next.js route uses, so we see exactly what production sees.
// Run:  node scripts/test-sheets.mjs

import { readFileSync } from "node:fs";

const envText = readFileSync(new URL("../.env", import.meta.url), "utf8");
const url = envText.match(/^SHEETS_WEBHOOK_URL=(.*)$/m)?.[1]?.trim();

if (!url) {
  console.error("No SHEETS_WEBHOOK_URL in .env");
  process.exit(1);
}

console.log("Posting to:", url);

const row = {
  submittedAt: new Date().toISOString(),
  name: "Diagnostic Test",
  email: "diag@example.com",
  company: "Claude Diagnostic",
  role: "bot",
  service: "websites",
  budget: "30-60",
  timeline: "asap",
  source: "diag",
  message:
    "If you see this row in the sheet, the webhook + Apps Script are working end-to-end.",
};

try {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(row),
    redirect: "follow",
  });
  console.log("HTTP", res.status, res.statusText);
  console.log("Final URL:", res.url);
  console.log("Content-Type:", res.headers.get("content-type"));
  const body = await res.text();
  console.log("---BODY---");
  console.log(body.slice(0, 2000));
  console.log("---END---");
  if (!res.ok) process.exit(2);
} catch (err) {
  console.error("Fetch threw:", err);
  process.exit(3);
}
