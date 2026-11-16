import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, CtaBand } from "@/components/Page/Page";
import { careers, roles } from "@/content/careers";
import { site } from "@/content/site";
import styles from "./role.module.css";

export function generateStaticParams() {
  return roles.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps<"/careers/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const r = roles.find((x) => x.slug === slug);
  if (!r) return {};
  return { title: `${r.title}, ${r.location}`, description: r.summary, alternates: { canonical: `/careers/${r.slug}` } };
}

// Placeholder posting date until roles come from a real applicant tracking system.
const POSTED = "2026-11-01";

export default async function RolePage({ params }: PageProps<"/careers/[slug]">) {
  const { slug } = await params;
  const r = roles.find((x) => x.slug === slug);
  if (!r) notFound();

  const apply = `mailto:${site.emails.careers}?subject=${encodeURIComponent(`Application: ${r.title}`)}`;
  const others = roles.filter((x) => x.slug !== r.slug).slice(0, 4);
  const remote = r.location.toLowerCase().includes("remote");

  const ld = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: r.title,
    description: [r.summary, ...r.about].join(" "),
    datePosted: POSTED,
    employmentType: r.type === "Full-time" ? "FULL_TIME" : "CONTRACTOR",
    hiringOrganization: { "@type": "Organization", name: site.name, sameAs: site.url },
    ...(remote
      ? { jobLocationType: "TELECOMMUTE", applicantLocationRequirements: { "@type": "Country", name: "India" } }
      : { jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: r.location, addressCountry: "IN" } } }),
  };

  return (
    <main id="main">
      <section className={styles.hero}>
        <div className="container">
          <Breadcrumbs
            items={[
              { href: "/careers", label: "Careers" },
              { href: `/careers/${r.slug}`, label: r.title },
            ]}
          />
          <h1 className={`h1 ${styles.title}`}>{r.title}</h1>
          <p className="lede">{r.summary}</p>
          <ul className={`chips ${styles.chips}`}>
            {[r.team, r.location, r.type, r.experience].map((x) => (
              <li key={x} className="chip">
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className={`container ${styles.layout}`}>
        <div className={styles.body}>
          <h2>About the role</h2>
          {r.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <h2>What you will do</h2>
          <ul>
            {r.responsibilities.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <h2>What you bring</h2>
          <ul>
            {r.requirements.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <h2>Nice to have</h2>
          <ul>
            {r.nice.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>

        <aside className={styles.side}>
          <div className={styles.card}>
            <p className={styles.cardTitle}>Interested?</p>
            <p>Send your CV or LinkedIn and a few lines on work you are proud of. A person reads every application.</p>
            <a href={apply} className="btn btn--primary">
              Apply for this role
            </a>
            <p className="meta">{site.emails.careers}</p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardTitle}>How we hire</p>
            <ol className={styles.process}>
              {careers.process.map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ol>
          </div>
        </aside>
      </div>

      <section className="section mist" data-section="other-roles">
        <div className="container">
          <div className="head">
            <h2 className="h2">Other open roles.</h2>
            <Link href="/careers#roles" className="go">
              All roles
            </Link>
          </div>
          <ul className={styles.others}>
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/careers/${o.slug}`}>
                  <strong>{o.title}</strong>
                  <span className="meta">
                    {o.team} · {o.location}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Questions before you apply?"
        text="Write to us. The hiring manager for this role will answer."
        action={{ href: apply, label: "Apply for this role" }}
        mail={site.emails.careers}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </main>
  );
}
