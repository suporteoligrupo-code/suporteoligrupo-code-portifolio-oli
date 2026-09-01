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
import CaseCard from "../components/case-card";
import { useLanguage } from "../components/language-provider";
import SiteFooter from "../components/site-footer";
import SiteHeader, { linkedinUrl } from "../components/site-header";
import { cases } from "./data/cases";
import { siteCopy, withLanguage } from "./data/i18n";

const clientMarks = [
  { slug: "gru-kpop-anime", name: "GRU KPOP Anime", src: "/brandmarks/gru-kpop-light.png", width: 720, height: 253 },
  { slug: "studio-e", name: "Studio E", src: "/brandmarks/studio-e-light.png", width: 356, height: 280 },
  { slug: "rico-games", name: "Rico Games", src: "/brandmarks/rico-games-light.png", width: 704, height: 280 },
  { slug: "josucas-eletronicos", name: "Josucas Eletrônicos", src: "/brandmarks/josucas-light.png", width: 627, height: 280 },
  { slug: "manifesto-bar", name: "Manifesto Bar", src: "/brandmarks/manifesto-light.png", width: 260, height: 280 },
  { slug: "metro-case", name: "Metro Case", src: "/brandmarks/metro-case-light.png", width: 720, height: 157 },
];

type HeroProject = {
  item: (typeof cases)[number];
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
    item: cases.find((item) => item.slug === "manifesto-bar")!,
    src: "/cases/manifesto/palco-large.webp",
    srcSet: "/media-responsive/cases/manifesto/palco-large-480.webp 480w, /media-responsive/cases/manifesto/palco-large-800.webp 800w, /media-responsive/cases/manifesto/palco-large-1200.webp 1200w, /cases/manifesto/palco-large.webp 1672w",
    width: 1672,
    height: 941,
    className: "hero-slide--1",
  },
  {
    item: cases.find((item) => item.slug === "oliveira-transportes")!,
    src: "/cases/oliveira-transportes/hero.webp",
    srcSet: "/media-responsive/cases/oliveira-transportes/hero-480.webp 480w, /media-responsive/cases/oliveira-transportes/hero-800.webp 800w, /media-responsive/cases/oliveira-transportes/hero-1200.webp 1200w, /cases/oliveira-transportes/hero.webp 1774w",
    width: 1774,
    height: 887,
    className: "hero-slide--2",
  },
  {
    item: cases.find((item) => item.slug === "metro-case")!,
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
                <figure className={`hero-slide ${project.className}`} key={project.item.slug}>
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
              <span>Lucas de Oliveira Andrade / {copy.studio}</span>
              <span>São Paulo · Brasil / 2026</span>
            </div>

            <div className="hero-content">
              <div className="hero-person">
                <img src="/lucas-linkedin.jpg" alt="Lucas de Oliveira Andrade" width={200} height={200} />
                <span>
                  <strong>Lucas de Oliveira Andrade</strong>
                  <small>LinkedIn · São Paulo, Brasil</small>
                </span>
              </div>
              <p className="hero-kicker">{copy.kicker}</p>
              <h1>
                {copy.heroTitle} <span>{copy.heroAccent}</span>
              </h1>
              <p className="hero-lede">{copy.lede}</p>
              <div className="hero-actions">
                <a className="button button-light" href="#cases">
                  {copy.explore}
                  <ArrowDownRight aria-hidden="true" size={18} />
                </a>
                <a className="button button-outline" href={linkedinUrl} target="_blank" rel="noreferrer">
                  {copy.elevate}
                  <ArrowUpRight aria-hidden="true" size={18} />
                </a>
              </div>
            </div>

            <div className="hero-footer">
              <div className="hero-now-playing">
                <span className="hero-footer-label">{copy.onStage}</span>
                <strong className="hero-project-name" aria-label={heroProjects.map(({ item }) => item.client).join(", ")}>
                  {heroProjects.map(({ item }) => <span key={item.slug}>{item.client}</span>)}
                </strong>
              </div>
              <div className="hero-count">
                <b>{String(cases.length).padStart(2, "0")}</b> {copy.projectsToExplore}
              </div>
              <a className="hero-scroll" href="#cases">
                <span>{copy.explore}</span>
                <ArrowDownRight aria-hidden="true" size={18} />
              </a>
            </div>

            <aside className="hero-proof" aria-label={copy.proofAria}>
              <span>{copy.proofLabel}</span>
              <strong>{copy.proofTitle}</strong>
              <p>{copy.proofText}</p>
            </aside>
          </div>
        </section>

        <section className="project-rail" aria-label={copy.clientMarksAria}>
          <p>{copy.featuredProjects}</p>
          <div>
            {clientMarks.map((item) => (
              <Link
                key={item.slug}
                href={withLanguage(`/cases/${item.slug}`, language)}
                aria-label={`${copy.openProject} ${item.name}`}
              >
                <img
                  src={item.src}
                  srcSet={`/media-responsive${item.src.slice(0, item.src.lastIndexOf("."))}-240.webp 240w, ${item.src} ${item.width}w`}
                  sizes="(max-width: 760px) 128px, 14vw"
                  alt={`${copy.brandmark} ${item.name}`}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            ))}
          </div>
        </section>

        <section className="positioning section-shell">
          <div className="section-index">{copy.whyIndex}</div>
          <div className="positioning-copy">
            <p className="eyebrow">{copy.perceptionEyebrow}</p>
            <h2>
              {copy.perceptionTitle}
              <span> {copy.perceptionAccent}</span>
            </h2>
          </div>
          <div className="positioning-note">
            <p>{copy.perceptionText}</p>
            <a href="#processo">
              {copy.perceptionLink}
              <ArrowDownRight aria-hidden="true" size={18} />
            </a>
          </div>
        </section>

        <section className="cases-section" id="cases">
          <header className="cases-heading section-shell reveal">
            <div className="section-index">{copy.portfolioIndex}</div>
            <div>
              <p className="eyebrow">{copy.portfolioEyebrow}</p>
              <h2>{copy.projectsTitle}<span>.</span></h2>
            </div>
            <div className="cases-heading__aside">
              <p>{copy.portfolioText}</p>
              <Link href={withLanguage("/cases", language)}>
                {copy.explore}
                <ArrowUpRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </header>

          <div className="case-grid section-shell">
            {cases.map((item) => <CaseCard item={item} key={item.slug} />)}
          </div>

          <div className="cases-proof section-shell reveal">
            <span>{copy.proofNumbers}</span>
            <p>{copy.proofNumbersText}</p>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div>
            {[...copy.marquee, ...copy.marquee].map((word, index) => (
              <span className="marquee-item" key={`${word}-${index}`}>
                <span>{word}</span><i>✦</i>
              </span>
            ))}
          </div>
        </div>

        <section className="capabilities section-shell" id="servicos">
          <div className="capabilities-intro reveal">
            <div className="section-index">{copy.servicesIndex}</div>
            <p className="eyebrow">{copy.servicesEyebrow}</p>
            <h2>{copy.servicesTitle}<br /><span>{copy.servicesAccent}</span></h2>
            <p>{copy.servicesText}</p>
            <a className="button button-orange" href={linkedinUrl} target="_blank" rel="noreferrer">
              {copy.servicesCta}
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </div>

          <div className="service-list reveal">
            {copy.services.map((service) => (
              <article key={service.number}>
                <div className="service-title">
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <ArrowRight aria-hidden="true" size={24} strokeWidth={1.5} />
                </div>
                <p>{service.text}</p>
                <div>{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="method section-shell" id="processo">
          <header className="method-heading reveal">
            <div className="section-index">{copy.processIndex}</div>
            <h2>{copy.processTitle}</h2>
            <p>{copy.processText}</p>
          </header>
          <div className="method-grid reveal">
            {copy.process.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="impact section-shell reveal">
          <div className="impact-copy">
            <div className="impact-label">
              <Heart aria-hidden="true" size={19} strokeWidth={1.6} />
              <span>{copy.impactLabel}</span>
            </div>
            <strong>10%</strong>
            <h2>{copy.impactTitle}</h2>
            <p>{copy.impactText}</p>
          </div>
          <figure className="impact-photo">
            <img
              src="/impact/gatinho-ruivo.jpg"
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
            <h2>
              {copy.contactTitle} <span>{copy.contactAccent}</span>
            </h2>
            <a className="button button-light contact-button" href={linkedinUrl} target="_blank" rel="noreferrer">
              {copy.contactCta}
              <ArrowUpRight aria-hidden="true" size={19} />
            </a>
            <div className="contact-meta">
              <span><Globe2 aria-hidden="true" size={16} /> LinkedIn · Lucas Oliveira</span>
              <span><Globe2 aria-hidden="true" size={16} /> {copy.regions}</span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
