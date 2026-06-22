import { useEffect } from "react";
import { Nav } from "@/components/oria/Nav";
import { Footer } from "@/components/oria/Footer";
import { useContent } from "@/data/oria";
import { useSEO } from "@/hooks/useSEO";

const PrivacidadePage = () => {
  const { UI } = useContent();

  useSEO({
    title: "Política de Privacidade | Oria Partners",
    description:
      "Política de privacidade da Oria Partners. Informações sobre coleta, uso e proteção de dados pessoais conforme a LGPD (Lei nº 13.709/2018).",
    canonical: "https://oriapartners.com/privacidade",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { title, intro1, intro2, sections } = UI.privacidade;

  return (
    <>
      <Nav />
      <main className="pt-32 md:pt-40 pb-24">
        <div className="container-oria max-w-[820px]">
          <h1 className="font-serif-display text-[clamp(28px,6vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] mb-10">
            {title}
          </h1>
          <p className="text-[15.5px] leading-[1.65] text-ink-soft mb-5">{intro1}</p>
          <p className="text-[15.5px] leading-[1.65] text-ink-soft mb-12">{intro2}</p>

          {sections.map((s, i) => (
            <section key={i} className="mb-10">
              <h2 className="font-serif-display text-[20px] font-normal mb-4 tracking-[-0.01em]">
                {s.title}
              </h2>
              {"paragraphs" in s &&
                s.paragraphs?.map((p: string, j: number) => (
                  <p key={j} className="text-[15.5px] leading-[1.65] text-ink-soft mb-4">
                    {p}
                  </p>
                ))}
              {"items" in s && s.items && (
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  {s.items.map((item: string, j: number) => (
                    <li key={j} className="text-[15px] leading-[1.6] text-ink-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {"note" in s && s.note && (
                <p className="text-[14px] text-muted mt-4 italic">{s.note}</p>
              )}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacidadePage;
