"use client";

import { useState, type ReactNode } from "react";
import { flushSync } from "react-dom";
import { track } from "@/lib/track";
import styles from "./FilterBoard.module.css";

export type FilterGroup = { id: string; label: string; options: { value: string; label: string }[] };

/**
 * Filters server-rendered cards on the client. `cards[i]` belongs to `items[i]`.
 * Each group narrows the list; "All" clears that group.
 */
export function FilterBoard({
  groups,
  items,
  cards,
  gridClassName,
  noun,
}: {
  groups: FilterGroup[];
  items: Record<string, string[]>[];
  cards: ReactNode[];
  gridClassName: string;
  noun: [string, string];
}) {
  const [picked, setPicked] = useState<Record<string, string>>({});

  const pick = (group: string, value: string) => {
    const apply = () => setPicked((p) => ({ ...p, [group]: value }));
    track("filter", `${group}: ${value}`);
    if (document.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.startViewTransition(() => flushSync(apply));
    } else apply();
  };

  const visible = items.map((tags, i) => ({ tags, i })).filter(({ tags }) => groups.every((g) => !picked[g.id] || tags[g.id]?.includes(picked[g.id])));

  return (
    <>
      <div className={styles.bar}>
        {groups.map((g) => (
          <div key={g.id} className={styles.group} role="group" aria-label={g.label}>
            <span className={styles.label}>{g.label}</span>
            <div className="filters">
              <button type="button" aria-pressed={!picked[g.id]} onClick={() => pick(g.id, "")}>
                All
              </button>
              {g.options.map((o) => (
                <button key={o.value} type="button" aria-pressed={picked[g.id] === o.value} onClick={() => pick(g.id, o.value)}>
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        ))}
        <p className={styles.count} aria-live="polite">
          {visible.length} {visible.length === 1 ? noun[0] : noun[1]}
        </p>
      </div>
      {visible.length ? (
        <div className={gridClassName}>
          {visible.map(({ i }) => (
            <div key={i} style={{ viewTransitionName: `card-${i}` }}>
              {cards[i]}
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.empty}>
          Nothing matches both filters yet.{" "}
          <button type="button" onClick={() => setPicked({})}>
            Clear filters
          </button>
        </p>
      )}
    </>
  );
}
