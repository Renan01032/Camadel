import type { Metadata, Viewport } from "next";
import "@fontsource/oswald/500.css";
import "@fontsource/oswald/600.css";
import "@fontsource/oswald/700.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/500.css";
import "./globals.css";
import { SITE_URL } from "@/lib/constants";
import { QuoteProvider } from "@/lib/quote-context";
import { Header } from "@/components/camadel/Header";
import { Footer } from "@/components/camadel/Footer";
import { QuoteWidget } from "@/components/camadel/QuoteWidget";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Camadel | Ferramentas para Construção Civil",
    template: "%s | Camadel Ferramentas",
  },
  description:
    "A Camadel fornece ferramentas, EPIs, abrasivos, fixação e soluções completas para profissionais da construção no ABC Paulista e região metropolitana de São Paulo. Catálogo digital para orçamento via WhatsApp.",
  keywords: [
    "ferramentas para construção",
    "ferramentas elétricas",
    "ferramentas profissionais",
    "EPI construção civil",
    "Camadel",
  ],
  openGraph: {
    title: "Camadel | Ferramentas para Construção Civil",
    description:
      "Catálogo digital de ferramentas, EPIs, abrasivos e fixação para construção civil. Monte sua lista e solicite orçamento direto pelo WhatsApp.",
    url: SITE_URL,
    siteName: "Camadel Ferramentas",
    locale: "pt_BR",
    type: "website",
    images: ["/images/hero-home.jpg"],
  },
  icons: {
    icon: "/icons/favicon-32.png",
    apple: "/icons/icon-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-camadel-black font-body">
        <QuoteProvider>
          <Header />
          {children}
          <Footer />
          <QuoteWidget />
        </QuoteProvider>
      </body>
    </html>
  );
}
