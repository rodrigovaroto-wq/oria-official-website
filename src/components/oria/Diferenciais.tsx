import { useContent } from "@/data/oria";

const HoverCard = ({ title, desc }: { title: string; desc: string }) => (
  <div
    className="group relative bg-background min-h-[180px] w-full overflow-hidden transition-colors duration-300"
    style={{ border: "1px solid #C0492E" }}
  >
    <div className="absolute inset-0 flex items-center justify-center p-5 text-center transition-opacity duration-300 group-hover:opacity-0">
      <h3 className="text-[15px] md:text-[16px] font-medium leading-snug text-foreground">
        {title}
      </h3>
    </div>
    <div
      className="absolute inset-0 flex items-center p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{ backgroundColor: "#11161D" }}
    >
      <p className="text-[13.5px] leading-[1.55]" style={{ color: "#F6F4EE" }}>
        {desc}
      </p>
    </div>
  </div>
);

export const Diferenciais = () => {
  const { PILARES, INEGOCIAVEIS, UI } = useContent();
  return (
    <section id="diferenciais" className="bg-background py-20 md:py-28">
      <div className="container-oria">
        <div className="mb-10 md:mb-14 reveal text-center max-w-[820px] mx-auto">
          <h2 className="text-foreground font-medium text-[clamp(26px,4vw,42px)] tracking-tight leading-[1.15] mb-6">
            {UI.diferenciais.headingA}
          </h2>
          {UI.diferenciais.intro && (
            <p className="text-[17px] md:text-[18px] leading-[1.65] text-foreground">
              {UI.diferenciais.intro}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 reveal">
          {PILARES.map((p) => (
            <HoverCard key={p.title} title={p.title} desc={p.desc} />
          ))}
        </div>

        <div className="mt-16 md:mt-20 reveal">
          <h3 className="section-title-indent text-foreground font-medium text-[clamp(18px,2.4vw,22px)] mb-6">
            {UI.diferenciais.inegociaveis}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {INEGOCIAVEIS.map((r) => (
              <HoverCard key={r.title} title={r.title} desc={r.desc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
