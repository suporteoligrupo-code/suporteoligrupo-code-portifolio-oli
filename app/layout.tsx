import type { Metadata } from "next";
import { LanguageProvider } from "../components/language-provider";
import "./globals.css";

const siteUrl = "https://portfolio-oli-taupe.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "OLI — Ideias que viram presença",
  description:
    "Portfólio da OLI Marketing Digital: estratégia, identidades visuais, campanhas, sites e experiências digitais com direção clara.",
  keywords: [
    "identidade visual",
    "criação de sites",
    "landing page",
    "marketing digital",
    "branding",
    "OLI",
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
    siteName: "OLI Marketing Digital",
    title: "OLI — Ideias que viram presença",
    description: "Estratégia, criação e execução reunidas em marcas, campanhas e experiências digitais.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "OLI — Ideias que viram presença" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OLI — Ideias que viram presença",
    description: "Estratégia, criação e execução reunidas em marcas, campanhas e experiências digitais.",
    images: ["/og.png"],
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
