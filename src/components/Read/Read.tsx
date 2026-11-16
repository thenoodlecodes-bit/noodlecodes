import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/Page/Page";
import type { Step } from "@/content/types";
import styles from "./read.module.css";

/** Top of a page you read: a grey band with the title, a summary and plain facts about the page. No sales buttons. */
export function ReadHero({ crumbs, title, intro, meta, children }: { crumbs: Crumb[]; title: string; intro?: string; meta?: string[]; children?: ReactNode }) {
  return (
    <header className={styles.hero}>
      <div className="container">
        <Breadcrumbs items={crumbs} />
        <h1 className={styles.title}>{title}</h1>
        {intro && <p className={`lede ${styles.lede}`}>{intro}</p>}
        {meta && (
          <ul className={styles.meta}>
            {meta.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        )}
        {children}
      </div>
    </header>
  );
}

/** A reading column with an "On this page" list that stays in view. */
export function ReadLayout({ contents, aside, children }: { contents: { id: string; label: string }[]; aside?: ReactNode; children: ReactNode }) {
  return (
    <div className={`container ${styles.layout}`}>
      <aside className={styles.rail}>
        <nav aria-label="On this page" className={styles.toc}>
          <p className={styles.railTitle}>On this page</p>
          <ol>
            {contents.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`}>{c.label}</a>
              </li>
            ))}
          </ol>
        </nav>
        {aside}
      </aside>
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export function ReadSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className={styles.part} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className={styles.h2}>
        {title}
      </h2>
      {children}
    </section>
  );
}

/** Short titled points, each on its own panel. */
export function Points({ items }: { items: Step[] }) {
  return (
    <div className={styles.points}>
      {items.map((p) => (
        <div key={p.title} className={styles.point}>
          <h3>{p.title}</h3>
          <p>{p.text}</p>
        </div>
      ))}
    </div>
  );
}

/** A quiet next step under the contents list. */
export function RailAction({ text, href, label }: { text: string; href: string; label: string }) {
  return (
    <div className={styles.railAction}>
      <p>{text}</p>
      <Link href={href} className="btn btn--primary">
        {label}
      </Link>
    </div>
  );
}
