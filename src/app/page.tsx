"use client";

import * as React from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LangHydrator } from "@/components/language-switcher";
import { useNav } from "@/lib/nav-store";
import { HomePage } from "@/components/pages/home-page";
import { ProductsPage } from "@/components/pages/products-page";
import { SolutionsPage } from "@/components/pages/solutions-page";
import { CasesPage } from "@/components/pages/cases-page";
import { AboutPage } from "@/components/pages/about-page";
import { NewsPage } from "@/components/pages/news-page";
import { FaqPage } from "@/components/pages/faq-page";
import { ContactPage } from "@/components/pages/contact-page";
import { AdminPage } from "@/components/pages/admin-page";

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
    case "admin":
      return <AdminPage />;
    case "home":
    default:
      return <HomePage />;
  }
}

export default function Page() {
  const page = useNav((s) => s.page);
  const navigate = useNav((s) => s.navigate);

  // Detect ?admin=1 (or #admin) on mount → switch to admin view.
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    const isAdmin = url.searchParams.get("admin") === "1" || url.hash === "#admin";
    if (isAdmin) navigate("admin");
  }, []);

  const isAdmin = page === "admin";

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <LangHydrator />
      {!isAdmin && <SiteHeader />}
      <main className="flex-1">
        <CurrentPage key={page} page={page} />
      </main>
      {!isAdmin && <SiteFooter />}
    </div>
  );
}
