"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const SERVICES = [
  { value: "websites", label: "Website" },
  { value: "apps", label: "Mobile App" },
  { value: "ai", label: "AI Agent" },
  { value: "panels", label: "Admin Panel" },
  { value: "consulting", label: "Consultancy" },
  { value: "other", label: "Other / Multiple" },
];

const BUDGETS = [
  { value: "5-15", label: "$5k – $15k" },
  { value: "15-30", label: "$15k – $30k" },
  { value: "30-60", label: "$30k – $60k" },
  { value: "60+", label: "$60k+" },
  { value: "tbd", label: "Not sure yet" },
];

const TIMELINES = [
  { value: "asap", label: "ASAP 🔥" },
  { value: "month", label: "This month" },
  { value: "quarter", label: "This quarter" },
  { value: "exploring", label: "Just exploring" },
];

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  // Prefill service / engagement from query params (e.g. /contact?service=websites)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const svc = params.get("service");
    const eng = params.get("engagement");
    if (svc) {
      const el = document.querySelector<HTMLInputElement>(
        `input[name="service"][value="${svc}"]`
      );
      if (el) el.checked = true;
    }
    if (eng) {
      const msg = document.getElementById("message") as HTMLTextAreaElement | null;
      if (msg && !msg.value) {
        msg.placeholder = `Interested in the ${eng} engagement. ${msg.placeholder}`;
      }
    }
  }, []);

  const validate = (fd: FormData) => {
    const next: Record<string, boolean> = {};
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();
    if (!name) next.name = true;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = true;
    if (!message) next.message = true;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    const fd = new FormData(formRef.current);
    if (!validate(fd)) return;

    setStatus("sending");
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="form-wrap reveal in">
        <div style={{ textAlign: "center", padding: "60px 20px" }}>
          <div
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              letterSpacing: "-.03em",
              marginBottom: "16px",
            }}
          >
            Order placed.{" "}
            <em
              style={{
                fontFamily: "var(--brush)",
                color: "var(--sauce)",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
              we&rsquo;re on it.
            </em>
          </div>
          <p
            style={{
              fontSize: "17px",
              color: "var(--ink-soft)",
              maxWidth: "50ch",
              margin: "0 auto",
            }}
          >
            A real human from the NoodleCodes kitchen will get back to you within
            24 hours with available slots for a free 30-min taste-test call.
          </p>
          <div
            style={{
              marginTop: "28px",
              fontFamily: "var(--mono)",
              fontSize: "13px",
              color: "var(--gray)",
            }}
          >
            While you wait — peek the{" "}
            <Link
              href="/work"
              style={{ color: "var(--sauce)", textDecoration: "underline" }}
            >
              menu
            </Link>
            .
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="form-wrap reveal">
      <h2>Tell us what you want to ship.</h2>
      <p className="form-intro">
        Fields marked with <span style={{ color: "var(--sauce)" }}>*</span> are
        required. Everything else helps us write a sharper first reply.
      </p>

      <form ref={formRef} onSubmit={onSubmit} noValidate>
        <div className="form-row">
          <div className={`field${errors.name ? " error" : ""}`}>
            <label htmlFor="name">
              Your name <span style={{ color: "var(--sauce)" }}>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Jordan Lee"
              autoComplete="name"
              onInput={() => setErrors((e) => ({ ...e, name: false }))}
            />
            <div className="err">We&rsquo;ll need your name to address the reply.</div>
          </div>
          <div className={`field${errors.email ? " error" : ""}`}>
            <label htmlFor="email">
              Email <span style={{ color: "var(--sauce)" }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="jordan@company.com"
              autoComplete="email"
              onInput={() => setErrors((e) => ({ ...e, email: false }))}
            />
            <div className="err">
              Please share a working email so we can write back.
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="field">
            <label htmlFor="company">Company / project</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Acme, Inc. or 'untitled side project'"
            />
          </div>
          <div className="field">
            <label htmlFor="role">Your role</label>
            <input
              type="text"
              id="role"
              name="role"
              placeholder="Founder, PM, CTO, hobbyist…"
            />
          </div>
        </div>

        <div className="field">
          <label>
            What are we cooking? <span style={{ color: "var(--sauce)" }}>*</span>
          </label>
          <div className="radio-grid">
            {SERVICES.map((s) => (
              <label className="opt" key={s.value}>
                <input type="radio" name="service" value={s.value} />
                {s.label}
              </label>
            ))}
          </div>
        </div>

        <div className="field">
          <label>Budget range (USD)</label>
          <div className="radio-grid">
            {BUDGETS.map((b) => (
              <label className="opt" key={b.value}>
                <input type="radio" name="budget" value={b.value} />
                {b.label}
              </label>
            ))}
          </div>
        </div>

        <div className="field">
          <label>When do you want to start?</label>
          <div className="radio-grid">
            {TIMELINES.map((t) => (
              <label className="opt" key={t.value}>
                <input type="radio" name="timeline" value={t.value} />
                {t.label}
              </label>
            ))}
          </div>
        </div>

        <div className={`field${errors.message ? " error" : ""}`}>
          <label htmlFor="message">
            Project details <span style={{ color: "var(--sauce)" }}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="What you're building, who it's for, links to references, current stack if relevant, any deadlines, anything we should know…"
            onInput={() => setErrors((e) => ({ ...e, message: false }))}
          ></textarea>
          <div className="err">
            Drop a few lines so we can write a useful first reply.
          </div>
        </div>

        <div className="field">
          <label htmlFor="source">How did you find us?</label>
          <select id="source" name="source" defaultValue="">
            <option value="">Pick one (optional)</option>
            <option>Search / Google</option>
            <option>Twitter / X</option>
            <option>Instagram</option>
            <option>LinkedIn</option>
            <option>Referral from a friend / client</option>
            <option>Read about us somewhere</option>
            <option>Other</option>
          </select>
        </div>

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              Cooking… <span>🍜</span>
            </>
          ) : (
            <>
              Send it <span>↗</span>
            </>
          )}
        </button>

        {status === "error" && (
          <p
            style={{
              color: "var(--sauce)",
              fontFamily: "var(--mono)",
              fontSize: "13px",
              marginTop: "14px",
            }}
          >
            Something burned in the kitchen — please try again, or email
            thenoodlecodes@gmail.com directly.
          </p>
        )}

        <p className="form-note">
          By submitting, you agree to our privacy policy. We don&rsquo;t sell your
          data and we don&rsquo;t run remarketing pixels. We just want to build cool
          stuff with you.
        </p>
      </form>
    </div>
  );
}
