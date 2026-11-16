import Link from "next/link";
import { services } from "@/content/services";
import styles from "./Problems.module.css";

/** The five services, introduced by the sentence a client says when they call. */
export function Problems() {
  return (
    <ul className={styles.list}>
      {services.map((s) => (
        <li key={s.slug}>
          <Link href={`/services/${s.slug}`} className={styles.row}>
            <q className={styles.problem}>{s.problem}</q>
            <span className={styles.answer}>
              <strong>{s.name}</strong>
              <span>{s.menu}</span>
            </span>
            <span className={styles.go} aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
