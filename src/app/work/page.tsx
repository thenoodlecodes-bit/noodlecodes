import type { Metadata } from "next";
import { Brief } from "@/components/Brief/Brief";
import { DecisionRow, decisionList } from "@/components/Decisions/Decisions";
import { FilterBoard } from "@/components/FilterBoard/FilterBoard";
import { PageHero } from "@/components/Page/Page";
import { cases } from "@/content/cases";
import { industries } from "@/content/industries";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Client work",
  description: "Client stories from retail, financial services, healthcare, hospitality, mobility and SaaS, with the numbers that changed.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const usedIndustries = industries.filter((i) => cases.some((c) => c.industry === i.slug));
  return (
    <main id="main">
      <PageHero
        crumbs={[{ href: "/work", label: "Client work" }]}
        title="The calls we made, and what happened."
        intro="Every engagement starts with a question. Here is the question each client brought, the call we made and the result."
      />
      <section className="section" data-section="work">
        <div className="container">
          <FilterBoard
            noun={["decision", "decisions"]}
            gridClassName={decisionList}
            groups={[
              { id: "industry", label: "Industry", options: usedIndustries.map((i) => ({ value: i.slug, label: i.name })) },
              { id: "service", label: "Service", options: services.map((s) => ({ value: s.slug, label: s.name })) },
            ]}
            items={cases.map((c) => ({ industry: [c.industry], service: c.services }))}
            cards={cases.map((c) => (
              <DecisionRow key={c.slug} c={c} />
            ))}
          />
        </div>
      </section>
      <Brief />
    </main>
  );
}
