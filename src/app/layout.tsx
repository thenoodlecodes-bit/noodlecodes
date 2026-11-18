import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { Header, type MenuData } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Tracking } from "@/components/Tracking";
import { WhatsappButton } from "@/components/Whatsapp/Whatsapp";
import { cases } from "@/content/cases";
import { industries } from "@/content/industries";
import { insights } from "@/content/insights";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { solutions } from "@/content/solutions";
import "./globals.css";

// Archivo carries both voices: the width axis widens it for headings, normal width for reading.
const archivo = Archivo({ subsets: ["latin", "latin-ext"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

const title = `${site.name} | ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: site.name, title, description: site.description, url: "/", locale: "en_IN" },
  twitter: { card: "summary_large_image", title },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

// Only the small bits the header needs, so article bodies never reach the client bundle.
const featured = cases.find((c) => c.slug === "calder-labs") ?? cases[0];
const menu: MenuData = {
  services: services.map((s) => ({ href: `/services/${s.slug}`, name: s.name, menu: s.menu })),
  solutions: solutions.map((s) => ({ href: `/solutions/${s.slug}`, name: s.name, kind: s.kind })),
  industries: industries.map((i) => ({ href: `/industries/${i.slug}`, name: i.name, menu: i.menu })),
  insights: insights.slice(0, 3).map((i) => ({ href: `/insights/${i.slug}`, title: i.title, meta: `${i.category} · ${i.minutes} min` })),
  feature: { href: `/work/${featured.slug}`, client: featured.client, headline: featured.headline },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${archivo.variable} ${jetbrains.variable}`}>
      <body>
        {gtmId && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        )}
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header menu={menu} />
        {children}
        <Footer />
        <WhatsappButton />
        <Tracking />
      </body>
    </html>
  );
}
