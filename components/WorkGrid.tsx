"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";

const FILTERS = [
  { key: "all", label: "All", count: 24 },
  { key: "web", label: "Websites", count: 9 },
  { key: "app", label: "Apps", count: 5 },
  { key: "ai", label: "AI Agents", count: 4 },
  { key: "panel", label: "Panels", count: 6 },
];

export default function WorkGrid() {
  const [filter, setFilter] = useState("all");

  const hide = (cat: string): CSSProperties | undefined =>
    filter !== "all" && filter !== cat ? { display: "none" } : undefined;

  return (
    <>
      {/* FILTER BAR */}
      <div className="filter-bar reveal">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`filter-btn${filter === f.key ? " active" : ""}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label} <span className="count">{f.count}</span>
          </button>
        ))}
      </div>

      {/* CASES GRID */}
      <div className="cases">
        {/* FEATURED */}
        <Link
          href="#finwhiz"
          id="finwhiz"
          className="case-big case-feature reveal"
          data-cat="ai"
          style={hide("ai")}
        >
          <div className="case-thumb">
            <div className="thumb-bg-2">
              <div className="code-block">
                <span style={{ color: "#6c7a89" }}>{"// finwhiz · ai ops agent"}</span>
                <br />
                <span>const agent = await noodle.spawn({"{"}</span>
                <br />
                <span>
                  &nbsp;&nbsp;model:{" "}
                  <span style={{ color: "#b8e986" }}>&apos;claude-opus-4-7&apos;</span>,
                </span>
                <br />
                <span>
                  &nbsp;&nbsp;tools: [
                  <span style={{ color: "#b8e986" }}>&apos;rag&apos;</span>,{" "}
                  <span style={{ color: "#b8e986" }}>&apos;sql&apos;</span>,{" "}
                  <span style={{ color: "#b8e986" }}>&apos;notify&apos;</span>],
                </span>
                <br />
                <span>
                  &nbsp;&nbsp;memory:{" "}
                  <span style={{ color: "#b8e986" }}>&apos;persistent&apos;</span>
                </span>
                <br />
                <span>{"});"}</span>
                <br />
                <span>
                  agent.run() <span style={{ color: "var(--cream)" }}>▌</span>
                </span>
              </div>
            </div>
          </div>
          <div className="case-info">
            <div className="case-tags">
              <span className="tag">AI Agent</span>
              <span className="tag">Fintech</span>
              <span className="tag">6 weeks</span>
            </div>
            <h3>Finwhiz — an AI co-worker that reads your books for you</h3>
            <p>
              Built a custom AI agent for a Series A fintech that ingests
              financial documents, answers natural-language questions, and flags
              anomalies before the CFO even logs in. Now handles 80% of their
              internal financial-data queries.
            </p>
            <div className="case-result">
              <div>
                {"// support load"}
                <b style={{ color: "var(--basil)" }}>−60%</b>
              </div>
              <div>
                {"// response time"}
                <b>2.4s avg</b>
              </div>
              <div>
                {"// queries/day"}
                <b>3,200+</b>
              </div>
            </div>
          </div>
        </Link>

        {/* ORBIT */}
        <Link href="#orbit" id="orbit" className="case-big reveal" data-cat="panel" style={hide("panel")}>
          <div className="case-thumb">
            <div className="thumb-bg-4">
              <div className="side">
                <div className="act"></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="main">
                <div className="row">
                  <div className="kpi">
                    USERS<b>12.4k</b>
                  </div>
                  <div className="kpi">
                    CHURN<b style={{ color: "var(--basil)" }}>1.8%</b>
                  </div>
                  <div className="kpi">
                    MRR<b>$284k</b>
                  </div>
                </div>
                <div className="chart">
                  <span style={{ height: "20%" }}></span>
                  <span style={{ height: "40%" }}></span>
                  <span style={{ height: "30%" }}></span>
                  <span style={{ height: "60%" }}></span>
                  <span style={{ height: "50%" }}></span>
                  <span style={{ height: "75%" }}></span>
                  <span style={{ height: "55%" }}></span>
                  <span style={{ height: "95%", background: "var(--sauce)" }}></span>
                </div>
              </div>
            </div>
          </div>
          <div className="case-info">
            <div className="case-tags">
              <span className="tag">Admin Panel</span>
              <span className="tag">SaaS</span>
              <span className="tag">4 weeks</span>
            </div>
            <h3>OrbitCRM — replaced 4 SaaS subscriptions with 1 panel</h3>
            <p>
              Internal CRM + ops dashboard that consolidated billing, support,
              analytics and team management. Ops team saves 12 hours/week.
              Replaced $1,400/mo of subscriptions.
            </p>
            <div className="case-result">
              <div>
                {"// time saved"}
                <b>12h/wk</b>
              </div>
              <div>
                {"// SaaS killed"}
                <b>4 tools</b>
              </div>
            </div>
          </div>
        </Link>

        {/* PINGR */}
        <Link href="#pingr" id="pingr" className="case-big reveal" data-cat="ai" style={hide("ai")}>
          <div className="case-thumb">
            <div className="thumb-bg-5">
              <div className="bub u">how are signups doing?</div>
              <div className="bub a">
                +38% week over week. spike on thu from your reddit post. draft a
                follow-up?
              </div>
              <div className="bub u">yes, also in-app push</div>
            </div>
          </div>
          <div className="case-info">
            <div className="case-tags">
              <span className="tag">AI Agent</span>
              <span className="tag">SaaS</span>
              <span className="tag">8 weeks</span>
            </div>
            <h3>Pingr — an in-app assistant that talks to your stack</h3>
            <p>
              Conversational AI that connects to Stripe, Mixpanel, Slack, and
              HubSpot. Founders ask plain-English questions and it routes to the
              right data + drafts actions.
            </p>
            <div className="case-result">
              <div>
                {"// MAU"}
                <b>4.1k</b>
              </div>
              <div>
                {"// retention"}
                <b>87%</b>
              </div>
            </div>
          </div>
        </Link>

        {/* MANGO */}
        <Link href="#mango" id="mango" className="case-big reveal" data-cat="web" style={hide("web")}>
          <div className="case-thumb">
            <div className="thumb-bg-6">
              <div className="lp">
                <h4>
                  bold products,
                  <br />
                  <em>built fast.</em>
                </h4>
                <div style={{ display: "flex", gap: "6px" }}>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "9px",
                      padding: "3px 8px",
                      border: "1px solid var(--ink)",
                      borderRadius: "999px",
                    }}
                  >
                    studio
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "9px",
                      padding: "3px 8px",
                      border: "1px solid var(--ink)",
                      borderRadius: "999px",
                    }}
                  >
                    est. &rsquo;24
                  </span>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "6px",
                  }}
                >
                  <div style={{ background: "var(--noodle)", aspectRatio: "1", borderRadius: "6px" }}></div>
                  <div style={{ background: "var(--ink)", aspectRatio: "1", borderRadius: "6px" }}></div>
                  <div style={{ background: "var(--basil)", aspectRatio: "1", borderRadius: "6px" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="case-info">
            <div className="case-tags">
              <span className="tag">Website</span>
              <span className="tag">Studio</span>
              <span className="tag">2 weeks</span>
            </div>
            <h3>Studio Mango — agency site with 99/100 Lighthouse</h3>
            <p>
              Marketing site for a London-based design studio. Custom CMS,
              animated transitions, project case studies. Loads in &lt;1s on 3G.
            </p>
            <div className="case-result">
              <div>
                {"// LH score"}
                <b>99</b>
              </div>
              <div>
                {"// inquiries"}
                <b>+240%</b>
              </div>
            </div>
          </div>
        </Link>

        {/* LINGU */}
        <Link href="#" className="case-big reveal" data-cat="app" style={hide("app")}>
          <div className="case-thumb">
            <div className="thumb-bg-3">
              <div className="phone-mini">
                <div className="h">
                  Welcome,
                  <br />
                  Lia 👋
                </div>
                <div className="r">streak · 12 days 🔥</div>
                <div className="r alt">today&rsquo;s lesson</div>
                <div className="r alt">progress 64%</div>
              </div>
            </div>
          </div>
          <div className="case-info">
            <div className="case-tags">
              <span className="tag">Mobile App</span>
              <span className="tag">EdTech</span>
              <span className="tag">10 weeks</span>
            </div>
            <h3>Lingu — language learning for ADHD brains</h3>
            <p>
              iOS + Android app with bite-sized lessons, streak gamification, AI
              tutor. 50k downloads in first 6 months.
            </p>
            <div className="case-result">
              <div>
                {"// installs"}
                <b>50k+</b>
              </div>
              <div>
                {"// store rating"}
                <b>4.8★</b>
              </div>
            </div>
          </div>
        </Link>

        {/* STACKLY */}
        <Link href="#" className="case-big reveal" data-cat="web" style={hide("web")}>
          <div className="case-thumb">
            <div className="thumb-bg-1">
              <div className="text-block">
                stackly.
                <br />
                <em>ship faster.</em>
              </div>
            </div>
          </div>
          <div className="case-info">
            <div className="case-tags">
              <span className="tag">Website</span>
              <span className="tag">SaaS</span>
              <span className="tag">3 weeks</span>
            </div>
            <h3>Stackly — landing page that closed their Series A</h3>
            <p>
              Hero, product pages, blog, docs. Investors mentioned &ldquo;the
              website&rdquo; in 3 separate meetings. They closed $4.2M Series A
              two months later.
            </p>
            <div className="case-result">
              <div>
                {"// signups"}
                <b>+340%</b>
              </div>
              <div>
                {"// raise"}
                <b>$4.2M</b>
              </div>
            </div>
          </div>
        </Link>

        {/* TOFU */}
        <Link href="#" className="case-big reveal" data-cat="panel" style={hide("panel")}>
          <div className="case-thumb">
            <div className="thumb-bg-7">
              <div className="badge-big">
                Tofu/Labs<small>internal ops platform</small>
              </div>
            </div>
          </div>
          <div className="case-info">
            <div className="case-tags">
              <span className="tag">Admin Panel</span>
              <span className="tag">Logistics</span>
              <span className="tag">6 weeks</span>
            </div>
            <h3>Tofu Labs — ops platform for a fast-growing 3PL</h3>
            <p>
              Custom warehouse management, fleet tracking, order routing.
              Replaced 3 legacy tools and reduced onboarding time for new
              warehouses by 70%.
            </p>
            <div className="case-result">
              <div>
                {"// onboarding"}
                <b>−70%</b>
              </div>
              <div>
                {"// errors"}
                <b>−84%</b>
              </div>
            </div>
          </div>
        </Link>

        {/* HELPDESK */}
        <Link href="#" className="case-big reveal" data-cat="ai" style={hide("ai")}>
          <div className="case-thumb">
            <div className="thumb-bg-8">
              <div className="ws-mock">
                <h5>support.ai</h5>
                <div style={{ fontFamily: "var(--mono)", fontSize: "10px", color: "var(--gray)" }}>
                  {"// 1,247 tickets · 12 categories"}
                </div>
                <div className="feed">
                  <div style={{ width: "80%" }}></div>
                  <div style={{ width: "60%" }}></div>
                  <div style={{ width: "90%" }}></div>
                  <div style={{ width: "50%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="case-info">
            <div className="case-tags">
              <span className="tag">AI Agent</span>
              <span className="tag">Support</span>
              <span className="tag">5 weeks</span>
            </div>
            <h3>Helpdesk auto-triage for a 200k-user app</h3>
            <p>
              RAG-powered ticket classifier + responder. Handles tier-1 support
              autonomously, escalates the rest with full context.
            </p>
            <div className="case-result">
              <div>
                {"// auto-resolve"}
                <b>72%</b>
              </div>
              <div>
                {"// CSAT"}
                <b>4.6★</b>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* LOAD MORE */}
      <div style={{ textAlign: "center", marginTop: "60px" }} className="reveal">
        <Link href="/contact" className="btn btn-secondary">
          Want to see more under NDA? Ask <span className="arr">↗</span>
        </Link>
      </div>

      {/* FEATURE QUOTE */}
      <div className="feature-quote reveal">
        <div className="big-q">&ldquo;</div>
        <div>
          <p>
            NoodleCodes shipped our entire MVP — frontend, backend, AI layer — in
            21 days. We launched, signed pilot customers, and raised $4.2M off the
            back of it. They are{" "}
            <span style={{ fontFamily: "var(--brush)", color: "var(--noodle)" }}>
              unfairly good.
            </span>
          </p>
          <div className="by">
            — Aanya Mehta, CEO @ Stackly · ($4.2M Series A, 2026)
          </div>
        </div>
      </div>
    </>
  );
}
