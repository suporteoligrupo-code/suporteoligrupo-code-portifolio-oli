import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  AtSign,
  Globe2,
  Heart,
} from "lucide-react";
import CaseCard from "../components/case-card";
import SiteFooter from "../components/site-footer";
import SiteHeader, { instagramUrl } from "../components/site-header";
import { cases } from "./data/cases";

const services = [
  {
    number: "01",
    title: "Identidade visual",
    text: "Estratégia, logo e um sistema visual que faz a empresa parecer tão profissional quanto o trabalho que entrega.",
    tags: ["Posicionamento", "Logo", "Sistema de marca"],
  },
  {
    number: "02",
    title: "Sites & landing pages",
    text: "Direção de arte, mensagem e experiência reunidas em páginas feitas para segurar atenção e gerar contato.",
    tags: ["UX/UI", "Copy", "Desenvolvimento"],
  },
  {
    number: "03",
    title: "Presença de marca",
    text: "Conteúdo e materiais comerciais que mantêm a mesma percepção de valor em cada ponto de contato.",
    tags: ["Social", "Campanhas", "Materiais"],
  },
];

const process = [
  ["01", "Diagnóstico", "Entendemos o negócio, o público e o que a marca precisa fazer o cliente perceber."],
  ["02", "Direção", "Definimos uma rota estratégica, verbal e visual antes de desenhar qualquer peça."],
  ["03", "Criação", "Construímos identidade, conteúdo e experiência digital como partes do mesmo sistema."],
  ["04", "Entrega", "Refinamos e organizamos tudo para a marca publicar, apresentar e vender com segurança."],
];

const clientMarks = [
  { slug: "gru-kpop-anime", name: "GRU KPOP Anime", src: "/brandmarks/gru-kpop-light.png" },
  { slug: "studio-e", name: "Studio E", src: "/brandmarks/studio-e-light.png" },
  { slug: "rico-games", name: "Rico Games", src: "/brandmarks/rico-games-light.png" },
  { slug: "josucas-eletronicos", name: "Josucas Eletrônicos", src: "/brandmarks/josucas-light.png" },
  { slug: "manifesto-bar", name: "Manifesto Bar", src: "/brandmarks/manifesto-light.png" },
  { slug: "metro-case", name: "Metro Case", src: "/brandmarks/metro-case-light.png" },
];

