import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How NoodleCodes collects, uses, and protects your information. We don't sell your data or run remarketing pixels. CCPA & GDPR friendly.",
  alternates: { canonical: "/privacy" },
};

// REPLACE the effective date and the legal entity / address details below before launch.
const EFFECTIVE_DATE = "June 17, 2026";

export default function Privacy() {
  return (
    <main id="main">
      <header className="page-head">
        <div className="wrap">
          <div className="crumb rise-1">
            <Link href="/">Home</Link>
            <span className="sep">/</span>Privacy
          </div>
          <span className="eyebrow rise-2">The fine print, in plain English</span>
          <h1 className="rise-3">
            Privacy <em>Policy</em>.
          </h1>
          <p className="lede rise-4">
            Short version: we collect only what we need to reply to you and do
            the work. We don&rsquo;t sell your data, we don&rsquo;t run
            remarketing pixels, and we don&rsquo;t add you to drip campaigns.
            Here&rsquo;s the longer version.
          </p>
        </div>
      </header>

      <section style={{ padding: "50px 0 100px" }}>
        <div className="wrap legal-prose">
          <p className="legal-meta">
            Effective date: <b>{EFFECTIVE_DATE}</b> · Applies to{" "}
            <b>noodlecodes.dev</b> and our services.
          </p>

          <h2>1. Who we are</h2>
          <p>
            NoodleCodes (&ldquo;NoodleCodes,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a U.S.-based software
            development studio. This policy explains what information we collect
            when you visit our website or work with us, how we use it, and the
            rights you have over it.
          </p>

          <h2>2. Information we collect</h2>
          <p>We keep this deliberately small:</p>
          <ul>
            <li>
              <b>Information you give us.</b> When you submit the contact form,
              email, call, or book a call, we collect what you choose to share —
              typically your name, email, company, role, project details,
              budget range, and timeline.
            </li>
            <li>
              <b>Basic technical data.</b> Like most sites, our hosting and
              analytics may log standard information such as IP address, browser
              type, pages viewed, and referring URL. We use privacy-respecting
              analytics and do not build advertising profiles.
            </li>
            <li>
              <b>Project data.</b> If you become a client, we may handle code,
              credentials, and data you grant us access to in order to deliver
              the work. This is governed by our written agreement and any NDA.
            </li>
          </ul>
          <p>
            We do not knowingly collect information from anyone under 18, and we
            do not use the contact form to collect sensitive personal
            information.
          </p>

          <h2>3. How we use it</h2>
          <ul>
            <li>To respond to your inquiry and prepare a proposal or quote.</li>
            <li>To deliver, support, and improve the services you hire us for.</li>
            <li>To send project-related communication (not marketing blasts).</li>
            <li>To keep records for accounting, tax, and legal compliance.</li>
          </ul>

          <h2>4. What we don&rsquo;t do</h2>
          <ul>
            <li>We don&rsquo;t sell, rent, or trade your personal information.</li>
            <li>We don&rsquo;t run third-party advertising or remarketing pixels.</li>
            <li>We don&rsquo;t add you to automated marketing funnels.</li>
          </ul>

          <h2>5. Service providers</h2>
          <p>
            We use a small set of trusted vendors to run our business — for
            example, email delivery, calendar booking, cloud hosting, and
            payment processing. They only receive the information needed to
            perform their function and are bound by their own privacy and
            security obligations. Representative providers include Resend
            (email), Calendly (scheduling), Vercel/AWS (hosting), and Stripe
            (payments).
          </p>

          <h2>6. Cookies</h2>
          <p>
            We use only the cookies needed for the site to function and for
            basic, aggregate analytics. We don&rsquo;t use advertising cookies.
            You can block or delete cookies in your browser settings without
            breaking the core site.
          </p>

          <h2>7. Data retention</h2>
          <p>
            We keep inquiry information for as long as needed to respond and, if
            relevant, to maintain a business relationship — then we delete or
            anonymize it. Client and financial records are retained as required
            by law. You can ask us to delete your information at any time (see
            below).
          </p>

          <h2>8. Your rights (CCPA, GDPR &amp; more)</h2>
          <p>
            Depending on where you live, you may have the right to access,
            correct, delete, or port your personal information, and to opt out of
            certain processing. Because we don&rsquo;t sell data or serve
            targeted ads, there&rsquo;s nothing to opt out of on that front.
            California residents (CCPA/CPRA) and EU/UK residents (GDPR) can
            exercise their rights by emailing us — we&rsquo;ll respond within the
            timeframe the law requires. We won&rsquo;t discriminate against you
            for exercising any right.
          </p>

          <h2>9. Security</h2>
          <p>
            We follow sensible, industry-standard practices to protect
            information — least-privilege access, encrypted transport, and
            scoped credentials. For projects with specific requirements, we build
            to SOC 2, HIPAA, CCPA, and GDPR readiness and will complete your
            vendor security review. No method of transmission or storage is 100%
            secure, but we treat your data like it&rsquo;s our own.
          </p>

          <h2>10. Changes to this policy</h2>
          <p>
            If we update this policy, we&rsquo;ll change the effective date at
            the top. Material changes will be highlighted on this page.
          </p>

          <h2>11. Contact us</h2>
          <p>
            Questions, requests, or anything privacy-related — reach a real
            human:
          </p>
          <p>
            {/* REPLACE with your real legal entity name + registered address */}
            NoodleCodes LLC · New York, NY
            <br />
            Email: <a href="mailto:hello@noodlecodes.dev">hello@noodlecodes.dev</a>
          </p>

          <p className="legal-foot">
            This policy is provided for transparency and isn&rsquo;t legal
            advice. We&rsquo;re happy to sign your DPA or NDA — just ask.
          </p>
        </div>
      </section>
    </main>
  );
}
