"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useEffect, type ReactNode } from "react";
import type { CareerEntry } from "../app/data/career";
import {
  careerUiCopy,
  localizeCareerEntry,
  publishedCareerEntries,
} from "../app/data/career";
import { projectStatusLabels, publicCases } from "../app/data/cases";
import { withLanguage } from "../app/data/i18n";
import CaseCard from "./case-card";
import { useLanguage } from "./language-provider";
import MediaFrame, {
  getGalleryLayout,
  getGallerySizes,
  getGalleryStyle,
} from "./media-frame";
import SiteFooter from "./site-footer";
import SiteHeader, { linkedinUrl } from "./site-header";

function DetailSection({
  index,
  title,
  children,
  className = "",
}: {
  index: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`career-detail-section ${className}`.trim()}>
      <div className="career-detail-section__index">{index}</div>
      <h2>{title}</h2>
      <div className="career-detail-section__body">{children}</div>
    </section>
  );
}

export default function CareerEntryContent({ item }: { item: CareerEntry }) {
  const { language } = useLanguage();
  const localized = localizeCareerEntry(item, language);
  const copy = careerUiCopy[language].page;
  const heroMedia = localized.hero ?? localized.cover ?? localized.media[0];
  const period = localized.period ?? careerUiCopy[language].card.periodUnspecified;
  const relationship = localized.relationshipDetail ?? localized.relationship;
  const currentIndex = publishedCareerEntries.findIndex((entry) => entry.slug === item.slug);
  const nextEntry = currentIndex === -1
    ? undefined
    : publishedCareerEntries[(currentIndex + 1) % publishedCareerEntries.length];
  const localizedNext = nextEntry ? localizeCareerEntry(nextEntry, language) : undefined;
  const relatedSlugs = item.relatedProjectSlugs ?? [];
  const relatedProjects = publicCases.filter((project) => relatedSlugs.includes(project.slug));
  const visualProject = relatedProjects[0];

  useEffect(() => {
    document.title = `${localized.company} — ${copy.titleSuffix}`;
  }, [copy.titleSuffix, localized.company]);

  return (
    <div className={`career-page career-page--${item.slug}`}>
      <SiteHeader inner />
      <main>
        <section className={`career-hero${heroMedia ? "" : " career-hero--text"}`}>
          {heroMedia ? (
            <figure className="career-hero__media">
              <MediaFrame image={heroMedia} context="hero" sizes="100vw" priority />
              <figcaption>
                <span>{heroMedia.label}</span>
                {visualProject ? (
                  <strong>{projectStatusLabels[language][visualProject.projectStatus]}</strong>
                ) : null}
              </figcaption>
            </figure>
          ) : null}

          <div className="career-hero__topline">
            <Link href={withLanguage("/career", language)}>
              <ArrowLeft aria-hidden="true" size={16} /> {copy.allEntries}
            </Link>
            <span>{period}</span>
          </div>

          <div className="career-hero__content">
            <p>{relationship}</p>
            <h1>{localized.company}</h1>
            <p className="career-hero__roles">{localized.roles.join(" · ")}</p>
            <p className="career-hero__summary">{localized.summary}</p>
          </div>

          <dl className="career-facts">
            <div><dt>{copy.period}</dt><dd>{period}</dd></div>
            <div><dt>{copy.relationship}</dt><dd>{relationship}</dd></div>
            <div><dt>{copy.role}</dt><dd>{localized.roles.join(" · ")}</dd></div>
            {localized.status ? <div><dt>{copy.status}</dt><dd>{localized.status}</dd></div> : null}
          </dl>
        </section>

        <div className="career-detail section-shell">
          <DetailSection index="01" title={copy.relationship}>
            <p>{localized.summary}</p>
            {localized.relatedCompany ? (
              <p className="career-detail__related-company">
                <strong>{copy.relatedCompany}</strong> {localized.relatedCompany}
              </p>
            ) : null}
          </DetailSection>

          <DetailSection index="02" title={copy.role}>
            <ul className="career-detail__tags">
              {localized.roles.map((role) => <li key={role}>{role}</li>)}
            </ul>
          </DetailSection>

          <DetailSection index="03" title={copy.directActions}>
            <ul className="career-detail__list">
              {localized.directActions.map((action) => <li key={action}>{action}</li>)}
            </ul>
          </DetailSection>

          <DetailSection index="04" title={copy.initiatives}>
            {localized.initiatives && localized.initiatives.length > 0 ? (
              <ul className="career-detail__list">
                {localized.initiatives.map((initiative) => <li key={initiative}>{initiative}</li>)}
              </ul>
            ) : (
              <p className="career-detail__empty">{copy.noInitiatives}</p>
            )}
          </DetailSection>
        </div>

        <section className={`career-media-section${localized.media.length > 0 ? "" : " career-media-section--empty"}`} aria-labelledby="career-media-title">
            <header className="career-media-section__heading section-shell">
              <span>05</span>
              <h2 id="career-media-title">{copy.workAndRecords}</h2>
            </header>
            {localized.media.length > 0 ? (
              <div className="career-media-gallery section-shell">
                {localized.media.map((media, index) => (
                  <figure
                    className={`career-media-gallery__item career-media-gallery__item--${getGalleryLayout(media)}`}
                    key={`${media.src}-${index}`}
                    style={getGalleryStyle(media)}
                  >
                    <div className="career-media-gallery__canvas">
                      <MediaFrame image={media} context="gallery" sizes={getGallerySizes(media)} />
                    </div>
                    <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{media.label}</figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <div className="career-media-empty section-shell">
                <p>{copy.noMedia}</p>
              </div>
            )}
        </section>

        <div className="career-detail career-detail--closing section-shell">
          <DetailSection index="06" title={copy.competencies}>
            <ul className="career-detail__tags">
              {localized.competencies.map((competency) => <li key={competency}>{competency}</li>)}
            </ul>
          </DetailSection>

          <DetailSection index="07" title={copy.evidence}>
            {localized.highlights && localized.highlights.length > 0 ? (
              <ul className="career-detail__list career-detail__list--evidence">
                {localized.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            ) : (
              <p className="career-detail__empty">{copy.noEvidence}</p>
            )}
          </DetailSection>

          <DetailSection index="08" title={copy.relatedProjects} className="career-detail-section--projects">
            {relatedProjects.length > 0 ? (
              <div className="case-grid career-related-projects">
                {relatedProjects.map((project) => <CaseCard item={project} key={project.slug} />)}
              </div>
            ) : (
              <p className="career-detail__empty">{copy.noRelatedProjects}</p>
            )}
          </DetailSection>
        </div>

        {localizedNext ? (
          <section className="career-next">
            <p>{copy.nextEntry}</p>
            <Link href={withLanguage(`/career/${localizedNext.slug}`, language)}>
              <span>{localizedNext.company}</span>
              <ArrowUpRight aria-hidden="true" size={42} strokeWidth={1.25} />
            </Link>
            <small>{localizedNext.roles.join(" · ")}</small>
          </section>
        ) : null}

        <section className="career-contact">
          <p>{copy.contactEyebrow}</p>
          <h2>{copy.contactTitle}</h2>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            {copy.contactCta} <ArrowUpRight aria-hidden="true" size={19} />
          </a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
