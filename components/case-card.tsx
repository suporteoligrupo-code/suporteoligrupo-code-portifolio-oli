"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import {
  projectStatusLabels,
  type PortfolioCase,
} from "../app/data/cases";
import { localizeCase, siteCopy, withLanguage } from "../app/data/i18n";
import { useLanguage } from "./language-provider";
import MediaFrame from "./media-frame";

type CaseStyle = CSSProperties & {
  "--case-accent": string;
  "--case-soft": string;
  "--case-ink": string;
};

export default function CaseCard({ item }: { item: PortfolioCase }) {
  const { language } = useLanguage();
  const localized = localizeCase(item, language);
  const copy = siteCopy[language].card;
  const style: CaseStyle = {
    "--case-accent": item.accent,
    "--case-soft": item.accentSoft,
    "--case-ink": item.ink,
  };
  const mediaSizes = item.size === "wide"
    ? "(max-width: 960px) 100vw, 66vw"
    : "(max-width: 760px) 100vw, (max-width: 960px) 50vw, 33vw";

  return (
    <article
      className={`case-card case-card--${item.size} case-card--${item.cardTone} reveal`}
      style={style}
    >
      <Link
        href={withLanguage(`/cases/${item.slug}`, language)}
        aria-label={`${copy.openProject} ${localized.client}`}
      >
        <figure className="case-card__visual">
          <MediaFrame image={localized.cover} context="card" sizes={mediaSizes} />
          <span className="case-card__open">
            <span>{copy.viewProject}</span>
            <ArrowUpRight aria-hidden="true" size={18} />
          </span>
        </figure>

        <div className="case-card__copy">
          <div className="case-card__meta">
            <span>{item.number}</span>
            <span className="case-card__status">
              {projectStatusLabels[language][item.projectStatus]}
            </span>
            <span>{item.year}</span>
          </div>
          <div className="case-card__bottom">
            <div>
              <h3>{localized.client}</h3>
              <span className="case-card__sector">{localized.sector}</span>
              <p className="case-card__role">{localized.personalRole}</p>
              <small className="case-card__built">{localized.built}</small>
            </div>
            <span className="case-card__arrow" aria-hidden="true">
              <ArrowUpRight size={22} strokeWidth={1.45} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
