import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Caveat_Brush } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import NoodleCursor from "@/components/NoodleCursor";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const caveat = Caveat_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caveat",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noodlecodes.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NoodleCodes — Code that slaps.",
    template: "%s — NoodleCodes",
  },
  description:
    "U.S.-based software development agency. We ship websites, mobile apps, AI agents and admin panels in 3-week sprints — senior engineers, U.S. business hours, fixed USD pricing, you own the IP. 120+ projects shipped.",
  keywords: [
    "US web development agency",
    "software development company USA",
    "app development USA",
    "ai agent development",
    "admin panel development",
    "custom software development",
    "startup MVP development",
    "Next.js development agency",
    "hire developers United States",
  ],
  authors: [{ name: "NoodleCodes" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "NoodleCodes",
    title: "NoodleCodes — U.S.-based dev kitchen. Code that slaps.",
    description:
      "A U.S.-based dev kitchen. We cook websites, apps, AI agents & admin panels in 3-week sprints — senior engineers, U.S. hours, you own the IP.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NoodleCodes — U.S.-based dev kitchen. Code that slaps.",
    description:
      "Websites, apps, AI agents & admin panels. Senior U.S.-hours engineers, fixed USD pricing, shipped fast.",
  },
  alternates: { canonical: "/" },
};

export const viewport = {
  themeColor: "#F7F1E1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${bricolage.variable} ${jetbrains.variable} ${caveat.variable}`}
      >
        <a href="#main" className="skip">
          Skip to content
        </a>
        <Nav />
        {children}
        <Footer />
        <ScrollReveal />
        <NoodleCursor />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
