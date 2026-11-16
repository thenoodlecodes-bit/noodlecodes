import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Brief } from "@/components/Brief/Brief";
import { Decisions } from "@/components/Decisions/Decisions";
import { IndexList } from "@/components/IndexList/IndexList";
import { Journal } from "@/components/Journal/Journal";
import { Faqs, Head, PageHero, Steps } from "@/components/Page/Page";
import b from "@/components/Page/blocks.module.css";
import { services } from "@/content/services";
import { solutions } from "@/content/solutions";
import { casesBy, insightsBy } from "@/lib/content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: s.name, description: s.intro, alternates: { canonical: `/services/${s.slug}` } };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  const stories = casesBy({ service: s.slug }).slice(0, 3);
  const reading = insightsBy({ service: s.slug }).slice(0, 3);
  const [first, ...rest] = s.overview;

  return (
    <main id="main">
      <PageHero
        tone="dark"
        stats={s.stats}
        crumbs={[
          { href: "/services", label: "What we do" },
          { href: `/services/${s.slug}`, label: s.name },
        ]}
        title={s.title}
        intro={s.intro}
      >
        <Link href={`/contact?service=${s.slug}`} className="btn btn--primary">
          Talk to us about {s.name.toLowerCase()}
        </Link>
        {stories.length > 0 && (
          <Link href="#stories" className="go">
            See client decisions
          </Link>
        )}
      </PageHero>

      <section className="section" data-section="overview">
        <div className="container">
          <div className={b.split}>
            <figure className={b.problem}>
              <blockquote>
                <p>{s.problem}</p>
              </blockquote>
              <figcaption>What clients usually say on the first call</figcaption>
            </figure>
            <div className={b.body}>
              <p>{first}</p>
              {rest.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {s.slug === "plug-and-play" && (
        <section className="section mist" data-section="modules">
          <div className="container">
            <Head title="Five modules, ready to install.">
              <p>Each one runs in your cloud, on your data. Start with one and add the rest when you need them.</p>
            </Head>
            <IndexList items={solutions.map((m) => ({ href: `/solutions/${m.slug}`, title: m.name, text: m.menu, tag: `${m.kind}, ${m.timeline.toLowerCase()}` }))} />
          </div>
        </section>
      )}

      <section className={`section ${s.slug === "plug-and-play" ? "" : "mist"}`} data-section="capabilities">
        <div className="container">
          <Head title={s.slug === "plug-and-play" ? "How it works." : "How we help."} />
          <div className={b.cards}>
            {s.capabilities.map((c) => (
              <article key={c.title} className={b.card}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <ul className={b.ticks}>
                  {c.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark" data-section="approach">
        <div className="container">
          <Head title="How an engagement runs." />
          <Steps steps={s.approach} />
        </div>
      </section>

      {stories.length > 0 && (
        <section className="section" id="stories" data-section="stories">
          <div className="container">
            <Head title="Decisions we made for clients.">
              <Link href="/work" className="go">
                All client work
              </Link>
            </Head>
            <Decisions cases={stories} />
          </div>
        </section>
      )}

      <section className="section mist" data-section="stack">
        <div className={`container ${b.split}`}>
          <h2 className="h2">Tools we reach for.</h2>
          <div>
            <ul className={b.tools}>
              {s.stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className={b.toolsFoot}>
              <Link href="/insights/stack-report" className="go">
                Why we pick them, in the Stack Report
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Faqs faqs={s.faqs} />

      {reading.length > 0 && (
        <section className="section" data-section="reading">
          <div className="container">
            <Head title="Further reading.">
              <Link href="/insights" className="go">
                All insights
              </Link>
            </Head>
            <Journal items={reading} />
          </div>
        </section>
      )}

      <Brief />
    </main>
  );
}
