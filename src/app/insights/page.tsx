import type { Metadata } from "next";
import { Brief } from "@/components/Brief/Brief";
import { FilterBoard } from "@/components/FilterBoard/FilterBoard";
import { ArticleCard, ReportCover, cardGrid } from "@/components/Cards/Cards";
import { ReadHero } from "@/components/Read/Read";
import { insights } from "@/content/insights";
import { stackReport } from "@/content/stack";
import type { InsightCategory } from "@/content/types";
import styles from "./insights.module.css";

export const metadata: Metadata = {
  title: "Insights",
  description: "Field notes on engineering, AI, growth and measurement from the people at Noodle Codes who did the work.",
  alternates: { canonical: "/insights" },
};

const CATEGORIES: InsightCategory[] = ["Engineering", "AI", "Growth", "Measurement", "Leadership"];

export default function InsightsPage() {
  const lead = insights.find((i) => i.featured) ?? insights[0];
  const rest = insights.filter((i) => i !== lead);
  return (
    <main id="main">
      <ReadHero
        crumbs={[{ href: "/insights", label: "Insights" }]}
        title="Ideas and guides"
        intro="Practical articles from our engineers, designers and marketers."
        meta={[`${insights.length} articles`, `${CATEGORIES.length} topics`, `The Stack Report, ${stackReport.edition}`]}
      />

      <section className="section" data-section="featured">
        <div className={`container ${styles.top}`}>
          <ArticleCard i={lead} lead />
          <ReportCover />
        </div>
      </section>

      <section className="section" data-section="articles">
        <div className="container">
          <FilterBoard
            noun={["article", "articles"]}
            gridClassName={cardGrid}
            groups={[{ id: "category", label: "Topic", options: CATEGORIES.map((c) => ({ value: c, label: c })) }]}
            items={rest.map((i) => ({ category: [i.category] }))}
            cards={rest.map((i) => (
              <ArticleCard key={i.slug} i={i} />
            ))}
          />
        </div>
      </section>

      <Brief title="Want this thinking on your problem?" />
    </main>
  );
}
