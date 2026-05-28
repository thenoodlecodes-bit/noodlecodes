import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "A tiny dev kitchen with a big appetite. Meet the team, learn the story, and find out why we left big agencies to build NoodleCodes.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <main id="main">
      <header className="page-head">
        <div className="wrap">
          <div className="crumb rise-1">
            <Link href="/">Home</Link>
            <span className="sep">/</span>About
          </div>
          <span className="eyebrow rise-2">The kitchen, the cooks, the chaos</span>
          <h1 className="rise-3">
            Small team.
            <br />
            <em>Big appetite.</em>
          </h1>
          <p className="lede rise-4">
            We&rsquo;re a four-person studio that left a 200-person agency in 2024
            because the bureaucracy was eating the joy out of building. Now we
            ship faster, charge less, and have way more fun.
          </p>
        </div>
      </header>

      {/* STORY */}
      <section>
        <div className="wrap">
          <div className="story-grid">
            <div className="story-art reveal">
              <div className="big-n">
                N
                <em>
                  est.
                  <br />
                  2024
                </em>
              </div>
            </div>
            <div className="story-text reveal">
              <span className="eyebrow">Our story</span>
              <h2 className="section-title">
                Why we <em>quit</em>
                <br />
                the big jobs.
              </h2>
              <p>
                NoodleCodes started in a Mumbai apartment with three engineers,
                one designer, two whiteboards and an unhealthy amount of instant
                noodles. We&rsquo;d all spent the previous 8+ years inside big
                agencies and bigger startups — building things that took 9 months
                when they should have taken 9 weeks.
              </p>
              <p>
                The pattern was always the same:{" "}
                <b>good engineers, good designers, killed by good intentions.</b>{" "}
                Discovery decks. Quarterly planning. Slack channels with 47
                stakeholders. Stand-ups for stand-ups. By the time anything
                shipped, the original idea was unrecognizable.
              </p>

              <div className="pull">
                &ldquo;What if we just
                <br />
                <em>shipped the thing?&rdquo;</em>
              </div>

              <p>
                That was the whole pitch. Find founders who want a partner, not a
                vendor. Quote a real price. Lock the scope. Ship in weeks, not
                quarters. Stay opinionated. Never grow past 8 people.
              </p>
              <p>
                Two years and 120+ projects later, we&rsquo;re still 8 people.
                Still in Mumbai (plus three nomads). Still cooking. Some of you
                have already shipped products with us — most haven&rsquo;t yet.{" "}
                <b>This is the part where you say hi.</b>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section>
        <div className="facts reveal">
          <span className="eyebrow" style={{ color: "var(--noodle-2)" }}>
            Receipts
          </span>
          <h2
            className="section-title"
            style={{ color: "var(--cream)", marginBottom: "50px" }}
          >
            By the <em>numbers</em>.
          </h2>
          <div className="facts-grid">
            <div className="fact">
              <div className="label">{"// Founded"}</div>
              <div className="big">2024</div>
              <div className="sub">Mumbai, India</div>
            </div>
            <div className="fact">
              <div className="label">{"// Team size"}</div>
              <div className="big">8</div>
              <div className="sub">never more, by design</div>
            </div>
            <div className="fact">
              <div className="label">{"// Shipped"}</div>
              <div className="big">120+</div>
              <div className="sub">across 4 services</div>
            </div>
            <div className="fact">
              <div className="label">{"// Clients in"}</div>
              <div className="big">14</div>
              <div className="sub">countries &amp; counting</div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section>
        <div className="wrap">
          <span className="eyebrow reveal">The cooks</span>
          <h2 className="section-title reveal">
            Meet the <em>team</em>.
          </h2>
          <p className="section-intro reveal">
            No account managers. No middle layer. Just engineers, designers and
            one part-time chai-maker. The people on this page are the people
            you&rsquo;ll Slack with.
          </p>

          <div className="team-grid">
            <article className="team-card reveal">
              <div className="team-avatar">A</div>
              <h3 className="team-name">Arjun Patel</h3>
              <div className="team-role">Co-founder · Engineering</div>
              <p className="team-bio">
                Ex-Razorpay, ex-Cred. Writes the backend, reviews every PR, breaks
                the YC interview rules at every party.
              </p>
              <a href="#" className="team-link">Twitter ↗</a>
            </article>

            <article className="team-card reveal">
              <div className="team-avatar">M</div>
              <h3 className="team-name">Maya Reddy</h3>
              <div className="team-role">Co-founder · Design</div>
              <p className="team-bio">
                Ex-Stripe, ex-Phantom. Designs the systems and the screens.
                Believes in cursors, against pop-up cookies.
              </p>
              <a href="#" className="team-link">Dribbble ↗</a>
            </article>

            <article className="team-card reveal">
              <div className="team-avatar">K</div>
              <h3 className="team-name">Kabir Singh</h3>
              <div className="team-role">Eng · AI &amp; Backend</div>
              <p className="team-bio">
                Builds the AI agents people actually use. Former Hugging Face
                contributor. Will defend Python with his life.
              </p>
              <a href="#" className="team-link">GitHub ↗</a>
            </article>

            <article className="team-card reveal">
              <div className="team-avatar">L</div>
              <h3 className="team-name">Lina Andersson</h3>
              <div className="team-role">Eng · Frontend &amp; Mobile</div>
              <p className="team-bio">
                Animations, gestures, native feel. Currently nomading through
                Lisbon. Owns more mechanical keyboards than is reasonable.
              </p>
              <a href="#" className="team-link">LinkedIn ↗</a>
            </article>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section>
        <div className="wrap">
          <span className="eyebrow reveal">What we believe</span>
          <h2 className="section-title reveal">
            Three things
            <br />
            we won&rsquo;t <em>budge on</em>.
          </h2>

          <div className="values-grid">
            <div className="value-card reveal">
              <div className="val-num">01</div>
              <h3>Stay small.</h3>
              <p>
                We cap the team at 8. We turn down ~40% of inbound. The minute we
                scale to a 50-person agency, you stop getting the founders on
                Slack — and that&rsquo;s the whole point.
              </p>
            </div>
            <div className="value-card reveal">
              <div className="val-num">02</div>
              <h3>Be honest.</h3>
              <p>
                If your idea is bad, we&rsquo;ll say so. If our quote is wrong,
                we&rsquo;ll re-quote. If we miss a deadline, we&rsquo;ll eat the
                cost. Honesty is cheaper than damage control.
              </p>
            </div>
            <div className="value-card reveal">
              <div className="val-num">03</div>
              <h3>Ship the thing.</h3>
              <p>
                Discovery decks don&rsquo;t pay rent. Three-week MVPs do.
                We&rsquo;re allergic to &ldquo;phase 1 of 7&rdquo; energy.
                There&rsquo;s one phase: working software in production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRESS / RECOGNITION */}
      <section>
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="eyebrow reveal" style={{ display: "inline-flex" }}>
            As featured in
          </span>
          <div className="press-row reveal">
            <span className="press-item">TechCrunch</span>
            <span className="press-item italic">The Indian Express</span>
            <span className="press-item uc">YourStory</span>
            <span className="press-item">Product Hunt #1</span>
            <span className="press-item italic">Forbes 30u30 (&rsquo;26)</span>
          </div>
        </div>
      </section>

      {/* HIRING */}
      <section>
        <div className="wrap">
          <div className="cta-banner dashed reveal">
            <div>
              <span className="eyebrow" style={{ marginBottom: "14px" }}>
                PSA · We&rsquo;re not hiring
              </span>
              <h3 style={{ maxWidth: "22ch" }}>
                But if you&rsquo;re a senior engineer or designer who wants in{" "}
                <span style={{ fontFamily: "var(--brush)", color: "var(--sauce)" }}>
                  someday
                </span>{" "}
                — say hi.
              </h3>
            </div>
            <a
              href="mailto:thenoodlecodes@gmail.com?subject=Future hire"
              className="btn btn-primary"
            >
              Drop your work ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
