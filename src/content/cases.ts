import type { CaseStudy } from "./types";

// Placeholder client stories. Replace with real work, real numbers and real screenshots.
export const cases: CaseStudy[] = [
  {
    slug: "maison-verde",
    client: "Maison Verde",
    sector: "Luxury plant boutique",
    industry: "retail",
    services: ["development", "digital-marketing"],
    location: "Mumbai",
    duration: "9 weeks",
    team: "5 people",
    year: 2024,
    headline: "From Instagram DMs to ₹1.8 crore in online sales",
    question: "Do we need an app, or will a good store do?",
    decision: "A store. A Shopify build shaped around how they already sold, with care reminder emails doing the job an app would.",
    options: [
      { option: "A custom mobile app", why: "Most buyers came once or twice a year. An app would cost about ₹25 lakh and sit unopened." },
      { option: "A marketplace listing", why: "Quick to start, but the brand and the customer data would belong to the marketplace." },
      { option: "A Shopify store with email flows", chosen: true, why: "Live in nine weeks, easy for the team to run, and email reaches repeat buyers without an install." },
    ],
    summary:
      "A Mumbai plant boutique was selling through DMs and a shared spreadsheet. We built their store and the email flows that bring customers back.",
    stats: [
      { value: "₹1.8 cr", label: "online sales in year one" },
      { value: "2.8x", label: "revenue from email" },
      { value: "9 wks", label: "from kickoff to launch" },
    ],
    challenge: [
      "Maison Verde sells rare plants, planters and care visits to homes and offices across Mumbai. Until 2024, every order came through Instagram DMs, one WhatsApp number and a Google Sheet that three people edited at once.",
      "Orders went missing on busy weekends. Customers asked the same care questions again and again. The team knew repeat buyers were their best customers, but the only way to reach them was to post and hope.",
      "They wanted a store that felt as considered as their Bandra showroom, and a way to sell to the same people twice.",
    ],
    approach: [
      {
        title: "Read the real orders",
        text: "We went through six months of DMs and order sheets with the team. Most questions were about light, size and delivery slots, so those became filters and product fields instead of an FAQ page.",
      },
      {
        title: "Build the store on Shopify",
        text: "A custom theme with a plant care finder, delivery slots by Mumbai pin code and gift notes. Razorpay for UPI and cards, with cash on delivery limited to repeat customers.",
      },
      {
        title: "Set up the email flows",
        text: "Welcome, abandoned cart and care reminder flows in Klaviyo. Care reminders send watering and repotting tips timed to each plant a customer bought.",
      },
      {
        title: "Write pages that rank",
        text: "Product copy, category pages and a care guide library written for searches like 'low light plants for Mumbai flats'.",
      },
    ],
    outcome: [
      "The store launched nine weeks after kickoff. In its first year it brought in ₹1.8 crore, more than double what the DM process handled at its best, and the team stopped losing weekend orders.",
      "Email now drives close to a third of online revenue, most of it from the care reminders. Customers who receive them are twice as likely to buy again within 90 days. Maison Verde runs the store themselves and calls us for new features about once a quarter.",
    ],
    stack: ["Shopify", "Liquid", "Razorpay", "Klaviyo", "Google Analytics 4", "Shiprocket"],
    quote: {
      text: "They spent the first week reading our DMs. The store works the way we actually sell.",
      role: "Founder, Maison Verde",
    },
  },
  {
    slug: "onyx-ridge",
    client: "Onyx Ridge Capital",
    sector: "Investment firm",
    industry: "financial-services",
    services: ["consultancy", "development"],
    location: "Bengaluru",
    duration: "14 weeks",
    team: "4 people",
    year: 2025,
    headline: "An architecture audit that saved a six month rewrite",
    question: "Should we rebuild the investor portal from scratch?",
    decision: "No. Keep the core, replace the reporting layer and fix the twelve queries doing most of the damage.",
    options: [
      { option: "A full rewrite on a new stack", why: "Six months of parallel systems and a migration of eleven years of fund data, for problems that lived in one layer." },
      { option: "Bigger servers", why: "Would hide the slow reports for a quarter, then cost more every month after." },
      { option: "Rebuild only the reporting layer", chosen: true, why: "Fixes what investors actually feel, keeps what already works, and ships in weeks." },
    ],
    summary:
      "Onyx Ridge's investor portal was slow and a full rewrite was already budgeted. A two week audit found a cheaper path, and then we built it.",
    stats: [
      { value: "6 mo", label: "of rewrite avoided" },
      { value: "4x", label: "faster investor reports" },
      { value: "0", label: "hours of downtime" },
    ],
    challenge: [
      "Onyx Ridge Capital manages funds for about 1,200 investors. Their portal, built in 2017, took up to four minutes to generate a quarterly statement and went down at the start of every report cycle.",
      "An agency had quoted a full rewrite: six months and a large fixed fee. The CTO wanted a second opinion before signing, from people who would also be willing to do the build.",
    ],
    approach: [
      {
        title: "Audit for two weeks",
        text: "We read the code, traced the slowest requests and sat with the operations team through a report run. Eighty percent of the load came from three queries and one PDF job.",
      },
      {
        title: "Write a plan with options",
        text: "We gave the board three costed paths: rewrite, replatform, or fix the core and rebuild the front end. We recommended the third and explained why.",
      },
      {
        title: "Fix the core in place",
        text: "Rewrote and indexed the heavy queries, moved PDF generation to a queue, and cached statement data that only changes once a day.",
      },
      {
        title: "Ship the new dashboard",
        text: "A new investor dashboard in Next.js on top of the existing API, with holdings, capital calls and documents in one place. Released to investors in batches.",
      },
    ],
    outcome: [
      "Statements now generate in under a minute, and the portal stayed up through the next three report cycles with nobody on call. The new dashboard went live in week fourteen with no downtime.",
      "Onyx Ridge spent roughly a third of the rewrite budget. The audit report became their engineering roadmap for the following year, and their in-house team now owns the codebase.",
    ],
    stack: ["Node.js", "PostgreSQL", "Redis", "BullMQ", "Next.js", "AWS", "Datadog"],
    quote: {
      text: "The audit alone saved us a six month rewrite. The build after it was the easy part.",
      role: "CTO, Onyx Ridge Capital",
    },
  },
  {
    slug: "halcyon-health",
    client: "Halcyon Health",
    sector: "Physiotherapy clinics",
    industry: "healthcare",
    services: ["development", "plug-and-play"],
    solutions: ["relay"],
    location: "Pune",
    duration: "16 weeks",
    team: "6 people",
    year: 2025,
    headline: "Booking a physio session went from six minutes to forty seconds",
    question: "Why do patients give up halfway through booking?",
    decision: "Booking asked for nine fields before showing a single slot. We cut it to three taps and moved reminders to WhatsApp and SMS.",
    options: [
      { option: "Staff a call centre", why: "More people working around a broken flow, at a cost that grows with every new clinic." },
      { option: "An off-the-shelf booking tool", why: "Could not handle physiotherapists shared across clinics, or the way session packages are sold." },
      { option: "Rebuild booking around open slots", chosen: true, why: "Patients see real times first and confirm in three taps, with reminders where they already read messages." },
    ],
    summary:
      "Fourteen clinics and one booking flow that patients actually finish. We built Halcyon's patient app, clinic dashboard and reminders.",
    stats: [
      { value: "40 sec", label: "average time to book" },
      { value: "-38%", label: "missed appointments" },
      { value: "14", label: "clinics on one system" },
    ],
    challenge: [
      "Halcyon Health runs 14 physiotherapy clinics across Pune and Pimpri-Chinchwad. Patients booked by phone, and front desk staff juggled three calendars per clinic. A typical booking took six minutes, when someone picked up.",
      "Missed appointments were the bigger cost. Around one in five sessions went unused, and the clinics had no reliable way to remind patients or fill the gap.",
    ],
    approach: [
      {
        title: "Shadow the front desk",
        text: "Two of our team spent three days at the Baner and Kothrud clinics. Most calls were rebookings, so rebooking became one tap in the app.",
      },
      {
        title: "Build the patient app",
        text: "A React Native app for iOS and Android with booking, rebooking, UPI payments and exercise plans from the physio. Marathi and Hindi alongside English.",
      },
      {
        title: "Build the clinic dashboard",
        text: "A web dashboard with live schedules for all 14 clinics, physio availability and a waitlist that fills cancelled slots on its own.",
      },
      {
        title: "Plug in Relay",
        text: "Our notification system sends SMS, WhatsApp and push reminders 24 hours and 2 hours before each session, with a one tap reschedule link.",
      },
    ],
    outcome: [
      "Patients now book in about 40 seconds, and 70% of bookings come through the app. Front desk staff spend their time with patients in the clinic instead of on the phone.",
      "Missed appointments dropped 38% in the first six months, mostly thanks to the two hour reminder and the waitlist. Halcyon opened two more clinics in 2026 on the same system without adding front desk staff.",
    ],
    stack: ["React Native", "TypeScript", "NestJS", "PostgreSQL", "Razorpay", "Firebase Cloud Messaging"],
    quote: {
      text: "A demo every Friday for four months. We never once had to ask what was happening.",
      role: "Director, Halcyon Health",
    },
  },
  {
    slug: "ember-and-oak",
    client: "Ember & Oak",
    sector: "Restaurant group",
    industry: "hospitality",
    services: ["plug-and-play", "ads-tracking", "digital-marketing"],
    solutions: ["wave"],
    location: "Gurugram",
    duration: "12 weeks",
    team: "4 people",
    year: 2025,
    headline: "Filling Tuesday nights with WhatsApp, and proving it paid",
    question: "Can WhatsApp fill weeknights without annoying regulars?",
    decision: "Yes, with opt-in only, two messages a week at most, and every booking tracked back to the message that caused it.",
    options: [
      { option: "Bulk SMS blasts", why: "Cheap per message, but low response and no way to book from the message itself." },
      { option: "Bigger weeknight discounts", why: "Would fill tables by giving away the margin that made them worth filling." },
      { option: "Opt-in WhatsApp with booking replies", chosen: true, why: "Guests book inside the chat, and conversions flow back to Meta and Google so the ads learn." },
    ],
    summary:
      "A restaurant group with packed weekends and empty weeknights. WhatsApp campaigns and clean ad tracking turned that around in one quarter.",
    stats: [
      { value: "3.4x", label: "return on ad spend" },
      { value: "+46%", label: "weeknight covers" },
      { value: "11 days", label: "to go live on WhatsApp" },
    ],
    challenge: [
      "Ember & Oak runs six restaurants across Gurugram and South Delhi. Fridays and Saturdays were booked out weeks ahead. Monday to Thursday, tables sat empty, and the marketing budget went into Instagram ads nobody could tie to a single booking.",
      "They had 40,000 past guests in their reservation system and no way to talk to them. Email open rates were under 10%, but almost every guest had shared a phone number.",
    ],
    approach: [
      {
        title: "Plug in Wave",
        text: "Our WhatsApp marketing system went live in 11 days, connected to their reservation system. Guests opt in at booking confirmation, with consent text written for the DPDP Act.",
      },
      {
        title: "Run weeknight campaigns",
        text: "Chef's table nights, early dinner menus and birthday offers, sent by outlet and by visit history. Replies go straight to a booking flow inside WhatsApp.",
      },
      {
        title: "Fix the tracking",
        text: "Meta Conversions API and Google enhanced conversions, fed by real reservations instead of page views. For the first time, each campaign showed bookings and covers.",
      },
      {
        title: "Move budget to what worked",
        text: "With real numbers, we cut two audiences that brought clicks and no tables, and moved the spend into retargeting past guests near each outlet.",
      },
    ],
    outcome: [
      "Weeknight covers rose 46% across the group over the quarter. WhatsApp campaigns average a 62% read rate and drive about a fifth of all weeknight bookings.",
      "Paid ads now return 3.4 times their spend, measured against real reservations. The marketing team reviews one dashboard every Monday and plans the week's campaigns from it.",
    ],
    stack: [
      "WhatsApp Business Platform",
      "Meta Conversions API",
      "Server-side Google Tag Manager",
      "Google Analytics 4",
      "BigQuery",
      "Looker Studio",
    ],
    quote: {
      text: "Our WhatsApp campaigns fill Tuesday nights now, and we can show the owners exactly how.",
      role: "Head of growth, Ember & Oak",
    },
  },
  {
    slug: "kestrel-mobility",
    client: "Kestrel Mobility",
    sector: "EV ride app",
    industry: "mobility",
    services: ["development", "plug-and-play"],
    solutions: ["pulse", "trail"],
    location: "Hyderabad",
    duration: "10 weeks",
    team: "5 people",
    year: 2025,
    headline: "Getting first-time riders to come back for a second trip",
    question: "Why don't first-time riders take a second trip?",
    decision: "Behaviour data showed riders dropping at payment on their second trip. We fixed that flow first, then timed pushes to each rider's habits.",
    options: [
      { option: "A bigger first-ride discount", why: "Brought in more first rides, not more second ones." },
      { option: "A daily push to every user", why: "Opens were already falling. More volume would have taught people to mute the app." },
      { option: "Find the drop-off, then nudge", chosen: true, why: "Fixing the second-trip payment flow and sending pushes at each rider's usual hour moved weekly riders, not just opens." },
    ],
    summary:
      "Kestrel's EV ride app had strong downloads and weak repeat use. Timed push, behaviour analytics and a rebuilt onboarding fixed the leak.",
    stats: [
      { value: "+27%", label: "weekly active riders" },
      { value: "2.1x", label: "push open rate" },
      { value: "10 wks", label: "from kickoff to release" },
    ],
    challenge: [
      "Kestrel Mobility runs electric bike taxis and cabs in Hyderabad. Marketing was working: 15,000 new downloads a month. But only one in four new riders took a second trip within 30 days.",
      "The team had theories and no data. Push notifications went to everyone at 7pm, and riders were muting them. Nobody could say where new users dropped off in the app.",
    ],
    approach: [
      {
        title: "Install Trail",
        text: "Our behaviour analyser recorded screens, taps and drop-offs for two weeks. Forty percent of new riders quit at the payment setup screen before booking anything.",
      },
      {
        title: "Rebuild onboarding",
        text: "In Flutter, alongside Kestrel's engineers. Payment setup moved after the first fare quote, UPI became the default, and first rides got a fare cap so the price was never a surprise.",
      },
      {
        title: "Switch to Pulse",
        text: "Our FCM push system replaced the 7pm blast. Notifications now go out at each rider's usual commute time, adjusted for rain and surge, with a cap of three a week.",
      },
      {
        title: "Measure every change",
        text: "Each change shipped behind a flag to half of new riders first, so the team could see what moved the numbers and what did nothing.",
      },
    ],
    outcome: [
      "Weekly active riders grew 27% over the next quarter, and the share of new riders taking a second trip rose from one in four to about two in five. Push open rates more than doubled while mutes fell.",
      "Kestrel's product team now checks Trail before every release. They have since run eleven experiments on their own with the same flags and dashboards.",
    ],
    stack: ["Flutter", "Dart", "Firebase Cloud Messaging", "Go", "PostgreSQL", "BigQuery", "Unleash"],
    quote: {
      text: "Push, analytics and a new onboarding in ten weeks. We finally know why riders stay.",
      role: "Product lead, Kestrel Mobility",
    },
  },
  {
    slug: "aurelian",
    client: "Aurelian",
    sector: "Watchmaker",
    industry: "retail",
    services: ["ads-tracking", "digital-marketing"],
    location: "Dubai",
    duration: "8 weeks",
    team: "3 people",
    year: 2026,
    headline: "Cost per sale down 31% once the ad numbers could be trusted",
    question: "Which of our ad numbers can we trust?",
    decision: "None of them yet. Move tracking to the server, match every sale to a source, then plan budgets on the real numbers.",
    options: [
      { option: "Buy a new attribution tool", why: "Another dashboard reading the same broken browser data." },
      { option: "Cut spend until it is clear", why: "Safe for a month, but competitors would take back the search terms." },
      { option: "Server-side tracking first", chosen: true, why: "With 96% of orders matched to a source, budget moved to the campaigns that actually sold watches." },
    ],
    summary:
      "Aurelian spent heavily on ads in India and the Gulf, with numbers nobody believed. Server-side tracking gave them one set of figures to work from.",
    stats: [
      { value: "-31%", label: "cost per sale" },
      { value: "96%", label: "of orders matched to a source" },
      { value: "1", label: "report for finance and marketing" },
    ],
    challenge: [
      "Aurelian sells hand-finished watches from ₹1.5 lakh upward, online and through boutiques in Dubai and Mumbai. Ad spend ran across Meta, Google and two Gulf publishers.",
      "Every platform claimed credit for the same sales. Ad dashboards showed twice as many purchases as the store recorded, while ad blockers and iOS privacy rules hid a third of real orders. Finance had stopped trusting marketing's reports.",
    ],
    approach: [
      {
        title: "Audit the data",
        text: "We compared 90 days of Shopify orders against what each platform reported. We found duplicate purchase events, a broken checkout tag and no consent handling for EU and Gulf visitors.",
      },
      {
        title: "Move tracking server-side",
        text: "Server-side Google Tag Manager on their own subdomain, Meta Conversions API, Google enhanced conversions and consent mode, all deduplicated against real order IDs.",
      },
      {
        title: "Rebuild GA4 and reporting",
        text: "A clean GA4 property, orders and returns piped into BigQuery, and one Looker Studio report that finance and marketing both use.",
      },
      {
        title: "Relaunch campaigns",
        text: "With conversions the platforms could trust, we rebuilt Search and Meta campaigns around order value and dropped one publisher that drove no sales.",
      },
    ],
    outcome: [
      "Cost per sale fell 31% over the following two months on the same budget. 96% of online orders now match to a source, up from about 60%.",
      "Monthly reviews take an hour instead of a week of arguing over spreadsheets. Finance signs off the ad budget from the same report the marketing team uses.",
    ],
    stack: [
      "Server-side Google Tag Manager",
      "Meta Conversions API",
      "Google Ads enhanced conversions",
      "Google Analytics 4",
      "BigQuery",
      "Looker Studio",
      "Shopify",
    ],
    quote: {
      text: "Finally, numbers our finance team and our ad team agree on.",
      role: "CMO, Aurelian",
    },
  },
  {
    slug: "juniper-wealth",
    client: "Juniper Wealth",
    sector: "Wealth management app",
    industry: "financial-services",
    services: ["development"],
    location: "Mumbai",
    duration: "12 weeks",
    team: "5 people",
    year: 2026,
    headline: "A portfolio assistant that answers questions and knows its limits",
    question: "Can an AI assistant answer portfolio questions safely?",
    decision: "Yes, if it answers only from the client's own holdings and statements, and hands anything that sounds like advice to a human adviser.",
    options: [
      { option: "A general chatbot on a large model", why: "Fluent, but it would guess, and a wrong number about someone's money is a serious problem." },
      { option: "No AI, hire more advisers", why: "Advisers were spending their days on 'what is my XIRR' questions instead of planning." },
      { option: "A guarded assistant with hand-off", chosen: true, why: "Grounded answers with sources, tested against 600 real questions, and a clear line it never crosses." },
    ],
    summary:
      "Juniper's clients called advisers with simple portfolio questions. We built an assistant that answers from their own data and hands everything else to a person.",
    stats: [
      { value: "-41%", label: "routine adviser calls" },
      { value: "94%", label: "answers rated correct in review" },
      { value: "12 wks", label: "to production" },
    ],
    challenge: [
      "Juniper Wealth serves about 18,000 clients through an app and a team of 30 advisers. Half of all adviser calls were simple questions: why is my portfolio down this week, when does my SIP debit, what did I pay in fees.",
      "Leadership wanted an assistant in the app. Compliance wanted proof that it would stay inside SEBI rules on investment advice, never invent a number and never show one client's data to another. Both were right.",
    ],
    approach: [
      {
        title: "Agree what it may answer",
        text: "With Juniper's compliance team, we wrote a list of allowed question types and a list of refusals. Anything that looks like advice goes to an adviser, with the conversation attached.",
      },
      {
        title: "Answer from real data only",
        text: "The assistant calls Juniper's own APIs for holdings, transactions and fees, scoped to the signed-in client. It can explain a number but never produce one, and every figure links to its source screen.",
      },
      {
        title: "Test before anyone sees it",
        text: "We built an evaluation set of 1,200 real questions with personal details removed. Every model or prompt change runs against it, and reviewers grade a sample by hand each week.",
      },
      {
        title: "Roll out in stages",
        text: "Released to 5% of clients, then 25%, then everyone, with feedback on every answer and a dashboard of what people ask.",
      },
    ],
    outcome: [
      "Routine adviser calls fell 41% in the three months after launch. Advisers now spend that time on portfolio reviews, and app ratings went up.",
      "In weekly reviews, 94% of answers are rated correct and complete. Questions that need advice reach an adviser with full context, so clients never repeat themselves. We still run the evaluation suite with Juniper's team every week.",
    ],
    stack: ["Kotlin", "Swift", "Python", "FastAPI", "PostgreSQL", "pgvector", "Claude API", "Langfuse"],
    quote: {
      text: "It answers what it should and refuses what it should. Our compliance team signed off on both.",
      role: "COO, Juniper Wealth",
    },
  },
  {
    slug: "calder-labs",
    client: "Calder Labs",
    sector: "Logistics software",
    industry: "saas",
    services: ["consultancy", "development"],
    location: "Bengaluru",
    duration: "20 weeks",
    team: "6 people",
    year: 2024,
    headline: "Weekly releases and a 41% smaller cloud bill",
    question: "Should we move to microservices?",
    decision: "No. Draw clear module boundaries inside the monolith and cut the cloud bill first.",
    options: [
      { option: "Split into 20 microservices", why: "Would need a team twice their size to run, and the billing and routing code was too tangled to cut cleanly." },
      { option: "Rewrite in a new language", why: "A year of feature freeze for a platform that mostly worked." },
      { option: "A modular monolith", chosen: true, why: "Same codebase, enforced boundaries, tests on every change. Weekly releases within five months." },
    ],
    summary:
      "Calder Labs shipped once a month and overpaid for AWS. We gave their monolith clear module boundaries and cut the cloud bill by 41%.",
    stats: [
      { value: "-41%", label: "monthly cloud bill" },
      { value: "4x", label: "more releases a month" },
      { value: "₹38 lakh", label: "saved each year" },
    ],
    challenge: [
      "Calder Labs sells fleet and freight management software to about 300 logistics companies across India. The platform began as one Rails app in 2016 and had grown to 400,000 lines.",
      "Releases happened once a month after a weekend of manual testing. A change to invoicing could break route planning. The AWS bill had grown faster than revenue for two years, and nobody could say which part of the product was driving it.",
      "The engineering team wanted microservices. The CEO wanted to know whether that would fix anything.",
    ],
    approach: [
      {
        title: "Audit cost and coupling",
        text: "We mapped which modules called which, and tagged every AWS resource to a product area. Route optimisation jobs ran on oversized instances around the clock and made up 38% of the bill.",
      },
      {
        title: "Recommend a modular monolith",
        text: "Splitting into 20 services would have needed a team twice their size. We drew clear module boundaries inside the existing codebase instead, and enforced them in CI.",
      },
      {
        title: "Pay down the worst of it",
        text: "Moved route optimisation to scheduled jobs on spot instances, added tests around invoicing and dispatch, and set up trunk-based development with feature flags.",
      },
      {
        title: "Hand it back",
        text: "We paired with Calder's engineers on every change, wrote the architecture decision records, and stepped back once their team had led two releases on their own.",
      },
    ],
    outcome: [
      "The monthly AWS bill fell 41%, about ₹38 lakh a year. Calder now releases four or five times a month, and each release is tested automatically in under 20 minutes.",
      "Billing and tracking are now clean enough to split out later if the team grows. For now they have chosen to keep one codebase, and the platform is quicker to change than it has been in years.",
    ],
    stack: ["Ruby on Rails", "PostgreSQL", "Sidekiq", "AWS", "Terraform", "GitHub Actions", "Packwerk"],
    quote: {
      text: "We came in asking for microservices. We left with a cheaper, faster platform and the same team.",
      role: "CEO, Calder Labs",
    },
  },
];
