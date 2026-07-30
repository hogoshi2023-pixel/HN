"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("eyebrow text-brand text-[11px]", className)}>
      {children}
    </span>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  index?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        {index && (
          <span className="font-mono text-[11px] text-brand tracking-widest">
            {index}
          </span>
        )}
        {eyebrow && (
          <>
            {index && <span className="h-px w-6 bg-brand/40" />}
            <Eyebrow>{eyebrow}</Eyebrow>
          </>
        )}
      </div>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.6rem] md:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}

/** A bordered "spec row" used in technical spec sheets. */
export function SpecRow({
  label,
  value,
  mono = true,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border/60 py-2.5 last:border-0">
      <span className="text-[13px] text-muted-foreground">{label}</span>
      <span
        className={cn(
          "text-[13px] font-medium text-foreground text-right",
          mono && "font-mono"
        )}
      >
        {value}
      </span>
    </div>
  );
}

/** Reveal-on-mount wrapper for subtle entrance animation. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("animate-fade-up", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/** Numbered tag chip. */
export function NumberTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-7 items-center rounded-full border border-brand/30 bg-brand-muted px-2.5 font-mono text-[11px] font-medium text-brand tracking-wider">
      {children}
    </span>
  );
}
