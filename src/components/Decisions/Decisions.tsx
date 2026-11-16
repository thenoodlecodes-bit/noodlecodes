import Link from "next/link";
import type { CaseStudy } from "@/content/types";
import styles from "./Decisions.module.css";

/** Class for any container of decision rows, such as the filtered work list. */
export const decisionList = styles.list;

/** One client story as a decision: what they asked, what we said, what happened. */
export function DecisionRow({ c }: { c: CaseStudy }) {
  const lead = c.stats[0];
  return (
    <Link href={`/work/${c.slug}`} className={styles.row}>
      <span className={styles.who}>
        <strong>{c.client}</strong>
        <span className="meta">
          {c.sector}, {c.year}
        </span>
      </span>
      <span className={styles.q}>{c.question}</span>
      <span className={styles.call}>{c.decision}</span>
      <span className={styles.result}>
        <strong>{lead.value}</strong>
        <span>{lead.label}</span>
      </span>
    </Link>
  );
}

export function Decisions({ cases, head = true }: { cases: CaseStudy[]; head?: boolean }) {
  return (
    <div className={styles.list}>
      {head && (
        <div className={styles.cols} aria-hidden="true">
          <span>Client</span>
          <span>They asked</span>
          <span>We said</span>
          <span>Result</span>
        </div>
      )}
      {cases.map((c) => (
        <DecisionRow key={c.slug} c={c} />
      ))}
    </div>
  );
}
