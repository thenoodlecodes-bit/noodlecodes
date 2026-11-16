import type { Industry } from "./types";

// Placeholder sector pages. Stats come from the placeholder client stories in cases.ts.
export const industries: Industry[] = [
  {
    slug: "retail",
    name: "Retail and D2C",
    menu: "Stores, retention and growth for brands that sell online",
    title: "Online stores that sell, and customers who come back.",
    intro:
      "Indian D2C brands spend heavily to win a first order, then lose margin to returns, cash on delivery and discounts. We build the store, the tracking and the retention systems that make the second order cheaper than the first.",
    challenges: [
      {
        title: "COD and RTO eat the margin",
        text: "Cash on delivery still drives a large share of orders outside the metros, and returned parcels cost twice: shipping both ways and stock stuck in transit. Checkout has to nudge buyers to prepay without losing the sale.",
      },
      {
        title: "Ad costs keep climbing",
        text: "Cost per order on Meta and Google rises every festive season. Without clean conversion data, budgets go to the campaigns that look good in a dashboard instead of the ones that sell.",
      },
      {
        title: "Repeat buyers go quiet",
        text: "Most brands send the same discount email to everyone. A customer who bought once hears nothing useful, and the second order never comes.",
      },
    ],
    offerings: [
      {
        title: "Stores built to convert",
        text: "Shopify and headless storefronts with fast product pages, UPI first checkout and COD rules by pin code.",
        service: "development",
      },
      {
        title: "Measurement you can trust",
        text: "Server-side tracking, Conversions API and GA4, tied to real orders and returns.",
        service: "ads-tracking",
      },
      {
        title: "Retention that runs itself",
        text: "Email and WhatsApp flows for browse, cart, delivery, review and reorder moments.",
        service: "plug-and-play",
      },
      {
        title: "Performance marketing",
        text: "Search, Meta and marketplace campaigns managed against contribution margin.",
        service: "digital-marketing",
      },
    ],
    stats: [
      { value: "₹1.8 cr", label: "first year online sales, Maison Verde" },
      { value: "-31%", label: "cost per sale, Aurelian" },
      { value: "2.8x", label: "revenue from email, Maison Verde" },
    ],
    solutions: ["mailroom", "wave", "trail"],
  },
  {
    slug: "financial-services",
    name: "Financial services",
    menu: "Apps, platforms and data for investment, lending and payments teams",
    title: "Financial products people trust with their money.",
    intro:
      "Fintech and wealth teams in India build under RBI and SEBI rules, for customers who expect UPI speed. We build apps and platforms that are quick for customers and easy to audit.",
    challenges: [
      {
        title: "Regulation shapes every screen",
        text: "RBI rules on digital lending, KYC and data storage, and SEBI rules on advice, decide what you can show and where data lives. They belong in the design from day one.",
      },
      {
        title: "Old cores slow everything down",
        text: "Many firms run on systems built a decade ago. Reports take minutes, releases take weeks, and a rewrite starts to look like the only way out.",
      },
      {
        title: "Customers expect answers now",
        text: "People check portfolios and payments on their phones every day. Every question that needs a phone call costs money and patience.",
      },
    ],
    offerings: [
      {
        title: "Architecture audits",
        text: "A two to three week review of your platform, with costed options, before you commit to a rewrite.",
        service: "consultancy",
      },
      {
        title: "Investor and customer apps",
        text: "Native and cross-platform apps with UPI, Account Aggregator and eKYC flows.",
        service: "development",
      },
      {
        title: "Guarded AI assistants",
        text: "Language model features that answer from your data, refuse advice and log every answer for compliance.",
        service: "development",
      },
      {
        title: "Transactional messaging",
        text: "Alerts for debits, dues and statements across SMS, WhatsApp and push, with delivery tracking.",
        service: "plug-and-play",
      },
    ],
    stats: [
      { value: "6 mo", label: "rewrite avoided, Onyx Ridge Capital" },
      { value: "-41%", label: "routine adviser calls, Juniper Wealth" },
      { value: "4x", label: "faster investor reports, Onyx Ridge Capital" },
    ],
    solutions: ["relay", "pulse"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    menu: "Booking, patient apps and clinic systems for care providers",
    title: "Care that is easier to book and harder to miss.",
    intro:
      "Clinics and hospitals lose hours to phone bookings and revenue to missed appointments. We build patient apps, clinic dashboards and reminders that work for staff and for patients of every age.",
    challenges: [
      {
        title: "Phones run the front desk",
        text: "Most clinics still book by phone. Staff juggle calendars, patients wait on hold, and a missed call is a missed patient.",
      },
      {
        title: "No-shows waste capacity",
        text: "One in five appointments going unused is common. Without reminders and a waitlist, that time is simply lost.",
      },
      {
        title: "Health data needs extra care",
        text: "Patient records fall under the DPDP Act, and more providers are linking to ABDM health IDs. Consent, access logs and data location have to be designed in, not added later.",
      },
    ],
    offerings: [
      {
        title: "Patient apps",
        text: "Booking, rebooking, payments and care plans, in English and regional languages.",
        service: "development",
      },
      {
        title: "Clinic dashboards",
        text: "Live schedules across locations, practitioner availability and automatic waitlists.",
        service: "development",
      },
      {
        title: "Appointment reminders",
        text: "SMS, WhatsApp and push reminders with one tap rescheduling.",
        service: "plug-and-play",
      },
      {
        title: "Systems review",
        text: "An audit of your booking, records and integrations, with a plan for ABDM and DPDP readiness.",
        service: "consultancy",
      },
    ],
    stats: [
      { value: "40 sec", label: "average booking, Halcyon Health" },
      { value: "-38%", label: "missed appointments, Halcyon Health" },
      { value: "14", label: "clinics on one system" },
    ],
    solutions: ["relay", "wave"],
  },
  {
    slug: "hospitality",
    name: "Hospitality and food",
    menu: "Bookings, guest marketing and tracking for restaurants and hotels",
    title: "Fuller tables on the nights that need it.",
    intro:
      "Restaurants and hotels have busy weekends, quiet weekdays and aggregators taking a cut of every order. We help groups own their guest relationships and fill the slow nights directly.",
    challenges: [
      {
        title: "Aggregators own the guest",
        text: "Delivery and booking platforms take commission and keep the customer data. Most groups cannot message the guests who ate with them last month.",
      },
      {
        title: "Weeknights sit empty",
        text: "Rent, salaries and kitchens cost the same seven days a week. Demand does not.",
      },
      {
        title: "Ad spend is hard to judge",
        text: "A guest who saw an ad and walked in two days later rarely shows up in any report, so budgets get set on gut feel.",
      },
    ],
    offerings: [
      {
        title: "WhatsApp campaigns",
        text: "Opt-in guest lists, campaigns by outlet and booking replies inside WhatsApp.",
        service: "plug-and-play",
      },
      {
        title: "Booking tracking",
        text: "Conversions tied to real reservations and covers, sent back to Meta and Google.",
        service: "ads-tracking",
      },
      {
        title: "Local marketing",
        text: "Search, maps and social campaigns planned around each outlet's slow days.",
        service: "digital-marketing",
      },
      {
        title: "Direct ordering and booking",
        text: "Your own ordering site and reservation flow, so the next order skips the commission.",
        service: "development",
      },
    ],
    stats: [
      { value: "+46%", label: "weeknight covers, Ember & Oak" },
      { value: "3.4x", label: "return on ad spend, Ember & Oak" },
      { value: "11 days", label: "to go live on WhatsApp" },
    ],
    solutions: ["wave", "mailroom"],
  },
  {
    slug: "mobility",
    name: "Mobility and logistics",
    menu: "Rider apps, fleet tools and dispatch systems for moving people and goods",
    title: "Apps and systems that keep fleets moving.",
    intro:
      "Ride, delivery and freight businesses run on thin margins and live data. We build rider apps, driver tools and operations dashboards that hold up at peak hour.",
    challenges: [
      {
        title: "Retention after the first trip",
        text: "Acquisition is expensive. If a rider or shipper does not come back within a month, they usually do not come back at all.",
      },
      {
        title: "Peak load breaks things",
        text: "Monsoon evenings, festival weeks and sale days bring traffic spikes that expose slow queries and fragile dispatch logic.",
      },
      {
        title: "Tier 2 phones and networks",
        text: "Many users in smaller cities ride on low-end Android phones and patchy 4G. Apps need to stay small and work offline.",
      },
    ],
    offerings: [
      {
        title: "Rider and driver apps",
        text: "Flutter and native apps built for low-end Android and weak networks, with UPI payments.",
        service: "development",
      },
      {
        title: "Behaviour analytics",
        text: "See where riders and drivers drop off, screen by screen, before you change anything.",
        service: "plug-and-play",
      },
      {
        title: "Timed push notifications",
        text: "FCM push sent at each user's usual travel time, with frequency caps.",
        service: "plug-and-play",
      },
      {
        title: "Platform reviews",
        text: "Load testing, cost audits and architecture plans for dispatch and routing systems.",
        service: "consultancy",
      },
    ],
    stats: [
      { value: "+27%", label: "weekly active riders, Kestrel Mobility" },
      { value: "2.1x", label: "push open rate, Kestrel Mobility" },
      { value: "-41%", label: "cloud bill, Calder Labs" },
    ],
    solutions: ["pulse", "trail", "relay"],
  },
  {
    slug: "saas",
    name: "SaaS and B2B tech",
    menu: "Architecture, product engineering and pipeline for software companies",
    title: "Ship faster without rebuilding everything.",
    intro:
      "Software companies outgrow the codebase they started with, and the cloud bill that came with it. We help product teams release more often, spend less on infrastructure and track the pipeline that pays for it all.",
    challenges: [
      {
        title: "Releases slow down",
        text: "Monthly releases, weekend test runs and fear of touching old code are signs the architecture needs attention. That rarely means a rewrite.",
      },
      {
        title: "Cloud costs outpace revenue",
        text: "Bills grow quietly. Without tagging and ownership, nobody knows which feature or customer drives the spend.",
      },
      {
        title: "Pipeline data is a mess",
        text: "Trials, demos and closed deals live in different tools, so marketing cannot tell which campaigns bring paying customers.",
      },
    ],
    offerings: [
      {
        title: "Architecture and cost audits",
        text: "Coupling, cloud spend and delivery bottlenecks, mapped with costed options.",
        service: "consultancy",
      },
      {
        title: "Modernisation",
        text: "Modular monoliths, test suites and CI pipelines that let your team release every week.",
        service: "development",
      },
      {
        title: "B2B demand generation",
        text: "Search, LinkedIn and content programmes measured against pipeline and revenue.",
        service: "digital-marketing",
      },
      {
        title: "Product usage tracking",
        text: "Product events joined to CRM data, so you can see which accounts are about to grow or leave.",
        service: "ads-tracking",
      },
    ],
    stats: [
      { value: "-41%", label: "monthly cloud bill, Calder Labs" },
      { value: "4x", label: "more releases a month, Calder Labs" },
      { value: "₹38 lakh", label: "saved each year on AWS" },
    ],
    solutions: ["trail", "mailroom"],
  },
];