export default function Home() {
  return (
    <div className="site-page">
      <SiteHeader />

      <main>
        <section className="hero-shell" id="inicio">
          <div className="hero-stage">
            <div className="hero-media" aria-hidden="true">
              <figure className="hero-slide hero-oli">
                <img src="/portfolio/oli-hero-brand-v1.webp" alt="" fetchPriority="high" />
              </figure>
              <figure className="hero-slide hero-studio">
                <img src="/portfolio/studio-e-cartao.webp" alt="" />
              </figure>
              <figure className="hero-slide hero-rico">
                <img src="/cases/manifesto/palco.webp" alt="" />
              </figure>
            </div>

            <div className="hero-topline">
              <span>Estúdio criativo</span>
              <span>Brasil — Portugal</span>
            </div>

            <div className="hero-content">
              <p className="hero-kicker">Estratégia · identidade · digital</p>
              <h1>
                Marcas que não passam <span>despercebidas.</span>
              </h1>
              <p className="hero-lede">
                Transformamos bons negócios em presenças que inspiram confiança,
                despertam desejo e deixam mais fácil dizer “sim”.
              </p>
              <div className="hero-actions">
                <a className="button button-light" href="#cases">
                  Explorar projetos
                  <ArrowDownRight aria-hidden="true" size={18} />
                </a>
                <a className="button button-outline" href={instagramUrl} target="_blank" rel="noreferrer">
                  Quero elevar minha marca
                  <ArrowUpRight aria-hidden="true" size={18} />
                </a>
              </div>
            </div>

            <div className="hero-footer">
              <div>
                <span className="hero-footer-label">Em cena</span>
                <strong className="hero-project-name" aria-label="Identidade OLI, Studio E e Manifesto Bar">
                  <span>Identidade OLI</span>
                  <span>Studio E</span>
                  <span>Manifesto Bar</span>
                </strong>
              </div>
              <div className="hero-count"><b>{String(cases.length).padStart(2, "0")}</b> projetos para explorar</div>
            </div>
          </div>

          <aside className="hero-proof" aria-label="Prova de experiência da OLI">
            <span>Projetos reais</span>
            <strong>Do conceito<br />à aplicação.</strong>
            <p>Clique em uma empresa e veja estratégia, direção e entregas reunidas.</p>
          </aside>
        </section>

        <section className="project-rail" aria-label="Logomarcas dos clientes apresentados">
          <p>Projetos OLI</p>
          <div>
            {clientMarks.map((item) => (
              <a key={item.slug} href={`/cases/${item.slug}`} aria-label={`Abrir o projeto ${item.name}`}>
                <img src={item.src} alt={`Logomarca ${item.name}`} loading="lazy" />
              </a>
            ))}
          </div>
        </section>

        <section className="positioning section-shell">
          <div className="section-index">01 / Por que a OLI</div>
          <div className="positioning-copy">
            <p className="eyebrow">Percepção também vende</p>
            <h2>
              Seu trabalho pode ser excelente. Se a marca não mostra isso,
              <span> o cliente não adivinha.</span>
            </h2>
          </div>
          <div className="positioning-note">
            <p>
              A OLI reúne estratégia, direção visual e experiência digital para tornar
              o valor do seu negócio evidente antes da primeira conversa.
            </p>
            <a href="#servicos">
              Como fazemos isso
              <ArrowDownRight aria-hidden="true" size={18} />
            </a>
          </div>
        </section>

        <section className="cases-section" id="cases">
          <header className="cases-heading section-shell reveal">
            <div className="section-index">02 / Portfólio por empresa</div>
            <div>
              <p className="eyebrow">Clique. Entre. Explore.</p>
              <h2>Projetos<span>.</span></h2>
            </div>
            <p>
              Cada negócio abre uma história completa: contexto, direção, entregas e o
              trabalho ganhando forma em marca, conteúdo ou experiência digital.
            </p>
          </header>

          <div className="case-grid section-shell">
            {cases.map((item) => <CaseCard item={item} key={item.slug} />)}
          </div>

          <div className="cases-proof section-shell reveal">
            <span>Sem números inventados.</span>
            <p>
              Autoridade vem de mostrar o raciocínio e o acabamento do trabalho real —
              não de preencher a página com promessa vazia.
            </p>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div>
            <span>marca</span><i>✦</i><span>conteúdo</span><i>✦</i><span>digital</span><i>✦</i><span>presença</span><i>✦</i>
            <span>marca</span><i>✦</i><span>conteúdo</span><i>✦</i><span>digital</span><i>✦</i><span>presença</span><i>✦</i>
          </div>
        </div>

        <section className="capabilities section-shell" id="servicos">
          <div className="capabilities-intro reveal">
            <div className="section-index">03 / O que construímos</div>
            <p className="eyebrow">Serviços conectados</p>
            <h2>Uma marca inteira.<br /><span>Não peças soltas.</span></h2>
            <p>
              Você pode começar por uma necessidade específica. A direção, porém, já nasce
              preparada para sustentar os próximos passos.
            </p>
            <a className="button button-orange" href={instagramUrl} target="_blank" rel="noreferrer">
              Falar sobre meu momento
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </div>

          <div className="service-list reveal">
            {services.map((service) => (
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
            <div className="section-index">04 / Processo</div>
            <h2>Clareza antes da estética.</h2>
            <p>Sem fórmula pronta e sem decisões soltas. Cada etapa prepara a próxima.</p>
          </header>
          <div className="method-grid reveal">
            {process.map(([number, title, text]) => (
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
              <span>Compromisso OLI</span>
            </div>
            <strong>10%</strong>
            <h2>da renda bruta é destinada à proteção animal.</h2>
            <p>
              Sua empresa evolui e, junto com ela, iniciativas que acolhem, cuidam e
              protegem animais também recebem apoio.
            </p>
          </div>
          <figure className="impact-photo">
            <img
              src="/impact/gatinho-ruivo.jpg"
              alt="Gatinho ruivo em uma fotografia clara e natural"
              width={700}
              height={936}
              loading="lazy"
            />
            <figcaption>Uma marca que também cuida.</figcaption>
          </figure>
        </section>

        <section className="contact-shell" id="contato">
          <div className="contact-stage">
            <img className="contact-mark" src="/portfolio/oli-logo-oficial-escuro.png" alt="" aria-hidden="true" />
            <p className="eyebrow">Seu próximo movimento começa aqui</p>
            <h2>
              O seu negócio já tem valor. <span>Vamos fazer o mercado perceber?</span>
            </h2>
            <a className="button button-light contact-button" href={instagramUrl} target="_blank" rel="noreferrer">
              Quero uma marca nesse nível
              <ArrowUpRight aria-hidden="true" size={19} />
            </a>
            <div className="contact-meta">
              <span><AtSign aria-hidden="true" size={16} /> oli.marketing7</span>
              <span><Globe2 aria-hidden="true" size={16} /> Brasil — Portugal</span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
