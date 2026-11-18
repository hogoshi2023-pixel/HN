import type { Metadata } from "next";
import { certifications, products, specSheet, stats } from "@/lib/data";
import { withBasePath } from "@/lib/images";
import { ContactBadge } from "@/components/contact-badge";
import { SITE, LOCALE_LIST, P, S, LANG_NATIVE } from "@/lib/ssr-i18n";
import type { Locale } from "@/lib/i18n";

type Params = { locale: string };

function isLocale(l: string): l is Locale {
  return (LOCALE_LIST as string[]).includes(l);
}

export function generateStaticParams() {
  return LOCALE_LIST.map((locale) => ({ locale }));
}

const homeUrl = (locale: string) => `${SITE}/${locale}/`;

const OG_LOCALE: Record<string, string> = { en: "en_US", zh: "zh_CN", vi: "vi_VN", es: "es_ES", ar: "ar_AR" };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale: l } = await params;
  if (!isLocale(l)) return {};
  const languages = Object.fromEntries(LOCALE_LIST.map((x) => [x, homeUrl(x)]));
  return {
    metadataBase: new URL(SITE),
    title: `${S.heroTitle[l]}${S.suffix[l]}`,
    description: S.heroDesc[l],
    alternates: { canonical: homeUrl(l), languages: { ...languages, "x-default": `${SITE}/` } },
    openGraph: {
      title: `${S.heroTitle[l]}${S.suffix[l]}`,
      description: S.heroDesc[l],
      url: homeUrl(l),
      siteName: "HONG NGUYEN",
      type: "website",
      locale: OG_LOCALE[l],
      alternateLocale: LOCALE_LIST.filter((x) => x !== l).map((x) => OG_LOCALE[x]),
      images: [{ url: `${SITE}/images/hero.jpg`, width: 1200, height: 630, alt: "HONG NGUYEN industrial coatings" }],
    },
  };
}

