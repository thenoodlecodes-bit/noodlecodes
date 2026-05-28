import type { Metadata } from "next";
import Link from "next/link";
import WorkGrid from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "24 case studies from the last 18 months. Real timelines, real numbers, real clients across websites, apps, AI agents and admin panels.",
  alternates: { canonical: "/work" },
};

export default function Work() {
  return (
    <main id="main">
      <header className="page-head">
        <div className="wrap">
          <div className="crumb rise-1">
            <Link href="/">Home</Link>
            <span className="sep">/</span>Work
          </div>
          <span className="eyebrow rise-2">Selected projects</span>
          <h1 className="rise-3">
            Stuff we <em>shipped.</em>
          </h1>
          <p className="lede rise-4">
            24 case studies from the last 18 months. Real timelines, real
            numbers, real clients. NDAs hide some — but most are right here,
            ready to scroll.
          </p>
        </div>
      </header>

      <section style={{ paddingTop: "40px" }}>
        <div className="wrap">
          <WorkGrid />
        </div>
      </section>
    </main>
  );
}
