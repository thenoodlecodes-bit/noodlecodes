import Link from "next/link";

export default function NotFound() {
  return (
    <main className="err-wrap" id="main">
      <div>
        <h1 className="err-num">
          4<span className="zero">0</span>4
        </h1>
        <div className="err-msg">
          <h2>
            This page is <em>overcooked.</em>
          </h2>
          <p>
            Either the URL got mangled in transit, or this dish is no longer on
            the menu. No drama — let&rsquo;s get you back to something edible.
          </p>
          <div className="err-links">
            <Link href="/" className="btn btn-primary">
              Back to home <span className="arr">↗</span>
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Holler at us <span className="arr">→</span>
            </Link>
          </div>
          <div className="err-quick">
            Or jump to: <Link href="/services">Services</Link>·
            <Link href="/work">Work</Link>·<Link href="/pricing">Pricing</Link>·
            <Link href="/about">About</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
