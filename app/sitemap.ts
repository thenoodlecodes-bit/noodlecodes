import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://noodlecodes.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/work", "/process", "/pricing", "/about", "/contact"];
  const now = new Date();
  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/work" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
