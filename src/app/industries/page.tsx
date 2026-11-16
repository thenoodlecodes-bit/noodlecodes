import type { Metadata } from "next";
import Link from "next/link";
import { Brief } from "@/components/Brief/Brief";
import { PageHero } from "@/components/Page/Page";
import { industries } from "@/content/industries";
import { casesBy } from "@/lib/content";
import styles from "./industries.module.css";

export const metadata: Metadata = {
  title: "Industries",
  description: "Retail, financial services, healthcare, hospitality, mobility and SaaS. Sectors where we know the rules and the shortcuts that backfire.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <main id="main">
      <PageHero
        crumbs={[{ href: "/industries", label: "Industries" }]}
        title="Six sectors we know from the inside."
        intro="Every industry has its own regulators, habits and failure modes. We have shipped enough in these six to know them before the first meeting."
      />

      <section className="section" data-section="industries">
        <div className="container">
          <ul className={styles.list}>
            {industries.map((i) => {
              const count = casesBy({ industry: i.slug }).length;
              return (
                <li key={i.slug}>
                  <Link href={`/industries/${i.slug}`} className={styles.row}>
                    <div className={styles.art}>
                      <strong>{i.stats[0].value}</strong>
                      <span>{i.stats[0].label}</span>
                    </div>
                    <div className={styles.text}>
                      <h2 className="h3">{i.name}</h2>
                      <p>{i.intro}</p>
                      <ul className="chips">
                        {i.challenges.map((c) => (
                          <li key={c.title} className="chip">
                            {c.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className={styles.foot}>
                      <span className="meta">
                        {count} client {count === 1 ? "story" : "stories"}
                      </span>
                      <span className="go">Explore</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Brief title="Not on the list? Tell us anyway." />
    </main>
  );
}
