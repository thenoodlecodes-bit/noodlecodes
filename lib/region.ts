import { headers } from "next/headers";
import type { Region } from "@/lib/pricing";

// Resolve the visitor's pricing region from the header set by middleware.ts.
// Defaults to INTL (USD) whenever the country is unknown or not India.
export function getRegion(): Region {
  const region = headers().get("x-nc-region");
  return region === "IN" ? "IN" : "INTL";
}
