import type { Solution, SolutionSlug } from "./types";

// The five plug and play modules. Names, specs and numbers are placeholders.
export const solutions: Solution[] = [
  {
    slug: "relay",
    name: "Relay",
    kind: "Notification system",
    menu: "One API for in-app, push, email, SMS and WhatsApp",
    intro:
      "Relay sends each message on the right channel, respects user preferences and quiet hours, and tells you what was delivered and read.",
    features: [
      { title: "Channel routing", text: "Send once. Relay picks in-app, push, email, SMS or WhatsApp based on user preference and fallback rules." },
      { title: "Preference centre", text: "A ready-made screen where users choose what they hear about, and where." },
      { title: "Templates in any language", text: "Templates with variables in English, Hindi and regional languages, edited by your team without a release." },
      { title: "Delivery tracking", text: "Sent, delivered, opened and failed, per message and per channel, with automatic retries." },
      { title: "Quiet hours and caps", text: "No alerts at 2am, and never more than the daily limit you set." },
      { title: "Digests", text: "Low priority updates batched into one daily or weekly summary." },
    ],
    specs: [
      { value: "Under 1s", label: "median send time" },
      { value: "5", label: "channels" },
      { value: "5 days", label: "to go live" },
    ],
    channels: ["In-app inbox", "Push", "Email", "SMS", "WhatsApp"],
    integrations: ["Firebase Cloud Messaging", "APNs", "Amazon SES", "SendGrid", "MSG91", "WhatsApp Cloud API", "Slack"],
    timeline: "Live in 5 days",
    faqs: [
      { q: "Does Relay replace our SMS or email provider?", a: "No. Relay sits on top of the providers you already use and decides what goes where." },
      { q: "Can we send transactional and marketing messages?", a: "Yes, on separate queues with separate rules, so a campaign never delays an OTP." },
    ],
  },
  {
    slug: "mailroom",
    name: "Mailroom",
    kind: "Email marketing",
    menu: "Campaigns, journeys and transactional email on your domain",
    intro:
      "Mailroom sends campaigns, automated journeys and transactional email from your own infrastructure. You pay for what you send, not for how many people are on your list.",
    features: [
      { title: "Visual journeys", text: "Welcome series, abandoned carts, win-backs and renewals, built on a canvas your marketing team can edit." },
      { title: "Segments from your data", text: "Segments built from orders, events and profile data in your own database, refreshed live." },
      { title: "Deliverability setup", text: "SPF, DKIM, DMARC, domain warm-up and list hygiene handled before your first send." },
      { title: "Transactional email", text: "Receipts, OTPs and alerts on a separate stream so they never land behind a campaign." },
      { title: "A/B testing", text: "Test subject lines, content and send times, with a winner picked on revenue, not opens." },
      { title: "Revenue reporting", text: "Every campaign and journey tied to the orders it produced." },
    ],
    specs: [
      { value: "Unlimited", label: "contacts" },
      { value: "98%+", label: "inbox placement after warm-up" },
      { value: "10 days", label: "to go live" },
    ],
    channels: ["Email"],
    integrations: ["Amazon SES", "Shopify", "WooCommerce", "Razorpay", "HubSpot", "Zoho CRM"],
    timeline: "Live in 10 days",
    faqs: [
      { q: "Can we move our lists from another tool?", a: "Yes. We migrate contacts, consent records, templates and journeys, and keep both systems running until you are ready to switch." },
      { q: "Who handles deliverability?", a: "We do, from DNS records to warm-up to monitoring blocklists." },
    ],
  },
  {
    slug: "wave",
    name: "Wave",
    kind: "WhatsApp marketing",
    menu: "Broadcasts, chat journeys and catalogue orders on WhatsApp",
    intro:
      "Wave runs WhatsApp broadcasts, two-way chat journeys and catalogue orders on the official WhatsApp Business Platform, connected to your CRM and order system.",
    features: [
      { title: "Broadcasts that stay unblocked", text: "Opt-in capture, template approvals and alerts the moment your quality rating starts to slip." },
      { title: "Chat journeys", text: "Button-led flows for bookings, order status, returns and reorders, with a hand-off to a person when needed." },
      { title: "Catalogue and cart", text: "Customers browse, add to cart and order without leaving the chat." },
      { title: "Shared inbox", text: "Your support team answers from one inbox, with order history beside every conversation." },
      { title: "Click to WhatsApp ads", text: "Ads that open a conversation, tracked through to the order." },
      { title: "UPI payments", text: "Payment links inside the chat, matched back to the order automatically." },
    ],
    specs: [
      { value: "7 days", label: "to go live" },
      { value: "Official", label: "WhatsApp Business Platform" },
      { value: "11", label: "Indian languages in templates" },
    ],
    channels: ["WhatsApp"],
    integrations: ["WhatsApp Cloud API", "Shopify", "Razorpay", "Zoho CRM", "HubSpot", "Freshdesk"],
    timeline: "Live in 7 days",
    faqs: [
      { q: "Do we need a WhatsApp Business API account?", a: "We set it up with you, including business verification and your first message templates." },
      { q: "Will our number get blocked?", a: "Wave enforces opt-in, frequency caps and template quality checks, which is what keeps numbers healthy." },
    ],
  },
  {
    slug: "pulse",
    name: "Pulse",
    kind: "Push notifications (FCM)",
    menu: "Mobile and web push with smart send times",
    intro:
      "Pulse sends mobile and web push through Firebase Cloud Messaging and APNs, with smart send times, frequency caps and deep links that open the right screen.",
    features: [
      { title: "Smart send time", text: "Each user gets the message at the hour they usually open your app." },
      { title: "Frequency caps", text: "Daily and weekly limits across every campaign, so no one gets five pushes before lunch." },
      { title: "Deep links", text: "Every push opens the exact screen it talks about, on iOS, Android and web." },
      { title: "Rich push", text: "Images, action buttons and carousels where the platform supports them." },
      { title: "Triggers and segments", text: "Send on events, like a cart left behind or a ride completed, or to segments built from your data." },
      { title: "Token hygiene", text: "Dead device tokens are cleared regularly, so delivery numbers stay honest." },
    ],
    specs: [
      { value: "2.1x", label: "open rate for a ride app" },
      { value: "3", label: "platforms: iOS, Android, web" },
      { value: "5 days", label: "to go live" },
    ],
    channels: ["iOS push", "Android push", "Web push"],
    integrations: ["Firebase Cloud Messaging", "APNs", "Flutter", "React Native", "Next.js", "BigQuery"],
    timeline: "Live in 5 days",
    faqs: [
      { q: "We already use Firebase. What does Pulse add?", a: "Scheduling by user, frequency caps across campaigns, triggers from your own events and reporting tied to what users did after the tap." },
      { q: "Does it work with Flutter and React Native?", a: "Yes. We ship small client libraries for both, plus native iOS and Android." },
    ],
  },
  {
    slug: "trail",
    name: "Trail",
    kind: "User behaviour analyser",
    menu: "Funnels, heatmaps, session replays and rage clicks",
    intro:
      "Trail records how people move through your website and app, then shows funnels, heatmaps, rage clicks and session replays, with personal data masked by default.",
    features: [
      { title: "Funnels", text: "Any sequence of steps, with drop-off by device, city, language and campaign." },
      { title: "Heatmaps", text: "Clicks, taps and scroll depth on every page and screen." },
      { title: "Session replay", text: "Watch real sessions with form fields and personal data masked before anything leaves the device." },
      { title: "Rage and dead clicks", text: "Find buttons people hammer and links that do nothing." },
      { title: "Cohorts and retention", text: "See which users come back, and what they did differently in their first week." },
      { title: "Alerts", text: "A message on Slack when a funnel step suddenly drops." },
    ],
    specs: [
      { value: "Under 20 KB", label: "script size" },
      { value: "Masked", label: "personal data by default" },
      { value: "7 days", label: "to go live" },
    ],
    channels: ["Web", "Android", "iOS"],
    integrations: ["React", "Next.js", "Flutter", "React Native", "ClickHouse", "BigQuery", "Slack"],
    timeline: "Live in 7 days",
    faqs: [
      { q: "Will Trail slow down our site?", a: "The script is under 20 KB and loads after your page is interactive." },
      { q: "Where is the data stored?", a: "In your own cloud account, in a ClickHouse or BigQuery database you control." },
    ],
  },
];

export function solution(slug: SolutionSlug): Solution {
  const s = solutions.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown solution: ${slug}`);
  return s;
}
