"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Calendar, Ruler, Layers, ShieldCheck } from "lucide-react";
import { BrandButton } from "@/components/brand-button";
import { Section, SectionHeading, Eyebrow, Reveal } from "@/components/section";
import { useNav } from "@/lib/nav-store";
import { useT } from "@/lib/i18n";
import { cases, caseOutcomes, type ProjectCase } from "@/lib/data";

const METRIC_ICONS = [Ruler, Layers, ShieldCheck];

export function CasesPage() {
  const { target, navigate } = useNav();
  const { t, loc } = useT();

  const initialIdx = React.useMemo(() => {
    if (!target) return 0;
    const i = cases.findIndex((c) => c.code === target);
    return i >= 0 ? i : 0;
  }, [target]);
  const [active, setActive] = React.useState(initialIdx);
  React.useEffect(() => setActive(initialIdx), [initialIdx]);

  const c: ProjectCase = cases[active];

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-ink text-foreground">
        <div className="absolute inset-0 grid-bg text-foreground/20 opacity-50" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-brand tracking-widest">{t("cases.index")}</span>
              <span className="h-px w-8 bg-brand/50" />
              <Eyebrow>{t("cp.eyebrow")}</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t("cp.titlePre")}{" "}
              <span className="text-brand">{t("cp.titleAccent")}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              {t("cp.desc")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Case selector */}
      <Section className="!py-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {cases.map((cc, i) => {
            const isActive = i === active;
            return (
              <button
                key={cc.code}
                onClick={() => setActive(i)}
                className={
                  "group relative overflow-hidden rounded-xl border text-left transition-all " +
                  (isActive
                    ? "border-brand bg-brand-muted shadow-lg"
                    : "border-border bg-card hover:border-brand/40")
                }
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={cc.image}
                    alt={loc(cc.title)}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                  <div className="absolute left-3 top-3 flex items-center gap-1.5">
                    <span className="rounded-full bg-brand px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wider text-brand-foreground">
                      {cc.code}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-2 font-mono text-[10px] tracking-wider text-foreground/90">
                      <MapPin className="size-3 text-brand" /> {loc(cc.location)}
                      <span className="opacity-50">·</span>
                      <Calendar className="size-3 text-brand" /> {cc.year}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </Section>

      {/* Active case detail */}
      <Section className="!pt-0">
        <Reveal key={c.code}>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Image */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border">
                <Image
                  src={c.image}
                  alt={loc(c.title)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Detail */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-brand px-2.5 py-0.5 font-mono text-[11px] font-bold tracking-wider text-brand-foreground">
                  {c.code}
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
                  <MapPin className="size-3.5 text-brand" /> {loc(c.location)}
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
                  <Calendar className="size-3.5 text-brand" /> {c.year}
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                {loc(c.title)}
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                {loc(c.summary)}
              </p>

              {/* Metrics */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {c.metrics.map((m, i) => {
                  const MIcon = METRIC_ICONS[i] ?? Ruler;
                  return (
                    <div
                      key={m.label.en}
                      className="rounded-lg border border-border bg-card p-4 text-center"
                    >
                      <MIcon className="mx-auto size-4 text-brand" />
                      <div className="mt-2 font-mono text-[15px] font-bold text-foreground">
                        {m.value}
                      </div>
                      <div className="mt-0.5 text-[11px] text-muted-foreground">
                        {loc(m.label)}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <BrandButton onClick={() => navigate("contact")}>
                  {t("cta.requestSimilar")} <ArrowRight className="size-4" />
                </BrandButton>
                <BrandButton variant="outline" onClick={() => navigate("products")}>
                  {t("cta.relatedProducts")}
                </BrandButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Outcomes band */}
      <Section className="border-t border-border bg-card/40">
        <div className="mb-8 max-w-2xl">
          <Eyebrow>{t("cp.outcomesTitle")}</Eyebrow>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {caseOutcomes.map((s) => (
            <div
              key={s.v}
              className="rounded-xl border border-border bg-background p-6 text-center"
            >
              <div className="text-3xl font-bold tracking-tight text-brand sm:text-4xl">
                {s.v}
              </div>
              <div className="mt-2 text-[12px] text-muted-foreground">{loc(s.l)}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
