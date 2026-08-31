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
  { slug: "gru-kpop-anime", name: "GRU KPOP Anime", src: "/brandmarks/gru-kpop-light.png" },
  { slug: "studio-e", name: "Studio E", src: "/brandmarks/studio-e-light.png" },
  { slug: "rico-games", name: "Rico Games", src: "/brandmarks/rico-games-light.png" },
  { slug: "josucas-eletronicos", name: "Josucas Eletrônicos", src: "/brandmarks/josucas-light.png" },
  { slug: "manifesto-bar", name: "Manifesto Bar", src: "/brandmarks/manifesto-light.png" },
  { slug: "metro-case", name: "Metro Case", src: "/brandmarks/metro-case-light.png" },
];

const heroProjects = cases.slice(0, 3);

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
              <figure className="hero-slide hero-lucas">
                <img src="/cases/manifesto/palco.webp" alt="" fetchPriority="high" />
              </figure>
              <figure className="hero-slide hero-studio">
                <img src="/portfolio/rico-games-gta6-preview.jpg" alt="" />
              </figure>
              <figure className="hero-slide hero-rico">
                <img src="/cases/gru-kpop-anime/site-home.jpg" alt="" />
              </figure>
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
                <strong className="hero-project-name" aria-label={heroProjects.map((item) => item.client).join(", ")}>
                  {heroProjects.map((item) => <span key={item.slug}>{item.client}</span>)}
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
                <img src={item.src} alt={`${copy.brandmark} ${item.name}`} loading="lazy" />
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
