export function Logo({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className="shrink-0" aria-hidden="true">
      <rect
        x="4"
        y="4"
        width="92"
        height="92"
        rx="20"
        fill="var(--color-panel)"
        stroke="var(--color-line)"
        strokeWidth="1.5"
      />
      <path
        d="M14,50 C14,26 40,26 50,50 C60,74 86,74 86,50"
        fill="none"
        stroke="var(--color-amber)"
        strokeOpacity="0.4"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M14,50 C14,74 40,74 50,50 C60,26 86,26 86,50"
        fill="none"
        stroke="var(--color-amber)"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <circle
        cx="50"
        cy="50"
        r="4.5"
        fill="var(--color-panel)"
        stroke="var(--color-amber)"
        strokeWidth="2"
      />
    </svg>
  );
}
