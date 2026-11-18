import Link from "next/link";
import { Logo } from "@/components/Logo/Logo";
import { industries } from "@/content/industries";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { solutions } from "@/content/solutions";
import { whatsappLink } from "@/lib/money";
import { Newsletter } from "./Newsletter";
import { Year } from "./Year";
import styles from "./Footer.module.css";

const company = [
  { href: "/about", label: "About us" },
  { href: "/work", label: "Clients" },
  { href: "/pricing", label: "Pricing" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const thinking = [
  { href: "/insights", label: "Articles" },
  { href: "/insights/stack-report", label: "The Stack Report" },
];

export function Footer() {
  return (
    <footer className={`dark ${styles.footer}`}>
      <div className="container">
        <div className={styles.top}>
          <Newsletter />
        </div>

        <nav className={styles.cols} aria-label="Footer">
          <div>
            <p className={styles.colTitle}>What we do</p>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={styles.colTitle}>Modules</p>
            <ul>
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link href={`/solutions/${s.slug}`}>
                    {s.name} <span>{s.kind}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={styles.colTitle}>Industries</p>
            <ul>
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link href={`/industries/${i.slug}`}>{i.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={styles.colTitle}>Insights</p>
            <ul>
              {thinking.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
            <p className={`${styles.colTitle} ${styles.gap}`}>Company</p>
            <ul>
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className={styles.contact}>
          <strong>Talk to us</strong>
          <a href={whatsappLink(site.whatsapp)} target="_blank" rel="noreferrer">
            WhatsApp {site.phone}
          </a>
          <a href={`mailto:${site.emails.hello}`}>{site.emails.hello}</a>
          <Link href="/pricing">See pricing</Link>
        </div>

        <div className={styles.bottom}>
          <Link href="/" aria-label="Noodle Codes home">
            <Logo tone="light" />
          </Link>
          <p>
            © <Year /> Noodle Codes Technologies Pvt. Ltd.
          </p>
          <ul className={styles.legal}>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
