import { SectionHeader } from "./SectionHeader";
import { useContent } from "@/data/oria";

export const Sobre = () => {
  const { SOBRE, UI } = useContent();
  return (
    <section id="sobre" className="bg-background pt-24 md:pt-36 pb-12 md:pb-20">
      <div className="container-oria">
        <SectionHeader num={UI.sobre.num} heading={SOBRE.heading} />
        <div className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-20 reveal">
          <div className="font-mono-label text-[11px] text-muted">— {SOBRE.eyebrow}</div>
          <div className="max-w-[760px] flex flex-col gap-5">
            {SOBRE.paragraphs.map((p, i) => (
              <p key={i} className="text-[17px] leading-[1.65] text-ink-soft font-light">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
