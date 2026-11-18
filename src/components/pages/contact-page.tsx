"use client";

import * as React from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Factory,
  Copy,
} from "lucide-react";
import { BrandButton } from "@/components/brand-button";
import { Section, SectionHeading, Eyebrow, Reveal } from "@/components/section";
import { useT } from "@/lib/i18n";
import { useToast } from "@/hooks/use-toast";
import { company, products, exportRegions } from "@/lib/data";
import { cn } from "@/lib/utils";

type Status = "idle" | "success" | "error";

export function ContactPage() {
  const { toast } = useToast();
  const { t, loc } = useT();
  const [status, setStatus] = React.useState<Status>("idle");
  const [errorMsg, setErrorMsg] = React.useState<string>("");
  const [waLink, setWaLink] = React.useState<string>("");
  const [mailHref, setMailHref] = React.useState<string>("");
  const [summary, setSummary] = React.useState<string>("");

  /** Defensive: never crash if the deployed bundle is missing a field —
   *  fall back to the known business WhatsApp number. */
  function whatsappDigits(): string {
    const digits = typeof company.whatsapp === "string" ? company.whatsapp.replace(/\D/g, "") : "";
    return digits || "8613174208290";
  }

  async function copyText(text: string) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // clipboard API unavailable (http/permissions) — last-resort path
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    toast({ title: t("inq.copied") });
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Basic client validation
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    if (!name) { setErrorMsg(t("err.nameRequired")); setStatus("error"); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErrorMsg(t("err.emailRequired")); setStatus("error"); return; }
    if (!message) { setErrorMsg(t("err.messageRequired")); setStatus("error"); return; }

    // Localized inquiry summary (the buyer pastes this into their own app,
    // so the labels follow the language they are reading the site in).
    const val = (k: string) => String(fd.get(k) ?? "").trim();
    const line = (label: string, v: string) => (v ? `${label}: ${v}` : "");
    const fields = [
      `${t("form.fullName")}: ${name}`,
      line(t("form.company"), val("company")),
      `${t("form.email")}: ${email}`,
      line(t("form.phone"), val("phone")),
      line(t("form.country"), val("country")),
      line(t("form.product"), val("product")),
      line(t("form.substrate"), val("substrate")),
      line(t("form.environment"), val("environment")),
      line(t("form.quantity"), val("quantity")),
    ].filter(Boolean).join("\n");
    const text = `${fields}\n\n${t("form.message")}:\n${message}`;

    // Every field required for the hand-off is computed BEFORE any
    // navigation/open call, so a missing field can never lose an inquiry.
    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const mail = `mailto:${company.email}?subject=${subject}&body=${encodeURIComponent(text)}`;
    const wa = `https://wa.me/${whatsappDigits()}?text=${encodeURIComponent(text)}`;
    setMailHref(mail);
    setWaLink(wa);
    setSummary(text);

    // Best-effort: open the visitor's email app with everything pre-filled.
    // If no mail client exists the success screen below still offers
    // WhatsApp / Email / Copy, so the inquiry is never silently lost.
    try {
      window.location.href = mail;
    } catch {
      /* ignore — fallback buttons cover this */
    }

    setStatus("success");
    form.reset();
    toast({
      title: t("toast.inquiryTitle"),
      description: t("toast.inquiryDesc"),
    });
  }

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-brand-muted via-background to-secondary">
        <div className="absolute inset-0 grid-bg text-steel opacity-[0.06]" />
        <div className="pointer-events-none absolute -right-24 top-1/2 size-80 -translate-y-1/2 rounded-full bg-brand/8 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-brand tracking-widest">{t("ctp.index")}</span>
              <span className="h-px w-8 bg-brand/50" />
              <Eyebrow>{t("ctp.eyebrow")}</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t("ctp.title1")}
              <br />
              <span className="text-brand">{t("ctp.title2")}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              {t("ctp.desc")}
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Contact info */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={t("ctp.directEyebrow")}
              title={t("ctp.directTitle")}
              description={t("ctp.directDesc")}
            />

            <ul className="mt-8 space-y-3">
              {[
                {
                  key: "phone",
                  icon: Phone,
                  label: t("footer.contact.phone"),
                  value: company.phone,
                  href: `tel:${company.phone.replace(/\s/g, "")}`,
                },
                {
                  key: "email",
                  icon: Mail,
                  label: t("footer.contact.email"),
                  value: company.email,
                  href: `mailto:${company.email}`,
                },
                {
                  key: "whatsapp",
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: company.whatsapp,
                  href: `https://wa.me/${whatsappDigits()}`,
                },
                {
                  key: "wechat",
                  icon: MessageCircle,
                  label: t("footer.contact.whatsapp"),
                  value: company.contact,
                },
                {
                  key: "address",
                  icon: MapPin,
                  label: t("footer.contact.address"),
                  value: loc(company.address),
                },
              ].map((c) => (
                <li key={c.key}>
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
                { icon: Clock, t: "24h", s: t("ctp.trustQuote") },
                { icon: Factory, t: "48h", s: t("ctp.trustSample") },
                { icon: ShieldCheck, t: "24 mo", s: t("ctp.trustWarranty") },
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
                    {t("ctp.successTitle")}
                  </h3>
                  <p className="mt-2 max-w-md text-[14px] leading-relaxed text-muted-foreground">
                    {t("inq.waHint")}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center gap-2 rounded-md bg-brand px-5 text-sm font-semibold text-brand-foreground transition-all hover:brightness-110"
                    >
                      <MessageCircle className="size-4" /> WhatsApp
                    </a>
                    <BrandButton asChild>
                      <a href={mailHref}>{t("inq.sendEmail")}</a>
                    </BrandButton>
                    <BrandButton variant="outline" onClick={() => copyText(summary)}>
                      <Copy className="size-4" /> {t("inq.copyInquiry")}
                    </BrandButton>
                  </div>
                  <BrandButton
                    variant="outline"
                    className="mt-8"
                    onClick={() => setStatus("idle")}
                  >
                    {t("cta.sendAnother")}
                  </BrandButton>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label={`${t("form.fullName")} ${t("form.required")}`}>
                      <input
                        name="name"
                        required
                        className={inputCls}
                        placeholder={t("form.namePlaceholder")}
                      />
                    </Field>
                    <Field label={t("form.company")}>
                      <input
                        name="company"
                        className={inputCls}
                        placeholder={t("form.companyPlaceholder")}
                      />
                    </Field>
                    <Field label={`${t("form.email")} ${t("form.required")}`}>
                      <input
                        name="email"
                        type="email"
                        required
                        className={inputCls}
                        placeholder={t("form.emailPlaceholder")}
                      />
                    </Field>
                    <Field label={t("form.phone")}>
                      <input
                        name="phone"
                        className={inputCls}
                        placeholder={t("form.phonePlaceholder")}
                      />
                    </Field>
                    <Field label={t("form.country")}>
                      <input
                        name="country"
                        className={inputCls}
                        placeholder={t("form.countryPlaceholder")}
                      />
                    </Field>
                    <Field label={t("form.product")}>
                      <select name="product" className={inputCls} defaultValue="">
                        <option value="" disabled>
                          {t("form.productPlaceholder")}
                        </option>
                        {products.map((p) => (
                          <option key={p.code} value={loc(p.title)}>
                            {p.code} — {loc(p.title)}
                          </option>
                        ))}
                        <option value="Other">{t("form.other")}</option>
                      </select>
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-3">
                    <Field label={t("form.substrate")}>
                      <input
                        name="substrate"
                        className={inputCls}
                        placeholder={t("form.substratePlaceholder")}
                      />
                    </Field>
                    <Field label={t("form.environment")}>
                      <input
                        name="environment"
                        className={inputCls}
                        placeholder={t("form.environmentPlaceholder")}
                      />
                    </Field>
                    <Field label={t("form.quantity")}>
                      <input
                        name="quantity"
                        className={inputCls}
                        placeholder={t("form.quantityPlaceholder")}
                      />
                    </Field>
                  </div>

                  <Field label={`${t("form.message")} ${t("form.required")}`}>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className={cn(inputCls, "resize-none")}
                      placeholder={t("form.messagePlaceholder")}
                    />
                  </Field>

                  {status === "error" && errorMsg && (
                    <p className="rounded-md border border-destructive/30 bg-destructive/10 px-4 py-2.5 text-[13px] text-destructive">
                      {errorMsg}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <p className="text-[12px] text-muted-foreground">
                      {t("ctp.formPrivacy")}
                    </p>
                    <BrandButton type="submit" size="lg">
                      {t("cta.sendInquiry")} <Send className="size-4" />
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
          eyebrow={t("ctp.globalEyebrow")}
          title={t("ctp.globalTitle")}
          description={t("ctp.globalDesc")}
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {exportRegions.map((r) => (
            <div
              key={r.en}
              className="flex items-center gap-2.5 rounded-lg border border-border bg-background p-4"
            >
              <span className="size-2 rounded-full bg-brand" />
              <span className="text-[13px] font-medium text-foreground">{loc(r)}</span>
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
