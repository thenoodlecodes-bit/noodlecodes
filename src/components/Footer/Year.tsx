"use client";

import { useSyncExternalStore } from "react";

const noSubscribe = () => () => {};

/** Current year, read on the client so the static build never goes stale. */
export function Year() {
  return <>{useSyncExternalStore(noSubscribe, () => new Date().getFullYear(), () => 2026)}</>;
}
