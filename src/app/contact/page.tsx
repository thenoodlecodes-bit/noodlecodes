import type { Metadata } from "next";
import { ContactForm } from "@/components/Contact/Contact";
import { PageHero } from "@/components/Page/Page";
import { site } from "@/content/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Tell us what you are building or fixing. A senior person from Noodle Codes replies within one working day.",
  alternates: { canonical: "/contact" },
};

const next = [
  { title: "We reply within a day", text: "A senior person from the right practice reads your message and writes back." },
  { title: "A 30 minute call", text: "We ask a lot of questions. If we are not the right fit, we will say so and suggest who is." },
  { title: "A written proposal", text: "Scope, team, timeline and a fixed price or monthly fee, usually within a week." },
];

const inboxes = [
  { label: "New projects", email: site.emails.hello },
  { label: "Careers", email: site.emails.careers },
  { label: "Press and speaking", email: site.emails.press },
];

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        crumbs={[{ href: "/contact", label: "Contact us" }]}
        title="Tell us what's tangled."
        intro="What you are building or fixing, and by when. A senior person replies within one working day."
      />

      <section className={styles.section} data-section="contact">
        <div className={`container ${styles.grid}`}>
          <div className={styles.formCard}>
            <ContactForm />
          </div>

          <aside className={styles.side}>
            <div>
              <h2 className={styles.sideTitle}>What happens next</h2>
              <ol className={styles.next}>
                {next.map((n) => (
                  <li key={n.title}>
                    <strong>{n.title}</strong>
                    <p>{n.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className={styles.sideTitle}>Write to us directly</h2>
              <ul className={styles.inboxes}>
                {inboxes.map((i) => (
                  <li key={i.label}>
                    <span className="meta">{i.label}</span>
                    <a href={`mailto:${i.email}`}>{i.email}</a>
                  </li>
                ))}
                <li>
                  <span className="meta">Phone</span>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className={styles.sideTitle}>Visit a studio</h2>
              <ul className={styles.offices}>
                {site.offices.map((o) => (
                  <li key={o.city}>
                    <strong>{o.city}</strong>
                    <address>
                      {o.lines.map((l) => (
                        <span key={l}>{l}</span>
                      ))}
                    </address>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
