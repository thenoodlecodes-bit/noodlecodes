import styles from "./Logo.module.css";

/** The mark is one strand pulled into an n. */
export function Mark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="var(--brand)" />
      <path
        d="M8.5 23.5V14a4.25 4.25 0 0 1 8.5 0v4.5a3.25 3.25 0 0 0 6.5 0V8.5"
        fill="none"
        stroke="var(--paper)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ tone = "ink" }: { tone?: "ink" | "light" }) {
  return (
    <span className={`${styles.logo} ${tone === "light" ? styles.light : ""}`}>
      <Mark className={styles.mark} />
      <span className={styles.word}>noodle codes</span>
    </span>
  );
}
