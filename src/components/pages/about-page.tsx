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
  Users,
  Truck,
} from "lucide-react";
import { BrandButton } from "@/components/brand-button";
import { Section, SectionHeading, Eyebrow, Reveal, NumberTag } from "@/components/section";
import { useNav } from "@/lib/nav-store";
import { company, stats, process, certifications, partners } from "@/lib/data";

export function AboutPage() {
  const { navigate } = useNav();

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-ink text-foreground">
        <div className="absolute inset-0 grid-bg text-foreground/20 opacity-50" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-brand tracking-widest">[ 05 ]</span>
              <span className="h-px w-8 bg-brand/50" />
              <Eyebrow>About HONG NGUYEN</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              22 years of formulation expertise,{" "}
              <span className="text-brand">one trusted factory.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              Founded in 2003, {company.name} has grown into an ISO 9001
              certified industrial coatings manufacturer serving 800+ active B2B
              clients across 60+ countries — with full in-house production, QC
              labs and OEM/ODM capability.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <Section className="!py-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="text-3xl font-bold tracking-tight text-brand sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-2 text-[13px] text-foreground">{s.label}</div>
                <div className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                  {s.sub}
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
                    HEADQUARTERS
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
              eyebrow="Our Story"
              title="Built for B2B buyers who can&apos;t afford coating failure."
            />
            <div className="mt-5 space-y-4 text-[14px] leading-relaxed text-muted-foreground">
              <p>
                {company.name} began in 2003 as a specialty formulator serving
                domestic steel fabricators. Over two decades we have expanded
                into six coating systems, a 50,000 t/yr production base, and an
                export network spanning 60+ countries.
              </p>
              <p>
                Our edge is consistency: every batch ships with a full QC report,
                every system is traceable to formulation, and every project is
                backed by a 24-month quality warranty. We don&apos;t chase retail —
                we serve factories, contractors and OEM distributors who measure
                success in defect-free years.
              </p>
            </div>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {[
                "In-house QC lab per batch",
                "12 senior formulation chemists",
                "Full ISO 9001 / 14001 traceability",
                "OEM private-label packaging",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-[13px] text-foreground/90">
                  <CheckCircle2 className="size-4 text-brand" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Capability pillars */}
      <Section className="border-t border-border bg-card/40">
        <SectionHeading eyebrow="Capabilities" title="What we control end-to-end." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Factory, t: "Production", d: "50,000 t/yr in-house plant. No reseller markup." },
            { icon: FlaskConical, t: "R&D Lab", d: "12 senior chemists. Sample in 7 days." },
            { icon: Globe2, t: "Export Desk", d: "CO, CIQ, MSDS, TDS, UN packaging." },
            { icon: Truck, t: "Logistics", d: "Lead time 7–15 days. Sample ships in 48h." },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 70}>
              <div className="h-full rounded-xl border border-border bg-background p-6">
                <span className="grid size-11 place-items-center rounded-lg border border-brand/30 bg-brand-muted text-brand">
                  <p.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-[15px] font-bold text-foreground">{p.t}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                  {p.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process timeline */}
      <Section>
        <SectionHeading
          eyebrow="How We Work"
          title="From spec to shipment — four steps."
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
                  <h3 className="mt-4 text-[15px] font-bold text-foreground">{s.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                    {s.desc}
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
            <SectionHeading eyebrow="Certifications" title="Audited. Tested. Documented." />
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
                    <div className="text-[11px] text-muted-foreground">{c.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Trusted By" title="Global B2B partners." />
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
              <Eyebrow>Partner with us</Eyebrow>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Ready to specify HONG NGUYEN on your next project?
              </h3>
              <p className="mt-3 text-[14px] text-muted-foreground">
                Our coating engineers respond the same business day.
              </p>
            </div>
            <BrandButton size="lg" onClick={() => navigate("contact")}>
              Get A Free Quote <ArrowRight className="size-4" />
            </BrandButton>
          </div>
        </div>
      </Section>
    </>
  );
}
