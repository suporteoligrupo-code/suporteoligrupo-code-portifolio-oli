import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  AtSign,
  Globe2,
  Heart,
} from "lucide-react";

const instagramUrl = "https://www.instagram.com/oli.marketing7/";

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

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-link">
      <span>{label}</span>
      <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
    </a>
  );
}

export default function Home() {
  return (
    <div className="site-page">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="OLI — início">
          <img src="/portfolio/oli-logo-oficial-claro.png" alt="OLI" width={6000} height={1842} />
        </a>

        <nav aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#servicos">Serviços</a>
          <a href="#processo">Processo</a>
        </nav>

        <a className="header-cta" href={instagramUrl} target="_blank" rel="noreferrer">
          Começar um projeto
          <ArrowUpRight aria-hidden="true" size={15} />
        </a>
      </header>

      <main>
        <section className="hero-shell" id="inicio">
          <div className="hero-stage">
            <div className="hero-media" aria-hidden="true">
              <figure className="hero-slide hero-kpop">
                <img src="/portfolio/gru-kpop-cartoes-mockup.webp" alt="" fetchPriority="high" />
              </figure>
              <figure className="hero-slide hero-studio">
                <img src="/portfolio/studio-e-cartao.webp" alt="" />
              </figure>
              <figure className="hero-slide hero-rico">
                <img src="/portfolio/rico-games-gta6-preview.jpg" alt="" />
              </figure>
            </div>

            <div className="hero-topline">
              <span>Estúdio criativo</span>
              <span>Brasil — Portugal</span>
            </div>

            <div className="hero-content">
              <p className="hero-kicker">Estratégia · identidade · digital</p>
              <h1>
                Marcas que não passam
                <span>despercebidas.</span>
              </h1>
              <p className="hero-lede">
                Transformamos bons negócios em presenças que inspiram confiança,
                despertam desejo e deixam mais fácil dizer “sim”.
              </p>
              <div className="hero-actions">
                <a className="button button-light" href="#projetos">
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
                <strong className="hero-project-name" aria-label="GRU KPOP Anime, Studio E e Rico Games">
                  <span>GRU KPOP Anime</span>
                  <span>Studio E</span>
                  <span>Rico Games</span>
                </strong>
              </div>
              <div className="hero-count"><b>03</b> projetos selecionados</div>
            </div>
          </div>

          <aside className="hero-proof" aria-label="Prova de experiência da OLI">
            <span>Projetos reais</span>
            <strong>Do conceito<br />à aplicação.</strong>
            <p>Identidade, conteúdo e site construídos sob a mesma direção.</p>
          </aside>
        </section>

        <section className="project-rail" aria-label="Projetos apresentados">
          <p>Direção OLI aplicada em</p>
          <div>
            <a href="#kpop">GRU KPOP <i>Anime</i></a>
            <a href="#studio-e">Studio <i>E</i></a>
            <a href="#rico-games">RICO <i>GAMES</i></a>
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

        <section className="projects section-shell" id="projetos">
          <header className="projects-heading reveal">
            <div className="section-index">02 / Projetos selecionados</div>
            <h2>Trabalho real.<br /><span>Prova visual.</span></h2>
            <p>
              Não mostramos peças soltas. Mostramos como uma direção forte ganha forma
              em diferentes negócios, materiais e telas.
            </p>
          </header>

          <article className="featured-project reveal" id="kpop">
            <a
              className="featured-visual"
              href="https://gru-kpop-anime.vercel.app/"
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir o site da GRU KPOP Anime"
            >
              <img
                src="/portfolio/gru-kpop-cartoes-mockup.webp"
                alt="Cartões de visita criados para a GRU KPOP Anime"
              />
              <div className="visual-topline">
                <span>Case 01</span>
                <span>Marca completa</span>
              </div>
              <div className="visual-action">
                Ver site publicado
                <ArrowUpRight aria-hidden="true" size={21} />
              </div>
            </a>

            <div className="featured-details">
              <span className="project-number">01</span>
              <div>
                <p className="project-category">Varejo · cultura · Guarulhos/SP</p>
                <h3>GRU KPOP<br />Anime</h3>
              </div>
              <div className="project-story">
                <strong>De uma loja querida a uma marca que ocupa espaço.</strong>
                <p>
                  Organizamos K-pop, anime, moda e colecionáveis em uma linguagem jovem,
                  comercial e reconhecível — do cartão ao site.
                </p>
                <div className="tag-list" aria-label="Entregas do projeto GRU KPOP Anime">
                  <span>Identidade</span><span>Conteúdo</span><span>Site</span>
                </div>
                <ExternalLink href="https://gru-kpop-anime.vercel.app/" label="Explorar o projeto" />
              </div>
            </div>

            <div className="kpop-gallery">
              <figure>
                <img
                  src="/portfolio/gru-sistema-visual.webp"
                  alt="Sistema visual desenvolvido para a GRU KPOP Anime"
                  loading="lazy"
                />
                <figcaption><span>02</span>Sistema visual</figcaption>
              </figure>
              <figure>
                <img
                  src="/portfolio/gru-kpop-feed-aprovado.jpg"
                  alt="Feed aprovado para a GRU KPOP Anime"
                  loading="lazy"
                />
                <figcaption><span>03</span>Conteúdo para Instagram</figcaption>
              </figure>
              <aside>
                <span>Uma marca inteira</span>
                <strong>O mesmo conceito precisa funcionar no físico e no digital.</strong>
                <p>É assim que repetição vira reconhecimento — e reconhecimento vira confiança.</p>
              </aside>
            </div>
          </article>

          <div className="selected-heading reveal">
            <h3>Mais projetos.<br />Novos contextos.</h3>
            <p>Uma identidade para cada negócio. O mesmo cuidado com percepção, clareza e acabamento.</p>
          </div>

          <div className="project-grid">
            <article className="project-card studio-card reveal" id="studio-e">
              <div className="project-card-head">
                <span>02 / Beleza & cuidado</span>
                <h3>Studio E</h3>
                <p>Sofisticação que começa antes do atendimento.</p>
              </div>
              <figure className="project-card-visual studio-visual">
                <img
                  src="/portfolio/studio-e-cartao.webp"
                  alt="Cartão premium desenvolvido para o Studio E"
                  loading="lazy"
                />
                <figcaption>Identidade aplicada · Material premium</figcaption>
              </figure>
              <div className="project-card-copy">
                <p>
                  O vinho marcante ganhou consistência no cartão e no site, transmitindo
                  valor antes mesmo do agendamento.
                </p>
                <div className="tag-list"><span>Identidade</span><span>Cartão</span><span>Site</span></div>
                <ExternalLink href="https://studio-e-two.vercel.app/" label="Ver site publicado" />
              </div>
            </article>

            <article className="project-card rico-card reveal" id="rico-games">
              <div className="project-card-head">
                <span>03 / Tecnologia & games</span>
                <h3>Rico Games</h3>
                <p>Gamer sem cair no gamer genérico.</p>
              </div>
              <figure className="project-card-visual rico-visual">
                <img
                  src="/portfolio/rico-games-hyperpop.jpg"
                  alt="Peça comercial criada para a Rico Games"
                  loading="lazy"
                />
                <figcaption>Direção criativa · Conteúdo comercial</figcaption>
              </figure>
              <div className="project-card-copy">
                <p>
                  Uma direção tecnológica, madura e organizada para transformar um nome
                  forte em presença comercial — sem depender do neon de sempre.
                </p>
                <div className="tag-list"><span>Direção</span><span>Sistema visual</span><span>Conteúdo</span></div>
                <span className="project-status">Projeto em desenvolvimento</span>
              </div>
            </article>
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
              src="https://images.unsplash.com/photo-1779191774094-2f2bbb701332?auto=format&fit=crop&w=1600&q=82"
              alt="Gatinho ruivo descansando sob uma luz suave"
              width={1600}
              height={1100}
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
              O seu negócio já tem valor.
              <span>Vamos fazer o mercado perceber?</span>
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

      <footer>
        <img src="/portfolio/oli-logo-oficial-escuro.png" alt="OLI" width={6000} height={1842} />
        <p>Estratégia · Conteúdo · Direção</p>
        <p>© 2026 OLI Marketing Digital</p>
      </footer>
    </div>
  );
}
