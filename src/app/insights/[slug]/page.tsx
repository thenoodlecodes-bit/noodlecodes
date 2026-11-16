import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Brief } from "@/components/Brief/Brief";
import { Journal } from "@/components/Journal/Journal";
import { Breadcrumbs, Head } from "@/components/Page/Page";
import { Prose, slugify } from "@/components/Prose/Prose";
import { insights } from "@/content/insights";
import { initials, person } from "@/content/people";
import { service } from "@/content/services";
import { site } from "@/content/site";
import { formatDate, topUp } from "@/lib/content";
import { CopyLink } from "./CopyLink";
import styles from "./article.module.css";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const i = insights.find((x) => x.slug === slug);
  if (!i) return {};
  return {
    title: i.title,
    description: i.dek,
    alternates: { canonical: `/insights/${i.slug}` },
    openGraph: { type: "article", title: i.title, description: i.dek, publishedTime: i.date, authors: [person(i.author).name] },
  };
}

export default async function ArticlePage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const article = insights.find((x) => x.slug === slug);
  if (!article) notFound();

  const author = person(article.author);
  const headings = article.body.filter((b) => b.type === "h2").map((b) => b.text);
  const related = topUp(
    insights.filter((x) => x !== article && (x.category === article.category || x.services.some((s) => article.services.includes(s)))),
    insights.filter((x) => x !== article),
    3,
  );
  const url = `${site.url}/insights/${article.slug}`;

  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.dek,
    datePublished: article.date,
    author: { "@type": "Person", name: author.name, jobTitle: author.role },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: url,
  };

  return (
    <main id="main">
      <article>
        <header className={styles.header}>
          <div className="container">
            <Breadcrumbs
              items={[
                { href: "/insights", label: "Insights" },
                { href: `/insights/${article.slug}`, label: article.category },
              ]}
            />
            <h1 className={styles.title}>{article.title}</h1>
            <p className="lede">{article.dek}</p>
            <div className={styles.byline}>
              <span className={styles.avatar} aria-hidden="true">
                {initials(author.name)}
              </span>
              <span>
                <strong>{author.name}</strong>
                <span className="meta">
                  {author.role} · {formatDate(article.date)} · {article.minutes} min read
                </span>
              </span>
            </div>
          </div>
        </header>

        <div className={`container ${styles.layout}`}>
          <aside className={styles.side}>
            <nav aria-label="In this article" className={styles.toc}>
              <p className="meta">In this article</p>
              <ol>
                {headings.map((h) => (
                  <li key={h}>
                    <a href={`#${slugify(h)}`}>{h}</a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className={styles.share}>
              <p className="meta">Share</p>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={`https://x.com/intent/post?url=${encodeURIComponent(url)}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noreferrer">
                X
              </a>
              <CopyLink url={url} />
            </div>
          </aside>

          <div>
            <Prose blocks={article.body} />

            <footer className={styles.footer}>
              <ul className="chips">
                {article.services.map((s) => (
                  <li key={s}>
                    <Link href={`/services/${s}`} className="chip">
                      {service(s).name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={styles.author}>
                <span className={styles.avatar} aria-hidden="true">
                  {initials(author.name)}
                </span>
                <div>
                  <strong>{author.name}</strong>
                  <span className="meta">{author.role}</span>
                  <p>{author.bio}</p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </article>

      <section className="section mist" data-section="related">
        <div className="container">
          <Head title="Keep reading.">
            <Link href="/insights" className="go">
              All insights
            </Link>
          </Head>
          <Journal items={related} />
        </div>
      </section>

      <Brief title="Dealing with this right now?" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </main>
  );
}
