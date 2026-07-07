import { site } from '../site.config';
import { Logo } from './ui/Logo';
import { Button } from './ui/Button';

export function Nav() {
  return (
    <nav className="absolute top-0 right-6 left-6 flex items-center justify-between py-[26px]">
      <div className="flex items-center gap-[11px]" data-intro>
        <Logo />
        <div className="flex flex-col font-display text-[17px] leading-[1.15] font-semibold">
          {site.brand}
          <span className="font-mono text-[10px] font-normal tracking-[0.06em] text-muted">
            {site.tagline}
          </span>
        </div>
      </div>
      <span data-intro>
        <Button href={site.whatsappUrl} target="_blank" size="sm">
          {site.hero.navCta}
        </Button>
      </span>
    </nav>
  );
}
