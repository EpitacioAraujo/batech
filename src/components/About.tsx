import { site } from '../site.config';

export function About() {
  const { about } = site;
  return (
    <section data-reveal className="border-t border-b border-line py-14">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-center gap-12">
        <div>
          <h2 className="mb-4 font-display text-[26px] leading-[1.2] font-bold tracking-[-0.02em]">
            {about.heading}
          </h2>
          <p className="text-[15px] text-muted">{about.para}</p>
        </div>
        <div className="flex flex-col gap-5">
          {about.features.map((f) => (
            <div key={f.n} className="flex items-start gap-3.5">
              <span className="w-7 shrink-0 pt-0.5 font-mono text-[13px] text-amber">{f.n}</span>
              <span className="text-sm text-text">
                <b className="mb-[3px] block font-display text-[15px]">{f.title}</b>
                {f.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
