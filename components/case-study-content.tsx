"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useEffect, type CSSProperties } from "react";
import { reviewPortfolioCase } from "../app/data/case-editorial";
import {
  ProjectStatus,
  projectStatusLabels,
  type PortfolioCase,
} from "../app/data/cases";
import { localizeCase, siteCopy, withLanguage } from "../app/data/i18n";
import { useLanguage } from "./language-provider";
import MediaFrame, { getGalleryLayout, getGallerySizes, getGalleryStyle } from "./media-frame";
import SiteFooter from "./site-footer";
import SiteHeader, { linkedinUrl } from "./site-header";

type CasePageStyle = CSSProperties & {
  "--study-accent": string;
  "--study-soft": string;
  "--study-ink": string;
};

const projectStatusVariant: Record<ProjectStatus, string> = {
  [ProjectStatus.Realized]: "realized",
  [ProjectStatus.Professional]: "professional",
  [ProjectStatus.Consulting]: "consulting",
  [ProjectStatus.Concept]: "concept",
  [ProjectStatus.Proposal]: "proposal",
  [ProjectStatus.InDevelopment]: "in-development",
};

const personalCaseCopy = {
  pt: {
    allWorks: "Trabalhos selecionados",
    workLabel: "Trabalho",
    viewPublished: "Ver trabalho publicado",
    viewConcept: "Ver conceito navegável",
    viewPreview: "Ver prévia navegável",
    viewProfile: "Ver trajetória no LinkedIn",
    company: "Empresa",
    area: "Contexto de atuação",
    role: "Meu papel",
    status: "Status",
    storyIndex: "01 / Minha atuação",
    storyEyebrow: "Participação direta",
    storyTitle: "O que fiz, por que fiz e o que ganhou forma.",
    context: "O contexto",
    responsibilities: "Responsabilidades e execuções",
    evidence: "Escopo e registros",
    galleryIndex: "02 / Registros visuais",
    galleryTitle: "Trabalhos e aplicações",
    galleryText:
      "Os registros mostram como minha atuação ganhou forma em identidade, conteúdo, campanha ou experiência digital.",
    competencies: "Competências demonstradas",
    nextWork: "Próximo trabalho selecionado",
    contactEyebrow: "Contato profissional",
    contactTitle: "Conheça minha trajetória completa.",
    contactCta: "Ver LinkedIn de Lucas",
  },
  en: {
    allWorks: "Selected work",
    workLabel: "Work",
    viewPublished: "View published work",
    viewConcept: "View navigable concept",
    viewPreview: "View navigable preview",
    viewProfile: "View my journey on LinkedIn",
    company: "Company",
    area: "Field of work",
    role: "My role",
    status: "Status",
    storyIndex: "01 / My role",
    storyEyebrow: "Direct contribution",
    storyTitle: "What I did, why I did it and what took shape.",
    context: "Context",
    responsibilities: "Responsibilities and execution",
    evidence: "Results and evidence",
    galleryIndex: "02 / Visual record",
    galleryTitle: "Work and applications",
    galleryText:
      "These records show how my contribution took shape through identity, content, campaigns or digital experiences.",
    competencies: "Skills demonstrated",
    nextWork: "Next selected work",
    contactEyebrow: "Professional contact",
    contactTitle: "Explore my full professional journey.",
    contactCta: "View Lucas on LinkedIn",
  },
  ru: {
    allWorks: "Избранные работы",
    workLabel: "Работа",
    viewPublished: "Открыть опубликованную работу",
    viewConcept: "Открыть навигационный концепт",
    viewPreview: "Открыть навигационную версию",
    viewProfile: "Мой профессиональный путь в LinkedIn",
    company: "Компания",
    area: "Контекст работы",
    role: "Моя роль",
    status: "Статус",
    storyIndex: "01 / Моя роль",
    storyEyebrow: "Личный вклад",
    storyTitle: "Что я сделал, зачем и во что это воплотилось.",
    context: "Контекст",
    responsibilities: "Ответственность и реализация",
    evidence: "Результаты и подтверждения",
    galleryIndex: "02 / Визуальные материалы",
    galleryTitle: "Работы и применения",
    galleryText:
      "Эти материалы показывают, как мой вклад воплотился в айдентике, контенте, кампаниях и цифровом опыте.",
    competencies: "Продемонстрированные компетенции",
    nextWork: "Следующая избранная работа",
    contactEyebrow: "Профессиональный контакт",
    contactTitle: "Посмотрите мой полный профессиональный путь.",
    contactCta: "Открыть LinkedIn Lucas",
  },
} as const;

