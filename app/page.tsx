"use client";

import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Heart,
} from "lucide-react";
import { useEffect } from "react";
import CareerCard from "../components/career-card";
import CaseCard from "../components/case-card";
import { useLanguage } from "../components/language-provider";
import SiteFooter from "../components/site-footer";
import SiteHeader, { linkedinUrl } from "../components/site-header";
import { featuredCareerEntries } from "./data/career";
import { publicCases } from "./data/cases";
import { siteCopy, withLanguage } from "./data/i18n";

type HeroProject = {
  slug: string;
  src: string;
  srcSet: string;
  mobileSrc?: string;
  mobileSrcSet?: string;
  width: number;
  height: number;
  mobileWidth?: number;
  mobileHeight?: number;
  className: string;
};

const heroProjects: HeroProject[] = [
  {
    slug: "manifesto-bar",
    src: "/cases/manifesto/palco-large.webp",
    srcSet: "/media-responsive/cases/manifesto/palco-large-480.webp 480w, /media-responsive/cases/manifesto/palco-large-800.webp 800w, /media-responsive/cases/manifesto/palco-large-1200.webp 1200w, /cases/manifesto/palco-large.webp 1672w",
    width: 1672,
    height: 941,
    className: "hero-slide--1",
  },
  {
    slug: "oliveira-transportes",
    src: "/cases/oliveira-transportes/hero.webp",
    srcSet: "/media-responsive/cases/oliveira-transportes/hero-480.webp 480w, /media-responsive/cases/oliveira-transportes/hero-800.webp 800w, /media-responsive/cases/oliveira-transportes/hero-1200.webp 1200w, /cases/oliveira-transportes/hero.webp 1774w",
    width: 1774,
    height: 887,
    className: "hero-slide--2",
  },
  {
    slug: "metro-case",
    src: "/cases/metro-case/hero.webp",
    srcSet: "/media-responsive/cases/metro-case/hero-480.webp 480w, /media-responsive/cases/metro-case/hero-800.webp 800w, /media-responsive/cases/metro-case/hero-1200.webp 1200w, /cases/metro-case/hero.webp 1840w",
    mobileSrc: "/cases/metro-case/hero-mobile.webp",
    mobileSrcSet: "/media-responsive/cases/metro-case/hero-mobile-480.webp 480w, /media-responsive/cases/metro-case/hero-mobile-800.webp 800w, /cases/metro-case/hero-mobile.webp 864w",
    width: 1840,
    height: 851,
    mobileWidth: 864,
    mobileHeight: 1821,
    className: "hero-slide--3",
  },
];

const selectedProjectSlugs = [
  "gru-kpop-anime",
  "studio-e",
  "rico-games",
  "eletrotech-isa",
  "manifesto-bar",
  "metro-case",
  "josucas-eletronicos",
  "oliveira-transportes",
];

const selectedProjects = selectedProjectSlugs
  .map((slug) => publicCases.find((item) => item.slug === slug))
  .filter((item): item is (typeof publicCases)[number] => Boolean(item));

