"use client";

import * as React from "react";
import { ArrowRight, Clock, Newspaper, ChevronRight } from "lucide-react";
import { BrandButton } from "@/components/brand-button";
import { Section, SectionHeading, Eyebrow, Reveal } from "@/components/section";
import { useNav } from "@/lib/nav-store";
import { useT, type Locale } from "@/lib/i18n";
import { news } from "@/lib/data";

const CATS = ["All", "Product Launch", "Project", "Certification", "Export", "R&D", "Industry"];

const DATE_LOCALE: Record<Locale, string> = {
  en: "en-US",
  zh: "zh-CN",
  vi: "vi-VN",
};

function formatDate(iso: string, locale: Locale) {
  const d = new Date(iso);
  return d.toLocaleDateString(DATE_LOCALE[locale], {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function NewsPage() {
  const { navigate } = useNav();
  const { t, loc, locale } = useT();
  const [cat, setCat] = React.useState("All");

  const filtered = React.useMemo(
    () => (cat === "All" ? news : news.filter((n) => n.category === cat)),
    [cat]
  );

  const [featured, ...rest] = filtered;

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-ink text-foreground">
        <div className="absolute inset-0 grid-bg text-foreground/20 opacity-50" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-brand tracking-widest">[ NEWS ]</span>
              <span className="h-px w-8 bg-brand/50" />
              <Eyebrow>{t("np.eyebrow")}</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t("np.titlePre")}{" "}
              <span className="text-brand">{t("np.titleAccent")}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              {t("np.desc")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Category filter */}
      <Section className="!py-8">
        <div className="flex flex-wrap gap-2">
          {CATS.map((c) => {
            const label = c === "All" ? t("np.all") : t(`cat.${c}`);
            return (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={
                  "rounded-full border px-4 py-1.5 text-[13px] font-medium transition-colors " +
                  (cat === c
                    ? "border-brand bg-brand text-brand-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground")
                }
              >
                {label}
              </button>
            );
          })}
        </div>
      </Section>

      {/* Featured article */}
      {featured && (
        <Section className="!pt-0">
          <Reveal>
            <article className="group grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-2">
              <div className="relative min-h-[260px] overflow-hidden bg-ink">
                <div className="absolute inset-0 grid-bg text-foreground/20 opacity-60" />
                <div className="pointer-events-none absolute -right-16 -top-16 size-60 rounded-full bg-brand/20 blur-3xl" />
                <div className="relative flex h-full flex-col justify-between p-8">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-brand px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-brand-foreground">
                      {t("np.featured")}
                    </span>
                    <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] tracking-widest text-muted-foreground">
                      {t(`cat.${featured.category}`)}
                    </span>
                  </div>
                  <div>
                    <Newspaper className="size-10 text-brand" />
                    <p className="mt-4 font-mono text-[11px] tracking-widest text-muted-foreground">
                      {formatDate(featured.date, locale)} · {loc(featured.read)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <h2 className="text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                  {loc(featured.title)}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  {loc(featured.excerpt)}
                </p>
                <div className="mt-6 flex items-center gap-4 text-[12px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5 text-brand" /> {loc(featured.read)}
                  </span>
                  <span className="font-mono">{formatDate(featured.date, locale)}</span>
                </div>
                <BrandButton
                  variant="outline"
                  className="mt-6"
                  onClick={() => navigate("contact")}
                >
                  {t("cta.readArticle")} <ArrowRight className="size-4" />
                </BrandButton>
              </div>
            </article>
          </Reveal>
        </Section>
      )}

      {/* Article grid */}
      <Section className="!pt-0">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((n, i) => (
            <Reveal key={n.title.en} delay={i * 60}>
              <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-brand/40 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-muted-foreground">
                    {t(`cat.${n.category}`)}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {formatDate(n.date, locale)}
                  </span>
                </div>
                <h3 className="mt-4 text-[16px] font-bold leading-snug tracking-tight text-foreground">
                  {loc(n.title)}
                </h3>
                <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                  {loc(n.excerpt)}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-[12px] text-muted-foreground">
                    <Clock className="size-3.5 text-brand" /> {loc(n.read)}
                  </span>
                  <ChevronRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section className="border-t border-border bg-card/40">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-background p-8 sm:p-10 lg:flex-row lg:items-center">
          <div>
            <Eyebrow>{t("np.stayEyebrow")}</Eyebrow>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
              {t("np.stayTitle")}
            </h3>
            <p className="mt-2 text-[14px] text-muted-foreground">
              {t("np.stayDesc")}
            </p>
          </div>
          <BrandButton size="lg" onClick={() => navigate("contact")}>
            {t("cta.subscribe")} <ArrowRight className="size-4" />
          </BrandButton>
        </div>
      </Section>
    </>
  );
}
