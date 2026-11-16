import type { Metadata } from "next";
import { Brief } from "@/components/Brief/Brief";
import { IndexList } from "@/components/IndexList/IndexList";
import { Head, PageHero } from "@/components/Page/Page";
import { Problems } from "@/components/Problems/Problems";
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
        title="Everything a growing product needs, under one roof."
        intro="Five practices that work as one team. We build the software, advise on the hard calls, run the marketing, measure what it earns and plug in modules we have already built."
      />

      <section className="section" data-section="services">
        <div className="container">
          <Problems />
        </div>
      </section>

      <section className="section mist" data-section="modules">
        <div className="container">
          <Head title="Plug and play modules.">
            <p>Production code we maintain, installed in your cloud and connected to your data in days.</p>
          </Head>
          <IndexList items={solutions.map((m) => ({ href: `/solutions/${m.slug}`, title: m.name, text: m.menu, tag: m.kind }))} />
        </div>
      </section>

      <section className="section" data-section="industries">
        <div className="container">
          <Head title="Where we have done it before." />
          <IndexList items={industries.map((i) => ({ href: `/industries/${i.slug}`, title: i.name, text: i.menu }))} />
        </div>
      </section>

      <Brief />
    </main>
  );
}
