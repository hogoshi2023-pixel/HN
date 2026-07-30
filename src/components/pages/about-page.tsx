"use client";

import * as React from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  FlaskConical,
  Globe2,
  Award,
  Truck,
} from "lucide-react";
import { BrandButton } from "@/components/brand-button";
import { Section, SectionHeading, Eyebrow, Reveal } from "@/components/section";
import { useNav } from "@/lib/nav-store";
import { useT } from "@/lib/i18n";
import {
  company,
  stats,
  process,
  certifications,
  partners,
  capabilities,
  storyBullets,
} from "@/lib/data";

const CAP_ICONS: Record<string, React.ElementType> = {
  Factory,
  FlaskConical,
  Globe2,
  Truck,
};

export function AboutPage() {
  const { navigate } = useNav();
  const { t, loc } = useT();

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-ink text-foreground">
        <div className="absolute inset-0 grid-bg text-foreground/20 opacity-50" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-brand tracking-widest">{t("ap.index")}</span>
              <span className="h-px w-8 bg-brand/50" />
              <Eyebrow>{t("ap.eyebrow")}</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t("ap.titlePre")}{" "}
              <span className="text-brand">{t("ap.titleAccent")}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              {t("ap.desc")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <Section className="!py-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label.en} delay={i * 60}>
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="text-3xl font-bold tracking-tight text-brand sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-2 text-[13px] text-foreground">{loc(s.label)}</div>
                <div className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                  {loc(s.sub)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Story + image */}
      <Section className="!pt-0">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
                <Image
                  src="/images/factory.jpg"
                  alt="HONG NGUYEN paint manufacturing facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 rounded-lg bg-ink/80 px-4 py-2.5 backdrop-blur">
                  <div className="font-mono text-[10px] tracking-widest text-brand">
                    {t("footer.headquarters")}
                  </div>
                  <div className="text-[13px] font-semibold text-foreground">
                    Foshan, Guangdong
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow={t("ap.storyEyebrow")}
              title={t("ap.storyTitle")}
            />
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {storyBullets.map((b) => (
                <li key={b.en} className="flex items-center gap-2 text-[13px] text-foreground/90">
                  <CheckCircle2 className="size-4 text-brand" /> {loc(b)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Capability pillars */}
      <Section className="border-t border-border bg-card/40">
        <SectionHeading eyebrow={t("ap.capEyebrow")} title={t("ap.capTitle")} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((p, i) => {
            const Icon = CAP_ICONS[p.icon] ?? Factory;
            return (
              <Reveal key={p.t.en} delay={i * 70}>
                <div className="h-full rounded-xl border border-border bg-background p-6">
                  <span className="grid size-11 place-items-center rounded-lg border border-brand/30 bg-brand-muted text-brand">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-[15px] font-bold text-foreground">{loc(p.t)}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                    {loc(p.d)}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Process timeline */}
      <Section>
        <SectionHeading
          eyebrow={t("ap.procEyebrow")}
          title={t("ap.procTitle")}
          align="center"
          className="mx-auto"
        />
        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((s, i) => (
              <Reveal key={s.no} delay={i * 80}>
                <div className="relative text-center lg:text-left">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full border-2 border-brand bg-ink font-mono text-lg font-bold text-brand lg:mx-0">
                    {s.no}
                  </div>
                  <h3 className="mt-4 text-[15px] font-bold text-foreground">{loc(s.title)}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                    {loc(s.desc)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Certifications + partners */}
      <Section className="border-t border-border bg-card/40">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={t("ap.certEyebrow")} title={t("ap.certTitle")} />
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {certifications.map((c) => (
                <div
                  key={c.code}
                  className="flex items-center gap-2.5 rounded-lg border border-border bg-background p-4"
                >
                  <Award className="size-5 shrink-0 text-brand" />
                  <div>
                    <div className="font-mono text-[12px] font-bold text-foreground">
                      {c.code}
                    </div>
                    <div className="text-[11px] text-muted-foreground">{loc(c.title)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow={t("ap.partnersEyebrow")} title={t("ap.partnersTitle")} />
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {partners.map((p) => (
                <div
                  key={p}
                  className="grid place-items-center rounded-lg border border-border bg-background px-3 py-5 text-center font-mono text-sm font-bold tracking-widest text-muted-foreground/80"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-ink p-8 sm:p-12">
          <div className="absolute inset-0 grid-bg text-foreground/15 opacity-60" />
          <div className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-brand/15 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <Eyebrow>{t("cta.partnerWithUs")}</Eyebrow>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {t("ap.ctaTitle")}
              </h3>
              <p className="mt-3 text-[14px] text-muted-foreground">
                {t("ap.ctaDesc")}
              </p>
            </div>
            <BrandButton size="lg" onClick={() => navigate("contact")}>
              {t("cta.getQuote")} <ArrowRight className="size-4" />
            </BrandButton>
          </div>
        </div>
      </Section>
    </>
  );
}
