import { ArrowRight } from "./Icons";
import { useContent } from "@/data/oria";
import { AlertTriangle, Banknote, Hourglass, type LucideIcon } from "lucide-react";

const GATILHO_ICONS: LucideIcon[] = [AlertTriangle, Banknote, Hourglass];

export const QuandoBuscar = () => {
  const { GATILHOS, UI } = useContent();
  return (
    <section
      id="quando-buscar"
      style={{ backgroundColor: "#11161D", color: "#F6F4EE" }}
      className="py-14 md:py-16"
    >
      <div className="container-oria">
        {/* DESKTOP: layout de 2 colunas (inalterado) */}
        <div className="hidden md:grid grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="font-medium tracking-tight text-[clamp(22px,2.6vw,30px)] leading-[1.2] mb-7" style={{ color: "#F6F4EE" }}>
              {UI.quandoBuscar.headingA}
              <br />
              <span className="underline underline-offset-[6px] decoration-[1px]">
                {UI.quandoBuscar.headingB}
              </span>
            </h2>
            <a href="#contato" className="btn-inverted">
              {UI.quandoBuscar.cta}
              <ArrowRight />
            </a>
          </div>
          <div className="flex flex-col">
            {GATILHOS.map((g, i) => {
              const Icon = GATILHO_ICONS[i % GATILHO_ICONS.length];
              return (
                <div
                  key={g.title}
                  className="py-5 first:pt-0 flex gap-4"
                  style={{ borderBottom: "1px solid rgba(246,244,238,0.18)" }}
                >
                  <Icon
                    aria-hidden="true"
                    className="shrink-0 mt-[2px]"
                    style={{ width: 28, height: 28, color: "#C0492E" }}
                    strokeWidth={1.5}
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-[16px] md:text-[17px] leading-snug mb-2" style={{ color: "#F6F4EE" }}>
                      {g.title}
                    </h4>
                    <p className="text-[14px] md:text-[14.5px] leading-[1.55]" style={{ color: "#F6F4EE", opacity: 0.78 }}>
                      {g.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE: coluna única — heading, lista, depois botão */}
        <div className="md:hidden flex flex-col gap-8">
          <div>
            <h2 className="font-medium tracking-tight text-[clamp(22px,5.5vw,30px)] leading-[1.2]" style={{ color: "#F6F4EE" }}>
              {UI.quandoBuscar.headingA}
              <br />
              <span className="underline underline-offset-[6px] decoration-[1px]">
                {UI.quandoBuscar.headingB}
              </span>
            </h2>
          </div>

          <div className="flex flex-col">
            {GATILHOS.map((g, i) => {
              const Icon = GATILHO_ICONS[i % GATILHO_ICONS.length];
              return (
                <div
                  key={g.title}
                  className="py-5 first:pt-0 flex gap-4"
                  style={{ borderBottom: "1px solid rgba(246,244,238,0.18)" }}
                >
                  <Icon
                    aria-hidden="true"
                    className="shrink-0 mt-[2px]"
                    style={{ width: 28, height: 28, color: "#C0492E" }}
                    strokeWidth={1.5}
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-[16px] leading-snug mb-2" style={{ color: "#F6F4EE" }}>
                      {g.title}
                    </h4>
                    <p className="text-[14px] leading-[1.55]" style={{ color: "#F6F4EE", opacity: 0.78 }}>
                      {g.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Botão depois da lista no mobile */}
          <a href="#contato" className="btn-inverted self-start">
            {UI.quandoBuscar.cta}
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};
