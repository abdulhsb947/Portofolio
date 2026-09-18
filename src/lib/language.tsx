/**
 * Pengatur bahasa (ID / EN).
 *
 * File ini HANYA mengurus bahasa mana yang aktif.
 * Semua TULISAN/KONTEN ada di dalam file halamannya masing-masing,
 * contoh: teks halaman About ada di src/routes/about.tsx.
 *
 * Cara pakai di halaman/komponen:
 *   const { lang } = useLang();
 *   const c = content[lang];
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "id" | "en";

/** Bentuk konten dua bahasa: { id: ..., en: ... } */
export type Bilingual<T> = Record<Lang, T>;

const STORAGE_KEY = "portfolio-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "id") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang harus dipakai di dalam LanguageProvider");
  return ctx;
}
