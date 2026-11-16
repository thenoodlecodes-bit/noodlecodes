"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent, type PointerEvent } from "react";
import { Logo } from "@/components/Logo/Logo";
import styles from "./Header.module.css";

export type MenuData = {
  services: { href: string; name: string; menu: string }[];
  solutions: { href: string; name: string; kind: string }[];
  industries: { href: string; name: string; menu: string }[];
  insights: { href: string; title: string; meta: string }[];
  feature: { href: string; client: string; headline: string };
};

type Panel = "services" | "industries" | "insights";

const PANELS: { id: Panel; label: string; base: string }[] = [
  { id: "services", label: "What we do", base: "/services" },
  { id: "industries", label: "Industries", base: "/industries" },
  { id: "insights", label: "Insights", base: "/insights" },
];

const LINKS = [
  { href: "/work", label: "Clients" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
];

export function Header({ menu }: { menu: MenuData }) {
  const pathname = usePathname();
  const [open, setOpen] = useState<Panel | null>(null);
  const [sheet, setSheet] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  const header = useRef<HTMLElement>(null);

  const later = (fn: () => void, ms: number) => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(fn, ms);
  };

  useEffect(() => {
    if (!open && !sheet) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (open) document.getElementById(`trigger-${open}`)?.focus();
      setOpen(null);
      setSheet(false);
    };
    const onDown = (e: globalThis.PointerEvent) => {
      if (!header.current?.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open, sheet]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  // any link inside the header closes whatever is open
  const closeOnLink = (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest("a")) {
      setOpen(null);
      setSheet(false);
    }
  };

  const hoverOpen = (id: Panel) => (e: PointerEvent) => {
    if (e.pointerType === "mouse") later(() => setOpen(id), 90);
  };
  const hoverClose = (e: PointerEvent) => {
    if (e.pointerType === "mouse") later(() => setOpen(null), 160);
  };

  const current = (base: string) => pathname === base || pathname.startsWith(`${base}/`);

  return (
    <header
      ref={header}
      className={styles.header}
      data-menu-open={sheet || undefined}
      onPointerLeave={hoverClose}
      onClick={closeOnLink}
    >
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand} aria-label="Noodle Codes home">
          <Logo />
        </Link>

        <nav className={styles.nav} aria-label="Main">
          <ul>
            {PANELS.map((p) => (
              <li key={p.id} onPointerEnter={hoverOpen(p.id)}>
                <button
                  id={`trigger-${p.id}`}
                  type="button"
                  className={styles.item}
                  aria-expanded={open === p.id}
                  aria-controls={`panel-${p.id}`}
                  data-current={current(p.base) || undefined}
                  onClick={() => setOpen((o) => (o === p.id ? null : p.id))}
                >
                  {p.label}
                  <Caret />
                </button>
              </li>
            ))}
            {LINKS.map((l) => (
              <li key={l.href} onPointerEnter={hoverClose}>
                <Link
                  href={l.href}
                  className={styles.item}
                  aria-current={current(l.href) ? "page" : undefined}
                  data-current={current(l.href) || undefined}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/contact" className={`btn btn--primary btn--sm ${styles.cta}`}>
          Contact us
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={sheet}
          aria-controls="mobile-menu"
          onClick={() => setSheet((s) => !s)}
        >
          <span className="sr">{sheet ? "Close menu" : "Open menu"}</span>
          <span className={styles.burger} aria-hidden="true" />
        </button>
      </div>

      <div
        id="panel-services"
        className={styles.panel}
        hidden={open !== "services"}
        onPointerEnter={() => window.clearTimeout(timer.current)}
      >
        <div className={`container ${styles.panelGrid}`}>
          <div>
            <p className={styles.panelTitle}>
              <Link href="/services">All services</Link>
            </p>
            <ul className={styles.linkList}>
              {menu.services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>
                    <strong>{s.name}</strong>
                    <span>{s.menu}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={styles.panelTitle}>
              <Link href="/services/plug-and-play">Plug and play modules</Link>
            </p>
            <ul className={styles.linkList}>
              {menu.solutions.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>
                    <strong>{s.name}</strong>
                    <span>{s.kind}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href={menu.feature.href} className={styles.feature}>
            <strong>{menu.feature.headline}</strong>
            <span className="meta">{menu.feature.client}</span>
            <span className="go">Read the story</span>
          </Link>
        </div>
      </div>

      <div
        id="panel-industries"
        className={styles.panel}
        hidden={open !== "industries"}
        onPointerEnter={() => window.clearTimeout(timer.current)}
      >
        <div className={`container ${styles.panelGrid}`}>
          <div className={styles.span2}>
            <p className={styles.panelTitle}>
              <Link href="/industries">All industries</Link>
            </p>
            <ul className={`${styles.linkList} ${styles.twoCol}`}>
              {menu.industries.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>
                    <strong>{s.name}</strong>
                    <span>{s.menu}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/work" className={styles.feature}>
            <strong>Eight client stories from retail, finance, health, mobility and SaaS.</strong>
            <span className="go">Meet our clients</span>
          </Link>
        </div>
      </div>

      <div
        id="panel-insights"
        className={styles.panel}
        hidden={open !== "insights"}
        onPointerEnter={() => window.clearTimeout(timer.current)}
      >
        <div className={`container ${styles.panelGrid}`}>
          <div>
            <p className={styles.panelTitle}>
              <Link href="/insights">All insights</Link>
            </p>
            <ul className={styles.linkList}>
              <li>
                <Link href="/insights">
                  <strong>Articles</strong>
                  <span>Engineering, AI, growth and measurement</span>
                </Link>
              </li>
              <li>
                <Link href="/insights/stack-report">
                  <strong>The Stack Report</strong>
                  <span>What we use, what we test and what we dropped</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.span2}>
            <p className={styles.panelTitle}>Latest</p>
            <ul className={styles.latest}>
              {menu.insights.map((i) => (
                <li key={i.href}>
                  <Link href={i.href}>
                    <strong>{i.title}</strong>
                    <span className="meta">{i.meta}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className={styles.sheet} hidden={!sheet}>
        <div className="container">
          {PANELS.map((p) => (
            <details key={p.id} className={styles.group} name="mobile-nav">
              <summary>
                {p.label}
                <Caret />
              </summary>
              <ul>
                {p.id === "services" && (
                  <>
                    {[{ href: "/services", name: "All services" }, ...menu.services].map((s) => (
                      <li key={s.href}>
                        <Link href={s.href}>{s.name}</Link>
                      </li>
                    ))}
                    {menu.solutions.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href}>
                          {s.name} <span className={styles.kind}>{s.kind}</span>
                        </Link>
                      </li>
                    ))}
                  </>
                )}
                {p.id === "industries" &&
                  [{ href: "/industries", name: "All industries" }, ...menu.industries].map((s) => (
                    <li key={s.href}>
                      <Link href={s.href}>{s.name}</Link>
                    </li>
                  ))}
                {p.id === "insights" && (
                  <>
                    <li>
                      <Link href="/insights">Articles</Link>
                    </li>
                    <li>
                      <Link href="/insights/stack-report">The Stack Report</Link>
                    </li>
                  </>
                )}
              </ul>
            </details>
          ))}
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={styles.sheetLink}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className={`btn btn--primary ${styles.sheetCta}`}>
            Contact us
          </Link>
        </div>
      </div>
    </header>
  );
}

function Caret() {
  return (
    <svg className={styles.caret} viewBox="0 0 12 12" aria-hidden="true">
      <path d="M3 4.5 6 7.5l3-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
