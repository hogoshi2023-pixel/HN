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
  title: "HONG NGUYEN Industrial Coatings — Coating Systems Exporter from Foshan, China",
  description:
    "Chinese exporter of anti-corrosion, high-temperature, epoxy floor and architectural coating systems — sourced from ISO 9001 certified plants in China's coatings hub. Full export documentation · OEM/ODM · RAL/Pantone colour matching · 24-month quality warranty.",
  keywords: [
    "industrial paint",
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
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.svg`,
  },
  openGraph: {
    title: "HONG NGUYEN Industrial Coatings",
    description:
      "Chinese exporter of anti-corrosion, high-temperature, epoxy floor and architectural coating systems — sourced from ISO 9001 certified plants in China's coatings hub.",
    siteName: "HONG NGUYEN",
    type: "website",
  },
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
