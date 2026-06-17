// Floating "Book a call" action — primary conversion nudge for U.S. visitors.
const CALENDLY_URL = "https://calendly.com/thenoodlecodes/30min";

export default function WhatsAppFAB() {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab wa-fab--book"
      aria-label="Book a free 30-minute strategy call with NoodleCodes"
    >
      <span className="wa-fab-pulse" aria-hidden="true"></span>
      <svg
        viewBox="0 0 24 24"
        width="26"
        height="26"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M9 15l2 2 4-4" />
      </svg>
      <span className="wa-fab-label">Book a call</span>
    </a>
  );
}
