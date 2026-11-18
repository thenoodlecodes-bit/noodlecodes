import type { Currency } from "@/content/pricing";

const formats: Record<Currency, Intl.NumberFormat> = {
  INR: new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }),
  USD: new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }),
};

/** ₹35,000 or $400. Safe to use on the server and in the browser. */
export const money = (value: number, currency: Currency) => formats[currency].format(value);

export const CURRENCY_COOKIE = "nc-currency";

/** A wa.me link to the team's WhatsApp, with the message typed in for the visitor. */
export const whatsappLink = (number: string, text?: string) => `https://wa.me/${number}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
