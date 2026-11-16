"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { track } from "@/lib/track";
import { elbowPath, flow, narrow, nodes, tangle, tanglePath, wide, type Layout } from "./diagram";
import styles from "./Untangle.module.css";

type State = "before" | "after";

const CAPTION: Record<State, string> = {
  before: "A typical growing company: twelve tools, an orders spreadsheet in the middle and three different revenue numbers.",
  after: "The same company after working with us: one order system, accurate tracking and one dashboard everyone trusts.",
};

const pct = (n: number) => `${(n * 100).toFixed(3)}%`;

function Diagram({ layout, className }: { layout: Layout; className: string }) {
  const { w, h, node } = layout;
  return (
    <div className={`${styles.layer} ${className}`} style={{ aspectRatio: `${w} / ${h}` }}>
      <svg className={styles.wires} viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
        <g className={styles.tangle}>
          {tangle.map(([a, b, broken]) => {
            const pa = layout.before[a];
            const pb = layout.before[b];
            return (
              <path
                key={a + b}
                d={tanglePath(pa, pb, a + b, w * 0.11)}
                className={broken ? styles.broken : undefined}
              />
            );
          })}
        </g>
        <g className={styles.flow}>
          {flow.map(([a, b], i) => (
            <path
              key={a + b}
              d={elbowPath(layout.after[a], layout.after[b], node, layout.flow)}
              pathLength={1}
              style={{ "--i": i } as CSSProperties}
            />
          ))}
        </g>
      </svg>

      {layout.groups.map((g) => (
        <span
          key={g.label}
          className={`${styles.group} ${layout.flow === "down" ? styles.groupLeft : ""}`}
          style={{ left: pct(g.at.x / w), top: pct(g.at.y / h) }}
        >
          {g.label}
        </span>
      ))}

      {nodes.map((n, i) => {
        const b = layout.before[n.id];
        const a = layout.after[n.id];
        if (!b && !a) return null;
        const from = b ?? a;
        const to = a ?? b;
        return (
          <div
            key={n.id}
            className={styles.node}
            data-in={b && a ? "both" : b ? "before" : "after"}
            data-issue={n.issue || undefined}
            data-built={n.built || undefined}
            style={
              {
                "--bx": pct(from.x / w),
                "--by": pct(from.y / h),
                "--ax": pct(to.x / w),
                "--ay": pct(to.y / h),
                "--w": pct(node.w / w),
                "--h": pct(node.h / h),
                "--i": i,
              } as CSSProperties
            }
          >
            <strong>{n.label}</strong>
            <span className={styles.notes}>
              {n.before && <span className={styles.noteBefore}>{n.before}</span>}
              {n.after && <span className={styles.noteAfter}>{n.after}</span>}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/** The home hero: a tangled stack that rearranges into the system we leave behind. */
export function Untangle() {
  const [state, setState] = useState<State>("before");
  const touched = useRef(false);
  const stage = useRef<HTMLDivElement>(null);

  // play the untangle once, shortly after the diagram is on screen
  useEffect(() => {
    const el = stage.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        window.clearTimeout(timer);
        if (entry.isIntersecting && !touched.current) {
          timer = window.setTimeout(() => {
            if (!touched.current) setState("after");
          }, 1600);
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  const show = (next: State) => {
    touched.current = true;
    setState(next);
    track("untangle", next);
  };

  return (
    <div className={styles.root} data-state={state}>
      <div className={styles.intro}>
        <h1 className={`h1 ${styles.title}`}>
          We untangle hard software problems<span className={styles.stop}>.</span>
        </h1>
        <p className={styles.lede}>
          We build apps and websites, fix messy systems and make your marketing numbers add up. One senior team, based in
          Bengaluru, Pune and Gurugram.
        </p>
        <div className={styles.actions}>
          <Link href="/contact" className="btn btn--primary">
            Bring us a problem
          </Link>
          <Link href="/work" className="btn btn--ghost">
            Meet our clients
          </Link>
        </div>
      </div>

      <div className={styles.bar}>
        <p className={styles.caption} aria-live="polite">
          <strong>What untangling looks like.</strong> {CAPTION[state]}
        </p>
        <div className={styles.toggle} role="group" aria-label="Show the system">
          <button type="button" aria-pressed={state === "before"} onClick={() => show("before")}>
            Before
          </button>
          <button type="button" aria-pressed={state === "after"} onClick={() => show("after")}>
            After
          </button>
        </div>
      </div>

      <div ref={stage} className={styles.stage} aria-hidden="true">
        <Diagram layout={wide} className={styles.wide} />
        <Diagram layout={narrow} className={styles.narrow} />
      </div>

      <p className={styles.legend} aria-hidden="true">
        <span className={styles.keyIssue}>Broken</span>
        <span className={styles.keyBuilt}>Built by us</span>
        <span className={styles.keyKept}>Kept and fixed</span>
      </p>
    </div>
  );
}
