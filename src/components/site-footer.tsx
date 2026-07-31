"use client";

import { Phone, Mail, MapPin, MessageCircle, Globe, ChevronRight } from "lucide-react";
import { company, exportRegions } from "@/lib/data";
import { useNav, type PageId } from "@/lib/nav-store";
import { useT } from "@/lib/i18n";
import { BrandButton } from "@/components/brand-button";

const PRODUCT_LINKS: { labelKey: string; target: string }[] = [
  { labelKey: "p:cat-01", target: "CAT-01" },
  { labelKey: "p:cat-02", target: "CAT-02" },
  { labelKey: "p:cat-03", target: "CAT-03" },
  { labelKey: "p:cat-04", target: "CAT-04" },
  { labelKey: "p:cat-05", target: "CAT-05" },
  { labelKey: "p:cat-06", target: "CAT-06" },
];

const COMPANY_LINKS: { labelKey: string; page: PageId }[] = [
  { labelKey: "footer.about", page: "about" },
  { labelKey: "footer.cases", page: "cases" },
  { labelKey: "footer.solutions", page: "solutions" },
  { labelKey: "footer.news", page: "news" },
  { labelKey: "footer.faq", page: "faq" },
  { labelKey: "footer.contact", page: "contact" },
];

export function SiteFooter() {
  const { navigate } = useNav();
  const { t, loc } = useT();

  // Map product code -> localized title from products data (via lazy import to avoid cycle weight)
  const productLabels: Record<string, string> = {
    "CAT-01": loc({ en: "Anti-Corrosion Coatings", zh: "防腐涂料", vi: "Sơn chống ăn mòn" }),
    "CAT-02": loc({ en: "High-Temperature Paints", zh: "耐高温涂料", vi: "Sơn chịu nhiệt cao" }),
    "CAT-03": loc({ en: "Epoxy Floor Systems", zh: "环氧地坪系统", vi: "Hệ sàn epoxy" }),
    "CAT-04": loc({ en: "Weatherproof Topcoats", zh: "耐候面漆", vi: "Sơn phủ chịu thời tiết" }),
    "CAT-05": loc({ en: "Architectural Wall Paints", zh: "建筑墙面涂料", vi: "Sơn tường kiến trúc" }),
    "CAT-06": loc({ en: "Custom Formulations", zh: "定制配方", vi: "Phối chế theo yêu cầu" }),
  };

  const companyLabelMap: Record<string, string> = {
    "footer.about": loc({ en: "About Us", zh: "关于我们", vi: "Giới thiệu" }),
    "footer.cases": loc({ en: "Project Cases", zh: "项目案例", vi: "Dự án tiêu biểu" }),
    "footer.solutions": loc({ en: "Solutions", zh: "解决方案", vi: "Giải pháp" }),
    "footer.news": loc({ en: "News & Blog", zh: "新闻与博客", vi: "Tin tức & Blog" }),
    "footer.faq": loc({ en: "FAQ", zh: "常见问题", vi: "Câu hỏi" }),
    "footer.contact": loc({ en: "Contact", zh: "联系", vi: "Liên hệ" }),
  };

  return (
    <footer className="mt-auto border-t border-border bg-ink text-muted-foreground">
      {/* CTA strip */}
      <div className="border-b border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-6 py-10 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-brand text-[11px]">{t("rq.index")} {t("rq.eyebrow")}</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {t("rq.title")}
            </h3>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              {t("rq.desc")}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <BrandButton size="lg" onClick={() => navigate("contact")}>
              {t("cta.requestFreeQuote")} <ChevronRight className="size-4" />
            </BrandButton>
            <BrandButton
              size="lg"
              variant="outline"
              onClick={() => navigate("contact")}
            >
              <MessageCircle className="size-4" /> {t("cta.whatsappChat")}
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
            {t("brand.premiumDesc")}
          </p>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
              <span className="leading-relaxed">{loc(company.address)}</span>
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
              <span>{loc(company.whatsapp)}</span>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div className="lg:col-span-3">
          <h4 className="eyebrow text-[11px] text-foreground/80">{t("footer.products")}</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {PRODUCT_LINKS.map((l) => (
              <li key={l.target}>
                <button
                  onClick={() => navigate("products", l.target)}
                  className="text-left transition-colors hover:text-brand"
                >
                  {productLabels[l.target]}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="lg:col-span-2">
          <h4 className="eyebrow text-[11px] text-foreground/80">{t("footer.company")}</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {COMPANY_LINKS.map((l) => (
              <li key={l.page}>
                <button
                  onClick={() => navigate(l.page)}
                  className="text-left transition-colors hover:text-brand"
                >
                  {companyLabelMap[l.labelKey]}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Export regions */}
        <div className="lg:col-span-3">
          <h4 className="eyebrow text-[11px] text-foreground/80 flex items-center gap-2">
            <Globe className="size-3.5" /> {t("footer.exportRegions")}
          </h4>
          <ul className="mt-4 grid grid-cols-2 gap-2.5 text-sm">
            {exportRegions.map((r) => (
              <li key={r.en} className="flex items-center gap-1.5">
                <span className="size-1 rounded-full bg-brand" />
                {loc(r)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-[12px] text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name} Co., Ltd. {t("footer.rights")}
          </p>
          <p className="flex flex-wrap items-center gap-2 font-mono tracking-wider">
            {company.certs.map((c, i) => (
              <span key={c} className="flex items-center gap-2">
                {i > 0 && <span className="opacity-30">·</span>}
                {c}
              </span>
            ))}
            <span className="opacity-30">·</span>
            <button
              onClick={() => navigate("admin")}
              className="transition-colors hover:text-brand"
              title="Admin"
            >
              Admin
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}
