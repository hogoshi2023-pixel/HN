"use client";

import * as React from "react";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  Shield,
  Flame,
  Layers,
  Building2,
  Palette,
  FlaskConical,
  CheckCircle2,
  Quote,
  Star,
} from "lucide-react";
import { BrandButton } from "@/components/brand-button";
import { Section, SectionHeading, Eyebrow, SpecRow, Reveal } from "@/components/section";
import { useNav } from "@/lib/nav-store";
import { useT } from "@/lib/i18n";
import {
  company,
  stats,
  specSheet,
  products,
  whyUs,
  applications,
  cases,
  certifications,
  testimonials,
  partners,
  coreChips,
} from "@/lib/data";

const PRODUCT_ICONS: Record<string, React.ElementType> = {
  "CAT-01": Shield,
  "CAT-02": Flame,
  "CAT-03": Layers,
  "CAT-04": Building2,
  "CAT-05": Palette,
  "CAT-06": FlaskConical,
};

export function HomePage() {
  const { navigate } = useNav();
  const { t, loc } = useT();

  return (
    <>
      {/* ───────── HERO — bright, airy, modern ───────── */}
      <section className="relative overflow-hidden bg-background">
        {/* Soft copper-tinted gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-muted via-background to-secondary" />
        <div className="absolute inset-0 grid-bg text-steel opacity-[0.07]" />
        <div className="pointer-events-none absolute -right-32 -top-32 size-[480px] rounded-full bg-brand/8 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-16 sm:pt-18 sm:pb-24 lg:pt-20 lg:pb-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-brand tracking-widest">
                    {t("hero.index")}
                  </span>
                  <span className="h-px w-8 bg-brand/50" />
                  <Eyebrow>{t("hero.eyebrow")}</Eyebrow>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-[4.2rem]">
                  {t("hero.title1")}{" "}
                  {t("hero.title2")}{" "}
                  <span className="text-brand">{t("hero.titleAccent")}</span>{" "}
                  {t("hero.title3")}
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                  {t("hero.desc")}
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <BrandButton size="lg" onClick={() => navigate("contact")}>
                    {t("cta.getQuote")} <ArrowRight className="size-4" />
                  </BrandButton>
                  <BrandButton
                    size="lg"
                    variant="outline"
                    onClick={() => navigate("products")}
                  >
                    {t("cta.browseCatalog")}
                  </BrandButton>
                </div>
              </Reveal>

              <Reveal delay={320}>
                <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
                  {stats.map((s) => (
                    <div key={s.label.en} className="border-l border-border/70 pl-4">
                      <dt className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        {s.value}
                      </dt>
                      <dd className="mt-1 text-[12px] leading-tight text-muted-foreground">
                        {loc(s.label)}
                        <span className="block text-[11px] text-brand/80 font-mono mt-0.5">
                          {loc(s.sub)}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={300}>
                <div className="relative">
                  <div className="absolute -inset-3 rounded-2xl bg-brand/10 blur-2xl" />
                  <div className="relative rounded-xl border border-border/70 bg-card/80 backdrop-blur-md p-6 shadow-2xl">
                    <div className="flex items-center justify-between border-b border-border/60 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-brand animate-pulse" />
                        <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
                          {t("hero.specSheet")}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-brand">{t("hero.live")}</span>
                    </div>
                    <div className="mt-2 max-h-[320px] overflow-y-auto scroll-thin pr-1">
                      {specSheet.map((row) => (
                        <SpecRow key={row.label.en} label={loc(row.label)} value={row.value} />
                      ))}
                    </div>
                    <button
                      onClick={() => navigate("products")}
                      className="mt-4 flex w-full items-center justify-between rounded-md border border-brand/30 bg-brand-muted px-4 py-2.5 text-[13px] font-medium text-brand transition-colors hover:bg-brand/20"
                    >
                      {t("cta.viewFullCatalog")}
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── PARTNERS MARQUEE ───────── */}
      <div className="border-y border-border bg-background py-6">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-center font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
            {t("partners.trustedBy")}
          </p>
          <div className="relative overflow-hidden">
            <div className="flex w-max animate-marquee gap-12">
              {[...partners, ...partners, ...partners].map((p, i) => (
                <span
                  key={i}
                  className="font-mono text-lg font-bold tracking-widest text-muted-foreground/70 transition-colors hover:text-brand"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ───────── CORE BUSINESS ───────── */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              index={t("core.index")}
              eyebrow={t("core.eyebrow")}
              title={t("core.title")}
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              {loc(company.description)}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {coreChips.map((c) => (
                <span
                  key={c.en}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-[12px] text-muted-foreground"
                >
                  <CheckCircle2 className="size-3.5 text-brand" />
                  {loc(c)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ───────── PRODUCT CATEGORIES ───────── */}
      <Section className="bg-card/40 border-y border-border">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            index={t("pcat.index")}
            eyebrow={t("pcat.eyebrow")}
            title={t("pcat.title")}
          />
          <BrandButton variant="outline" onClick={() => navigate("products")}>
            {t("cta.viewAllCatalog")} <ArrowRight className="size-4" />
          </BrandButton>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => {
            const Icon = PRODUCT_ICONS[p.code] ?? Shield;
            return (
              <Reveal key={p.code} delay={i * 60}>
                <button
                  onClick={() => navigate("products", p.code)}
                  className="group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-background text-left transition-all hover:border-brand/40 hover:shadow-xl"
                >
                  {/* Image header */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={loc(p.title)}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    <div className="absolute left-3 top-3 flex items-center gap-2">
                      <span className="rounded-full bg-ink/70 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-brand backdrop-blur">
                        {p.code}
                      </span>
                    </div>
                    <div className="absolute right-3 top-3 grid size-8 place-items-center rounded-md border border-brand/40 bg-ink/70 text-brand backdrop-blur">
                      <Icon className="size-4" />
                    </div>
                  </div>
                  {/* Body */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold tracking-tight text-foreground">
                      {loc(p.title)}
                    </h3>
                    <p className="mt-1.5 text-[13px] text-muted-foreground">
                      {loc(p.short)}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-[12px] font-medium text-brand opacity-0 transition-opacity group-hover:opacity-100">
                      {t("cta.explore")} <ArrowRight className="size-3.5" />
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ───────── WHY HONG NGUYEN ───────── */}
      <section className="relative overflow-hidden border-y border-border">
        <div className="absolute inset-0">
          <Image
            src="/images/why-us-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
          <SectionHeading
            index={t("why.index")}
            eyebrow={t("why.eyebrow")}
            title={t("why.title")}
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => (
              <div
                key={w.no}
                className="group bg-background/90 p-6 backdrop-blur-sm transition-colors hover:bg-card"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-brand/30 transition-colors group-hover:text-brand">
                    {w.no}
                  </span>
                  <span className="size-1.5 rounded-full bg-brand opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mt-4 text-[15px] font-bold tracking-tight text-foreground">
                  {loc(w.title)}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  {loc(w.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── APPLICATIONS ───────── */}
      <Section className="bg-card/40 border-y border-border">
        <SectionHeading
          index={t("app.index")}
          eyebrow={t("app.eyebrow")}
          title={t("app.title")}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((a, i) => (
            <Reveal key={a.code} delay={i * 50}>
              <button
                onClick={() => navigate("solutions")}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-border transition-all hover:border-brand/40 hover:shadow-xl"
              >
                <Image
                  src={a.image}
                  alt={loc(a.title)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-ink/70 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-brand backdrop-blur">
                    {a.code}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
                  <span className="text-[15px] font-bold leading-tight text-foreground">
                    {loc(a.title)}
                  </span>
                  <ChevronRight className="size-5 shrink-0 text-brand opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ───────── PROJECT CASES ───────── */}
      <Section>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            index={t("cases.index")}
            eyebrow={t("cases.eyebrow")}
            title={t("cases.title")}
          />
          <BrandButton variant="outline" onClick={() => navigate("cases")}>
            {t("cta.viewAllCases")} <ArrowRight className="size-4" />
          </BrandButton>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.code} delay={i * 80}>
              <button
                onClick={() => navigate("cases", c.code)}
                className="group block w-full overflow-hidden rounded-xl border border-border bg-card text-left transition-all hover:border-brand/40 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={loc(c.title)}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/5 to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-full bg-brand px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wider text-brand-foreground">
                      {c.code}
                    </span>
                    <span className="rounded-full bg-ink/70 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-foreground backdrop-blur">
                      {loc(c.location)} · {c.year}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-[15px] font-bold leading-snug tracking-tight text-foreground">
                    {loc(c.title)}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                    {loc(c.summary)}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 border-t border-border/60 pt-3">
                    {c.metrics.map((m) => (
                      <div key={m.label.en} className="text-[11px]">
                        <span className="text-muted-foreground">{loc(m.label)}: </span>
                        <span className="font-mono font-medium text-foreground">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ───────── CERTIFICATIONS ───────── */}
      <Section className="bg-card/40 border-y border-border">
        <SectionHeading
          index={t("cert.index")}
          eyebrow={t("cert.eyebrow")}
          title={t("cert.title")}
          description={t("cert.desc")}
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {certifications.map((c, i) => (
            <Reveal key={c.code} delay={i * 50}>
              <div className="flex h-full flex-col items-center justify-center rounded-xl border border-border bg-background p-5 text-center transition-all hover:border-brand/40">
                <div className="grid size-12 place-items-center rounded-full border border-brand/30 bg-brand-muted">
                  <Star className="size-5 text-brand" />
                </div>
                <div className="mt-3 font-mono text-[13px] font-bold tracking-wide text-foreground">
                  {c.code}
                </div>
                <div className="mt-0.5 text-[11px] text-muted-foreground">
                  {loc(c.title)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ───────── TESTIMONIALS ───────── */}
      <Section>
        <SectionHeading
          index={t("voice.index")}
          eyebrow={t("voice.eyebrow")}
          title={t("voice.title")}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t2, i) => (
            <Reveal key={t2.name} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
                <Quote className="size-7 text-brand/60" />
                <blockquote className="mt-4 flex-1 text-[14px] leading-relaxed text-foreground/90">
                  &ldquo;{loc(t2.quote)}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-border/60 pt-4">
                  <div className="text-[14px] font-bold text-foreground">
                    {t2.name}
                  </div>
                  <div className="text-[12px] text-muted-foreground">
                    {loc(t2.role)}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
