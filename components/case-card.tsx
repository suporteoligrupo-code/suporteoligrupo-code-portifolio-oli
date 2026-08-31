"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import type { OliCase } from "../app/data/cases";
import { localizeCase, siteCopy, withLanguage } from "../app/data/i18n";
import { useLanguage } from "./language-provider";

type CaseStyle = CSSProperties & {
  "--case-accent": string;
  "--case-soft": string;
  "--case-ink": string;
};

export default function CaseCard({ item }: { item: OliCase }) {
  const { language } = useLanguage();
  const localized = localizeCase(item, language);
  const copy = siteCopy[language].card;
  const style: CaseStyle = {
    "--case-accent": item.accent,
    "--case-soft": item.accentSoft,
    "--case-ink": item.ink,
  };

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
          <img
            src={localized.cover.src}
            alt={localized.cover.alt}
            loading={item.number === "01" ? "eager" : "lazy"}
            style={{
              objectPosition: localized.cover.position ?? "center",
              objectFit: localized.cover.fit ?? "cover",
            }}
          />
          <span className="case-card__open">
            {copy.viewProject} <ArrowUpRight aria-hidden="true" size={18} />
          </span>
        </figure>

        <div className="case-card__copy">
          <div className="case-card__meta">
            <span>{item.number}</span>
            <span>{localized.sector}</span>
            <span>{item.year}</span>
          </div>
          <div className="case-card__bottom">
            <div>
              <h3>{localized.client}</h3>
              <p>{localized.headline}</p>
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
