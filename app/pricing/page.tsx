import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent USD pricing for U.S. teams. Websites from $4,000, mobile apps from $12,000, AI agents from $9,000, dashboards from $7,000, consultancy from $1,500. Fixed price, no hidden fees, you own the IP.",
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
            Five things on the menu — pick what you need, get a real starting
            price up front in <b>USD</b>. Every plate includes senior U.S.-hours
            engineers, design, deploy, and a 90-day post-launch warranty. Fixed
            price. No hourly billing, no surprise invoices, no &ldquo;scope
            creep&rdquo; tax. Typically <b>40–60% less than a U.S. agency</b> for
            the same senior work.
          </p>

          <div className="us-trust rise-5" aria-label="Trust signals">
            <span className="us-pill"><span className="us-flag" aria-hidden="true">★</span> 4.9 avg · 40+ reviews</span>
            <span className="us-pill">Fixed price, in USD</span>
            <span className="us-pill">You own 100% of the IP</span>
            <span className="us-pill">NDA before we talk</span>
            <span className="us-pill">Ship on time or money back</span>
          </div>
        </div>
      </header>

      {/* SERVICE PRICING (5 tiers in USD) */}
      <section style={{ paddingTop: "60px" }}>
        <div className="wrap">
          <div className="price-grid price-grid-5">
            {/* WEBSITES */}
            <div className="price-card reveal">
              <div className="price-label">{"// Menu 01"}</div>
              <h3>Websites</h3>
              <div className="price-desc">
                Marketing sites, landing pages, portfolios — fast, opinionated,
                animated.
              </div>
              <div className="price-amount">
                $4k<span className="small">+</span>
              </div>
              <div className="price-meta">Starts at $4,000 · 2–4 weeks</div>

              <ul className="price-list">
                <li>Custom design, no off-the-shelf themes</li>
                <li>Lightning-fast, mobile-perfect, SEO-ready</li>
                <li>CMS or static — your call</li>
                <li>Deploy + DNS + analytics setup</li>
                <li>Full repo + 90-day support</li>
              </ul>

              <div className="price-cta">
                <Link
                  href="/contact?service=websites"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Start a website <span className="arr">↗</span>
                </Link>
              </div>
            </div>

            {/* MOBILE APPS */}
            <div className="price-card reveal">
              <div className="price-label">{"// Menu 02"}</div>
              <h3>Mobile Apps</h3>
              <div className="price-desc">
                iOS, Android or cross-platform. Native feel, real engineering
                behind the cute icon.
              </div>
              <div className="price-amount">
                $12k<span className="small">+</span>
              </div>
              <div className="price-meta">Starts at $12,000 · 4–10 weeks</div>

              <ul className="price-list">
                <li>React Native or native Swift / Kotlin</li>
                <li>UI / UX, animations, offline support</li>
                <li>Auth, payments, push, analytics</li>
                <li>App Store + Play Store submission</li>
                <li>Full repo + 90-day support</li>
              </ul>

              <div className="price-cta">
                <Link
                  href="/contact?service=apps"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Start an app <span className="arr">↗</span>
                </Link>
              </div>
            </div>

            {/* AI AGENTS */}
            <div className="price-card feature reveal" id="ai">
              <span className="price-tag-line">Hot right now</span>
              <div className="price-label">{"// Menu 03"}</div>
              <h3>AI Agents</h3>
              <div className="price-desc">
                LLM workflows, RAG, custom GPT-style tools. Less chatbot, more
                co-worker.
              </div>
              <div className="price-amount">
                $9k<span className="small">+</span>
              </div>
              <div className="price-meta">Starts at $9,000 · 3–8 weeks</div>

              <ul className="price-list">
                <li>Claude / OpenAI / open-weights — your pick</li>
                <li>RAG over your docs / DB / APIs</li>
                <li>Tool use, function calling, agents</li>
                <li>Eval harness + observability dashboard</li>
                <li>Cost controls + safety guardrails</li>
                <li>Full repo + 90-day support</li>
              </ul>

              <div className="price-cta">
                <Link
                  href="/contact?service=ai"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Spin up an agent <span className="arr">↗</span>
                </Link>
              </div>
            </div>

            {/* DASHBOARDS / ADMIN PANELS */}
            <div className="price-card reveal">
              <div className="price-label">{"// Menu 04"}</div>
              <h3>Dashboards</h3>
              <div className="price-desc">
                Custom CMS, ops tooling, internal panels. Built for the team
                that has to use it daily.
              </div>
              <div className="price-amount">
                $7k<span className="small">+</span>
              </div>
              <div className="price-meta">Starts at $7,000 · 3–6 weeks</div>

              <ul className="price-list">
                <li>Role-based access, audit logs</li>
                <li>Real-time data, exports, search</li>
                <li>CRUD, workflows, bulk actions</li>
                <li>Charts that actually mean something</li>
                <li>Full repo + 90-day support</li>
              </ul>

              <div className="price-cta">
                <Link
                  href="/contact?service=panels"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Build a panel <span className="arr">↗</span>
                </Link>
              </div>
            </div>

            {/* CONSULTANCY */}
            <div className="price-card reveal">
              <div className="price-label">{"// Menu 05"}</div>
              <h3>Consultancy</h3>
              <div className="price-desc">
                Senior CTO-level brain time — audits, architecture, scaling,
                hiring playbooks.
              </div>
              <div className="price-amount">
                $1.5k<span className="small">+</span>
              </div>
              <div className="price-meta">Starts at $1,500 · per session / sprint</div>

              <ul className="price-list">
                <li>Codebase audits + written report</li>
                <li>Architecture &amp; scaling reviews</li>
                <li>Hiring playbooks &amp; interview rubrics</li>
                <li>Stack &amp; vendor evaluations</li>
                <li>Async follow-up over Slack / email</li>
              </ul>

              <div className="price-cta">
                <Link
                  href="/contact?service=consulting"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Book a session <span className="arr">↗</span>
                </Link>
              </div>
            </div>
          </div>

          <p className="price-foot reveal">
            ✱ All prices are <b>starting</b> figures in <b>USD</b>. Final scope,
            timeline and a fixed quote come after a free 30-min discovery call.
            We invoice in U.S. dollars and accept ACH, wire, and all major credit
            cards via Stripe. Net-15 terms available for established companies.
          </p>
        </div>
      </section>

      {/* GUARANTEE — risk reversal */}
      <section>
        <div className="wrap">
          <div className="guarantee reveal">
            <div className="guarantee-seal" aria-hidden="true">
              <span>NO<br />RISK</span>
            </div>
            <div className="guarantee-body">
              <span className="eyebrow">The NoodleCodes guarantee</span>
              <h3>
                On time, on budget, or your{" "}
                <span style={{ fontFamily: "var(--brush)", color: "var(--sauce)" }}>
                  money back.
                </span>
              </h3>
              <ul className="guarantee-list">
                <li><span className="check">✓</span> <b>Fixed price.</b> The number we quote is the number you pay. Change orders are opt-in, never a surprise.</li>
                <li><span className="check">✓</span> <b>On-time pledge.</b> Miss a deadline by more than 50% and the unfinished work is refunded in full — in writing, in every contract.</li>
                <li><span className="check">✓</span> <b>You own everything.</b> Full code, full IP assignment, full infra access on day one. Fire us anytime and keep building.</li>
                <li><span className="check">✓</span> <b>NDA-first.</b> We sign before we talk. Your idea stays yours.</li>
              </ul>
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

      {/* WHAT AFFECTS THE PRICE */}
      <section>
        <div className="wrap">
          <span className="eyebrow reveal">Why &ldquo;starts at&rdquo;</span>
          <h2 className="section-title reveal">
            What moves the <em>needle</em>.
          </h2>
          <p className="section-intro reveal">
            Five honest variables that swing the final number. We&rsquo;ll walk
            you through how each one applies to your project on the discovery
            call — no surprises after.
          </p>

          <div className="included-grid reveal">
            <div className="included">
              <span className="check">✓</span> <b>Scope &amp; page/feature count</b> — more screens, more wiring
            </div>
            <div className="included">
              <span className="check">✓</span> <b>Custom design depth</b> — illustrations, motion, micro-interactions
            </div>
            <div className="included">
              <span className="check">✓</span> <b>Integrations</b> — payments, auth, third-party APIs, CRMs
            </div>
            <div className="included">
              <span className="check">✓</span> <b>Data complexity</b> — schemas, migrations, RAG corpus size
            </div>
            <div className="included">
              <span className="check">✓</span> <b>Timeline pressure</b> — &lt;2 weeks adds a rush fee
            </div>
            <div className="included">
              <span className="check">✓</span> <b>Compliance needs</b> — SOC 2, HIPAA, CCPA &amp; GDPR readiness
            </div>
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
                Consultancy: 100% upfront for single sessions, monthly for
                ongoing. We invoice in <b>U.S. dollars</b> and accept ACH, wire,
                and major credit cards via Stripe. Net-15 terms available for
                established companies. You&rsquo;ll get a clean, itemized invoice
                and a signed SOW for your records every time.
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
              <summary className="faq-q">Can I bundle multiple services?</summary>
              <div className="faq-a">
                Absolutely &mdash; lots of clients pair a website + dashboard, or
                an AI agent + admin panel. Bundles get a discount on the smaller
                item. We&rsquo;ll quote it as a single project once we&rsquo;ve
                talked through the scope.
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
              <summary className="faq-q">Are there any taxes or hidden fees?</summary>
              <div className="faq-a">
                No. Prices are the price. As a U.S.-registered company billing in
                USD, there&rsquo;s no sales tax on professional software
                development services in most states &mdash; and we&rsquo;ll
                provide a W-9 and proper invoices for your books. No platform
                fees, no &ldquo;onboarding&rdquo; charge, no markup on cloud or
                third-party costs (we pass those through at cost, with receipts).
              </div>
            </details>
            <details className="faq-item reveal">
              <summary className="faq-q">Do you sign NDAs / MSAs and handle compliance?</summary>
              <div className="faq-a">
                Yes. We&rsquo;ll sign your NDA before the first real
                conversation, and we work under your MSA or ours. We build to
                SOC 2, HIPAA, CCPA and GDPR readiness when your project needs it,
                and we&rsquo;re happy to complete your vendor security
                questionnaire.
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
              <a href="mailto:hello@noodlecodes.dev" className="btn btn-secondary">
                Email us <span className="arr">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
