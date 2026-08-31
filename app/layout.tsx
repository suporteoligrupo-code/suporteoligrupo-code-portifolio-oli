import type { Metadata } from "next";
import { LanguageProvider } from "../components/language-provider";
import "./globals.css";

const siteUrl = "https://portfolio-oli-taupe.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lucas de Oliveira Andrade — Estratégia, marketing e direção criativa",
  description:
    "Portfólio pessoal de Lucas de Oliveira Andrade: estratégia, marketing, gestão, direção criativa, marcas, conteúdo e experiências digitais.",
  keywords: [
    "Lucas de Oliveira Andrade",
    "estratégia comercial",
    "growth",
    "identidade visual",
    "criação de sites",
    "marketing digital",
    "direção criativa",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Lucas de Oliveira Andrade",
    title: "Lucas de Oliveira Andrade — Portfólio pessoal",
    description: "Estratégia, marketing, gestão e direção criativa reunidos em projetos reais.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Lucas de Oliveira Andrade — Portfólio pessoal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas de Oliveira Andrade — Portfólio pessoal",
    description: "Estratégia, marketing, gestão e direção criativa reunidos em projetos reais.",
    images: ["/og.jpg"],
  },
  other: {
    "codex-preview": "development",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
