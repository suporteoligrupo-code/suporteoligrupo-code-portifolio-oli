import type { CaseImage, OliCase } from "./cases";

export type Language = "pt" | "en" | "ru";

export const languageOptions: Array<{
  code: Language;
  flagSrc: string;
  label: string;
  htmlLang: string;
}> = [
  { code: "pt", flagSrc: "/flags/br.svg", label: "Português", htmlLang: "pt-BR" },
  { code: "en", flagSrc: "/flags/gb.svg", label: "English", htmlLang: "en" },
  { code: "ru", flagSrc: "/flags/ru.svg", label: "Русский", htmlLang: "ru" },
];

type ServiceCopy = {
  number: string;
  title: string;
  text: string;
  tags: string[];
};

type ProcessCopy = [string, string, string];

type SiteCopy = {
  header: {
    homeLabel: string;
    navLabel: string;
    projects: string;
    services: string;
    process: string;
    startProject: string;
    chooseLanguage: string;
  };
  footer: string;
  home: {
    pageTitle: string;
    studio: string;
    regions: string;
    kicker: string;
    heroTitle: string;
    heroAccent: string;
    lede: string;
    explore: string;
    elevate: string;
    onStage: string;
    identityOli: string;
    projectsToExplore: string;
    proofLabel: string;
    proofTitle: string;
    proofText: string;
    proofAria: string;
    clientMarksAria: string;
    projectsOli: string;
    openProject: string;
    brandmark: string;
    whyIndex: string;
    perceptionEyebrow: string;
    perceptionTitle: string;
    perceptionAccent: string;
    perceptionText: string;
    perceptionLink: string;
    portfolioIndex: string;
    portfolioEyebrow: string;
    projectsTitle: string;
    portfolioText: string;
    proofNumbers: string;
    proofNumbersText: string;
    marquee: string[];
    servicesIndex: string;
    servicesEyebrow: string;
    servicesTitle: string;
    servicesAccent: string;
    servicesText: string;
    servicesCta: string;
    services: ServiceCopy[];
    processIndex: string;
    processTitle: string;
    processText: string;
    process: ProcessCopy[];
    impactLabel: string;
    impactTitle: string;
    impactText: string;
    catAlt: string;
    catCaption: string;
    contactEyebrow: string;
    contactTitle: string;
    contactAccent: string;
    contactCta: string;
  };
  index: {
    pageTitle: string;
    eyebrowBefore: string;
    eyebrowAfter: string;
    title: string;
    text: string;
  };
  card: {
    openProject: string;
    viewProject: string;
  };
  project: {
    titleSuffix: string;
    allProjects: string;
    projectLabel: string;
    viewPublished: string;
    wantSimilar: string;
    client: string;
    sector: string;
    scope: string;
    status: string;
    workIndex: string;
    appearanceEyebrow: string;
    appearanceTitle: string;
    challenge: string;
    direction: string;
    outcome: string;
    portfolioIndex: string;
    portfolioTitle: string;
    portfolioText: string;
    oliDirection: string;
    systemIndex: string;
    systemTitle: string;
    projectColors: string;
    nextProject: string;
    contactEyebrow: string;
    contactTitle: string;
    contactCta: string;
  };
};

