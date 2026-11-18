"use client";

import * as React from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LangHydrator } from "@/components/language-switcher";
import { useNav } from "@/lib/nav-store";
import { useT } from "@/lib/i18n";
import { HomePage } from "@/components/pages/home-page";
import { ProductsPage } from "@/components/pages/products-page";
import { SolutionsPage } from "@/components/pages/solutions-page";
import { CasesPage } from "@/components/pages/cases-page";
import { AboutPage } from "@/components/pages/about-page";
import { NewsPage } from "@/components/pages/news-page";
import { FaqPage } from "@/components/pages/faq-page";
import { ContactPage } from "@/components/pages/contact-page";

function CurrentPage({ page }: { page: ReturnType<typeof useNav.getState>["page"] }) {
  switch (page) {
    case "products":
      return <ProductsPage />;
    case "solutions":
      return <SolutionsPage />;
    case "cases":
      return <CasesPage />;
    case "about":
      return <AboutPage />;
    case "news":
      return <NewsPage />;
    case "faq":
      return <FaqPage />;
    case "contact":
      return <ContactPage />;
    case "home":
    default:
      return <HomePage />;
  }
}

export default function Page() {
  const page = useNav((s) => s.page);
  const syncFromLocation = useNav((s) => s.syncFromLocation);
  const { t, locale } = useT();

  // Deep links (#/contact, #/products/CAT-01) and browser Back/Forward:
  // keep the active view in sync with the URL hash.
  React.useEffect(() => {
    syncFromLocation();
    const onHash = () => syncFromLocation();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [syncFromLocation]);

  // Keep the browser tab / SEO title in sync with the active view and language.
  React.useEffect(() => {
    const label = page === "home" ? "" : `${t(`nav.${page}`)} — `;
    document.title = `${label}HONG NGUYEN Industrial Coatings`;
    document.documentElement.lang = locale === "zh" ? "zh-CN" : locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [page, locale, t]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <LangHydrator />
      <SiteHeader />
      <main className="flex-1">
        <CurrentPage key={page} page={page} />
      </main>
      <SiteFooter />
    </div>
  );
}
