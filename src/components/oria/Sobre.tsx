import { useContent } from "@/data/oria";

export const Sobre = () => {
  const { SOBRE } = useContent();
  return (
    <section id="sobre" className="bg-background pt-24 md:pt-36 pb-12 md:pb-20">
      <div className="container-oria">
        <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-8 md:gap-16 reveal">
          <h2 className="section-title-indent text-foreground font-medium text-[clamp(24px,3vw,36px)] tracking-tight leading-[1.15] md:pt-1">
            {SOBRE.eyebrow}
          </h2>
          <div className="flex flex-col gap-6">
            {SOBRE.paragraphs.map((p, i) => (
              <p key={i} className="text-[17px] md:text-[18px] leading-[1.7] text-ink-soft">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
