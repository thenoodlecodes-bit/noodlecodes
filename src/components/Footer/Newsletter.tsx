"use client";

import { useState, type FormEvent } from "react";
import { track } from "@/lib/track";
import styles from "./Footer.module.css";

type State = "idle" | "sending" | "done" | "error";

export function Newsletter() {
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setState("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error ?? "Could not subscribe.");
      setState("done");
      track("subscribe", "newsletter");
      form.reset();
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "Could not subscribe.");
    }
  }

  return (
    <form className={styles.news} onSubmit={submit} noValidate={false}>
      <label htmlFor="news-email" className={styles.newsTitle}>
        One email a month with our best thinking.
      </label>
      {state === "done" ? (
        <p className={styles.newsDone} role="status">
          Subscribed. The next issue goes out on the first Tuesday of the month.
        </p>
      ) : (
        <>
          <div className={styles.newsRow}>
            <input
              id="news-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              aria-describedby={state === "error" ? "news-error" : undefined}
            />
            <input className="sr" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <button type="submit" className="btn btn--primary" disabled={state === "sending"}>
              {state === "sending" ? "Subscribing" : "Subscribe"}
            </button>
          </div>
          {state === "error" && (
            <p id="news-error" className={styles.newsError} role="alert">
              {message}
            </p>
          )}
        </>
      )}
    </form>
  );
}
