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
  Check,
  Download,
  ChevronDown,
} from "lucide-react";
import { BrandButton } from "@/components/brand-button";
import { Section, SectionHeading, Eyebrow, SpecRow, Reveal } from "@/components/section";
import { useNav } from "@/lib/nav-store";
import { useT } from "@/lib/i18n";
import { products } from "@/lib/data";

const PRODUCT_ICONS: Record<string, React.ElementType> = {
  "CAT-01": Shield,
  "CAT-02": Flame,
  "CAT-03": Layers,
  "CAT-04": Building2,
  "CAT-05": Palette,
  "CAT-06": FlaskConical,
};

/** Expandable list of concrete product models under a category. */
function ModelList({
  models,
  title,
  expandLabel,
  collapseLabel,
}: {
  models: { model: string; desc: { en: string; zh: string; vi: string } }[];
  title: string;
  expandLabel: string;
  collapseLabel: string;
}) {
  const { loc } = useT();
  const [open, setOpen] = React.useState(true);

  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-border bg-card">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-accent/40"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          <span className="font-mono text-[11px] tracking-widest text-brand">
            {title}
          </span>
          <span className="rounded-full bg-brand-muted px-2 py-0.5 font-mono text-[10px] text-brand">
            {models.length}
          </span>
        </span>
        <span className="flex items-center gap-1.5 text-[12px] text-muted-foreground">
          {open ? collapseLabel : expandLabel}
          <ChevronDown
            className={"size-4 text-brand transition-transform " + (open ? "rotate-180" : "")}
          />
        </span>
      </button>
      {open && (
        <ul className="divide-y divide-border/60 border-t border-border/60">
          {models.map((m) => (
            <li
              key={m.model}
              className="flex flex-col gap-1 px-4 py-3 transition-colors hover:bg-background/40 sm:flex-row sm:items-center sm:gap-4"
            >
              <span className="inline-flex w-fit shrink-0 items-center rounded-md border border-brand/30 bg-brand-muted px-2.5 py-1 font-mono text-[12px] font-bold text-brand">
                {m.model}
              </span>
              <span className="text-[13px] leading-snug text-foreground/90">
                {loc(m.desc)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function ProductsPage() {
  const { target, navigate } = useNav();
  const { t, loc } = useT();

  const initialIdx = React.useMemo(() => {
    if (!target) return 0;
    const i = products.findIndex((p) => p.code === target);
    return i >= 0 ? i : 0;
  }, [target]);

  const [active, setActive] = React.useState(initialIdx);
  React.useEffect(() => setActive(initialIdx), [initialIdx]);

  const product = products[active];
  const Icon = PRODUCT_ICONS[product.code] ?? Shield;

  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden border-b border-border bg-ink text-foreground">
        <div className="absolute inset-0 grid-bg text-foreground/20 opacity-50" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-brand tracking-widest">{t("pp.index")}</span>
              <span className="h-px w-8 bg-brand/50" />
              <Eyebrow>{t("pp.eyebrow")}</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t("pp.title1")}
              <br />
              <span className="text-brand">{t("pp.title2")}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              {t("pp.desc")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Product selector tabs */}
      <Section className="!py-10">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {products.map((p, i) => {
            const PIcon = PRODUCT_ICONS[p.code] ?? Shield;
            const isActive = i === active;
            return (
              <button
                key={p.code}
                onClick={() => setActive(i)}
                className={
                  "group flex flex-col items-start gap-2 rounded-lg border p-4 text-left transition-all " +
                  (isActive
                    ? "border-brand bg-brand-muted shadow-lg"
                    : "border-border bg-card hover:border-brand/40")
                }
              >
                <span
                  className={
                    "grid size-9 place-items-center rounded-md border transition-colors " +
                    (isActive
                      ? "border-brand bg-brand text-brand-foreground"
                      : "border-border text-muted-foreground group-hover:text-brand")
                  }
                >
                  <PIcon className="size-4" />
                </span>
                <span
                  className={
                    "font-mono text-[10px] tracking-widest " +
                    (isActive ? "text-brand" : "text-muted-foreground")
                  }
                >
                  {p.code}
                </span>
                <span
                  className={
                    "text-[13px] font-semibold leading-tight " +
                    (isActive ? "text-foreground" : "text-foreground/80")
                  }
                >
                  {loc(p.title)}
                </span>
              </button>
            );
          })}
        </div>
      </Section>

      {/* Active product detail */}
      <Section className="!pt-0">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Image + category stats + features */}
          <div className="lg:col-span-7">
            <Reveal key={product.code}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
                <Image
                  src={product.image}
                  alt={loc(product.title)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="rounded-full bg-brand px-3 py-1 font-mono text-[11px] font-bold tracking-wider text-brand-foreground">
                    {product.code}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-foreground">
                    <Icon className="size-5 text-brand" />
                    <span className="text-lg font-bold">{loc(product.title)}</span>
                  </div>
                </div>
              </div>

              {/* Category headline stats (4 quick specs from catalog) */}
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {product.categorySpecs.map((cs) => (
                  <div
                    key={cs.label.en}
                    className="rounded-lg border border-border bg-card p-3 text-center"
                  >
                    <div className="font-mono text-[15px] font-bold text-brand">
                      {cs.value}
                    </div>
                    <div className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                      {loc(cs.label)}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Features */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.features.map((f) => (
                <div
                  key={f.en}
                  className="flex items-start gap-2.5 rounded-lg border border-border bg-card p-3.5"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span className="text-[13px] leading-snug text-foreground/90">{loc(f)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specs + description */}
          <div className="lg:col-span-5">
            <Reveal key={product.code + "-detail"}>
              <span className="font-mono text-[11px] tracking-widest text-brand">
                {product.code} {t("pp.specSheet")}
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
                {loc(product.title)}
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                {loc(product.description)}
              </p>

              {/* Spec table */}
              <div className="mt-6 rounded-xl border border-border bg-card p-5">
                <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
                  <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
                    {t("pp.technicalData")}
                  </span>
                  <span className="font-mono text-[10px] text-brand">REV.2026</span>
                </div>
                <div className="mt-1">
                  {product.specs.map((s) => (
                    <SpecRow key={s.label.en} label={loc(s.label)} value={s.value} />
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mt-5">
                <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
                  {t("pp.applications")}
                </span>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {product.applications.map((a) => (
                    <span
                      key={a.en}
                      className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-[12px] text-foreground/90"
                    >
                      {loc(a)}
                    </span>
                  ))}
                </div>
              </div>

              {/* Featured product models (expandable) */}
              <ModelList
                models={product.models}
                title={t("pp.featuredModels")}
                expandLabel={t("pp.expandModels")}
                collapseLabel={t("pp.collapseModels")}
              />

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap gap-3">
                <BrandButton onClick={() => navigate("contact")}>
                  {t("cta.requestQuote")} <ArrowRight className="size-4" />
                </BrandButton>
                <BrandButton variant="outline" onClick={() => navigate("contact")}>
                  <Download className="size-4" /> {t("cta.getTds")}
                </BrandButton>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* All-products quick nav */}
      <Section className="border-t border-border bg-card/40">
        <SectionHeading
          eyebrow={t("pp.fullCatalogEyebrow")}
          title={t("pp.fullCatalogTitle")}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => {
            const PIcon = PRODUCT_ICONS[p.code] ?? Shield;
            return (
              <button
                key={p.code}
                onClick={() => {
                  setActive(i);
                  if (typeof window !== "undefined") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className="group flex items-center gap-4 overflow-hidden rounded-lg border border-border bg-background p-3 text-left transition-all hover:border-brand/40 hover:shadow-md"
              >
                <div className="relative size-16 shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={p.image}
                    alt={loc(p.title)}
                    fill
                    sizes="64px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                  <span className="absolute bottom-1 left-1 grid size-6 place-items-center rounded bg-ink/70 text-brand backdrop-blur">
                    <PIcon className="size-3.5" />
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[10px] tracking-widest text-brand">
                    {p.code}
                  </div>
                  <div className="truncate text-[14px] font-semibold text-foreground">
                    {loc(p.title)}
                  </div>
                  <div className="truncate text-[11px] text-muted-foreground">
                    {loc(p.short)}
                  </div>
                </div>
                <ChevronRight className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand" />
              </button>
            );
          })}
        </div>
      </Section>
    </>
  );
}
