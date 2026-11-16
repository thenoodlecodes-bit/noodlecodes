import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Brief } from "@/components/Brief/Brief";
import { Decisions } from "@/components/Decisions/Decisions";
import { IndexList } from "@/components/IndexList/IndexList";
import { Faqs, Head, PageHero } from "@/components/Page/Page";
import b from "@/components/Page/blocks.module.css";
import { solutions } from "@/content/solutions";
import { casesBy } from "@/lib/content";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = solutions.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: `${s.name}, ${s.kind.toLowerCase()}`, description: s.intro, alternates: { canonical: `/solutions/${s.slug}` } };
}

export default async function SolutionPage({ params }: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const s = solutions.find((x) => x.slug === slug);
  if (!s) notFound();

  const stories = casesBy({ solution: s.slug });
  const others = solutions.filter((x) => x.slug !== s.slug);

  return (
    <main id="main">
      <PageHero
        tone="dark"
        stats={s.specs}
        crumbs={[
          { href: "/services", label: "What we do" },
          { href: "/services/plug-and-play", label: "Plug and play" },
          { href: `/solutions/${s.slug}`, label: s.name },
        ]}
        title={s.title}
        intro={s.intro}
      >
        <Link href="/contact?service=plug-and-play" className="btn btn--primary">
          Book a demo of {s.name}
        </Link>
        <span className="meta">
          {s.kind} · {s.timeline}
        </span>
      </PageHero>

      <section className="section" data-section="features">
        <div className="container">
          <Head title="What it does." />
          <div className={`${b.cards} ${b.cards3}`}>
            {s.features.map((f) => (
              <article key={f.title} className={b.card}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section mist" data-section="integrations">
        <div className={`container ${b.split}`}>
          <h2 className="h2">Works with what you run.</h2>
          <div className={b.body}>
            <p>
              {s.name} runs in your cloud account and connects to the tools below out of the box. Anything with an API can be added.
            </p>
            <ul className={b.tools}>
              {s.channels.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <ul className={b.tools}>
              {s.integrations.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {stories.length > 0 && (
        <section className="section" data-section="stories">
          <div className="container">
            <Head title={`${s.name} in production.`} />
            <Decisions cases={stories} />
          </div>
        </section>
      )}

      <Faqs faqs={s.faqs} />

      <section className="section mist" data-section="other-modules">
        <div className="container">
          <Head title="The other modules.">
            <Link href="/services/plug-and-play" className="go">
              How plug and play works
            </Link>
          </Head>
          <IndexList items={others.map((m) => ({ href: `/solutions/${m.slug}`, title: m.name, text: m.menu, tag: m.kind }))} />
        </div>
      </section>

      <Brief title={`What would ${s.name} fix for you?`} />
    </main>
  );
}
