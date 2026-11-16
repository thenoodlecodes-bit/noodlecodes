import type { Metadata } from "next";
import { Brief } from "@/components/Brief/Brief";
import { PageHero } from "@/components/Page/Page";
import { stack, stackReport, verdicts } from "@/content/stack";
import { formatDate } from "@/lib/content";
import { StackBoard } from "./StackBoard";
import styles from "./stack.module.css";

export const metadata: Metadata = {
  title: "The Stack Report",
  description: `${stackReport.edition} of the Noodle Codes Stack Report: ${stack.length} tools and techniques with our verdict on each.`,
  alternates: { canonical: "/insights/stack-report" },
};

export default function StackReportPage() {
  return (
    <main id="main">
      <PageHero
        crumbs={[
          { href: "/insights", label: "Insights" },
          { href: "/insights/stack-report", label: "The Stack Report" },
        ]}
        title="What we use, what we test and what we dropped."
        intro={stackReport.intro}
      >
        <span className="meta">
          {stackReport.edition} · Published {formatDate(stackReport.date)} · {stack.length} entries
        </span>
      </PageHero>

      <section className="section" data-section="verdicts">
        <div className="container">
          <p className={styles.summary}>{stackReport.summary}</p>
          <dl className={styles.legend}>
            {Object.entries(verdicts).map(([key, v]) => (
              <div key={key} data-verdict={key}>
                <dt>{v.label}</dt>
                <dd>{v.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" data-section="board">
        <div className="container">
          <StackBoard entries={stack} verdicts={verdicts} />
        </div>
      </section>

      <Brief title="Choosing a stack right now?" />
    </main>
  );
}
