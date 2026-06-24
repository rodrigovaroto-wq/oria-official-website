import { useContent } from "@/data/oria";

export const Sobre = () => {
  const { SOBRE } = useContent();
  return (
    <section id="sobre" className="bg-background pt-24 md:pt-36 pb-12 md:pb-20">
      <div className="container-oria">
        <h2 className="text-foreground font-medium text-[clamp(28px,4vw,44px)] tracking-tight mb-10 md:mb-14 reveal">
          {SOBRE.eyebrow}
        </h2>
        <div className="max-w-[820px] flex flex-col gap-6 reveal">
          {SOBRE.paragraphs.map((p, i) => (
            <p key={i} className="text-[17px] md:text-[18px] leading-[1.7] text-ink-soft">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