export const siteCopy: Record<Language, SiteCopy> = {
  pt: {
    header: {
      homeLabel: "OLI — início",
      navLabel: "Navegação principal",
      projects: "Projetos.",
      services: "Serviços",
      process: "Processo",
      startProject: "Começar um projeto",
      chooseLanguage: "Selecionar idioma",
    },
    footer: "Estratégia · Conteúdo · Direção",
    home: {
      pageTitle: "OLI — Portfólio de marcas e experiências digitais",
      studio: "Estúdio criativo",
      regions: "Brasil — Portugal",
      kicker: "Portfólio criativo · estratégia · digital",
      heroTitle: "Ideias que viram",
      heroAccent: "presença.",
      lede: "Conectamos estratégia, criatividade e execução para transformar negócios em marcas, campanhas e experiências digitais com direção clara.",
      explore: "Explorar projetos",
      elevate: "Quero elevar minha marca",
      onStage: "Em cena",
      identityOli: "Identidade OLI",
      projectsToExplore: "projetos para explorar",
      proofLabel: "Projetos reais",
      proofTitle: "Do conceito à aplicação.",
      proofText: "Clique em uma empresa e veja estratégia, direção e entregas reunidas.",
      proofAria: "Prova de experiência da OLI",
      clientMarksAria: "Logomarcas dos clientes apresentados",
      projectsOli: "Projetos OLI",
      openProject: "Abrir o projeto",
      brandmark: "Logomarca",
      whyIndex: "01 / Por que a OLI",
      perceptionEyebrow: "Percepção também vende",
      perceptionTitle: "Seu trabalho pode ser excelente. Se a marca não mostra isso,",
      perceptionAccent: "o cliente não adivinha.",
      perceptionText: "A OLI reúne estratégia, direção visual e experiência digital para tornar o valor do seu negócio evidente antes da primeira conversa.",
      perceptionLink: "Como fazemos isso",
      portfolioIndex: "02 / Arquivo de projetos",
      portfolioEyebrow: "Clique. Entre. Explore.",
      projectsTitle: "Projetos",
      portfolioText: "Cada card abre um universo próprio: cliente, contexto, desafio, direção e o trabalho ganhando forma em marca, conteúdo ou experiência digital.",
      proofNumbers: "Sem números inventados.",
      proofNumbersText: "Autoridade vem de mostrar o raciocínio e o acabamento do trabalho real — não de preencher a página com promessa vazia.",
      marquee: ["marca", "conteúdo", "digital", "presença"],
      servicesIndex: "03 / O que construímos",
      servicesEyebrow: "Serviços conectados",
      servicesTitle: "Uma marca inteira.",
      servicesAccent: "Não peças soltas.",
      servicesText: "Você pode começar por uma necessidade específica. A direção, porém, já nasce preparada para sustentar os próximos passos.",
      servicesCta: "Falar sobre meu momento",
      services: [
        { number: "01", title: "Identidade visual", text: "Estratégia, logo e um sistema visual que faz a empresa parecer tão profissional quanto o trabalho que entrega.", tags: ["Posicionamento", "Logo", "Sistema de marca"] },
        { number: "02", title: "Sites & landing pages", text: "Direção de arte, mensagem e experiência reunidas em páginas feitas para segurar atenção e gerar contato.", tags: ["UX/UI", "Copy", "Desenvolvimento"] },
        { number: "03", title: "Presença de marca", text: "Conteúdo e materiais comerciais que mantêm a mesma percepção de valor em cada ponto de contato.", tags: ["Social", "Campanhas", "Materiais"] },
      ],
      processIndex: "04 / Processo",
      processTitle: "Clareza antes da estética.",
      processText: "Sem fórmula pronta e sem decisões soltas. Cada etapa prepara a próxima.",
      process: [
        ["01", "Diagnóstico", "Entendemos o negócio, o público e o que a marca precisa fazer o cliente perceber."],
        ["02", "Direção", "Definimos uma rota estratégica, verbal e visual antes de desenhar qualquer peça."],
        ["03", "Criação", "Construímos identidade, conteúdo e experiência digital como partes do mesmo sistema."],
        ["04", "Entrega", "Refinamos e organizamos tudo para a marca publicar, apresentar e vender com segurança."],
      ],
      impactLabel: "Compromisso OLI",
      impactTitle: "da renda bruta é destinada à proteção animal.",
      impactText: "Sua empresa evolui e, junto com ela, iniciativas que acolhem, cuidam e protegem animais também recebem apoio.",
      catAlt: "Gatinho ruivo em uma fotografia clara e natural",
      catCaption: "Uma marca que também cuida.",
      contactEyebrow: "Seu próximo movimento começa aqui",
      contactTitle: "O seu negócio já tem valor.",
      contactAccent: "Vamos fazer o mercado perceber?",
      contactCta: "Quero uma marca nesse nível",
    },
    index: {
      pageTitle: "Projetos — OLI Marketing Digital",
      eyebrowBefore: "Portfólio por empresa ·",
      eyebrowAfter: "projetos",
      title: "Projetos",
      text: "Entre em cada empresa para conhecer o contexto, a direção e o conjunto de entregas — não apenas uma imagem bonita fora de contexto.",
    },
    card: { openProject: "Abrir o projeto", viewProject: "Ver projeto" },
    project: {
      titleSuffix: "Projeto OLI",
      allProjects: "Todos os projetos",
      projectLabel: "Projeto",
      viewPublished: "Ver projeto publicado",
      wantSimilar: "Quero um projeto assim",
      client: "Cliente",
      sector: "Setor",
      scope: "Escopo",
      status: "Status",
      workIndex: "01 / O trabalho",
      appearanceEyebrow: "Não é só aparência.",
      appearanceTitle: "Uma direção criada para resolver um problema real de percepção.",
      challenge: "O desafio",
      direction: "A direção",
      outcome: "O que ganhou forma",
      portfolioIndex: "02 / Portfólio do cliente",
      portfolioTitle: "Do sistema à aplicação",
      portfolioText: "A direção aparece em escalas diferentes, mas preserva a mesma personalidade e a mesma intenção comercial.",
      oliDirection: "Direção OLI",
      systemIndex: "03 / Sistema",
      systemTitle: "O que foi construído.",
      projectColors: "Cores do projeto",
      nextProject: "Próximo projeto",
      contactEyebrow: "Seu negócio já tem uma história.",
      contactTitle: "Vamos dar a ela uma presença à altura?",
      contactCta: "Conversar com a OLI",
    },
  },
  en: {
    header: {
      homeLabel: "OLI — home",
      navLabel: "Main navigation",
      projects: "Projects.",
      services: "Services",
      process: "Process",
      startProject: "Start a project",
      chooseLanguage: "Select language",
    },
    footer: "Strategy · Content · Direction",
    home: {
      pageTitle: "OLI — Brand and digital experience portfolio",
      studio: "Creative studio",
      regions: "Brazil — Portugal",
      kicker: "Creative portfolio · strategy · digital",
      heroTitle: "Ideas turned into",
      heroAccent: "presence.",
      lede: "We connect strategy, creativity and execution to turn businesses into brands, campaigns and digital experiences with a clear direction.",
      explore: "Explore projects",
      elevate: "I want to elevate my brand",
      onStage: "Now showing",
      identityOli: "OLI Identity",
      projectsToExplore: "projects to explore",
      proofLabel: "Real projects",
      proofTitle: "From concept to application.",
      proofText: "Choose a company to see its strategy, creative direction and deliverables together.",
      proofAria: "Proof of OLI's experience",
      clientMarksAria: "Logos of featured clients",
      projectsOli: "OLI Projects",
      openProject: "Open project",
      brandmark: "Logo",
      whyIndex: "01 / Why OLI",
      perceptionEyebrow: "Perception sells too",
      perceptionTitle: "Your work can be excellent. If your brand does not show it,",
      perceptionAccent: "the client will never know.",
      perceptionText: "OLI brings strategy, visual direction and digital experience together so the value of your business is clear before the first conversation.",
      perceptionLink: "How we do it",
      portfolioIndex: "02 / Project archive",
      portfolioEyebrow: "Click. Enter. Explore.",
      projectsTitle: "Projects",
      portfolioText: "Each card opens its own universe: client, context, challenge, direction and the work taking shape as a brand, content or digital experience.",
      proofNumbers: "No invented numbers.",
      proofNumbersText: "Authority comes from showing the thinking and finish behind real work — not from filling a page with empty promises.",
      marquee: ["brand", "content", "digital", "presence"],
      servicesIndex: "03 / What we build",
      servicesEyebrow: "Connected services",
      servicesTitle: "One complete brand.",
      servicesAccent: "Not disconnected pieces.",
      servicesText: "You can start with one specific need. The direction, however, is already designed to support every next step.",
      servicesCta: "Talk about my next step",
      services: [
        { number: "01", title: "Visual identity", text: "Strategy, logo and a visual system that makes the company look as professional as the work it delivers.", tags: ["Positioning", "Logo", "Brand system"] },
        { number: "02", title: "Websites & landing pages", text: "Art direction, message and experience combined in pages designed to hold attention and generate contact.", tags: ["UX/UI", "Copy", "Development"] },
        { number: "03", title: "Brand presence", text: "Content and sales materials that preserve the same perception of value at every touchpoint.", tags: ["Social", "Campaigns", "Materials"] },
      ],
      processIndex: "04 / Process",
      processTitle: "Clarity before aesthetics.",
      processText: "No ready-made formulas and no isolated decisions. Every stage prepares the next.",
      process: [
        ["01", "Diagnosis", "We understand the business, the audience and what the brand needs its clients to perceive."],
        ["02", "Direction", "We define a strategic, verbal and visual path before designing any asset."],
        ["03", "Creation", "We build identity, content and digital experience as parts of one system."],
        ["04", "Delivery", "We refine and organize everything so the brand can publish, present and sell with confidence."],
      ],
      impactLabel: "OLI commitment",
      impactTitle: "of gross revenue is donated to animal protection.",
      impactText: "As your business grows, initiatives that shelter, care for and protect animals receive support too.",
      catAlt: "Ginger cat in a bright, natural photograph",
      catCaption: "A brand that cares too.",
      contactEyebrow: "Your next move starts here",
      contactTitle: "Your business already has value.",
      contactAccent: "Shall we make the market see it?",
      contactCta: "I want a brand at this level",
    },
    index: {
      pageTitle: "Projects — OLI Marketing Digital",
      eyebrowBefore: "Portfolio by company ·",
      eyebrowAfter: "projects",
      title: "Projects",
      text: "Step inside each company to discover its context, direction and complete set of deliverables — not just a beautiful image without context.",
    },
    card: { openProject: "Open project", viewProject: "View project" },
    project: {
      titleSuffix: "OLI Project",
      allProjects: "All projects",
      projectLabel: "Project",
      viewPublished: "View live project",
      wantSimilar: "I want a project like this",
      client: "Client",
      sector: "Industry",
      scope: "Scope",
      status: "Status",
      workIndex: "01 / The work",
      appearanceEyebrow: "More than appearance.",
      appearanceTitle: "A direction designed to solve a real perception challenge.",
      challenge: "The challenge",
      direction: "The direction",
      outcome: "What took shape",
      portfolioIndex: "02 / Client portfolio",
      portfolioTitle: "From system to application",
      portfolioText: "The direction appears at different scales while preserving the same personality and commercial intent.",
      oliDirection: "OLI Direction",
      systemIndex: "03 / System",
      systemTitle: "What we built.",
      projectColors: "Project colors",
      nextProject: "Next project",
      contactEyebrow: "Your business already has a story.",
      contactTitle: "Shall we give it a presence that matches?",
      contactCta: "Talk to OLI",
    },
  },
  ru: {
    header: {
      homeLabel: "OLI — главная",
      navLabel: "Основная навигация",
      projects: "Проекты.",
      services: "Услуги",
      process: "Процесс",
      startProject: "Начать проект",
      chooseLanguage: "Выбрать язык",
    },
    footer: "Стратегия · Контент · Направление",
    home: {
      pageTitle: "OLI — Портфолио брендов и digital-опыта",
      studio: "Креативная студия",
      regions: "Бразилия — Португалия",
      kicker: "Креативное портфолио · стратегия · digital",
      heroTitle: "Идеи обретают",
      heroAccent: "присутствие.",
      lede: "Мы соединяем стратегию, креатив и реализацию, превращая бизнес в бренды, кампании и digital-опыт с ясным направлением.",
      explore: "Смотреть проекты",
      elevate: "Хочу усилить свой бренд",
      onStage: "В центре внимания",
      identityOli: "Айдентика OLI",
      projectsToExplore: "проектов для просмотра",
      proofLabel: "Реальные проекты",
      proofTitle: "От концепции к реализации.",
      proofText: "Выберите компанию, чтобы увидеть стратегию, креативное направление и результаты работы.",
      proofAria: "Опыт OLI в реальных проектах",
      clientMarksAria: "Логотипы представленных клиентов",
      projectsOli: "Проекты OLI",
      openProject: "Открыть проект",
      brandmark: "Логотип",
      whyIndex: "01 / Почему OLI",
      perceptionEyebrow: "Восприятие тоже продаёт",
      perceptionTitle: "Ваша работа может быть превосходной. Но если бренд этого не показывает,",
      perceptionAccent: "клиент не догадается.",
      perceptionText: "OLI объединяет стратегию, визуальное направление и цифровой опыт, чтобы ценность вашего бизнеса была очевидна ещё до первого разговора.",
      perceptionLink: "Как мы это делаем",
      portfolioIndex: "02 / Архив проектов",
      portfolioEyebrow: "Нажмите. Войдите. Изучите.",
      projectsTitle: "Проекты",
      portfolioText: "Каждая карточка открывает свой мир: клиент, контекст, задача, направление и воплощение работы в бренде, контенте или digital-опыте.",
      proofNumbers: "Без выдуманных цифр.",
      proofNumbersText: "Авторитет создают логика и качество реальной работы, а не пустые обещания на странице.",
      marquee: ["бренд", "контент", "digital", "присутствие"],
      servicesIndex: "03 / Что мы создаём",
      servicesEyebrow: "Связанные услуги",
      servicesTitle: "Цельный бренд.",
      servicesAccent: "Не набор разрозненных элементов.",
      servicesText: "Можно начать с одной конкретной задачи. Но направление сразу создаётся так, чтобы поддерживать следующие шаги.",
      servicesCta: "Обсудить мой следующий шаг",
      services: [
        { number: "01", title: "Визуальная айдентика", text: "Стратегия, логотип и визуальная система, благодаря которым компания выглядит так же профессионально, как и её работа.", tags: ["Позиционирование", "Логотип", "Система бренда"] },
        { number: "02", title: "Сайты и лендинги", text: "Арт-дирекшн, сообщение и пользовательский опыт в страницах, которые удерживают внимание и приводят к контакту.", tags: ["UX/UI", "Копирайтинг", "Разработка"] },
        { number: "03", title: "Присутствие бренда", text: "Контент и коммерческие материалы, сохраняющие единое восприятие ценности во всех точках контакта.", tags: ["Соцсети", "Кампании", "Материалы"] },
      ],
      processIndex: "04 / Процесс",
      processTitle: "Сначала ясность. Затем эстетика.",
      processText: "Без готовых формул и случайных решений. Каждый этап подготавливает следующий.",
      process: [
        ["01", "Диагностика", "Мы изучаем бизнес, аудиторию и то, что клиент должен почувствовать при встрече с брендом."],
        ["02", "Направление", "Определяем стратегический, вербальный и визуальный путь до создания любого материала."],
        ["03", "Создание", "Выстраиваем айдентику, контент и цифровой опыт как части единой системы."],
        ["04", "Передача", "Дорабатываем и организуем всё, чтобы бренд мог уверенно публиковать, презентовать и продавать."],
      ],
      impactLabel: "Обязательство OLI",
      impactTitle: "валового дохода направляется на защиту животных.",
      impactText: "Вместе с вашим бизнесом поддержку получают инициативы, которые спасают, лечат и защищают животных.",
      catAlt: "Рыжий кот на светлой естественной фотографии",
      catCaption: "Бренд, который заботится.",
      contactEyebrow: "Ваш следующий шаг начинается здесь",
      contactTitle: "У вашего бизнеса уже есть ценность.",
      contactAccent: "Покажем её рынку?",
      contactCta: "Хочу бренд такого уровня",
    },
    index: {
      pageTitle: "Проекты — OLI Marketing Digital",
      eyebrowBefore: "Портфолио по компаниям ·",
      eyebrowAfter: "проектов",
      title: "Проекты",
      text: "Откройте каждую компанию, чтобы увидеть контекст, направление и полный набор результатов — не просто красивую картинку без объяснения.",
    },
    card: { openProject: "Открыть проект", viewProject: "Смотреть проект" },
    project: {
      titleSuffix: "Проект OLI",
      allProjects: "Все проекты",
      projectLabel: "Проект",
      viewPublished: "Открыть опубликованный проект",
      wantSimilar: "Хочу похожий проект",
      client: "Клиент",
      sector: "Сфера",
      scope: "Объём работ",
      status: "Статус",
      workIndex: "01 / Работа",
      appearanceEyebrow: "Не только внешний вид.",
      appearanceTitle: "Направление, созданное для решения реальной задачи восприятия.",
      challenge: "Задача",
      direction: "Направление",
      outcome: "Что было создано",
      portfolioIndex: "02 / Портфолио клиента",
      portfolioTitle: "От системы к воплощению",
      portfolioText: "Направление работает в разных масштабах, сохраняя единый характер и коммерческую цель.",
      oliDirection: "Направление OLI",
      systemIndex: "03 / Система",
      systemTitle: "Что мы создали.",
      projectColors: "Цвета проекта",
      nextProject: "Следующий проект",
      contactEyebrow: "У вашего бизнеса уже есть история.",
      contactTitle: "Создадим для неё достойное присутствие?",
      contactCta: "Связаться с OLI",
    },
  },
};

