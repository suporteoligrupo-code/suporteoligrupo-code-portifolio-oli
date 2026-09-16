import type { Metadata } from "next";
import { LanguageProvider } from "../components/language-provider";
import "./globals.css";
import "./editorial-cleanup.css";

const siteUrl = "https://portfolio-oli-taupe.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lucas de Oliveira Andrade + OLI — Games e tecnologia",
  description: "Estratégia, marketing e negócios para games e tecnologia. Lucas de Oliveira Andrade + OLI: experiência na Rico Games desde 2010, consultoria, marcas, conteúdo e presença digital.",
  keywords: ["Lucas de Oliveira Andrade", "OLI", "games e tecnologia", "estratégia comercial", "marketing para games", "varejo de tecnologia", "consultoria", "direção criativa"],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "pt_BR", url: siteUrl, siteName: "Lucas de Oliveira Andrade + OLI", title: "Lucas + OLI — Games e tecnologia", description: "Estratégia, marketing e negócios para games e tecnologia, com experiência na operação da Rico Games desde 2010.", images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Lucas de Oliveira Andrade — Portfólio pessoal" }] },
  twitter: { card: "summary_large_image", title: "Lucas + OLI — Games e tecnologia", description: "Estratégia, marketing e negócios para games e tecnologia, com experiência na operação da Rico Games desde 2010.", images: ["/og.jpg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><LanguageProvider>{children}</LanguageProvider></body></html>;
}
