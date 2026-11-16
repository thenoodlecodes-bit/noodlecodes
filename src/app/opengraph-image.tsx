import { ImageResponse } from "next/og";

export const alt = "Noodle Codes. We untangle hard software problems.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#111318",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>
          <svg width="56" height="56" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="8" fill="#D7332A" />
            <path d="M8.5 23.5V14a4.25 4.25 0 0 1 8.5 0v4.5a3.25 3.25 0 0 0 6.5 0V8.5" fill="none" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          noodle codes
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 96, fontWeight: 800, lineHeight: 0.98, letterSpacing: -3 }}>
          <span>We untangle hard</span>
          <span style={{ display: "flex" }}>
            software problems<span style={{ color: "#D7332A" }}>.</span>
          </span>
        </div>
        <div style={{ display: "flex", gap: 12, fontSize: 24, fontWeight: 600 }}>
          {["Product development", "Tech consultancy", "Digital marketing", "Ads tracking"].map((t) => (
            <div key={t} style={{ display: "flex", padding: "12px 20px", borderRadius: 10, border: "2px solid rgba(255,255,255,0.3)" }}>
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
