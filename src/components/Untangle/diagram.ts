// The home hero diagram: a typical growing company's stack, before and after an engagement.
// Coordinates are node centres in each layout's viewBox. A node without a position in a state is hidden in it.

export type Pt = { x: number; y: number };

export type DNode = {
  id: string;
  label: string;
  /** Note shown before the engagement. */
  before?: string;
  /** Note shown after it. */
  after?: string;
  /** Flagged as a problem in the before state. */
  issue?: boolean;
  /** Something we built, shown filled in the after state. */
  built?: boolean;
};

export type Layout = {
  w: number;
  h: number;
  node: { w: number; h: number };
  before: Record<string, Pt>;
  after: Record<string, Pt>;
  groups: { label: string; at: Pt }[];
  /** Elbow direction for after wires: across columns, or down through rows. */
  flow: "across" | "down";
};

export const nodes: DNode[] = [
  { id: "shopify", label: "Online store", before: "Shopify", after: "Loads in 1.2 seconds" },
  { id: "app", label: "Mobile app", before: "Updates once a month", after: "Updates every week", issue: true },
  { id: "pixel", label: "Ad tracking", before: "Misses 30% of sales", after: "Counts every sale", issue: true },
  { id: "aws", label: "Servers", before: "14 servers, mostly idle", after: "41% cheaper", issue: true },
  { id: "admin", label: "Admin panel", before: "Built in 2016", issue: true },
  { id: "sheet", label: "Orders spreadsheet", before: "Edited by 3 people", issue: true },
  { id: "ga4", label: "Analytics", before: "3 revenue numbers", after: "1 revenue number", issue: true },
  { id: "razorpay", label: "Payments", before: "Razorpay", after: "Matched to orders" },
  { id: "whatsapp", label: "WhatsApp", before: "4 groups, 1 phone", issue: true },
  { id: "crm", label: "Customer list", before: "Not connected", after: "Always up to date", issue: true },
  { id: "mailchimp", label: "Email tool", before: "3 separate lists" },
  { id: "shipping", label: "Delivery", before: "Delhivery", after: "Live order status" },
  { id: "wave", label: "WhatsApp", after: "Official API", built: true },
  { id: "api", label: "Order system", after: "One API for every order", built: true },
  { id: "db", label: "Database", after: "Postgres, one source", built: true },
  { id: "sgtm", label: "Server tracking", after: "Every sale counted", built: true },
  { id: "mail", label: "Auto emails", after: "Sent by behaviour", built: true },
  { id: "dash", label: "One dashboard", after: "Same numbers for all", built: true },
  { id: "alerts", label: "Alerts", after: "When a number drifts", built: true },
];

/** Who talked to whom before: everything through the spreadsheet and the phone. */
export const tangle: [string, string, "broken"?][] = [
  ["sheet", "shopify"],
  ["sheet", "whatsapp"],
  ["sheet", "admin"],
  ["sheet", "razorpay"],
  ["sheet", "crm", "broken"],
  ["sheet", "ga4"],
  ["sheet", "mailchimp"],
  ["sheet", "shipping"],
  ["whatsapp", "admin"],
  ["whatsapp", "shipping"],
  ["pixel", "shopify", "broken"],
  ["ga4", "pixel"],
  ["ga4", "shopify"],
  ["app", "admin"],
  ["app", "aws"],
  ["aws", "admin"],
  ["mailchimp", "crm", "broken"],
  ["crm", "whatsapp"],
  ["razorpay", "admin"],
  ["app", "pixel"],
];

/** How data flows after: channels into one API, one database, tracking from the server. */
export const flow: [string, string][] = [
  ["shopify", "api"],
  ["app", "api"],
  ["wave", "api"],
  ["api", "db"],
  ["db", "razorpay"],
  ["razorpay", "shipping"],
  ["shipping", "aws"],
  ["api", "sgtm"],
  ["sgtm", "pixel"],
  ["pixel", "ga4"],
  ["db", "crm"],
  ["crm", "mail"],
  ["ga4", "dash"],
  ["mail", "alerts"],
];

export const wide: Layout = {
  w: 1200,
  h: 570,
  node: { w: 184, h: 60 },
  flow: "across",
  before: {
    shopify: { x: 150, y: 96 },
    app: { x: 440, y: 78 },
    pixel: { x: 770, y: 104 },
    aws: { x: 1060, y: 140 },
    admin: { x: 190, y: 292 },
    sheet: { x: 560, y: 300 },
    ga4: { x: 950, y: 318 },
    razorpay: { x: 330, y: 470 },
    whatsapp: { x: 660, y: 488 },
    crm: { x: 880, y: 484 },
    mailchimp: { x: 1090, y: 470 },
    shipping: { x: 110, y: 500 },
  },
  after: {
    shopify: { x: 140, y: 190 },
    app: { x: 140, y: 300 },
    wave: { x: 140, y: 410 },
    api: { x: 450, y: 130 },
    db: { x: 450, y: 230 },
    razorpay: { x: 450, y: 330 },
    shipping: { x: 450, y: 430 },
    aws: { x: 450, y: 530 },
    sgtm: { x: 760, y: 130 },
    pixel: { x: 760, y: 230 },
    ga4: { x: 760, y: 330 },
    crm: { x: 760, y: 430 },
    mail: { x: 760, y: 530 },
    dash: { x: 1060, y: 250 },
    alerts: { x: 1060, y: 410 },
  },
  groups: [
    { label: "Sales channels", at: { x: 140, y: 52 } },
    { label: "Operations", at: { x: 450, y: 52 } },
    { label: "Marketing", at: { x: 760, y: 52 } },
    { label: "Reporting", at: { x: 1060, y: 52 } },
  ],
};

