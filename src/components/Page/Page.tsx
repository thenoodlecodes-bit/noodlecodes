import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import type { Faq, Stat, Step } from "@/content/types";
import styles from "./Page.module.css";

export type Crumb = { href: string; label: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ href: "/", label: "Home" }, ...items];
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, item: `${site.url}${c.href}` })),
  };
  return (
    <nav aria-label="Breadcrumb" className={styles.crumbs}>
      <ol>
        {all.map((c, i) => (
          <li key={c.href}>
            {i === all.length - 1 ? <span aria-current="page">{c.label}</span> : <Link href={c.href}>{c.label}</Link>}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </nav>
  );
}

/**
 * Top of every inner page: what the page is, one paragraph, actions, and the key numbers in a strip below.
 * `note` is a plain description shown under a name that needs one, such as a module name.
 */
export function PageHero({
  crumbs,
  title,
  note,
  intro,
  stats,
  children,
}: {
  crumbs: Crumb[];
  title: string;
  note?: string;
  intro?: string;
  stats?: Stat[];
  children?: ReactNode;
}) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <Breadcrumbs items={crumbs} />
        <div className={styles.heroText}>
          <h1 className={`h1 ${styles.heroTitle}`}>
            {title}
            {note && <span className={styles.heroNote}>{note}</span>}
          </h1>
          {intro && <p className="lede">{intro}</p>}
          {children && <div className={styles.heroActions}>{children}</div>}
        </div>
        {stats && <StatStrip stats={stats} className={styles.heroStrip} />}
      </div>
    </section>
  );
}

/** Key numbers in one dark strip, the first in red. */
export function StatStrip({ stats, className }: { stats: Stat[]; className?: string }) {
  return (
    <dl className={`${styles.strip} ${className ?? ""}`}>
      {stats.map((s) => (
        <div key={s.label}>
          <dt>{s.label}</dt>
          <dd>{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function StatRow({ stats, className }: { stats: Stat[]; className?: string }) {
  return (
    <dl className={`${styles.stats} ${className ?? ""}`}>
      {stats.map((s) => (
        <div key={s.label}>
          <dt>{s.label}</dt>
          <dd>{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Numbered steps. Only for content that really is a sequence. */
export function Steps({ steps }: { steps: Step[] }) {
  return (
    <ol className={styles.steps}>
      {steps.map((s, i) => (
        <li key={s.title}>
          <span className={styles.stepNo} aria-hidden="true">
            {i + 1}
          </span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function Faqs({ faqs, title = "Questions we get asked" }: { faqs: Faq[]; title?: string }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <section className="section">
      <div className={`container ${styles.faqGrid}`}>
        <h2 className="h2">{title}</h2>
        <div className={styles.faqs}>
          {faqs.map((f) => (
            <details key={f.q} name="faq">
              <summary>
                {f.q}
                <span className={styles.plus} aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </section>
  );
}

export function CtaBand({
  title = "Tell us what's tangled.",
  text = "A senior person reads every message and replies within one working day.",
  action = { href: "/contact", label: "Start a conversation" },
  mail = site.emails.hello,
}: {
  title?: string;
  text?: string;
  action?: { href: string; label: string };
  mail?: string;
}) {
  return (
    <section className={styles.cta} data-section="cta">
      <div className={`container ${styles.ctaGrid}`}>
        <h2 className="h2">{title}</h2>
        <div className={styles.ctaSide}>
          <p>{text}</p>
          <div className={styles.ctaActions}>
            {action.href.startsWith("/") ? (
              <Link href={action.href} className={`btn ${styles.ctaBtn}`}>
                {action.label}
              </Link>
            ) : (
              <a href={action.href} className={`btn ${styles.ctaBtn}`}>
                {action.label}
              </a>
            )}
            <a href={`mailto:${mail}`} className={styles.ctaMail}>
              {mail}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Section head: a short heading, one line of context under it, and an optional link on the right. */
export function Head({ title, text, children, id }: { title: string; text?: string; children?: ReactNode; id?: string }) {
  return (
    <div className="head">
      <div className="headText">
        <h2 className="h2" id={id}>
          {title}
        </h2>
        {text && <p>{text}</p>}
      </div>
      {children}
    </div>
  );
}
