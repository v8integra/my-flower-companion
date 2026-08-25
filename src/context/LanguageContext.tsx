import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { LangCode, t as translate, TRANSLATIONS } from "@/translations";

const STORAGE_KEY = "myflowercompanion_lang";
const DEFAULT_LANG: LangCode = "en";

interface LanguageContextValue {
  lang: LangCode;
  setLang: (code: LangCode) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: DEFAULT_LANG,
  setLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(DEFAULT_LANG);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && stored in TRANSLATIONS) {
      setLangState(stored as LangCode);
    }
  }, []);

  const setLang = useCallback((code: LangCode) => {
    setLangState(code);
    localStorage.setItem(STORAGE_KEY, code);
  }, []);

  const t = useCallback(
    (key: string, params?: Record<string, string | number>) => translate(lang, key, params),
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
