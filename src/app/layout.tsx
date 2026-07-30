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
  title: "HONG NGUYEN Industrial Coatings — Premium Paint Manufacturer & Global B2B Export",
  description:
    "HONG NGUYEN — ISO 9001 certified industrial paint manufacturer since 2003. Anti-corrosion, high-temperature, epoxy floor, and architectural coatings. Factory direct, OEM/ODM, global export to 60+ countries.",
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
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "HONG NGUYEN Industrial Coatings",
    description:
      "Premium industrial coatings manufacturer since 2003. Factory direct, OEM/ODM, global B2B export to 60+ countries.",
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
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
