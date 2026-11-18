import type { Metadata } from "next";
import { products, tdsPdfs, company, type Product } from "@/lib/data";
import { withBasePath } from "@/lib/images";
import { SITE, LOCALE_LIST, P, S, LANG_NATIVE } from "@/lib/ssr-i18n";
import type { Locale } from "@/lib/i18n";

type Params = { locale: string; model: string };
type ModelEntry = Product["models"][number];

function isLocale(l: string): l is Locale {
  return (LOCALE_LIST as string[]).includes(l);
}

/** 扁平索引：型号 slug（小写 HN 码）→ 所属类目 + 条目 */
const INDEX = new Map<string, { cat: Product; entry: ModelEntry }>();
for (const cat of products) {
  for (const m of cat.models) INDEX.set(m.model.toLowerCase(), { cat, entry: m });
}

export function generateStaticParams() {
  const out: Params[] = [];
  for (const l of LOCALE_LIST) for (const slug of INDEX.keys()) out.push({ locale: l, model: slug });
  return out;
}

const pageUrl = (locale: string, slug: string) => `${SITE}/${locale}/products/${slug}/`;

const OG_LOCALE: Record<string, string> = { en: "en_US", zh: "zh_CN", vi: "vi_VN", es: "es_ES", ar: "ar_AR" };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale: l, model } = await params;
  if (!isLocale(l)) return {};
  const hit = INDEX.get(model);
  if (!hit) return {};
  const languages = Object.fromEntries(LOCALE_LIST.map((x) => [x, pageUrl(x, model)]));
  const title = `${hit.entry.model} ${P(hit.entry.desc, l)}`;
  return {
    metadataBase: new URL(SITE),
    title: `${title}${S.suffix[l]}`,
    description: P(hit.entry.desc, l),
    alternates: {
      // Self-canonical: with an hreflang cluster each language page must
      // point at itself, otherwise Google drops the non-English alternates.
      canonical: pageUrl(l, model),
      languages: { ...languages, "x-default": pageUrl("en", model) },
    },
    openGraph: {
      title,
      description: P(hit.entry.desc, l),
      url: pageUrl(l, model),
      siteName: "HONG NGUYEN",
      type: "website",
      locale: OG_LOCALE[l],
      alternateLocale: LOCALE_LIST.filter((x) => x !== l).map((x) => OG_LOCALE[x]),
      images: [{ url: `${SITE}/images/hero.jpg`, width: 1200, height: 630, alt: title }],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { locale: l, model } = await params;
  const hit = isLocale(l) ? INDEX.get(model) : undefined;
  if (!hit) return null;
  const locale = l;
  const { cat, entry } = hit;
  const { desc, details } = entry;
  const hasPdf = (tdsPdfs as string[]).includes(entry.model);

  // Inquiry hand-off: subject carries the model so the exporter knows which
  // page the buyer came from; body is pre-filled with the product and URL.
  const inquiryText = `${entry.model} — ${P(desc, "en")}\n${pageUrl(locale, model)}\n\nQuantity (L): \nApplication / project: \nCountry: `;
  const mailtoHref = `mailto:${company.email}?subject=${encodeURIComponent(`Inquiry: ${entry.model}`)}&body=${encodeURIComponent(inquiryText)}`;
  const waHref = `https://wa.me/${company.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(inquiryText)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${entry.model} ${P(desc, "en")}`,
    sku: entry.model,
    description: P(desc, "en"),
    brand: { "@type": "Brand", name: "HONG NGUYEN" },
    category: P(cat.title, "en"),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: S.home[locale], item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: S.products[locale], item: `${SITE}/` },
      { "@type": "ListItem", position: 3, name: P(cat.title, locale) },
      { "@type": "ListItem", position: 4, name: entry.model, item: pageUrl(locale, model) },
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
                href={withBasePath(`/${x}/products/${model}/`)}
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
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <a href={withBasePath("/")} className="hover:text-brand">{S.products[locale]}</a>
          <span className="mx-2">›</span>
          <span>{P(cat.title, locale)}</span>
          <span className="mx-2">›</span>
          <span className="text-brand">{entry.model}</span>
        </p>
        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          <span className="font-mono text-brand">{entry.model}</span>
          <span className="mx-2 text-muted-foreground">·</span>
          {P(desc, locale)}
        </h1>

        {details ? (
          <section className="mt-10">
            <h2 className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest text-brand">{S.techData[locale]}</h2>
            <pre className="overflow-x-auto whitespace-pre-wrap rounded border border-border bg-foreground/[0.03] p-5 font-mono text-[12.5px] leading-relaxed text-foreground/90">
              {P(details, locale)}
            </pre>
          </section>
        ) : (
          <p className="mt-8 rounded border border-border p-5 font-mono text-[12.5px] text-muted-foreground">{S.paramsOnRequest[locale]}</p>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {hasPdf && (
            <a
              href={withBasePath(`/tds/${entry.model}-en.pdf`)}
              className="inline-flex items-center gap-2 border border-brand bg-brand/10 px-5 py-2.5 font-mono text-[12px] font-bold uppercase tracking-widest text-brand transition-colors hover:bg-brand hover:text-background"
            >
              {S.downloadTds[locale]} — {entry.model}
            </a>
          )}
          <a
            href={mailtoHref}
            className="inline-flex items-center gap-2 border border-brand bg-brand px-5 py-2.5 font-mono text-[12px] font-bold uppercase tracking-widest text-background transition-colors hover:bg-brand/90"
          >
            {S.inquireThis[locale]}
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-5 py-2.5 font-mono text-[12px] font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:border-brand hover:text-brand"
          >
            {S.waThis[locale]}
          </a>
        </div>

        <section className="mt-8 border-t border-border pt-6">
          <a href={withBasePath("/")} className="font-mono text-[11px] uppercase tracking-widest text-brand hover:underline">
            {S.backSite[locale]} →
          </a>
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