export default function CaseStudyContent({ item, next }: { item: PortfolioCase; next: PortfolioCase }) {
  const { language } = useLanguage();
  const localized = reviewPortfolioCase(localizeCase(item, language), language);
  const localizedNext = reviewPortfolioCase(localizeCase(next, language), language);
  const heroMedia = localized.hero ?? localized.cover;
  const projectCopy = siteCopy[language].project;
  const titleSuffix = projectCopy.titleSuffix;
  const copy = personalCaseCopy[language];
  const closing = projectCopy.statusClosing[localized.projectStatus];
  const closingTitleId = `case-closing-${localized.slug}`;
  const workLinkLabel = localized.projectStatus === ProjectStatus.Concept
    ? copy.viewConcept
    : localized.projectStatus === ProjectStatus.InDevelopment
      ? copy.viewPreview
      : copy.viewPublished;
  const style: CasePageStyle = {
    "--study-accent": localized.accent,
    "--study-soft": localized.accentSoft,
    "--study-ink": localized.ink,
  };

  useEffect(() => {
    document.title = `${localized.client} — ${titleSuffix}`;
  }, [localized.client, titleSuffix]);

  return (
    <div className={`case-page case-page--${localized.cardTone} case-page--${localized.slug}`} style={style}>
      <SiteHeader inner />

      <main>
        <section className="case-hero">
          <div className="case-hero__topline">
            <Link href={withLanguage("/#projetos", language)}>
              <ArrowLeft aria-hidden="true" size={16} /> {copy.allWorks}
            </Link>
            <span>{copy.workLabel} {localized.number}{localized.year ? ` · ${localized.year}` : ""}</span>
          </div>

          <div className="case-hero__layout">
            <div className="case-hero__heading">
              <div>
                <p>{localized.sector}</p>
                <h1>{localized.client}</h1>
              </div>
              <div className="case-hero__intro">
                <strong>{localized.headline}</strong>
                <p>{localized.summary}</p>
                {localized.liveUrl ? (
                  <div className="case-hero__actions">
                    <a href={localized.liveUrl} target="_blank" rel="noreferrer">
                      {workLinkLabel} <ArrowUpRight aria-hidden="true" size={17} />
                    </a>
                  </div>
                ) : null}
              </div>
            </div>

            <figure className="case-hero__visual">
              <div className="case-hero__visual-canvas">
                <MediaFrame image={heroMedia} context="hero" sizes="(max-width: 960px) 100vw, 46vw" priority />
              </div>
              <figcaption>
                <span>{heroMedia.label}</span>
                <span>{localized.location}</span>
              </figcaption>
            </figure>
          </div>

          <dl className="case-facts">
            <div><dt>{copy.company}</dt><dd>{localized.client}</dd></div>
            <div><dt>{copy.area}</dt><dd>{localized.sector}</dd></div>
            <div><dt>{copy.role}</dt><dd>{localized.personalRole}</dd></div>
            <div>
              <dt>{copy.status}</dt>
              <dd>
                <strong>{projectStatusLabels[language][localized.projectStatus]}</strong>
                <small>{localized.status}</small>
              </dd>
            </div>
          </dl>
        </section>

        <section className="case-story">
          <div className="case-story__index">{copy.storyIndex}</div>
          <div className="case-story__title">
            <p>{copy.storyEyebrow}</p>
            <h2>{copy.storyTitle}</h2>
          </div>
          <div className="case-story__chapters">
            <article>
              <span>{copy.context}</span>
              <p>{localized.challenge}</p>
            </article>
            <article>
              <span>{copy.role}</span>
              <p>{localized.personalRole}</p>
            </article>
            <article>
              <span>{copy.responsibilities}</span>
              <p>{localized.direction}</p>
            </article>
            <article>
              <span>{copy.evidence}</span>
              <p>{localized.result}</p>
            </article>
          </div>
        </section>

        <section className="case-work">
          <div className="case-work__heading">
            <span>{copy.galleryIndex}</span>
            <h2>{copy.galleryTitle}<span>.</span></h2>
            <p>{copy.galleryText}</p>
          </div>

          <div className={`case-gallery case-gallery--${localized.gallery.length}`}>
            {localized.gallery.map((image, index) => (
              <figure
                className={`case-gallery__item case-gallery__item--${getGalleryLayout(image)}`}
                key={`${image.src}-${index}`}
                style={getGalleryStyle(image)}
              >
                <div className="case-gallery__canvas">
                  <MediaFrame
                    image={image}
                    context="gallery"
                    sizes={getGallerySizes(image)}
                  />
                </div>
                <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{image.label}</figcaption>
              </figure>
            ))}

          </div>
        </section>

        <section
          className={`case-system case-system--${projectStatusVariant[localized.projectStatus]}`}
          aria-labelledby={closingTitleId}
        >
          <div className="case-system__header">
            <span>{closing.index}</span>
            <h2 id={closingTitleId}>{closing.title}</h2>
          </div>
          <div className="case-system__body">
            <div className="case-system__status">
              <span>{copy.status}</span>
              <div>
                <strong>{projectStatusLabels[language][localized.projectStatus]}</strong>
                <small>{localized.status}</small>
                <p>{closing.description}</p>
              </div>
            </div>
            <div className="case-palette" aria-hidden="true">
              <i style={{ background: localized.accent }} />
              <i style={{ background: localized.accentSoft }} />
              <i style={{ background: localized.ink }} />
            </div>
            <div className="case-system__summary">
              <span>{projectCopy.whatTookShape}</span>
              <p>{localized.built}</p>
            </div>
            <ul className="case-system__deliverables" aria-label={copy.responsibilities}>
              {localized.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
            </ul>
            <section className="case-system__services" aria-labelledby={`case-skills-${localized.slug}`}>
              <h3 id={`case-skills-${localized.slug}`}>{copy.competencies}</h3>
              <ul className="case-system__service-list">
                {localized.services.map((service) => <li key={service}>{service}</li>)}
              </ul>
            </section>
          </div>
        </section>

        <section className="case-next">
          <p>{copy.nextWork}</p>
          <Link href={withLanguage(`/cases/${localizedNext.slug}`, language)}>
            <span>{localizedNext.client}</span>
            <ArrowUpRight aria-hidden="true" size={42} strokeWidth={1.25} />
          </Link>
          <small>{localizedNext.headline}</small>
        </section>

        <section className="case-contact">
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
