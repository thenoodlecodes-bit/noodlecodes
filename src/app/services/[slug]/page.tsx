import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Brief } from "@/components/Brief/Brief";
import { CaseGrid } from "@/components/Cards/Cards";
import { ClientWall } from "@/components/Clients/Clients";
import { Faqs, Head, Steps } from "@/components/Page/Page";
import b from "@/components/Page/blocks.module.css";
import { ServiceHero } from "@/components/Service/Service";
import { ToolCards } from "@/components/Tool/Tool";
import { clients } from "@/content/clients";
import { services } from "@/content/services";
import { solutions } from "@/content/solutions";
import { casesBy } from "@/lib/content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: s.name, description: s.intro, alternates: { canonical: `/services/${s.slug}` } };
}

/** A service page reads like hiring a team: the problem, what you can hire us for, how it runs and what it changed. */
export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  const stories = casesBy({ service: s.slug }).slice(0, 3);
  const hired = clients.filter((c) => c.services.includes(s.slug));
  const modules = s.slug === "plug-and-play";

  return (
    <main id="main">
      <ServiceHero
        crumbs={[
          { href: "/services", label: "What we do" },
          { href: `/services/${s.slug}`, label: s.name },
        ]}
        title={s.name}
        intro={s.intro}
        problem={s.problem}
        reply={s.overview[0]}
        stats={s.stats}
      >
        <Link href={`/contact?service=${s.slug}`} className="btn btn--primary">
          Talk to us about {s.name.toLowerCase()}
        </Link>
        {stories.length > 0 && (
          <Link href="#stories" className="go">
            See results
          </Link>
        )}
      </ServiceHero>

      {modules && (
        <section className="section" data-section="modules">
          <div className="container">
            <Head title="Five modules, ready to install" text="Each runs in your cloud, on your data. Start with one and add more later." />
            <ToolCards items={solutions} />
          </div>
        </section>
      )}

      <section className="section mist" data-section="capabilities">
        <div className="container">
          <Head title={modules ? "How it works" : "What you can hire us for"} />
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
          <Head title="How a project runs" />
          <Steps steps={s.approach} />
        </div>
      </section>

      {hired.length > 0 && (
        <section className="section" data-section="clients">
          <div className="container">
            <Head title="Who hired us for this" text={`${hired.length} clients so far, from first-time founders to listed brands.`}>
              <Link href="/work" className="go">
                All clients
              </Link>
            </Head>
            <ClientWall list={hired} />
          </div>
        </section>
      )}

      {stories.length > 0 && (
        <section className="section" id="stories" data-section="stories">
          <div className="container">
            <Head title="Results for clients">
              <Link href="/work#stories" className="go">
                All client stories
              </Link>
            </Head>
            <CaseGrid cases={stories} />
          </div>
        </section>
      )}

      <Faqs faqs={s.faqs} />

      <Brief />
    </main>
  );
}
