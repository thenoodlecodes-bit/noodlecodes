import Link from "next/link";
import { Fragment } from "react";
import { Brief } from "@/components/Brief/Brief";
import { Decisions } from "@/components/Decisions/Decisions";
import { Journal, ReportCover } from "@/components/Journal/Journal";
import { Problems } from "@/components/Problems/Problems";
import { Untangle } from "@/components/Untangle/Untangle";
import { roles } from "@/content/careers";
import { cases } from "@/content/cases";
import { industries } from "@/content/industries";
import { insights } from "@/content/insights";
import { site } from "@/content/site";
import styles from "./home.module.css";

// Placeholder clause numbers and wording. Align with the real agreement before launch.
const clauses = [
  {
    no: "2.3",
    title: "The people you meet are the people who build.",
    text: "Everyone in the pitch is named in the contract and works on the project. Every team is led by someone with at least ten years of shipping.",
  },
  {
    no: "4.1",
    title: "Working software every Friday.",
    text: "Progress is shown every week on a staging link you can share with your board.",
  },
  {
    no: "6.2",
    title: "You own everything from day one.",
    text: "Code, designs, ad accounts and data are created in your accounts, not ours. Leaving takes an email, not a negotiation.",
  },
  {
    no: "8.1",
    title: "Fees follow scope, never spend.",
    text: "Defined work has a fixed fee. Ongoing teams have a monthly fee. We never take a percentage of ad spend.",
  },
];

const featured = ["calder-labs", "aurelian", "halcyon-health", "juniper-wealth", "ember-and-oak"].map(
  (s) => cases.find((c) => c.slug === s)!,
);

export default function Home() {
  const lead = insights.find((i) => i.featured) ?? insights[0];
  const rest = insights.filter((i) => i !== lead).slice(0, 3);

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

      <section className="section" data-section="problems">
        <div className="container">
          <h2 className={`h2 ${styles.heading}`}>What people say when they call us.</h2>
          <Problems />
        </div>
      </section>

      <section className="section" data-section="decisions">
        <div className="container">
          <div className={styles.headRow}>
            <h2 className="h2">The calls we made.</h2>
            <Link href="/work" className="go">
              All {cases.length} client decisions
            </Link>
          </div>
          <Decisions cases={featured} />
        </div>
      </section>

      <section className="section mist" data-section="clauses">
        <div className={`container ${styles.clauses}`}>
          <div className={styles.clausesIntro}>
            <h2 className="h2">How we work.</h2>
            <p>Four clauses from the agreement every client signs.</p>
          </div>
          <div className={styles.doc}>
            <p className={styles.docHead}>
              <span>Master services agreement</span>
              <span>Excerpt</span>
            </p>
            <ol>
              {clauses.map((c) => (
                <li key={c.no}>
                  <span className={styles.clauseNo}>{c.no}</span>
                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section" data-section="notes">
        <div className={`container ${styles.notes}`}>
          <div>
            <div className={styles.headRow}>
              <h2 className="h2">Field notes.</h2>
              <Link href="/insights" className="go">
                All notes
              </Link>
            </div>
            <Journal lead={lead} items={rest} />
          </div>
          <ReportCover />
        </div>
      </section>

      <section className="section" data-section="industries">
        <div className="container">
          <p className={styles.sectors}>
            We know six industries from the inside:{" "}
            {industries.map((i, n) => (
              <Fragment key={i.slug}>
                <Link href={`/industries/${i.slug}`}>{i.name}</Link>
                {n < industries.length - 2 ? ", " : n === industries.length - 2 ? " and " : "."}
              </Fragment>
            ))}
          </p>
          <Link href="/careers" className={styles.hiring}>
            <span className="meta">Hiring</span>
            <strong>{roles.length} open roles in Bengaluru, Pune, Gurugram and remote</strong>
            <span className="go">See the roles</span>
          </Link>
        </div>
      </section>

      <Brief />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </main>
  );
}
