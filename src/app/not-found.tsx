import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main id="main" className={`dark ${styles.page}`}>
      <div className={`container ${styles.inner}`}>
        <p className="meta">404</p>
        <h1 className="h1">This page got tangled.</h1>
        <p className="lede">The link may be old, or the page has moved. These will get you back on track.</p>
        <div className={styles.actions}>
          <Link className="btn btn--primary" href="/">
            Go to the home page
          </Link>
          <Link className="btn btn--light" href="/contact">
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
