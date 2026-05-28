"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NoodleKnot from "@/components/NoodleKnot";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <nav className="nav" role="navigation" aria-label="Main">
      <div className="wrap nav-inner">
        <Link className="logo" href="/" aria-label="NoodleCodes home">
          NoodleC
          <span className="logo-knot" aria-hidden="true">
            <NoodleKnot size="1.05em" drips />
          </span>
          des
        </Link>

        <button
          className={`nav-toggle${open ? " open" : ""}`}
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="bars">
            <span></span>
            <span></span>
            <span></span>
          </span>
          Menu
        </button>

        <div className={`nav-links${open ? " open" : ""}`} id="nav-links">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "active" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`nav-cta${isActive("/contact") ? " active" : ""}`}
          >
            Start cooking <span className="arr">↗</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
