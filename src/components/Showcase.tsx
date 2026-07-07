import { useRef } from 'react';
import { site } from '../site.config';
import { useBuildSequence } from '../hooks/useBuildSequence';

const buildBox = 'border border-line bg-panel-2';

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  useBuildSequence(ref);
  const { showcase } = site;

  return (
    <section className="pt-[76px] pb-[66px]">
      <div data-reveal className="mb-4 font-mono text-xs tracking-[0.09em] text-muted uppercase">
        {showcase.eyebrow}
      </div>
      <h2
        data-reveal
        data-delay="80"
        className="mb-[34px] max-w-[640px] font-display text-[clamp(26px,3.6vw,38px)] font-bold tracking-[-0.02em]"
      >
        {showcase.heading}
      </h2>

      <div data-reveal ref={ref} className="relative">
        {/* status pill */}
        <div className="anim-float absolute top-[-16px] right-3.5 z-[3] flex items-center gap-2 rounded-full border border-line bg-panel-2 px-3.5 py-[7px] font-mono text-[11px] text-text shadow-[0_12px_30px_-12px_rgba(0,0,0,.6)]">
          <span data-build-dot className="anim-pulse-dot h-2 w-2 rounded-full bg-amber" />
          <span data-build-status>construindo…</span>
        </div>

        {/* browser card */}
        <div className="relative overflow-hidden rounded-[14px] border border-line bg-panel shadow-[0_34px_70px_-24px_rgba(0,0,0,0.6)]">
          {/* chrome */}
          <div className="relative flex items-center gap-2 border-b border-line bg-panel-2 px-4 py-[13px]">
            <span className="h-[9px] w-[9px] rounded-full bg-line" />
            <span className="h-[9px] w-[9px] rounded-full bg-line" />
            <span className="h-[9px] w-[9px] rounded-full bg-line" />
            <span className="ml-3 flex max-w-[300px] flex-1 items-center gap-[7px] rounded-md bg-ink px-[13px] py-[6px] font-mono text-xs text-muted">
              <span className="h-[5px] w-[5px] rounded-full bg-mint" />
              {showcase.domain}
            </span>
            <div data-build-bar className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber" />
          </div>

          {/* viewport */}
          <div
            className="relative min-h-[300px] overflow-hidden px-[30px] pt-[26px] pb-[34px]"
            style={{
              background:
                'radial-gradient(ellipse 70% 60% at 15% 0%,rgba(75,150,242,0.07),transparent 70%)',
            }}
          >
            <div
              data-build-scan
              className="pointer-events-none absolute top-0 right-0 left-0 h-14 opacity-0"
              style={{ background: 'linear-gradient(180deg,rgba(242,184,75,0.14),transparent)' }}
            />

            {/* demo header */}
            <div
              data-build="0"
              className="mb-[30px] flex items-center justify-between border-b border-line pb-6"
            >
              <div className="flex items-center gap-[9px] font-display text-sm font-semibold">
                <span className="h-[22px] w-[22px] rounded-md bg-amber" />
                {showcase.demoBrand}
              </div>
              <div className="flex items-center gap-[18px]">
                <span className="h-[7px] w-[38px] rounded bg-line" />
                <span className="h-[7px] w-[30px] rounded bg-line" />
                <span className="rounded-md bg-amber px-3 py-[6px] font-mono text-[11px] text-ink">
                  Agendar
                </span>
              </div>
            </div>

            <div className="grid grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-center gap-[26px]">
              <div>
                <div
                  data-build="1"
                  className="mb-3.5 font-mono text-[11px] tracking-[0.05em] text-amber"
                >
                  {showcase.demoEyebrow}
                </div>
                <div
                  data-build="2"
                  className="mb-3.5 font-display text-[clamp(22px,3vw,30px)] leading-[1.08] font-bold tracking-[-0.02em]"
                >
                  {showcase.demoTitle}
                </div>
                <div data-build="3" className="mb-[22px] flex max-w-[290px] flex-col gap-2">
                  <span className="h-2 w-full rounded bg-line" />
                  <span className="h-2 w-[78%] rounded bg-line" />
                </div>
                <div
                  data-build="4"
                  className="inline-flex items-center gap-2 rounded-lg bg-amber px-5 py-[11px] font-display text-[13px] font-semibold text-ink"
                >
                  {showcase.demoCta}
                </div>
              </div>
              <div
                data-build="2"
                className={`flex aspect-[3/4] items-end justify-center rounded-xl p-3 ${buildBox}`}
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(135deg,rgba(139,150,180,0.10) 0 10px,transparent 10px 20px)',
                }}
              >
                <span className="font-mono text-[10px] text-muted">{showcase.photoLabel}</span>
              </div>
            </div>

            <div
              data-build="5"
              className="mt-[30px] flex flex-wrap gap-6 border-t border-line pt-[22px]"
            >
              {showcase.stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-mono text-base text-amber">{s.value}</span>
                  <span className="text-[11px] text-muted">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p data-reveal className="mt-[18px] text-center font-mono text-xs text-muted">
        {showcase.caption}
      </p>
    </section>
  );
}
