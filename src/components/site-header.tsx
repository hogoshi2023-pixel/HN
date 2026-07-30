"use client";

import * as React from "react";
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react";
import { BrandButton } from "@/components/brand-button";
import { useNav, type PageId } from "@/lib/nav-store";
import { company } from "@/lib/data";
import { cn } from "@/lib/utils";

const NAV: { id: PageId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "products", label: "Products" },
  { id: "solutions", label: "Solutions" },
  { id: "cases", label: "Cases" },
  { id: "about", label: "About" },
  { id: "news", label: "News" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export function SiteHeader() {
  const { page, navigate } = useNav();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: PageId) => {
    navigate(id);
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      {/* Top utility bar */}
      <div className="hidden md:block border-b border-border/60 bg-ink/40 text-muted-foreground">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-[12px]">
          <div className="flex items-center gap-4 font-mono tracking-wider">
            <span className="text-brand">EST. {company.established}</span>
            <span aria-hidden>·</span>
            <span>ISO 9001:2015</span>
            <span aria-hidden>·</span>
            <span>SGS</span>
            <span aria-hidden>·</span>
            <span>CE</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Phone className="size-3.5" /> {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Mail className="size-3.5" /> {company.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <button
          onClick={() => go("home")}
          className="group flex items-center gap-3"
          aria-label="HONG NGUYEN home"
        >
          <span className="grid size-10 place-items-center rounded-md bg-brand text-brand-foreground font-mono font-bold text-lg shadow-[0_6px_20px_-6px_var(--brand)] transition-transform group-hover:scale-105">
            HN
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="text-[15px] font-bold tracking-tight text-foreground">
              {company.name}
            </span>
            <span className="text-[11px] font-mono text-muted-foreground tracking-widest uppercase">
              {company.cnName}
            </span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={cn(
                "relative px-3.5 py-2 text-[13.5px] font-medium transition-colors",
                page === item.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
              {page === item.id && (
                <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-brand" />
              )}
            </button>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <BrandButton
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => go("contact")}
          >
            Get A Free Quote <ChevronRight className="size-4" />
          </BrandButton>
          <button
            className="lg:hidden grid size-10 place-items-center rounded-md border border-border text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="mx-auto grid max-w-7xl gap-1 px-6 py-4">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={cn(
                  "flex items-center justify-between rounded-md px-3 py-2.5 text-left text-[15px] font-medium transition-colors",
                  page === item.id
                    ? "bg-brand-muted text-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                {item.label}
                <ChevronRight
                  className={cn(
                    "size-4 transition-transform",
                    page === item.id ? "text-brand translate-x-0.5" : "opacity-40"
                  )}
                />
              </button>
            ))}
            <BrandButton
              className="mt-2 w-full"
              onClick={() => go("contact")}
            >
              Get A Free Quote <ChevronRight className="size-4" />
            </BrandButton>
          </nav>
        </div>
      )}
    </header>
  );
}
