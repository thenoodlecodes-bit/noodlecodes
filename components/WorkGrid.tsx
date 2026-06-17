"use client";

import Link from "next/link";
import { useState, useRef, type CSSProperties } from "react";

/** Premium case thumbnail: poster image always; for featured cases the video
 *  lazy-loads and plays on hover so the grid stays fast (no autoplay on load). */
function CaseThumb({
  poster,
  video,
  alt,
}: {
  poster: string;
  video?: string;
  alt: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  if (!video) {
    return (
      <img src={poster} alt={alt} className="case-img" loading="lazy" />
    );
  }

  return (
    <video
      ref={ref}
      className="case-img"
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={alt}
      onMouseEnter={() => {
        const v = ref.current;
        if (!v) return;
        if (!v.src) v.src = video;
        v.play().catch(() => {});
      }}
      onMouseLeave={() => {
        const v = ref.current;
        if (!v) return;
        v.pause();
        v.currentTime = 0;
      }}
    />
  );
}

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
            <CaseThumb
              poster="/work/finwhiz.jpg"
              video="/work/finwhiz.mp4"
              alt="Finwhiz AI financial-operations dashboard with anomaly detection and an AI assistant"
            />
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
            <CaseThumb
              poster="/work/orbit.jpg"
              video="/work/orbit.mp4"
              alt="OrbitCRM admin panel with revenue analytics, KPI cards and a transactions table"
            />
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
            <CaseThumb
              poster="/work/pingr.jpg"
              video="/work/pingr.mp4"
              alt="Pingr in-app AI assistant chat connected to Stripe, Mixpanel, Slack and HubSpot"
            />
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
            <CaseThumb
              poster="/work/mango.jpg"
              alt="Studio Mango marketing website with a bold hero and a project grid"
            />
          </div>
          <div className="case-info">
            <div className="case-tags">
              <span className="tag">Website</span>
              <span className="tag">Studio</span>
              <span className="tag">2 weeks</span>
            </div>
            <h3>Studio Mango — agency site with 99/100 Lighthouse</h3>
            <p>
              Marketing site for a Brooklyn-based design studio. Custom CMS,
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
            <CaseThumb
              poster="/work/lingu.jpg"
              video="/work/lingu.mp4"
              alt="Lingu language-learning mobile app showing a streak, today's lesson and progress ring"
            />
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
            <CaseThumb
              poster="/work/stackly.jpg"
              alt="Stackly developer SaaS landing page with a ship-faster hero and customer logos"
            />
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
            <CaseThumb
              poster="/work/tofu.jpg"
              alt="Tofu Labs logistics operations dashboard with route map and orders table"
            />
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
            <CaseThumb
              poster="/work/helpdesk.jpg"
              alt="AI support-desk auto-triage interface with ticket categories and an AI-drafted reply"
            />
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
            — Jordan Reyes, CEO @ Stackly · Austin, TX ($4.2M Series A, 2026)
          </div>
        </div>
      </div>
    </>
  );
}
