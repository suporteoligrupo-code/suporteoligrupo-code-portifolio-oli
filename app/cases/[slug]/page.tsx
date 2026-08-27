import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import SiteFooter from "../../../components/site-footer";
import SiteHeader, { instagramUrl } from "../../../components/site-header";
import { cases, getCase, getNextCase } from "../../data/cases";

type CasePageStyle = CSSProperties & {
  "--study-accent": string;
  "--study-soft": string;
  "--study-ink": string;
};

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);

  if (!item) return {};

  return {
    title: `${item.client} — Projeto OLI`,
    description: item.summary,
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();

  const next = getNextCase(item.slug);
  const style: CasePageStyle = {
    "--study-accent": item.accent,
    "--study-soft": item.accentSoft,
    "--study-ink": item.ink,
  };

  return (
    <div className={`case-page case-page--${item.cardTone}`} style={style}>
      <SiteHeader inner />

      <main>
        <section className="case-hero">
          <div className="case-hero__topline">
            <Link href="/#cases"><ArrowLeft aria-hidden="true" size={16} /> Todos os projetos</Link>
            <span>Projeto {item.number} · {item.year}</span>
          </div>

          <div className="case-hero__heading">
            <div>
              <p>{item.sector}</p>
              <h1>{item.client}</h1>
            </div>
            <div className="case-hero__intro">
              <strong>{item.headline}</strong>
              <p>{item.summary}</p>
              <div className="case-hero__actions">
                {item.liveUrl && (
                  <a href={item.liveUrl} target="_blank" rel="noreferrer">
                    Ver projeto publicado <ArrowUpRight aria-hidden="true" size={17} />
                  </a>
                )}
                <a href={instagramUrl} target="_blank" rel="noreferrer">
                  Quero um projeto assim <ArrowUpRight aria-hidden="true" size={17} />
                </a>
              </div>
            </div>
          </div>

          <figure className="case-hero__visual">
            <img
              src={item.cover.src}
              alt={item.cover.alt}
              fetchPriority="high"
              style={{ objectPosition: item.cover.position ?? "center" }}
            />
            <figcaption>
              <span>{item.cover.label}</span>
              <span>{item.location}</span>
            </figcaption>
          </figure>

          <dl className="case-facts">
            <div><dt>Cliente</dt><dd>{item.client}</dd></div>
            <div><dt>Setor</dt><dd>{item.sector}</dd></div>
            <div><dt>Escopo</dt><dd>{item.services.join(" · ")}</dd></div>
            <div><dt>Status</dt><dd>{item.status}</dd></div>
          </dl>
        </section>

        <section className="case-story">
          <div className="case-story__index">01 / O trabalho</div>
          <div className="case-story__title">
            <p>Não é só aparência.</p>
            <h2>Uma direção criada para resolver um problema real de percepção.</h2>
          </div>
          <div className="case-story__chapters">
            <article>
              <span>O desafio</span>
              <p>{item.challenge}</p>
            </article>
            <article>
              <span>A direção</span>
              <p>{item.direction}</p>
            </article>
            <article>
              <span>O que ganhou forma</span>
              <p>{item.result}</p>
            </article>
          </div>
        </section>

        <section className="case-work">
          <div className="case-work__heading">
            <span>02 / Portfólio do cliente</span>
            <h2>Do sistema<br />à aplicação<span>.</span></h2>
            <p>
              A direção aparece em escalas diferentes, mas preserva a mesma personalidade
              e a mesma intenção comercial.
            </p>
          </div>

          <div className={`case-gallery case-gallery--${item.gallery.length}`}>
            {item.gallery.map((image, index) => (
              <figure key={`${image.src}-${index}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  style={{ objectPosition: image.position ?? "center" }}
                />
                <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{image.label}</figcaption>
              </figure>
            ))}

            <aside className="case-gallery__statement">
              <span>Direção OLI</span>
              <strong>{item.headline}</strong>
              <p>{item.shortName} · {item.year}</p>
            </aside>
          </div>
        </section>

        <section className="case-system">
          <div className="case-system__header">
            <span>03 / Sistema</span>
            <h2>O que foi construído.</h2>
          </div>
          <div className="case-system__body">
            <div className="case-palette" aria-label="Cores do projeto">
              <i style={{ background: item.accent }} />
              <i style={{ background: item.accentSoft }} />
              <i style={{ background: item.ink }} />
            </div>
            <ul>
              {item.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
            </ul>
            <div className="case-system__services">
              {item.services.map((service) => <span key={service}>{service}</span>)}
            </div>
          </div>
        </section>

        <section className="case-next">
          <p>Próximo projeto</p>
          <Link href={`/cases/${next.slug}`}>
            <span>{next.client}</span>
            <ArrowUpRight aria-hidden="true" size={42} strokeWidth={1.25} />
          </Link>
          <small>{next.headline}</small>
        </section>

        <section className="case-contact">
          <p>Seu negócio já tem uma história.</p>
          <h2>Vamos dar a ela uma presença à altura?</h2>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            Conversar com a OLI <ArrowUpRight aria-hidden="true" size={19} />
          </a>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
