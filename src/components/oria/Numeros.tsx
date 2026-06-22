import { useContent } from "@/data/oria";

export const Numeros = () => {
  const { NUMEROS, UI } = useContent();
  return (
    <section
      aria-label={UI.numeros.label}
      className="bg-paper-warm border-y border-rule py-16 md:py-20"
    >
      <div className="container-oria">
        <div className="font-mono-label text-[11px] text-muted mb-10 flex items-center gap-4">
          <span className="block w-8 h-px bg-foreground" />
          {UI.numeros.label}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule reveal">
          {NUMEROS.map((n) => (
            <div key={n.label} className="bg-paper-warm p-7 md:p-9">
              <div className="font-serif-display font-light leading-none tracking-[-0.02em] text-[clamp(36px,4vw,52px)] mb-5">
                <span className="text-accent">{n.value}</span>{n.suffix}{n.prefix}
              </div>
              <div className="font-mono-label text-[10px] text-foreground">{n.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
