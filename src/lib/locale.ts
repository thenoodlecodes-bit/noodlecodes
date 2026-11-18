import { cookies, headers } from "next/headers";
import type { Currency } from "@/content/pricing";
import { CURRENCY_COOKIE } from "./money";

// Country headers set by common hosts and CDNs.
const COUNTRY_HEADERS = ["x-vercel-ip-country", "cf-ipcountry", "cloudfront-viewer-country", "x-country-code"];

/**
 * Rupees for visitors in India, dollars for everyone else.
 * A choice made with the currency switch wins. Without a country header (local dev, plain Node hosts),
 * an Indian browser language such as en-IN or hi-IN counts as India.
 * Reads the request, so call it inside a Suspense boundary.
 */
export async function getCurrency(): Promise<Currency> {
  const [jar, head] = await Promise.all([cookies(), headers()]);
  const chosen = jar.get(CURRENCY_COOKIE)?.value;
  if (chosen === "INR" || chosen === "USD") return chosen;

  for (const name of COUNTRY_HEADERS) {
    const country = head.get(name);
    if (country) return country.toUpperCase() === "IN" ? "INR" : "USD";
  }
  return /\b[a-z]{2}-IN\b/i.test(head.get("accept-language") ?? "") ? "INR" : "USD";
}

/** The visitor's country code when the host provides one, for enquiry records. */
export function countryOf(request: Request) {
  for (const name of COUNTRY_HEADERS) {
    const country = request.headers.get(name);
    if (country) return country.toUpperCase();
  }
  return "";
}
