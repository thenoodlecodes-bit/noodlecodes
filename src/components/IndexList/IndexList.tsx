import Link from "next/link";
import styles from "./IndexList.module.css";

export type IndexItem = { href: string; title: string; text: string; tag?: string };

/** A list of links set as rows, the way a printed index reads. */
export function IndexList({ items }: { items: IndexItem[] }) {
  return (
    <ul className={styles.list}>
      {items.map((it) => (
        <li key={it.href + it.title}>
          <Link href={it.href} className={styles.row}>
            <span className={styles.title}>{it.title}</span>
            <span className={styles.text}>{it.text}</span>
            {it.tag ? <span className={styles.tag}>{it.tag}</span> : <span />}
            <span className={styles.go} aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
