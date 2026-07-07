import { useEffect, type RefObject } from 'react';
import { gsap } from '../lib/gsap';

/**
 * Hero load intro (staggered fade-in of [data-intro]) + pointer parallax on
 * [data-depth] layers. Both are disabled under reduced motion; parallax also
 * requires a fine pointer.
 */
export function useHeroMotion(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const hero = ref.current;
    if (!hero) return;

    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const intro = gsap.utils.toArray<HTMLElement>('[data-intro]', hero);
      gsap.from(intro, {
        opacity: 0,
        y: 16,
        duration: 0.8,
        stagger: 0.07,
        ease: 'power2.out',
      });
    });

    mm.add('(prefers-reduced-motion: no-preference) and (pointer: fine)', () => {
      const layers = gsap.utils.toArray<HTMLElement>('[data-depth]', hero).map((el) => ({
        d: parseFloat(el.dataset.depth ?? '0'),
        x: gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3' }),
        y: gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3' }),
      }));

      const onMove = (e: MouseEvent) => {
        const r = hero.getBoundingClientRect();
        const nx = ((e.clientX - r.left) / r.width - 0.5) * 2;
        const ny = ((e.clientY - r.top) / r.height - 0.5) * 2;
        layers.forEach((l) => {
          l.x(nx * l.d * 30);
          l.y(ny * l.d * 26);
        });
      };
      const onLeave = () => layers.forEach((l) => (l.x(0), l.y(0)));

      hero.addEventListener('mousemove', onMove);
      hero.addEventListener('mouseleave', onLeave);
      return () => {
        hero.removeEventListener('mousemove', onMove);
        hero.removeEventListener('mouseleave', onLeave);
      };
    });

    return () => mm.revert();
  }, [ref]);
}
