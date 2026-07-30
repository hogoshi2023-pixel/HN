"use client";

import * as React from "react";
import { Check, Globe, ChevronDown } from "lucide-react";
import { useLang, useT, LOCALES, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Hydrates the locale from localStorage on mount (client-only).
 * Place once near the root to avoid hydration mismatch.
 */
export function LangHydrator() {
  const hydrate = useLang((s) => s.hydrate);
  React.useEffect(() => {
    hydrate();
  }, [hydrate]);
  return null;
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useT();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card/60 px-2.5 py-1 text-[12px] font-medium text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
      >
        <Globe className="size-3.5 text-brand" />
        <span className="font-mono tracking-wide">{current.short}</span>
        <ChevronDown
          className={cn("size-3 transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-lg border border-border bg-popover py-1 shadow-xl"
        >
          {LOCALES.map((l) => (
            <li key={l.code}>
              <button
                role="option"
                aria-selected={l.code === locale}
                onClick={() => {
                  setLocale(l.code as Locale);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-[13px] transition-colors hover:bg-accent",
                  l.code === locale
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                <span className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-brand">
                    {l.short}
                  </span>
                  {l.label}
                </span>
                {l.code === locale && <Check className="size-3.5 text-brand" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
