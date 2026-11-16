import type { MetadataRoute } from "next";
import { roles } from "@/content/careers";
import { cases } from "@/content/cases";
import { industries } from "@/content/industries";
import { insights } from "@/content/insights";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { solutions } from "@/content/solutions";
import { stackReport } from "@/content/stack";

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority = 0.6, lastModified?: string): MetadataRoute.Sitemap[number] => ({
    url: `${site.url}${path}`,
    priority,
    ...(lastModified && { lastModified }),
  });

  return [
    page("", 1),
    ...["/services", "/industries", "/work", "/insights", "/about", "/careers", "/contact"].map((p) => page(p, 0.8)),
    page("/insights/stack-report", 0.8, stackReport.date),
    ...services.map((s) => page(`/services/${s.slug}`, 0.8)),
    ...solutions.map((s) => page(`/solutions/${s.slug}`)),
    ...industries.map((i) => page(`/industries/${i.slug}`)),
    ...cases.map((c) => page(`/work/${c.slug}`)),
    ...insights.map((i) => page(`/insights/${i.slug}`, 0.6, i.date)),
    ...roles.map((r) => page(`/careers/${r.slug}`, 0.5)),
    page("/privacy", 0.2),
  ];
}
