import type { Metadata } from "next";
import Link from "next/link";
import NoodleKnot from "@/components/NoodleKnot";

export const metadata: Metadata = {
  title: {
    absolute:
      "NoodleCodes — U.S.-based web, app & AI agent development. Code that slaps.",
  },
  alternates: { canonical: "/" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "NoodleCodes",
  url: "https://noodlecodes.dev",
  logo: "https://noodlecodes.dev/icon.svg",
  image: "https://noodlecodes.dev/opengraph-image.jpg",
  description:
    "U.S.-based software development agency building websites, mobile apps, AI agents and admin panels for startups and teams. Senior engineers, U.S. business hours, fixed pricing in your local currency.",
  priceRange: "$$",
  // REPLACE with your real registered U.S. address before launch
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  areaServed: { "@type": "Country", name: "United States" },
  // REPLACE with your real U.S. business phone number
  telephone: "+1-555-012-3456",
  email: "hello@noodlecodes.dev",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "40",
  },
  sameAs: [
    "https://instagram.com/noodlecodes_",
    "https://www.facebook.com/61590267099609/",
  ],
};

export default function Home() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="badge rise-1">
            <span className="dot"></span>
            U.S.-based · Booking Q3 &rsquo;26 — 2 slots left
          </div>

          <h1 className="title rise-2">
            We cook{" "}
            <span className="code">
              c
              <span className="title-knot" aria-hidden="true">
                <NoodleKnot size="0.78em" drips animated />
              </span>
              de
            </span>
            <br />
            that <span className="slaps">slaps.</span>
          </h1>

          <div className="hero-row">
            <p className="hero-sub rise-3">
              NoodleCodes is a tiny, dangerously creative <b>dev kitchen</b> for
              U.S. founders and teams. We ship websites, apps, AI agents &amp;
              admin panels people actually wanna use — senior engineers, working
              U.S. hours, at <b>40–60% less than a U.S. agency.</b> <b>No bloat.
              No offshore roulette. You own everything.</b>
            </p>

            <div className="hero-meta rise-4">
              <div className="meta-row">
                <span>{"// based"}</span>
                <b>New York, USA 🇺🇸</b>
              </div>
              <div className="meta-row">
                <span>{"// hours"}</span>
                <b>9–6 ET / PT overlap</b>
              </div>
              <div className="meta-row">
                <span>{"// shipped"}</span>
                <b>120+ projects</b>
              </div>
              <div className="meta-row">
                <span>{"// avg."}</span>
                <b>3-wk MVP</b>
              </div>
            </div>
          </div>

          <div className="cta-row rise-5">
            <div className="btn-group">
              <Link href="/contact" className="btn btn-primary">
                Book a free strategy call <span className="arr">↗</span>
              </Link>
              <Link href="/work" className="btn btn-secondary">
                See the work <span className="arr">→</span>
              </Link>
            </div>
          </div>

          <div className="us-trust rise-5" aria-label="Trust signals">
            <span className="us-pill"><span className="us-flag" aria-hidden="true">★</span> 4.9 avg · 40+ reviews</span>
            <span className="us-pill">U.S.-based team</span>
            <span className="us-pill">Fixed-price, no surprises</span>
            <span className="us-pill">NDA before we talk</span>
            <span className="us-pill">You own 100% of the code</span>
            <span className="us-pill">On time or money back</span>
          </div>

          <svg
            className="noodle-float"
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M20 150 C 60 70, 120 230, 180 130 S 300 80, 360 170 S 420 250, 380 280"
              stroke="#F2A104"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M10 180 C 70 110, 140 260, 200 160 S 320 110, 380 200"
              stroke="#E04822"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
              opacity=".85"
            />
            <path
              d="M40 110 C 100 50, 160 180, 220 90 S 340 40, 390 110"
              stroke="#0E0E0E"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              opacity=".7"
            />
            <circle cx="370" cy="60" r="6" fill="#F2A104" />
            <circle cx="40" cy="260" r="4" fill="#E04822" />
          </svg>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>
            Websites&nbsp;<span className="star">✱</span>&nbsp;Mobile
            Apps&nbsp;<span className="star">✱</span>&nbsp;AI Agents&nbsp;
            <span className="star">✱</span>&nbsp;Admin Panels&nbsp;
            <span className="star">✱</span>&nbsp;Consultancy&nbsp;
            <span className="star">✱</span>&nbsp;
          </span>
          <span>
            Websites&nbsp;<span className="star">✱</span>&nbsp;Mobile
            Apps&nbsp;<span className="star">✱</span>&nbsp;AI Agents&nbsp;
            <span className="star">✱</span>&nbsp;Admin Panels&nbsp;
            <span className="star">✱</span>&nbsp;Consultancy&nbsp;
            <span className="star">✱</span>&nbsp;
          </span>
        </div>
      </div>

      {/* FREQUENTLY SLURPED — receipt-style trust strip */}
      <div className="slurped">
        <div className="date-stamp">RCV&nbsp;·&nbsp;05/26</div>
        <p className="label">
          Frequently <span className="pipe">/</span> slurped by{" "}
          <span className="pipe">/</span> founders &amp; teams
        </p>
        <div className="stamps">
          <span className="stamp tilt-1">
            <span className="sym">◆</span>&nbsp;Stackly
          </span>
          <span className="stamp tilt-2">PINGR<span className="sym">.</span></span>
          <span className="stamp tilt-3">OrbitCRM</span>
          <span className="stamp tilt-4">
            Studio<span className="sym">M</span>ango
          </span>
          <span className="stamp tilt-5">FINWHIZ</span>
          <span className="stamp tilt-6">
            Tofu<span className="sym">/</span>Labs
          </span>
        </div>
      </div>

      {/* NUTRITION FACTS — replaces 4-up stats row */}
      <section style={{ paddingTop: "70px", paddingBottom: "70px" }}>
        <div className="wrap">
          <div className="nutrition-wrap">
            <div className="nutrition-aside reveal">
              <span className="eyebrow">By the numbers</span>
              <h3>
                Read the <em>label</em>.<br />
                We don&rsquo;t hide ingredients.
              </h3>
              <p>
                What goes into every NoodleCodes project, served straight. No
                retainer fees on the side, no agency fluff for filler — just
                what&rsquo;s in the bowl.
              </p>
              <div className="tiny">
                ✱ Values audited per project. Your mileage may slap.
              </div>
            </div>

            <div className="nutrition reveal" role="img" aria-label="NoodleCodes nutrition facts">
              <h4>Nutrition Facts</h4>
              <div className="nut-serving">
                Per serving / <b>1 NoodleCodes engagement</b>
              </div>
              <div className="nut-amount">
                <span className="lab">Projects shipped</span>
                <span className="cal">120+</span>
              </div>
              <div className="nut-pct-head">% DAILY VIBES</div>
              <div className="nut-row thick">
                <span className="k"><b>Avg. MVP delivery</b> <em>3wk</em></span>
                <span className="v sauce">100%</span>
              </div>
              <div className="nut-row">
                <span className="k"><b>Senior devs</b> <em>only</em></span>
                <span className="v">100%</span>
              </div>
              <div className="nut-row">
                <span className="k"><b>On-time delivery</b> <em>or refund</em></span>
                <span className="v sauce">100%</span>
              </div>
              <div className="nut-row">
                <span className="k"><b>Client retention</b></span>
                <span className="v">98%</span>
              </div>
              <div className="nut-row">
                <span className="k"><b>Response time</b> <em>(U.S. hours)</em></span>
                <span className="v">&lt; 4h</span>
              </div>
              <div className="nut-row">
                <span className="k"><b>Juniors</b> <em>on your code</em></span>
                <span className="v">0%</span>
              </div>
              <div className="nut-row thick">
                <span className="k"><b>Vendor lock-in</b></span>
                <span className="v">0g</span>
              </div>
              <div className="nut-foot">
                ✱ <b>%DV</b> is based on a 3-week sprint diet. Daily vibe needs
                may vary. Contains traces of <b>caffeine</b>, <b>SVG</b>, and
                strong opinions.
              </div>

              <svg className="nut-noodle" viewBox="0 0 120 80" fill="none" aria-hidden="true">
                <path d="M5 60 C 25 20, 55 80, 75 40 S 110 10, 118 50" stroke="#F2A104" strokeWidth="9" strokeLinecap="round" fill="none"/>
                <path d="M2 70 C 22 30, 60 78, 90 50 S 120 30, 118 70" stroke="#E04822" strokeWidth="6" strokeLinecap="round" fill="none" opacity=".8"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="wrap">
          <span className="eyebrow reveal">What we cook</span>
          <h2 className="section-title reveal">
            The <em>menu</em>.<br />
            Pick your flavor.
          </h2>
          <p className="section-intro reveal">
            Every dish is hand-crafted, opinionated and built to scale. We
            don&rsquo;t do generic templates — every line of code earns its place
            on the plate.
          </p>

          <div className="services">
            <Link href="/services#websites" className="svc svc-1 reveal">
              <div>
                <div className="svc-num">01 / Websites</div>
                <h3>Sites that hit different.</h3>
                <p>
                  Marketing sites, landing pages, portfolios. Lightning-fast,
                  SEO-friendly, animated like a music video.
                </p>
              </div>
              <div className="svc-foot">
                <div className="svc-icon-bg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="3" y="4" width="18" height="14" rx="2" />
                    <path d="M3 9h18M7 14h4" />
                  </svg>
                </div>
                <span className="svc-arrow">↗</span>
              </div>
            </Link>

            <Link href="/services#apps" className="svc svc-2 reveal">
              <div>
                <div className="svc-num">02 / Mobile Apps</div>
                <h3>Apps people actually open.</h3>
                <p>
                  iOS, Android, cross-platform. Buttery UX, native feel, real
                  engineering behind the cute icon.
                </p>
              </div>
              <div className="svc-foot">
                <div className="svc-icon-bg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="6" y="2" width="12" height="20" rx="3" />
                    <path d="M11 18h2" />
                  </svg>
                </div>
                <span className="svc-arrow">↗</span>
              </div>
            </Link>

            <Link href="/services#ai" className="svc svc-3 reveal">
              <div>
                <div className="svc-num">03 / AI Agents</div>
                <h3>Agents with a brain.</h3>
                <p>
                  LLM-powered workflows, RAG, custom GPT-style tools. Less
                  chatbot, more co-worker.
                </p>
              </div>
              <div className="svc-foot">
                <div className="svc-icon-bg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 2a4 4 0 0 0-4 4v2H7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1v2a4 4 0 0 0 8 0v-2h1a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3h-1V6a4 4 0 0 0-4-4Z" />
                    <path d="M10 12h.01M14 12h.01" />
                  </svg>
                </div>
                <span className="svc-arrow">↗</span>
              </div>
            </Link>

            <Link href="/services#panels" className="svc svc-4 reveal">
              <div>
                <div className="svc-num">04 / Admin Panels</div>
                <h3>Dashboards that don&rsquo;t suck.</h3>
                <p>
                  Custom CMS, ops tooling, internal panels. Built for the team
                  that actually has to use it daily.
                </p>
              </div>
              <div className="svc-foot">
                <div className="svc-icon-bg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="3" y="3" width="7" height="9" rx="1" />
                    <rect x="14" y="3" width="7" height="5" rx="1" />
                    <rect x="14" y="12" width="7" height="9" rx="1" />
                    <rect x="3" y="16" width="7" height="5" rx="1" />
                  </svg>
                </div>
                <span className="svc-arrow">↗</span>
              </div>
            </Link>

            <Link href="/services#consulting" className="svc svc-5 reveal">
              <div>
                <div className="svc-num">05 / Consultancy</div>
                <h3>We&rsquo;ll be your CTO for a day.</h3>
                <p>
                  Audits, architecture, scaling, hiring. Get senior-level brain
                  time without the senior-level burnout.
                </p>
              </div>
              <div className="svc-foot">
                <div className="svc-icon-bg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <span className="svc-arrow">↗</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ paddingTop: "60px" }}>
        <div className="wrap">
          <span className="eyebrow reveal">Why teams pick us</span>
          <h2 className="section-title reveal">
            Small kitchen.
            <br />
            <em>Massive output.</em>
          </h2>

          <div className="takeout">
            <div className="menu-panel tilt-a reveal">
              <span className="punch" aria-hidden="true"></span>
              <div className="item-no">No. 01 / Sprint Special</div>
              <h3>3-week sprints</h3>
              <div className="item-price">~ shipped hot ~</div>
              <div className="dots" aria-hidden="true"></div>
              <p>
                Most agencies &ldquo;discover&rdquo; for a month. We plate
                working software in three weeks flat — then iterate on real
                user feedback, not boardroom guesses.
              </p>
              <div className="seal">FRESH<br />DAILY</div>
            </div>

            <div className="menu-panel tilt-b reveal">
              <span className="punch" aria-hidden="true"></span>
              <div className="item-no">No. 02 / House Recipe</div>
              <h3>Senior-only kitchen</h3>
              <div className="item-price">~ no juniors ~</div>
              <div className="dots" aria-hidden="true"></div>
              <p>
                Zero juniors learning on your dime. Every line is written or
                reviewed by engineers with 8+ years in the wok. We don&rsquo;t
                outsource. We don&rsquo;t ghost.
              </p>
              <div className="seal">CHEF&apos;S<br />PICK</div>
            </div>

            <div className="menu-panel tilt-c reveal">
              <span className="punch" aria-hidden="true"></span>
              <div className="item-no">No. 03 / Take Home</div>
              <h3>You own everything</h3>
              <div className="item-price">~ no leftovers ~</div>
              <div className="dots" aria-hidden="true"></div>
              <p>
                Code, designs, domain, infra. Full repo, full handover. No
                vendor lock-in, no shady &ldquo;managed&rdquo; middleware.
                You&rsquo;re the boss of your stack.
              </p>
              <div className="seal">100%<br />YOURS</div>
            </div>
          </div>
        </div>
      </section>

      {/* RECIPE */}
      <div className="recipe-wrap" id="recipe">
        <div className="recipe-bg">
          <span className="eyebrow reveal">The recipe</span>
          <h2 className="section-title reveal">
            From <em>brief</em> to deploy
            <br />
            in four hot steps.
          </h2>

          <svg className="steam" viewBox="0 0 200 200" fill="none" aria-hidden="true">
            <path d="M30 180 C 30 130, 80 140, 60 90 S 100 30, 80 0" stroke="#F2A104" strokeWidth="6" strokeLinecap="round" />
            <path d="M100 180 C 100 130, 150 140, 130 90 S 170 30, 150 0" stroke="#F2A104" strokeWidth="6" strokeLinecap="round" />
            <path d="M170 180 C 170 140, 200 150, 190 110" stroke="#F2A104" strokeWidth="6" strokeLinecap="round" />
          </svg>

          <div className="steps">
            <div className="step reveal">
              <span className="step-num">01 / Ingredients</span>
              <h4>Discovery</h4>
              <p>
                Quick call, sharp questions, no fluff. We figure out what you
                actually need (not what you think you need).
              </p>
              <svg className="step-noodle" viewBox="0 0 100 20" fill="none">
                <path d="M0 10 Q 25 -5, 50 10 T 100 10" stroke="#F2A104" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div className="step reveal">
              <span className="step-num">02 / Prep</span>
              <h4>Design</h4>
              <p>
                Wireframes, mood, motion, vibe. You see real screens within a
                week, not a 40-slide deck of stock photos.
              </p>
              <svg className="step-noodle" viewBox="0 0 100 20" fill="none">
                <path d="M0 10 Q 25 -5, 50 10 T 100 10" stroke="#FFB937" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div className="step reveal">
              <span className="step-num">03 / On the Wok</span>
              <h4>Build</h4>
              <p>
                Sprint-based dev with daily Loom updates and a shared board. You
                always know where the spaghetti&rsquo;s at.
              </p>
              <svg className="step-noodle" viewBox="0 0 100 20" fill="none">
                <path d="M0 10 Q 25 -5, 50 10 T 100 10" stroke="#E04822" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div className="step reveal">
              <span className="step-num">04 / Served</span>
              <h4>Launch &amp; Support</h4>
              <p>
                Smooth deploy, training, docs. Then we stick around — 90 days of
                post-launch sauce included, free.
              </p>
              <svg className="step-noodle" viewBox="0 0 100 20" fill="none">
                <path d="M0 10 Q 25 -5, 50 10 T 100 10" stroke="#F7F1E1" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <div style={{ marginTop: "60px", display: "flex", justifyContent: "center" }}>
            <Link href="/process" className="btn btn-sauce">
              See full process <span className="arr">↗</span>
            </Link>
          </div>
        </div>
      </div>

      {/* WORK */}
      <section id="work">
        <div className="wrap">
          <div
            className="flex between reveal"
            style={{ marginBottom: "56px", flexWrap: "wrap", gap: "24px" }}
          >
            <div>
              <span className="eyebrow" style={{ marginBottom: "12px" }}>
                Selected work
              </span>
              <h2 className="section-title" style={{ margin: 0 }}>
                Stuff we <em>shipped</em>.<br />
                Stuff you&rsquo;ll like.
              </h2>
            </div>
            <Link href="/work" className="btn btn-secondary">
              View all 24 cases <span className="arr">→</span>
            </Link>
          </div>

          <div className="work-grid">
            <Link href="/work#finwhiz" className="case reveal">
              <div className="case-thumb">
                <img
                  src="/work/finwhiz.jpg"
                  alt="Finwhiz AI financial-operations dashboard"
                  className="case-img"
                  loading="lazy"
                />
              </div>
              <div className="case-meta">
                <h4>Finwhiz · AI Ops Agent</h4>
                <span className="case-tag">AI · 6 weeks</span>
              </div>
            </Link>

            <Link href="/work#orbit" className="case reveal">
              <div className="case-thumb">
                <img
                  src="/work/orbit.jpg"
                  alt="OrbitCRM admin panel with revenue analytics"
                  className="case-img"
                  loading="lazy"
                />
              </div>
              <div className="case-meta">
                <h4>OrbitCRM · Admin Panel</h4>
                <span className="case-tag">SaaS · 4 weeks</span>
              </div>
            </Link>

            <Link href="/work#pingr" className="case reveal">
              <div className="case-thumb">
                <img
                  src="/work/pingr.jpg"
                  alt="Pingr in-app AI assistant chat"
                  className="case-img"
                  loading="lazy"
                />
              </div>
              <div className="case-meta">
                <h4>Pingr · In-App Assistant</h4>
                <span className="case-tag">AI · 8 weeks</span>
              </div>
            </Link>

            <Link href="/work#mango" className="case reveal">
              <div className="case-thumb">
                <img
                  src="/work/mango.jpg"
                  alt="Studio Mango marketing website"
                  className="case-img"
                  loading="lazy"
                />
              </div>
              <div className="case-meta">
                <h4>Studio Mango · Website</h4>
                <span className="case-tag">Marketing · 2 weeks</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section>
        <div className="wrap">
          <span className="eyebrow reveal">Word of mouth</span>
          <h2 className="section-title reveal">
            People <em>like</em> us.<br />
            Some even tip.
          </h2>

          <div className="napkins">
            <div className="napkin tilt-a reveal">
              <span className="stain" aria-hidden="true"></span>
              <p>
                they built our entire MVP in three weeks. i thought the deadline
                was a joke. it wasn&rsquo;t. we launched, signed pilots, and
                closed our seed round off the back of it.
              </p>
              <div className="scribble">
                <div className="marker" aria-hidden="true">J</div>
                <div className="by">
                  <b>Jordan Reyes</b>
                  <br />
                  CEO · Stackly · Austin, TX
                </div>
              </div>
            </div>

            <div className="napkin tilt-b reveal">
              <span className="stain" aria-hidden="true"></span>
              <p>
                hired NoodleCodes for an &ldquo;AI agent.&rdquo; got an actual
                product. our support team&rsquo;s workload dropped 60%. and they
                actually overlap our hours — felt like an in-house team.
              </p>
              <div className="scribble">
                <div className="marker" aria-hidden="true">M</div>
                <div className="by">
                  <b>Marcus Bennett</b>
                  <br />
                  CTO · Pingr · New York, NY
                </div>
              </div>
            </div>

            <div className="napkin tilt-c reveal">
              <span className="stain" aria-hidden="true"></span>
              <p>
                the Loom updates alone are worth the price. i always know
                what&rsquo;s happening. zero anxiety, no timezone games. 10/10
                would build with them again.
              </p>
              <div className="scribble">
                <div className="marker" aria-hidden="true">E</div>
                <div className="by">
                  <b>Emily Carter</b>
                  <br />
                  Founder · Studio Mango · Brooklyn, NY
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORDER PAD CTA */}
      <section style={{ paddingBottom: "80px" }}>
        <div className="wrap">
          <div className="order-pad-wrap reveal">
            <div className="order-pad">
              <div className="pad-watermark" aria-hidden="true">ORDER UP</div>
              <div className="pad-head">
                <span className="ord-no">ORDER #001</span>
                <span className="ord-date">TABLE: YOURS</span>
              </div>
              <h3>
                Have an idea?<br />
                Let&rsquo;s see if it&rsquo;s <em>spicy enough.</em>
              </h3>
              <div className="pad-sub">{"// taking orders, served in 3 wk"}</div>

              <div className="pad-rows">
                <div className="pad-row checked">
                  <span className="box" aria-hidden="true"></span>
                  <span>1 × Discovery call</span>
                  <span className="price">free</span>
                </div>
                <div className="pad-row checked">
                  <span className="box" aria-hidden="true"></span>
                  <span>1 × Honest scope estimate</span>
                  <span className="price">free</span>
                </div>
                <div className="pad-row">
                  <span className="box" aria-hidden="true"></span>
                  <span>1 × Project, shipped hot</span>
                  <span className="price">tbd</span>
                </div>
              </div>

              <div className="pad-total">
                <span>Total</span>
                <span className="v"><em>let&rsquo;s talk</em></span>
              </div>

              <div className="pad-cta">
                <Link href="/contact" className="btn btn-primary">
                  Place the order <span className="arr">↗</span>
                </Link>
                <Link href="/pricing" className="btn btn-secondary">
                  See full menu <span className="arr">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
