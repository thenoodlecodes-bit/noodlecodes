import type { StackEntry, Verdict } from "./types";

// Placeholder edition. The verdicts are opinions to review with the team before publishing.
export const stackReport = {
  edition: "Edition 3",
  date: "2026-11-02",
  intro:
    "Every six months we write down what our teams use by default, what we are trying on real projects, what we are watching and what we have stopped recommending. It is opinionated on purpose. Every entry comes from work we have shipped for clients in India and abroad.",
  summary:
    "This edition adds four entries and moves four. The biggest shifts are in measurement and language model work.",
};

export const verdicts: Record<Verdict, { label: string; text: string }> = {
  default: {
    label: "Default",
    text: "What our teams use unless a project gives a good reason not to.",
  },
  pilot: {
    label: "Pilot",
    text: "In use on real client projects, with a team watching closely before it becomes a default.",
  },
  watch: {
    label: "Watch",
    text: "Promising or popular. We are testing it on internal work, or waiting for it to mature.",
  },
  avoid: {
    label: "Avoid",
    text: "Things we have stopped using or advise clients against, with the reason.",
  },
};

export const stack: StackEntry[] = [
  // Engineering
  {
    name: "Next.js",
    area: "Engineering",
    verdict: "default",
    note: "Our default for marketing sites, dashboards and web apps. Static generation and server components cover most of what clients need, and it is easy to hire for in India.",
  },
  {
    name: "Trunk-based development",
    area: "Engineering",
    verdict: "default",
    note: "Short-lived branches merged at least daily, with unfinished work behind feature flags. Releases stay small, and the Friday demo runs on the real build.",
  },
  {
    name: "Flutter",
    area: "Engineering",
    verdict: "default",
    note: "Our first choice for apps with a custom interface on Android and iOS from one codebase. It performs well on the low-cost Android phones many of our clients' users carry.",
  },
  {
    name: "Expo and React Native",
    area: "Engineering",
    verdict: "pilot",
    change: "up",
    note: "Expo's build service and over-the-air updates have removed most of the pain we used to have with React Native. We now pick it when the client's own team already writes React.",
  },
  {
    name: "Contract testing",
    area: "Engineering",
    verdict: "pilot",
    note: "Consumer-driven contracts between an API and its web and mobile clients catch breaking changes before release. Worth the setup once more than one team ships against the same API.",
  },
  {
    name: "Indic language UX",
    area: "Engineering",
    verdict: "pilot",
    change: "new",
    note: "On consumer projects we now test key flows in Hindi and at least one regional language, with real strings. Text runs longer, some scripts need more line height, and users switch languages mid-flow.",
  },
  {
    name: "Server-driven UI",
    area: "Engineering",
    verdict: "watch",
    note: "Lets you change app screens without a store release. Useful for home screens that change weekly, but it adds a second rendering system to maintain.",
  },
  {
    name: "Bun",
    area: "Engineering",
    verdict: "watch",
    note: "Fast installs and test runs. We use it for scripts and tooling, and not yet as the production runtime for client services.",
  },
  {
    name: "End-to-end tests for every feature",
    area: "Engineering",
    verdict: "avoid",
    note: "Large browser test suites get slow and flaky, and teams learn to ignore them. We write Playwright tests for the critical paths, such as signup and checkout, and test the rest at lower levels.",
  },
  {
    name: "Microservices for small teams",
    area: "Engineering",
    verdict: "avoid",
    note: "A team of five does not need twelve services. We start with a modular monolith and split a service out only when it has a different scaling or release need.",
  },

  // Data and AI
  {
    name: "Postgres",
    area: "Data and AI",
    verdict: "default",
    note: "Our default database. With JSONB, full text search and extensions like pgvector, it covers most products for years before anything else is needed.",
  },
  {
    name: "LLM eval harnesses",
    area: "Data and AI",
    verdict: "default",
    change: "up",
    note: "No language model feature ships without a test set of real questions and graded answers. It turns prompt changes from opinions into measurements, and it now starts in week one of every AI project.",
  },
  {
    name: "pgvector",
    area: "Data and AI",
    verdict: "pilot",
    note: "Vector search inside the Postgres you already run. For retrieval over a few million chunks or fewer, it saves operating a separate vector database.",
  },
  {
    name: "dbt",
    area: "Data and AI",
    verdict: "pilot",
    note: "Metric definitions in version control, reviewed like code and tested on every run. We use it wherever a client's reporting depends on more than one data source.",
  },
  {
    name: "Model routing",
    area: "Data and AI",
    verdict: "pilot",
    change: "new",
    note: "Simple, high-volume questions go to a small model or a cached answer, and only hard ones reach a large model. On support assistants it has cut cost per conversation by more than half without lowering eval scores.",
  },
  {
    name: "Bhashini",
    area: "Data and AI",
    verdict: "pilot",
    note: "The government's platform for Indian language translation and speech. Quality varies by language pair, so we test it per language, but it covers gaps that general models still have.",
  },
  {
    name: "Account Aggregator framework",
    area: "Data and AI",
    verdict: "pilot",
    note: "Consent-based sharing of financial data through RBI-licensed account aggregators. For lending and wealth products it replaces uploaded PDF bank statements with structured data the user approves.",
  },
  {
    name: "Agents with write access",
    area: "Data and AI",
    verdict: "watch",
    note: "Agents that read, search and summarise are working well for us. Agents that take actions in production systems, such as issuing refunds, still need a person to approve each step.",
  },
  {
    name: "Self-hosted open-weight models",
    area: "Data and AI",
    verdict: "watch",
    note: "The right call when data cannot leave your infrastructure. Running costs and operations work are higher than most teams expect, so we start with hosted models unless there is a clear reason.",
  },
  {
    name: "Fine-tuning as a first step",
    area: "Data and AI",
    verdict: "avoid",
    note: "Most of the gains teams hope for from fine-tuning come faster from better retrieval, clearer prompts and a good eval set. We fine-tune only when evals show a gap those cannot close.",
  },

  // Growth
  {
    name: "Server-side tagging",
    area: "Growth",
    verdict: "default",
    note: "Running Google Tag Manager in a server container gives cleaner data, fewer blocked tags and control over what leaves your site. It is part of every tracking setup we deliver.",
  },
  {
    name: "Meta Conversions API",
    area: "Growth",
    verdict: "default",
    note: "Purchases and leads sent from your server, with an event ID so Meta can drop the duplicate from the pixel. Every Meta advertiser we work with gets this.",
  },
  {
    name: "Google enhanced conversions",
    area: "Growth",
    verdict: "default",
    note: "Hashed first-party data sent with each conversion, with the user's consent, improves match rates in Google Ads. Quick to add once server-side tagging is in place.",
  },
  {
    name: "Consent mode v2",
    area: "Growth",
    verdict: "default",
    note: "Required for EEA traffic if you want Google's audience and measurement features, and a sensible model for Indian users under the DPDP Act. Set consent once in the tag manager and make every tag read from it.",
  },
  {
    name: "WhatsApp Cloud API",
    area: "Growth",
    verdict: "pilot",
    note: "Direct access to the WhatsApp Business Platform from Meta. We are moving clients off reseller dashboards onto it wherever messages need to connect to an order, booking or support system.",
  },
  {
    name: "Geo holdout tests",
    area: "Growth",
    verdict: "pilot",
    change: "new",
    note: "Pause a channel in a few cities and compare against similar cities where it keeps running. It is the most honest answer to whether a channel earns its budget, and India's city-level data makes it practical.",
  },
  {
    name: "Marketing mix modelling for mid-size budgets",
    area: "Growth",
    verdict: "watch",
    note: "Open-source tools have made it cheaper, but it needs two years of clean spend and sales data to say much. Under about ₹1 crore a month in spend, we start with holdout tests.",
  },
  {
    name: "Programmatic SEO pages",
    area: "Growth",
    verdict: "watch",
    change: "down",
    note: "Templated pages at scale still work when each one answers a real search with real data. Thin pages built only to rank are being filtered out quickly, so we moved this down from pilot.",
  },
  {
    name: "Last-click attribution as the main number",
    area: "Growth",
    verdict: "avoid",
    note: "It credits the final click and ignores everything before it. Fine as one input, but it should never be the number that sets budgets.",
  },
  {
    name: "Bought or scraped WhatsApp lists",
    area: "Growth",
    verdict: "avoid",
    note: "It breaks WhatsApp's opt-in rules and gets numbers restricted fast. Grow the list from checkout, order updates and support conversations instead.",
  },

  // Platforms
  {
    name: "Infrastructure as code",
    area: "Platforms",
    verdict: "default",
    note: "Every environment defined in Terraform or OpenTofu from day one and reviewed like any other code. We choose between them based on the client's existing setup and licensing preference.",
  },
  {
    name: "Firebase Cloud Messaging",
    area: "Platforms",
    verdict: "default",
    note: "The delivery layer for push on Android, iOS and the web in all our apps. Scheduling, caps and quiet hours live in our own service in front of it.",
  },
  {
    name: "UPI intent flows",
    area: "Platforms",
    verdict: "default",
    note: "On mobile, open the user's UPI app directly instead of asking them to type a UPI ID. Fewer steps and fewer failed payments.",
  },
  {
    name: "DPDP consent records",
    area: "Platforms",
    verdict: "default",
    change: "new",
    note: "Store what each user agreed to, which version of the notice they saw, when and where. It is the evidence you need under the DPDP Act, cheap to build early and painful to add later.",
  },
  {
    name: "OpenTelemetry",
    area: "Platforms",
    verdict: "pilot",
    change: "up",
    note: "Vendor-neutral traces, metrics and logs. Instrument once and send the data to whichever backend the client already pays for. Moved up after a year without surprises on three projects.",
  },
  {
    name: "UPI Autopay",
    area: "Platforms",
    verdict: "pilot",
    note: "Recurring payment mandates through UPI. For Indian subscription products we now offer it next to card mandates, and most major payment gateways support it.",
  },
  {
    name: "Cloudflare Workers",
    area: "Platforms",
    verdict: "watch",
    note: "Fast edge functions with a generous free tier. We use them for redirects and A/B routing, and are watching how they hold up for heavier backend work.",
  },
  {
    name: "ONDC",
    area: "Platforms",
    verdict: "watch",
    note: "The open network is growing in food, grocery and mobility. Worth a pilot for sellers who already have logistics in place, but integration and reconciliation still take real work.",
  },
  {
    name: "DigiLocker",
    area: "Platforms",
    verdict: "watch",
    note: "Lets users share verified documents such as driving licences with consent, which can remove manual KYC steps. Integration access and approvals take time, so plan for them early.",
  },
  {
    name: "Kubernetes for a five person team",
    area: "Platforms",
    verdict: "avoid",
    note: "The operating overhead outweighs the benefits at this size. Managed container services cover most needs with far less work.",
  },
  {
    name: "Multi-cloud by default",
    area: "Platforms",
    verdict: "avoid",
    note: "Running on two clouds doubles the operations work for a resilience gain most products do not need. Pick one provider and plan for region failover if you need it.",
  },
];
