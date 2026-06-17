import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, mobile apps, AI agents, admin panels & consultancy for U.S. teams. Senior U.S.-hours engineers, fixed USD pricing, you own the IP. Detailed deliverables, timelines and starting prices for every service.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <main id="main">
      {/* PAGE HEAD */}
      <header className="page-head">
        <div className="wrap">
          <div className="crumb rise-1">
            <Link href="/">Home</Link>
            <span className="sep">/</span>Services
          </div>
          <span className="eyebrow rise-2">The full menu</span>
          <h1 className="rise-3">
            What we <em>cook</em>.
          </h1>
          <p className="lede rise-4">
            Five courses. One kitchen. Every project is end-to-end — discovery,
            design, dev, ship. Pick the dish, we&rsquo;ll handle the heat.
          </p>
          <div className="btn-group rise-5" style={{ marginTop: "36px" }}>
            <Link href="/contact" className="btn btn-primary">
              Book a free consult <span className="arr">↗</span>
            </Link>
            <Link href="/pricing" className="btn btn-secondary">
              View pricing <span className="arr">→</span>
            </Link>
          </div>

          <div className="us-trust rise-5" aria-label="Trust signals">
            <span className="us-pill"><span className="us-flag" aria-hidden="true">★</span> 4.9 avg · 40+ reviews</span>
            <span className="us-pill">U.S.-hours senior engineers</span>
            <span className="us-pill">SOC 2 · HIPAA · CCPA-ready</span>
            <span className="us-pill">NDA before we talk</span>
            <span className="us-pill">You own 100% of the IP</span>
          </div>
        </div>
      </header>

      {/* 01 — WEBSITES */}
      <section className="service-block" id="websites">
        <div className="wrap">
          <div className="svc-layout">
            <div className="reveal">
              <span className="svc-number">01 / WEBSITES</span>
              <h2 className="svc-title">
                Sites that <em>hit different.</em>
              </h2>
              <p className="svc-desc">
                Marketing sites, landing pages, portfolios, SaaS websites.
                Lightning-fast Next.js builds, perfect Lighthouse scores,
                animations that don&rsquo;t feel like 2015. Built to convert,
                designed to be remembered.
              </p>

              <div className="deliverables">
                <div className="deliverable"><span className="check">✓</span> Custom design system &amp; brand integration</div>
                <div className="deliverable"><span className="check">✓</span> Up to 12 pages, fully responsive</div>
                <div className="deliverable"><span className="check">✓</span> CMS setup (Sanity, Payload, or Webflow)</div>
                <div className="deliverable"><span className="check">✓</span> SEO, OG tags, analytics, sitemap</div>
                <div className="deliverable"><span className="check">✓</span> 90/100+ Lighthouse on all metrics</div>
                <div className="deliverable"><span className="check">✓</span> Deploy + 30-day post-launch sauce</div>
              </div>

              <div className="meta-table">
                <div className="meta-row"><span>{"// Timeline"}</span><b>2–4 weeks</b></div>
                <div className="meta-row"><span>{"// Best for"}</span><b>U.S. startups, founders, agencies, studios</b></div>
                <div className="meta-row"><span>{"// Starts at"}</span><span className="price-tag">$4,000</span></div>
              </div>

              <div className="svc-cta-row">
                <Link href="/contact?service=websites" className="btn btn-primary">Get a quote <span className="arr">↗</span></Link>
                <Link href="/work#websites" className="btn btn-secondary">See examples <span className="arr">→</span></Link>
              </div>
            </div>

            <div className="svc-visual">
              <img
                src="/work/stackly.jpg"
                alt="A high-conversion SaaS marketing site built by NoodleCodes"
                className="svc-shot"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 02 — APPS */}
      <section className="service-block" id="apps">
        <div className="wrap">
          <div className="svc-layout">
            <div className="reveal">
              <span className="svc-number">02 / MOBILE APPS</span>
              <h2 className="svc-title">
                Apps people actually <em>open.</em>
              </h2>
              <p className="svc-desc">
                iOS, Android, or cross-platform. We use React Native or
                Swift/Kotlin native depending on the brief. Buttery-smooth UX,
                native gestures, real engineering — not Figma exported to a
                webview.
              </p>

              <div className="deliverables">
                <div className="deliverable"><span className="check">✓</span> iOS + Android in one build (React Native)</div>
                <div className="deliverable"><span className="check">✓</span> Custom design system, dark mode, animations</div>
                <div className="deliverable"><span className="check">✓</span> Auth, push notifications, payments, analytics</div>
                <div className="deliverable"><span className="check">✓</span> Offline-first sync, error tracking</div>
                <div className="deliverable"><span className="check">✓</span> App Store + Play Store submission &amp; review help</div>
                <div className="deliverable"><span className="check">✓</span> 90-day post-launch sauce</div>
              </div>

              <div className="meta-table">
                <div className="meta-row"><span>{"// Timeline"}</span><b>4–10 weeks</b></div>
                <div className="meta-row"><span>{"// Best for"}</span><b>D2C, marketplaces, SaaS, social</b></div>
                <div className="meta-row"><span>{"// Starts at"}</span><span className="price-tag">$12,000</span></div>
              </div>

              <div className="svc-cta-row">
                <Link href="/contact?service=apps" className="btn btn-primary">Get a quote <span className="arr">↗</span></Link>
                <Link href="/work#apps" className="btn btn-secondary">See examples <span className="arr">→</span></Link>
              </div>
            </div>

            <div className="svc-visual">
              <img
                src="/work/lingu.jpg"
                alt="A polished consumer mobile app built by NoodleCodes"
                className="svc-shot"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 03 — AI AGENTS (dark) */}
      <section className="service-block dark" id="ai">
        <div className="wrap">
          <div className="svc-layout">
            <div className="reveal">
              <span className="svc-number">03 / AI AGENTS</span>
              <h2 className="svc-title">
                Agents with a <em>brain.</em>
              </h2>
              <p className="svc-desc">
                LLM-powered agents, RAG systems, and AI co-workers that do real
                work. Built on Claude, GPT-4, or open-weight models with proper
                evals, tool-use, and observability. Less chatbot, more digital
                employee.
              </p>

              <div className="deliverables">
                <div className="deliverable"><span className="check">✓</span> Custom agent architecture (multi-step reasoning)</div>
                <div className="deliverable"><span className="check">✓</span> RAG pipeline with vector search (Pinecone/Weaviate)</div>
                <div className="deliverable"><span className="check">✓</span> Tool/function calling, MCP integration</div>
                <div className="deliverable"><span className="check">✓</span> Eval suite + observability (Langfuse/Helicone)</div>
                <div className="deliverable"><span className="check">✓</span> Frontend or API delivery, your choice</div>
                <div className="deliverable"><span className="check">✓</span> Prompt &amp; cost optimization included</div>
              </div>

              <div className="meta-table">
                <div className="meta-row"><span>{"// Timeline"}</span><b>3–8 weeks</b></div>
                <div className="meta-row"><span>{"// Best for"}</span><b>Internal tools, support, ops automation</b></div>
                <div className="meta-row"><span>{"// Starts at"}</span><span className="price-tag">$9,000</span></div>
              </div>

              <div className="svc-cta-row">
                <Link href="/contact?service=ai" className="btn" style={{ background: "var(--noodle)", color: "var(--ink)" }}>Get a quote <span className="arr">↗</span></Link>
                <Link href="/work#ai" className="btn" style={{ background: "transparent", color: "var(--cream)", border: "1px solid var(--cream)" }}>See examples <span className="arr">→</span></Link>
              </div>
            </div>

            <div className="svc-visual">
              <img
                src="/work/pingr.jpg"
                alt="An AI assistant agent wired into a product's data stack, built by NoodleCodes"
                className="svc-shot"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 04 — PANELS */}
      <section className="service-block" id="panels">
        <div className="wrap">
          <div className="svc-layout">
            <div className="reveal">
              <span className="svc-number">04 / ADMIN PANELS</span>
              <h2 className="svc-title">
                Dashboards that <em>don&rsquo;t suck.</em>
              </h2>
              <p className="svc-desc">
                Internal tools, custom CMS, ops dashboards, marketplace admin
                panels. Built for the team that has to use it eight hours a day —
                keyboard shortcuts, bulk actions, audit trails, the works.
              </p>

              <div className="deliverables">
                <div className="deliverable"><span className="check">✓</span> Role-based access control (RBAC) &amp; audit logs</div>
                <div className="deliverable"><span className="check">✓</span> Real-time data (websockets, optimistic updates)</div>
                <div className="deliverable"><span className="check">✓</span> Custom reporting + CSV/PDF export</div>
                <div className="deliverable"><span className="check">✓</span> Bulk actions, filters, search, keyboard shortcuts</div>
                <div className="deliverable"><span className="check">✓</span> Integrations: Stripe, Slack, email, your stack</div>
                <div className="deliverable"><span className="check">✓</span> Mobile-friendly when it needs to be</div>
              </div>

              <div className="meta-table">
                <div className="meta-row"><span>{"// Timeline"}</span><b>3–6 weeks</b></div>
                <div className="meta-row"><span>{"// Best for"}</span><b>Ops teams, marketplaces, content platforms</b></div>
                <div className="meta-row"><span>{"// Starts at"}</span><span className="price-tag">$7,000</span></div>
              </div>

              <div className="svc-cta-row">
                <Link href="/contact?service=panels" className="btn btn-primary">Get a quote <span className="arr">↗</span></Link>
                <Link href="/work#panels" className="btn btn-secondary">See examples <span className="arr">→</span></Link>
              </div>
            </div>

            <div className="svc-visual">
              <img
                src="/work/orbit.jpg"
                alt="A custom admin panel with real-time analytics, built by NoodleCodes"
                className="svc-shot"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 05 — CONSULTING */}
      <section className="service-block" id="consulting">
        <div className="wrap">
          <div className="svc-layout">
            <div className="reveal">
              <span className="svc-number">05 / CONSULTANCY</span>
              <h2 className="svc-title">
                We&rsquo;ll be your <em>CTO for a day.</em>
              </h2>
              <p className="svc-desc">
                Code audits, architecture reviews, scaling guidance, technical
                hiring, vendor selection. Get senior-level brain time without
                paying for a full-time hire. Async-friendly, deeply opinionated,
                occasionally too honest.
              </p>

              <div className="deliverables">
                <div className="deliverable"><span className="check">✓</span> Codebase audit + written report with priorities</div>
                <div className="deliverable"><span className="check">✓</span> Architecture &amp; infra review (security, cost, scale)</div>
                <div className="deliverable"><span className="check">✓</span> Tech-hiring playbook: JDs, interview loop, rubrics</div>
                <div className="deliverable"><span className="check">✓</span> Vendor &amp; stack evaluations</div>
                <div className="deliverable"><span className="check">✓</span> Async Slack/Loom + 2 weekly syncs</div>
                <div className="deliverable"><span className="check">✓</span> Optional fractional CTO retainer</div>
              </div>

              <div className="meta-table">
                <div className="meta-row"><span>{"// Timeline"}</span><b>1 session, 1 week, or ongoing</b></div>
                <div className="meta-row"><span>{"// Best for"}</span><b>Pre-Seed → Series B teams</b></div>
                <div className="meta-row"><span>{"// Starts at"}</span><span className="price-tag">$1,500</span></div>
              </div>

              <div className="svc-cta-row">
                <Link href="/contact?service=consulting" className="btn btn-primary">Book a session <span className="arr">↗</span></Link>
                <Link href="/pricing" className="btn btn-secondary">See full pricing <span className="arr">→</span></Link>
              </div>
            </div>

            <div className="svc-visual">
              <div className="visual-consult">
                <div className="blob"></div>
                <div className="quote-mark">&ldquo;</div>
                <div className="text">Real talk.<br />Real engineering.<em>no fluff.</em></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section>
        <div className="wrap">
          <div className="not-for reveal">
            <h3>
              The honest bit — who we&rsquo;re{" "}
              <span style={{ fontFamily: "var(--brush)", color: "var(--sauce)" }}>good for.</span>
            </h3>
            <div className="not-for-grid">
              <div className="not-for-col">
                <h4 className="yes">✓ We&rsquo;re a good fit if you</h4>
                <ul>
                  <li>Want to ship something that actually works in 2–8 weeks</li>
                  <li>Have an idea, problem, or scope (rough is fine)</li>
                  <li>Value quality over hourly micromanagement</li>
                  <li>Want a partner who overlaps U.S. business hours</li>
                  <li>Are okay with senior engineers being honest about scope</li>
                </ul>
              </div>
              <div className="not-for-col">
                <h4 className="no">✗ We&rsquo;re probably not it if you</h4>
                <ul>
                  <li>Need 30 engineers and a 6-month &ldquo;discovery&rdquo; phase</li>
                  <li>Want the cheapest $8/hr freelancer on a marketplace</li>
                  <li>Need a team physically on-site at your office every day</li>
                  <li>Won&rsquo;t share access to repos, designs, or analytics</li>
                  <li>Already have a CTO who hates outside teams</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="wrap" style={{ maxWidth: "980px" }}>
          <span className="eyebrow reveal">FAQ</span>
          <h2 className="section-title reveal">
            Quick <em>answers</em>.<br />
            No 800-word blog post.
          </h2>

          <div style={{ marginTop: "56px" }}>
            <details className="faq-item reveal" open>
              <summary className="faq-q">What stack do you build on?</summary>
              <div className="faq-a">Next.js, React, React Native, Node, Python, Postgres, Supabase, Vercel, AWS. AI stack: Claude API, OpenAI, LangChain, Pinecone. We pick boring, battle-tested tools that work — not the shiniest new thing.</div>
            </details>
            <details className="faq-item reveal">
              <summary className="faq-q">Do I own the code and IP?</summary>
              <div className="faq-a">100%. Full repo handover, full assignment of IP, full domain &amp; infra access. You can fire us and keep building tomorrow. We hate vendor lock-in as much as you do.</div>
            </details>
            <details className="faq-item reveal">
              <summary className="faq-q">What if my project doesn&rsquo;t fit a &ldquo;package&rdquo;?</summary>
              <div className="faq-a">Most don&rsquo;t. The starting prices are anchors, not menus. Real scope = real quote, usually within 48h of an intro call.</div>
            </details>
            <details className="faq-item reveal">
              <summary className="faq-q">How do you handle ongoing maintenance?</summary>
              <div className="faq-a">90 days free post-launch (bug fixes, small tweaks). After that, a flat retainer for ongoing dev/feature work, or you take it inhouse — your call.</div>
            </details>
            <details className="faq-item reveal">
              <summary className="faq-q">Do you do white-label work for other agencies?</summary>
              <div className="faq-a">Yes, all the time. We&rsquo;ve shipped 30+ projects under other agencies&rsquo; brands. NDAs, sub-contracts, no-attribution — all fine.</div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
