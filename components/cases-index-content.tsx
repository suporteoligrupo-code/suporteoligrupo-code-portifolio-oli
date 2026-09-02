"use client";

import { useEffect } from "react";
import { publicCases } from "../app/data/cases";
import { siteCopy } from "../app/data/i18n";
import CaseCard from "./case-card";
import { useLanguage } from "./language-provider";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

export default function CasesIndexContent() {
  const { language } = useLanguage();
  const copy = siteCopy[language].index;

  useEffect(() => {
    document.title = copy.pageTitle;
  }, [copy.pageTitle]);

  return (
    <div className="site-page cases-index-page">
      <SiteHeader inner />
      <main>
        <header className="cases-index-hero section-shell">
          <span>
            {copy.eyebrow} · {String(publicCases.length).padStart(2, "0")} {copy.countSuffix}
          </span>
          <h1>{copy.title}<span>.</span></h1>
          <p>{copy.text}</p>
        </header>
        <div className="case-grid section-shell cases-index-grid">
          {publicCases.map((item) => <CaseCard item={item} key={item.slug} />)}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
