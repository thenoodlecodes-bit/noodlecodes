import type { ServiceSlug, SolutionSlug } from "./types";

export type Currency = "INR" | "USD";

// Starting prices in dollars. Visitors in India see rupees at ₹100 to the dollar, everyone else sees dollars.
export type PriceItem = {
  id: string;
  name: string;
  note: string;
  usd: number;
  /** Shown after the price, such as "per session". */
  per?: string;
  service: ServiceSlug;
  /** Module pages that show this price. */
  solutions?: SolutionSlug[];
};

export type PriceGroup = { title: string; items: PriceItem[] };

export const priceGroups: PriceGroup[] = [
  {
    title: "Build",
    items: [
      { id: "website", name: "MVP website", note: "A fast first version of your site or store", usd: 400, service: "development" },
      { id: "app", name: "MVP app", note: "Android and iOS from one codebase", usd: 600, service: "development" },
      { id: "dashboard", name: "Dashboard", note: "Admin panels, reports and internal tools", usd: 400, service: "development" },
      { id: "ai", name: "AI integration or agent", note: "Assistants, document search and automations", usd: 500, service: "development" },
      { id: "shopify", name: "Shopify with a custom website", note: "Your own front end on Shopify's checkout", usd: 500, service: "development" },
    ],
  },
  {
    title: "Advice",
    items: [{ id: "consultancy", name: "Tech consultancy", note: "A working session with a senior engineer", usd: 50, per: "per session", service: "consultancy" }],
  },
  {
    title: "Plug and play modules",
    items: [
      { id: "notifications", name: "Notifications", note: "In-app, push, email, SMS and WhatsApp", usd: 600, service: "plug-and-play", solutions: ["relay", "pulse"] },
      { id: "email", name: "Email marketing", note: "Campaigns and journeys on your domain", usd: 500, service: "plug-and-play", solutions: ["mailroom"] },
      { id: "whatsapp", name: "WhatsApp marketing", note: "Broadcasts, chat flows and catalogue orders", usd: 600, service: "plug-and-play", solutions: ["wave"] },
    ],
  },
  {
    title: "Tracking setup",
    items: [
      { id: "meta", name: "Meta ads tracking", note: "Pixel and Conversions API", usd: 400, service: "ads-tracking" },
      { id: "google", name: "Google ads tracking", note: "Google Ads, GA4 and enhanced conversions", usd: 600, service: "ads-tracking" },
      { id: "reddit", name: "Reddit ads tracking", note: "Pixel and Conversions API", usd: 500, service: "ads-tracking" },
      { id: "tiktok", name: "TikTok ads tracking", note: "Pixel and Events API", usd: 600, service: "ads-tracking" },
      { id: "behaviour", name: "User behaviour tracking", note: "Funnels, heatmaps and session replays", usd: 800, service: "ads-tracking", solutions: ["trail"] },
    ],
  },
];

export const priceItems = priceGroups.flatMap((g) => g.items);

export const RUPEES_PER_DOLLAR = 100;

export const amount = (item: PriceItem, currency: Currency) => (currency === "INR" ? item.usd * RUPEES_PER_DOLLAR : item.usd);

/** The lowest starting price for a service, or undefined when it is quoted case by case. */
export function serviceFrom(service: ServiceSlug) {
  const items = priceItems.filter((i) => i.service === service);
  if (!items.length) return undefined;
  return items.reduce((low, i) => (i.usd < low.usd ? i : low));
}

export const solutionFrom = (solution: SolutionSlug) => priceItems.find((i) => i.solutions?.includes(solution));

export const BUDGETS: Record<Currency, readonly string[]> = {
  INR: ["Under ₹60,000", "₹60,000 to ₹2.5 lakh", "₹2.5 to 12 lakh", "Above ₹12 lakh"],
  USD: ["Under $600", "$600 to $2,500", "$2,500 to $12,000", "Above $12,000"],
};

export const TIMELINES = ["As soon as possible", "Within a month", "In 1 to 3 months", "Just exploring"] as const;
