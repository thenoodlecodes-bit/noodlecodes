import type { Metadata } from "next";
import { ContactForm } from "@/components/Contact/Contact";
import { PageHero } from "@/components/Page/Page";
import { Localised } from "@/components/Price/Price";
import { WhatsappIcon } from "@/components/Whatsapp/Whatsapp";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/money";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Tell us what you are building or fixing. Noodle Codes replies within one working day, on email or WhatsApp.",
  alternates: { canonical: "/contact" },
};

const next = [
  { title: "We reply within a day", text: "A senior person reads your message and writes back, on email or WhatsApp." },
  { title: "A free 30 minute call", text: "We ask a lot of questions. If we are not the right fit, we will say so and suggest who is." },
  { title: "A fixed quote", text: "Scope, timeline and a fixed price, usually within a few days." },
];

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        crumbs={[{ href: "/contact", label: "Contact us" }]}
        title="Tell us what's tangled."
        intro="What you are building or fixing, and by when. We reply within one working day."
      />

      <section className={styles.section} data-section="contact">
        <div className={`container ${styles.grid}`}>
          <div className={styles.formCard}>
            <Localised fallback={<ContactForm />}>{(currency) => <ContactForm currency={currency} />}</Localised>
          </div>

          <aside className={styles.side}>
            <div>
              <h2 className={styles.sideTitle}>Prefer to message us?</h2>
              <ul className={styles.direct}>
                <li>
                  <a href={whatsappLink(site.whatsapp, "Hi Noodle Codes, I would like to talk about a project.")} target="_blank" rel="noreferrer">
                    <span className={styles.icon} aria-hidden="true">
                      <WhatsappIcon />
                    </span>
                    <span>
                      <strong>WhatsApp</strong>
                      <small>{site.phone}</small>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.emails.hello}`}>
                    <span className={styles.icon} aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="M3 7l9 6 9-6" />
                      </svg>
                    </span>
                    <span>
                      <strong>Email</strong>
                      <small>{site.emails.hello}</small>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

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
          </aside>
        </div>
      </section>
    </main>
  );
}
