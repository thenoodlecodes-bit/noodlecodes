import type { Metadata } from "next";
import { Brief } from "@/components/Brief/Brief";
import { FilterBoard } from "@/components/FilterBoard/FilterBoard";
import { JournalEntry, ReportCover, journalList } from "@/components/Journal/Journal";
import { PageHero } from "@/components/Page/Page";
import { insights } from "@/content/insights";
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
      <PageHero
        crumbs={[{ href: "/insights", label: "Insights" }]}
        title="Field notes from the work."
        intro="Written by the engineers, designers and marketers who did the work, about what held up and what did not."
      />

      <section className="section" data-section="featured">
        <div className={`container ${styles.top}`}>
          <div className={journalList}>
            <JournalEntry i={lead} lead />
          </div>
          <ReportCover />
        </div>
      </section>

      <section className="section" data-section="articles">
        <div className="container">
          <FilterBoard
            noun={["article", "articles"]}
            gridClassName={journalList}
            groups={[{ id: "category", label: "Topic", options: CATEGORIES.map((c) => ({ value: c, label: c })) }]}
            items={rest.map((i) => ({ category: [i.category] }))}
            cards={rest.map((i) => (
              <JournalEntry key={i.slug} i={i} />
            ))}
          />
        </div>
      </section>

      <Brief title="Want this thinking on your problem?" />
    </main>
  );
}
