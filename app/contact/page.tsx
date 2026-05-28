import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Start a project",
  description:
    "Tell us about your project. We reply within 24 hours with a free 30-min consult slot. Or book directly via Calendly. No sales calls, no pressure.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <main id="main">
      <header className="page-head">
        <div className="wrap">
          <div className="crumb rise-1">
            <Link href="/">Home</Link>
            <span className="sep">/</span>Contact
          </div>
          <span className="eyebrow rise-2">Place your order</span>
          <h1 className="rise-3">
            Let&rsquo;s <em>cook</em>
            <br />
            something good.
          </h1>
          <p className="lede rise-4">
            Tell us about your project. The more detail, the better the first
            reply. We respond within <b>24 hours</b> on weekdays with a free
            30-min consult slot — no sales pitch, no follow-up funnels.
          </p>
        </div>
      </header>

      <section style={{ padding: "60px 0 100px" }}>
        <div className="wrap">
          <div className="contact-grid">
            {/* FORM (client component) */}
            <ContactForm />

            {/* SIDEBAR */}
            <aside>
              <div className="side-card dark reveal">
                <div className="ico">📅</div>
                <h3>Prefer to book directly?</h3>
                <p>
                  Skip the form and grab a 30-min slot on our calendar. We&rsquo;ll
                  send the Loom intro &amp; call link.
                </p>
                <a href="#" className="btn btn-primary">
                  Book on Calendly <span className="arr">↗</span>
                </a>
              </div>

              <div className="side-card reveal">
                <div className="ico">✉️</div>
                <h3>Old-school email?</h3>
                <p>
                  Just write to us. We read every line. Reply within 24h on
                  weekdays.
                </p>
                <a href="mailto:hello@noodlecodes.dev" className="btn btn-secondary">
                  hello@noodlecodes.dev <span className="arr">→</span>
                </a>
              </div>

              <div className="side-card reveal">
                <span className="eyebrow" style={{ marginBottom: "16px" }}>
                  What we won&rsquo;t do
                </span>
                <ul className="commit-list">
                  <li><span className="check">✓</span> Add you to a drip campaign</li>
                  <li><span className="check">✓</span> Sell or share your data</li>
                  <li><span className="check">✓</span> Pressure you into a contract</li>
                  <li><span className="check">✓</span> Auto-reply with a 7-day funnel</li>
                  <li><span className="check">✓</span> Pitch a service you didn&rsquo;t ask about</li>
                </ul>
              </div>
            </aside>
          </div>

          {/* RESPONSE PROMISE */}
          <div className="promise reveal">
            <div>
              <h3>
                You&rsquo;ll hear back within <em>24 hours</em>.
              </h3>
              <p>
                Every weekday inquiry gets a reply by EOD next business day, or
                we&rsquo;ll buy your team coffee. (Has happened twice. Both times
                we paid.) Weekends &amp; holidays — within 48h.
              </p>
            </div>
            <div className="promise-stat">
              24<span style={{ color: "var(--sauce)" }}>h</span>
              <small>Avg. first reply</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