export const narrow: Layout = {
  w: 600,
  h: 1300,
  node: { w: 276, h: 84 },
  flow: "down",
  before: {
    shopify: { x: 160, y: 91 },
    app: { x: 440, y: 156 },
    pixel: { x: 150, y: 286 },
    aws: { x: 445, y: 351 },
    admin: { x: 170, y: 494 },
    sheet: { x: 330, y: 650 },
    ga4: { x: 445, y: 507 },
    razorpay: { x: 150, y: 819 },
    whatsapp: { x: 440, y: 806 },
    crm: { x: 165, y: 1001 },
    mailchimp: { x: 440, y: 1027 },
    shipping: { x: 300, y: 1183 },
  },
  after: {
    shopify: { x: 150, y: 96 },
    app: { x: 450, y: 96 },
    wave: { x: 150, y: 224 },
    api: { x: 150, y: 380 },
    db: { x: 450, y: 380 },
    razorpay: { x: 150, y: 508 },
    shipping: { x: 450, y: 508 },
    aws: { x: 150, y: 636 },
    sgtm: { x: 150, y: 792 },
    pixel: { x: 450, y: 792 },
    ga4: { x: 150, y: 920 },
    crm: { x: 450, y: 920 },
    mail: { x: 150, y: 1048 },
    dash: { x: 150, y: 1226 },
    alerts: { x: 450, y: 1226 },
  },
  groups: [
    { label: "Sales channels", at: { x: 12, y: 30 } },
    { label: "Operations", at: { x: 12, y: 314 } },
    { label: "Marketing", at: { x: 12, y: 726 } },
    { label: "Reporting", at: { x: 12, y: 1160 } },
  ],
};

// deterministic jitter so the tangle looks hand drawn but renders the same on server and client
function jitter(seed: string) {
  let h = 2166136261;
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return ((h >>> 0) % 1000) / 1000;
}

const r = (n: number) => Math.round(n * 10) / 10;

/** A looping curve between two nodes. */
export function tanglePath(a: Pt, b: Pt, seed: string, reach: number) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const px = -dy / len;
  const py = dx / len;
  const k1 = (jitter(seed) - 0.5) * 2 * reach;
  const k2 = (jitter(seed + "b") - 0.5) * 2 * reach;
  const c1 = { x: a.x + dx * 0.15 + px * k1, y: a.y + dy * 0.15 + py * k1 };
  const c2 = { x: b.x - dx * 0.15 - px * k2, y: b.y - dy * 0.15 - py * k2 };
  return `M${r(a.x)} ${r(a.y)}C${r(c1.x)} ${r(c1.y)} ${r(c2.x)} ${r(c2.y)} ${r(b.x)} ${r(b.y)}`;
}

/** A tidy right-angled connector between two node edges, with rounded corners. */
export function elbowPath(a: Pt, b: Pt, size: { w: number; h: number }, dir: "across" | "down") {
  const rad = 10;
  const sameColumn = Math.abs(a.x - b.x) < 2;
  const sameRow = Math.abs(a.y - b.y) < 2;
  if (dir === "down" || sameColumn) {
    if (sameRow) {
      const x1 = a.x + size.w / 2;
      const x2 = b.x - size.w / 2;
      return `M${r(x1)} ${r(a.y)}H${r(x2)}`;
    }
    const y1 = a.y + size.h / 2;
    const y2 = b.y - size.h / 2;
    if (sameColumn) return `M${r(a.x)} ${r(y1)}V${r(y2)}`;
    const my = (y1 + y2) / 2;
    const sx = Math.sign(b.x - a.x);
    return `M${r(a.x)} ${r(y1)}V${r(my - rad)}Q${r(a.x)} ${r(my)} ${r(a.x + sx * rad)} ${r(my)}H${r(b.x - sx * rad)}Q${r(b.x)} ${r(my)} ${r(b.x)} ${r(my + rad)}V${r(y2)}`;
  }
  const x1 = a.x + size.w / 2;
  const x2 = b.x - size.w / 2;
  if (sameRow) return `M${r(x1)} ${r(a.y)}H${r(x2)}`;
  const mx = (x1 + x2) / 2;
  const sy = Math.sign(b.y - a.y);
  return `M${r(x1)} ${r(a.y)}H${r(mx - rad)}Q${r(mx)} ${r(a.y)} ${r(mx)} ${r(a.y + sy * rad)}V${r(b.y - sy * rad)}Q${r(mx)} ${r(b.y)} ${r(mx + rad)} ${r(b.y)}H${r(x2)}`;
}
