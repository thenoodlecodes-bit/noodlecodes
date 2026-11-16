import Link from "next/link";
import { person } from "@/content/people";
import { stack, stackReport } from "@/content/stack";
import type { Insight } from "@/content/types";
import { formatDate } from "@/lib/content";
import styles from "./Journal.module.css";

/** Class for any container of journal entries, such as the filtered insights list. */
export const journalList = styles.list;

/** One article as a dated notebook entry. */
export function JournalEntry({ i, lead = false }: { i: Insight; lead?: boolean }) {
  const author = person(i.author);
  return (
    <Link href={`/insights/${i.slug}`} className={`${styles.entry} ${lead ? styles.lead : ""}`}>
      <time className={styles.date} dateTime={i.date}>
        {formatDate(i.date)}
      </time>
      <span className={styles.body}>
        <span className={styles.title}>{i.title}</span>
        {lead && <span className={styles.dek}>{i.dek}</span>}
        <span className={styles.by}>
          {author.name}, {author.role} · {i.minutes} min read
        </span>
      </span>
      <span className={styles.cat}>{i.category}</span>
    </Link>
  );
}

export function Journal({ items, lead }: { items: Insight[]; lead?: Insight }) {
  return (
    <div className={styles.list}>
      {lead && <JournalEntry i={lead} lead />}
      {items.map((i) => (
        <JournalEntry key={i.slug} i={i} />
      ))}
    </div>
  );
}

/** The Stack Report as an object: a printed report cover with what changed this edition. */
export function ReportCover() {
  const fresh = stack.filter((s) => s.change === "new");
  const month = new Intl.DateTimeFormat("en-IN", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(stackReport.date));
  return (
    <Link href="/insights/stack-report" className={styles.cover}>
      <span className={styles.coverTop}>
        <span>{stackReport.edition}</span>
        <span>{month}</span>
      </span>
      <span className={styles.coverTitle}>The Stack Report</span>
      <span className={styles.coverLine}>
        {stack.length} tools and techniques. A verdict on each: default, pilot, watch or avoid.
      </span>
      <span className={styles.fresh}>
        <span className={styles.freshHead}>New this edition</span>
        {fresh.map((s) => (
          <span key={s.name}>{s.name}</span>
        ))}
      </span>
      <span className="go">Read the report</span>
    </Link>
  );
}
