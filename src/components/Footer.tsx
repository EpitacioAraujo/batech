import { site } from '../site.config';
import { Logo } from './ui/Logo';

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-line py-9">
      <div className="flex items-center gap-[10px]">
        <Logo size={26} />
        <span className="font-display text-sm font-semibold">{site.brand}</span>
      </div>
      <p className="font-mono text-xs text-muted">{site.footer.note}</p>
    </footer>
  );
}
