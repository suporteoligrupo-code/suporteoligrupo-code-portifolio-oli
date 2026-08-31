"use client";

import { siteCopy } from "../app/data/i18n";
import { useLanguage } from "./language-provider";

export default function SiteFooter() {
  const { language } = useLanguage();

  return (
    <footer>
      <div className="footer-brand" aria-label="Lucas de Oliveira Andrade">LOA</div>
      <p>{siteCopy[language].footer}</p>
      <p>© 2026 Lucas de Oliveira Andrade</p>
    </footer>
  );
}
