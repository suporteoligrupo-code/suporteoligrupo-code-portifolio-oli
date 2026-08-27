"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { languageOptions, type Language } from "../app/data/i18n";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLanguage(value: string | null): value is Language {
  return value === "pt" || value === "en" || value === "ru";
}

function getLanguageSnapshot(): Language {
  const requested = new URL(window.location.href).searchParams.get("lang");
  const stored = window.localStorage.getItem("oli-language");
  return isLanguage(requested) ? requested : isLanguage(stored) ? stored : "pt";
}

function subscribeToLanguage(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener("oli-language-change", callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener("oli-language-change", callback);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore<Language>(
    subscribeToLanguage,
    getLanguageSnapshot,
    () => "pt",
  );

  useEffect(() => {
    const option = languageOptions.find((item) => item.code === language);
    document.documentElement.lang = option?.htmlLang ?? "pt-BR";
    document.documentElement.dataset.language = language;
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    const url = new URL(window.location.href);
    if (nextLanguage === "pt") url.searchParams.delete("lang");
    else url.searchParams.set("lang", nextLanguage);
    window.localStorage.setItem("oli-language", nextLanguage);
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
    window.dispatchEvent(new Event("oli-language-change"));
  }, []);

  const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
