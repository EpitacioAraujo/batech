import { useEffect } from 'react';
import { gsap } from '../lib/gsap';

/**
 * Magnetic pull on every [data-magnetic] element toward the cursor.
 * Disabled under reduced motion and on coarse pointers (touch).
 */
export function useMagnetic() {
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference) and (pointer: fine)', () => {
      const btns = gsap.utils.toArray<HTMLElement>('[data-magnetic]');
      const cleanups = btns.map((btn) => {
        const xTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3' });
        const yTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3' });
        const onMove = (e: MouseEvent) => {
          const r = btn.getBoundingClientRect();
          xTo((e.clientX - (r.left + r.width / 2)) * 0.32);
          yTo((e.clientY - (r.top + r.height / 2)) * 0.32 - 2);
        };
        const onLeave = () => {
          xTo(0);
          yTo(0);
        };
        btn.addEventListener('mousemove', onMove);
        btn.addEventListener('mouseleave', onLeave);
        return () => {
          btn.removeEventListener('mousemove', onMove);
          btn.removeEventListener('mouseleave', onLeave);
        };
      });
      return () => cleanups.forEach((c) => c());
    });
    return () => mm.revert();
  }, []);
}
