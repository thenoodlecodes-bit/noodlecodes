type Props = {
  size?: number | string;
  /** Color of the noodle strands (defaults to brand --noodle). */
  color?: string;
  /** Color of the dripping sauce (defaults to --sauce). */
  drip?: string;
  /** Show the dripping sauce droplets at the bottom. Default true. */
  drips?: boolean;
  /** Apply a subtle idle wobble animation. */
  animated?: boolean;
  className?: string;
  ariaLabel?: string;
};

/**
 * NoodleKnot — the "o" from the NoodleCodes logo, rebuilt as inline SVG.
 * A tangle of interlocked noodle strands with sauce drips below.
 * Use anywhere the brand wants a hot, dripping "o".
 */
export default function NoodleKnot({
  size = "1em",
  color = "var(--noodle)",
  drip = "var(--noodle)",
  drips = true,
  animated = false,
  className,
  ariaLabel,
}: Props) {
  const cls = [
    "noodle-knot",
    animated ? "noodle-knot--anim" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <svg
      className={cls}
      style={{ width: size, height: size }}
      viewBox="0 0 100 120"
      xmlns="http://www.w3.org/2000/svg"
      role={ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    >
      {/* The tangled noodle knot — three interlocking strokes that read as a rough "o" */}
      <g
        fill="none"
        stroke={color}
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* outer loop */}
        <path d="M 50 12 C 18 12, 10 70, 50 78 C 90 70, 82 12, 50 12 Z" />
        {/* inner tangle 1 — goes over the top, dives across */}
        <path d="M 30 30 C 50 50, 70 20, 70 45 C 70 65, 30 60, 30 30 Z" />
        {/* inner tangle 2 — diagonal swoop */}
        <path d="M 22 55 C 42 35, 58 70, 78 50" />
        {/* small extra strand */}
        <path d="M 38 70 C 50 58, 60 78, 70 68" />
      </g>

      {/* highlight over the top strand for layered "wet" look */}
      <g fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" opacity="0.55">
        <path d="M 32 28 C 50 48, 68 22, 68 42" />
      </g>

      {drips && (
        <g fill={drip}>
          {/* drip 1 */}
          <path d="M 33 76 Q 31 92, 35 100 Q 39 92, 37 76 Z" />
          <circle cx="35" cy="106" r="3.2" />
          {/* drip 2 — longest */}
          <path d="M 50 80 Q 47 102, 51 112 Q 55 102, 52 80 Z" />
          <circle cx="51" cy="117" r="2.8" />
          {/* drip 3 */}
          <path d="M 66 77 Q 64 90, 68 96 Q 72 90, 70 77 Z" />
          <circle cx="68" cy="100" r="2.4" />
        </g>
      )}
    </svg>
  );
}
