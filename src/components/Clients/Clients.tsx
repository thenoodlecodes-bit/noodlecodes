import Link from "next/link";
import { clients, clientForStory, type Client } from "@/content/clients";
import { industries } from "@/content/industries";
import type { CaseStudy } from "@/content/types";
import styles from "./clients.module.css";

/** Grid class for client cards built elsewhere, such as the filtered list on the clients page. */
export const rosterGrid = styles.roster;

/** A client's wordmark, set in type until real logos arrive. Sizes follow the parent font size. */
export function ClientMark({ c, className }: { c: Client; className?: string }) {
  return (
    <span className={`${styles.logo} ${styles[c.style]} ${className ?? ""}`}>
      {c.mark && <i className={`${styles.mark} ${styles[c.mark]}`} aria-hidden="true" />}
      {c.logo ?? c.name}
    </span>
  );
}

/** Wordmarks on solid tiles. Clients with a story link to it. */
export function ClientWall({ list = clients, cols = 6 }: { list?: Client[]; cols?: 4 | 6 }) {
  return (
    <ul className={`${styles.wall} ${cols === 4 ? styles.wall4 : ""}`}>
      {list.map((c) => (
        <li key={c.name}>
          {c.story ? (
            <Link href={`/work/${c.story}`} className={`${styles.tile} ${styles.tileLink}`} aria-label={`${c.name}, read their story`}>
              <ClientMark c={c} />
              <span className={styles.tileTag} aria-hidden="true">
                Story
              </span>
            </Link>
          ) : (
            <span className={styles.tile}>
              <ClientMark c={c} />
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

/** The home band: how many companies trust us, beside a wall of their wordmarks. */
export function ClientBand() {
  const sectors = new Set(clients.map((c) => c.industry)).size;
  return (
    <div className={styles.band}>
      <div className={styles.bandText}>
        <p className={styles.count}>{clients.length}</p>
        <h2 className={styles.bandTitle}>companies trust us with their software</h2>
        <p className={styles.bandLine}>From first-time founders to listed brands, across {sectors} industries.</p>
        <Link href="/work" className="go">
          Meet our clients
        </Link>
      </div>
      <ClientWall list={clients.slice(0, 12)} cols={4} />
    </div>
  );
}

/** One client in the roster: who they are, where, what we did and since when. */
export function ClientCard({ c }: { c: Client }) {
  const industry = industries.find((i) => i.slug === c.industry);
  const body = (
    <>
      <span className={styles.cardLogo}>
        <ClientMark c={c} />
      </span>
      <span className={styles.cardBody}>
        <strong className={styles.cardName}>{c.name}</strong>
        <span className={styles.cardMeta}>
          {industry?.name} · {c.city}
        </span>
        <span className={styles.cardWork}>{c.work}</span>
        <span className={styles.cardFoot}>
          <span className="meta">Client since {c.since}</span>
          {c.story && <span className="go">Read their story</span>}
        </span>
      </span>
    </>
  );
  return c.story ? (
    <Link href={`/work/${c.story}`} className={`${styles.card} ${styles.cardLink}`}>
      {body}
    </Link>
  ) : (
    <div className={styles.card}>{body}</div>
  );
}

/** Clients in their own words, with a link to the story behind each quote. */
export function ClientQuotes({ stories }: { stories: CaseStudy[] }) {
  return (
    <ul className={styles.quotes}>
      {stories.map((s) => {
        const client = clientForStory(s.slug);
        return (
          <li key={s.slug}>
            <figure className={styles.quote}>
              {client && <ClientMark c={client} className={styles.quoteMark} />}
              <blockquote>
                <p>&ldquo;{s.quote.text}&rdquo;</p>
              </blockquote>
              <figcaption>
                <strong>{s.quote.role}</strong>
              </figcaption>
              <Link href={`/work/${s.slug}`} className="go">
                Read the story
              </Link>
            </figure>
          </li>
        );
      })}
    </ul>
  );
}
