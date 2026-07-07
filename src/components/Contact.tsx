import { site } from '../site.config';
import { Button } from './ui/Button';

export function Contact() {
  return (
    <section id="contato" data-reveal className="pt-20 pb-[100px] text-center">
      <h2 className="mx-auto mb-4 max-w-[620px] font-display text-[clamp(26px,4vw,38px)] leading-[1.15] font-bold tracking-[-0.02em]">
        {site.contact.heading}
      </h2>
      <p className="mb-[34px] text-muted">{site.contact.sub}</p>
      <Button href={site.whatsappUrl} target="_blank" size="lg">
        {site.contact.cta}
      </Button>
    </section>
  );
}
