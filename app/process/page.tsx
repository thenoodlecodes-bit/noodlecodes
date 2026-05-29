import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Process",
  description:
    "From brief to deploy in four hot weeks. No 6-month discovery, no 80-page SOWs — just sharp steps, daily Loom updates, weekly demos and a working product.",
  alternates: { canonical: "/process" },
};

export default function Process() {
  return (
    <main id="main">
      <header className="page-head">
        <div className="wrap">
          <div className="crumb rise-1">
            <Link href="/">Home</Link>
            <span className="sep">/</span>Process
          </div>
          <span className="eyebrow rise-2">How we cook</span>
          <h1 className="rise-3">
            From <em>brief</em> to deploy
            <br />
            in four hot weeks.
          </h1>
          <p className="lede rise-4">
            No 6-month &ldquo;discovery.&rdquo; No 80-page SOWs. Just four sharp
            steps, daily updates, weekly demos, and a working product at the end.
            Here&rsquo;s exactly how it goes.
          </p>
        </div>
      </header>

      {/* TIMELINE */}
      <section>
        <div className="wrap">
          <div className="timeline">
            <article className="step-detail reveal">
              <div className="step-marker">01</div>
              <div className="step-meta">
                Week 0 — Pre-kickoff · <b>2–3 days</b>
              </div>
              <h2 className="step-title">
                Ingredients — <em>discovery.</em>
              </h2>
              <p className="step-desc">
                A 30-min intro call, a written brief, and a fixed quote within 48
                hours. If we&rsquo;re a fit, we sign and book a kickoff. If
                we&rsquo;re not — we&rsquo;ll refer you to someone who is. No pitch
                decks, no ₹50k &ldquo;discovery&rdquo; tax.
              </p>

              <div className="step-details">
                <div className="detail-card">
                  <h4>What we do</h4>
                  <ul>
                    <li>30-min intro call (or async if you prefer)</li>
                    <li>Brief + reference review</li>
                    <li>Tech/scope assessment</li>
                    <li>Written quote &amp; timeline</li>
                    <li>Contract + 30% deposit invoice</li>
                  </ul>
                </div>
                <div className="detail-card">
                  <h4>What you get</h4>
                  <ul>
                    <li>A fixed quote (no &ldquo;TBD&rdquo; line items)</li>
                    <li>A Notion workspace with goals + scope</li>
                    <li>Slack channel access</li>
                    <li>Calendar invites for first sprint</li>
                  </ul>
                </div>
              </div>

              <div className="tools-row">
                <span className="tool">Calendly</span>
                <span className="tool">Notion</span>
                <span className="tool">Slack</span>
                <span className="tool">DocuSign</span>
              </div>
            </article>

            <article className="step-detail reveal">
              <div className="step-marker">02</div>
              <div className="step-meta">
                Week 1 — Sprint 1 · <b>5 days</b>
              </div>
              <h2 className="step-title">
                Prep — <em>design &amp; tech spec.</em>
              </h2>
              <p className="step-desc">
                In week one we lock down design direction, write the technical
                spec, and stand up the dev environment. By Friday you&rsquo;ve got
                real Figma screens (not mood boards), a clear data model, and a
                working &ldquo;hello world&rdquo; deploy.
              </p>

              <div className="step-details">
                <div className="detail-card">
                  <h4>What we do</h4>
                  <ul>
                    <li>Brand &amp; design direction (2 concepts)</li>
                    <li>Core flows wireframed + designed</li>
                    <li>Tech spec, data model, API contract</li>
                    <li>Repo, CI/CD, staging environment</li>
                    <li>Friday demo + feedback round</li>
                  </ul>
                </div>
                <div className="detail-card">
                  <h4>What you get</h4>
                  <ul>
                    <li>Figma file with high-fidelity screens</li>
                    <li>Technical spec doc (Notion)</li>
                    <li>GitHub repo &amp; staging URL</li>
                    <li>Project board with all tickets</li>
                  </ul>
                </div>
              </div>

              <div className="tools-row">
                <span className="tool">Figma</span>
                <span className="tool">GitHub</span>
                <span className="tool">Linear</span>
                <span className="tool">Vercel</span>
                <span className="tool">Loom</span>
              </div>
            </article>

            <article className="step-detail reveal">
              <div className="step-marker">03</div>
              <div className="step-meta">
                Weeks 2–3 — Sprint 2 &amp; 3 · <b>10 days</b>
              </div>
              <h2 className="step-title">
                On the wok — <em>building.</em>
              </h2>
              <p className="step-desc">
                Two sprints of focused building. Daily 90-second Loom updates so
                you always know what shipped. Weekly demos every Friday.
                Async-first: no daily standups eating your morning. Just shipped
                tickets, working features, and Slack threads when needed.
              </p>

              <div className="step-details">
                <div className="detail-card">
                  <h4>What we do</h4>
                  <ul>
                    <li>2-week sprints with planned scope</li>
                    <li>Daily Loom updates (90 sec, no meetings)</li>
                    <li>Weekly Friday demo on staging</li>
                    <li>Continuous deployment to staging</li>
                    <li>Tests, error tracking, perf monitoring</li>
                  </ul>
                </div>
                <div className="detail-card">
                  <h4>What you get</h4>
                  <ul>
                    <li>Working features shipping daily to staging</li>
                    <li>Loom videos archive (review at your own pace)</li>
                    <li>Live project board you can ping anytime</li>
                    <li>Direct Slack with the engineers</li>
                  </ul>
                </div>
              </div>

              <div className="tools-row">
                <span className="tool">GitHub</span>
                <span className="tool">Vercel</span>
                <span className="tool">Linear</span>
                <span className="tool">Loom</span>
                <span className="tool">Sentry</span>
                <span className="tool">PostHog</span>
              </div>
            </article>

            <article className="step-detail reveal">
              <div className="step-marker">04</div>
              <div className="step-meta">
                Week 4 — Launch · <b>5 days + 90-day support</b>
              </div>
              <h2 className="step-title">
                Served — <em>launch &amp; support.</em>
              </h2>
              <p className="step-desc">
                Final QA, accessibility pass, performance tune-up, deploy to
                production. We hand over the keys: full repo access, docs,
                deployment guide, video walkthrough. Then 90 days of free
                post-launch support — bug fixes, small tweaks, you ping, we fix.
              </p>

              <div className="step-details">
                <div className="detail-card">
                  <h4>What we do</h4>
                  <ul>
                    <li>Production deploy + DNS handover</li>
                    <li>QA pass (security, perf, accessibility)</li>
                    <li>Documentation + Loom walkthrough</li>
                    <li>Team training (if needed)</li>
                    <li>90-day free post-launch support</li>
                  </ul>
                </div>
                <div className="detail-card">
                  <h4>What you get</h4>
                  <ul>
                    <li>Live production deployment</li>
                    <li>Full repo + IP assignment</li>
                    <li>Setup &amp; deploy docs</li>
                    <li>Direct Slack for support window</li>
                    <li>Optional retainer for v2 features</li>
                  </ul>
                </div>
              </div>

              <div className="tools-row">
                <span className="tool">Vercel</span>
                <span className="tool">AWS</span>
                <span className="tool">Cloudflare</span>
                <span className="tool">Sentry</span>
                <span className="tool">Notion docs</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET WEEKLY */}
      <section>
        <div className="wrap">
          <span className="eyebrow reveal">Receipts</span>
          <h2 className="section-title reveal">
            What lands in your inbox
            <br />
            <em>every week.</em>
          </h2>

          <div className="deliverables-grid reveal" style={{ marginTop: "56px" }}>
            <div className="delivery-card">
              <div className="num">5×</div>
              <h4>Daily Loom updates</h4>
              <p>
                90-second video updates Mon–Fri showing what shipped, what&rsquo;s
                next, and any blockers. No meetings required.
              </p>
            </div>
            <div className="delivery-card">
              <div className="num">1×</div>
              <h4>Weekly Friday demo</h4>
              <p>
                Live 30-min demo on staging. Walk through new features. You give
                feedback. We adjust the sprint. Done.
              </p>
            </div>
            <div className="delivery-card">
              <div className="num">∞</div>
              <h4>Async Slack access</h4>
              <p>
                Direct line to the engineers. Reply in your timezone, your hours.
                We aim for &lt;4 hr response during work days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES (dark) */}
      <section>
        <div className="principles">
          <span className="eyebrow reveal" style={{ color: "var(--noodle-2)" }}>
            Kitchen rules
          </span>
          <h2 className="section-title reveal" style={{ color: "var(--cream)" }}>
            The <em>principles</em> we cook by.
          </h2>

          <div className="principle-grid">
            <div className="principle reveal">
              <span className="pn">01 — Ship small, ship often</span>
              <h3>Working software &gt; perfect software</h3>
              <p>
                We&rsquo;d rather ship a v1 in 3 weeks than a perfect v0 in 3
                months. Real users beat imaginary requirements every time.
              </p>
            </div>
            <div className="principle reveal">
              <span className="pn">02 — Async by default</span>
              <h3>Your calendar is sacred</h3>
              <p>
                Loom over Zoom. Async PRs over standups. Two scheduled syncs per
                week, max. The rest is in Slack, on your schedule.
              </p>
            </div>
            <div className="principle reveal">
              <span className="pn">03 — Boring tech, bold ideas</span>
              <h3>Battle-tested stacks only</h3>
              <p>
                We don&rsquo;t experiment with your codebase. Postgres, Next.js,
                Node — the stuff that runs at 3am without us. Bold lives in the
                UX, not the infra.
              </p>
            </div>
            <div className="principle reveal">
              <span className="pn">04 — One throat to choke</span>
              <h3>You have one project lead, period</h3>
              <p>
                No account managers, no project coordinators, no chain of vibes.
                The senior engineer who builds it is the one you Slack.
              </p>
            </div>
            <div className="principle reveal">
              <span className="pn">05 — No hourly billing</span>
              <h3>Fixed scope, fixed price</h3>
              <p>
                Hourly billing punishes speed and rewards bloat. We quote a
                price, lock the scope, and ship. No surprise invoices.
              </p>
            </div>
            <div className="principle reveal">
              <span className="pn">06 — You own it. Always.</span>
              <h3>Full code, full IP, day one</h3>
              <p>
                The repo lives in your GitHub org from day one. We&rsquo;re
                collaborators, not landlords. Fire us tomorrow and you lose zero
                days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="wrap">
          <div className="cta-banner noodle reveal">
            <h3>
              Ready to cook
              <br />
              something{" "}
              <span style={{ fontFamily: "var(--brush)", color: "var(--sauce)" }}>
                special?
              </span>
            </h3>
            <div className="btn-group">
              <Link href="/contact" className="btn btn-primary">
                Book a kickoff <span className="arr">↗</span>
              </Link>
              <Link href="/pricing" className="btn btn-secondary">
                See pricing <span className="arr">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
