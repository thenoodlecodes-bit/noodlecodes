import type { Metadata } from "next";
import Link from "next/link";
import { Brief } from "@/components/Brief/Brief";
import { ClientWall } from "@/components/Clients/Clients";
import { Head, PageHero, StatRow } from "@/components/Page/Page";
import b from "@/components/Page/blocks.module.css";
import { about } from "@/content/about";
import { clients } from "@/content/clients";
import { initials, people } from "@/content/people";
import { site } from "@/content/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About us",
  description: about.intro,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero crumbs={[{ href: "/about", label: "About us" }]} title={about.title} intro={about.intro} />

      <section className="section" data-section="facts">
        <div className="container">
          <StatRow stats={[...site.facts]} />
        </div>
      </section>

      <section className="section" data-section="story">
        <div className={`container ${b.split}`}>
          <h2 className="h2">How we started</h2>
          <div className={b.body}>
            {about.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark" data-section="values">
        <div className="container">
          <Head title="What we believe" />
          <ul className={styles.values}>
            {about.values.map((v) => (
              <li key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" data-section="timeline">
        <div className="container">
          <Head title="Since 2019" />
          <ol className={styles.timeline}>
            {about.timeline.map((t) => (
              <li key={t.title}>
                <span className={styles.year}>{t.title}</span>
                <p>{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section mist" data-section="leadership">
        <div className="container">
          <Head title="The people you will work with">
            <p>Every engagement has one of these people on it, not just on the pitch.</p>
          </Head>
          <ul className={styles.people}>
            {people
              .filter((p) => p.leadership)
              .map((p) => (
                <li key={p.id}>
                  <span className={styles.avatar} aria-hidden="true">
                    {initials(p.name)}
                  </span>
                  <h3>{p.name}</h3>
                  <p className="meta">{p.role}</p>
                  <p>{p.bio}</p>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <section className="section" data-section="clients">
        <div className="container">
          <Head title="Who we work with" text={`${clients.length} companies, from first-time founders to listed brands.`}>
            <Link href="/work" className="go">
              Meet our clients
            </Link>
          </Head>
          <ClientWall />
        </div>
      </section>

      <section className="section" data-section="offices">
        <div className="container">
          <Head title="Three studios in India" />
          <ul className={styles.offices}>
            {site.offices.map((o) => (
              <li key={o.city}>
                <h3>{o.city}</h3>
                <p className="meta">{o.note}</p>
                <address>
                  {o.lines.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </address>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section mist" data-section="giving">
        <div className="container">
          <Head title="Giving back" />
          <div className={`${b.cards} ${b.cards3}`}>
            {about.giving.map((g) => (
              <article key={g.title} className={b.card}>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Brief />
    </main>
  );
}
