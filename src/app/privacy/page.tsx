import type { Metadata } from "next";
import { PageHero } from "@/components/Page/Page";
import { Prose } from "@/components/Prose/Prose";
import { site } from "@/content/site";
import type { Block } from "@/content/types";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Noodle Codes collects, uses and protects personal data on this website.",
  alternates: { canonical: "/privacy" },
};

// Placeholder policy written in plain language. Have it reviewed by counsel before launch.
const policy: Block[] = [
  { type: "p", text: "This notice explains what personal data this website collects, why, and what you can do about it. It covers noodlecodes.com only, not the products we build for clients." },
  { type: "h2", text: "What we collect" },
  {
    type: "list",
    items: [
      "What you type into the contact form: name, email, company, phone and your message.",
      "Your email address if you subscribe to our newsletter.",
      "Usage data such as pages viewed, clicks and device type, collected through Google Tag Manager when analytics are enabled.",
    ],
  },
  { type: "h2", text: "Why we collect it" },
  { type: "p", text: "We use contact details only to reply to you and to prepare a proposal if you ask for one. We use newsletter addresses only to send the newsletter. We use usage data to understand which pages help people and which do not." },
  { type: "h2", text: "Who we share it with" },
  { type: "p", text: "Form messages are delivered by our email provider. Analytics data is processed by Google. We do not sell personal data or share it for anyone else's marketing." },
  { type: "h2", text: "How long we keep it" },
  { type: "p", text: "Enquiries are kept for up to two years, then deleted unless we are working together. Newsletter addresses are kept until you unsubscribe." },
  { type: "h2", text: "Your rights" },
  { type: "p", text: `Under the Digital Personal Data Protection Act, 2023 you can ask to see, correct or delete the personal data we hold about you, and withdraw consent at any time. Write to ${site.emails.hello} and we will respond within 30 days.` },
  { type: "callout", title: "Last updated", text: "1 November 2026" },
];

export default function PrivacyPage() {
  return (
    <main id="main">
      <PageHero crumbs={[{ href: "/privacy", label: "Privacy" }]} title="Privacy notice" intro="Short, plain and specific to this website." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Prose blocks={policy} />
        </div>
      </section>
    </main>
  );
}
