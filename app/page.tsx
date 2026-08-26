import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  AtSign,
  Globe2,
  Heart,
  Layers3,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";

const instagramUrl = "https://www.instagram.com/oli.marketing7/";

const services = [
  {
    number: "01",
    icon: Layers3,
    title: "Identidade visual",
    text: "Logo, paleta, tipografia e um sistema visual preparado para aparecer com consistência no digital e no impresso.",
  },
  {
    number: "02",
    icon: MonitorSmartphone,
    title: "Sites & landing pages",
    text: "Experiências responsivas com direção de arte, copy e caminhos claros para transformar atenção em contato.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Presença de marca",
    text: "Conteúdo, apresentações e materiais comerciais para a marca estrear com coerência em todos os pontos de contato.",
  },
];

const process = [
  ["01", "Diagnóstico", "Entendemos o negócio, o público e o que hoje impede a marca de transmitir seu verdadeiro valor."],
  ["02", "Direção", "Definimos posicionamento, linguagem e uma rota visual clara antes de produzir qualquer peça."],
  ["03", "Construção", "Identidade, conteúdo e site são desenvolvidos como partes do mesmo sistema."],
  ["04", "Entrega", "Refinamos os detalhes e organizamos tudo para a marca publicar, apresentar e vender."],
];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-link">
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.8} />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="OLI — início">
          <img src="/portfolio/oli-logo-oficial-escuro.png" alt="OLI" width={6000} height={1842} />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#servicos">Serviços</a>
          <a href="#processo">Processo</a>
        </nav>
        <a className="header-cta" href={instagramUrl} target="_blank" rel="noreferrer">
          Falar com a OLI
          <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-brand" aria-hidden="true">
          <img src="/portfolio/oli-logo-oficial-escuro.png" alt="" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Estúdio de marketing digital · Brasil — Portugal</p>
          <h1>
            Marcas que parecem prontas para o <em>próximo nível.</em>
          </h1>
          <p className="hero-lede">
            A OLI conecta identidade visual, conteúdo e sites para transformar negócios
            bem-feitos em marcas que inspiram confiança antes do primeiro contato.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">
              Ver projetos reais
              <ArrowDown aria-hidden="true" size={18} />
            </a>
            <a className="button button-ghost" href={instagramUrl} target="_blank" rel="noreferrer">
              Quero uma marca nesse nível
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </div>
        </div>
        <aside className="hero-side" aria-label="Áreas conectadas pela OLI">
          <p>Uma direção, três pontos de contato</p>
          <div className="hero-equation">
            <strong>Marca</strong><span>+</span><strong>Conteúdo</strong><span>+</span><strong>Digital</strong>
          </div>
          <small>O cliente percebe uma empresa inteira — não entregas soltas.</small>
        </aside>
        <a className="scroll-cue" href="#projetos" aria-label="Ir para os projetos">
          <span>Projetos</span>
          <ArrowDown aria-hidden="true" size={17} />
        </a>
      </section>

      <div className="specialties" aria-label="Especialidades da OLI">
        <span>Identidade visual</span>
        <span>Sites que posicionam</span>
        <span>Direção criativa</span>
        <span>Presença de marca</span>
      </div>

      <section className="work section-shell" id="projetos">
        <div className="work-heading reveal">
          <div className="section-index">01 / Projetos selecionados</div>
          <div>
            <p className="eyebrow dark">Trabalho antes da promessa</p>
            <h2>Antes de escolher uma agência, veja o que ela sabe construir.</h2>
          </div>
          <p>
            Três negócios reais, três necessidades diferentes e uma mesma exigência:
            transformar valor em uma presença que o cliente entende e deseja.
          </p>
        </div>

        <nav className="case-jump reveal" aria-label="Ir para um projeto">
          <a href="#kpop">
            <span>01</span>
            <strong>GRU KPOP Anime</strong>
            <small>Marca completa</small>
          </a>
          <a href="#studio-e">
            <span>02</span>
            <strong>Studio E</strong>
            <small>Premium físico + digital</small>
          </a>
          <a href="#rico-games">
            <span>03</span>
            <strong>Rico Games</strong>
            <small>Direção + conteúdo</small>
          </a>
        </nav>

        <article className="featured-case reveal" id="kpop">
          <div className="case-topline">
            <span>Case 01</span>
            <span>Varejo & cultura</span>
            <span>Guarulhos — SP</span>
          </div>

          <figure className="case-cover kpop-cover">
            <img
              src="/portfolio/gru-kpop-cartoes-mockup.webp"
              alt="Cartões de visita criados para a GRU KPOP Anime"
            />
            <figcaption>Identidade aplicada · Cartão de visita</figcaption>
          </figure>

          <div className="case-statement">
            <div>
              <span className="case-label">Projeto em destaque</span>
              <h3>GRU KPOP<br />Anime</h3>
            </div>
            <div className="case-pitch">
              <p className="case-tagline">De uma loja querida a uma marca que ocupa espaço.</p>
              <p>
                A energia já existia. A OLI transformou K-pop, anime, moda e colecionáveis
                em uma linguagem única, comercial e reconhecível do balcão à tela.
              </p>
              <ExternalLink href="https://gru-kpop-anime.vercel.app/">Ver site publicado</ExternalLink>
            </div>
          </div>

          <div className="case-ledger" aria-label="Resumo do projeto GRU KPOP Anime">
            <div><span>Desafio</span><p>Organizar diferentes universos sem apagar a personalidade da loja.</p></div>
            <div><span>Direção</span><p>Uma linguagem jovem, modular e pronta para vender.</p></div>
            <div><span>Entregas</span><p>Identidade aplicada, cartão, conteúdo e landing page.</p></div>
            <div className="ledger-result"><span>Efeito percebido</span><p>Uma marca coerente no físico e no digital.</p></div>
          </div>

          <div className="kpop-mosaic">
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
              <p className="eyebrow">Uma marca inteira</p>
              <strong>O mesmo conceito precisa funcionar em um cartão, em um post e em uma tela.</strong>
              <p>É assim que repetição vira reconhecimento — e reconhecimento vira confiança.</p>
              <a href={instagramUrl} target="_blank" rel="noreferrer">
                Quero construir essa presença
                <ArrowRight aria-hidden="true" size={18} />
              </a>
            </aside>
          </div>
        </article>

        <div className="more-work-heading reveal">
          <span>Outros projetos selecionados</span>
          <p>Identidades diferentes. O mesmo cuidado em transformar estratégia em percepção.</p>
        </div>

        <div className="project-duo">
          <article className="project-card studio-card reveal" id="studio-e">
            <header>
              <div className="project-number">02</div>
              <p>Identidade · Material gráfico · Site</p>
              <h3>Studio E</h3>
              <p className="project-card-tagline">Sofisticação que começa antes do atendimento.</p>
            </header>

            <figure className="project-card-media studio-media">
              <img
                src="/portfolio/studio-e-cartao.webp"
                alt="Cartão premium desenvolvido para o Studio E"
                loading="lazy"
              />
              <figcaption>Cartão vertical · Acabamento premium</figcaption>
            </figure>

            <div className="site-window compact-window">
              <div className="site-window-bar"><i /><i /><i /><span>studio-e-two.vercel.app</span></div>
              <iframe src="https://studio-e-two.vercel.app/" title="Prévia do site do Studio E" loading="lazy" tabIndex={-1} />
            </div>

            <div className="project-card-copy">
              <p>
                O vinho marcante foi transformado em uma experiência consistente no cartão
                e no site — transmitindo valor antes mesmo do agendamento.
              </p>
              <div className="deliverable-tags" aria-label="Entregas do projeto Studio E">
                <span>Identidade</span><span>Cartão</span><span>Site</span>
              </div>
              <ExternalLink href="https://studio-e-two.vercel.app/">Explorar o site</ExternalLink>
            </div>
          </article>

          <article className="project-card rico-card reveal" id="rico-games">
            <header>
              <div className="project-number">03</div>
              <p>Direção criativa · Identidade · Conteúdo</p>
              <h3>Rico Games</h3>
              <p className="project-card-tagline">Gamer sem cair no gamer genérico.</p>
            </header>

            <figure className="rico-logo-panel">
              <img src="/portfolio/rico-games-logo-oficial.png" alt="Logo oficial da Rico Games" loading="lazy" />
              <figcaption>Marca preservada · Sistema visual elevado</figcaption>
            </figure>

            <div className="rico-media-grid">
              <figure>
                <img src="/portfolio/rico-games-hyperpop.jpg" alt="Peça comercial criada para a Rico Games" loading="lazy" />
                <figcaption>Produto</figcaption>
              </figure>
              <figure>
                <img src="/portfolio/rico-games-gta6-preview.jpg" alt="Carrossel editorial criado para a Rico Games" loading="lazy" />
                <figcaption>Conteúdo editorial</figcaption>
              </figure>
            </div>

            <div className="project-card-copy">
              <p>
                Uma direção mais tecnológica, madura e organizada para transformar o nome
                forte da Rico em presença comercial — sem depender do neon de sempre.
              </p>
              <div className="deliverable-tags" aria-label="Entregas do projeto Rico Games">
                <span>Direção</span><span>Identidade aplicada</span><span>Conteúdo</span>
              </div>
              <span className="project-status">Projeto em desenvolvimento</span>
            </div>
          </article>
        </div>

        <aside className="portfolio-cta reveal">
          <p className="eyebrow">O próximo case pode ser o seu</p>
          <h3>Se o seu trabalho já entrega valor, sua marca precisa deixar isso óbvio.</h3>
          <p>
            Conte para a OLI onde o seu negócio está hoje. Nós transformamos esse momento
            em uma direção visual, comercial e digital coerente.
          </p>
          <a className="button button-light" href={instagramUrl} target="_blank" rel="noreferrer">
            Conversar sobre meu projeto
            <ArrowUpRight aria-hidden="true" size={19} />
          </a>
        </aside>
      </section>

      <section className="services section-shell" id="servicos">
        <div className="section-heading reveal">
          <div className="section-index">02 / Como podemos ajudar</div>
          <div>
            <p className="eyebrow dark">Serviços conectados</p>
            <h2>Uma marca inteira, não peças soltas.</h2>
          </div>
          <p className="section-intro">
            Você pode começar por uma necessidade específica ou construir a presença completa.
            Em qualquer cenário, cada entrega já nasce pensando no próximo passo.
          </p>
        </div>
        <div className="services-grid reveal">
          {services.map(({ number, icon: Icon, title, text }) => (
            <article key={number}>
              <div className="service-top">
                <span>{number}</span>
                <Icon aria-hidden="true" size={23} strokeWidth={1.5} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process section-shell" id="processo">
        <div className="process-title reveal">
          <div className="section-index">03 / Processo</div>
          <p className="eyebrow">Sem fórmula pronta</p>
          <h2>Clareza antes da estética.</h2>
          <p>Um processo próximo, visual e organizado para que cada decisão faça sentido.</p>
        </div>
        <div className="process-list reveal">
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
        <div className="impact-photo">
          <img
            src="https://images.unsplash.com/photo-1779191774094-2f2bbb701332?auto=format&fit=crop&w=1600&q=82"
            alt="Gatinho ruivo descansando sob uma luz suave"
            width={1600}
            height={1100}
            loading="lazy"
          />
          <a href="https://unsplash.com/photos/a-ginger-cat-relaxing-in-warm-sunlight-kTJHYEeoi9s" target="_blank" rel="noreferrer">
            Foto: Dima Zimakov · Unsplash
          </a>
        </div>
        <div className="impact-copy">
          <div className="impact-label">
            <Heart aria-hidden="true" size={20} strokeWidth={1.6} />
            <span>Compromisso OLI</span>
          </div>
          <strong className="impact-percentage">10%</strong>
          <h2>da renda bruta da OLI é destinada à proteção animal.</h2>
          <p>
            Ao escolher a OLI, sua empresa investe na própria evolução e também ajuda
            iniciativas que cuidam, acolhem e protegem animais.
          </p>
        </div>
      </section>

      <section className="final-cta" id="contato">
        <img className="cta-mark" src="/portfolio/oli-logo-oficial-claro.png" alt="" aria-hidden="true" />
        <p className="eyebrow">Vamos transformar percepção em valor?</p>
        <h2>Seu negócio já existe.<br /><em>Agora ele precisa ser percebido.</em></h2>
        <a className="button button-light" href={instagramUrl} target="_blank" rel="noreferrer">
          Conversar sobre meu projeto
          <ArrowUpRight aria-hidden="true" size={19} />
        </a>
        <div className="cta-meta">
          <span><AtSign aria-hidden="true" size={17} /> oli.marketing7</span>
          <span><Globe2 aria-hidden="true" size={17} /> Brasil — Portugal</span>
        </div>
      </section>

      <footer>
        <img src="/portfolio/oli-logo-oficial-escuro.png" alt="OLI" width={6000} height={1842} />
        <p>Estratégia · Conteúdo · Direção</p>
        <p>© 2026 OLI Marketing Digital</p>
      </footer>
    </main>
  );
}
