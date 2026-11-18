import type { MetadataRoute } from "next";
import { products } from "@/lib/data";
import { SITE, LOCALE_LIST } from "@/lib/ssr-i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Home cluster: /en/ /zh/ ... self-canonical static pages; the root SPA
  // (language selector) is the x-default target.
  const homeAlternates = {
    languages: {
      ...Object.fromEntries(LOCALE_LIST.map((l) => [l, `${SITE}/${l}/`])),
      "x-default": `${SITE}/`,
    },
  };
  const entries: MetadataRoute.Sitemap = LOCALE_LIST.map((l) => ({
    url: `${SITE}/${l}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
    alternates: homeAlternates,
  }));
  // Root SPA entry (language-agnostic landing).
  entries.push({ url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 });

  for (const l of LOCALE_LIST) {
    entries.push({
      url: `${SITE}/${l}/certs/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: {
        languages: {
          ...Object.fromEntries(LOCALE_LIST.map((x) => [x, `${SITE}/${x}/certs/`])),
          "x-default": `${SITE}/en/certs/`,
        },
      },
    });
  }
  for (const cat of products) {
    for (const m of cat.models) {
      const slug = m.model.toLowerCase();
      entries.push({
        url: `${SITE}/en/products/${slug}/`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(LOCALE_LIST.map((l) => [l, `${SITE}/${l}/products/${slug}/`])),
        },
      });
    }
  }
  return entries;
}
