import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Brief } from "@/components/Brief/Brief";
import { Decisions } from "@/components/Decisions/Decisions";
import { Breadcrumbs, Steps } from "@/components/Page/Page";
import b from "@/components/Page/blocks.module.css";
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

/** A client story written as a decision record: question, context, options, decision, consequences. */
export default async function CasePage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const index = cases.findIndex((x) => x.slug === slug);
  if (index < 0) notFound();
  const c = cases[index];
  const industry = industries.find((i) => i.slug === c.industry);
  const next = [cases[(index + 1) % cases.length], cases[(index + 2) % cases.length]];

  return (
    <main id="main">
      <section className={styles.hero}>
        <div className="container">
          <Breadcrumbs
            items={[
              { href: "/work", label: "Client work" },
              { href: `/work/${c.slug}`, label: c.client },
            ]}
          />
          <h1 className={`h1 ${styles.question}`}>{c.question}</h1>
          <p className={styles.asked}>
            Asked by {c.client}, {c.sector.toLowerCase()}, in {c.year}
          </p>
          <div className={styles.call}>
            <span className={styles.callMark}>Our call</span>
            <p>{c.decision}</p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className={b.banner}>
          <dl className={b.bannerStats}>
            {c.stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <dl className={`${b.facts} ${styles.facts}`}>
          <div>
            <dt>Industry</dt>
            <dd>{industry && <Link href={`/industries/${industry.slug}`}>{industry.name}</Link>}</dd>
          </div>
          <div>
            <dt>What we did</dt>
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
            <dt>Where</dt>
            <dd>{c.location}</dd>
          </div>
          <div>
            <dt>How long</dt>
            <dd>
              {c.duration}, {c.year}
            </dd>
          </div>
          <div>
            <dt>Team</dt>
            <dd>{c.team}</dd>
          </div>
        </dl>
      </div>

      <section className="section" data-section="context">
        <div className={`container ${b.split}`}>
          <h2 className="h2">Context.</h2>
          <div className={b.body}>
            {c.challenge.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section mist" data-section="options">
        <div className={`container ${b.split}`}>
          <div>
            <h2 className="h2">Options we weighed.</h2>
            <p className={styles.optionsNote}>Every engagement starts by writing these down, including the expensive ones.</p>
          </div>
          <ol className={styles.options}>
            {c.options.map((o) => (
              <li key={o.option} data-chosen={o.chosen || undefined}>
                <span className={styles.verdict}>{o.chosen ? "Chosen" : "Ruled out"}</span>
                <h3>{o.option}</h3>
                <p>{o.why}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" data-section="approach">
        <div className="container">
          <h2 className={`h2 ${styles.stepsHead}`}>What we did.</h2>
          <Steps steps={c.approach} />
        </div>
      </section>

      <section className="section" data-section="outcome">
        <div className={`container ${b.split}`}>
          <h2 className="h2">What changed.</h2>
          <div className={b.body}>
            {c.outcome.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <ul className={b.tools}>
              {c.stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section dark" data-section="quote">
        <div className="container">
          <blockquote className={b.quote}>
            <p>&ldquo;{c.quote.text}&rdquo;</p>
            <footer>
              <strong>{c.quote.name}</strong>
              {c.quote.role}
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="section" data-section="next">
        <div className="container">
          <div className={styles.nextHead}>
            <h2 className="h2">More decisions.</h2>
            <Link href="/work" className="go">
              All client work
            </Link>
          </div>
          <Decisions cases={next} head={false} />
        </div>
      </section>

      <Brief title="Facing a call like this?" />
    </main>
  );
}
