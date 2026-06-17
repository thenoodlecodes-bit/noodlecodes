import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the NoodleCodes website and the basics of how we work together — clear, fair, and in plain English.",
  alternates: { canonical: "/terms" },
};

// REPLACE the effective date, legal entity, and governing-law state before launch.
const EFFECTIVE_DATE = "June 17, 2026";
const GOVERNING_STATE = "Delaware"; // REPLACE with your entity's actual state

export default function Terms() {
  return (
    <main id="main">
      <header className="page-head">
        <div className="wrap">
          <div className="crumb rise-1">
            <Link href="/">Home</Link>
            <span className="sep">/</span>Terms
          </div>
          <span className="eyebrow rise-2">The house rules</span>
          <h1 className="rise-3">
            Terms of <em>Service</em>.
          </h1>
          <p className="lede rise-4">
            These terms cover your use of this website and the basics of how we
            work together. The specifics of any project — scope, price, timeline,
            IP, and warranties — live in the signed proposal or contract for that
            project, which always controls if there&rsquo;s a conflict.
          </p>
        </div>
      </header>

      <section style={{ padding: "50px 0 100px" }}>
        <div className="wrap legal-prose">
          <p className="legal-meta">
            Effective date: <b>{EFFECTIVE_DATE}</b> · Applies to{" "}
            <b>noodlecodes.dev</b>.
          </p>

          <h2>1. Agreement</h2>
          <p>
            By accessing or using noodlecodes.dev (the &ldquo;Site&rdquo;), you
            agree to these Terms of Service. If you don&rsquo;t agree, please
            don&rsquo;t use the Site. NoodleCodes (&ldquo;we,&rdquo;
            &ldquo;us&rdquo;) may update these terms from time to time; the
            current version always lives at this URL with the effective date
            above.
          </p>

          <h2>2. What this site is</h2>
          <p>
            The Site is an informational marketing site for our software
            development services. Prices shown are <b>starting</b> figures in
            U.S. dollars and are not offers or quotes. Nothing on this Site
            creates a contract for services — a project only begins once both
            sides sign a written proposal, statement of work, or contract.
          </p>

          <h2>3. Engaging our services</h2>
          <p>
            When you hire us, a separate written agreement governs that work,
            including:
          </p>
          <ul>
            <li>The agreed scope, deliverables, timeline, and fixed price.</li>
            <li>
              Payment terms — typically 30% on signature, 40% at the midpoint
              demo, and 30% on launch, invoiced in USD.
            </li>
            <li>
              <b>Intellectual property:</b> on full payment, we assign all rights
              in the delivered work product to you. You own the code, the
              designs, and the IP.
            </li>
            <li>
              <b>Warranty:</b> we include a 90-day post-launch warranty for bug
              fixes on delivered work, as described in the agreement.
            </li>
            <li>
              <b>On-time pledge:</b> if we miss an agreed deadline by more than
              50%, the unfinished portion is refunded, as stated in the contract.
            </li>
          </ul>
          <p>
            Where those project terms and these Site terms differ, the signed
            project agreement controls.
          </p>

          <h2>4. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Site for any unlawful purpose or to harm others.</li>
            <li>
              Attempt to gain unauthorized access to the Site, its servers, or
              connected systems.
            </li>
            <li>
              Scrape, copy, or republish substantial portions of the Site or its
              content without permission.
            </li>
            <li>Interfere with or disrupt the Site&rsquo;s normal operation.</li>
          </ul>

          <h2>5. Intellectual property of the Site</h2>
          <p>
            The Site&rsquo;s content, branding, copy, illustrations, and code are
            owned by NoodleCodes unless otherwise noted, and are protected by
            applicable IP laws. Client work shown in our portfolio is used with
            permission or under the terms of the relevant agreement. (To be
            clear: this clause is about <em>our</em> marketing site — work we
            deliver to you is assigned to you under your project agreement, per
            Section 3.)
          </p>

          <h2>6. Third-party links</h2>
          <p>
            The Site may link to third-party tools and sites (e.g., our calendar
            booking or social profiles). We&rsquo;re not responsible for the
            content or practices of those third parties; their own terms and
            privacy policies apply.
          </p>

          <h2>7. Disclaimers</h2>
          <p>
            The Site is provided &ldquo;as is&rdquo; and &ldquo;as
            available,&rdquo; without warranties of any kind, express or implied,
            to the maximum extent permitted by law. We don&rsquo;t warrant that
            the Site will be uninterrupted, error-free, or free of harmful
            components. This disclaimer applies to the Site itself — warranties
            for project work are set out in your project agreement.
          </p>

          <h2>8. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, NoodleCodes will not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising from your use of the Site. Liability arising
            from project work is governed and capped by the terms of the
            applicable project agreement.
          </p>

          <h2>9. Governing law</h2>
          <p>
            These terms are governed by the laws of the State of{" "}
            {GOVERNING_STATE}, USA, without regard to its conflict-of-laws rules.
            Any dispute relating to the Site will be handled in the state or
            federal courts located in {GOVERNING_STATE}, unless your project
            agreement says otherwise.
          </p>

          <h2>10. Contact</h2>
          <p>
            {/* REPLACE with your real legal entity name + registered address */}
            NoodleCodes LLC · New York, NY
            <br />
            Email: <a href="mailto:hello@noodlecodes.dev">hello@noodlecodes.dev</a>
          </p>

          <p className="legal-foot">
            These terms are provided for transparency and aren&rsquo;t legal
            advice. Want a mutual NDA or MSA before we talk? Just ask.
          </p>
        </div>
      </section>
    </main>
  );
}
