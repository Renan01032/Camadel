import type { Metadata, Viewport } from "next";
import { Oswald, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

// Display: réplica do peso/estilo condensado da logo, usado em headlines e wordmark.
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

// Corpo de texto — legibilidade neutra, tom técnico.
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

// Uso pontual em eyebrows/specs — reforça o tom "engenharia de precisão".
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.camadel.com.br"),
  title: {
    default: "Camadel | Ferramentas para Construção Civil",
    template: "%s | Camadel Ferramentas",
  },
  description:
    "A Camadel fornece ferramentas, EPIs, abrasivos, fixação e soluções completas para profissionais da construção no ABC Paulista e região.",
  keywords: [
    "ferramentas para construção",
    "ferramentas elétricas",
    "ferramentas profissionais",
    "Camadel",
  ],
  openGraph: {
    title: "Camadel | Ferramentas Premium para Construção",
    description:
      "Precisão que constrói. Conheça a linha premium de ferramentas Camadel para profissionais exigentes.",
    url: "https://www.camadel.com.br",
    siteName: "Camadel Ferramentas",
    locale: "pt_BR",
    type: "website",
    // TODO(marketing): substituir por uma imagem Open Graph dedicada (1200x630px)
    images: ["/camadel-logo.jpg"],
  },
  icons: {
    icon: "/camadel-logo.jpg",
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
    <html
      lang="pt-BR"
      className={`${oswald.variable} ${roboto.variable} ${robotoMono.variable}`}
    >
      <body className="min-h-screen font-body">{children}</body>
    </html>
  );
}
