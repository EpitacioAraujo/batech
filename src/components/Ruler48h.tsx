import { useRef } from 'react';
import { site } from '../site.config';
import { useScrollProgress } from '../hooks/useScrollProgress';

const tickAlign = ['left-0', 'left-1/2 -translate-x-1/2', 'right-0'];

export function Ruler48h() {
  const ref = useRef<HTMLElement>(null);
  useScrollProgress(ref);

  return (
    <div className="relative">
      <div className="mx-auto max-w-[1040px] px-6">
        <section ref={ref} data-ruler className="pt-[74px] pb-14">
          <div data-reveal className="mb-[30px] flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono text-xs tracking-[0.09em] text-muted uppercase">
              {site.ruler.label}
            </span>
            <span
              data-hour
              className="rounded-md border border-line bg-panel/40 px-3 py-[5px] font-mono text-[13px] text-amber"
            >
              T+00h
            </span>
          </div>

          <div className="relative mx-1 h-[3px] overflow-visible rounded-[2px] bg-line">
            <div
              data-ruler-fill
              className="absolute top-0 left-0 h-full w-0 rounded-[2px]"
              style={{
                background: 'linear-gradient(90deg,rgba(242,184,75,0.15),var(--color-amber))',
                transition: 'width .12s linear',
              }}
            >
              <span
                className="absolute top-1/2 right-[-6px] h-[13px] w-[13px] -translate-y-1/2 rounded-full bg-amber"
                style={{ boxShadow: '0 0 16px 4px rgba(242,184,75,.7)' }}
              />
            </div>
          </div>

          <div className="mt-0 flex flex-wrap gap-x-3 gap-y-[22px]">
            {site.ruler.steps.map((step, i) => (
              <div
                key={step.time}
                data-tick
                data-active="0"
                className="relative min-w-[170px] flex-1 pt-[26px] transition-transform duration-[400ms]"
                style={{ transitionTimingFunction: 'cubic-bezier(.34,1.56,.64,1)' }}
              >
                <span
                  data-tick-dot
                  className={`absolute top-[-3px] ${tickAlign[i]} h-[11px] w-[3px] rounded-[2px] bg-line transition-[background,box-shadow] duration-[350ms]`}
                />
                <span
                  data-tick-time
                  className="mb-[7px] block font-mono text-xs text-muted transition-colors duration-[350ms]"
                >
                  {step.time}
                </span>
                <div className="mb-[5px] font-display text-base font-semibold">{step.title}</div>
                <div className="max-w-[200px] text-[13px] text-muted">{step.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
