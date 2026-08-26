import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OLI — Identidade visual e sites que posicionam",
  description:
    "Portfólio da OLI Marketing Digital: identidades visuais, sites e landing pages criados para transformar percepção em valor.",
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
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
