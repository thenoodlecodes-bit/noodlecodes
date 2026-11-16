import Link from "next/link";
import { Breadcrumbs, type Crumb } from "@/components/Page/Page";
import type { Solution } from "@/content/types";
import { ToolPreview } from "./ToolPreview";
import styles from "./tool.module.css";

/** Top of a module page: the name, what it is, the demo button and key specs, beside a picture of it working. */
export function ToolHero({ s, crumbs }: { s: Solution; crumbs: Crumb[] }) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <Breadcrumbs items={crumbs} />
        <div className={styles.heroGrid}>
          <div>
            <h1 className={`h1 ${styles.name}`}>
              {s.name}
              <span className={styles.kind}>{s.kind}</span>
            </h1>
            <p className="lede">{s.intro}</p>
            <div className={styles.actions}>
              <Link href="/contact?service=plug-and-play" className="btn btn--primary">
                Book a demo of {s.name}
              </Link>
              <Link href="#specs" className="go">
                See the spec sheet
              </Link>
            </div>
            <dl className={styles.specs}>
              {s.specs.map((x) => (
                <div key={x.label}>
                  <dt>{x.label}</dt>
                  <dd>{x.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <ToolPreview slug={s.slug} />
        </div>
      </div>
    </section>
  );
}

export function ToolFeatures({ s }: { s: Solution }) {
  return (
    <ul className={styles.features}>
      {s.features.map((f) => (
        <li key={f.title}>
          <span className={styles.tick} aria-hidden="true">
            <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 10.5l4 4 8-9" />
            </svg>
          </span>
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </li>
      ))}
    </ul>
  );
}

/** What it covers, what it connects to, how long setup takes and where it runs. */
export function SpecSheet({ s }: { s: Solution }) {
  const rows: { label: string; chips?: string[]; text?: string }[] = [
    { label: "Covers", chips: s.channels },
    { label: "Works with", chips: s.integrations },
    { label: "Setup", text: s.timeline },
    { label: "Runs in", text: "Your own AWS or Google Cloud account" },
    { label: "You own", text: "The code, the data and the templates" },
  ];
  return (
    <div className={styles.specGrid}>
      <div className={styles.specHead}>
        <h2 className="h2">Spec sheet</h2>
        <p>{s.name} runs in your cloud account and connects to these tools out of the box. Anything with an API can be added.</p>
      </div>
      <dl className={styles.sheet}>
        {rows.map((r) => (
          <div key={r.label}>
            <dt>{r.label}</dt>
            <dd>
              {r.chips ? (
                <ul className="chips">
                  {r.chips.map((c) => (
                    <li key={c} className="chip">
                      {c}
                    </li>
                  ))}
                </ul>
              ) : (
                r.text
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** Module cards with a thumbnail of each one working. */
export function ToolCards({ items, cols = 3 }: { items: Solution[]; cols?: 2 | 3 }) {
  return (
    <ul className={cols === 2 ? styles.cards2 : styles.cards3}>
      {items.map((m) => (
        <li key={m.slug}>
          <Link href={`/solutions/${m.slug}`} className={styles.toolCard}>
            <ToolPreview slug={m.slug} small />
            <span className={styles.toolText}>
              <span className={styles.toolName}>
                {m.name}
                <span>{m.kind}</span>
              </span>
              <span className={styles.toolMenu}>{m.menu}</span>
              <span className={`go ${styles.toolGo}`}>See {m.name}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** A compact list of modules for narrow reading columns. */
export function ToolRows({ items }: { items: Solution[] }) {
  return (
    <ul className={styles.rows}>
      {items.map((m) => (
        <li key={m.slug}>
          <Link href={`/solutions/${m.slug}`} className={styles.rowCard}>
            <span className={styles.toolName}>
              {m.name}
              <span>{m.kind}</span>
            </span>
            <span className={styles.toolMenu}>{m.menu}</span>
            <span className="go" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
