import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Language } from "@/content/site";

type VisualMode = "normal" | "contrast" | "grayscale" | "invert";
type A11ySettings = { textScale: number; visualMode: VisualMode; bigCursor: boolean; highlightLinks: boolean; highlightHeadings: boolean; readingGuide: boolean; reduceMotion: boolean; enhancedFocus: boolean };
const defaults: A11ySettings = { textScale: 100, visualMode: "normal", bigCursor: false, highlightLinks: false, highlightHeadings: false, readingGuide: false, reduceMotion: false, enhancedFocus: false };
type SiteContextValue = { language: Language; setLanguage: (language: Language) => void; settings: A11ySettings; updateSettings: (patch: Partial<A11ySettings>) => void; resetSettings: () => void };
const SiteContext = createContext<SiteContextValue | null>(null);

function readSettings(): A11ySettings {
  if (typeof window === "undefined") return defaults;
  try { return { ...defaults, ...JSON.parse(localStorage.getItem("bppa-accessibility") ?? "{}") }; } catch { return defaults; }
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [settings, setSettings] = useState<A11ySettings>(defaults);
  useEffect(() => { setLanguageState(sessionStorage.getItem("bppa-language") === "bn" ? "bn" : "en"); setSettings(readSettings()); }, []);
  useEffect(() => {
    const root = document.documentElement;
    root.lang = language === "bn" ? "bn" : "en";
    root.style.fontSize = `${settings.textScale}%`;
    root.dataset["visualMode"] = settings.visualMode;
    root.classList.toggle("big-cursor", settings.bigCursor);
    root.classList.toggle("highlight-links", settings.highlightLinks);
    root.classList.toggle("highlight-headings", settings.highlightHeadings);
    root.classList.toggle("reduce-motion", settings.reduceMotion);
    root.classList.toggle("enhanced-focus", settings.enhancedFocus);
    localStorage.setItem("bppa-accessibility", JSON.stringify(settings));
  }, [language, settings]);
  const value = useMemo<SiteContextValue>(() => ({ language, setLanguage: (next) => { setLanguageState(next); sessionStorage.setItem("bppa-language", next); }, settings, updateSettings: (patch) => setSettings((current) => ({ ...current, ...patch })), resetSettings: () => setSettings(defaults) }), [language, settings]);
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}
export function useSite() { const value = useContext(SiteContext); if (!value) throw new Error("useSite must be used within SiteProvider"); return value; }
