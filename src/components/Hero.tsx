import { useRef } from 'react';
import { site } from '../site.config';
import { useHeroMotion } from '../hooks/useHeroMotion';
import { Nav } from './Nav';
import { Ruler48h } from './Ruler48h';
import { Orb } from './ui/Orb';
import { Button } from './ui/Button';

const chipBase = 'absolute font-mono text-[11px] opacity-0 will-change-transform';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  useHeroMotion(ref);
  const { hero } = site;

  return (
    <section ref={ref} className="relative z-[1]">
      {/* FIXED BACKGROUND — sticky, stays locked while the hero scrolls */}
      <div className="sticky top-0 z-0 h-screen overflow-hidden bg-ink">
        {/* grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-grid) 1px,transparent 1px),linear-gradient(90deg,var(--color-grid) 1px,transparent 1px)',
            backgroundSize: '44px 44px',
            backgroundPosition: '-1px -1px',
          }}
        />
        {/* glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 46% 44% at 72% 34%,rgba(242,184,75,0.14),transparent 66%),radial-gradient(ellipse 40% 40% at 20% 80%,rgba(75,150,242,0.10),transparent 70%)',
          }}
        />
        <Orb />
      </div>

      {/* SCROLLING CONTENT — overlays the fixed background */}
      <div className="relative z-[1] -mt-[100vh]">
        {/* PART 1 — full-viewport pitch */}
        <div className="relative h-screen min-h-[clamp(600px,90vh,860px)] overflow-hidden">
          {/* floating data chips */}
          {hero.chips.map((chip) => (
            <div
              key={chip.text}
              data-depth={chip.depth}
              className={`${chipBase} ${chip.className} ${chip.accent ? 'text-amber' : 'text-muted'} ${
                chip.boxed
                  ? 'rounded-md border border-line bg-[rgba(20,31,56,0.5)] px-[10px] py-[6px] backdrop-blur-[4px]'
                  : ''
              }`}
              style={{ animation: `heroIn .8s ease ${chip.delay}s forwards` }}
            >
              {chip.text}
            </div>
          ))}

          <div className="relative z-[5] mx-auto flex min-h-[clamp(600px,90vh,860px)] max-w-[1040px] flex-col justify-center px-6">
            <Nav />

            <div
              data-depth="0.16"
              data-intro
              className="mb-6 flex items-center gap-[10px] font-mono text-[13px] text-amber will-change-transform"
            >
              <span className="h-px w-8 bg-amber" />
              {hero.eyebrow}
            </div>

            <h1
              data-depth="0.1"
              data-intro
              className="max-w-[820px] font-display text-[clamp(38px,6vw,66px)] leading-[1.02] font-bold tracking-[-0.028em] will-change-transform"
            >
              {hero.headlineLead} <span className="text-amber">{hero.headlineAccent}</span>
            </h1>

            <p
              data-depth="0.2"
              data-intro
              className="mt-6 max-w-[520px] text-[18px] text-muted will-change-transform"
            >
              {hero.sub}
            </p>

            <div
              data-depth="0.24"
              data-intro
              className="mt-[38px] flex flex-wrap items-center gap-[22px] will-change-transform"
            >
              <Button href={site.whatsappUrl} target="_blank">
                {hero.primaryCta}
              </Button>
              <span className="font-mono text-[13px] text-muted">
                a partir de <b className="text-text">{site.price}</b> · {hero.priceNote}
              </span>
            </div>

            <div
              data-intro
              className="absolute right-6 bottom-[26px] left-6 flex flex-wrap items-center justify-between gap-4"
            >
              <div className="flex items-center gap-[9px] font-mono text-[11px] tracking-[0.04em] text-muted">
                <span
                  className="anim-pulse-dot h-[7px] w-[7px] rounded-full bg-mint"
                  style={{ boxShadow: '0 0 0 0 rgba(55,211,153,.5)' }}
                />
                {hero.status}
                <span className="anim-blink h-3 w-px bg-amber" />
              </div>
              <div className="font-mono text-[11px] text-muted">{hero.scrollHint}</div>
            </div>
          </div>
        </div>

        {/* PART 2 — the 48h ruler scrolls over the fixed background */}
        <div className="relative">
          <Ruler48h />
        </div>
      </div>
    </section>
  );
}
