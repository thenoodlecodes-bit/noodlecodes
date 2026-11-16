import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Brief } from "@/components/Brief/Brief";
import { CaseGrid } from "@/components/Cards/Cards";
import { Faqs, Head } from "@/components/Page/Page";
import { SpecSheet, ToolCards, ToolFeatures, ToolHero } from "@/components/Tool/Tool";
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

/** A module page reads like a product page: the tool working, what it does, and its spec sheet. */
export default async function SolutionPage({ params }: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const s = solutions.find((x) => x.slug === slug);
  if (!s) notFound();

  const stories = casesBy({ solution: s.slug });
  const others = solutions.filter((x) => x.slug !== s.slug);

  return (
    <main id="main">
      <ToolHero
        s={s}
        crumbs={[
          { href: "/services", label: "What we do" },
          { href: "/services/plug-and-play", label: "Plug and play" },
          { href: `/solutions/${s.slug}`, label: s.name },
        ]}
      />

      <section className="section" data-section="features">
        <div className="container">
          <Head title="What it does" />
          <ToolFeatures s={s} />
        </div>
      </section>

      <section className="section mist" id="specs" data-section="specs">
        <div className="container">
          <SpecSheet s={s} />
        </div>
      </section>

      {stories.length > 0 && (
        <section className="section" data-section="stories">
          <div className="container">
            <Head title={`${s.name} in production`} />
            <CaseGrid cases={stories} />
          </div>
        </section>
      )}

      <Faqs faqs={s.faqs} />

      <section className="section mist" data-section="other-modules">
        <div className="container">
          <Head title="The other modules">
            <Link href="/services/plug-and-play" className="go">
              How plug and play works
            </Link>
          </Head>
          <ToolCards items={others} cols={2} />
        </div>
      </section>

      <Brief title={`What would ${s.name} fix for you?`} />
    </main>
  );
}
