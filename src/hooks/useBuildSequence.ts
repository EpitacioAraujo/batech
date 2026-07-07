import { useEffect, type RefObject } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';

/**
 * The "built live" browser mockup: when it scrolls into view, its blocks fade in
 * in order, a progress bar fills, a scan line sweeps and the status flips from
 * "construindo…" to "no ar". Under reduced motion it snaps straight to the final state.
 */
export function useBuildSequence(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const stage = ref.current;
    if (!stage) return;

    const items = gsap.utils
      .toArray<HTMLElement>('[data-build]', stage)
      .sort((a, b) => Number(a.dataset.build) - Number(b.dataset.build));
    const bar = stage.querySelector<HTMLElement>('[data-build-bar]');
    const status = stage.querySelector<HTMLElement>('[data-build-status]');
    const dot = stage.querySelector<HTMLElement>('[data-build-dot]');
    const scan = stage.querySelector<HTMLElement>('[data-build-scan]');

    const finish = () => {
      if (status) status.textContent = 'no ar';
      if (dot) {
        dot.style.background = 'var(--color-mint)';
        dot.style.animation = 'none';
      }
    };

    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const step = 0.23;
      const total = step * items.length + 0.45;
      gsap.set(items, { opacity: 0, y: 12, filter: 'blur(4px)' });

      const st = ScrollTrigger.create({
        trigger: stage,
        start: 'top 70%',
        once: true,
        onEnter: () => {
          gsap.to(items, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.5,
            stagger: step,
            ease: 'power3.out',
          });
          if (scan) scan.style.animation = `scanSweep ${total}s ease-in-out forwards`;
          if (bar) {
            gsap.fromTo(
              bar,
              { width: '0%' },
              { width: '100%', duration: total, ease: 'power2.inOut' },
            );
          }
          gsap.delayedCall(total, () => {
            finish();
            if (bar) gsap.to(bar, { opacity: 0, duration: 0.4 });
          });
        },
      });
      return () => st.kill();
    });

    // Reduced motion: everything already visible; just settle the status.
    mm.add('(prefers-reduced-motion: reduce)', () => {
      finish();
      if (bar) bar.style.opacity = '0';
    });

    return () => mm.revert();
  }, [ref]);
}
