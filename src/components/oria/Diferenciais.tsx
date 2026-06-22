import { SectionHeader } from "./SectionHeader";
import { useContent } from "@/data/oria";

export const Diferenciais = () => {
  const { PILARES, INEGOCIAVEIS, UI } = useContent();
  return (
    <section id="diferenciais" className="bg-paper-warm py-24 md:py-36">
      <div className="container-oria">
        <SectionHeader
          num={UI.diferenciais.num}
          heading={
            <>
              {UI.diferenciais.headingA}
              <em className="italic text-accent font-light">{UI.diferenciais.headingB}</em>
            </>
          }
          intro={UI.diferenciais.intro}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule reveal">
          {PILARES.map((p) => (
            <article key={p.num} className="bg-paper-warm p-6 sm:p-9 md:p-10 flex flex-col">
              <div className="font-serif-display italic text-[clamp(34px,6vw,44px)] font-light text-accent leading-none mb-7">
                {p.num}
              </div>
              <h3 className="font-serif-display text-[clamp(18px,4vw,22px)] font-normal leading-[1.2] tracking-[-0.015em] mb-4">
                {p.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-ink-soft">{p.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-24 md:mt-28 reveal">
          <div className="mb-12">
            <div className="font-mono-label text-[11px] text-muted mb-6">
              — {UI.diferenciais.inegociaveis}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {INEGOCIAVEIS.map((r) => (
              <div key={r.title} className="p-6 sm:p-9 bg-background border-l-2 border-accent">
                <h5 className="font-serif-display text-[clamp(18px,4vw,21px)] font-normal mb-4 leading-[1.2] tracking-[-0.01em]">
                  {r.title}
                </h5>
                <p className="text-[15px] leading-[1.6] text-ink-soft">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
