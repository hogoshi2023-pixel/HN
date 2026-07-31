"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, MessageCircleQuestion, Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BrandButton } from "@/components/brand-button";
import { Section, SectionHeading, Eyebrow, Reveal } from "@/components/section";
import { useNav } from "@/lib/nav-store";
import { useT } from "@/lib/i18n";
import { faqs } from "@/lib/data";

export function FaqPage() {
  const { navigate } = useNav();
  const { t, loc, locale } = useT();
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter((f) => {
      const qh = f.q[locale] ?? f.q.en;
      const ah = f.a[locale] ?? f.a.en;
      return qh.toLowerCase().includes(q) || ah.toLowerCase().includes(q);
    });
  }, [query, locale]);

  const quickFacts: [string, string][] = [
    [t("fp.moq"), "200 kg"],
    [t("fp.sampleLead"), "7 days"],
    [t("fp.prodLead"), "7 – 15 days"],
    [t("fp.warranty"), "24 months"],
    [t("fp.exportCountries"), "60+"],
  ];

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-brand-muted via-background to-secondary">
        <div className="absolute inset-0 grid-bg text-steel opacity-[0.06]" />
        <div className="pointer-events-none absolute -left-24 -top-24 size-80 rounded-full bg-brand/8 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-brand tracking-widest">[ FAQ ]</span>
              <span className="h-px w-8 bg-brand/50" />
              <Eyebrow>{t("fp.eyebrow")}</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t("fp.titlePre")}{" "}
              <span className="text-brand">{t("fp.titleAccent")}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              {t("fp.desc")}
            </p>
          </Reveal>

          {/* Search */}
          <Reveal delay={240}>
            <div className="mt-8 max-w-xl">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t("fp.searchPlaceholder")}
                  className="h-12 w-full rounded-lg border border-border bg-card pl-10 pr-4 text-[14px] text-foreground placeholder:text-muted-foreground focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ list */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2">
                <MessageCircleQuestion className="size-5 text-brand" />
                <h3 className="text-[15px] font-bold text-foreground">
                  {t("fp.sidebarTitle")}
                </h3>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                {t("fp.sidebarDesc")}
              </p>
              <BrandButton className="mt-5 w-full" onClick={() => navigate("contact")}>
                {t("cta.askEngineer")} <ArrowRight className="size-4" />
              </BrandButton>

              <div className="mt-6 border-t border-border/60 pt-5">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  {t("fp.quickFacts")}
                </span>
                <dl className="mt-3 space-y-2.5 text-[13px]">
                  {quickFacts.map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between">
                      <dt className="text-muted-foreground">{k}</dt>
                      <dd className="font-mono font-medium text-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </aside>

          {/* Accordion */}
          <div className="lg:col-span-8">
            {filtered.length === 0 ? (
              <div className="rounded-xl border border-dashed border-border p-12 text-center">
                <p className="text-[14px] text-muted-foreground">
                  {t("fp.noResults")} &ldquo;{query}&rdquo;{t("fp.tryOrAsk")}{" "}
                  <button
                    onClick={() => navigate("contact")}
                    className="font-medium text-brand hover:underline"
                  >
                    {t("cta.askEngineer")}
                  </button>
                  .
                </p>
              </div>
            ) : (
              <Accordion type="single" collapsible className="space-y-3">
                {filtered.map((f, i) => (
                  <Reveal key={f.q.en} delay={i * 40}>
                    <AccordionItem
                      value={`item-${i}`}
                      className="overflow-hidden rounded-xl border border-border bg-card px-5 data-[state=open]:border-brand/40"
                    >
                      <AccordionTrigger className="py-5 text-left text-[15px] font-semibold text-foreground hover:no-underline">
                        <span className="pr-3">{loc(f.q)}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-[14px] leading-relaxed text-muted-foreground">
                        {loc(f.a)}
                      </AccordionContent>
                    </AccordionItem>
                  </Reveal>
                ))}
              </Accordion>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