type LocalizedImage = Pick<CaseImage, "alt" | "label">;
type CaseTranslation = Pick<
  OliCase,
  | "sector"
  | "location"
  | "status"
  | "headline"
  | "summary"
  | "challenge"
  | "direction"
  | "result"
  | "services"
  | "deliverables"
> & {
  cover: LocalizedImage;
  gallery: LocalizedImage[];
};

const caseTranslations: Record<"en" | "ru", Record<string, CaseTranslation>> = {
  en: {
    "gru-kpop-anime": {
      sector: "Retail · pop culture", location: "Guarulhos · São Paulo", status: "Brand and website live", headline: "Fandom turned into style.",
      summary: "A complete brand bringing K-pop, anime, fashion, cosplay and collectibles together in a youthful, commercial and recognizable experience.",
      challenge: "Organize very different visual worlds without making the store generic, childish or tied to a single product category.",
      direction: "We created the Pop Universe territory: a light base, warm energy, editorial graphics and a controlled kawaii layer. The same logic guides the brand, content, cards and website navigation.",
      result: "GRU KPOP now presents itself as a complete brand — with its own signature, a consistent visual system and a digital experience ready to sell and build community.",
      services: ["Strategy", "Visual identity", "Brand system", "Content", "Website"],
      deliverables: ["Pop Universe creative direction", "Vectorized logo and variations", "Palette, typography, graphics and stickers", "Brand signature and campaign tagline", "Horizontal and vertical cards", "Initial Instagram kit", "Live responsive website"],
      cover: { alt: "Homepage of the live GRU KPOP Anime website", label: "Live website" },
      gallery: [{ alt: "Visual system created for GRU KPOP Anime", label: "Visual system" }, { alt: "Approved Instagram feed for GRU KPOP Anime", label: "Instagram content" }],
    },
    "studio-e": {
      sector: "Beauty · self-care", location: "Guarulhos · São Paulo", status: "Brand and website live", headline: "Sophistication before the appointment.",
      summary: "An elegant, welcoming presence that translates the quality of the service at every touchpoint.",
      challenge: "Make the perception of value begin before booking while preserving the same refinement in physical materials and the digital experience.",
      direction: "We started with a deep wine palette, signature typography and clean compositions to build a feminine brand without clichés and a premium feel without distance.",
      result: "The business card and website now work together to present Studio E with clarity, delicacy and a consistent sense of care.",
      services: ["Visual identity", "Art direction", "Business card", "Website"],
      deliverables: ["Visual system", "Horizontal and vertical cards", "Premium finishing direction", "Sales presentation", "Live responsive website"],
      cover: { alt: "Realistic mockup of the premium business card created for Studio E", label: "Business card mockup" },
      gallery: [{ alt: "Studio E website homepage", label: "Digital experience" }, { alt: "Details of the card created for Studio E", label: "Identity application" }],
    },
    "rico-games": {
      sector: "Gaming · technology", location: "Brazil", status: "Identity in development", headline: "Gaming energy without the generic look.",
      summary: "A technological, commercial direction that turns a strong name into a distinctive brand presence.",
      challenge: "Create gaming energy without repeating the usual neon language, excessive effects and disorganized visual communication.",
      direction: "We built a high-contrast modular system with color codes, condensed typography and layouts that organize information and products with rhythm.",
      result: "The creative direction gives Rico Games its own territory, ready for campaigns, launches and a future digital experience.",
      services: ["Creative direction", "Visual identity", "Content"],
      deliverables: ["Visual direction", "Logo and signature", "Color system", "Campaign templates", "Sales content"],
      cover: { alt: "Visual system created for Rico Games", label: "Visual identity" },
      gallery: [{ alt: "Campaign asset created for Rico Games", label: "Product campaign" }, { alt: "Rico Games logo", label: "Visual signature" }],
    },
    "josucas-eletronicos": {
      sector: "Technology · retail", location: "Guarulhos · São Paulo", status: "Identity and website live", headline: "Technology connected to real life.",
      summary: "A refreshed presence for a local store combining products, repair services and accessible payment options.",
      challenge: "Evolve the communication without losing recognition of the established brand, balancing premium technology with broad commercial appeal.",
      direction: "The Accessible Tech in Motion route combines a graphite base, bright red, products in the foreground and direct hierarchy for offers and services.",
      result: "The system preserves the original identity while elevating the finish of the website, content and materials to present a more organized and trustworthy operation.",
      services: ["Strategy", "Visual refinement", "Content", "Website"],
      deliverables: ["Audit and creative direction", "Technical logo vectorization", "Visual system and tagline", "Business card", "Initial Instagram kit", "Identity presentation", "Live responsive website"],
      cover: { alt: "Product direction for the Josucas Eletrônicos website", label: "Local e-commerce" },
      gallery: [{ alt: "Communication for Josucas repair services", label: "Service architecture" }, { alt: "Customer service image on the Josucas website", label: "Local presence" }, { alt: "Josucas Eletrônicos logo", label: "Preserved brand" }],
    },
    "manifesto-bar": {
      sector: "Entertainment · rock", location: "São Paulo · Brazil", status: "Website live", headline: "Where rock lives in Brazil.",
      summary: "A cinematic digital experience for a historic stage with an intense calendar and a personality of its own.",
      challenge: "Turn decades of memory and live energy into a contemporary experience without losing the raw power of rock.",
      direction: "We used stage imagery, smoke, aged gold, black and motion to create an experience that opens like a show and leads visitors to the calendar, history and venue.",
      result: "The new website presents Manifesto as a cultural destination, organizes its schedule and brings archive, atmosphere and service into one narrative.",
      services: ["Digital strategy", "UX/UI", "Art direction", "Development"],
      deliverables: ["Information architecture", "Cinematic visual direction", "Immersive homepage", "Event calendar", "Artist archive", "Live responsive website"],
      cover: { alt: "Stage featured in the Manifesto Bar digital experience", label: "Immersive experience" },
      gallery: [{ alt: "Manifesto Bar interior", label: "The venue" }, { alt: "Event featured in the Manifesto Bar calendar", label: "Live calendar" }, { alt: "Manifesto Bar golden symbol", label: "Brand heritage" }],
    },
    "metro-case": {
      sector: "Mobile phones · accessories", location: "São Paulo · Brazil", status: "Landing page live", headline: "From the station to the purchase.",
      summary: "A retail landing page designed to turn location, payment terms and product into immediate action.",
      challenge: "Explain a sensitive credit offer clearly, highlight the physical stores and keep the campaign from looking like just another phone promotion.",
      direction: "The visual language draws on the Blue Line rhythm, with black and yellow as signage and a short journey: understand, check eligibility and find a store.",
      result: "The page organizes the message, terms and contact responsibly, creating a direct commercial path for the Metro Case team.",
      services: ["Landing page", "UX/UI", "Copy", "Development"],
      deliverables: ["Campaign strategy", "Offer copy and hierarchy", "Metro-inspired visual direction", "Store location section", "Live responsive landing page"],
      cover: { alt: "Homepage of the live Metro Case landing page", label: "Live landing page" },
      gallery: [{ alt: "Metro Case brand", label: "Identity" }, { alt: "Metro Case accessories campaign asset", label: "Sales content" }],
    },
    "oliveira-transportes": {
      sector: "Logistics · transport", location: "Greater São Paulo", status: "Website live", headline: "We move what matters.",
      summary: "A simple, confident and approachable presence for presenting freight, moving, pickup and delivery services clearly.",
      challenge: "Give professional form to a service built on trust, care and quick response without complicating the quote request.",
      direction: "We built a straightforward experience with route photography, robust typography and calls to action that naturally lead to contact.",
      result: "The website brings services, process, coverage and questions into a commercial narrative that reduces uncertainty and starts the conversation.",
      services: ["Positioning", "UX/UI", "Copy", "Website"],
      deliverables: ["Content architecture", "Commercial message", "Visual direction", "Quote journey", "Live responsive website"],
      cover: { alt: "Truck featured in Oliveira Transportes communication", label: "Corporate website" },
      gallery: [{ alt: "Oliveira Transportes logo", label: "Original brand" }],
    },
    "score-business-school": {
      sector: "Executive education", location: "Guarulhos · São Paulo", status: "Digital concept developed", headline: "Decide with numbers. Lead with clarity.",
      summary: "An authoritative digital concept for a business school designed for people accountable for results.",
      challenge: "Present economic and financial education with depth and aspiration without relying on the generic look of online courses.",
      direction: "The experience combines urban photography, editorial language, a crest and a journey organized around real management challenges.",
      result: "The concept positions Score as a high-level in-person school and turns its curriculum, method and authority into an enrollment decision.",
      services: ["Strategy", "UX/UI", "Copy", "Website concept"],
      deliverables: ["Digital positioning", "Architecture by business challenge", "Editorial visual direction", "Program pages", "Navigable responsive prototype"],
      cover: { alt: "Visual direction for the Score Business School digital concept", label: "Authority concept" },
      gallery: [{ alt: "Mobile version of the Score Business School concept", label: "Mobile experience" }, { alt: "Score Business School crest", label: "Brand asset" }],
    },
    "eletrotech-isa": {
      sector: "Technical repair · gaming", location: "Guarulhos · São Paulo", status: "Brand and website live", headline: "Precision that protects performance.",
      summary: "A technical, premium identity for console, controller and accessory maintenance.",
      challenge: "Standardize an existing communication system and demonstrate expertise without the usual aggressive visuals or gaming neon.",
      direction: "The High-Performance Precision route uses carbon, graphite, ISA orange, micro-grids and diagnostic language to build technical authority.",
      result: "Brand, card, content and website now share one visual logic: order, control, detail and confidence in the repair.",
      services: ["Visual identity", "Brand system", "Content", "Website"],
      deliverables: ["Creative direction", "Faithful logo vectorization", "Complete visual system", "Card with finishing specification", "Initial Instagram kit", "Identity presentation", "Live responsive website"],
      cover: { alt: "Approved visual system for Eletrotech ISA", label: "Visual identity" },
      gallery: [{ alt: "Instagram feed created for Eletrotech ISA", label: "Instagram content" }, { alt: "Educational post about controller repair for Eletrotech ISA", label: "Educational content" }],
    },
    "dona-girafa": {
      sector: "Professional apparel · e-commerce", location: "Guarulhos · São Paulo", status: "E-commerce live", headline: "Wear the care.",
      summary: "A warm, expressive shopping experience for uniforms that follow the routine of people who care for others.",
      challenge: "Organize catalog, customization and purchase without losing the brand's affectionate personality or making navigation heavy.",
      direction: "The experience balances product, stories and utility through a warm palette, organic shapes and language close to the people who live the profession.",
      result: "The new e-commerce experience turns product into personal expression and creates a clearer journey from first look to final choice.",
      services: ["Digital strategy", "UX/UI", "Art direction", "E-commerce"],
      deliverables: ["Catalog architecture", "Visual direction", "Product journey", "Institutional content", "Live responsive experience"],
      cover: { alt: "Homepage of the live Dona Girafa e-commerce website", label: "Live e-commerce" },
      gallery: [{ alt: "Dona Girafa storefront", label: "Physical presence" }, { alt: "Behind the scenes at Dona Girafa", label: "Brand story" }],
    },
    spolpas: {
      sector: "Food · retail", location: "São Paulo · Brazil", status: "Identity in development", headline: "From freezer to glass.",
      summary: "A fresh, commercial direction that makes flavor, convenience and variety immediately visible.",
      challenge: "Unify different flavors and content formats while keeping the product as the protagonist.",
      direction: "We created a light base with fruit colors, large typography and organic curves that organize information without competing with visual appetite.",
      result: "The identity gains a flexible language for packaging, location, products and campaigns, preserving recognition across different pieces.",
      services: ["Creative direction", "Visual identity", "Content"],
      deliverables: ["Visual direction", "Color system", "Product layouts", "Instagram assets", "Brand applications"],
      cover: { alt: "Visual direction created for Spolpas", label: "Visual identity" },
      gallery: [{ alt: "Store-location post created for Spolpas", label: "Service content" }],
    },
  },
  ru: {
    "gru-kpop-anime": {
      sector: "Ритейл · поп-культура", location: "Гуарульюс · Сан-Паулу", status: "Бренд и сайт опубликованы", headline: "Фандом, ставший стилем.",
      summary: "Цельный бренд, объединяющий K-pop, аниме, моду, косплей и коллекционные товары в молодом, коммерческом и узнаваемом опыте.",
      challenge: "Объединить очень разные визуальные миры, не превращая магазин в безликий, детский или привязанный к одной категории бренд.",
      direction: "Мы создали территорию «Вселенная поп-культуры»: светлая база, тёплая энергия, редакционная графика и сдержанный kawaii-слой. Эта логика объединяет бренд, контент, карточки и навигацию сайта.",
      result: "GRU KPOP теперь выглядит как цельный бренд — с собственной подписью, последовательной визуальной системой и цифровым опытом для продаж и развития сообщества.",
      services: ["Стратегия", "Визуальная айдентика", "Система бренда", "Контент", "Сайт"],
      deliverables: ["Креативное направление «Вселенная поп-культуры»", "Векторный логотип и вариации", "Палитра, типографика, графика и стикеры", "Подпись бренда и слоган кампании", "Горизонтальные и вертикальные карточки", "Стартовый набор для Instagram", "Опубликованный адаптивный сайт"],
      cover: { alt: "Главная страница опубликованного сайта GRU KPOP Anime", label: "Опубликованный сайт" },
      gallery: [{ alt: "Визуальная система GRU KPOP Anime", label: "Визуальная система" }, { alt: "Утверждённая лента Instagram для GRU KPOP Anime", label: "Контент для Instagram" }],
    },
    "studio-e": {
      sector: "Красота · уход за собой", location: "Гуарульюс · Сан-Паулу", status: "Бренд и сайт опубликованы", headline: "Изысканность ещё до визита.",
      summary: "Элегантное и тёплое присутствие, передающее качество сервиса в каждой точке контакта.",
      challenge: "Создать ощущение ценности ещё до записи и сохранить одинаковую изысканность в печатных материалах и цифровом опыте.",
      direction: "Глубокая винная палитра, авторская типографика и чистые композиции помогли создать женственный бренд без клише и премиальность без дистанции.",
      result: "Визитная карточка и сайт теперь вместе представляют Studio E ясно, деликатно и с единым ощущением заботы.",
      services: ["Визуальная айдентика", "Арт-дирекшн", "Визитная карточка", "Сайт"],
      deliverables: ["Визуальная система", "Горизонтальные и вертикальные карточки", "Направление премиальной отделки", "Коммерческая презентация", "Опубликованный адаптивный сайт"],
      cover: { alt: "Реалистичный макет премиальной визитной карточки Studio E", label: "Макет визитной карточки" },
      gallery: [{ alt: "Главная страница сайта Studio E", label: "Цифровой опыт" }, { alt: "Детали визитной карточки Studio E", label: "Применение айдентики" }],
    },
    "rico-games": {
      sector: "Игры · технологии", location: "Бразилия", status: "Айдентика в разработке", headline: "Геймерский стиль без шаблонов.",
      summary: "Технологичное и коммерческое направление, превращающее сильное имя в заметное присутствие бренда.",
      challenge: "Создать геймерскую энергию без привычного неона, избытка эффектов и хаотичной визуальной коммуникации.",
      direction: "Мы выстроили модульную контрастную систему с цветовыми кодами, узкой типографикой и макетами, которые ритмично организуют информацию и продукт.",
      result: "Креативное направление формирует для Rico Games собственную территорию, готовую к кампаниям, запускам и будущему цифровому опыту.",
      services: ["Креативное направление", "Визуальная айдентика", "Контент"],
      deliverables: ["Визуальное направление", "Логотип и подпись", "Цветовая система", "Шаблоны кампаний", "Коммерческий контент"],
      cover: { alt: "Визуальная система Rico Games", label: "Визуальная айдентика" },
      gallery: [{ alt: "Рекламный материал Rico Games", label: "Продуктовая кампания" }, { alt: "Логотип Rico Games", label: "Визуальная подпись" }],
    },
    "josucas-eletronicos": {
      sector: "Технологии · ритейл", location: "Гуарульюс · Сан-Паулу", status: "Айдентика и сайт опубликованы", headline: "Технологии для реальной жизни.",
      summary: "Обновлённое присутствие локального магазина, объединяющего товары, ремонт и доступные условия покупки.",
      challenge: "Развить коммуникацию, сохранив узнаваемость известного бренда и баланс между премиальными технологиями и массовой коммерческой привлекательностью.",
      direction: "Направление «Доступные технологии в движении» объединяет графитовую базу, яркий красный, продукт на первом плане и прямую иерархию предложений и услуг.",
      result: "Система сохраняет оригинальную айдентику, но повышает качество сайта, контента и материалов, представляя бизнес более организованным и надёжным.",
      services: ["Стратегия", "Визуальная доработка", "Контент", "Сайт"],
      deliverables: ["Аудит и креативное направление", "Техническая векторизация логотипа", "Визуальная система и слоган", "Визитная карточка", "Стартовый набор Instagram", "Презентация айдентики", "Опубликованный адаптивный сайт"],
      cover: { alt: "Продуктовое направление для сайта Josucas Eletrônicos", label: "Локальный интернет-магазин" },
      gallery: [{ alt: "Коммуникация ремонтных услуг Josucas", label: "Архитектура услуг" }, { alt: "Изображение сервиса на сайте Josucas", label: "Локальное присутствие" }, { alt: "Логотип Josucas Eletrônicos", label: "Сохранённый бренд" }],
    },
    "manifesto-bar": {
      sector: "Развлечения · рок", location: "Сан-Паулу · Бразилия", status: "Сайт опубликован", headline: "Место, где живёт рок Бразилии.",
      summary: "Кинематографичный цифровой опыт для исторической сцены с насыщенной афишей и собственным характером.",
      challenge: "Перенести десятилетия истории и энергию живых выступлений в современную навигацию, сохранив сырую силу рока.",
      direction: "Сцена, дым, состаренное золото, чёрный цвет и движение создают опыт, который начинается как шоу и ведёт к афише, истории и посещению клуба.",
      result: "Новый сайт представляет Manifesto как культурное место, организует программу и объединяет архив, атмосферу и сервис в едином повествовании.",
      services: ["Цифровая стратегия", "UX/UI", "Арт-дирекшн", "Разработка"],
      deliverables: ["Информационная архитектура", "Кинематографичное визуальное направление", "Иммерсивная главная страница", "Афиша событий", "Архив артистов", "Опубликованный адаптивный сайт"],
      cover: { alt: "Сцена в цифровом опыте Manifesto Bar", label: "Иммерсивный опыт" },
      gallery: [{ alt: "Интерьер Manifesto Bar", label: "Пространство" }, { alt: "Событие в афише Manifesto Bar", label: "Живая афиша" }, { alt: "Золотой символ Manifesto Bar", label: "Наследие бренда" }],
    },
    "metro-case": {
      sector: "Смартфоны · аксессуары", location: "Сан-Паулу · Бразилия", status: "Лендинг опубликован", headline: "От станции к покупке.",
      summary: "Розничный лендинг, превращающий местоположение, условия оплаты и продукт в немедленное действие.",
      challenge: "Ясно объяснить чувствительное кредитное предложение, выделить физические магазины и не превратить кампанию в очередную рекламу смартфона.",
      direction: "Визуальный язык использует ритм Синей линии метро, чёрный и жёлтый как навигацию и короткий путь: понять, проверить условия и найти магазин.",
      result: "Страница ответственно организует аргументы, условия и контакты, создавая прямой коммерческий путь для команды Metro Case.",
      services: ["Лендинг", "UX/UI", "Копирайтинг", "Разработка"],
      deliverables: ["Стратегия кампании", "Тексты и иерархия предложения", "Визуальное направление в стиле метро", "Раздел с адресами магазинов", "Опубликованный адаптивный лендинг"],
      cover: { alt: "Главная страница опубликованного лендинга Metro Case", label: "Опубликованный лендинг" },
      gallery: [{ alt: "Бренд Metro Case", label: "Айдентика" }, { alt: "Материал кампании аксессуаров Metro Case", label: "Коммерческий контент" }],
    },
    "oliveira-transportes": {
      sector: "Логистика · перевозки", location: "Большой Сан-Паулу", status: "Сайт опубликован", headline: "Мы перевозим то, что важно.",
      summary: "Простое, уверенное и близкое присутствие для ясной подачи грузоперевозок, переездов, забора и доставки.",
      challenge: "Профессионально оформить сервис, основанный на доверии, заботе и быстром ответе, не усложняя запрос расчёта.",
      direction: "Мы создали прямой опыт с фотографиями маршрутов, выразительной типографикой и призывами, естественно ведущими к контакту.",
      result: "Сайт объединяет услуги, процесс, географию и вопросы в коммерческом повествовании, которое снижает неопределённость и начинает диалог.",
      services: ["Позиционирование", "UX/UI", "Копирайтинг", "Сайт"],
      deliverables: ["Архитектура контента", "Коммерческое сообщение", "Визуальное направление", "Путь запроса расчёта", "Опубликованный адаптивный сайт"],
      cover: { alt: "Грузовик в коммуникации Oliveira Transportes", label: "Корпоративный сайт" },
      gallery: [{ alt: "Логотип Oliveira Transportes", label: "Оригинальный бренд" }],
    },
    "score-business-school": {
      sector: "Бизнес-образование", location: "Гуарульюс · Сан-Паулу", status: "Цифровая концепция разработана", headline: "Решайте с цифрами. Руководите ясно.",
      summary: "Авторитетная цифровая концепция бизнес-школы для тех, кто отвечает за результат.",
      challenge: "Представить экономическое и финансовое образование глубоко и привлекательно, не используя шаблонную эстетику онлайн-курсов.",
      direction: "Городская фотография, редакционный язык, герб и путь, выстроенный вокруг реальных задач управления, формируют цельный опыт.",
      result: "Концепция позиционирует Score как очную школу высокого уровня и превращает программу, методику и авторитет в решение об обучении.",
      services: ["Стратегия", "UX/UI", "Копирайтинг", "Концепция сайта"],
      deliverables: ["Цифровое позиционирование", "Архитектура по бизнес-задачам", "Редакционное визуальное направление", "Страницы программ", "Интерактивный адаптивный прототип"],
      cover: { alt: "Визуальное направление цифровой концепции Score Business School", label: "Концепция авторитета" },
      gallery: [{ alt: "Мобильная версия концепции Score Business School", label: "Мобильный опыт" }, { alt: "Герб Score Business School", label: "Актив бренда" }],
    },
    "eletrotech-isa": {
      sector: "Технический ремонт · игры", location: "Гуарульюс · Сан-Паулу", status: "Бренд и сайт опубликованы", headline: "Точность, сохраняющая производительность.",
      summary: "Техническая премиальная айдентика для обслуживания консолей, контроллеров и аксессуаров.",
      challenge: "Стандартизировать существующую коммуникацию и показать экспертизу без агрессивного визуала и привычного геймерского неона.",
      direction: "Направление «Высокопроизводительная точность» использует карбон, графит, оранжевый ISA, микросетки и язык диагностики для создания технического авторитета.",
      result: "Бренд, карточка, контент и сайт теперь следуют одной визуальной логике: порядок, контроль, детали и доверие к ремонту.",
      services: ["Визуальная айдентика", "Система бренда", "Контент", "Сайт"],
      deliverables: ["Креативное направление", "Точная векторизация логотипа", "Полная визуальная система", "Карточка со спецификацией отделки", "Стартовый набор Instagram", "Презентация айдентики", "Опубликованный адаптивный сайт"],
      cover: { alt: "Утверждённая визуальная система Eletrotech ISA", label: "Визуальная айдентика" },
      gallery: [{ alt: "Лента Instagram для Eletrotech ISA", label: "Контент для Instagram" }, { alt: "Образовательный пост о ремонте контроллера Eletrotech ISA", label: "Образовательный контент" }],
    },
    "dona-girafa": {
      sector: "Профессиональная одежда · e-commerce", location: "Гуарульюс · Сан-Паулу", status: "Интернет-магазин опубликован", headline: "Носите заботу.",
      summary: "Тёплый и выразительный опыт покупки униформы для повседневной работы тех, кто заботится о других.",
      challenge: "Организовать каталог, персонализацию и покупку, не теряя душевный характер бренда и не перегружая навигацию.",
      direction: "Тёплая палитра, органичные формы и близкий профессионалам язык создают баланс между продуктом, историями и пользой.",
      result: "Новый интернет-магазин превращает продукт в личное выражение и создаёт более ясный путь от первого взгляда до выбора вещи.",
      services: ["Цифровая стратегия", "UX/UI", "Арт-дирекшн", "E-commerce"],
      deliverables: ["Архитектура каталога", "Визуальное направление", "Путь выбора продукта", "Корпоративный контент", "Опубликованный адаптивный опыт"],
      cover: { alt: "Главная страница интернет-магазина Dona Girafa", label: "Опубликованный e-commerce" },
      gallery: [{ alt: "Фасад магазина Dona Girafa", label: "Физическое присутствие" }, { alt: "Закулисье Dona Girafa", label: "История бренда" }],
    },
    spolpas: {
      sector: "Продукты · ритейл", location: "Сан-Паулу · Бразилия", status: "Айдентика в разработке", headline: "От морозильника до стакана.",
      summary: "Свежее коммерческое направление, мгновенно показывающее вкус, удобство и разнообразие.",
      challenge: "Объединить разные вкусы и форматы контента, сохраняя продукт главным героем.",
      direction: "Светлая база, фруктовые цвета, крупная типографика и органичные линии организуют информацию, не конкурируя с аппетитной подачей продукта.",
      result: "Айдентика получает гибкий язык для упаковки, адресов, продуктов и кампаний, сохраняя узнаваемость разных материалов.",
      services: ["Креативное направление", "Визуальная айдентика", "Контент"],
      deliverables: ["Визуальное направление", "Цветовая система", "Продуктовые макеты", "Материалы для Instagram", "Применения бренда"],
      cover: { alt: "Визуальное направление Spolpas", label: "Визуальная айдентика" },
      gallery: [{ alt: "Пост с адресами магазинов Spolpas", label: "Сервисный контент" }],
    },
  },
};

export function localizeCase(item: OliCase, language: Language): OliCase {
  if (language === "pt") return item;

  const translation = caseTranslations[language][item.slug];
  if (!translation) return item;

  return {
    ...item,
    ...translation,
    cover: { ...item.cover, ...translation.cover },
    gallery: item.gallery.map((image, index) => ({
      ...image,
      ...(translation.gallery[index] ?? {}),
    })),
  };
}

export function withLanguage(href: string, language: Language) {
  if (language === "pt" || href.startsWith("http")) return href;

  const [pathAndQuery, hash] = href.split("#");
  const separator = pathAndQuery.includes("?") ? "&" : "?";
  return `${pathAndQuery || "/"}${separator}lang=${language}${hash ? `#${hash}` : ""}`;
}
