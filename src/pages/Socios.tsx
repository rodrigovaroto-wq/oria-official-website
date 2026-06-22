import { useEffect } from "react";
import { Nav } from "@/components/oria/Nav";
import { Footer } from "@/components/oria/Footer";
import { SectionHeader } from "@/components/oria/SectionHeader";
import { Contato } from "@/components/oria/Contato";
import { LinkedIn } from "@/components/oria/Icons";
import { useContent } from "@/data/oria";
import { useSEO } from "@/hooks/useSEO";

const SCHEMA_SOCIOS = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://oriapartners.com/socios#webpage",
    url: "https://oriapartners.com/socios",
    name: "Sócios — Oria Partners | Enzo Pierobom e Gustavo Gregori",
    description:
      "Enzo Pierobom (CEO) e Gustavo Gregori (COO), sócios-fundadores da Oria Partners. +20 anos de experiência cada em reestruturação financeira, crédito corporativo e mercado de capitais.",
    isPartOf: { "@id": "https://oriapartners.com/#website" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://oriapartners.com/" },
        { "@type": "ListItem", position: 2, name: "Sócios", item: "https://oriapartners.com/socios" },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://oriapartners.com/socios#enzo-pierobom",
    name: "Enzo Pierobom",
    jobTitle: "Sócio-Fundador & CEO",
    worksFor: { "@id": "https://oriapartners.com/#organization" },
    description:
      "Sócio-Fundador e CEO da Oria Partners. Engenheiro de Produção (USP), MBA Fundação Dom Cabral, conselheiro pelo IBGC. +18 anos no mercado financeiro. Ex-ABN AMRO Real e Santander. Gestor da Metalfrio durante reestruturação operacional 2021-2022.",
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Universidade de São Paulo (USP)" },
      { "@type": "CollegeOrUniversity", name: "Fundação Dom Cabral" },
    ],
    knowsAbout: [
      "Reestruturação financeira",
      "Crédito corporativo",
      "Mercado de capitais",
      "M&A",
      "Turnaround",
      "Gestão interina",
    ],
    sameAs: "https://www.linkedin.com/in/enzo-pierobom/",
    url: "https://oriapartners.com/socios",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://oriapartners.com/socios#gustavo-gregori",
    name: "Gustavo Gregori",
    jobTitle: "Sócio-Fundador & COO",
    worksFor: { "@id": "https://oriapartners.com/#organization" },
    description:
      "Sócio-Fundador e COO da Oria Partners. Experiência focada em reestruturação financeira, crédito corporativo e situações complexas. Ex-PIMCO, Morgan Stanley, Deutsche Bank, HSBC, Santander e Bradesco BBI.",
    knowsAbout: [
      "Reestruturação financeira",
      "Crédito corporativo",
      "Situações especiais",
      "Coordenação de stakeholders",
      "Turnaround operacional",
    ],
    sameAs: "https://www.linkedin.com/in/gustavogregori/",
    url: "https://oriapartners.com/socios",
  },
];

const toRoman = (n: number) => {
  const map: [number, string][] = [
    [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
    [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
  ];
  let r = "";
  for (const [v, s] of map) { while (n >= v) { r += s; n -= v; } }
  return r;
};

const renderBio = (paragraphs: string[]) =>
  paragraphs.map((p, i) => {
    const parts = p.split(/(\*\*[^*]+\*\*)/g).map((seg, idx) => {
      if (seg.startsWith("**") && seg.endsWith("**")) {
        return (
          <strong key={idx} className="font-medium text-foreground">
            {seg.slice(2, -2)}
          </strong>
        );
      }
      return <span key={idx}>{seg}</span>;
    });
    return (
      <p key={i} className="text-[15.5px] leading-[1.65] text-ink-soft mb-4 last:mb-0">
        {parts}
      </p>
    );
  });

const SociosPage = () => {
  const { SOCIOS, UI } = useContent();

  useSEO({
    title: "Sócios — Enzo Pierobom e Gustavo Gregori | Oria Partners",
    description:
      "Enzo Pierobom e Gustavo Gregori, sócios-fundadores da Oria Partners. +20 anos de experiência em reestruturação financeira, crédito corporativo, M&A e mercado de capitais. Ex-PIMCO, Morgan Stanley, Santander.",
    canonical: "https://oriapartners.com/socios",
    schema: SCHEMA_SOCIOS,
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
              num={UI.socios.num}
              heading={
                <>
                  {UI.socios.headingA}
                  <em className="italic text-accent font-light">{UI.socios.headingB}</em>
                </>
              }
              intro={UI.socios.intro}
            />

            <div className="grid sm:grid-cols-2 border-t border-l border-rule reveal">
              {SOCIOS.map((s) => (
                <article key={s.name} className="p-7 sm:p-10 md:p-12 border-r border-b border-rule bg-background">
                  <div className="mb-6">
                    <div className="font-mono-label text-[10px] text-accent mb-2">{s.role}</div>
                    <h3 className="font-serif-display text-[clamp(22px,5vw,32px)] font-normal leading-[1.1] tracking-[-0.02em] mb-2 break-words">
                      {s.name}
                    </h3>
                    {s.linkedin && (
                      <a
                        href={s.linkedin}
                        target="_blank"
                        rel="noreferrer noopener"
                        referrerPolicy="no-referrer"
                        aria-label={`${UI.socios.linkedinAria} ${s.name}`}
                        className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors text-[12px] font-mono-label"
                      >
                        <LinkedIn className="w-4 h-4" />
                        LinkedIn →
                      </a>
                    )}
                  </div>

                  <ul className="list-none mb-8 border-t border-rule">
                    {s.highlights.map((h, i) => (
                      <li key={i} className="flex gap-4 py-3 border-b border-rule text-[14px] leading-[1.5] text-ink-soft">
                        <span className="font-mono text-[10px] text-muted tracking-[0.15em] w-5 shrink-0 pt-1">
                          {toRoman(i + 1)}
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="w-12 h-px bg-foreground my-7" />

                  <div>{renderBio(s.bio)}</div>
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

export default SociosPage;
