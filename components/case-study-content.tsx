"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useEffect, type CSSProperties } from "react";
import type { OliCase } from "../app/data/cases";
import { localizeCase, siteCopy, withLanguage } from "../app/data/i18n";
import { useLanguage } from "./language-provider";
import SiteFooter from "./site-footer";
import SiteHeader, { instagramUrl } from "./site-header";

type CasePageStyle = CSSProperties & {
  "--study-accent": string;
  "--study-soft": string;
  "--study-ink": string;
};

export default function CaseStudyContent({ item, next }: { item: OliCase; next: OliCase }) {
  const { language } = useLanguage();
  const localized = localizeCase(item, language);
  const localizedNext = localizeCase(next, language);
  const copy = siteCopy[language].project;
  const style: CasePageStyle = {
    "--study-accent": item.accent,
    "--study-soft": item.accentSoft,
    "--study-ink": item.ink,
  };

  useEffect(() => {
    document.title = `${localized.client} — ${copy.titleSuffix}`;
  }, [copy.titleSuffix, localized.client]);

  return (
    <div className={`case-page case-page--${item.cardTone}`} style={style}>
      <SiteHeader inner />

      <main>
        <section className="case-hero">
          <div className="case-hero__topline">
            <Link href={withLanguage("/#cases", language)}>
              <ArrowLeft aria-hidden="true" size={16} /> {copy.allProjects}
            </Link>
            <span>{copy.projectLabel} {localized.number} · {localized.year}</span>
          </div>

          <div className="case-hero__heading">
            <div>
              <p>{localized.sector}</p>
              <h1>{localized.client}</h1>
            </div>
            <div className="case-hero__intro">
              <strong>{localized.headline}</strong>
              <p>{localized.summary}</p>
              <div className="case-hero__actions">
                {localized.liveUrl && (
                  <a href={localized.liveUrl} target="_blank" rel="noreferrer">
                    {copy.viewPublished} <ArrowUpRight aria-hidden="true" size={17} />
                  </a>
                )}
                <a href={instagramUrl} target="_blank" rel="noreferrer">
                  {copy.wantSimilar} <ArrowUpRight aria-hidden="true" size={17} />
                </a>
              </div>
            </div>
          </div>

          <figure className="case-hero__visual">
            <img
              src={localized.cover.src}
              alt={localized.cover.alt}
              fetchPriority="high"
              style={{ objectPosition: localized.cover.position ?? "center" }}
            />
            <figcaption>
              <span>{localized.cover.label}</span>
              <span>{localized.location}</span>
            </figcaption>
          </figure>

          <dl className="case-facts">
            <div><dt>{copy.client}</dt><dd>{localized.client}</dd></div>
            <div><dt>{copy.sector}</dt><dd>{localized.sector}</dd></div>
            <div><dt>{copy.scope}</dt><dd>{localized.services.join(" · ")}</dd></div>
            <div><dt>{copy.status}</dt><dd>{localized.status}</dd></div>
          </dl>
        </section>

        <section className="case-story">
          <div className="case-story__index">{copy.workIndex}</div>
          <div className="case-story__title">
            <p>{copy.appearanceEyebrow}</p>
            <h2>{copy.appearanceTitle}</h2>
          </div>
          <div className="case-story__chapters">
            <article>
              <span>{copy.challenge}</span>
              <p>{localized.challenge}</p>
            </article>
            <article>
              <span>{copy.direction}</span>
              <p>{localized.direction}</p>
            </article>
            <article>
              <span>{copy.outcome}</span>
              <p>{localized.result}</p>
            </article>
          </div>
        </section>

        <section className="case-work">
          <div className="case-work__heading">
            <span>{copy.portfolioIndex}</span>
            <h2>{copy.portfolioTitle}<span>.</span></h2>
            <p>{copy.portfolioText}</p>
          </div>

          <div className={`case-gallery case-gallery--${localized.gallery.length}`}>
            {localized.gallery.map((image, index) => (
              <figure key={`${image.src}-${index}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  style={{ objectPosition: image.position ?? "center" }}
                />
                <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{image.label}</figcaption>
              </figure>
            ))}

            <aside className="case-gallery__statement">
              <span>{copy.oliDirection}</span>
              <strong>{localized.headline}</strong>
              <p>{localized.shortName} · {localized.year}</p>
            </aside>
          </div>
        </section>

        <section className="case-system">
          <div className="case-system__header">
            <span>{copy.systemIndex}</span>
            <h2>{copy.systemTitle}</h2>
          </div>
          <div className="case-system__body">
            <div className="case-palette" aria-label={copy.projectColors}>
              <i style={{ background: localized.accent }} />
              <i style={{ background: localized.accentSoft }} />
              <i style={{ background: localized.ink }} />
            </div>
            <ul>
              {localized.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
            </ul>
            <div className="case-system__services">
              {localized.services.map((service) => <span key={service}>{service}</span>)}
            </div>
          </div>
        </section>

        <section className="case-next">
          <p>{copy.nextProject}</p>
          <Link href={withLanguage(`/cases/${localizedNext.slug}`, language)}>
            <span>{localizedNext.client}</span>
            <ArrowUpRight aria-hidden="true" size={42} strokeWidth={1.25} />
          </Link>
          <small>{localizedNext.headline}</small>
        </section>

        <section className="case-contact">
          <p>{copy.contactEyebrow}</p>
          <h2>{copy.contactTitle}</h2>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            {copy.contactCta} <ArrowUpRight aria-hidden="true" size={19} />
          </a>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
