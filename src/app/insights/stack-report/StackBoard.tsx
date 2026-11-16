"use client";

import { useState } from "react";
import type { StackArea, StackEntry, Verdict } from "@/content/types";
import { track } from "@/lib/track";
import styles from "./stack.module.css";

const AREAS: StackArea[] = ["Engineering", "Data and AI", "Growth", "Platforms"];
const ORDER: Verdict[] = ["default", "pilot", "watch", "avoid"];
const CHANGE = { new: "New", up: "Moved up", down: "Moved down" } as const;

export function StackBoard({
  entries,
  verdicts,
}: {
  entries: StackEntry[];
  verdicts: Record<Verdict, { label: string; text: string }>;
}) {
  const [area, setArea] = useState<StackArea | "">("");
  const list = area ? entries.filter((e) => e.area === area) : entries;

  return (
    <>
      <div className={styles.bar}>
        <div className="filters" role="group" aria-label="Area">
          <button type="button" aria-pressed={!area} onClick={() => setArea("")}>
            Everything
          </button>
          {AREAS.map((a) => (
            <button
              key={a}
              type="button"
              aria-pressed={area === a}
              onClick={() => {
                setArea(a);
                track("filter", `stack: ${a}`);
              }}
            >
              {a}
            </button>
          ))}
        </div>
        <p className="meta">Open an entry to read why.</p>
      </div>

      <div className={styles.board}>
        {ORDER.map((v) => {
          const items = list.filter((e) => e.verdict === v);
          return (
            <section key={v} className={styles.col} data-verdict={v} aria-labelledby={`col-${v}`}>
              <h2 id={`col-${v}`} className={styles.colHead}>
                {verdicts[v].label}
                <span>{items.length}</span>
              </h2>
              <ul>
                {items.map((e) => (
                  <li key={e.name}>
                    <details className={styles.entry}>
                      <summary>
                        <span>{e.name}</span>
                        {e.change && <em data-change={e.change}>{CHANGE[e.change]}</em>}
                      </summary>
                      <p>{e.note}</p>
                      <span className="meta">{e.area}</span>
                    </details>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </>
  );
}
