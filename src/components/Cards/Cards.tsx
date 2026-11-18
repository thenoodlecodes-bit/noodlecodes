import Link from "next/link";
import { ClientMark } from "@/components/Clients/Clients";
import { Pictogram } from "@/components/Pictogram/Pictogram";
import { clientForStory } from "@/content/clients";
import { industries } from "@/content/industries";
import { services } from "@/content/services";
import { stack, stackReport } from "@/content/stack";
import { formatDate } from "@/lib/content";
import type { CaseStudy, Insight } from "@/content/types";
import styles from "./cards.module.css";

/** Grid class for card lists built elsewhere, such as the filtered work and article lists. */
export const cardGrid = styles.grid3;

/** The five services, each with a drawing, a one-line summary and a link. The sixth cell invites a question. */
export function ServiceCards() {
  return (
    <ul className={styles.grid3}>
      {services.map((s) => (
        <li key={s.slug}>
          <Link href={`/services/${s.slug}`} className={styles.card}>
            <Pictogram name={s.slug} className={styles.picto} />
            <h3 className={styles.title}>{s.name}</h3>
            <p className={styles.text}>{s.menu}.</p>
            <span className={`go ${styles.foot}`}>Learn more</span>
          </Link>
        </li>
      ))}
      <li>
        <Link href="/contact" className={`${styles.card} ${styles.invert}`}>
          <h3 className={styles.title}>Not sure which one you need?</h3>
          <p className={styles.text}>Describe the problem. We will tell you what it takes, even if it is not us.</p>
          <span className={`go ${styles.foot}`}>Ask us</span>
        </Link>
      </li>
    </ul>
  );
}

/** A client story, led by the number that changed. */
export function CaseCard({ c }: { c: CaseStudy }) {
  const industry = industries.find((i) => i.slug === c.industry);
  const lead = c.stats[0];
  const client = clientForStory(c.slug);
  return (
    <Link href={`/work/${c.slug}`} className={styles.card}>
      <span className={styles.caseTop}>
        <strong className={styles.caseClient}>{client ? <ClientMark c={client} /> : c.client}</strong>
        <span className="chip">{industry?.name}</span>
      </span>
      <span className={styles.stat}>{lead.value}</span>
      <span className={styles.statLabel}>{lead.label}</span>
      <span className={styles.asked}>
        <span className={styles.askedLabel}>They asked</span>
        {c.question}
      </span>
      <span className={`go ${styles.foot}`}>Read the story</span>
    </Link>
  );
}

export function CaseGrid({ cases, cols = 3 }: { cases: CaseStudy[]; cols?: 2 | 3 }) {
  return (
    <ul className={cols === 2 ? styles.grid2 : styles.grid3}>
      {cases.map((c) => (
        <li key={c.slug}>
          <CaseCard c={c} />
        </li>
      ))}
    </ul>
  );
}

/** `lead` is the featured article: a larger headline for the wide slot. */
export function ArticleCard({ i, lead = false }: { i: Insight; lead?: boolean }) {
  return (
    <Link href={`/insights/${i.slug}`} className={`${styles.card} ${lead ? styles.lead : ""}`}>
      <span className="chip">{i.category}</span>
      <h3 className={styles.title}>{i.title}</h3>
      <p className={styles.text}>{i.dek}</p>
      <span className={`meta ${styles.foot}`}>
        {formatDate(i.date)} · {i.minutes} min read
      </span>
    </Link>
  );
}

export function ArticleGrid({ items }: { items: Insight[] }) {
  return (
    <ul className={styles.grid3}>
      {items.map((i) => (
        <li key={i.slug}>
          <ArticleCard i={i} />
        </li>
      ))}
    </ul>
  );
}

export type TileItem = { href: string; title: string; text: string; tag?: string; stat?: string };

/** Simple link cards for modules, industries and offerings. */
export function Tiles({ items, cols = 3 }: { items: TileItem[]; cols?: 2 | 3 }) {
  return (
    <ul className={cols === 2 ? styles.grid2 : styles.grid3}>
      {items.map((t) => (
        <li key={t.href + t.title}>
          <Link href={t.href} className={styles.card}>
            {t.stat && <span className={styles.tileStat}>{t.stat}</span>}
            <h3 className={styles.title}>{t.title}</h3>
            <p className={styles.text}>{t.text}</p>
            {t.tag && <span className={`chip ${styles.foot}`}>{t.tag}</span>}
          </Link>
        </li>
      ))}
    </ul>
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
      <span className={styles.coverLine}>{stack.length} tools we rate as default, pilot, watch or avoid.</span>
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
