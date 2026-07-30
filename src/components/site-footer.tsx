"use client";

import { Phone, Mail, MapPin, MessageCircle, Globe, ChevronRight } from "lucide-react";
import { company, exportRegions } from "@/lib/data";
import { useNav, type PageId } from "@/lib/nav-store";
import { BrandButton } from "@/components/brand-button";

const PRODUCT_LINKS: { label: string; target: string }[] = [
  { label: "Anti-Corrosion Coatings", target: "CAT-01" },
  { label: "High-Temperature Paints", target: "CAT-02" },
  { label: "Epoxy Floor Systems", target: "CAT-03" },
  { label: "Weatherproof Topcoats", target: "CAT-04" },
  { label: "Architectural Wall Paints", target: "CAT-05" },
  { label: "Custom Formulations", target: "CAT-06" },
];

const COMPANY_LINKS: { label: string; page: PageId }[] = [
  { label: "About Us", page: "about" },
  { label: "Project Cases", page: "cases" },
  { label: "Solutions", page: "solutions" },
  { label: "News & Blog", page: "news" },
  { label: "FAQ", page: "faq" },
  { label: "Contact", page: "contact" },
];

export function SiteFooter() {
  const { navigate } = useNav();

  return (
    <footer className="mt-auto border-t border-border bg-ink text-muted-foreground">
      {/* CTA strip */}
      <div className="border-b border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-6 py-10 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-brand text-[11px]">[ 09 ] Request Quote</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Get a quote in 24 hours. Sample shipped in 48.
            </h3>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Tell us your project — substrate, environment, performance
              requirements. Our coating engineers respond same business day.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <BrandButton size="lg" onClick={() => navigate("contact")}>
              Request Free Quote <ChevronRight className="size-4" />
            </BrandButton>
            <BrandButton
              size="lg"
              variant="outline"
              onClick={() => navigate("contact")}
            >
              <MessageCircle className="size-4" /> WhatsApp Chat
            </BrandButton>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-12">
        {/* Brand */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-md bg-brand text-brand-foreground font-mono font-bold text-lg">
              HN
            </span>
            <div className="leading-none">
              <div className="text-[15px] font-bold tracking-tight text-foreground">
                {company.name}
              </div>
              <div className="text-[11px] font-mono tracking-widest uppercase">
                {company.cnName}
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Premium industrial coatings manufacturer since 2003. Direct factory
            supply, OEM/ODM service, global B2B export to 60+ countries.
          </p>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
              <span className="leading-relaxed">{company.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-brand" />
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-foreground">
                {company.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-brand" />
              <a href={`mailto:${company.email}`} className="hover:text-foreground">
                {company.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageCircle className="size-4 shrink-0 text-brand" />
              <span>{company.whatsapp}</span>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div className="lg:col-span-3">
          <h4 className="eyebrow text-[11px] text-foreground/80">Products</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {PRODUCT_LINKS.map((l) => (
              <li key={l.target}>
                <button
                  onClick={() => navigate("products", l.target)}
                  className="text-left transition-colors hover:text-brand"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="lg:col-span-2">
          <h4 className="eyebrow text-[11px] text-foreground/80">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {COMPANY_LINKS.map((l) => (
              <li key={l.page}>
                <button
                  onClick={() => navigate(l.page)}
                  className="text-left transition-colors hover:text-brand"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Export regions */}
        <div className="lg:col-span-3">
          <h4 className="eyebrow text-[11px] text-foreground/80 flex items-center gap-2">
            <Globe className="size-3.5" /> Export Regions
          </h4>
          <ul className="mt-4 grid grid-cols-2 gap-2.5 text-sm">
            {exportRegions.map((r) => (
              <li key={r} className="flex items-center gap-1.5">
                <span className="size-1 rounded-full bg-brand" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-[12px] text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name} Co., Ltd. All rights
            reserved.
          </p>
          <p className="flex flex-wrap items-center gap-2 font-mono tracking-wider">
            {company.certs.map((c, i) => (
              <span key={c} className="flex items-center gap-2">
                {i > 0 && <span className="opacity-30">·</span>}
                {c}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
