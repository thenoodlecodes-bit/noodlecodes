import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Resolve a pricing region (IN = Indian Rupees, INTL = USD) and expose it to
// server components via the `x-nc-region` request header.
//
// Priority: ?region= override → saved cookie → CDN IP-country header
// (Vercel / Cloudflare) → live IP geolocation lookup → INTL default.
//
// NOTE: on localhost the client IP is loopback (127.0.0.1 / ::1), which can't
// be geolocated, so local dev always falls back to INTL. Use ?region=IN to
// preview INR locally. On a deployed host the CDN header or the IP lookup
// resolves the real country.

type Region = "IN" | "INTL";

function clientIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") || req.ip || "";
}

// Skip the geo API for private / loopback ranges — they can't be located.
function isPublicIp(ip: string): boolean {
  if (!ip) return false;
  if (
    ip === "::1" ||
    ip.startsWith("127.") ||
    ip.startsWith("10.") ||
    ip.startsWith("192.168.") ||
    ip.startsWith("169.254.") ||
    ip.startsWith("fc") ||
    ip.startsWith("fd")
  ) {
    return false;
  }
  const m = ip.match(/^172\.(\d+)\./);
  if (m) {
    const o = Number(m[1]);
    if (o >= 16 && o <= 31) return false; // 172.16.0.0 – 172.31.255.255
  }
  return true;
}

async function lookupCountry(ip: string): Promise<string> {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 1500);
    // Free, no-key, HTTPS endpoint returning a bare 2-letter country code.
    const r = await fetch(`https://ipapi.co/${ip}/country/`, {
      signal: ctrl.signal,
      headers: { "User-Agent": "noodlecodes-geo" },
    });
    clearTimeout(timer);
    if (!r.ok) return "";
    const code = (await r.text()).trim().toUpperCase();
    return /^[A-Z]{2}$/.test(code) ? code : "";
  } catch {
    return "";
  }
}

export async function middleware(req: NextRequest) {
  const override = req.nextUrl.searchParams.get("region")?.toUpperCase();
  const cookie = req.cookies.get("nc_region")?.value;

  let region: Region = "INTL";
  let cache = false;

  if (override === "IN" || override === "INTL") {
    region = override as Region;
    cache = true;
  } else if (cookie === "IN" || cookie === "INTL") {
    region = cookie as Region;
  } else {
    let country = (
      req.geo?.country ||
      req.headers.get("x-vercel-ip-country") ||
      req.headers.get("cf-ipcountry") ||
      ""
    ).toUpperCase();

    if (!country) {
      const ip = clientIp(req);
      if (isPublicIp(ip)) country = await lookupCountry(ip);
    }

    if (country) {
      region = country === "IN" ? "IN" : "INTL";
      cache = true; // only cache a confident signal, never the bare default
    }
  }

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-nc-region", region);

  const res = NextResponse.next({ request: { headers: requestHeaders } });
  if (cache) {
    res.cookies.set("nc_region", region, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days — re-checks if the visitor relocates
      sameSite: "lax",
    });
  }
  return res;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icon.svg|sitemap.xml|robots.txt).*)",
  ],
};
