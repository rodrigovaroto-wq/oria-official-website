import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "pt" | "en";

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const STORAGE_KEY = "lang";

const readInitialLang = (): Lang => {
  if (typeof window === "undefined") return "pt";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "pt") return stored;
  // Backward compatibility: migrate legacy key if present
  const legacy = window.localStorage.getItem("oria-lang");
  if (legacy === "en" || legacy === "pt") {
    window.localStorage.setItem(STORAGE_KEY, legacy);
    return legacy;
  }
  return "pt";
};

const LanguageCtx = createContext<Ctx>({ lang: "pt", setLang: () => {} });

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  return <LanguageCtx.Provider value={{ lang, setLang }}>{children}</LanguageCtx.Provider>;
};

export const useLang = () => useContext(LanguageCtx);
