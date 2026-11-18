import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Brief } from "@/components/Brief/Brief";
import { CaseGrid } from "@/components/Cards/Cards";
import { Breadcrumbs, Head } from "@/components/Page/Page";
import { cases } from "@/content/cases";
import { industries } from "@/content/industries";
import { service } from "@/content/services";
import { solution } from "@/content/solutions";
import styles from "./case.module.css";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) return {};
  return { title: `${c.client}: ${c.headline}`, description: c.summary, alternates: { canonical: `/work/${c.slug}` } };
}

/** A client story: the summary first for anyone, the full detail below for those who want it. */
export default async function CasePage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const index = cases.findIndex((x) => x.slug === slug);
  if (index < 0) notFound();
  const c = cases[index];
  const industry = industries.find((i) => i.slug === c.industry);
  const next = [1, 2, 3].map((n) => cases[(index + n) % cases.length]);

  return (
    <main id="main">
      <section className={styles.hero}>
        <div className="container">
          <Breadcrumbs
            items={[
              { href: "/work", label: "Clients" },
              { href: `/work/${c.slug}`, label: c.client },
            ]}
          />
          <h1 className={`h1 ${styles.question}`}>{c.question}</h1>
          <p className={styles.asked}>
            Asked by {c.client}, {c.sector.toLowerCase()}
          </p>

          <div className={styles.summary}>
            <div className={styles.answer}>
              <span className={styles.label}>Our answer</span>
              <p>{c.decision}</p>
            </div>
            <dl className={styles.results}>
              {c.stats.map((s) => (
                <div key={s.label}>
                  <dd>{s.value}</dd>
                  <dt>{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section" data-section="story">
        <div className={`container ${styles.layout}`}>
          <article className={styles.story}>
            <section>
              <h2>The situation</h2>
              {c.challenge.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>

            <section>
              <h2>Options we considered</h2>
              <ul className={styles.options}>
                {c.options.map((o) => (
                  <li key={o.option} data-chosen={o.chosen || undefined}>
                    <span className={styles.verdict}>{o.chosen ? "Chosen" : "Ruled out"}</span>
                    <strong>{o.option}</strong>
                    <span>{o.why}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2>What we did</h2>
              <ol className={styles.steps}>
                {c.approach.map((s, i) => (
                  <li key={s.title}>
                    <span className={styles.no}>{i + 1}</span>
                    <div>
                      <strong>{s.title}</strong>
                      <p>{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2>What changed</h2>
              {c.outcome.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>

            <blockquote className={styles.quote}>
              <p>&ldquo;{c.quote.text}&rdquo;</p>
              <footer>
                {c.quote.role}
              </footer>
            </blockquote>
          </article>

          <aside className={styles.side}>
            <div className={styles.facts}>
              <p className={styles.sideTitle}>Project facts</p>
              <dl>
                <div>
                  <dt>Client</dt>
                  <dd>{c.client}</dd>
                </div>
                <div>
                  <dt>Industry</dt>
                  <dd>{industry && <Link href={`/industries/${industry.slug}`}>{industry.name}</Link>}</dd>
                </div>
                <div>
                  <dt>Services</dt>
                  <dd>
                    {c.services.map((s, i) => (
                      <span key={s}>
                        {i > 0 && ", "}
                        <Link href={`/services/${s}`}>{service(s).name}</Link>
                      </span>
                    ))}
                    {c.solutions?.map((s) => (
                      <span key={s}>
                        , <Link href={`/solutions/${s}`}>{solution(s).name}</Link>
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>{c.location}</dd>
                </div>
                <div>
                  <dt>Timeline</dt>
                  <dd>
                    {c.duration}, {c.year}
                  </dd>
                </div>
                <div>
                  <dt>Team</dt>
                  <dd>{c.team}</dd>
                </div>
              </dl>
              <div className={styles.stack}>
                <p className={styles.sideTitle}>Built with</p>
                <ul className="chips">
                  {c.stack.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link href="/contact" className={`btn btn--primary ${styles.sideCta}`}>
              Talk to us about a similar project
            </Link>
          </aside>
        </div>
      </section>

      <section className="section mist" data-section="more">
        <div className="container">
          <Head title="More client stories">
            <Link href="/work" className="go">
              All clients
            </Link>
          </Head>
          <CaseGrid cases={next} />
        </div>
      </section>

      <Brief title="Facing a call like this?" />
    </main>
  );
}