export default async function LocaleHome({ params }: { params: Promise<Params> }) {
  const { locale: l } = await params;
  if (!isLocale(l)) return null;
  const locale = l;
  const spaQuote = withBasePath(`/?lang=${locale}#/contact`);
  const spaProducts = withBasePath(`/?lang=${locale}#/products`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${S.heroTitle[locale]}${S.suffix[locale]}`,
    description: S.heroDesc[locale],
    url: homeUrl(locale),
    inLanguage: locale,
    isPartOf: { "@id": `${SITE}/#site` },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: S.home[locale], item: homeUrl(locale) },
    ],
  };

  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"} className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center gap-x-4 gap-y-2 px-6 py-4">
          <a href={withBasePath("/")} className="flex items-center gap-2 font-mono text-sm font-bold tracking-widest">
            <span className="border border-brand px-1.5 py-0.5 text-brand">HN</span>
            <span className="text-foreground">HONG NGUYEN</span>
          </a>
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{S.tagline[locale]}</span>
          <nav className="ms-auto flex items-center gap-3 font-mono text-[11px] tracking-widest">
            {LOCALE_LIST.map((x) => (
              <a
                key={x}
                href={withBasePath(`/${x}/`)}
                aria-current={x === locale ? "true" : undefined}
                className={x === locale ? "text-brand" : "text-muted-foreground hover:text-foreground"}
              >
                {LANG_NATIVE[x]}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10">
        {/* Hero */}
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{S.heroTitle[locale]}</h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-foreground/85">{S.heroDesc[locale]}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={spaQuote}
            className="inline-flex items-center border border-brand bg-brand px-5 py-2.5 font-mono text-[12px] font-bold uppercase tracking-widest text-background transition-colors hover:bg-brand/90"
          >
            {S.getQuote[locale]}
          </a>
          <a
            href={spaProducts}
            className="inline-flex items-center border border-brand bg-brand/10 px-5 py-2.5 font-mono text-[12px] font-bold uppercase tracking-widest text-brand transition-colors hover:bg-brand hover:text-background"
          >
            {S.viewProducts[locale]}
          </a>
        </div>

        {/* Stats */}
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <li key={s.value} className="rounded border border-border bg-foreground/[0.03] p-4 text-center">
              <p className="font-mono text-2xl font-bold text-brand">{s.value}</p>
              <p className="mt-1 text-[13px] font-medium text-foreground/90">{P(s.label, locale)}</p>
              <p className="text-[11px] text-muted-foreground">{P(s.sub, locale)}</p>
            </li>
          ))}
        </ul>

        {/* Spec sheet */}
        <section className="mt-10">
          <h2 className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest text-brand">{S.specTitle[locale]}</h2>
          <dl className="grid gap-x-8 gap-y-2 rounded border border-border bg-foreground/[0.03] p-5 sm:grid-cols-2">
            {specSheet.map((row) => (
              <div key={P(row.label, "en")} className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-1.5">
                <dt className="text-[12.5px] text-muted-foreground">{P(row.label, locale)}</dt>
                <dd className="font-mono text-[12.5px] font-medium text-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Product categories */}
        <section className="mt-10">
          <h2 className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest text-brand">{S.categoriesTitle[locale]}</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {products.map((cat) => (
              <li key={cat.code} className="rounded border border-border bg-foreground/[0.03] p-4">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-mono text-sm font-bold tracking-widest text-brand">{cat.code}</p>
                  <p className="font-mono text-[11px] text-muted-foreground">
                    {cat.models.length} {S.modelsCount[locale]}
                  </p>
                </div>
                <p className="mt-1 text-[14px] font-medium text-foreground/90">{P(cat.title, locale)}</p>
                <p className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">{P(cat.short, locale)}</p>
                <p className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground/80">{P(cat.description, locale)}</p>
                <a
                  href={withBasePath(`/?lang=${locale}#/products/${cat.code}`)}
                  className="mt-2 inline-block font-mono text-[11px] uppercase tracking-widest text-brand hover:underline"
                >
                  {S.viewModels[locale]}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Certifications */}
        <section className="mt-10">
          <ul className="flex flex-wrap gap-2">
            {certifications.map((c) => (
              <li key={c.code} className="border border-border px-3 py-1.5 font-mono text-[11px] tracking-widest text-muted-foreground">
                {c.code}
              </li>
            ))}
          </ul>
          <a href={withBasePath(`/${locale}/certs/`)} className="mt-3 inline-block font-mono text-[11px] uppercase tracking-widest text-brand hover:underline">
            {S.certs[locale]} →
          </a>
        </section>

        {/* Quote CTA */}
        <section className="mt-10 border-t border-border pt-6">
          <p className="text-[15px] font-medium">{S.getQuote[locale]}</p>
          <div className="mt-4 flex flex-col gap-3">
            <a href="mailto:hogoshi2023@gmail.com" className="group flex items-center gap-3.5">
              <ContactBadge kind="mail" />
              <span className="font-mono text-[13px] text-muted-foreground group-hover:text-foreground">hogoshi2023@gmail.com</span>
            </a>
            <a href="https://wa.me/8613174208290" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3.5">
              <ContactBadge kind="whatsapp" />
              <span className="font-mono text-[13px] text-muted-foreground group-hover:text-foreground">+86 131 7420 8290 · WhatsApp</span>
            </a>
            <a href={spaQuote} className="mt-1 font-mono text-[11px] uppercase tracking-widest text-brand hover:underline">
              {S.backSite[locale]} →
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center gap-x-6 gap-y-2 px-6 py-6 font-mono text-[11px] tracking-wider text-muted-foreground">
          <span>{S.contact[locale]} hogoshi2023@gmail.com · WhatsApp +86 131 7420 8290</span>
          <span>© {new Date().getFullYear()} HONG NGUYEN</span>
        </div>
      </footer>
    </div>
  );
}
