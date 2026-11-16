import { cases } from "@/content/cases";
import { insights } from "@/content/insights";
import type { IndustrySlug, ServiceSlug, SolutionSlug } from "@/content/types";

const dateFormat = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

export function formatDate(iso: string) {
  return dateFormat.format(new Date(iso));
}

export function casesBy(f: { service?: ServiceSlug; industry?: IndustrySlug; solution?: SolutionSlug }) {
  return cases.filter(
    (c) =>
      (!f.service || c.services.includes(f.service)) &&
      (!f.industry || c.industry === f.industry) &&
      (!f.solution || c.solutions?.includes(f.solution)),
  );
}

export function insightsBy(f: { service?: ServiceSlug; industry?: IndustrySlug }) {
  return insights.filter(
    (i) => (!f.service || i.services.includes(f.service)) && (!f.industry || i.industries?.includes(f.industry)),
  );
}

/** Fill a short list up to `n` with other items, so related rails never look empty. */
export function topUp<T>(list: T[], pool: T[], n: number) {
  const out = list.slice(0, n);
  for (const item of pool) {
    if (out.length >= n) break;
    if (!out.includes(item)) out.push(item);
  }
  return out;
}
