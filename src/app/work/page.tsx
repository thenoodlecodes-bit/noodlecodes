import type { Metadata } from "next";
import Link from "next/link";
import { Brief } from "@/components/Brief/Brief";
import { CaseCard, cardGrid } from "@/components/Cards/Cards";
import { ClientCard, rosterGrid } from "@/components/Clients/Clients";
import { FilterBoard } from "@/components/FilterBoard/FilterBoard";
import { Head, PageHero } from "@/components/Page/Page";
import { cases } from "@/content/cases";
import { clients } from "@/content/clients";
import { industries } from "@/content/industries";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Clients",
  description: `${clients.length} companies across retail, financial services, healthcare, hospitality, mobility and SaaS, with client stories and the numbers that changed.`,
  alternates: { canonical: "/work" },
};

/** Every client first, then the stories some of them let us tell in full. */
export default function ClientsPage() {
  const sectors = industries.filter((i) => clients.some((c) => c.industry === i.slug));
  const storySectors = industries.filter((i) => cases.some((c) => c.industry === i.slug));
  return (
    <main id="main">
      <PageHero
        crumbs={[{ href: "/work", label: "Clients" }]}
        title="Our clients"
        intro={`${clients.length} companies across ${sectors.length} industries, from first-time founders to listed brands. ${cases.length} of them share their full story.`}
      >
        <Link href="#stories" className="btn btn--primary">
          Read client stories
        </Link>
      </PageHero>

      <section className="section" data-section="clients">
        <div className="container">
          <FilterBoard
            noun={["client", "clients"]}
            gridClassName={rosterGrid}
            groups={[{ id: "industry", label: "Industry", options: sectors.map((i) => ({ value: i.slug, label: i.name })) }]}
            items={clients.map((c) => ({ industry: [c.industry] }))}
            cards={clients.map((c) => (
              <ClientCard key={c.name} c={c} />
            ))}
          />
        </div>
      </section>

      <section className="section mist" id="stories" data-section="stories">
        <div className="container">
          <Head title="Client stories" text="What each client asked us, and the result. Open any story for the full detail." />
          <FilterBoard
            noun={["story", "stories"]}
            gridClassName={cardGrid}
            groups={[
              { id: "industry", label: "Industry", options: storySectors.map((i) => ({ value: i.slug, label: i.name })) },
              { id: "service", label: "Service", options: services.map((s) => ({ value: s.slug, label: s.name })) },
            ]}
            items={cases.map((c) => ({ industry: [c.industry], service: c.services }))}
            cards={cases.map((c) => (
              <CaseCard key={c.slug} c={c} />
            ))}
          />
        </div>
      </section>

      <Brief />
    </main>
  );
}
