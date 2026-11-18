import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hogoshi2023-pixel.github.io/HN"),
  title: "HONG NGUYEN Industrial Coatings — Coating Systems Exporter from Foshan, China",
  description:
    "HONG NGUYEN — Chinese exporter of industrial coating systems: anti-corrosion, high-temperature, epoxy floor and architectural paints, sourced from ISO 9001 certified plants. OEM/ODM, RAL/Pantone colour matching, full export documentation, worldwide shipping.",
  keywords: [
    "industrial paint supplier China",
    "anti-corrosion coating",
    "epoxy floor paint",
    "high-temperature paint",
    "exterior wall paint",
    "OEM paint manufacturer",
    "B2B coating export",
    "HONG NGUYEN",
  ],
  authors: [{ name: "HONG NGUYEN Co., Ltd." }],
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "https://hogoshi2023-pixel.github.io/HN/",
  },
  openGraph: {
    title: "HONG NGUYEN Industrial Coatings",
    description:
      "Industrial coating systems exported from Foshan, China — anti-corrosion, high-temperature, epoxy floor and architectural paints. OEM/ODM, colour matching, full export documentation.",
    url: "https://hogoshi2023-pixel.github.io/HN/",
    siteName: "HONG NGUYEN",
    type: "website",
    images: [{ url: "https://hogoshi2023-pixel.github.io/HN/images/hero.jpg", width: 1200, height: 630, alt: "HONG NGUYEN industrial coatings" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HONG NGUYEN Industrial Coatings",
    description: "Coating systems exporter from Foshan, China — anti-corrosion, high-temperature, epoxy floor and architectural paints.",
    images: ["https://hogoshi2023-pixel.github.io/HN/images/hero.jpg"],
  },
};

/** 站点级结构化数据：Organization + WebSite（所有页面共用） */
const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://hogoshi2023-pixel.github.io/HN/#org",
      name: "HONG NGUYEN Industrial Coatings",
      url: "https://hogoshi2023-pixel.github.io/HN/",
      logo: "https://hogoshi2023-pixel.github.io/HN/favicon.svg",
      description:
        "Chinese exporter of industrial coating systems — anti-corrosion, high-temperature, epoxy floor and architectural paints sourced from ISO 9001 certified plants.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Shunde, Foshan",
        addressRegion: "Guangdong",
        addressCountry: "CN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hogoshi2023@gmail.com",
        telephone: "+86-131-7420-8290",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://hogoshi2023-pixel.github.io/HN/#site",
      url: "https://hogoshi2023-pixel.github.io/HN/",
      name: "HONG NGUYEN Industrial Coatings",
      publisher: { "@id": "https://hogoshi2023-pixel.github.io/HN/#org" },
      inLanguage: ["en", "zh", "vi", "es", "ar"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }} />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
