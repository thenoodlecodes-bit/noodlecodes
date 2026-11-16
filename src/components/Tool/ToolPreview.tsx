import type { CSSProperties, ReactElement } from "react";
import type { SolutionSlug } from "@/content/types";
import styles from "./preview.module.css";

type Tone = "ok" | "wait" | "off";

function Relay() {
  const routes: [string, string, Tone][] = [
    ["In-app inbox", "Delivered", "ok"],
    ["Push", "Opened", "ok"],
    ["WhatsApp", "Read", "ok"],
    ["Email", "Off for this user", "off"],
    ["SMS", "Held for quiet hours", "wait"],
  ];
  return (
    <div className={styles.card}>
      <div className={styles.event}>
        <code>order.shipped</code>
        <strong>Order #4821 is on its way</strong>
        <span>To Priya S., sent once</span>
      </div>
      <ul className={styles.routes}>
        {routes.map(([channel, status, tone]) => (
          <li key={channel}>
            <span>{channel}</span>
            <span className={styles.pill} data-tone={tone}>
              {status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Mailroom() {
  const numbers = [
    ["48,210", "sent"],
    ["41.2%", "opened"],
    ["6.8%", "clicked"],
    ["1,284", "orders"],
  ];
  return (
    <div className={styles.card}>
      <div className={styles.row}>
        <span className={styles.muted}>Campaign</span>
        <span className={styles.pill} data-tone="ok">
          Sent
        </span>
      </div>
      <strong className={styles.big}>Diwali early access</strong>
      <div className={styles.mail}>
        <span>
          <b>From</b> Maison Verde
        </span>
        <span>
          <b>Subject</b> Your early access starts tonight
        </span>
      </div>
      <dl className={styles.numbers}>
        {numbers.map(([value, label]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <p className={styles.note}>₹0.09 per email. No fee per contact.</p>
    </div>
  );
}

function Wave() {
  return (
    <div className={`${styles.card} ${styles.chat}`}>
      <div className={styles.chatHead}>
        <span className={styles.avatar}>MV</span>
        <span>
          <strong>Maison Verde</strong>
          <span className={styles.muted}>Business account</span>
        </span>
      </div>
      <div className={styles.thread}>
        <p className={styles.in}>Your order #4821 is out for delivery and arrives by 6:30pm.</p>
        <div className={styles.replies}>
          <span>Track order</span>
          <span>Change time</span>
        </div>
        <p className={styles.out}>Change time</p>
        <p className={styles.in}>Pick a new slot: tomorrow 10am to 1pm, or 4pm to 7pm.</p>
      </div>
    </div>
  );
}

function Pulse() {
  const notes = [
    ["E", "Ember & Oak", "now", "Table for two tonight? 20% off before 8pm."],
    ["H", "Halcyon Health", "2m ago", "Dr. Rao at 10:30 tomorrow. Tap to reschedule."],
  ];
  return (
    <div className={styles.phone}>
      <span className={styles.clock}>7:41</span>
      <span className={styles.date}>Friday, 14 November</span>
      {notes.map(([icon, app, when, text]) => (
        <div key={app} className={styles.notif}>
          <span className={styles.appIcon}>{icon}</span>
          <span className={styles.notifBody}>
            <span className={styles.row}>
              <strong>{app}</strong>
              <span>{when}</span>
            </span>
            <span>{text}</span>
          </span>
        </div>
      ))}
      <span className={styles.phoneNote}>Sent at each person&apos;s best time</span>
    </div>
  );
}

function Trail() {
  const steps: [string, number][] = [
    ["Visited", 100],
    ["Product page", 62],
    ["Added to cart", 24],
    ["Checkout", 11],
    ["Paid", 7],
  ];
  return (
    <div className={styles.card}>
      <div className={styles.row}>
        <strong>Checkout funnel</strong>
        <span className={styles.muted}>Last 7 days</span>
      </div>
      <ul className={styles.funnel}>
        {steps.map(([label, pct]) => (
          <li key={label} data-flag={label === "Checkout" || undefined}>
            <span>{label}</span>
            <span className={styles.bar}>
              <span style={{ "--w": `${pct}%` } as CSSProperties} />
            </span>
            <span>{pct}%</span>
          </li>
        ))}
      </ul>
      <p className={styles.flag}>
        <span className={styles.pill} data-tone="bad">
          Found
        </span>
        38% rage-click the coupon field at checkout
      </p>
    </div>
  );
}

const views: Record<SolutionSlug, { View: () => ReactElement; label: string }> = {
  relay: {
    View: Relay,
    label: "Relay sends one order update and picks the channel for each person: delivered in-app, opened on push, read on WhatsApp, email off, SMS held for quiet hours.",
  },
  mailroom: { View: Mailroom, label: "A Mailroom campaign report: 48,210 sent, 41.2% opened, 6.8% clicked, 1,284 orders, at ₹0.09 per email." },
  wave: { View: Wave, label: "A Wave chat on WhatsApp: a delivery update with quick reply buttons, and the customer picking a new delivery slot." },
  pulse: { View: Pulse, label: "Two Pulse push notifications on a phone lock screen, each sent at the person's best time." },
  trail: { View: Trail, label: "A Trail checkout funnel from visit to payment, flagging that 38% of shoppers rage-click the coupon field." },
};

/** A small working picture of each module, drawn in HTML so it stays sharp. `small` is the thumbnail used in cards. */
export function ToolPreview({ slug, small = false }: { slug: SolutionSlug; small?: boolean }) {
  const { View, label } = views[slug];
  return (
    <div className={`${styles.stage} ${small ? styles.small : ""}`} {...(small ? { "aria-hidden": true } : { role: "img", "aria-label": label })}>
      <View />
    </div>
  );
}
