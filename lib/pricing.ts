// Geo-aware pricing. Indian IPs see INR; everyone else sees USD.
// Region is resolved in middleware.ts (IP geo + ?region override) and read
// server-side via lib/region.ts.

export type Region = "IN" | "INTL";

export interface ServicePrice {
  /** Compact amount for the big price number, e.g. "₹40k" / "$1k". */
  short: string;
  /** Full amount, e.g. "₹40,000" / "$1,000". */
  full: string;
}

export interface RegionPricing {
  region: Region;
  currency: string; // "INR" | "USD"
  symbol: string; // "₹" | "$"
  websites: ServicePrice;
  apps: ServicePrice;
  ai: ServicePrice;
  panels: ServicePrice;
  /** Consultancy / CTO call is free first, then a per-session rate. */
  consultThen: string; // "₹2,000 / call" | "$200 / session"
  consultMeta: string; // shown under the consulting card
  /** Currency-specific supporting copy. */
  invoiceFoot: string;
  paymentSchedule: string;
  taxAnswer: string;
  /** Contact-form budget bands. */
  budgets: { value: string; label: string }[];
}

const IN: RegionPricing = {
  region: "IN",
  currency: "INR",
  symbol: "₹",
  websites: { short: "₹40k", full: "₹40,000" },
  apps: { short: "₹80k", full: "₹80,000" },
  ai: { short: "₹50k", full: "₹50,000" },
  panels: { short: "₹60k", full: "₹60,000" },
  consultThen: "₹2,000 / call",
  consultMeta: "First call free · then ₹2,000 / call",
  invoiceFoot:
    "We invoice in Indian Rupees (GST applicable) and accept UPI, bank transfer, Razorpay, and major cards.",
  paymentSchedule:
    "Projects: 30% on signature, 40% at the midpoint demo, 30% on launch. Consultancy: first call free, then ₹2,000 per call (or a monthly retainer for ongoing work). We invoice in INR with GST and accept UPI, bank transfer, Razorpay, and cards.",
  taxAnswer:
    "Prices shown are net of tax. 18% GST is added for Indian billing entities, and we provide a proper GST invoice for your books. No platform fees or surprise add-ons — third-party cloud / API costs are passed through at cost, with receipts.",
  budgets: [
    { value: "u50k", label: "Under ₹50k" },
    { value: "50-100k", label: "₹50k – ₹1L" },
    { value: "1-3L", label: "₹1L – ₹3L" },
    { value: "3L+", label: "₹3L+" },
    { value: "tbd", label: "Not sure yet" },
  ],
};

const INTL: RegionPricing = {
  region: "INTL",
  currency: "USD",
  symbol: "$",
  websites: { short: "$1k", full: "$1,000" },
  apps: { short: "$6k", full: "$6,000" },
  ai: { short: "$4k", full: "$4,000" },
  panels: { short: "$5k", full: "$5,000" },
  consultThen: "$200 / session",
  consultMeta: "First call free · then $200 / session",
  invoiceFoot:
    "We invoice in U.S. dollars and accept ACH, wire, and all major credit cards via Stripe. Net-15 terms available for established companies.",
  paymentSchedule:
    "Projects: 30% on signature, 40% at the midpoint demo, 30% on launch. Consultancy: first call free, then $200 per session (or a monthly retainer for ongoing work). We invoice in USD and accept ACH, wire, and major cards via Stripe, with a signed SOW every time.",
  taxAnswer:
    "No. Prices are the price. As a U.S.-registered company billing in USD, there's no sales tax on professional software development in most states — and we'll provide a W-9 and clean invoices for your books. No platform fees or surprise add-ons; third-party cloud / API costs are passed through at cost, with receipts.",
  budgets: [
    { value: "u2k", label: "Under $2k" },
    { value: "2-6k", label: "$2k – $6k" },
    { value: "6-15k", label: "$6k – $15k" },
    { value: "15k+", label: "$15k+" },
    { value: "tbd", label: "Not sure yet" },
  ],
};

export const PRICING: Record<Region, RegionPricing> = { IN, INTL };

export function getPricing(region: Region): RegionPricing {
  return PRICING[region];
}
