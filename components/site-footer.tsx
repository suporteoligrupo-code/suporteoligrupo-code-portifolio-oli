"use client";

import { siteCopy } from "../app/data/i18n";
import { useLanguage } from "./language-provider";

export default function SiteFooter() {
  const { language } = useLanguage();

  return (
    <footer>
      <img src="/portfolio/oli-logo-oficial-escuro.png" alt="OLI" width={6000} height={1842} />
      <p>{siteCopy[language].footer}</p>
      <p>© 2026 OLI Marketing Digital</p>
    </footer>
  );
}
