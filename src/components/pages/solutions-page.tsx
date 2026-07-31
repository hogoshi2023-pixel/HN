"use client";

import * as React from "react";
import Image from "next/image";
import {
  Factory,
  Ship,
  Flame,
  Construction,
  Building2,
  LayoutGrid,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { BrandButton } from "@/components/brand-button";
import { Section, SectionHeading, Eyebrow, Reveal } from "@/components/section";
import { useNav } from "@/lib/nav-store";
import { useT } from "@/lib/i18n";
import { solutions, applications, solutionsProcess } from "@/lib/data";

const ICONS: Record<string, React.ElementType> = {
  Factory,
  Ship,
  Flame,
  Construction,
  Building2,
  LayoutGrid,
};

export function SolutionsPage() {
  const { navigate } = useNav();
  const { t, loc } = useT();

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-ink text-foreground">
        <div className="absolute inset-0">
          <Image
            src="/images/cta-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
          <div className="absolute inset-0 grid-bg text-foreground/20 opacity-50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-brand tracking-widest">{t("sol.index")}</span>
              <span className="h-px w-8 bg-brand/50" />
              <Eyebrow>{t("sol.eyebrow")}</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t("sol.titlePre")}{" "}
              <span className="text-brand">{t("sol.titleAccent")}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              {t("sol.desc")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Solutions grid */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {solutions.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Factory;
            return (
              <Reveal key={s.code} delay={i * 70}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-brand/40 hover:shadow-xl">
                  {/* Image header */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={loc(s.title)}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    <div className="absolute left-4 top-4 flex items-center gap-2">
                      <span className="grid size-9 place-items-center rounded-md border border-brand/40 bg-ink/70 text-brand backdrop-blur">
                        <Icon className="size-5" />
                      </span>
                      <span className="rounded-full bg-ink/70 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-foreground backdrop-blur">
                        {s.code}
                      </span>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="relative -mt-8 p-7">
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      {loc(s.title)}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">
                      {loc(s.desc)}
                    </p>
                    <div className="mt-5 border-t border-border/60 pt-4">
                      <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                        {t("sol.recommended")}
                      </span>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {s.products.map((p) => (
                          <span
                            key={p.en}
                            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-[12px] text-foreground/90"
                          >
                            <CheckCircle2 className="size-3.5 text-brand" />
                            {loc(p)}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => navigate("contact")}
                      className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-brand transition-colors hover:text-brand/80"
                    >
                      {t("cta.talkToEngineer")} <ArrowRight className="size-4" />
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Applications strip */}
      <Section className="border-t border-border bg-card/40">
        <SectionHeading
          eyebrow={t("sol.appEyebrow")}
          title={t("sol.appTitle")}
          description={t("sol.appDesc")}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((a, i) => (
            <Reveal key={a.code} delay={i * 50}>
              <div className="group flex items-center gap-4 rounded-lg border border-border bg-background p-5 transition-all hover:border-brand/40">
                <span className="grid size-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors group-hover:border-brand/40 group-hover:text-brand">
                  <span className="font-mono text-[12px] font-bold">{i + 1}</span>
                </span>
                <div>
                  <div className="font-mono text-[10px] tracking-widest text-brand">
                    {a.code}
                  </div>
                  <div className="text-[14px] font-medium text-foreground">
                    {loc(a.title)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Engineering process */}
      <Section>
        <SectionHeading
          eyebrow={t("sol.procEyebrow")}
          title={t("sol.procTitle")}
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutionsProcess.map((s, i) => (
            <Reveal key={s.no} delay={i * 70}>
              <div className="relative rounded-xl border border-border bg-card p-6">
                <span className="font-mono text-3xl font-bold text-brand/25">
                  {s.no}
                </span>
                <h3 className="mt-3 text-[15px] font-bold text-foreground">{loc(s.t)}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                  {loc(s.d)}
                </p>
                {i < solutionsProcess.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden size-5 -translate-y-1/2 text-brand/40 lg:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <BrandButton size="lg" onClick={() => navigate("contact")}>
            {t("cta.startProject")} <ArrowRight className="size-4" />
          </BrandButton>
        </div>
      </Section>
    </>
  );
}
