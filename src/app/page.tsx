import Link from "next/link";
import { Brief } from "@/components/Brief/Brief";
import { ArticleCard, CaseGrid, ReportCover, ServiceCards, Tiles } from "@/components/Cards/Cards";
import { ClientBand, ClientQuotes } from "@/components/Clients/Clients";
import { Head } from "@/components/Page/Page";
import { Process } from "@/components/Process/Process";
import { Untangle } from "@/components/Untangle/Untangle";
import { roles } from "@/content/careers";
import { cases } from "@/content/cases";
import { industries } from "@/content/industries";
import { insights } from "@/content/insights";
import { site } from "@/content/site";
import styles from "./home.module.css";

const featured = ["calder-labs", "halcyon-health", "ember-and-oak"].map((s) => cases.find((c) => c.slug === s)!);
const quoted = ["maison-verde", "onyx-ridge", "aurelian"].map((s) => cases.find((c) => c.slug === s)!);

export default function Home() {
  const latest = insights.slice(0, 2);

  const ld = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.emails.hello,
    telephone: site.phone,
    foundingDate: String(site.founded),
    areaServed: "IN",
    address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
  };

  return (
    <main id="main">
      <section data-section="hero">
        <div className="container">
          <Untangle />
        </div>
      </section>

      <section className="section" data-section="clients">
        <div className="container">
          <ClientBand />
        </div>
      </section>

      <section className="section mist" data-section="services">
        <div className="container">
          <Head title="What we do" text="Five services from one team. Use one, or let us combine them." />
          <ServiceCards />
        </div>
      </section>

      <section className="section" data-section="process">
        <div className="container">
          <Head title="How we work" text="Every project follows the same four steps, so you always know what happens next." />
          <Process />
        </div>
      </section>

      <section className="section mist" data-section="results">
        <div className="container">
          <Head title="Results for clients" text="Real numbers from recent projects.">
            <Link href="/work" className="go">
              All client stories
            </Link>
          </Head>
          <CaseGrid cases={featured} />
        </div>
      </section>

      <section className="section dark" data-section="quotes">
        <div className="container">
          <Head title="In their words" />
          <ClientQuotes stories={quoted} />
        </div>
      </section>

      <section className="section" data-section="industries">
        <div className="container">
          <Head title="Industries we know" text="Sectors where we have shipped enough to know the rules." />
          <Tiles
            items={industries.map((i) => ({
              href: `/industries/${i.slug}`,
              title: i.name,
              text: i.menu,
              stat: i.stats[0].value,
              tag: i.stats[0].label,
            }))}
          />
        </div>
      </section>

      <section className="section mist" data-section="insights">
        <div className="container">
          <Head title="Ideas and guides" text="Practical notes from the people who did the work.">
            <Link href="/insights" className="go">
              All articles
            </Link>
          </Head>
          <div className={styles.insights}>
            {latest.map((i) => (
              <ArticleCard key={i.slug} i={i} />
            ))}
            <ReportCover />
          </div>
          <Link href="/careers" className={styles.hiring}>
            <strong>We are hiring.</strong>
            <span>
              {roles.length} open roles in Bengaluru, Pune, Gurugram and remote.
            </span>
            <span className="go">See the roles</span>
          </Link>
        </div>
      </section>

      <Brief />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </main>
  );
}
