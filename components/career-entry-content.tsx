"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useEffect, type ReactNode } from "react";
import type { CareerEntry } from "../app/data/career";
import {
  careerUiCopy,
  localizeCareerEntry,
} from "../app/data/career";
import {
  careerNarrativeLabels,
  getCareerEditorial,
  reviewCareerEntry,
} from "../app/data/career-editorial";
import { projectStatusLabels, publicCases } from "../app/data/cases";
import { withLanguage } from "../app/data/i18n";
import CaseCard from "./case-card";
import styles from "./career-editorial.module.css";
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

export default function CareerEntryContent({
  item,
  nextEntry,
}: {
  item: CareerEntry;
  nextEntry?: CareerEntry;
}) {
  const { language } = useLanguage();
  const localized = reviewCareerEntry(localizeCareerEntry(item, language), language);
  const editorial = getCareerEditorial(item.slug, language);
  const narrativeLabels = careerNarrativeLabels[language];
  const copy = careerUiCopy[language].page;
  const heroMedia = localized.hero ?? localized.cover ?? localized.media[0];
  const period = localized.period;
  const relationship = localized.relationshipDetail ?? localized.relationship;
  const localizedNext = nextEntry
    ? reviewCareerEntry(localizeCareerEntry(nextEntry, language), language)
    : undefined;
  const relatedSlugs = item.relatedProjectSlugs ?? [];
  const relatedProjects = publicCases.filter((project) => relatedSlugs.includes(project.slug));
  const visualProject = relatedProjects[0];
  let sectionNumber = 0;
  const nextSectionIndex = () => String(++sectionNumber).padStart(2, "0");

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
            {period ? <span>{period}</span> : null}
          </div>

          <div className="career-hero__content">
            <p>{relationship}</p>
            <h1>{localized.company}</h1>
            <p className="career-hero__roles">{localized.roles.join(" · ")}</p>
            <p className="career-hero__summary">{localized.summary}</p>
          </div>

          <dl className="career-facts">
            {period ? <div><dt>{copy.period}</dt><dd>{period}</dd></div> : null}
            <div><dt>{copy.relationship}</dt><dd>{relationship}</dd></div>
            <div><dt>{copy.role}</dt><dd>{localized.roles.join(" · ")}</dd></div>
            {localized.status ? <div><dt>{copy.status}</dt><dd>{localized.status}</dd></div> : null}
          </dl>
        </section>

        <div className="career-detail section-shell">
          <DetailSection index={nextSectionIndex()} title={copy.relationship}>
            <p>{editorial?.relationshipNote ?? localized.summary}</p>
            {localized.relatedCompany ? (
              <p className="career-detail__related-company">
                <strong>{copy.relatedCompany}</strong> {localized.relatedCompany}
              </p>
            ) : null}
          </DetailSection>

          <DetailSection index={nextSectionIndex()} title={copy.role}>
            <ul className="career-detail__tags">
              {localized.roles.map((role) => <li key={role}>{role}</li>)}
            </ul>
          </DetailSection>

          {editorial ? (
            <DetailSection index={nextSectionIndex()} title={narrativeLabels.context}>
              <p className={styles.contextText}>{editorial.context}</p>
            </DetailSection>
          ) : null}

          {editorial ? (
            <DetailSection index={nextSectionIndex()} title={narrativeLabels.connection}>
              <div className={styles.connectionGrid}>
                <article className={styles.connectionCard}>
                  <span className={styles.connectionIndex}>01</span>
                  <h3 className={styles.connectionLabel}>{narrativeLabels.disconnected}</h3>
                  <p className={styles.connectionText}>{editorial.disconnected}</p>
                </article>
                <article className={styles.connectionCard}>
                  <span className={styles.connectionIndex}>02</span>
                  <h3 className={styles.connectionLabel}>{narrativeLabels.relation}</h3>
                  <p className={styles.connectionText}>{editorial.relation}</p>
                </article>
                <article className={styles.connectionCard}>
                  <span className={styles.connectionIndex}>03</span>
                  <h3 className={styles.connectionLabel}>{narrativeLabels.solution}</h3>
                  <p className={styles.connectionText}>{editorial.solution}</p>
                </article>
                <article className={styles.connectionCard}>
                  <span className={styles.connectionIndex}>04</span>
                  <h3 className={styles.connectionLabel}>{narrativeLabels.value}</h3>
                  <p className={styles.connectionText}>{editorial.value}</p>
                </article>
              </div>
            </DetailSection>
          ) : null}

          <DetailSection index={nextSectionIndex()} title={copy.directActions}>
            <ul className="career-detail__list">
              {localized.directActions.map((action) => <li key={action}>{action}</li>)}
            </ul>
          </DetailSection>

          {localized.initiatives && localized.initiatives.length > 0 ? (
            <DetailSection index={nextSectionIndex()} title={copy.initiatives}>
              <ul className="career-detail__list">
                {localized.initiatives.map((initiative) => <li key={initiative}>{initiative}</li>)}
              </ul>
            </DetailSection>
          ) : null}
        </div>

        {localized.media.length > 0 ? (
          <section className="career-media-section" aria-labelledby="career-media-title">
            <header className="career-media-section__heading section-shell">
              <span>{nextSectionIndex()}</span>
              <h2 id="career-media-title">{copy.workAndRecords}</h2>
            </header>
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
          </section>
        ) : null}

        <div className="career-detail career-detail--closing section-shell">
          <DetailSection index={nextSectionIndex()} title={copy.competencies}>
            <ul className="career-detail__tags">
              {localized.competencies.map((competency) => <li key={competency}>{competency}</li>)}
            </ul>
          </DetailSection>

          {localized.highlights && localized.highlights.length > 0 ? (
            <DetailSection index={nextSectionIndex()} title={copy.evidence}>
              <ul className="career-detail__list career-detail__list--evidence">
                {localized.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </DetailSection>
          ) : null}

          {relatedProjects.length > 0 ? (
            <DetailSection
              index={nextSectionIndex()}
              title={copy.relatedProjects}
              className="career-detail-section--projects"
            >
              <div className="case-grid career-related-projects">
                {relatedProjects.map((project) => <CaseCard item={project} key={project.slug} />)}
              </div>
            </DetailSection>
          ) : null}
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
