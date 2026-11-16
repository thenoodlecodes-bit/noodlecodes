import type { Metadata } from "next";
import Link from "next/link";
import { Brief } from "@/components/Brief/Brief";
import { ReadHero } from "@/components/Read/Read";
import { cases } from "@/content/cases";
import { clients } from "@/content/clients";
import { industries } from "@/content/industries";
import styles from "./industries.module.css";

export const metadata: Metadata = {
  title: "Industries",
  description: "Retail, financial services, healthcare, hospitality, mobility and SaaS. Sectors where we know the rules and the shortcuts that backfire.",
  alternates: { canonical: "/industries" },
};

/** Each sector as a short briefing: what it is, its three hardest problems and one result. */
export default function IndustriesPage() {
  return (
    <main id="main">
      <ReadHero
        crumbs={[{ href: "/industries", label: "Industries" }]}
        title="Six sectors we know from the inside"
        intro="Every industry has its own regulators, habits and failure modes. Each briefing below covers what makes the sector hard and how we help."
        meta={[`${industries.length} sectors`, `${clients.length} clients`, `${cases.length} client stories`]}
      />

      <section className="section" data-section="industries">
        <div className="container">
          <ul className={styles.briefs}>
            {industries.map((i) => (
              <li key={i.slug}>
                <Link href={`/industries/${i.slug}`} className={styles.brief}>
                  <h2 className={styles.name}>{i.name}</h2>
                  <p className={styles.menu}>{i.menu}</p>
                  <p className={styles.label}>What makes it hard</p>
                  <ul className={styles.hard}>
                    {i.challenges.map((c) => (
                      <li key={c.title}>{c.title}</li>
                    ))}
                  </ul>
                  <p className={styles.stat}>
                    <strong>{i.stats[0].value}</strong> {i.stats[0].label}
                  </p>
                  <span className={`go ${styles.go}`}>Read the briefing</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Brief title="Not on the list? Tell us anyway." />
    </main>
  );
}
