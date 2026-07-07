import { useEffect, type RefObject } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';

const THRESHOLDS = [0.02, 0.5, 0.98];

/**
 * Drives the "48h" ruler: fill width, T+NNh counter and the three ticks light up
 * as the section scrolls through the viewport. Functional indicator — runs even
 * under reduced motion (CSS just disables the tick transitions).
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const sec = ref.current;
    if (!sec) return;

    const fill = sec.querySelector<HTMLElement>('[data-ruler-fill]');
    const hour = sec.querySelector<HTMLElement>('[data-hour]');
    const ticks = gsap.utils.toArray<HTMLElement>('[data-tick]', sec);
    const accent = () =>
      getComputedStyle(sec).getPropertyValue('--color-amber').trim() || '#F2B84B';

    const setTick = (t: HTMLElement, on: boolean) => {
      const dot = t.querySelector<HTMLElement>('[data-tick-dot]');
      const time = t.querySelector<HTMLElement>('[data-tick-time]');
      if (dot) {
        dot.style.background = on ? accent() : '#2C3B60';
        dot.style.boxShadow = on ? '0 0 12px 2px rgba(242,184,75,.6)' : 'none';
      }
      if (time) time.style.color = on ? accent() : '#8B96B4';
      t.style.transform = on ? 'translateY(-3px)' : 'none';
    };

    const update = (p: number) => {
      if (fill) fill.style.width = `${p * 100}%`;
      if (hour) hour.textContent = `T+${String(Math.round(p * 48)).padStart(2, '0')}h`;
      ticks.forEach((t, i) => {
        const on = p >= THRESHOLDS[i];
        if (on && t.dataset.active !== '1') {
          t.dataset.active = '1';
          setTick(t, true);
        } else if (!on && t.dataset.active === '1') {
          t.dataset.active = '0';
          setTick(t, false);
        }
      });
    };

    const st = ScrollTrigger.create({
      trigger: sec,
      start: 'top 72%',
      end: () => `+=${sec.offsetHeight * 0.72}`,
      onUpdate: (self) => update(self.progress),
    });
    update(0);

    return () => st.kill();
  }, [ref]);
}
