import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { clinicSchema, JsonLd } from "@/components/json-ld";
import { MobileCtaBar } from "@/components/layout/mobile-cta-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { site } from "@/content/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} | Vancouver Massage, Acupuncture & Counselling`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Vancouver acupuncture",
    "RMT Vancouver",
    "massage therapy Vancouver",
    "Traditional Chinese Medicine Vancouver",
    "counselling Vancouver",
    "Bell's Palsy acupuncture",
    "eczema treatment Vancouver",
    "ICBC acupuncture",
    "direct billing massage",
  ],
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    url: site.url,
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#faf8f3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-CA" className={`${fraunces.variable} ${dmSans.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col pb-[calc(4.75rem+env(safe-area-inset-bottom))] sm:pb-0">
        <a
          href="#main"
          className="fixed top-3 left-3 z-[60] -translate-y-24 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <MobileCtaBar />
        <JsonLd data={clinicSchema()} />
      </body>
    </html>
  );
}
