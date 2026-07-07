/** Hero wireframe orb (static rings + two counter-rotating dashed rings). */
export function Orb() {
  return (
    <div
      className="pointer-events-none absolute top-1/2 right-[-4%] aspect-square w-[min(52vw,560px)] -translate-y-1/2 opacity-0"
      style={{ animation: 'heroIn .9s ease .2s forwards' }}
    >
      <svg viewBox="0 0 400 400" className="h-full w-full overflow-visible" aria-hidden="true">
        <circle
          cx="200"
          cy="200"
          r="90"
          fill="none"
          stroke="rgba(242,184,75,0.14)"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="200"
          r="140"
          fill="none"
          stroke="rgba(242,184,75,0.10)"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="200"
          r="190"
          fill="none"
          stroke="rgba(139,150,180,0.10)"
          strokeWidth="1"
        />
        <g className="anim-spin">
          <circle
            cx="200"
            cy="200"
            r="165"
            fill="none"
            stroke="rgba(242,184,75,0.22)"
            strokeWidth="1.5"
            strokeDasharray="2 12"
          />
          <circle cx="365" cy="200" r="3" fill="var(--color-amber)" />
        </g>
        <g className="anim-spin-r">
          <circle
            cx="200"
            cy="200"
            r="110"
            fill="none"
            stroke="rgba(75,150,242,0.28)"
            strokeWidth="1"
            strokeDasharray="1 9"
          />
        </g>
        <path
          d="M96,200 C96,104 200,104 200,200 C200,296 304,296 304,200"
          fill="none"
          stroke="rgba(242,184,75,0.35)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M96,200 C96,296 200,296 200,200 C200,104 304,104 304,200"
          fill="none"
          stroke="var(--color-amber)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <circle
          cx="200"
          cy="200"
          r="7"
          fill="var(--color-ink)"
          stroke="var(--color-amber)"
          strokeWidth="2.5"
        />
      </svg>
    </div>
  );
}
