import type { Service, ServiceSlug } from "./types";

// Placeholder copy. Numbers refer to placeholder case studies in cases.ts.
export const services: Service[] = [
  {
    slug: "development",
    name: "Product development",
    menu: "Websites, apps, dashboards and AI features",
    problem: "We have a launch date in March and half an app.",
    title: "Products people use every day, built to keep working.",
    intro:
      "We design and build websites, mobile apps, dashboards and AI features. Small senior teams, a working demo every Friday, and code you own from the first commit.",
    overview: [
      "Most clients come to us with a deadline and a half-built product. Some come with a spreadsheet and a hunch. Either way, we start by finding the smallest version worth shipping, then we build it properly.",
      "Every team has a tech lead who writes code, a designer who has shipped real products and engineers with at least five years behind them. Nobody learns on your budget, and nothing gets handed from a sales team to a delivery team.",
      "We use proven tools where reliability matters and newer ones where they earn their place. Our Stack Report lists what we use and why.",
    ],
    capabilities: [
      {
        title: "Websites",
        text: "Marketing sites and storefronts that load fast, rank well and are easy for your team to edit.",
        items: ["Next.js and headless CMS builds", "Shopify and custom storefronts", "Core Web Vitals and technical SEO", "Hindi and regional language sites"],
      },
      {
        title: "Mobile apps",
        text: "iOS and Android apps from one codebase, with native code where it counts.",
        items: ["Flutter and React Native", "Offline modes for patchy networks", "UPI and payment gateway flows", "App Store and Play Store releases"],
      },
      {
        title: "Dashboards and internal tools",
        text: "Tools for the people who run your business: operations, finance, support and field teams.",
        items: ["Admin panels and back offices", "Reporting and KPI dashboards", "Role-based access and audit logs", "Data pipelines into BigQuery or Postgres"],
      },
      {
        title: "AI features",
        text: "Language model features with tests, guardrails and a cost per answer you can live with.",
        items: ["Search and answers over your documents", "Support and sales assistants", "Document extraction and classification", "Hindi and regional language support"],
      },
    ],
    stats: [
      { value: "40+", label: "products shipped" },
      { value: "Every Friday", label: "a working demo" },
      { value: "100%", label: "of the code and IP is yours" },
    ],
    approach: [
      { title: "Discover", text: "One to two weeks with your team and your users. We agree the problem, the constraints and the smallest release worth shipping." },
      { title: "Design", text: "A clickable prototype, tested with real users before anyone writes production code." },
      { title: "Build", text: "Two week cycles with a demo every Friday and a staging link that always works." },
      { title: "Launch and run", text: "Release, monitoring and a calm first month. Then a clean handover, or we stay on to keep improving it." },
    ],
    stack: ["Next.js", "React", "TypeScript", "Flutter", "React Native", "Node.js", "Go", "Python", "Postgres", "Redis", "BigQuery", "AWS", "Google Cloud"],
    faqs: [
      { q: "How long does a first release take?", a: "Most first releases take 8 to 14 weeks. We agree the scope in the first two weeks and show working software every Friday after that." },
      { q: "Do we own the code?", a: "Yes. The repository lives in your GitHub or GitLab from day one, and every line in it is yours." },
      { q: "Can you work alongside our in-house team?", a: "Often. We pair with your engineers, follow your conventions and leave documentation behind so your team can carry on without us." },
      { q: "Do you take fixed price projects?", a: "For well defined scopes, yes. For products that will change as you learn, we work as a dedicated team on a monthly fee." },
    ],
  },
  {
    slug: "consultancy",
    name: "Tech consultancy",
    menu: "Architecture, audits, modernisation and fractional CTO",
    problem: "Our engineers want a rewrite. Is that the right call?",
    title: "Straight answers on expensive technical decisions.",
    intro:
      "Engineers who have built and run large systems help you choose a stack, audit what you have, plan a migration or hire your first team.",
    overview: [
      "Leadership teams often face technical decisions with crore-sized consequences and nobody in the room without a stake in the answer. We give a straight opinion, with the evidence behind it.",
      "Our consultants still write production code. That keeps the advice practical: we tell you what a plan costs to build and run, not only how it looks on a slide.",
      "Engagements are short and fixed. You get a written report, a plan your team can act on and, if you want it, our help carrying it out.",
    ],
    capabilities: [
      {
        title: "Architecture and code audits",
        text: "A two to three week review of your code, infrastructure, security and delivery, with a ranked list of what to fix first.",
        items: ["Code quality and test coverage", "Security and data protection", "Scaling limits and failure points", "Release speed and process"],
      },
      {
        title: "Modernisation",
        text: "Plans for moving off an ageing system one piece at a time, without a risky big bang rewrite.",
        items: ["Monolith to modules", "Step by step migrations", "Database and cloud moves", "Legacy system integration"],
      },
      {
        title: "Cloud and cost",
        text: "Find out what your cloud bill pays for, and stop paying for what it should not.",
        items: ["AWS and Google Cloud reviews", "Right-sizing and committed use", "Observability and on-call", "Backup and recovery plans"],
      },
      {
        title: "Fractional CTO and hiring",
        text: "Senior technical leadership a few days a month, until you are ready to hire full time.",
        items: ["Roadmaps and build or buy calls", "Hiring plans and interview loops", "Vendor and agency reviews", "Technical due diligence for investors"],
      },
    ],
    stats: [
      { value: "6 months", label: "of rewrite avoided for one client" },
      { value: "41%", label: "cut from one client's cloud bill" },
      { value: "3 weeks", label: "for a typical audit" },
    ],
    approach: [
      { title: "Listen", text: "Interviews with leadership, engineering and the people who use the system every day." },
      { title: "Look", text: "We read the code, the infrastructure, the incident history and the bills." },
      { title: "Report", text: "A written report, ranked by impact and effort, walked through with your team." },
      { title: "Act", text: "We help carry out the plan, or hand it to your team with everything they need." },
    ],
    stack: ["AWS", "Google Cloud", "Kubernetes", "Terraform", "OpenTelemetry", "Postgres", "Kafka", "Grafana"],
    faqs: [
      { q: "What do we get at the end of an audit?", a: "A written report, a ranked list of recommendations with rough costs, and a working session with your team to go through it." },
      { q: "Will you push us to rebuild with you?", a: "No. About half of our audits recommend keeping most of what exists. We are paid for the audit, not for the rewrite." },
      { q: "Do you do technical due diligence for investors?", a: "Yes. We review code, architecture, team and security for investors and acquirers, usually within ten working days." },
      { q: "How does fractional CTO work?", a: "A named senior engineer works with you two to six days a month, joins leadership meetings and owns technical decisions until you hire." },
    ],
  },
  {
    slug: "digital-marketing",
    name: "Digital marketing",
    menu: "Performance marketing, SEO, content and CRM",
    problem: "We spend ₹20 lakh a month on ads and can't say what it earns.",
    title: "Marketing that answers to the numbers.",
    intro:
      "Paid campaigns, search, content and lifecycle marketing, run by people who also understand the product and the data underneath it.",
    overview: [
      "Most agencies report clicks and impressions. We report revenue, cost per customer and payback period, because those are the numbers your finance team checks.",
      "We also build software and tracking, so our marketers can change a landing page, fix a broken event or launch a new flow in days, without waiting on another vendor.",
      "We work best with brands spending ₹5 lakh to ₹1 crore a month on growth who want one partner that can see the whole funnel.",
    ],
    capabilities: [
      {
        title: "Performance marketing",
        text: "Search, social and marketplace ads, managed against cost per customer rather than cost per click.",
        items: ["Google, Meta and LinkedIn ads", "Amazon and quick commerce ads", "Creative testing programmes", "Budget pacing and reporting"],
      },
      {
        title: "Search and content",
        text: "Organic traffic that compounds, built on technical SEO and writing people want to read.",
        items: ["Technical SEO audits", "Content strategy and writing", "Programmatic landing pages", "Local and regional search"],
      },
      {
        title: "Lifecycle and CRM",
        text: "Email, WhatsApp and push journeys that bring customers back without wearing them out.",
        items: ["Onboarding and win-back flows", "Segmentation and personalisation", "WhatsApp campaigns", "Retention reporting"],
      },
      {
        title: "Conversion",
        text: "Fewer people dropping off between the ad and the order.",
        items: ["Landing page design and builds", "A/B testing", "Checkout and form fixes", "Cash on delivery to prepaid nudges"],
      },
    ],
    stats: [
      { value: "3.4x", label: "return on ad spend for a restaurant group" },
      { value: "-31%", label: "cost per sale for a watchmaker" },
      { value: "+112%", label: "online sales for a D2C store" },
    ],
    approach: [
      { title: "Audit", text: "Accounts, tracking, funnel and creative. We find where money leaks before we spend more of it." },
      { title: "Plan", text: "A 90 day plan with targets agreed with your finance team, not just your marketing team." },
      { title: "Run", text: "Weekly experiments, fortnightly reviews and creative that gets refreshed before it tires." },
      { title: "Report", text: "One dashboard: spend, revenue, cost per customer and payback, updated daily." },
    ],
    stack: ["Google Ads", "Meta Ads", "LinkedIn Ads", "GA4", "Search Console", "Klaviyo", "MoEngage", "Looker Studio", "Shopify"],
    faqs: [
      { q: "Do you need to fix our tracking first?", a: "Usually, yes. We check it in the first week. If conversions are not measured properly, every decision after that is a guess." },
      { q: "Is there a minimum budget?", a: "We work with brands spending at least ₹5 lakh a month on media. Below that, a smaller specialist team is usually better value." },
      { q: "Who owns the ad accounts?", a: "You do. We work inside your accounts with access you can remove at any time." },
      { q: "How do you charge?", a: "A monthly fee based on scope, never a percentage of ad spend. We do not earn more when you spend more." },
    ],
  },
  {
    slug: "ads-tracking",
    name: "Ads tracking setup",
    menu: "Server-side tracking, conversion APIs, GA4 and consent",
    problem: "Meta says 412 orders. Shopify says 268.",
    title: "Know which ad paid for which order.",
    intro:
      "Tracking that survives ad blockers, cookie limits and app updates, so the numbers in your ad accounts match the money in your bank.",
    overview: [
      "Browser pixels now miss a large share of conversions. Ad platforms fill the gap with modelled data, then spend your budget against it. Bad data in means bad bidding out.",
      "We move tracking to the server, connect conversion APIs, set up consent properly and rebuild GA4 so that marketing, product and finance read from the same source.",
      "Most setups take two to four weeks and pay for themselves within the first month of better bidding.",
    ],
    capabilities: [
      {
        title: "Server-side tracking",
        text: "Events sent from your server as well as the browser, so they are complete and under your control.",
        items: ["Server-side Google Tag Manager", "First-party domains and cookies", "Event deduplication", "Data layer design"],
      },
      {
        title: "Conversion APIs",
        text: "Send real orders, leads and offline sales back to the platforms that bid on them.",
        items: ["Meta Conversions API", "Google enhanced conversions", "LinkedIn conversions API", "Offline and CRM conversions"],
      },
      {
        title: "Analytics",
        text: "GA4 and product analytics set up around the questions your team actually asks.",
        items: ["GA4 rebuilds and audits", "BigQuery exports", "Product analytics with PostHog or Mixpanel", "App tracking with Firebase"],
      },
      {
        title: "Consent and privacy",
        text: "Tracking that respects consent and is ready for the DPDP Act.",
        items: ["Consent banners and records", "Google consent mode v2", "Hashing and data minimisation", "Retention rules"],
      },
    ],
    stats: [
      { value: "96%", label: "of orders matched to a source for a watchmaker" },
      { value: "2 to 4 weeks", label: "for a typical setup" },
      { value: "1", label: "source of truth for every team" },
    ],
    approach: [
      { title: "Audit", text: "We list every tag, pixel and event, then compare what they report against real orders." },
      { title: "Design", text: "A tracking plan: every event, its properties, where it fires and who owns it." },
      { title: "Build", text: "Server container, conversion APIs, consent and dashboards, tested against live orders." },
      { title: "Monitor", text: "Alerts when events drop, double count or drift away from your sales data." },
    ],
    stack: ["Google Tag Manager", "Server-side GTM", "GA4", "BigQuery", "Meta Conversions API", "Firebase", "PostHog", "Looker Studio"],
    faqs: [
      { q: "Will this work with Shopify, WordPress or a custom site?", a: "Yes. We have set this up on Shopify, WooCommerce, custom Next.js stores and native apps." },
      { q: "Do we need a developer on our side?", a: "No. We make the code changes ourselves, or work with your developers if you prefer." },
      { q: "What does server-side tracking cost to run?", a: "Hosting a server container usually costs ₹3,000 to ₹25,000 a month, depending on traffic." },
      { q: "Is this compliant with the DPDP Act?", a: "We build consent and data minimisation into the setup and document it. Your legal team should still review your privacy notice." },
    ],
  },
  {
    slug: "plug-and-play",
    name: "Plug and play solutions",
    menu: "Notifications, email, WhatsApp, push and behaviour analytics",
    problem: "We need WhatsApp, push and email without three more vendors.",
    title: "Ready-built modules, live in your product in days.",
    intro:
      "Five modules we have built, tested and run in production for years. We install them in your cloud, connect your data and hand you the keys.",
    overview: [
      "Every product eventually needs to send notifications, run email and WhatsApp campaigns, push to phones and understand what users do. Building these from scratch takes months and rarely gets the edge cases right.",
      "Our modules are production code that we maintain. We install them in your cloud account, connect them to your data and customise the parts that matter to your business.",
      "You get the speed of a SaaS tool without per-message fees eating your margin, and your customer data stays in your own database.",
    ],
    capabilities: [
      {
        title: "Installed in your cloud",
        text: "The modules run in your AWS, Google Cloud or Azure account, next to the rest of your product.",
        items: ["Your database and your logs", "No customer data leaves your account", "Deployed with Terraform"],
      },
      {
        title: "Connected to your data",
        text: "We wire each module to your users, orders and events so messages are relevant from day one.",
        items: ["User and event sync", "Order and CRM hooks", "Shared segments across modules"],
      },
      {
        title: "Customised where it counts",
        text: "Templates, rules, languages and dashboards shaped to your business, not a generic setup.",
        items: ["Your brand and tone", "English, Hindi and regional languages", "Custom rules and triggers"],
      },
      {
        title: "Maintained by us",
        text: "Updates, security patches and support, with a named engineer who knows your setup.",
        items: ["Monthly updates", "Uptime monitoring", "Support on Slack or WhatsApp"],
      },
    ],
    stats: [
      { value: "5 to 10 days", label: "to go live" },
      { value: "12", label: "products running our modules" },
      { value: "₹0", label: "per-message platform fees" },
    ],
    approach: [
      { title: "Pick", text: "Choose the modules and channels you need. Most teams start with one." },
      { title: "Connect", text: "We install in your cloud and connect your users, events and orders." },
      { title: "Customise", text: "Templates, rules, languages and dashboards, set up with your team." },
      { title: "Run", text: "Monitoring, monthly updates and support from engineers who know your setup." },
    ],
    stack: ["Node.js", "Go", "Postgres", "Redis", "ClickHouse", "Firebase Cloud Messaging", "WhatsApp Cloud API", "Amazon SES"],
    faqs: [
      { q: "Is this a SaaS product?", a: "No. The code runs in your cloud account and the data stays in your database. We license and maintain it." },
      { q: "Can we use just one module?", a: "Yes. Most clients start with one, usually notifications or WhatsApp, and add others later." },
      { q: "What happens if we stop working with you?", a: "You keep a perpetual licence to the version you run, with full source code." },
      { q: "Do you charge per message?", a: "No. You pay WhatsApp, email and SMS providers directly at their rates. Our fee is fixed." },
    ],
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function service(slug: ServiceSlug): Service {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);
  return s;
}

export const BUDGETS = ["Under ₹10 lakh", "₹10 to 40 lakh", "₹40 lakh to ₹1 crore", "Above ₹1 crore"] as const;
export type Budget = (typeof BUDGETS)[number];
