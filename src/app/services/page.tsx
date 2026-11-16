import type { Metadata } from "next";
import { Brief } from "@/components/Brief/Brief";
import { Tiles } from "@/components/Cards/Cards";
import { Head, PageHero } from "@/components/Page/Page";
import { ProblemCards } from "@/components/Service/Service";
import { ToolCards } from "@/components/Tool/Tool";
import { industries } from "@/content/industries";
import { solutions } from "@/content/solutions";

export const metadata: Metadata = {
  title: "What we do",
  description:
    "Product development, tech consultancy, digital marketing, ads tracking and plug and play modules, delivered by one senior team.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        crumbs={[{ href: "/services", label: "What we do" }]}
        title="What we do"
        intro="Five services from one senior team. We build software, advise on hard technical calls, run marketing, fix tracking and install ready-made tools."
      />

      <section className="section mist" data-section="services">
        <div className="container">
          <Head title="Which one sounds like you?" text="Each service starts with a problem clients bring us. Pick the one closest to yours." />
          <ProblemCards />
        </div>
      </section>

      <section className="section" data-section="modules">
        <div className="container">
          <Head title="Plug and play modules" text="Ready-built tools we install in your cloud and connect to your data in days." />
          <ToolCards items={solutions} />
        </div>
      </section>

      <section className="section mist" data-section="industries">
        <div className="container">
          <Head title="Industries we know" />
          <Tiles items={industries.map((i) => ({ href: `/industries/${i.slug}`, title: i.name, text: i.menu, stat: i.stats[0].value, tag: i.stats[0].label }))} />
        </div>
      </section>

      <Brief />
    </main>
  );
}
