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
} from "lucide-react";
import { BrandButton } from "@/components/brand-button";
import { Section, SectionHeading, Eyebrow, SpecRow, Reveal, NumberTag } from "@/components/section";
import { useNav } from "@/lib/nav-store";
import { products } from "@/lib/data";

const PRODUCT_ICONS: Record<string, React.ElementType> = {
  "CAT-01": Shield,
  "CAT-02": Flame,
  "CAT-03": Layers,
  "CAT-04": Building2,
  "CAT-05": Palette,
  "CAT-06": FlaskConical,
};

export function ProductsPage() {
  const { target, navigate } = useNav();
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
              <span className="font-mono text-[11px] text-brand tracking-widest">[ 03 ]</span>
              <span className="h-px w-8 bg-brand/50" />
              <Eyebrow>Product Catalog</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Six Coating Systems.
              <br />
              <span className="text-brand">One Trusted Source.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              From anti-corrosion primers for offshore steel to 600°C
              high-temperature silicone systems — every product is manufactured
              in-house, traceable to batch, and backed by a 24-month warranty.
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
                  <PIcon className="size-4.5" />
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
                  {p.title}
                </span>
              </button>
            );
          })}
        </div>
      </Section>

      {/* Active product detail */}
      <Section className="!pt-0">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Image */}
          <div className="lg:col-span-7">
            <Reveal key={product.code}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
                <Image
                  src={product.image}
                  alt={product.title}
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
                    <span className="text-lg font-bold">{product.title}</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Features */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.features.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-2.5 rounded-lg border border-border bg-card p-3.5"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span className="text-[13px] leading-snug text-foreground/90">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specs + description */}
          <div className="lg:col-span-5">
            <Reveal key={product.code + "-detail"}>
              <span className="font-mono text-[11px] tracking-widest text-brand">
                {product.code} · SPEC SHEET
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
                {product.title}
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              {/* Spec table */}
              <div className="mt-6 rounded-xl border border-border bg-card p-5">
                <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
                  <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
                    TECHNICAL DATA
                  </span>
                  <span className="font-mono text-[10px] text-brand">REV.2026</span>
                </div>
                <div className="mt-1">
                  {product.specs.map((s) => (
                    <SpecRow key={s.label} {...s} />
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mt-5">
                <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
                  APPLICATIONS
                </span>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {product.applications.map((a) => (
                    <span
                      key={a}
                      className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-[12px] text-foreground/90"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap gap-3">
                <BrandButton onClick={() => navigate("contact")}>
                  Request Quote <ArrowRight className="size-4" />
                </BrandButton>
                <BrandButton variant="outline" onClick={() => navigate("contact")}>
                  <Download className="size-4" /> Get TDS / MSDS
                </BrandButton>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* All-products quick nav */}
      <Section className="border-t border-border bg-card/40">
        <SectionHeading
          eyebrow="Full Catalog"
          title="Browse all six systems."
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
                className="group flex items-center gap-4 rounded-lg border border-border bg-background p-4 text-left transition-all hover:border-brand/40 hover:shadow-md"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-md border border-border text-muted-foreground transition-colors group-hover:border-brand/40 group-hover:text-brand">
                  <PIcon className="size-5" />
                </span>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] tracking-widest text-brand">
                    {p.code}
                  </div>
                  <div className="truncate text-[14px] font-semibold text-foreground">
                    {p.title}
                  </div>
                </div>
                <ChevronRight className="ml-auto size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand" />
              </button>
            );
          })}
        </div>
      </Section>
    </>
  );
}
