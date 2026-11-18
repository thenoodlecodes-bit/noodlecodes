import type { Metadata } from "next";
import { Faqs, PageHero } from "@/components/Page/Page";
import { LocalPriceBoard } from "@/components/Price/Price";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Starting prices for websites, apps, dashboards, AI, consultancy, plug and play modules and ads tracking. Build an estimate and get a fixed quote.",
  alternates: { canonical: "/pricing" },
};

const faqs = [
  { q: "Are these the final prices?", a: "They are where projects start. After a free call we send a fixed quote for your exact scope, and that is what you pay." },
  { q: "Why are prices in rupees for me?", a: "Visitors in India see prices in rupees and everyone else sees US dollars. Use the switch above the list to see the other currency." },
  { q: "How do payments work?", a: "Usually half to start and half on delivery. Longer projects are split into milestones you approve one by one." },
  { q: "Do I own what you build?", a: "Yes. The code, designs and data are yours from the first day." },
];

export default function PricingPage() {
  return (
    <main id="main">
      <PageHero
        crumbs={[{ href: "/pricing", label: "Pricing" }]}
        title="Pricing"
        intro="Starting prices for the work we do most. Tick what you need to build an estimate, then get a fixed quote after a free call."
      />

      <section className="section" data-section="prices">
        <div className="container">
          <LocalPriceBoard whatsapp={site.whatsapp} />
        </div>
      </section>

      <Faqs faqs={faqs} title="About pricing" />
    </main>
  );
}
