import { SectionHeader } from "./SectionHeader";
import { useContent } from "@/data/oria";

export const Atuacao = () => {
  const { FRENTES, UI } = useContent();
  return (
    <section id="atuacao" className="bg-background py-24 md:py-36">
      <div className="container-oria">
        <SectionHeader
          num={UI.atuacao.num}
          heading={
            <>
              {UI.atuacao.headingA}
              <em className="italic text-accent font-light">{UI.atuacao.headingB}</em>
            </>
          }
          intro={UI.atuacao.intro}
        />

        <div className="grid sm:grid-cols-2 border-t border-l border-rule reveal">
          {FRENTES.map((f) => (
            <article
              key={f.num}
              className="group p-7 sm:p-10 md:p-12 border-r border-b border-rule bg-background hover:bg-paper-warm transition-colors duration-300"
            >
              <div className="flex justify-between items-center mb-7 font-mono text-[11px] text-muted tracking-[0.18em]">
                <span>{UI.atuacao.frenteLabel} {f.num}</span>
              </div>
              <h3 className="font-serif-display text-[clamp(20px,4.5vw,28px)] font-normal leading-[1.15] tracking-[-0.015em] mb-4">
                {f.title}
              </h3>
              <p className="text-[15.5px] leading-[1.55] text-foreground font-medium mb-3">
                {f.bold}
              </p>
              <p className="text-[15px] leading-[1.6] text-ink-soft">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
