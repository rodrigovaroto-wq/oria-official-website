import { useEffect, useState } from "react";
import { Nav } from "@/components/oria/Nav";
import { Footer } from "@/components/oria/Footer";
import { SectionHeader } from "@/components/oria/SectionHeader";
import { Contato } from "@/components/oria/Contato";
import { useContent } from "@/data/oria";
import { useSEO } from "@/hooks/useSEO";

const SCHEMA_CASOS = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://oriapartners.com/casos#webpage",
  url: "https://oriapartners.com/casos",
  name: "Casos — Oria Partners | Reestruturações e Turnarounds",
  description:
    "Casos reais de reestruturação financeira, turnaround, desinvestimento e gestão interina conduzidos pela Oria Partners. Anonimizados para preservar confidencialidade.",
  isPartOf: { "@id": "https://oriapartners.com/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://oriapartners.com/" },
      { "@type": "ListItem", position: 2, name: "Casos", item: "https://oriapartners.com/casos" },
    ],
  },
};

const CasosPage = () => {
  const { CASOS, TRACK_RECORD, UI } = useContent();
  const [open, setOpen] = useState<number | null>(null);

  useSEO({
    title: "Casos — Reestruturações e Turnarounds Conduzidos | Oria Partners",
    description:
      "Casos reais de reestruturação financeira, turnaround e situações especiais: industrial, serviços corporativos, empresa familiar e gestão interina. Contexto, desafio e resultado.",
    canonical: "https://oriapartners.com/casos",
    schema: SCHEMA_CASOS,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main className="pt-32 md:pt-40">
        <section className="bg-background py-16 md:py-24">
          <div className="container-oria">
            <SectionHeader
              num={UI.casos.num}
              heading={
                <>
                  {UI.casos.headingA}
                  <em className="italic text-accent font-light">{UI.casos.headingB}</em>
                </>
              }
              intro={UI.casos.intro}
            />

            <div className="border-t border-rule reveal">
              {CASOS.map((c, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className="border-b border-rule">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className={`w-full text-left grid grid-cols-1 md:grid-cols-[160px_1fr_auto] gap-3 md:gap-12 items-start md:items-center bg-transparent border-0 cursor-pointer transition-all duration-300 ${
                        isOpen ? "py-8 md:py-11" : "py-7 md:py-11 hover:pl-4"
                      }`}
                    >
                      <span className="font-mono-label text-[10px] text-accent">{c.tag}</span>
                      <h3 className="font-serif-display text-[clamp(18px,4.5vw,24px)] font-normal leading-[1.2] tracking-[-0.01em]">
                        {c.title}
                      </h3>
                      <span className={`font-mono text-[12px] tracking-[0.15em] uppercase whitespace-nowrap ${isOpen ? "text-foreground" : "text-muted"}`}>
                        {isOpen ? UI.casos.collapse : UI.casos.expand}
                      </span>
                    </button>

                    <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? "max-h-[2000px]" : "max-h-0"}`}>
                      <div className="grid md:grid-cols-[160px_1fr] gap-6 md:gap-12 pb-14 pt-2">
                        <div />
                        <div className="max-w-[820px] flex flex-col gap-7">
                          {(
                            [
                              [UI.casos.labels.setor, c.setor],
                              [UI.casos.labels.porte, c.porte],
                              [UI.casos.labels.contexto, c.contexto],
                              [UI.casos.labels.desafio, c.desafio],
                              [UI.casos.labels.atuacao, c.atuacao],
                              [UI.casos.labels.resultado, c.resultado],
                            ] as const
                          ).map(([label, text]) => (
                            <div key={label} className="grid md:grid-cols-[120px_1fr] gap-2 md:gap-8 items-start">
                              <div className="font-mono-label text-[10px] text-muted pt-1">— {label}</div>
                              <p className="text-[16px] leading-[1.65] text-ink-soft">{text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-20 pt-12 border-t border-rule grid md:grid-cols-[180px_1fr] gap-6 md:gap-20 items-start">
              <div className="font-mono-label text-[11px] text-muted pt-2">— {UI.casos.track}</div>
              <p className="font-serif-display text-[22px] leading-[1.4] font-light max-w-[820px] text-ink-soft">
                {TRACK_RECORD}
              </p>
            </div>
          </div>
        </section>

        <Contato />
      </main>
      <Footer />
    </>
  );
};

export default CasosPage;
