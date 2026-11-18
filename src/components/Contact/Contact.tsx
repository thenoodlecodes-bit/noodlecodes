"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { BUDGETS, TIMELINES, type Currency } from "@/content/pricing";
import { site } from "@/content/site";
import type { ServiceSlug } from "@/content/types";
import { ENQUIRY_FIELDS, TOPICS, TOPIC_FOR, enquirySchema, fieldErrors, type EnquiryField } from "@/lib/enquiry";
import { whatsappLink } from "@/lib/money";
import { track } from "@/lib/track";
import styles from "./Contact.module.css";

type Status = "idle" | "sending" | "sent" | "failed";
type Errors = Partial<Record<EnquiryField, string>>;

/** Budget ranges follow the visitor's currency. */
export function ContactForm({ currency = "USD" }: { currency?: Currency }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [failure, setFailure] = useState("");
  const [sent, setSent] = useState({ firstName: "", summary: "" });
  const form = useRef<HTMLFormElement>(null);
  const done = useRef<HTMLDivElement>(null);

  // ?service=consultancy ticks the matching topic (it can repeat); ?brief= carries text typed elsewhere; ?source= says where it started
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (!form.current) return;
    for (const slug of params.getAll("service")) {
      const topic = TOPIC_FOR[slug as ServiceSlug];
      const box = topic && form.current.querySelector<HTMLInputElement>(`input[name="topics"][value="${topic}"]`);
      if (box) box.checked = true;
    }
    const brief = params.get("brief");
    const message = form.current.querySelector<HTMLTextAreaElement>('textarea[name="message"]');
    if (brief && message && !message.value) message.value = brief.slice(0, 4000);
    const source = params.get("source");
    const hidden = form.current.querySelector<HTMLInputElement>('input[name="source"]');
    if (source && hidden) hidden.value = source.slice(0, 60);
  }, []);

  useEffect(() => {
    if (status === "sent") done.current?.focus();
  }, [status]);

  const clear = (field: EnquiryField) => () => {
    if (errors[field]) setErrors((x) => ({ ...x, [field]: undefined }));
  };

  const showErrors = (next: Errors) => {
    setErrors(next);
    const first = ENQUIRY_FIELDS.find((k) => next[k]);
    if (first) form.current?.querySelector<HTMLElement>(`[data-field="${first}"]`)?.focus();
  };

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const optional = (key: string) => (data.get(key) ? String(data.get(key)) : undefined);
    const parsed = enquirySchema.safeParse({
      topics: data.getAll("topics").map(String),
      budget: optional("budget"),
      timeline: optional("timeline"),
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? "").trim(),
      company: String(data.get("company") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
      source: String(data.get("source") ?? ""),
      website: String(data.get("website") ?? ""),
    });
    if (!parsed.success) return showErrors(fieldErrors(parsed.error));

    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string; fields?: Errors };
      if (res.status === 422 && body.fields) {
        setStatus("idle");
        return showErrors(body.fields);
      }
      if (!res.ok) throw new Error(body.error ?? "That did not send.");
      track("generate_lead", parsed.data.topics.join(", "));
      const p = parsed.data;
      setSent({
        firstName: p.name.split(" ")[0],
        summary: `Hi Noodle Codes, I am ${p.name}${p.company ? ` from ${p.company}` : ""}. I just sent an enquiry about ${p.topics.join(", ").toLowerCase()}.`,
      });
      setStatus("sent");
    } catch (err) {
      setFailure(err instanceof Error ? err.message : "That did not send.");
      setStatus("failed");
    }
  }

  const again = () => {
    setErrors({});
    setStatus("idle");
  };

  if (status === "sent") {
    return (
      <div ref={done} className={styles.done} tabIndex={-1}>
        <span className={styles.tick} aria-hidden="true" />
        <h2 className="h3">Thanks, {sent.firstName}. Message received.</h2>
        <p>We reply within one working day, usually sooner. For a faster answer, message us on WhatsApp too.</p>
        <div className={styles.doneActions}>
          <a className="btn btn--primary" href={whatsappLink(site.whatsapp, sent.summary)} target="_blank" rel="noreferrer" onClick={() => track("whatsapp", "after enquiry")}>
            Continue on WhatsApp
          </a>
          <button className="btn btn--ghost" type="button" onClick={again}>
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form ref={form} className={styles.form} onSubmit={submit} noValidate>
      <fieldset className={styles.field} aria-describedby={errors.topics ? "err-topics" : undefined}>
        <legend>What can we help with?</legend>
        <div className={styles.picks}>
          {TOPICS.map((t, i) => (
            <label key={t} className={styles.pick}>
              <input type="checkbox" name="topics" value={t} data-field={i === 0 ? "topics" : undefined} onChange={clear("topics")} />
              <span>{t}</span>
            </label>
          ))}
        </div>
        {errors.topics && (
          <em className={styles.err} id="err-topics">
            {errors.topics}
          </em>
        )}
      </fieldset>

      <div className={styles.row}>
        <Input name="name" label="Name" autoComplete="name" error={errors.name} onInput={clear("name")} />
        <Input name="email" label="Email" type="email" autoComplete="email" error={errors.email} onInput={clear("email")} />
      </div>
      <div className={styles.row}>
        <Input name="phone" label="WhatsApp or phone" type="tel" autoComplete="tel" optional />
        <Input name="company" label="Company" autoComplete="organization" optional />
      </div>

      <label className={styles.input}>
        <span>What is going on?</span>
        <textarea
          name="message"
          rows={5}
          placeholder="What are you building or fixing, and by when?"
          data-field="message"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "err-message" : undefined}
          onInput={clear("message")}
        />
        {errors.message && (
          <em className={styles.err} id="err-message">
            {errors.message}
          </em>
        )}
      </label>

      <Choice name="budget" legend="Rough budget" options={BUDGETS[currency]} />
      <Choice name="timeline" legend="When do you want to start?" options={TIMELINES} />

      <input type="hidden" name="source" defaultValue="" />
      <label className={styles.honey} aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      {status === "failed" && (
        <p className={styles.failed} role="alert">
          {failure} Try again, email <a href={`mailto:${site.emails.hello}`}>{site.emails.hello}</a> or{" "}
          <a href={whatsappLink(site.whatsapp)} target="_blank" rel="noreferrer">
            message us on WhatsApp
          </a>
          .
        </p>
      )}

      <div className={styles.submit}>
        <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending" : "Send message"}
        </button>
        <p>We reply within one working day. No sales sequences.</p>
      </div>
    </form>
  );
}

function Choice({ name, legend, options }: { name: string; legend: string; options: readonly string[] }) {
  return (
    <fieldset className={styles.field}>
      <legend>
        {legend} <small>Optional</small>
      </legend>
      <div className={styles.picks}>
        {options.map((o) => (
          <label key={o} className={styles.pick}>
            <input type="radio" name={name} value={o} />
            <span>{o}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Input({
  name,
  label,
  type = "text",
  autoComplete,
  error,
  optional,
  onInput,
}: {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  error?: string;
  optional?: boolean;
  onInput?: () => void;
}) {
  return (
    <label className={styles.input}>
      <span>
        {label} {optional && <small>Optional</small>}
      </span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        data-field={optional ? undefined : name}
        aria-invalid={!!error}
        aria-describedby={error ? `err-${name}` : undefined}
        onInput={onInput}
      />
      {error && (
        <em className={styles.err} id={`err-${name}`}>
          {error}
        </em>
      )}
    </label>
  );
}
