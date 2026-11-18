// Shared content types. Everything in src/content is placeholder copy until real work replaces it.

export type ServiceSlug = "development" | "consultancy" | "digital-marketing" | "ads-tracking" | "plug-and-play";
export type IndustrySlug = "retail" | "financial-services" | "healthcare" | "hospitality" | "mobility" | "saas";
export type SolutionSlug = "relay" | "mailroom" | "wave" | "pulse" | "trail";
export type InsightCategory = "Engineering" | "AI" | "Growth" | "Measurement" | "Leadership";

export type Stat = { value: string; label: string };
export type Step = { title: string; text: string };
export type Faq = { q: string; a: string };

export type Service = {
  slug: ServiceSlug;
  name: string;
  /** One line for menus and lists. */
  menu: string;
  /** The problem clients bring, in their words. */
  problem: string;
  intro: string;
  overview: string[];
  capabilities: { title: string; text: string; items: string[] }[];
  stats: Stat[];
  approach: Step[];
  stack: string[];
  faqs: Faq[];
};

export type Solution = {
  slug: SolutionSlug;
  name: string;
  /** What it is, in plain words: "Notification system". */
  kind: string;
  menu: string;
  intro: string;
  features: Step[];
  specs: Stat[];
  channels: string[];
  integrations: string[];
  timeline: string;
  faqs: Faq[];
};

export type Industry = {
  slug: IndustrySlug;
  name: string;
  menu: string;
  intro: string;
  challenges: Step[];
  offerings: (Step & { service: ServiceSlug })[];
  stats: Stat[];
  solutions: SolutionSlug[];
};

export type CaseStudy = {
  slug: string;
  client: string;
  /** What the client does, a few words: "Luxury plant boutique". */
  sector: string;
  industry: IndustrySlug;
  services: ServiceSlug[];
  solutions?: SolutionSlug[];
  location: string;
  duration: string;
  team: string;
  year: number;
  /** Outcome-led title, used for metadata and menus. */
  headline: string;
  /** The question the client brought, in their words. */
  question: string;
  /** The call we made, in one or two sentences. */
  decision: string;
  options: { option: string; chosen?: boolean; why: string }[];
  summary: string;
  stats: Stat[];
  challenge: string[];
  approach: Step[];
  outcome: string[];
  stack: string[];
  quote: { text: string; role: string };
};

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; title: string; text: string };

export type Insight = {
  slug: string;
  title: string;
  dek: string;
  category: InsightCategory;
  /** ISO date, "2026-10-28". */
  date: string;
  minutes: number;
  featured?: boolean;
  services: ServiceSlug[];
  industries?: IndustrySlug[];
  body: Block[];
};

export type Verdict = "default" | "pilot" | "watch" | "avoid";
export type StackArea = "Engineering" | "Data and AI" | "Growth" | "Platforms";

export type StackEntry = {
  name: string;
  area: StackArea;
  verdict: Verdict;
  change?: "new" | "up" | "down";
  note: string;
};

export type Team = "Engineering" | "Design" | "Data and AI" | "Growth" | "Delivery";

export type Role = {
  slug: string;
  title: string;
  team: Team;
  location: string;
  type: "Full-time" | "Contract";
  experience: string;
  summary: string;
  about: string[];
  responsibilities: string[];
  requirements: string[];
  nice: string[];
};
