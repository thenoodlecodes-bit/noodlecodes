import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Brief } from "@/components/Brief/Brief";
import { Decisions } from "@/components/Decisions/Decisions";
import { IndexList } from "@/components/IndexList/IndexList";
import { Journal } from "@/components/Journal/Journal";
import { Head, PageHero } from "@/components/Page/Page";
import b from "@/components/Page/blocks.module.css";
import { industries } from "@/content/industries";
import { service } from "@/content/services";
import { solution } from "@/content/solutions";
import { casesBy, insightsBy } from "@/lib/content";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const i = industries.find((x) => x.slug === slug);
  if (!i) return {};
  return { title: i.name, description: i.intro, alternates: { canonical: `/industries/${i.slug}` } };
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const i = industries.find((x) => x.slug === slug);
  if (!i) notFound();

  const stories = casesBy({ industry: i.slug });
  const reading = insightsBy({ industry: i.slug }).slice(0, 3);

  return (
    <main id="main">
      <PageHero
        tone="dark"
        stats={i.stats}
        crumbs={[
          { href: "/industries", label: "Industries" },
          { href: `/industries/${i.slug}`, label: i.name },
        ]}
        title={i.title}
        intro={i.intro}
      >
        <Link href="/contact" className="btn btn--primary">
          Talk to our {i.name.toLowerCase()} team
        </Link>
      </PageHero>

      <section className="section" data-section="challenges">
        <div className="container">
          <Head title="What makes it hard." />
          <div className={`${b.cards} ${b.cards3}`}>
            {i.challenges.map((c) => (
              <article key={c.title} className={b.card}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section mist" data-section="offerings">
        <div className="container">
          <Head title="What we do about it." />
          <IndexList items={i.offerings.map((o) => ({ href: `/services/${o.service}`, title: o.title, text: o.text, tag: service(o.service).name }))} />
        </div>
      </section>

      {stories.length > 0 && (
        <section className="section" data-section="stories">
          <div className="container">
            <Head title="Decisions we made in this sector.">
              <Link href="/work" className="go">
                All client work
              </Link>
            </Head>
            <Decisions cases={stories} />
          </div>
        </section>
      )}

      <section className="section mist" data-section="modules">
        <div className="container">
          <Head title="Modules that fit.">
            <p>Ready-built pieces we install for {i.name.toLowerCase()} teams, live in days.</p>
          </Head>
          <IndexList items={i.solutions.map((slug) => solution(slug)).map((m) => ({ href: `/solutions/${m.slug}`, title: m.name, text: m.menu, tag: m.kind }))} />
        </div>
      </section>

      {reading.length > 0 && (
        <section className="section" data-section="reading">
          <div className="container">
            <Head title="Further reading." />
            <Journal items={reading} />
          </div>
        </section>
      )}

      <Brief />
    </main>
  );
}
