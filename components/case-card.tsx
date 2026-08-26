import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import type { OliCase } from "../app/data/cases";

type CaseStyle = CSSProperties & {
  "--case-accent": string;
  "--case-soft": string;
  "--case-ink": string;
};

export default function CaseCard({ item }: { item: OliCase }) {
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
      <Link href={`/cases/${item.slug}`} aria-label={`Abrir o case ${item.client}`}>
        <figure className="case-card__visual">
          <img
            src={item.cover.src}
            alt={item.cover.alt}
            loading={item.number === "01" ? "eager" : "lazy"}
            style={{ objectPosition: item.cover.position ?? "center" }}
          />
          <span className="case-card__open">
            Ver case <ArrowUpRight aria-hidden="true" size={18} />
          </span>
        </figure>

        <div className="case-card__copy">
          <div className="case-card__meta">
            <span>{item.number}</span>
            <span>{item.sector}</span>
            <span>{item.year}</span>
          </div>
          <div className="case-card__bottom">
            <h3>{item.client}</h3>
            <ArrowUpRight aria-hidden="true" size={22} strokeWidth={1.45} />
          </div>
        </div>
      </Link>
    </article>
  );
}
