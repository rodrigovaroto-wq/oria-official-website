import { useEffect, useState } from "react";
import { useContent } from "@/data/oria";

const STORAGE_KEY = "cookies_accepted";

export const CookieBanner = () => {
  const { UI } = useContent();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Defer to after first paint so the banner doesn't compete for LCP
    const show = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === null) setVisible(true);
    };
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(show, { timeout: 1500 });
    } else {
      setTimeout(show, 800);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, "false");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={UI.cookies.dialogAria}
      className="fixed bottom-0 left-0 right-0 w-full z-[9999] bg-foreground text-background border-t border-background/10 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] animate-in fade-in slide-in-from-bottom-2 duration-200"
    >
      <div className="container-oria py-3 md:py-6 flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
        <p className="text-[12px] md:text-[14px] leading-[1.45] md:leading-[1.55] text-background/80 flex-1">
          {UI.cookies.message}{" "}
          <a
            href="/privacidade"
            target="_blank"
            rel="noopener noreferrer"
            className="text-background underline underline-offset-4 hover:text-accent-soft transition-colors"
          >
            {UI.cookies.privacyLink}
          </a>
          .
        </p>
        <div className="flex items-center gap-2 md:gap-3 justify-end shrink-0">
          <button
            type="button"
            onClick={handleDecline}
            className="px-3 py-1.5 md:px-5 md:py-2.5 text-[12px] md:text-[13px] font-mono-label tracking-[0.05em] border border-background/30 text-background hover:bg-background/10 transition-colors"
          >
            {UI.cookies.decline}
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="px-3 py-1.5 md:px-5 md:py-2.5 text-[12px] md:text-[13px] font-mono-label tracking-[0.05em] bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
          >
            {UI.cookies.accept}
          </button>
        </div>
      </div>
    </div>
  );
};
