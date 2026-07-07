import { useEffect } from 'react';
import { site } from './site.config';
import { useReveals } from './hooks/useReveals';
import { useMagnetic } from './hooks/useMagnetic';
import { Hero } from './components/Hero';
import { Showcase } from './components/Showcase';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  // Global scroll reveals + magnetic buttons (one observer/binding each).
  useReveals();
  useMagnetic();

  // Apply the configurable accent color to the root (mirrors the old editable prop).
  useEffect(() => {
    if (site.accent) document.documentElement.style.setProperty('--color-amber', site.accent);
  }, []);

  return (
    <div className="relative">
      <Hero />
      {/* overlay: bg-ink covers the sticky hero background as the page scrolls past it */}
      <div className="relative z-[1] bg-ink">
        <div className="mx-auto max-w-[1040px] px-6">
          <Showcase />
          <Pricing />
          <About />
          <Faq />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
