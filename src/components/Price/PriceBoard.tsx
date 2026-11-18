"use client";

import Link from "next/link";
import { useState } from "react";
import { amount, type Currency, type PriceGroup, type PriceItem } from "@/content/pricing";
import { money, whatsappLink } from "@/lib/money";
import { track } from "@/lib/track";
import styles from "./price.module.css";

/** The price list doubles as an estimate: tick what you need and the total updates, ready to send. */
export function PriceBoard({ groups, currency, whatsapp, pending = false }: { groups: PriceGroup[]; currency: Currency; whatsapp: string; pending?: boolean }) {
  const [picked, setPicked] = useState<string[]>([]);
  const items = groups.flatMap((g) => g.items);
  const chosen = items.filter((i) => picked.includes(i.id));
  const total = chosen.reduce((sum, i) => sum + amount(i, currency), 0);
  const price = (i: PriceItem) => `${money(amount(i, currency), currency)}${i.per ? ` ${i.per}` : ""}`;

  const toggle = (id: string) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const lines = chosen.map((i) => `${i.name}: from ${price(i)}`);
  const brief = chosen.length ? `I would like a quote for:\n${lines.join("\n")}\nEstimate from ${money(total, currency)}.` : "";
  const services = [...new Set(chosen.map((i) => i.service))];
  const contact = `/contact?${new URLSearchParams([...services.map((s) => ["service", s]), ["source", "Pricing estimate"], ...(brief ? [["brief", brief]] : [])]).toString()}`;
  const chat = whatsappLink(whatsapp, brief ? `Hi Noodle Codes. ${brief}` : "Hi Noodle Codes, I would like to talk about a project.");

  return (
    <div className={`${styles.board} ${pending ? styles.pending : ""}`} aria-busy={pending || undefined}>
      <div className={styles.groups}>
        {groups.map((g) => (
          <section key={g.title} className={styles.group} aria-labelledby={`group-${g.title}`}>
            <h2 id={`group-${g.title}`} className={styles.groupTitle}>
              {g.title}
            </h2>
            <ul className={styles.items}>
              {g.items.map((i) => (
                <li key={i.id}>
                  <label className={styles.item}>
                    <input type="checkbox" checked={picked.includes(i.id)} onChange={() => toggle(i.id)} disabled={pending} />
                    <span className={styles.box} aria-hidden="true" />
                    <span className={styles.itemText}>
                      <strong>{i.name}</strong>
                      <span>{i.note}</span>
                    </span>
                    <span className={styles.itemPrice}>
                      <small>From</small>
                      <b>{money(amount(i, currency), currency)}</b>
                      {i.per && <small>{i.per}</small>}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <section className={`${styles.group} ${styles.quoted}`}>
          <h2 className={styles.groupTitle}>Digital marketing</h2>
          <p>Monthly plans for ads, SEO, content and CRM, priced after a free call once we know your goals and budget.</p>
          <Link href="/contact?service=digital-marketing" className="go">
            Ask for a plan
          </Link>
        </section>
      </div>

      <aside className={styles.summary} aria-live="polite">
        <h2 className={styles.summaryTitle}>Your estimate</h2>
        {chosen.length ? (
          <ul className={styles.picked}>
            {chosen.map((i) => (
              <li key={i.id}>
                <span>{i.name}</span>
                <span>{price(i)}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>Tick what you need to see a starting estimate.</p>
        )}
        <p className={styles.total}>
          <span>Starts from</span>
          <strong>{money(total, currency)}</strong>
        </p>
        <p className={styles.fine}>Starting prices. You get a fixed quote after a free call.</p>
        <div className={styles.actions}>
          <Link href={contact} className="btn btn--primary" onClick={() => track("estimate", lines.join(", ") || "empty")}>
            Get a fixed quote
          </Link>
          <a href={chat} className="btn btn--ghost" target="_blank" rel="noreferrer" onClick={() => track("whatsapp", "pricing")}>
            Send on WhatsApp
          </a>
        </div>
      </aside>
    </div>
  );
}
