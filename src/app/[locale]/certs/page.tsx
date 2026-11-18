import type { Metadata } from "next";
import { certifications } from "@/lib/data";
import { withBasePath } from "@/lib/images";
import { SITE, LOCALE_LIST, P, S, LANG_NATIVE } from "@/lib/ssr-i18n";
import type { Locale } from "@/lib/i18n";

type Params = { locale: string };

function isLocale(l: string): l is Locale {
  return (LOCALE_LIST as string[]).includes(l);
}

export function generateStaticParams() {
  return LOCALE_LIST.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale: l } = await params;
  if (!isLocale(l)) return {};
  const languages = Object.fromEntries(LOCALE_LIST.map((x) => [x, `${SITE}/${x}/certs/`]));
  return {
    metadataBase: new URL(SITE),
    title: `${S.certs[l]}${S.suffix[l]}`,
    description: S.certsIntro[l],
    alternates: { canonical: `${SITE}/${l}/certs/`, languages: { ...languages, "x-default": `${SITE}/en/certs/` } },
    openGraph: {
      title: `${S.certs[l]}${S.suffix[l]}`,
      description: S.certsIntro[l],
      url: `${SITE}/${l}/certs/`,
      siteName: "HONG NGUYEN",
      type: "website",
      images: [{ url: `${SITE}/images/hero.jpg`, width: 1200, height: 630, alt: "HONG NGUYEN certifications" }],
    },
  };
}

export default async function CertsPage({ params }: { params: Promise<Params> }) {
  const { locale: l } = await params;
  if (!isLocale(l)) return null;
  const locale = l;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: S.certs[locale],
    itemListElement: certifications.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${c.code} — ${P(c.title, locale)}`,
    })),
  };

  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"} className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
                href={withBasePath(`/${x}/certs/`)}
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
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{S.certs[locale]}</h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-foreground/85">{S.certsIntro[locale]}</p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {certifications.map((c) => (
            <li key={c.code} className="rounded border border-border bg-foreground/[0.03] p-4">
              <p className="font-mono text-sm font-bold tracking-widest text-brand">{c.code}</p>
              <p className="mt-1 text-[14px] text-foreground/85">{P(c.title, locale)}</p>
            </li>
          ))}
        </ul>

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
