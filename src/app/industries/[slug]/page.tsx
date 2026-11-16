import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Brief } from "@/components/Brief/Brief";
import { CaseGrid, Tiles } from "@/components/Cards/Cards";
import { ClientWall } from "@/components/Clients/Clients";
import { StatStrip } from "@/components/Page/Page";
import { Points, RailAction, ReadHero, ReadLayout, ReadSection } from "@/components/Read/Read";
import { ToolRows } from "@/components/Tool/Tool";
import { clients } from "@/content/clients";
import { industries } from "@/content/industries";
import { service } from "@/content/services";
import { solution } from "@/content/solutions";
import { casesBy } from "@/lib/content";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const i = industries.find((x) => x.slug === slug);
  if (!i) return {};
  return { title: i.name, description: i.intro, alternates: { canonical: `/industries/${i.slug}` } };
}

/** An industry page reads like a briefing: what makes the sector hard, the numbers, how we help and proof. */
export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const i = industries.find((x) => x.slug === slug);
  if (!i) notFound();

  const stories = casesBy({ industry: i.slug });
  const sectorClients = clients.filter((c) => c.industry === i.slug);
  const contents = [
    { id: "hard", label: "What makes it hard" },
    { id: "numbers", label: "In numbers" },
    { id: "help", label: "How we help" },
    { id: "clients", label: "Clients in this sector" },
    ...(stories.length > 0 ? [{ id: "stories", label: "Client stories" }] : []),
    { id: "tools", label: "Ready-made tools" },
  ];

  return (
    <main id="main">
      <ReadHero
        crumbs={[
          { href: "/industries", label: "Industries" },
          { href: `/industries/${i.slug}`, label: i.name },
        ]}
        title={i.name}
        intro={i.intro}
        meta={[
          `${sectorClients.length} clients`,
          `${stories.length} client ${stories.length === 1 ? "story" : "stories"}`,
          `${i.offerings.length} ways we help`,
          `${i.solutions.length} ready-made tools`,
        ]}
      />

      <ReadLayout contents={contents} aside={<RailAction text="Have a project in this sector?" href="/contact" label="Talk to our team" />}>
        <ReadSection id="hard" title="What makes it hard">
          <Points items={i.challenges} />
        </ReadSection>

        <ReadSection id="numbers" title="In numbers">
          <StatStrip stats={i.stats} />
        </ReadSection>

        <ReadSection id="help" title="How we help">
          <Tiles cols={2} items={i.offerings.map((o) => ({ href: `/services/${o.service}`, title: o.title, text: o.text, tag: service(o.service).name }))} />
        </ReadSection>

        <ReadSection id="clients" title="Clients in this sector">
          <ClientWall list={sectorClients} cols={4} />
        </ReadSection>

        {stories.length > 0 && (
          <ReadSection id="stories" title="Client stories">
            <CaseGrid cases={stories} cols={2} />
          </ReadSection>
        )}

        <ReadSection id="tools" title="Ready-made tools">
          <ToolRows items={i.solutions.map((s) => solution(s))} />
        </ReadSection>
      </ReadLayout>

      <Brief />
    </main>
  );
}
