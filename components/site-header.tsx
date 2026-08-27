"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { languageOptions, siteCopy, withLanguage } from "../app/data/i18n";
import { useLanguage } from "./language-provider";

export const instagramUrl = "https://www.instagram.com/oli.marketing7/";

export default function SiteHeader({ inner = false }: { inner?: boolean }) {
  const { language, setLanguage } = useLanguage();
  const copy = siteCopy[language].header;

  return (
    <header className={`site-header${inner ? " site-header--inner" : ""}`}>
      <Link className="brand" href={withLanguage("/", language)} aria-label={copy.homeLabel}>
        <img src="/portfolio/oli-logo-oficial-claro.png" alt="OLI" width={6000} height={1842} />
      </Link>

      <nav aria-label={copy.navLabel}>
        <Link href={withLanguage("/#cases", language)}>{copy.projects}</Link>
        <Link href={withLanguage("/#servicos", language)}>{copy.services}</Link>
        <Link href={withLanguage("/#processo", language)}>{copy.process}</Link>
      </nav>

      <div className="header-actions">
        <div className="language-switcher" role="group" aria-label={copy.chooseLanguage}>
          {languageOptions.map((option) => (
            <button
              className={option.code === language ? "is-active" : undefined}
              type="button"
              key={option.code}
              onClick={() => setLanguage(option.code)}
              aria-label={option.label}
              aria-pressed={option.code === language}
              title={option.label}
            >
              <img src={option.flagSrc} alt="" width={24} height={16} aria-hidden="true" />
            </button>
          ))}
        </div>
        <a className="header-cta" href={instagramUrl} target="_blank" rel="noreferrer">
          <span className="header-cta-label">{copy.startProject}</span>
          <ArrowUpRight aria-hidden="true" size={15} />
        </a>
      </div>
    </header>
  );
}
