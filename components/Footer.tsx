"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NoodleKnot from "@/components/NoodleKnot";

export default function Footer() {
  const pathname = usePathname();
  const showCta = pathname !== "/contact";
  const year = new Date().getFullYear();

  return (
    <footer className="site-foot">
      <div className="wrap">
        {showCta && (
          <div className="foot-cta">
            <h3>
              Hungry?
              <br />
              <em>let&rsquo;s cook.</em>
            </h3>
            <div className="ctas">
              <Link href="/contact" className="btn btn-primary">
                Book a call <span className="arr">↗</span>
              </Link>
              <a href="mailto:hello@noodlecodes.dev" className="btn btn-secondary">
                Email us <span className="arr">→</span>
              </a>
            </div>
          </div>
        )}

        <div
          className="foot-grid"
          style={
            showCta
              ? undefined
              : {
                  borderTop: "1px solid rgba(247,241,225,.15)",
                  paddingTop: "50px",
                }
          }
        >
          <div>
            <div className="foot-brand">
              NoodleC
              <span className="logo-knot logo-knot--dark" aria-hidden="true">
                <NoodleKnot size="1.05em" drips />
              </span>
              des
            </div>
            <p className="foot-tag">
              A tiny dev kitchen serving websites, apps, AI agents &amp; admin
              panels — fresh, fast, never frozen.
            </p>
          </div>
          <div className="foot-col">
            <h5>Services</h5>
            <Link href="/services#websites">Websites</Link>
            <Link href="/services#apps">Mobile Apps</Link>
            <Link href="/services#ai">AI Agents</Link>
            <Link href="/services#panels">Admin Panels</Link>
            <Link href="/services#consulting">Consultancy</Link>
          </div>
          <div className="foot-col">
            <h5>Studio</h5>
            <Link href="/process">Process</Link>
            <Link href="/work">Work</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
          </div>
          <div className="foot-col">
            <h5>Holler</h5>
            <a href="mailto:hello@noodlecodes.dev">hello@noodlecodes.dev</a>
            <a href="#">Instagram</a>
            <a href="#">X / Twitter</a>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        <div className="foot-bottom">
          <div>© {year} NoodleCodes. All slurps reserved.</div>
          <div className="legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <span>
              Brewed with <span className="heart">♥</span> &amp; way too much
              chai.
            </span>
          </div>
        </div>
        <div className="foot-mega" aria-hidden="true">
          N<span className="o">●</span>ODLECODES
        </div>
      </div>
    </footer>
  );
}
