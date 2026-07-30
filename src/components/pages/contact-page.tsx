"use client";

import * as React from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  User,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Factory,
} from "lucide-react";
import { BrandButton } from "@/components/brand-button";
import { Section, SectionHeading, Eyebrow, Reveal } from "@/components/section";
import { useToast } from "@/hooks/use-toast";
import { company, products, exportRegions } from "@/lib/data";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactPage() {
  const { toast } = useToast();
  const [status, setStatus] = React.useState<Status>("idle");
  const [errorMsg, setErrorMsg] = React.useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data?.error || "Submission failed.");
      }
      setStatus("success");
      form.reset();
      toast({
        title: "Inquiry received",
        description: data.message,
      });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Submission failed.");
      toast({
        title: "Could not send",
        description: err instanceof Error ? err.message : "Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-ink text-foreground">
        <div className="absolute inset-0 grid-bg text-foreground/20 opacity-50" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-brand tracking-widest">[ 09 ]</span>
              <span className="h-px w-8 bg-brand/50" />
              <Eyebrow>Request Quote</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Get a quote in 24 hours.
              <br />
              <span className="text-brand">Sample shipped in 48.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              Tell us your project — substrate, environment, performance
              requirements. Our coating engineers respond same business day.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Contact info */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Direct Contact"
              title="Talk to a coating engineer."
              description="Prefer to reach us directly? Use the channels below — we monitor them every business day."
            />

            <ul className="mt-8 space-y-3">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: company.phone,
                  href: `tel:${company.phone.replace(/\s/g, "")}`,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: company.email,
                  href: `mailto:${company.email}`,
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp / WeChat",
                  value: company.contact,
                },
                {
                  icon: MapPin,
                  label: "Address",
                  value: company.address,
                },
              ].map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href ?? "#"}
                    className="group flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-brand/40"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-md border border-brand/30 bg-brand-muted text-brand">
                      <c.icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] tracking-widest text-muted-foreground">
                        {c.label.toUpperCase()}
                      </div>
                      <div className="mt-0.5 text-[14px] font-medium leading-snug text-foreground">
                        {c.value}
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            {/* Trust strip */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { icon: Clock, t: "24h", s: "Quote response" },
                { icon: Factory, t: "48h", s: "Sample ships" },
                { icon: ShieldCheck, t: "24 mo", s: "Warranty" },
              ].map((x) => (
                <div
                  key={x.s}
                  className="rounded-lg border border-border bg-background p-4 text-center"
                >
                  <x.icon className="mx-auto size-4 text-brand" />
                  <div className="mt-2 font-mono text-[15px] font-bold text-foreground">
                    {x.t}
                  </div>
                  <div className="text-[11px] text-muted-foreground">{x.s}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <div className="grid size-16 place-items-center rounded-full border border-brand/30 bg-brand-muted">
                    <CheckCircle2 className="size-8 text-brand" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-foreground">
                    Inquiry received
                  </h3>
                  <p className="mt-2 max-w-sm text-[14px] text-muted-foreground">
                    Our coating engineers will respond within one business day.
                    For urgent requests, message us on WhatsApp.
                  </p>
                  <BrandButton
                    variant="outline"
                    className="mt-6"
                    onClick={() => setStatus("idle")}
                  >
                    Send another inquiry
                  </BrandButton>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name *">
                      <input
                        name="name"
                        required
                        className={inputCls}
                        placeholder="Your name"
                      />
                    </Field>
                    <Field label="Company">
                      <input
                        name="company"
                        className={inputCls}
                        placeholder="Company / org"
                      />
                    </Field>
                    <Field label="Email *">
                      <input
                        name="email"
                        type="email"
                        required
                        className={inputCls}
                        placeholder="you@company.com"
                      />
                    </Field>
                    <Field label="Phone / WhatsApp">
                      <input
                        name="phone"
                        className={inputCls}
                        placeholder="+84 ..."
                      />
                    </Field>
                    <Field label="Country / region">
                      <input
                        name="country"
                        className={inputCls}
                        placeholder="Vietnam"
                      />
                    </Field>
                    <Field label="Product of interest">
                      <select name="product" className={inputCls} defaultValue="">
                        <option value="" disabled>
                          Select a system…
                        </option>
                        {products.map((p) => (
                          <option key={p.code} value={p.title}>
                            {p.code} — {p.title}
                          </option>
                        ))}
                        <option value="Other">Other / not sure</option>
                      </select>
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-3">
                    <Field label="Substrate">
                      <input
                        name="substrate"
                        className={inputCls}
                        placeholder="Steel / concrete / …"
                      />
                    </Field>
                    <Field label="Environment">
                      <input
                        name="environment"
                        className={inputCls}
                        placeholder="Marine / indoor / …"
                      />
                    </Field>
                    <Field label="Quantity (kg)">
                      <input
                        name="quantity"
                        className={inputCls}
                        placeholder="e.g. 2,000"
                      />
                    </Field>
                  </div>

                  <Field label="Project details *">
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className={cn(inputCls, "resize-none")}
                      placeholder="Describe your project — substrate, environment, performance requirements, timeline…"
                    />
                  </Field>

                  {status === "error" && errorMsg && (
                    <p className="rounded-md border border-destructive/30 bg-destructive/10 px-4 py-2.5 text-[13px] text-destructive">
                      {errorMsg}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <p className="text-[12px] text-muted-foreground">
                      We respond within 1 business day. Your data is kept
                      confidential.
                    </p>
                    <BrandButton
                      type="submit"
                      size="lg"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? (
                        "Sending…"
                      ) : (
                        <>
                          Send Inquiry <Send className="size-4" />
                        </>
                      )}
                    </BrandButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Export regions */}
      <Section className="border-t border-border bg-card/40">
        <SectionHeading
          eyebrow="Global Export"
          title="Serving 60+ countries worldwide."
          description="Active distributor and logistics channels across six regions."
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {exportRegions.map((r) => (
            <div
              key={r}
              className="flex items-center gap-2.5 rounded-lg border border-border bg-background p-4"
            >
              <span className="size-2 rounded-full bg-brand" />
              <span className="text-[13px] font-medium text-foreground">{r}</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

const inputCls =
  "h-11 w-full rounded-md border border-border bg-background px-3.5 text-[14px] text-foreground placeholder:text-muted-foreground transition-colors focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[10px] tracking-widest text-muted-foreground">
        {label.toUpperCase()}
      </span>
      {children}
    </label>
  );
}
