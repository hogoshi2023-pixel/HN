"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Clock, Newspaper, ChevronRight, MessageCircle } from "lucide-react";
import { BrandButton } from "@/components/brand-button";
import { Section, SectionHeading, Eyebrow, Reveal } from "@/components/section";
import { withBasePath } from "@/lib/images";
import { useNav } from "@/lib/nav-store";
import { useT, type Locale } from "@/lib/i18n";
import { news, company } from "@/lib/data";

const CATS = ["All", "Product Launch", "Project", "Certification", "Export", "R&D", "Industry"];

const DATE_LOCALE: Record<Locale, string> = {
  en: "en-US",
  zh: "zh-CN",
  vi: "vi-VN",
  es: "es-ES",
  ar: "ar-u-nu-latn",
};

function formatDate(iso: string, locale: Locale) {
  const d = new Date(iso);
  return d.toLocaleDateString(DATE_LOCALE[locale], {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/** Render a trilingual article body: "\n\n"-separated blocks; "## " prefixes are h2s. */
function ArticleBody({ body }: { body: string }) {
  const blocks = body.split(/\n\n+/).map((b) => b.trim()).filter(Boolean);
  return (
    <div className="space-y-5">
      {blocks.map((b, i) =>
        b.startsWith("## ") ? (
          <h2
            key={i}
            className="pt-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            {b.slice(3)}
          </h2>
        ) : (
          <p key={i} className="text-[15px] leading-relaxed text-foreground/85">
            {b}
          </p>
        )
      )}
    </div>
  );
}

export function NewsPage() {
  const { navigate } = useNav();
  const { t, loc, locale } = useT();
  const [cat, setCat] = React.useState("All");
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);

  const filtered = React.useMemo(
    () => (cat === "All" ? news : news.filter((n) => n.category === cat)),
    [cat]
  );

  const openArticle = (globalIdx: number) => {
    setOpenIdx(globalIdx);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "auto" });
  };

  // ── Full article view ────────────────────────────────────────────────
  if (openIdx !== null && news[openIdx]) {
    const n = news[openIdx];
    return (
      <>
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-brand-muted via-background to-secondary">
          <div className="absolute inset-0 grid-bg text-steel opacity-[0.06]" />
          <div className="relative mx-auto max-w-3xl px-6 py-12 sm:py-16">
            <button
              onClick={() => setOpenIdx(null)}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-brand transition-colors hover:text-brand/80"
            >
              <ArrowLeft className="size-4" /> {t("np.backToNews")}
            </button>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-brand px-2.5 py-1 font-mono text-[10px] font-bold tracking-widest text-brand-foreground">
                {t(`cat.${n.category}`)}
              </span>
              <span className="font-mono text-[11px] text-muted-foreground">
                {formatDate(n.date, locale)} · {loc(n.read)}
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {loc(n.title)}
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              {loc(n.excerpt)}
            </p>
          </div>
        </section>

        <Section>
          <div className="mx-auto max-w-3xl">
            <div className="relative aspect-[16/8] overflow-hidden rounded-xl border border-border">
              <Image
                src={withBasePath(n.image)}
                alt={loc(n.title)}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
            <div className="mt-8">
              <ArticleBody body={loc(n.body)} />
            </div>

            <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-xl border border-brand/20 bg-gradient-to-br from-brand-muted via-background to-secondary p-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-[15px] font-bold text-foreground">{t("np.articleCtaTitle")}</h3>
                <p className="mt-1 text-[13px] text-muted-foreground">{t("np.articleCtaDesc")}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <BrandButton onClick={() => navigate("contact")}>
                  {t("cta.askEngineer")} <ArrowRight className="size-4" />
                </BrandButton>
                <BrandButton
                  variant="outline"
                  onClick={() => navigate("contact")}
                >
                  <MessageCircle className="size-4" /> {t("cta.whatsappChat")}
                </BrandButton>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  // ── Article list view ────────────────────────────────────────────────
  const [featured, ...rest] = filtered;

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-brand-muted via-background to-secondary">
        <div className="absolute inset-0 grid-bg text-steel opacity-[0.06]" />
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
            <article
              role="button"
              tabIndex={0}
              onClick={() => openArticle(news.indexOf(featured))}
              onKeyDown={(e) => e.key === "Enter" && openArticle(news.indexOf(featured))}
              className="group grid cursor-pointer overflow-hidden rounded-2xl border border-border bg-card text-left transition-all hover:border-brand/40 hover:shadow-xl lg:grid-cols-2"
            >
              <div className="relative min-h-[280px] overflow-hidden bg-ink">
                <Image
                  src={withBasePath(featured.image)}
                  alt={loc(featured.title)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent" />
                <div className="pointer-events-none absolute -right-16 -top-16 size-60 rounded-full bg-brand/20 blur-3xl" />
                <div className="relative flex h-full flex-col justify-between p-8">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-brand px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-brand-foreground">
                      {t("np.featured")}
                    </span>
                    <span className="rounded-full border border-border bg-ink/60 px-3 py-1 font-mono text-[10px] tracking-widest text-foreground backdrop-blur">
                      {t(`cat.${featured.category}`)}
                    </span>
                  </div>
                  <div>
                    <Newspaper className="size-10 text-brand" />
                    <p className="mt-4 font-mono text-[11px] tracking-widest text-foreground/80">
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
                <span className="mt-6 inline-flex h-10 items-center gap-2 rounded-md border border-brand/30 bg-brand-muted px-5 text-sm font-semibold text-brand transition-colors hover:bg-brand/20">
                  {t("cta.readArticle")} <ArrowRight className="size-4" />
                </span>
              </div>
            </article>
          </Reveal>
        </Section>
      )}

      {/* Article grid */}
      <Section className="!pt-0">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((n, i) => {
            const globalIdx = news.indexOf(n);
            return (
              <Reveal key={n.title.en} delay={i * 60}>
                <article
                  role="button"
                  tabIndex={0}
                  onClick={() => openArticle(globalIdx)}
                  onKeyDown={(e) => e.key === "Enter" && openArticle(globalIdx)}
                  className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-card text-left transition-all hover:border-brand/40 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={withBasePath(n.image)}
                      alt={loc(n.title)}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                    <div className="absolute left-3 top-3">
                      <span className="rounded-full bg-ink/70 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-foreground backdrop-blur">
                        {t(`cat.${n.category}`)}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {formatDate(n.date, locale)}
                    </span>
                    <h3 className="mt-2 text-[16px] font-bold leading-snug tracking-tight text-foreground">
                      {loc(n.title)}
                    </h3>
                    <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                      {loc(n.excerpt)}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
                      <span className="inline-flex items-center gap-1.5 text-[12px] text-muted-foreground">
                        <Clock className="size-3.5 text-brand" /> {loc(n.read)}
                      </span>
                      <ChevronRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand" />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
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
                  <BrandButton
                    size="lg"
                    onClick={() => {
                      const subject = encodeURIComponent("Subscribe — HONG NGUYEN B2B Coatings Briefing");
                      const body = encodeURIComponent("Please add me to the monthly B2B coatings briefing.\n\nName:\nCompany:\nCountry:");
                      window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
                    }}
                  >
                    {t("cta.subscribe")} <ArrowRight className="size-4" />
                  </BrandButton>
        </div>
      </Section>
    </>
  );
}
