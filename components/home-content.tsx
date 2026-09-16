"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import type { CareerEntry } from "../app/data/career";
import { publicCases } from "../app/data/cases";
import { siteCopy, withLanguage } from "../app/data/i18n";
import { homeProjectSlugs, oliPositioning } from "../app/data/positioning";
import CareerCard from "./career-card";
import CaseCard from "./case-card";
import { useLanguage } from "./language-provider";
import SiteFooter from "./site-footer";
import SiteHeader, { linkedinUrl } from "./site-header";

const selectedProjects = homeProjectSlugs
  .map((slug) => publicCases.find((item) => item.slug === slug))
  .filter((item): item is (typeof publicCases)[number] => Boolean(item));

export default function HomeContent({ featuredCareerEntries }: { featuredCareerEntries: CareerEntry[] }) {
  const { language } = useLanguage();
  const copy = siteCopy[language].home;

  useEffect(() => { document.title = copy.pageTitle; }, [copy.pageTitle]);

  return (
    <div className="site-page site-page--editorial">
      <SiteHeader />
      <main>
        <section className="hero-shell hero-shell--clean" id="inicio">
          <div className="hero-stage hero-stage--clean section-shell">
            <div className="hero-content hero-content--clean">
              <p className="hero-kicker">Lucas de Oliveira Andrade <span>· OLI</span></p>
              <h1>{copy.heroTitle}</h1>
              <p className="hero-lede">{copy.heroText}</p>
              <p className="hero-positioning">{copy.positioning}</p>
              <div className="hero-actions">
                <a className="button button-light" href="#trajetoria">{copy.journeyCta}<ArrowDownRight aria-hidden="true" size={18} /></a>
                <a className="button button-outline" href="#projetos">{copy.workCta}<ArrowDownRight aria-hidden="true" size={18} /></a>
              </div>
            </div>
            <aside className="hero-portrait" aria-label="Lucas de Oliveira Andrade">
              <img src="/lucas-linkedin.jpg" alt="Lucas de Oliveira Andrade" width={200} height={200} />
              <span>Na operação da Rico Games desde 2010</span>
            </aside>
          </div>
        </section>

        <section className="positioning section-shell" id="trajetoria">
          <div className="section-index">{copy.summaryIndex}</div>
          <div className="positioning-copy reveal"><p className="eyebrow">{copy.summaryEyebrow}</p><h2>{copy.summaryTitle}</h2></div>
          <div className="positioning-note"><p>{copy.summaryText}</p><Link href={withLanguage("/career", language)}>{copy.summaryCta}<ArrowUpRight aria-hidden="true" size={18} /></Link></div>
          <ol className="journey-stages" aria-label="Evolução profissional desde 2010">
            <li><span>2010</span><strong>Rico Games</strong><p>Vendas e atendimento: a base para compreender público, objeções e operação.</p></li>
            <li><span>Evolução</span><strong>Comercial, marketing e gestão</strong><p>A experiência da linha de frente passou a orientar ofertas, campanhas, conteúdo e decisões do negócio.</p></li>
            <li><span>Hoje</span><strong>Games, tecnologia e cultura pop</strong><p>Continuo na Rico Games e conecto esse repertório à consultoria, à comunicação e à direção criativa para esses mercados.</p></li>
          </ol>
        </section>

        <section className="oli-positioning section-shell" id="oli" aria-labelledby="oli-title">
          <div className="section-index">{oliPositioning.index}</div>
          <div className="oli-positioning__intro reveal">
            <p className="eyebrow">{oliPositioning.eyebrow}</p>
            <h2 id="oli-title">{oliPositioning.title}</h2>
          </div>
          <div className="oli-positioning__body"><p>{oliPositioning.text}</p><p>{oliPositioning.scope}</p></div>
          <div className="oli-audiences">
            <h3>{oliPositioning.audienceTitle}</h3>
            <dl>{oliPositioning.audiences.map((audience) => <div key={audience.title}><dt>{audience.title}</dt><dd>{audience.text}</dd></div>)}</dl>
          </div>
        </section>

        <section className="career-home" id="empresas">
          <header className="cases-heading section-shell reveal">
            <div className="section-index">{copy.companiesIndex}</div>
            <div><p className="eyebrow">{copy.companiesEyebrow}</p><h2>{copy.companiesTitle}<span>.</span></h2></div>
            <div className="cases-heading__aside"><p>{copy.companiesText}</p><Link href={withLanguage("/career", language)}>Ver todas as experiências<ArrowUpRight aria-hidden="true" size={18} /></Link></div>
          </header>
          <div className="career-grid section-shell">{featuredCareerEntries.map((entry) => <CareerCard item={entry} key={entry.slug} />)}</div>
        </section>

        <section className="cases-section" id="projetos">
          <header className="cases-heading section-shell reveal">
            <div className="section-index">{copy.worksIndex}</div>
            <div><p className="eyebrow">{copy.worksEyebrow}</p><h2>{copy.worksTitle}<span>.</span></h2></div>
            <div className="cases-heading__aside"><p>{copy.worksText}</p><Link href={withLanguage("/cases", language)}>{copy.worksCta}<ArrowUpRight aria-hidden="true" size={18} /></Link></div>
          </header>
          <div className="case-grid section-shell">{selectedProjects.map((item) => <CaseCard item={item} key={item.slug} />)}</div>
        </section>

        <section className="partnerships section-shell" id="parcerias">
          <header className="partnerships__heading reveal"><div className="section-index">{copy.partnershipsIndex}</div><div><p className="eyebrow">{copy.partnershipsEyebrow}</p><h2>{copy.partnershipsTitle}</h2></div><p>{copy.partnershipsText}</p></header>
          <div className="partnerships__grid" aria-label={copy.partnershipsEyebrow}>{copy.partnershipNames.slice(0, 8).map((name) => <article key={name}><strong>{name}</strong></article>)}</div>
        </section>

        <section className="capabilities section-shell" id="valor">
          <div className="capabilities-intro reveal"><div className="section-index">{copy.valueIndex}</div><p className="eyebrow">{copy.valueEyebrow}</p><h2>{copy.valueTitle}</h2><p>{copy.valueText}</p></div>
          <div className="service-list">{copy.valueAxes.slice(0, 4).map((axis) => <article key={axis.number}><div className="service-title"><span>{axis.number}</span><h3>{axis.title}</h3><ArrowRight aria-hidden="true" size={22} strokeWidth={1.4} /></div><p>{axis.text}</p></article>)}</div>
        </section>

        <aside className="authorial-note section-shell" id="marca-autoral" aria-label="Outra marca autoral">
          <p><strong>{copy.impactLabel}.</strong> Minha trajetória também inclui essa marca autoral, com o compromisso de destinar <strong>10% da renda bruta</strong> a iniciativas de proteção animal.</p>
          <Link href={withLanguage("/career/urly-marketing", language)}>Conheça a Urly<ArrowUpRight aria-hidden="true" size={18} /></Link>
        </aside>

        <section className="contact-shell" id="contato">
          <div className="contact-stage"><p className="eyebrow">{copy.contactEyebrow}</p><h2>{copy.contactTitle}</h2><p className="contact-text">{copy.contactText}</p><a className="button button-light contact-button" href={linkedinUrl} target="_blank" rel="noreferrer">{copy.contactCta}<ArrowUpRight aria-hidden="true" size={19} /></a></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
