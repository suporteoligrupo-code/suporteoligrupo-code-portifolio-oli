"use client";

import { useEffect } from "react";
import {
  careerUiCopy,
  publishedCareerEntries,
} from "../app/data/career";
import CareerCard from "./career-card";
import { useLanguage } from "./language-provider";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

export default function CareerIndexContent() {
  const { language } = useLanguage();
  const copy = careerUiCopy[language].index;
  const featuredEntries = publishedCareerEntries.filter((entry) => entry.featured);
  const otherEntries = publishedCareerEntries.filter((entry) => !entry.featured);

  useEffect(() => {
    document.title = copy.pageTitle;
  }, [copy.pageTitle]);

  return (
    <div className="site-page career-index-page">
      <SiteHeader inner />
      <main>
        <header className="career-index-hero section-shell">
          <p>{copy.eyebrow}</p>
          <h1>{copy.title}<span>.</span></h1>
          <p>{copy.text}</p>
        </header>

        <section className="career-index-section section-shell" aria-labelledby="career-featured-title">
          <header className="career-index-section__heading">
            <p>{copy.featuredLabel}</p>
            <h2 id="career-featured-title">{copy.featuredTitle}</h2>
          </header>
          <div className="career-grid">
            {featuredEntries.map((entry) => (
              <CareerCard item={entry} key={entry.slug} />
            ))}
          </div>
        </section>

        {otherEntries.length > 0 ? (
          <section className="career-index-section career-index-section--other section-shell" aria-labelledby="career-other-title">
            <header className="career-index-section__heading">
              <p>{copy.otherLabel}</p>
              <h2 id="career-other-title">{copy.otherTitle}</h2>
            </header>
            <div className="career-grid career-grid--compact">
              {otherEntries.map((entry) => (
                <CareerCard item={entry} key={entry.slug} />
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </div>
  );
}
