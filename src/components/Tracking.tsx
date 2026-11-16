"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { track } from "@/lib/track";

/** Page-level analytics pushed to dataLayer: page views, clicks, scroll depth, section views and time on page. */
export function Tracking() {
  const pathname = usePathname();

  useEffect(() => {
    track("device", matchMedia("(pointer: coarse)").matches ? "touch" : "desktop");
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest("a, button, summary");
      if (!el || el.closest("[data-no-track]")) return;
      const label = (el.getAttribute("aria-label") || el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 40);
      if (label) track("click", label);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // everything below restarts on each client-side navigation
  useEffect(() => {
    track("page_view", pathname);

    const depths = [25, 50, 75, 100];
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      if (max <= 0) return;
      const pct = (scrollY / max) * 100;
      while (depths.length && pct >= depths[0] - 0.5) track("scroll", `${depths.shift()}%`);
    };

    const seen = new Set<string>();
    const sections = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const name = (entry.target as HTMLElement).dataset.section;
          if (entry.isIntersecting && name && !seen.has(name)) {
            seen.add(name);
            track("view", name);
          }
        }
      },
      { threshold: 0.25 },
    );
    document.querySelectorAll("[data-section]").forEach((el) => sections.observe(el));

    const timers = [15, 30, 60, 120].map((sec) => window.setTimeout(() => track("time_on_page", `${sec}s`), sec * 1000));

    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      removeEventListener("scroll", onScroll);
      sections.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [pathname]);

  return null;
}
