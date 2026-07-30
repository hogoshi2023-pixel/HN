"use client";

import * as React from "react";
import { ArrowRight, Clock, Newspaper, ChevronRight } from "lucide-react";
import { BrandButton } from "@/components/brand-button";
import { Section, SectionHeading, Eyebrow, Reveal } from "@/components/section";
import { useNav } from "@/lib/nav-store";
import { news } from "@/lib/data";

const CATEGORIES = ["All", "Product Launch", "Project", "Certification", "Export", "R&D", "Industry"];

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function NewsPage() {
  const { navigate } = useNav();
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
              <Eyebrow>News &amp; Blog</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Field notes from the{" "}
              <span className="text-brand">coatings floor.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              Product launches, project milestones, certifications and
              engineering briefings — straight from our R&amp;D lab and export
              desk.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Category filter */}
      <Section className="!py-8">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
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
              {c}
            </button>
          ))}
        </div>
      </Section>

      {/* Featured article */}
      {featured && (
        <Section className="!pt-0">
          <Reveal>
            <article className="group grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-2">
              {/* Visual block (no per-article image, use stylized) */}
              <div className="relative min-h-[260px] overflow-hidden bg-ink">
                <div className="absolute inset-0 grid-bg text-foreground/20 opacity-60" />
                <div className="pointer-events-none absolute -right-16 -top-16 size-60 rounded-full bg-brand/20 blur-3xl" />
                <div className="relative flex h-full flex-col justify-between p-8">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-brand px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-brand-foreground">
                      FEATURED
                    </span>
                    <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] tracking-widest text-muted-foreground">
                      {featured.category}
                    </span>
                  </div>
                  <div>
                    <Newspaper className="size-10 text-brand" />
                    <p className="mt-4 font-mono text-[11px] tracking-widest text-muted-foreground">
                      {formatDate(featured.date)} · {featured.read}
                    </p>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="p-8 lg:p-10">
                <h2 className="text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-4 text-[12px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5 text-brand" /> {featured.read}
                  </span>
                  <span className="font-mono">{formatDate(featured.date)}</span>
                </div>
                <BrandButton
                  variant="outline"
                  className="mt-6"
                  onClick={() => navigate("contact")}
                >
                  Read article <ArrowRight className="size-4" />
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
            <Reveal key={n.title} delay={i * 60}>
              <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-brand/40 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-muted-foreground">
                    {n.category}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {formatDate(n.date)}
                  </span>
                </div>
                <h3 className="mt-4 text-[16px] font-bold leading-snug tracking-tight text-foreground">
                  {n.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                  {n.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-[12px] text-muted-foreground">
                    <Clock className="size-3.5 text-brand" /> {n.read}
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
            <Eyebrow>Stay informed</Eyebrow>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
              Get B2B coatings briefings, monthly.
            </h3>
            <p className="mt-2 text-[14px] text-muted-foreground">
              Product launches, certification updates and engineering notes — no
              spam.
            </p>
          </div>
          <BrandButton size="lg" onClick={() => navigate("contact")}>
            Subscribe <ArrowRight className="size-4" />
          </BrandButton>
        </div>
      </Section>
    </>
  );
}
