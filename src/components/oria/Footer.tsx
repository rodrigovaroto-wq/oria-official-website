import logo from "@/assets/oria-logo-footer.png";
import { Link } from "react-router-dom";
import { useContent } from "@/data/oria";

export const Footer = () => {
  const { UI } = useContent();
  return (
    <footer className="bg-foreground text-background/70 pt-16 pb-10 border-t border-background/12 text-[13px]">
      <div className="container-oria">
        <div className="h-40 flex items-center mb-12">
          <img src={logo} alt="Oria Partners" width={720} height={480} className="h-full w-auto block max-w-full" />
        </div>
        <div className="flex flex-wrap justify-between items-center gap-4 pt-6 border-t border-background/12">
          <span>© {new Date().getFullYear()} Oria Partners. {UI.footer.rights}</span>
          <Link to="/privacidade" className="hover:text-background transition-colors underline underline-offset-4">
            {UI.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
};
