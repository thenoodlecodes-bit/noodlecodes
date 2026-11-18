"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import type { Currency } from "@/content/pricing";
import { CURRENCY_COOKIE } from "@/lib/money";
import styles from "./price.module.css";

/** Lets a visitor see the other currency. The choice is remembered for a year. */
export function CurrencySwitch({ current }: { current: Currency }) {
  const router = useRouter();
  const [pending, start] = useTransition();
  const other: Currency = current === "INR" ? "USD" : "INR";

  const pick = () => {
    document.cookie = `${CURRENCY_COOKIE}=${other}; path=/; max-age=31536000; samesite=lax`;
    start(() => router.refresh());
  };

  return (
    <button type="button" className={styles.switch} onClick={pick} disabled={pending}>
      {other === "INR" ? "Show in rupees" : "Show in US dollars"}
    </button>
  );
}
