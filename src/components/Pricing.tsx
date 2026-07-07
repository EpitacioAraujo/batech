import { site } from '../site.config';
import { Button } from './ui/Button';

export function Pricing() {
  return (
    <section className="py-16">
      <div
        data-reveal
        className="relative grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] items-center gap-7 overflow-hidden rounded-2xl border border-line bg-panel p-11"
      >
        <div
          className="pointer-events-none absolute -top-10 -right-[30px] h-[180px] w-[180px]"
          style={{ background: 'radial-gradient(circle,rgba(242,184,75,0.10),transparent 70%)' }}
        />
        <div>
          <div className="font-mono text-[44px] font-medium text-amber">
            {site.price} <span className="text-[15px] text-muted">pagamento único</span>
          </div>
          <ul className="mt-5 flex list-none flex-col gap-[11px]">
            {site.pricing.features.map((f) => (
              <li key={f} className="flex items-start gap-[10px] text-sm text-muted">
                <span className="text-amber">—</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
        <Button href={site.whatsappUrl} target="_blank" className="justify-self-start">
          {site.pricing.cta}
        </Button>
      </div>
    </section>
  );
}
