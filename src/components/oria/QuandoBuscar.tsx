import { SectionHeader } from "./SectionHeader";
import { ArrowRight } from "./Icons";
import { useContent } from "@/data/oria";

export const QuandoBuscar = () => {
  const { GATILHOS, UI } = useContent();
  return (
    <section id="quando-buscar" className="bg-foreground text-background py-24 md:py-36">
      <div className="container-oria">
        <SectionHeader
          invert
          num={UI.quandoBuscar.num}
          heading={
            <>
              {UI.quandoBuscar.headingA}
              <em className="italic font-light text-accent-soft">{UI.quandoBuscar.headingB}</em>
            </>
          }
          intro={UI.quandoBuscar.intro}
        />

        <div className="grid md:grid-cols-2 gap-px bg-background/15 border border-background/15 reveal">
          {GATILHOS.map((g) => (
            <article key={g.title} className="bg-foreground p-6 sm:p-9 md:p-10 flex gap-4 sm:gap-6 items-start">
              <span className="font-serif-display italic text-2xl text-accent-soft font-light shrink-0 leading-none min-w-[28px]">
                {g.mark}
              </span>
              <div className="flex-1 min-w-0">
                <h4 className="font-serif-display text-[clamp(18px,4.5vw,22px)] font-normal leading-[1.2] tracking-[-0.01em] mb-3">
                  {g.title}
                </h4>
                <p className="text-[14.5px] leading-[1.6] text-background/75 font-light mb-4">
                  {g.desc}
                  {g.italicSuffix && (
                    <>
                      {" "}
                      <em className="italic">{g.italicSuffix}</em>
                    </>
                  )}
                </p>
                {g.bullets && (
                  <ul className="list-none flex flex-col gap-1.5 border-t border-background/15 pt-4">
                    {g.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-[13px] leading-[1.5] text-background/65 font-light flex gap-3"
                      >
                        <span className="text-accent-soft shrink-0">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 md:mt-20 pt-12 md:pt-14 border-t border-background/15 flex flex-col gap-10">
          <div className="font-serif-display italic font-light text-[clamp(18px,3.2vw,28px)] leading-[1.3] max-w-[720px] flex flex-col gap-4">
            <p>{UI.quandoBuscar.quoteA}</p>
            <p>{UI.quandoBuscar.quoteB}</p>
          </div>
          <a href="#contato" className="btn-inverted self-start">
            {UI.quandoBuscar.cta}
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};
