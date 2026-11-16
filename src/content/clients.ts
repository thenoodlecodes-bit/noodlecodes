import type { IndustrySlug, ServiceSlug } from "./types";

// Placeholder clients. Wordmarks are set in type until real logos arrive.
export type LogoStyle = "serif" | "grot" | "wide" | "display" | "mono";
export type LogoMark = "dot" | "sq" | "ring" | "half" | "bar";

export type Client = {
  name: string;
  /** Wordmark text, when it differs from the name. */
  logo?: string;
  style: LogoStyle;
  mark?: LogoMark;
  industry: IndustrySlug;
  city: string;
  /** What we built or fixed, in plain words. */
  work: string;
  services: ServiceSlug[];
  since: number;
  /** Slug of their client story in cases.ts, when there is one. */
  story?: string;
};

export const clients: Client[] = [
  { name: "Maison Verde", style: "serif", industry: "retail", city: "Mumbai", work: "Online store, then growth marketing", services: ["development", "digital-marketing"], since: 2023, story: "maison-verde" },
  { name: "Halcyon Health", style: "grot", mark: "dot", industry: "healthcare", city: "Pune", work: "Patient booking app and reminders", services: ["development", "plug-and-play"], since: 2024, story: "halcyon-health" },
  { name: "Onyx Ridge Capital", logo: "Onyx Ridge", style: "wide", industry: "financial-services", city: "Bengaluru", work: "Architecture review and platform rebuild", services: ["consultancy", "development"], since: 2024, story: "onyx-ridge" },
  { name: "Ember & Oak", logo: "EMBER&OAK", style: "display", industry: "hospitality", city: "Gurugram", work: "WhatsApp marketing, tracking and ads", services: ["plug-and-play", "ads-tracking", "digital-marketing"], since: 2024, story: "ember-and-oak" },
  { name: "Aurelian", style: "serif", industry: "retail", city: "Dubai", work: "Server-side tracking and paid media", services: ["ads-tracking", "digital-marketing"], since: 2025, story: "aurelian" },
  { name: "Kestrel Mobility", logo: "Kestrel", style: "mono", mark: "sq", industry: "mobility", city: "Hyderabad", work: "Rider app and live dispatch", services: ["development", "plug-and-play"], since: 2024, story: "kestrel-mobility" },
  { name: "Saffron Table", style: "wide", industry: "hospitality", city: "Bengaluru", work: "Table booking site and guest emails", services: ["development", "plug-and-play"], since: 2025 },
  { name: "Juniper Wealth", style: "serif", industry: "financial-services", city: "Mumbai", work: "Investor app and onboarding", services: ["development"], since: 2025, story: "juniper-wealth" },
  { name: "Vela", style: "grot", mark: "ring", industry: "saas", city: "Pune", work: "Onboarding funnels and product analytics", services: ["plug-and-play", "consultancy"], since: 2025 },
  { name: "Monarch", logo: "MONARCH", style: "display", industry: "retail", city: "Delhi", work: "Festive campaigns and marketplace ads", services: ["digital-marketing"], since: 2023 },
  { name: "Banyan Freight", style: "wide", industry: "mobility", city: "Chennai", work: "Fleet tracking dashboard", services: ["development"], since: 2024 },
  { name: "Sable+Stone", style: "mono", industry: "retail", city: "Jaipur", work: "Store migration and email journeys", services: ["development", "plug-and-play"], since: 2025 },
  { name: "Calder Labs", style: "serif", industry: "saas", city: "Bengaluru", work: "Cloud cost review and architecture call", services: ["consultancy", "development"], since: 2023, story: "calder-labs" },
  { name: "Orrery", logo: "ORRERY", style: "display", industry: "saas", city: "Gurugram", work: "Fractional CTO and first engineering hires", services: ["consultancy"], since: 2024 },
  { name: "Tidewell", style: "mono", mark: "half", industry: "healthcare", city: "Kochi", work: "Clinic dashboard and lab reports", services: ["development"], since: 2025 },
  { name: "Rasa House", style: "serif", industry: "hospitality", city: "Mumbai", work: "Direct ordering site, no aggregator fees", services: ["development", "ads-tracking"], since: 2024 },
  { name: "Noir Atelier", logo: "noir/atelier", style: "grot", industry: "retail", city: "Bengaluru", work: "Lookbook store and Instagram ads", services: ["development", "digital-marketing"], since: 2025 },
  { name: "Aster Clinic", style: "wide", industry: "healthcare", city: "Hyderabad", work: "WhatsApp reminders and reviews", services: ["plug-and-play"], since: 2026 },
  { name: "Linden & Rowe", style: "serif", industry: "financial-services", city: "Gurugram", work: "Loan funnel tracking and consent", services: ["ads-tracking", "development"], since: 2025 },
  { name: "Verity", style: "grot", mark: "bar", industry: "financial-services", city: "Bengaluru", work: "Security and compliance audit", services: ["consultancy"], since: 2026 },
  { name: "Pallas", style: "mono", industry: "saas", city: "Pune", work: "AI support assistant", services: ["development"], since: 2026 },
  { name: "Monsoon", logo: "monsoon.", style: "grot", industry: "retail", city: "Kolkata", work: "Push and email for a fashion app", services: ["plug-and-play"], since: 2025 },
  { name: "Solenne", style: "wide", industry: "hospitality", city: "Goa", work: "Hotel booking engine and tracking", services: ["development", "ads-tracking"], since: 2024 },
  { name: "Arbor & Vale", style: "serif", industry: "mobility", city: "Ahmedabad", work: "Delivery partner app", services: ["development"], since: 2026 },
];

export const clientForStory = (slug: string) => clients.find((c) => c.story === slug);
