import { clients } from "@/content/clients";
import styles from "./ClientWall.module.css";

/** Placeholder wordmarks set in type, until real logos arrive. */
export function ClientWall({ limit }: { limit?: number }) {
  const list = limit ? clients.slice(0, limit) : clients;
  return (
    <div className={styles.wrap}>
      <p className={styles.line}>
        Trusted by {clients.length} companies, from first-time founders to listed brands.
      </p>
      <ul className={styles.wall}>
        {list.map((c) => (
          <li key={c.name} className={styles[c.style]}>
            {c.mark && <i className={`${styles.mark} ${styles[c.mark]}`} aria-hidden="true" />}
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
