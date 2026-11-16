"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { track } from "@/lib/track";
import styles from "./Brief.module.css";

export function BriefForm({ title, examples }: { title: string; examples: string[] }) {
  const router = useRouter();
  const [n, setN] = useState(0);
  const [idle, setIdle] = useState(true);
  const field = useRef<HTMLTextAreaElement>(null);

  // cycle real examples through the placeholder until someone starts typing
  useEffect(() => {
    if (!idle || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setN((x) => (x + 1) % examples.length), 3800);
    return () => window.clearInterval(t);
  }, [idle, examples.length]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = field.current?.value.trim() ?? "";
    track("brief_start", text ? "with text" : "empty");
    router.push(text ? `/contact?brief=${encodeURIComponent(text)}` : "/contact");
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <label htmlFor="brief" className={`h2 ${styles.title}`}>
        {title}
      </label>
      <div className={styles.box}>
        <textarea
          ref={field}
          id="brief"
          name="brief"
          rows={3}
          maxLength={2000}
          placeholder={examples[n]}
          onFocus={() => setIdle(false)}
        />
        <div className={styles.bar}>
          <p>A senior engineer reads it and replies within one working day.</p>
          <button type="submit" className={`btn ${styles.send}`}>
            Continue
          </button>
        </div>
      </div>
    </form>
  );
}
