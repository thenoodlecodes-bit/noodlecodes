import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing. Three engagement models: fixed-price projects from $4,500, monthly retainers from $6,500, and day-rate consultancy from $1,200. No hidden fees.",
  alternates: { canonical: "/pricing" },
};

export default function Pricing() {
  return (
    <main id="main">
      <header className="page-head">
        <div className="wrap">
          <div className="crumb rise-1">
            <Link href="/">Home</Link>
            <span className="sep">/</span>Pricing
          </div>
          <span className="eyebrow rise-2">No &ldquo;contact sales&rdquo; pages here</span>
          <h1 className="rise-3">
            Real prices.
            <br />
            <em>No fluff.</em>
          </h1>
          <p className="lede rise-4">
            Three ways to work with us — pick whichever fits. All prices include
            senior engineers, design, deploy, and a 90-day post-launch warranty.
            No hourly billing, no surprise invoices, no &ldquo;scope creep&rdquo;
            tax.
          </p>
        </div>
      </header>

      {/* PRICING TIERS */}
      <section style={{ paddingTop: "60px" }}>
        <div className="wrap">
          <div className="price-grid">
            {/* PROJECT */}
            <div className="price-card reveal">
              <div className="price-label">{"// Engagement 01"}</div>
              <h3>Project-based</h3>
              <div className="price-desc">
                One scope. One price. Locked in writing before we start.
              </div>
              <div className="price-amount">
                $4.5k<span className="small">+</span>
              </div>
              <div className="price-meta">Fixed-price · 2–12 weeks</div>

              <ul className="price-list">
                <li>End-to-end: design + dev + deploy</li>
                <li>Senior engineer + designer assigned</li>
                <li>Weekly demos + daily Looms</li>
                <li>Direct Slack with the team</li>
                <li>Full repo + IP from day one</li>
                <li>90-day free post-launch support</li>
              </ul>

              <div className="price-cta">
                <Link
                  href="/contact?engagement=project"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Start a project <span className="arr">↗</span>
                </Link>
              </div>
            </div>

            {/* RETAINER (featured) */}
            <div className="price-card feature reveal" id="retainer">
              <span className="price-tag-line">Most popular</span>
              <div className="price-label">{"// Engagement 02"}</div>
              <h3>Monthly retainer</h3>
              <div className="price-desc">
                Embedded dev team. Continuous shipping. Same crew every month.
              </div>
              <div className="price-amount">
                $6.5k<span className="small">/mo</span>
              </div>
              <div className="price-meta">Min. 3 months · pause anytime after</div>

              <ul className="price-list">
                <li>Dedicated senior eng. + 0.5 designer</li>
                <li>~80 hrs/mo of focused work</li>
                <li>2-week sprints, you set the priority</li>
                <li>Weekly demos + daily Looms</li>
                <li>Direct Slack, &lt; 4hr response</li>
                <li>Quarterly architecture &amp; strategy review</li>
                <li>30% off any one-off project add-ons</li>
              </ul>

              <div className="price-cta">
                <Link
                  href="/contact?engagement=retainer"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Start a retainer <span className="arr">↗</span>
                </Link>
              </div>
            </div>

            {/* DAY RATE */}
            <div className="price-card reveal">
              <div className="price-label">{"// Engagement 03"}</div>
              <h3>Day rate / consult</h3>
              <div className="price-desc">
                Book us by the day or week for advice, audits or sprints.
              </div>
              <div className="price-amount">
                $1.2k<span className="small">/day</span>
              </div>
              <div className="price-meta">Min. 1 day · book up to 10/mo</div>

              <ul className="price-list">
                <li>Senior CTO-level consult</li>
                <li>Codebase audits + written report</li>
                <li>Architecture &amp; scaling reviews</li>
                <li>Hiring playbooks &amp; interview rubrics</li>
                <li>Stack &amp; vendor evaluations</li>
                <li>Async Slack between sessions</li>
              </ul>

              <div className="price-cta">
                <Link
                  href="/contact?engagement=daily"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Book a day <span className="arr">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section>
        <div className="wrap">
          <span className="eyebrow reveal">In every plate</span>
          <h2 className="section-title reveal">
            What&rsquo;s <em>always</em>
            <br />
            included.
          </h2>
          <p className="section-intro reveal">
            No matter how you engage with us, these come standard. No upsells, no
            &ldquo;premium support&rdquo; tiers, no surprise add-ons.
          </p>

          <div className="included-grid reveal">
            <div className="included"><span className="check">✓</span> Senior-only engineering (8+ yrs experience)</div>
            <div className="included"><span className="check">✓</span> Custom design — no off-the-shelf themes</div>
            <div className="included"><span className="check">✓</span> Full code repository on day one</div>
            <div className="included"><span className="check">✓</span> Complete IP assignment, no licensing</div>
            <div className="included"><span className="check">✓</span> Direct Slack with the actual engineers</div>
            <div className="included"><span className="check">✓</span> Daily Loom updates (no daily standups)</div>
            <div className="included"><span className="check">✓</span> Weekly demos + project board access</div>
            <div className="included"><span className="check">✓</span> Performance + accessibility audits</div>
            <div className="included"><span className="check">✓</span> SEO + analytics setup</div>
            <div className="included"><span className="check">✓</span> Error tracking &amp; monitoring</div>
            <div className="included"><span className="check">✓</span> Deploy + DNS + CDN configuration</div>
            <div className="included"><span className="check">✓</span> Docs, walkthroughs, team training</div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section>
        <div className="wrap">
          <span className="eyebrow reveal">Side by side</span>
          <h2 className="section-title reveal">
            Pick your <em>plate</em>.
          </h2>

          <div className="reveal" style={{ overflowX: "auto" }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Comparison</th>
                  <th>Project</th>
                  <th>Retainer</th>
                  <th>Day-rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Starts at</td>
                  <td>$4,500</td>
                  <td>$6,500/mo</td>
                  <td>$1,200/day</td>
                </tr>
                <tr>
                  <td>Min. commitment</td>
                  <td>2 weeks</td>
                  <td>3 months</td>
                  <td>1 day</td>
                </tr>
                <tr>
                  <td>Scope</td>
                  <td>Fixed up front</td>
                  <td>Flexible monthly</td>
                  <td>You set it</td>
                </tr>
                <tr>
                  <td>Best for</td>
                  <td>One-off launch</td>
                  <td>Ongoing build</td>
                  <td>Audits, advisory, sprints</td>
                </tr>
                <tr>
                  <td>Dedicated team</td>
                  <td className="yes">Yes</td>
                  <td className="yes">Yes</td>
                  <td className="yes">Yes</td>
                </tr>
                <tr>
                  <td>Direct Slack</td>
                  <td className="yes">Yes</td>
                  <td className="yes">Yes</td>
                  <td className="yes">Yes</td>
                </tr>
                <tr>
                  <td>Loom updates</td>
                  <td>Daily</td>
                  <td>Daily</td>
                  <td>End of day</td>
                </tr>
                <tr>
                  <td>Full IP &amp; repo</td>
                  <td className="yes">Yes — day 1</td>
                  <td className="yes">Yes — day 1</td>
                  <td>Deliverables only</td>
                </tr>
                <tr>
                  <td>Post-launch support</td>
                  <td>90 days free</td>
                  <td>Ongoing (included)</td>
                  <td>Async Slack</td>
                </tr>
                <tr>
                  <td>Pause / cancel</td>
                  <td>N/A</td>
                  <td>30-day notice</td>
                  <td>Per-day</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="wrap" style={{ maxWidth: "980px" }}>
          <span className="eyebrow reveal">Money stuff</span>
          <h2 className="section-title reveal">
            Pricing <em>FAQ</em>.
          </h2>

          <div style={{ marginTop: "56px" }}>
            <details className="faq-item reveal" open>
              <summary className="faq-q">Why no hourly billing?</summary>
              <div className="faq-a">
                Hourly billing punishes speed. A senior engineer who solves a
                problem in 2 hours earns less than a junior who takes 20.
                We&rsquo;d rather quote a fixed price for a fixed scope and ship
                fast. If we finish early, we use the time to polish.
              </div>
            </details>
            <details className="faq-item reveal">
              <summary className="faq-q">What&rsquo;s the payment schedule?</summary>
              <div className="faq-a">
                Projects: 30% on signature, 40% at midpoint demo, 30% on launch.
                Retainers: monthly in advance. Day-rate: 50% on booking, 50% on
                delivery. Wire, ACH, Stripe, or Wise — your call. We can invoice
                in USD, GBP, EUR, INR.
              </div>
            </details>
            <details className="faq-item reveal">
              <summary className="faq-q">What if my scope changes mid-project?</summary>
              <div className="faq-a">
                It happens. Small changes (a button here, a tweak there) are free.
                Bigger changes get a change order with a separate quote and
                timeline. You sign it or not — never any surprises.
              </div>
            </details>
            <details className="faq-item reveal">
              <summary className="faq-q">Can I scale a retainer up or down?</summary>
              <div className="faq-a">
                Yes. After the first 3 months, you can scale the retainer to add
                engineers (more hrs/mo) or dial it down. 30-day notice for
                changes. You can pause for up to 60 days and resume without
                re-onboarding.
              </div>
            </details>
            <details className="faq-item reveal">
              <summary className="faq-q">Do you offer equity-only or deferred deals?</summary>
              <div className="faq-a">
                For a tiny number of projects per year, yes. We swap a portion of
                cash for equity if the company &amp; team are aligned with what we
                want to build. DM the founders to discuss — it&rsquo;s
                case-by-case.
              </div>
            </details>
            <details className="faq-item reveal">
              <summary className="faq-q">Do you offer refunds?</summary>
              <div className="faq-a">
                If we ghost or miss a deadline by more than 50%, the remaining
                unfinished work is refunded in full. We&rsquo;ve never had to issue
                one yet — but the guarantee is in writing in every contract.
              </div>
            </details>
            <details className="faq-item reveal">
              <summary className="faq-q">Are taxes / VAT / GST included?</summary>
              <div className="faq-a">
                Prices are shown net. Depending on your billing entity location,
                applicable VAT/GST/sales tax is added. US-based clients: typically
                no sales tax for SaaS-style services.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="wrap">
          <div className="cta-banner ink reveal">
            <h3>
              Still <span style={{ fontFamily: "var(--brush)", color: "var(--noodle)" }}>guessing?</span>
              <br />
              Book a 30-min consult — free.
            </h3>
            <div className="btn-group">
              <a
                href="https://calendly.com/thenoodlecodes/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Book consult <span className="arr">↗</span>
              </a>
              <a href="mailto:thenoodlecodes@gmail.com" className="btn btn-secondary">
                Email us <span className="arr">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
