import type { Metadata, Viewport } from "next";
import "@fontsource/oswald/500.css";
import "@fontsource/oswald/600.css";
import "@fontsource/oswald/700.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/500.css";
import "./globals.css";
import { Header } from "@/components/camadel/Header";
import { Footer } from "@/components/camadel/Footer";
import { QuoteWidget } from "@/components/camadel/QuoteWidget";
import { QuoteProvider } from "@/lib/quote-context";

// Fontes auto-hospedadas via @fontsource (sem dependência de rede em tempo
// de build para fonts.googleapis.com — mais robusto para CI/CD). As
// variáveis CSS (--font-oswald etc.) são declaradas em app/globals.css e
// consumidas pelo Tailwind (ver tailwind.config.ts -> theme.fontFamily).

export const metadata: Metadata = {
  metadataBase: new URL("https://www.camadel.com.br"),
  title: {
    default: "Camadel | Ferramentas para Construção Civil",
    template: "%s | Camadel Ferramentas",
  },
  description:
    "A Camadel fornece ferramentas, EPIs, abrasivos, fixação e soluções completas para profissionais da construção no ABC Paulista e região. Catálogo técnico para orçamento — sem venda direta pelo site.",
  keywords: [
    "ferramentas para construção",
    "ferramentas elétricas",
    "ferramentas profissionais",
    "Camadel",
  ],
  openGraph: {
    title: "Camadel | Ferramentas para Construção Civil",
    description:
      "Precisão que constrói. Catálogo técnico Camadel para orçamento de ferramentas, EPIs, abrasivos e fixação.",
    url: "https://www.camadel.com.br",
    siteName: "Camadel Ferramentas",
    locale: "pt_BR",
    type: "website",
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
      <body className="min-h-screen font-body">
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
