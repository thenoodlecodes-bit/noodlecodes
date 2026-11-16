import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, Head, PageHero, Steps } from "@/components/Page/Page";
import b from "@/components/Page/blocks.module.css";
import { careers, roles } from "@/content/careers";
import { site } from "@/content/site";
import type { Team } from "@/content/types";
import styles from "./careers.module.css";

export const metadata: Metadata = {
  title: "Careers",
  description: careers.intro,
  alternates: { canonical: "/careers" },
};

const TEAMS: Team[] = ["Engineering", "Data and AI", "Design", "Growth", "Delivery"];

export default function CareersPage() {
  return (
    <main id="main">
      <PageHero crumbs={[{ href: "/careers", label: "Careers" }]} title="Do the best work of your career." intro={careers.intro}>
        <Link href="#roles" className="btn btn--primary">
          See {roles.length} open roles
        </Link>
      </PageHero>

      <section className="section" data-section="benefits">
        <div className="container">
          <Head title="What you get." />
          <div className={`${b.cards} ${b.cards3}`}>
            {careers.benefits.map((x) => (
              <article key={x.title} className={b.card}>
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark" data-section="growth">
        <div className="container">
          <Head title="How you grow." />
          <ul className={styles.growth}>
            {careers.growth.map((g) => (
              <li key={g.title}>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" data-section="process">
        <div className="container">
          <Head title="How we hire.">
            <p>Usually three weeks from application to offer. We tell you where you stand at every step.</p>
          </Head>
          <Steps steps={careers.process} />
        </div>
      </section>

      <section className="section mist" id="roles" data-section="roles">
        <div className="container">
          <Head title="Open roles." />
          {TEAMS.map((team) => {
            const list = roles.filter((r) => r.team === team);
            if (!list.length) return null;
            return (
              <div key={team} className={styles.team}>
                <h3 className={styles.teamName}>{team}</h3>
                <ul className={styles.roles}>
                  {list.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/careers/${r.slug}`} className={styles.role}>
                        <strong>{r.title}</strong>
                        <span>{r.location}</span>
                        <span>
                          {r.type}, {r.experience}
                        </span>
                        <span className="go" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand
        title="Don't see your role?"
        text="We hire good people when we meet them. Send a note about what you do best and what you want to do next."
        action={{ href: `mailto:${site.emails.careers}?subject=${encodeURIComponent("Open application")}`, label: "Send an open application" }}
        mail={site.emails.careers}
      />
    </main>
  );
}
