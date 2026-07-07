import { useEffect } from 'react';
import { gsap } from '../lib/gsap';

/**
 * Reveals every [data-reveal] element on scroll (opacity + translateY).
 * Uses gsap.from so that, without JS or under reduced motion, content stays visible.
 * Honors an optional [data-delay] (ms) per element.
 */
export function useReveals() {
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const els = gsap.utils.toArray<HTMLElement>('[data-reveal]');
      els.forEach((el) => {
        const delay = parseInt(el.dataset.delay ?? '0', 10) / 1000;
        gsap.from(el, {
          opacity: 0,
          y: 26,
          duration: 0.8,
          delay,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        });
      });
    });
    return () => mm.revert();
  }, []);
}