export default function Home() {
  const { language } = useLanguage();
  const copy = siteCopy[language].home;

  useEffect(() => {
    document.title = copy.pageTitle;
  }, [copy.pageTitle]);

  return (
    <div className="site-page">
      <SiteHeader />

      <main>
        <section className="hero-shell" id="inicio">
          <div className="hero-stage">
            <div className="hero-media" aria-hidden="true">
              {heroProjects.map((project, index) => (
                <figure className={`hero-slide ${project.className}`} key={project.slug}>
                  <picture>
                    {project.mobileSrc ? (
                      <source
                        media="(max-width: 760px)"
                        srcSet={project.mobileSrcSet ?? project.mobileSrc}
                        sizes="100vw"
                        width={project.mobileWidth}
                        height={project.mobileHeight}
                      />
                    ) : null}
                    <img
                      src={project.src}
                      srcSet={project.srcSet}
                      alt=""
                      width={project.width}
                      height={project.height}
                      sizes="100vw"
                      loading={index === 0 ? "eager" : "lazy"}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      decoding="async"
                    />
                  </picture>
                </figure>
              ))}
            </div>

            <div className="hero-topline">
              <span>Lucas de Oliveira Andrade / {copy.heroEyebrow}</span>
              <span>{copy.regions} / 2026</span>
            </div>

            <div className="hero-content">
              <div className="hero-person">
                <img src="/lucas-linkedin.jpg" alt="Lucas de Oliveira Andrade" width={200} height={200} />
                <span>
                  <strong>Lucas de Oliveira Andrade</strong>
                  <small>{copy.regions}</small>
                </span>
              </div>
              <p className="hero-kicker">{copy.heroEyebrow}</p>
              <h1>{copy.heroName}</h1>
              <h2 className="hero-role-title">{copy.heroTitle}</h2>
              <p className="hero-lede">{copy.heroText}</p>
              <p className="hero-positioning">“{copy.positioning}”</p>
              <div className="hero-actions">
                <a className="button button-light" href="#trajetoria">
                  {copy.journeyCta}
                  <ArrowDownRight aria-hidden="true" size={18} />
                </a>
                <a className="button button-outline" href="#projetos">
                  {copy.workCta}
                  <ArrowDownRight aria-hidden="true" size={18} />
                </a>
              </div>
            </div>

            <div className="hero-footer" aria-label={copy.proofAria}>
              {copy.proofs.map((proof, index) => (
                <div className="hero-proof-item" key={proof}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{proof}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="positioning section-shell" id="trajetoria">
          <div className="section-index">{copy.summaryIndex}</div>
          <div className="positioning-copy reveal">
            <p className="eyebrow">{copy.summaryEyebrow}</p>
            <h2>{copy.summaryTitle}</h2>
          </div>
          <div className="positioning-note reveal">
            <p>{copy.summaryText}</p>
            <Link href={withLanguage("/career", language)}>
              {copy.summaryCta}
              <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </section>

        <section className="career-home" id="empresas">
          <header className="cases-heading section-shell reveal">
            <div className="section-index">{copy.companiesIndex}</div>
            <div>
              <p className="eyebrow">{copy.companiesEyebrow}</p>
              <h2>{copy.companiesTitle}<span>.</span></h2>
            </div>
            <div className="cases-heading__aside">
              <p>{copy.companiesText}</p>
              <Link href={withLanguage("/career", language)}>
                {copy.companiesCta}
                <ArrowUpRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </header>

          <div className="career-grid section-shell">
            {featuredCareerEntries.map((entry) => <CareerCard item={entry} key={entry.slug} />)}
          </div>
        </section>

        <section className="cases-section" id="projetos">
          <header className="cases-heading section-shell reveal">
            <div className="section-index">{copy.worksIndex}</div>
            <div>
              <p className="eyebrow">{copy.worksEyebrow}</p>
              <h2>{copy.worksTitle}<span>.</span></h2>
            </div>
            <div className="cases-heading__aside">
              <p>{copy.worksText}</p>
              <Link href={withLanguage("/cases", language)}>
                {copy.worksCta}
                <ArrowUpRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </header>

          <div className="case-grid section-shell">
            {selectedProjects.map((item) => <CaseCard item={item} key={item.slug} />)}
          </div>
        </section>

        <section className="partnerships section-shell" id="parcerias">
          <header className="partnerships__heading reveal">
            <div className="section-index">{copy.partnershipsIndex}</div>
            <div>
              <p className="eyebrow">{copy.partnershipsEyebrow}</p>
              <h2>{copy.partnershipsTitle}</h2>
            </div>
            <p>{copy.partnershipsText}</p>
          </header>
          <div className="partnerships__grid reveal" aria-label={copy.partnershipsEyebrow}>
            {copy.partnershipNames.map((name, index) => (
              <article key={name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{name}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="capabilities section-shell" id="valor">
          <div className="capabilities-intro reveal">
            <div className="section-index">{copy.valueIndex}</div>
            <p className="eyebrow">{copy.valueEyebrow}</p>
            <h2>{copy.valueTitle}</h2>
            <p>{copy.valueText}</p>
          </div>

          <div className="service-list reveal">
            {copy.valueAxes.map((axis) => (
              <article key={axis.number}>
                <div className="service-title">
                  <span>{axis.number}</span>
                  <h3>{axis.title}</h3>
                  <ArrowRight aria-hidden="true" size={24} strokeWidth={1.5} />
                </div>
                <p>{axis.text}</p>
                <div>{axis.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="method section-shell" id="como-trabalho">
          <header className="method-heading reveal">
            <div className="section-index">{copy.methodIndex}</div>
            <div>
              <p className="eyebrow">{copy.methodEyebrow}</p>
              <h2>{copy.methodTitle}</h2>
            </div>
            <p>{copy.methodText}</p>
          </header>
          <div className="method-grid reveal">
            {copy.method.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="impact section-shell reveal" id="marca-autoral">
          <div className="impact-copy">
            <div className="impact-label">
              <Heart aria-hidden="true" size={19} strokeWidth={1.6} />
              <span>{copy.impactIndex} · {copy.impactLabel}</span>
            </div>
            <strong>{copy.impactMetric}</strong>
            <h2>{copy.impactTitle}</h2>
            <p>{copy.impactText}</p>
          </div>
          <figure className="impact-photo">
            <img
              src="/impact/gatinho-ruivo.jpg"
              srcSet="/media-responsive/impact/gatinho-ruivo-480.webp 480w, /impact/gatinho-ruivo.jpg 700w"
              sizes="(max-width: 760px) 100vw, 50vw"
              alt={copy.catAlt}
              width={700}
              height={936}
              loading="lazy"
            />
            <figcaption>{copy.catCaption}</figcaption>
          </figure>
        </section>

        <section className="contact-shell" id="contato">
          <div className="contact-stage">
            <span className="contact-mark" aria-hidden="true">LOA</span>
            <p className="eyebrow">{copy.contactEyebrow}</p>
            <h2>{copy.contactTitle}</h2>
            <p className="contact-text">{copy.contactText}</p>
            <a className="button button-light contact-button" href={linkedinUrl} target="_blank" rel="noreferrer">
              {copy.contactCta}
              <ArrowUpRight aria-hidden="true" size={19} />
            </a>
            <div className="contact-meta">
              <span><Globe2 aria-hidden="true" size={16} /> {copy.profileLabel}</span>
              <span><Globe2 aria-hidden="true" size={16} /> {copy.regions}</span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
