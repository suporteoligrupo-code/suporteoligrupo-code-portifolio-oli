import type { Metadata } from "next";
import { LanguageProvider } from "../components/language-provider";
import "./globals.css";
import "./editorial-cleanup.css";

const siteUrl = "https://portfolio-oli-taupe.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lucas de Oliveira Andrade — Estratégia, marketing, gestão e direção criativa",
  description: "Portfólio de carreira de Lucas de Oliveira Andrade: trajetória desde 2010 em vendas, gestão, marketing, consultoria, direção criativa, conteúdo e experiências digitais.",
  keywords: ["Lucas de Oliveira Andrade", "estratégia comercial", "gestão", "consultoria", "identidade visual", "criação de sites", "marketing digital", "direção criativa"],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "pt_BR", url: siteUrl, siteName: "Lucas de Oliveira Andrade", title: "Lucas de Oliveira Andrade — Portfólio pessoal", description: "Trajetória desde 2010 em vendas, gestão, marketing, consultoria, direção criativa, conteúdo e experiências digitais.", images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Lucas de Oliveira Andrade — Portfólio pessoal" }] },
  twitter: { card: "summary_large_image", title: "Lucas de Oliveira Andrade — Portfólio pessoal", description: "Trajetória desde 2010 em vendas, gestão, marketing, consultoria, direção criativa, conteúdo e experiências digitais.", images: ["/og.jpg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><LanguageProvider>{children}</LanguageProvider></body></html>;
}
