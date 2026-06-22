import { useEffect } from "react";
import { Nav } from "@/components/oria/Nav";
import { Footer } from "@/components/oria/Footer";
import { SectionHeader } from "@/components/oria/SectionHeader";
import { Contato } from "@/components/oria/Contato";
import { useContent } from "@/data/oria";
import { useSEO } from "@/hooks/useSEO";

const SCHEMA_ATUACAO = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://oriapartners.com/atuacao#webpage",
  url: "https://oriapartners.com/atuacao",
  name: "Atuação — Oria Partners | Reestruturação Financeira",
  description:
    "Frentes integradas de atuação: diagnóstico independente, gestão de liquidez, reestruturação financeira e operacional, transações em situação especial e gestão interina.",
  isPartOf: { "@id": "https://oriapartners.com/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://oriapartners.com/" },
      { "@type": "ListItem", position: 2, name: "Atuação", item: "https://oriapartners.com/atuacao" },
    ],
  },
};

const AtuacaoPage = () => {
  const { FRENTES, METODO, UI } = useContent();

  useSEO({
    title: "Atuação — Diagnóstico, Reestruturação e Transações | Oria Partners",
    description:
      "Diagnóstico independente, gestão de liquidez e estrutura de capital, reestruturação financeira e operacional, transações em situação especial e gestão interina. Saiba como atuamos.",
    canonical: "https://oriapartners.com/atuacao",
    schema: SCHEMA_ATUACAO,
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
              num={UI.atuacao.pageNum}
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
                  className="p-7 sm:p-10 md:p-12 border-r border-b border-rule bg-background"
                >
                  <div className="font-mono text-[11px] text-muted tracking-[0.18em] mb-6">
                    {UI.atuacao.frenteLabel} {f.num}
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

        <section className="bg-paper-warm py-24 md:py-36">
          <div className="container-oria">
            <SectionHeader
              num={UI.atuacao.metodoNum}
              heading={
                <>
                  {UI.atuacao.metodoHeadingA}
                  <em className="italic text-accent font-light">{UI.atuacao.metodoHeadingB}</em>
                </>
              }
            />
            <div className="grid sm:grid-cols-2 gap-px bg-rule border border-rule reveal">
              {METODO.map((m) => (
                <article
                  key={m.num}
                  className="bg-paper-warm p-7 sm:p-10 md:p-12 flex flex-col gap-5 min-h-[200px] sm:min-h-[240px]"
                >
                  <div className="font-serif-display italic text-base text-accent">{m.num}</div>
                  <h3 className="font-serif-display text-[clamp(20px,4.5vw,26px)] font-normal leading-[1.2] tracking-[-0.015em]">
                    {m.title}
                  </h3>
                  <p className="text-[15.5px] leading-[1.6] text-ink-soft">{m.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Contato />
      </main>
      <Footer />
    </>
  );
};

export default AtuacaoPage;
