import { useState } from 'react';
import { site } from '../site.config';

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-[66px]">
      <h2 data-reveal className="mb-[30px] font-display text-[26px] font-bold tracking-[-0.02em]">
        {site.faq.heading}
      </h2>
      <div data-reveal data-delay="60">
        {site.faq.items.map((item, i) => {
          const isOpen = open === i;
          const last = i === site.faq.items.length - 1;
          return (
            <div key={item.q} className={`border-t border-line py-5 ${last ? 'border-b' : ''}`}>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 text-left font-display text-base font-semibold text-text"
              >
                {item.q}
                <span
                  className="shrink-0 font-mono text-xl text-amber transition-transform duration-[350ms]"
                  style={{
                    transform: isOpen ? 'rotate(45deg)' : 'none',
                    transitionTimingFunction: 'cubic-bezier(.34,1.56,.64,1)',
                  }}
                >
                  +
                </span>
              </button>
              {/* grid-rows 0fr→1fr animates height with no JS measuring */}
              <div
                className="grid transition-[grid-template-rows,opacity,padding-top] duration-[450ms] ease-[cubic-bezier(.2,.7,.2,1)]"
                style={{
                  gridTemplateRows: isOpen ? '1fr' : '0fr',
                  opacity: isOpen ? 1 : 0,
                  paddingTop: isOpen ? '14px' : '0px',
                }}
              >
                <div className="overflow-hidden text-sm leading-[1.65] text-muted">{item.a}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
