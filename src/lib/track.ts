declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Pushes an event to Google Tag Manager's dataLayer. */
export function track(name: string, detail = "") {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: name, detail });
}
