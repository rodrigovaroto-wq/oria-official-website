import logo from "@/assets/oria-logo-footer.png";
import { Link } from "react-router-dom";
import { useContent } from "@/data/oria";

export const Footer = () => {
  const { UI, NAV } = useContent();
  return (
    <footer className="bg-foreground text-background/70 pt-8 pb-6 border-t border-background/12 text-[13px]">
      <div className="container-oria">
        {/* Linha superior: logo + nav vertical à direita + Política de Privacidade */}
        <div className="flex items-start justify-between gap-8 pb-6 border-b border-background/12">
          {/* Logo 20% menor: era h-32 (~128px), agora h-[102px] */}
          <img
            src={logo}
            alt="Oria Partners"
            width={720}
            height={480}
            className="block w-auto"
            style={{ height: "102px", maxWidth: "100%" }}
          />

          {/* Lado direito: nav + privacidade */}
          <div className="flex flex-col items-end gap-3 text-[12px]">
            <Link
              to="/privacidade"
              className="hover:text-background transition-colors underline underline-offset-4 mb-1"
            >
              {UI.footer.privacy}
            </Link>
            {NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-background transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Linha inferior: copyright */}
        <div className="pt-4">
          <span>© {new Date().getFullYear()} Oria Partners. {UI.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
};
