import type { ReactNode } from "react";

// Small drawings in the same style as the home diagram: ink outlines, one red part.
export type PictogramName =
  | "development"
  | "consultancy"
  | "digital-marketing"
  | "ads-tracking"
  | "plug-and-play"
  | "understand"
  | "plan"
  | "build"
  | "grow";

const RED = "var(--brand)";
const PAPER = "var(--paper)";

const drawings: Record<PictogramName, ReactNode> = {
  development: (
    <>
      <rect x="3" y="7" width="30" height="24" rx="3" />
      <path d="M3 13h30" />
      <rect x="27" y="15" width="17" height="29" rx="3" fill={PAPER} />
      <rect x="32.5" y="38" width="6" height="2.5" rx="1" fill={RED} stroke="none" />
    </>
  ),
  consultancy: (
    <>
      <rect x="7" y="3" width="26" height="36" rx="3" />
      <path d="M13 12h14M13 18h14M13 24h8" />
      <rect x="26" y="27" width="18" height="18" rx="4" fill={RED} stroke="none" />
      <path d="M30.5 36l3.5 3.5 6-6.5" stroke={PAPER} />
    </>
  ),
  "digital-marketing": (
    <>
      <path d="M4 44h40" />
      <rect x="7" y="30" width="8" height="14" rx="1.5" />
      <rect x="20" y="21" width="8" height="23" rx="1.5" />
      <rect x="33" y="10" width="8" height="34" rx="1.5" fill={RED} stroke={RED} />
      <path d="M8 22l10-9 7 5 9-10M29 7h6v6" />
    </>
  ),
  "ads-tracking": (
    <>
      <rect x="3" y="6" width="15" height="11" rx="2" />
      <rect x="3" y="31" width="15" height="11" rx="2" />
      <path d="M18 11.5h5a4 4 0 0 1 4 4V20M18 36.5h5a4 4 0 0 0 4-4V28M27 24h3" />
      <rect x="30" y="16" width="15" height="16" rx="3.5" fill={RED} stroke="none" />
      <path d="M34 24.5l2.5 2.5 4.5-5" stroke={PAPER} />
    </>
  ),
  "plug-and-play": (
    <>
      <rect x="3" y="4" width="17" height="17" rx="3" />
      <rect x="3" y="27" width="17" height="17" rx="3" />
      <rect x="26" y="27" width="17" height="17" rx="3" />
      <rect x="28" y="2" width="17" height="17" rx="3" fill={RED} stroke="none" />
      <path d="M34.5 22.5v2.5" strokeDasharray="2 2" />
    </>
  ),
  understand: (
    <>
      <path d="M6 7h36a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H20l-8 7v-7H6a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3z" />
      <path d="M11 16h26M11 23h14" />
      <rect x="29" y="21" width="8" height="4" rx="1" fill={RED} stroke="none" />
    </>
  ),
  plan: (
    <>
      <rect x="3" y="5" width="15" height="11" rx="2" />
      <rect x="30" y="5" width="15" height="11" rx="2" />
      <rect x="16.5" y="32" width="15" height="11" rx="2" fill={RED} stroke={RED} />
      <path d="M18 10.5h12M10.5 16v8H24v8M37.5 16v8H24" />
    </>
  ),
  build: (
    <>
      <rect x="3" y="6" width="42" height="36" rx="3" />
      <path d="M3 13h42" />
      <path d="M17 22l-6 5.5 6 5.5M31 22l6 5.5-6 5.5" />
      <path d="M26.5 19.5l-5 16" stroke={RED} />
    </>
  ),
  grow: (
    <>
      <path d="M4 44h40M4 44V4" />
      <path d="M9 36l9-9 7 6 14-15" stroke={RED} strokeWidth="2.6" />
      <path d="M32 18h7v7" stroke={RED} strokeWidth="2.6" />
    </>
  ),
};

export function Pictogram({ name, size = 48, className }: { name: PictogramName; size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {drawings[name]}
    </svg>
  );
}
