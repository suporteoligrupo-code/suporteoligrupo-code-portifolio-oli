"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CareerEntry } from "../app/data/career";
import {
  careerUiCopy,
  localizeCareerEntry,
} from "../app/data/career";
import { reviewCareerEntry } from "../app/data/career-editorial";
import { getCareerPriority } from "../app/data/career-order";
import { withLanguage } from "../app/data/i18n";
import { useLanguage } from "./language-provider";
import MediaFrame from "./media-frame";

export default function CareerCard({ item }: { item: CareerEntry }) {
  const { language } = useLanguage();
  const localized = reviewCareerEntry(localizeCareerEntry(item, language), language);
  const copy = careerUiCopy[language].card;
  const cover = localized.cover ?? localized.media[0];
  const period = localized.period;
  const relationship = localized.relationshipDetail ?? localized.relationship;
  const mediaSizes = "(max-width: 760px) 100vw, 50vw";

  return (
    <article
      className={`career-card career-card--${item.slug}${item.featured ? " career-card--featured" : ""}${cover ? " career-card--media" : " career-card--text"}`}
      style={{ order: getCareerPriority(item.slug) }}
    >
      <Link
        href={withLanguage(`/career/${item.slug}`, language)}
        aria-label={`${copy.openEntry} ${localized.company}`}
      >
        {cover ? (
          <figure className="career-card__media">
            <MediaFrame image={cover} context="card" sizes={mediaSizes} />
          </figure>
        ) : null}

        <div className="career-card__content">
          <div className="career-card__meta">
            {period ? <span>{period}</span> : null}
            <span>{relationship}</span>
          </div>

          <div className="career-card__body">
            <h3>{localized.company}</h3>
            <p className="career-card__roles">{localized.roles.slice(0, 3).join(" · ")}</p>
            <p className="career-card__summary">{localized.summary}</p>
            <ul className="career-card__competencies" aria-label={copy.competenciesLabel}>
              {localized.competencies.slice(0, 3).map((competency) => (
                <li key={competency}>{competency}</li>
              ))}
            </ul>
          </div>

          <span className="career-card__cta">
            {copy.openEntry}
            <ArrowUpRight aria-hidden="true" size={18} />
          </span>
        </div>
      </Link>
    </article>
  );
}
