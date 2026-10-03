import { useEffect, useRef, useState } from "react";
import { Accessibility, Check, ExternalLink, Minus, Plus, RotateCcw, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSite } from "@/context/site-context";

export function AccessibilityMenu() {
  const { language, settings, updateSettings, resetSettings } = useSite();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const l = (en: string, bn: string) => language === "en" ? en : bn;
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    panelRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); triggerRef.current?.focus(); } };
    document.addEventListener("keydown", close);
    return () => { document.removeEventListener("keydown", close); if (previous && previous !== triggerRef.current) previous.focus(); };
  }, [open]);
  return <>
    <Button ref={triggerRef} variant="outline" className="min-h-11 border-primary/30 bg-background px-3" aria-label={l("Accessibility Options", "অ্যাক্সেসিবিলিটি অপশন")} aria-expanded={open} aria-controls="accessibility-panel" onClick={() => setOpen(true)}><Accessibility aria-hidden="true"/><span className="hidden xl:inline">{l("Accessibility", "অ্যাক্সেসিবিলিটি")}</span></Button>
    {open && <div className="fixed inset-0 z-50 bg-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) { setOpen(false); triggerRef.current?.focus(); } }}><div ref={panelRef} id="accessibility-panel" role="dialog" aria-modal="true" aria-labelledby="a11y-title" className="ml-auto flex h-dvh w-full max-w-md flex-col bg-background shadow-2xl">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center border-b border-border px-5 py-4"><div className="min-w-0"><p className="text-xs font-bold uppercase tracking-[0.14em] text-accent-strong">BPPA</p><h2 id="a11y-title" className="truncate font-display text-xl font-bold">{l("Accessibility Options", "অ্যাক্সেসিবিলিটি অপশন")}</h2></div><Button variant="ghost" size="icon" className="min-h-11 min-w-11" aria-label={l("Close accessibility options", "অ্যাক্সেসিবিলিটি অপশন বন্ধ করুন")} onClick={() => { setOpen(false); triggerRef.current?.focus(); }}><X /></Button></div>
      <div className="overflow-y-auto p-5"><section aria-labelledby="text-size"><h3 id="text-size" className="font-bold">{l("Text size", "টেক্সটের আকার")}</h3><div className="mt-3 grid grid-cols-3 gap-2"><Button variant="outline" className="min-h-11" onClick={() => updateSettings({ textScale: Math.max(90, settings.textScale - 10) })}><Minus/>{l("Decrease", "কমান")}</Button><div className="grid place-items-center border border-border text-sm font-bold" aria-live="polite">{settings.textScale}%</div><Button variant="outline" className="min-h-11" onClick={() => updateSettings({ textScale: Math.min(140, settings.textScale + 10) })}><Plus/>{l("Increase", "বাড়ান")}</Button></div><Button variant="ghost" className="mt-2 min-h-11 w-full" onClick={() => updateSettings({ textScale: 100 })}><RotateCcw/>{l("Reset text", "টেক্সট রিসেট")}</Button></section>
      <section className="mt-7 border-t border-border pt-6" aria-labelledby="display-mode"><h3 id="display-mode" className="font-bold">{l("Display mode", "ডিসপ্লে মোড")}</h3><div className="mt-3 grid grid-cols-2 gap-2">{([ ["normal", "Normal", "স্বাভাবিক"], ["contrast", "High contrast", "উচ্চ কনট্রাস্ট"], ["grayscale", "Grayscale", "ধূসর স্কেল"], ["invert", "Invert colors", "রঙ উল্টান"] ] as const).map(([value,en,bn]) => <Button key={value} variant={settings.visualMode === value ? "default" : "outline"} className="min-h-11 whitespace-normal" onClick={() => updateSettings({ visualMode: value })}>{settings.visualMode === value && <Check/>}{l(en,bn)}</Button>)}</div></section>
      <section className="mt-7 border-t border-border pt-6" aria-labelledby="assistance"><h3 id="assistance" className="font-bold">{l("Reading assistance", "পড়ার সহায়তা")}</h3><div className="mt-3 space-y-2">{([
        ["bigCursor", "Big cursor", "বড় কার্সর"], ["highlightLinks", "Highlight links", "লিংক হাইলাইট"], ["highlightHeadings", "Highlight headings", "শিরোনাম হাইলাইট"], ["readingGuide", "Reading guide", "রিডিং গাইড"], ["reduceMotion", "Reduce motion", "গতি কমান"], ["enhancedFocus", "Enhanced focus indicator", "উন্নত ফোকাস নির্দেশক"]
      ] as const).map(([key,en,bn]) => <Button key={key} variant={settings[key] ? "default" : "outline"} className="min-h-11 w-full justify-between" aria-pressed={settings[key]} onClick={() => updateSettings({ [key]: !settings[key] })}><span>{l(en,bn)}</span>{settings[key] && <Check/>}</Button>)}</div></section>
      <a href="https://www.nvaccess.org/download/" target="_blank" rel="noreferrer" className="mt-7 flex min-h-11 items-center justify-between border border-border px-4 font-bold text-primary hover:bg-muted">{l("Download NVDA Screen Reader", "NVDA স্ক্রিন রিডার ডাউনলোড")}<ExternalLink className="size-4" aria-hidden="true"/></a><p className="mt-2 text-xs leading-5 text-muted-foreground">{l("NVDA is one of several screen readers. This link opens the official NV Access website.", "NVDA একাধিক স্ক্রিন রিডারের একটি। লিংকটি অফিসিয়াল NV Access ওয়েবসাইট খুলবে।")}</p>
      <Button variant="outline" className="mt-7 min-h-11 w-full border-destructive text-destructive" onClick={resetSettings}><RotateCcw/>{l("Reset all accessibility settings", "সব অ্যাক্সেসিবিলিটি সেটিংস রিসেট")}</Button></div>
    </div></div>}
  </>;
}

export function ReadingGuide() {
  const { settings } = useSite();
  const [top, setTop] = useState(0);
  useEffect(() => { if (!settings.readingGuide) return; const move = (event: PointerEvent) => setTop(event.clientY); window.addEventListener("pointermove", move, { passive: true }); return () => window.removeEventListener("pointermove", move); }, [settings.readingGuide]);
  if (!settings.readingGuide) return null;
  return <div className="reading-guide" style={{ top }} aria-hidden="true" />;
}
