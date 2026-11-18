import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs, StatStrip, type Crumb } from "@/components/Page/Page";
import { services } from "@/content/services";
import type { Stat } from "@/content/types";
import styles from "./service.module.css";

/** Top of a service page: what we do on the left, and how a first call about it usually starts on the right. */
export function ServiceHero({
  crumbs,
  title,
  intro,
  problem,
  reply,
  stats,
  price,
  children,
}: {
  crumbs: Crumb[];
  title: string;
  intro: string;
  problem: string;
  reply: string;
  stats: Stat[];
  /** The starting price line, when the service has one. */
  price?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <Breadcrumbs items={crumbs} />
        <div className={styles.heroGrid}>
          <div>
            <h1 className={`h1 ${styles.title}`}>{title}</h1>
            <p className="lede">{intro}</p>
            {children && <div className={styles.actions}>{children}</div>}
            {price && (
              <p className={styles.price}>
                {price}
                <Link href="/pricing">See pricing</Link>
              </p>
            )}
          </div>
          <figure className={styles.call}>
            <div className={styles.them}>
              <span className={styles.who}>Client</span>
              <blockquote>
                <p>{problem}</p>
              </blockquote>
            </div>
            <div className={styles.us}>
              <span className={styles.who}>Noodle Codes</span>
              <p>{reply}</p>
            </div>
            <figcaption className={styles.callNote}>How a first call usually starts</figcaption>
          </figure>
        </div>
        <StatStrip stats={stats} className={styles.strip} />
      </div>
    </section>
  );
}

/** Each service introduced by the problem clients bring to it, in their words. */
export function ProblemCards() {
  return (
    <ul className={styles.problems}>
      {services.map((s) => (
        <li key={s.slug}>
          <Link href={`/services/${s.slug}`} className={styles.problem}>
            <span className={styles.bubble}>&ldquo;{s.problem}&rdquo;</span>
            <h3 className={styles.pName}>{s.name}</h3>
            <span className={styles.pText}>{s.menu}.</span>
            <span className={`go ${styles.pGo}`}>How we help</span>
          </Link>
        </li>
      ))}
      <li>
        <Link href="/contact" className={`${styles.problem} ${styles.ask}`}>
          <h3 className={styles.pName}>None of these?</h3>
          <span className={styles.pText}>Describe the problem. We will tell you what it takes, even if it is not us.</span>
          <span className={`go ${styles.pGo}`}>Ask us</span>
        </Link>
      </li>
    </ul>
  );
}
