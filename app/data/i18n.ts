import type { CaseImage, PortfolioCase } from "./cases";

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
    identityLucas: string;
    projectsToExplore: string;
    proofLabel: string;
    proofTitle: string;
    proofText: string;
    proofAria: string;
    clientMarksAria: string;
    featuredProjects: string;
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
    myRole: string;
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
      homeLabel: "Lucas de Oliveira Andrade — início",
      navLabel: "Navegação principal",
      projects: "Projetos.",
      services: "Competências",
      process: "Trajetória",
      startProject: "Ver meu LinkedIn",
      chooseLanguage: "Selecionar idioma",
    },
    footer: "Estratégia · Marketing · Direção criativa",
    home: {
      pageTitle: "Lucas de Oliveira Andrade — Portfólio pessoal",
      studio: "Estratégia · marketing · direção criativa",
      regions: "São Paulo · Brasil",
      kicker: "Estratégia · marketing · gestão · criação",
      heroTitle: "Lucas",
      heroAccent: "de Oliveira Andrade.",
      lede: "Desde 2010, atuo na interseção entre vendas, gestão, marketing e criação — conectando pontos soltos e transformando problemas reais em marcas, campanhas e experiências que fazem sentido.",
      explore: "Explorar projetos",
      elevate: "Ver meu LinkedIn",
      onStage: "Em destaque",
      identityLucas: "Perfil pessoal",
      projectsToExplore: "projetos para explorar",
      proofLabel: "Projetos reais",
      proofTitle: "Trajetória multidisciplinar.",
      proofText: "Vendas, gestão, marketing e criação reunidos em projetos reais desde 2010.",
      proofAria: "Resumo da experiência de Lucas de Oliveira Andrade",
      clientMarksAria: "Logomarcas dos clientes apresentados",
      featuredProjects: "Projetos em destaque",
      openProject: "Abrir o projeto",
      brandmark: "Logomarca",
      whyIndex: "01 / Sobre mim",
      perceptionEyebrow: "Meu jeito de trabalhar",
      perceptionTitle: "Conecto pontos que parecem soltos e transformo",
      perceptionAccent: "em direção clara.",
      perceptionText: "Minha carreira começou no contato direto com o cliente. Essa base em vendas e gestão ainda guia meu trabalho: primeiro entendo o problema real; depois uno estratégia, comunicação e execução.",
      perceptionLink: "Conheça minha trajetória",
      portfolioIndex: "02 / Arquivo de projetos",
      portfolioEyebrow: "Clique. Entre. Explore.",
      projectsTitle: "Projetos",
      portfolioText: "Cada card abre um universo próprio: cliente, contexto, desafio, direção e o trabalho ganhando forma em marca, conteúdo ou experiência digital.",
      proofNumbers: "Sem números inventados.",
      proofNumbersText: "Autoridade vem de mostrar o raciocínio e o acabamento do trabalho real — não de preencher a página com promessa vazia.",
      marquee: ["marca", "conteúdo", "digital", "presença"],
      servicesIndex: "03 / Competências",
      servicesEyebrow: "Visão ampla, execução prática",
      servicesTitle: "Estratégia e criação.",
      servicesAccent: "Do problema à entrega.",
      servicesText: "Atuo entre o comercial e o criativo para construir soluções coerentes com o negócio, o público e o momento de cada projeto.",
      servicesCta: "Conversar pelo LinkedIn",
      services: [
        { number: "01", title: "Estratégia & crescimento", text: "Diagnóstico, posicionamento e visão comercial para transformar percepção em decisão e oportunidades em movimento.", tags: ["Growth", "Vendas", "Posicionamento"] },
        { number: "02", title: "Marca & direção criativa", text: "Conceito, identidade e linguagem visual conectados à história, ao público e ao objetivo de cada negócio.", tags: ["Branding", "Campanhas", "Audiovisual"] },
        { number: "03", title: "Digital & experiência", text: "Sites, conteúdo e jornadas digitais pensados para organizar informação, prender atenção e gerar contato.", tags: ["UX/UI", "Copy", "Desenvolvimento"] },
      ],
      processIndex: "04 / Trajetória",
      processTitle: "Uma carreira construída em movimento.",
      processText: "Do contato com o cliente à estratégia, da gestão ao palco, cada fase ampliou o modo como enxergo negócios e comunicação.",
      process: [
        ["2010", "Rico Games", "Comecei em vendas e atendimento, evoluindo para marketing, gestão, campanhas, conteúdo, parcerias e decisões comerciais."],
        ["02", "Varejo & gestão", "A experiência direta com clientes e equipes formou meu olhar para conversão, operação e posicionamento."],
        ["03", "Música & entretenimento", "Na Through to the Wolves e em lançamentos musicais, atuei também em conceito, vídeo, divulgação e direção visual."],
        ["04", "Estratégia & digital", "Hoje conecto marketing, criação, sites, marcas e consultoria em projetos de diferentes setores."],
      ],
      impactLabel: "Projeto autoral · Urly Marketing",
      impactTitle: "da renda bruta é destinada à proteção animal.",
      impactText: "Em um dos meus projetos autorais, parte da receita ajuda iniciativas que acolhem, cuidam e protegem animais.",
      catAlt: "Gatinho ruivo em uma fotografia clara e natural",
      catCaption: "Criar valor também pode gerar impacto.",
      contactEyebrow: "Vamos conectar os próximos pontos",
      contactTitle: "Tem um desafio, uma ideia ou uma oportunidade?",
      contactAccent: "Vamos conversar.",
      contactCta: "Falar com Lucas no LinkedIn",
    },
    index: {
      pageTitle: "Projetos — Lucas de Oliveira Andrade",
      eyebrowBefore: "Portfólio por empresa ·",
      eyebrowAfter: "projetos",
      title: "Projetos",
      text: "Entre em cada empresa para conhecer o contexto, a direção e o conjunto de entregas — não apenas uma imagem bonita fora de contexto.",
    },
    card: { openProject: "Abrir o projeto", viewProject: "Ver projeto" },
    project: {
      titleSuffix: "Projeto de Lucas de Oliveira Andrade",
      allProjects: "Todos os projetos",
      projectLabel: "Projeto",
      viewPublished: "Ver projeto publicado",
      wantSimilar: "Conversar sobre este trabalho",
      client: "Cliente",
      sector: "Setor",
      scope: "Escopo",
      status: "Status",
      workIndex: "01 / O trabalho",
      appearanceEyebrow: "Não é só aparência.",
      appearanceTitle: "Uma direção criada para resolver um problema real de percepção.",
      challenge: "O desafio",
      direction: "Minha atuação",
      outcome: "O que ganhou forma",
      portfolioIndex: "02 / Portfólio do cliente",
      portfolioTitle: "Do sistema à aplicação",
      portfolioText: "A direção aparece em escalas diferentes, mas preserva a mesma personalidade e a mesma intenção comercial.",
      myRole: "Minha atuação",
      systemIndex: "03 / Sistema",
      systemTitle: "Entregas do projeto.",
      projectColors: "Cores do projeto",
      nextProject: "Próximo projeto",
      contactEyebrow: "Seu negócio já tem uma história.",
      contactTitle: "Vamos dar a ela uma presença à altura?",
      contactCta: "Conversar com Lucas",
    },
  },
  en: {
    header: {
      homeLabel: "Lucas de Oliveira Andrade — home",
      navLabel: "Main navigation",
      projects: "Projects.",
      services: "Capabilities",
      process: "Journey",
      startProject: "View my LinkedIn",
      chooseLanguage: "Select language",
    },
    footer: "Strategy · Marketing · Creative direction",
    home: {
      pageTitle: "Lucas de Oliveira Andrade — Personal portfolio",
      studio: "Strategy · marketing · creative direction",
      regions: "São Paulo · Brazil",
      kicker: "Strategy · marketing · management · creation",
      heroTitle: "Lucas",
      heroAccent: "de Oliveira Andrade.",
      lede: "Since 2010, I have worked where sales, management, marketing and creation meet — connecting loose points and turning real business problems into brands, campaigns and experiences that make sense.",
      explore: "Explore projects",
      elevate: "View my LinkedIn",
      onStage: "Featured",
      identityLucas: "Personal profile",
      projectsToExplore: "projects to explore",
      proofLabel: "Real projects",
      proofTitle: "A multidisciplinary journey.",
      proofText: "Sales, management, marketing and creation across real projects since 2010.",
      proofAria: "Summary of Lucas de Oliveira Andrade's experience",
      clientMarksAria: "Logos of featured clients",
      featuredProjects: "Featured projects",
      openProject: "Open project",
      brandmark: "Logo",
      whyIndex: "01 / About me",
      perceptionEyebrow: "How I work",
      perceptionTitle: "I connect points that seem unrelated and turn them",
      perceptionAccent: "into a clear direction.",
      perceptionText: "My career began in direct contact with customers. That foundation in sales and management still guides my work: I first understand the real problem, then connect strategy, communication and execution.",
      perceptionLink: "Explore my journey",
      portfolioIndex: "02 / Project archive",
      portfolioEyebrow: "Click. Enter. Explore.",
      projectsTitle: "Projects",
      portfolioText: "Each card opens its own universe: client, context, challenge, direction and the work taking shape as a brand, content or digital experience.",
      proofNumbers: "No invented numbers.",
      proofNumbersText: "Authority comes from showing the thinking and finish behind real work — not from filling a page with empty promises.",
      marquee: ["brand", "content", "digital", "presence"],
      servicesIndex: "03 / Capabilities",
      servicesEyebrow: "Broad vision, practical execution",
      servicesTitle: "Strategy and creation.",
      servicesAccent: "From problem to delivery.",
      servicesText: "I work between commercial and creative thinking to build solutions that fit each business, audience and moment.",
      servicesCta: "Connect on LinkedIn",
      services: [
        { number: "01", title: "Strategy & growth", text: "Diagnosis, positioning and commercial thinking to turn perception into decisions and opportunities into movement.", tags: ["Growth", "Sales", "Positioning"] },
        { number: "02", title: "Brand & creative direction", text: "Concept, identity and visual language connected to each business's story, audience and goal.", tags: ["Branding", "Campaigns", "Audiovisual"] },
        { number: "03", title: "Digital & experience", text: "Websites, content and digital journeys designed to organize information, hold attention and generate contact.", tags: ["UX/UI", "Copy", "Development"] },
      ],
      processIndex: "04 / Journey",
      processTitle: "A career built in motion.",
      processText: "From customer contact to strategy, and from management to the stage, each phase expanded how I see business and communication.",
      process: [
        ["2010", "Rico Games", "I began in sales and customer service, moving into marketing, management, campaigns, content, partnerships and commercial decisions."],
        ["02", "Retail & management", "Working directly with customers and teams shaped my view of conversion, operations and positioning."],
        ["03", "Music & entertainment", "With Through to the Wolves and music releases, I also worked on concepts, video, promotion and visual direction."],
        ["04", "Strategy & digital", "Today I connect marketing, creation, websites, brands and consulting across different industries."],
      ],
      impactLabel: "Personal project · Urly Marketing",
      impactTitle: "of gross revenue is donated to animal protection.",
      impactText: "In one of my personal projects, part of the revenue supports initiatives that shelter, care for and protect animals.",
      catAlt: "Ginger cat in a bright, natural photograph",
      catCaption: "Creating value can create impact too.",
      contactEyebrow: "Let's connect the next points",
      contactTitle: "Have a challenge, an idea or an opportunity?",
      contactAccent: "Let's talk.",
      contactCta: "Talk to Lucas on LinkedIn",
    },
    index: {
      pageTitle: "Projects — Lucas de Oliveira Andrade",
      eyebrowBefore: "Portfolio by company ·",
      eyebrowAfter: "projects",
      title: "Projects",
      text: "Step inside each company to discover its context, direction and complete set of deliverables — not just a beautiful image without context.",
    },
    card: { openProject: "Open project", viewProject: "View project" },
    project: {
      titleSuffix: "Project by Lucas de Oliveira Andrade",
      allProjects: "All projects",
      projectLabel: "Project",
      viewPublished: "View live project",
      wantSimilar: "Discuss this work",
      client: "Client",
      sector: "Industry",
      scope: "Scope",
      status: "Status",
      workIndex: "01 / The work",
      appearanceEyebrow: "More than appearance.",
      appearanceTitle: "A direction designed to solve a real perception challenge.",
      challenge: "The challenge",
      direction: "My role",
      outcome: "What took shape",
      portfolioIndex: "02 / Client portfolio",
      portfolioTitle: "From system to application",
      portfolioText: "The direction appears at different scales while preserving the same personality and commercial intent.",
      myRole: "My role",
      systemIndex: "03 / System",
      systemTitle: "Project deliverables.",
      projectColors: "Project colors",
      nextProject: "Next project",
      contactEyebrow: "Your business already has a story.",
      contactTitle: "Shall we give it a presence that matches?",
      contactCta: "Talk to Lucas",
    },
  },
  ru: {
    header: {
      homeLabel: "Lucas de Oliveira Andrade — главная",
      navLabel: "Основная навигация",
      projects: "Проекты.",
      services: "Компетенции",
      process: "Путь",
      startProject: "Открыть LinkedIn",
      chooseLanguage: "Выбрать язык",
    },
    footer: "Стратегия · Маркетинг · Креативное направление",
    home: {
      pageTitle: "Lucas de Oliveira Andrade — Личное портфолио",
      studio: "Стратегия · маркетинг · креативное направление",
      regions: "Сан-Паулу · Бразилия",
      kicker: "Стратегия · маркетинг · управление · создание",
      heroTitle: "Lucas",
      heroAccent: "de Oliveira Andrade.",
      lede: "С 2010 года я работаю на пересечении продаж, управления, маркетинга и креатива — соединяю разрозненные точки и превращаю реальные задачи бизнеса в бренды, кампании и понятный опыт.",
      explore: "Смотреть проекты",
      elevate: "Открыть мой LinkedIn",
      onStage: "Избранное",
      identityLucas: "Личный профиль",
      projectsToExplore: "проектов для просмотра",
      proofLabel: "Реальные проекты",
      proofTitle: "Мультидисциплинарный путь.",
      proofText: "Продажи, управление, маркетинг и креатив в реальных проектах с 2010 года.",
      proofAria: "Краткое описание опыта Lucas de Oliveira Andrade",
      clientMarksAria: "Логотипы представленных клиентов",
      featuredProjects: "Избранные проекты",
      openProject: "Открыть проект",
      brandmark: "Логотип",
      whyIndex: "01 / Обо мне",
      perceptionEyebrow: "Как я работаю",
      perceptionTitle: "Я соединяю точки, которые кажутся разрозненными, и превращаю их",
      perceptionAccent: "в ясное направление.",
      perceptionText: "Моя карьера началась с прямого общения с клиентами. Опыт в продажах и управлении до сих пор ведёт мою работу: сначала я понимаю реальную задачу, затем соединяю стратегию, коммуникацию и реализацию.",
      perceptionLink: "Узнать о моём пути",
      portfolioIndex: "02 / Архив проектов",
      portfolioEyebrow: "Нажмите. Войдите. Изучите.",
      projectsTitle: "Проекты",
      portfolioText: "Каждая карточка открывает свой мир: клиент, контекст, задача, направление и воплощение работы в бренде, контенте или digital-опыте.",
      proofNumbers: "Без выдуманных цифр.",
      proofNumbersText: "Авторитет создают логика и качество реальной работы, а не пустые обещания на странице.",
      marquee: ["бренд", "контент", "digital", "присутствие"],
      servicesIndex: "03 / Компетенции",
      servicesEyebrow: "Широкий взгляд, практичная реализация",
      servicesTitle: "Стратегия и креатив.",
      servicesAccent: "От задачи к результату.",
      servicesText: "Я соединяю коммерческое и креативное мышление, чтобы создавать решения для конкретного бизнеса, аудитории и момента.",
      servicesCta: "Связаться в LinkedIn",
      services: [
        { number: "01", title: "Стратегия и рост", text: "Диагностика, позиционирование и коммерческий взгляд, которые превращают восприятие в решение, а возможность — в движение.", tags: ["Growth", "Продажи", "Позиционирование"] },
        { number: "02", title: "Бренд и креативное направление", text: "Концепция, айдентика и визуальный язык, связанные с историей, аудиторией и целью бизнеса.", tags: ["Брендинг", "Кампании", "Видео"] },
        { number: "03", title: "Digital и опыт", text: "Сайты, контент и цифровые пути, которые структурируют информацию, удерживают внимание и приводят к контакту.", tags: ["UX/UI", "Копирайтинг", "Разработка"] },
      ],
      processIndex: "04 / Путь",
      processTitle: "Карьера, построенная в движении.",
      processText: "От контакта с клиентом к стратегии, от управления к сцене — каждый этап расширял мой взгляд на бизнес и коммуникацию.",
      process: [
        ["2010", "Rico Games", "Я начал с продаж и работы с клиентами, затем перешёл к маркетингу, управлению, кампаниям, контенту, партнёрствам и коммерческим решениям."],
        ["02", "Ритейл и управление", "Работа напрямую с клиентами и командами сформировала мой взгляд на конверсию, процессы и позиционирование."],
        ["03", "Музыка и развлечения", "В Through to the Wolves и музыкальных релизах я также отвечал за концепции, видео, продвижение и визуальное направление."],
        ["04", "Стратегия и digital", "Сегодня я соединяю маркетинг, креатив, сайты, бренды и консалтинг в проектах разных отраслей."],
      ],
      impactLabel: "Авторский проект · Urly Marketing",
      impactTitle: "валового дохода направляется на защиту животных.",
      impactText: "В одном из моих авторских проектов часть выручки поддерживает инициативы, которые спасают, лечат и защищают животных.",
      catAlt: "Рыжий кот на светлой естественной фотографии",
      catCaption: "Создание ценности может создавать и добро.",
      contactEyebrow: "Соединим следующие точки",
      contactTitle: "Есть задача, идея или возможность?",
      contactAccent: "Давайте поговорим.",
      contactCta: "Написать Lucas в LinkedIn",
    },
    index: {
      pageTitle: "Проекты — Lucas de Oliveira Andrade",
      eyebrowBefore: "Портфолио по компаниям ·",
      eyebrowAfter: "проектов",
      title: "Проекты",
      text: "Откройте каждую компанию, чтобы увидеть контекст, направление и полный набор результатов — не просто красивую картинку без объяснения.",
    },
    card: { openProject: "Открыть проект", viewProject: "Смотреть проект" },
    project: {
      titleSuffix: "Проект Lucas de Oliveira Andrade",
      allProjects: "Все проекты",
      projectLabel: "Проект",
      viewPublished: "Открыть опубликованный проект",
      wantSimilar: "Обсудить эту работу",
      client: "Клиент",
      sector: "Сфера",
      scope: "Объём работ",
      status: "Статус",
      workIndex: "01 / Работа",
      appearanceEyebrow: "Не только внешний вид.",
      appearanceTitle: "Направление, созданное для решения реальной задачи восприятия.",
      challenge: "Задача",
      direction: "Моя роль",
      outcome: "Что было создано",
      portfolioIndex: "02 / Портфолио клиента",
      portfolioTitle: "От системы к воплощению",
      portfolioText: "Направление работает в разных масштабах, сохраняя единый характер и коммерческую цель.",
      myRole: "Моя роль",
      systemIndex: "03 / Система",
      systemTitle: "Результаты проекта.",
      projectColors: "Цвета проекта",
      nextProject: "Следующий проект",
      contactEyebrow: "У вашего бизнеса уже есть история.",
      contactTitle: "Создадим для неё достойное присутствие?",
      contactCta: "Связаться с Lucas",
    },
  },
};

type LocalizedImage = Pick<CaseImage, "alt" | "label">;
type CaseTranslation = Pick<
  PortfolioCase,
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
  hero?: LocalizedImage;
  gallery: LocalizedImage[];
};

const caseTranslations: Record<"en" | "ru", Record<string, CaseTranslation>> = {
  en: {
    "gru-kpop-anime": {
      sector: "Retail · pop culture", location: "Guarulhos · São Paulo", status: "Brand and website live", headline: "Fandom turned into style.",
      summary: "A complete brand bringing K-pop, anime, fashion, cosplay and collectibles together in a youthful, commercial and recognizable experience.",
      challenge: "Organize very different visual worlds without making the store generic, childish or tied to a single product category.",
      direction: "My role connected strategy, creative direction and execution in the Pop Universe territory: a light base, warm energy, editorial graphics and a controlled kawaii layer applied across the brand, content, cards and website.",
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
      direction: "I led the art direction through a deep wine palette, signature typography and clean compositions to build a feminine brand without clichés and a premium feel without distance.",
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
      direction: "My role brings commercial thinking, marketing and creative direction together in a high-contrast modular system with color codes, condensed typography and rhythmic layouts.",
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
      direction: "In my direction, the Accessible Tech in Motion route combines a graphite base, bright red, products in the foreground and direct hierarchy for offers and services.",
      result: "The system preserves the original identity while elevating the finish of the website, content and materials to present a more organized and trustworthy operation.",
      services: ["Strategy", "Visual refinement", "Content", "Website"],
      deliverables: ["Audit and creative direction", "Technical logo vectorization", "Visual system and tagline", "Business card", "Initial Instagram kit", "Identity presentation", "Live responsive website"],
      cover: { alt: "Product direction for the Josucas Eletrônicos website", label: "Local e-commerce" },
      gallery: [
        { alt: "Approved Josucas Eletrônicos visual system board", label: "Approved visual system" },
        { alt: "Approved board with the six initial Instagram covers for Josucas", label: "Initial Instagram kit" },
        { alt: "Approved board for the Josucas commercial carousel", label: "Carousel architecture" },
        { alt: "Communication for Josucas repair services", label: "Service architecture" },
        { alt: "Customer service image on the Josucas website", label: "Local presence" },
        { alt: "Josucas Eletrônicos logo", label: "Vectorized brand" },
      ],
    },
    "manifesto-bar": {
      sector: "Entertainment · rock", location: "São Paulo · Brazil", status: "Website live", headline: "Where rock lives in Brazil.",
      summary: "A cinematic digital experience for a historic stage with an intense calendar and a personality of its own.",
      challenge: "Turn decades of memory and live energy into a contemporary experience without losing the raw power of rock.",
      direction: "My digital direction uses stage imagery, smoke, aged gold, black and motion to create an experience that opens like a show and leads visitors to the calendar, history and venue.",
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
      direction: "I developed a visual route based on the Blue Line rhythm, with black and yellow as signage and a short journey: understand, check eligibility and find a store.",
      result: "The page organizes the message, terms and contact responsibly, creating a direct commercial path for the Metro Case team.",
      services: ["Landing page", "UX/UI", "Copy", "Development"],
      deliverables: ["Campaign strategy", "Offer copy and hierarchy", "Metro-inspired visual direction", "Store location section", "Live responsive landing page"],
      cover: { alt: "Homepage of the live Metro Case landing page", label: "Live landing page" },
      hero: { alt: "Cinematic Metro Case campaign visual", label: "Campaign direction" },
      gallery: [{ alt: "Metro Case brand", label: "Identity" }, { alt: "Metro Case accessories campaign asset", label: "Sales content" }],
    },
    "oliveira-transportes": {
      sector: "Logistics · transport", location: "Greater São Paulo", status: "Website live", headline: "We move what matters.",
      summary: "A simple, confident and approachable presence for presenting freight, moving, pickup and delivery services clearly.",
      challenge: "Give professional form to a service built on trust, care and quick response without complicating the quote request.",
      direction: "My role organized a straightforward experience with route photography, robust typography and calls to action that naturally lead to contact.",
      result: "The website brings services, process, coverage and questions into a commercial narrative that reduces uncertainty and starts the conversation.",
      services: ["Positioning", "UX/UI", "Copy", "Website"],
      deliverables: ["Content architecture", "Commercial message", "Visual direction", "Quote journey", "Live responsive website"],
      cover: { alt: "Truck featured in Oliveira Transportes communication", label: "Corporate website" },
      gallery: [
        { alt: "Approved mockup of the initial Oliveira Transportes content sequence", label: "Content system" },
        { alt: "Oliveira Transportes content asset about planning a move", label: "Planning content" },
        { alt: "Oliveira Transportes content asset about care at every stage", label: "Trust-building language" },
        { alt: "Oliveira Transportes logo", label: "Original brand" },
      ],
    },
    "score-business-school": {
      sector: "Executive education", location: "Guarulhos · São Paulo", status: "Digital concept developed", headline: "Decide with numbers. Lead with clarity.",
      summary: "An authoritative digital concept for a business school designed for people accountable for results.",
      challenge: "Present economic and financial education with depth and aspiration without relying on the generic look of online courses.",
      direction: "I structured an experience that combines urban photography, editorial language, a crest and a journey organized around real management challenges.",
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
      direction: "My direction preserves the existing brand while organizing the High-Performance Precision route through carbon, graphite, ISA orange, micro-grids and diagnostic language.",
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
      direction: "My role balances product, stories and utility through a warm palette, organic shapes and language close to the people who live the profession.",
      result: "The new e-commerce experience turns product into personal expression and creates a clearer journey from first look to final choice.",
      services: ["Digital strategy", "UX/UI", "Art direction", "E-commerce"],
      deliverables: ["Catalog architecture", "Visual direction", "Product journey", "Institutional content", "Live responsive experience"],
      cover: { alt: "Homepage of the live Dona Girafa e-commerce website", label: "Live e-commerce" },
      gallery: [{ alt: "Dona Girafa professional uniform with Saruê print", label: "Saruê product" }, { alt: "Dona Girafa professional uniform with macaw print", label: "Macaw product" }],
    },
    spolpas: {
      sector: "Food · retail", location: "São Paulo · Brazil", status: "Identity in development", headline: "From freezer to glass.",
      summary: "A fresh, commercial direction that makes flavor, convenience and variety immediately visible.",
      challenge: "Unify different flavors and content formats while keeping the product as the protagonist.",
      direction: "I developed a light base with fruit colors, large typography and organic curves that organize information without competing with visual appetite.",
      result: "The identity gains a flexible language for packaging, location, products and campaigns, preserving recognition across different pieces.",
      services: ["Creative direction", "Visual identity", "Content"],
      deliverables: ["Visual direction", "Color system", "Product layouts", "Instagram assets", "Brand applications"],
      cover: { alt: "Visual direction created for Spolpas", label: "Visual identity" },
      gallery: [{ alt: "Store-location post created for Spolpas", label: "Service content" }],
    },
    "oli-marketing": {
      sector: "Personal project · marketing", location: "Guarulhos · São Paulo", status: "Project in development", headline: "Strategy turned into presence.",
      summary: "A personal project created to bring strategy, visual identity, content and digital experiences together in a practical marketing operation close to each client.",
      challenge: "Build a brand capable of organizing different capabilities without looking like a generic agency or a disconnected menu of services.",
      direction: "I created OLI as a working structure that brings commercial thinking and creative direction together, turning diagnosis, message, brand and digital execution into one coherent system.",
      result: "OLI works as a personal project and application lab: a way to turn my multidisciplinary experience into clear deliverables for businesses across industries.",
      services: ["Strategy", "Creative direction", "Visual identity", "Content", "Websites"],
      deliverables: ["Positioning and value proposition", "Visual identity", "Project presentation system", "Content direction", "Digital portfolio"],
      cover: { alt: "OLI Marketing visual identity", label: "Personal project" },
      gallery: [{ alt: "Dark OLI Marketing logo", label: "Visual signature" }, { alt: "Light OLI Marketing logo", label: "Brand variation" }],
    },
  },
  ru: {
    "gru-kpop-anime": {
      sector: "Ритейл · поп-культура", location: "Гуарульюс · Сан-Паулу", status: "Бренд и сайт опубликованы", headline: "Фандом, ставший стилем.",
      summary: "Цельный бренд, объединяющий K-pop, аниме, моду, косплей и коллекционные товары в молодом, коммерческом и узнаваемом опыте.",
      challenge: "Объединить очень разные визуальные миры, не превращая магазин в безликий, детский или привязанный к одной категории бренд.",
      direction: "Моя роль объединила стратегию, креативное направление и реализацию в территории «Вселенная поп-культуры»: светлая база, тёплая энергия, редакционная графика и сдержанный kawaii-слой во всех материалах.",
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
      direction: "Я выстроил арт-дирекшн через глубокую винную палитру, авторскую типографику и чистые композиции, создав женственный бренд без клише и премиальность без дистанции.",
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
      direction: "Моя роль объединила коммерческий взгляд, маркетинг и креативное направление в модульной контрастной системе с цветовыми кодами и выразительной типографикой.",
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
      direction: "В моём направлении маршрут «Доступные технологии в движении» объединяет графитовую базу, яркий красный, продукт на первом плане и прямую иерархию предложений и услуг.",
      result: "Система сохраняет оригинальную айдентику, но повышает качество сайта, контента и материалов, представляя бизнес более организованным и надёжным.",
      services: ["Стратегия", "Визуальная доработка", "Контент", "Сайт"],
      deliverables: ["Аудит и креативное направление", "Техническая векторизация логотипа", "Визуальная система и слоган", "Визитная карточка", "Стартовый набор Instagram", "Презентация айдентики", "Опубликованный адаптивный сайт"],
      cover: { alt: "Продуктовое направление для сайта Josucas Eletrônicos", label: "Локальный интернет-магазин" },
      gallery: [
        { alt: "Утверждённая панель визуальной системы Josucas Eletrônicos", label: "Утверждённая визуальная система" },
        { alt: "Утверждённая панель шести стартовых обложек Instagram для Josucas", label: "Стартовый набор Instagram" },
        { alt: "Утверждённая панель коммерческой карусели Josucas", label: "Архитектура карусели" },
        { alt: "Коммуникация ремонтных услуг Josucas", label: "Архитектура услуг" },
        { alt: "Изображение сервиса на сайте Josucas", label: "Локальное присутствие" },
        { alt: "Логотип Josucas Eletrônicos", label: "Векторная версия бренда" },
      ],
    },
    "manifesto-bar": {
      sector: "Развлечения · рок", location: "Сан-Паулу · Бразилия", status: "Сайт опубликован", headline: "Место, где живёт рок Бразилии.",
      summary: "Кинематографичный цифровой опыт для исторической сцены с насыщенной афишей и собственным характером.",
      challenge: "Перенести десятилетия истории и энергию живых выступлений в современную навигацию, сохранив сырую силу рока.",
      direction: "Моё цифровое направление использует сцену, дым, состаренное золото, чёрный цвет и движение, создавая опыт, который начинается как шоу и ведёт к афише, истории и посещению клуба.",
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
      direction: "Я разработал визуальный маршрут на ритме Синей линии метро: чёрный и жёлтый работают как навигация, а путь ведёт от понимания предложения к поиску магазина.",
      result: "Страница ответственно организует аргументы, условия и контакты, создавая прямой коммерческий путь для команды Metro Case.",
      services: ["Лендинг", "UX/UI", "Копирайтинг", "Разработка"],
      deliverables: ["Стратегия кампании", "Тексты и иерархия предложения", "Визуальное направление в стиле метро", "Раздел с адресами магазинов", "Опубликованный адаптивный лендинг"],
      cover: { alt: "Главная страница опубликованного лендинга Metro Case", label: "Опубликованный лендинг" },
      hero: { alt: "Кинематографичный образ кампании Metro Case", label: "Направление кампании" },
      gallery: [{ alt: "Бренд Metro Case", label: "Айдентика" }, { alt: "Материал кампании аксессуаров Metro Case", label: "Коммерческий контент" }],
    },
    "oliveira-transportes": {
      sector: "Логистика · перевозки", location: "Большой Сан-Паулу", status: "Сайт опубликован", headline: "Мы перевозим то, что важно.",
      summary: "Простое, уверенное и близкое присутствие для ясной подачи грузоперевозок, переездов, забора и доставки.",
      challenge: "Профессионально оформить сервис, основанный на доверии, заботе и быстром ответе, не усложняя запрос расчёта.",
      direction: "Моя роль организовала прямой опыт с фотографиями маршрутов, выразительной типографикой и призывами, естественно ведущими к контакту.",
      result: "Сайт объединяет услуги, процесс, географию и вопросы в коммерческом повествовании, которое снижает неопределённость и начинает диалог.",
      services: ["Позиционирование", "UX/UI", "Копирайтинг", "Сайт"],
      deliverables: ["Архитектура контента", "Коммерческое сообщение", "Визуальное направление", "Путь запроса расчёта", "Опубликованный адаптивный сайт"],
      cover: { alt: "Грузовик в коммуникации Oliveira Transportes", label: "Корпоративный сайт" },
      gallery: [
        { alt: "Утверждённая симуляция стартовой серии контента Oliveira Transportes", label: "Система контента" },
        { alt: "Материал Oliveira Transportes о планировании переезда", label: "Контент о планировании" },
        { alt: "Материал Oliveira Transportes о заботе на каждом этапе", label: "Язык доверия" },
        { alt: "Логотип Oliveira Transportes", label: "Оригинальный бренд" },
      ],
    },
    "score-business-school": {
      sector: "Бизнес-образование", location: "Гуарульюс · Сан-Паулу", status: "Цифровая концепция разработана", headline: "Решайте с цифрами. Руководите ясно.",
      summary: "Авторитетная цифровая концепция бизнес-школы для тех, кто отвечает за результат.",
      challenge: "Представить экономическое и финансовое образование глубоко и привлекательно, не используя шаблонную эстетику онлайн-курсов.",
      direction: "Я структурировал цельный опыт через городскую фотографию, редакционный язык, герб и путь, выстроенный вокруг реальных задач управления.",
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
      direction: "Моё направление сохраняет существующий бренд и организует маршрут «Высокопроизводительная точность» через карбон, графит, оранжевый ISA, микросетки и язык диагностики.",
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
      direction: "Моя роль создаёт баланс между продуктом, историями и пользой через тёплую палитру, органичные формы и близкий профессионалам язык.",
      result: "Новый интернет-магазин превращает продукт в личное выражение и создаёт более ясный путь от первого взгляда до выбора вещи.",
      services: ["Цифровая стратегия", "UX/UI", "Арт-дирекшн", "E-commerce"],
      deliverables: ["Архитектура каталога", "Визуальное направление", "Путь выбора продукта", "Корпоративный контент", "Опубликованный адаптивный опыт"],
      cover: { alt: "Главная страница интернет-магазина Dona Girafa", label: "Опубликованный e-commerce" },
      gallery: [{ alt: "Профессиональная униформа Dona Girafa с принтом Saruê", label: "Модель Saruê" }, { alt: "Профессиональная униформа Dona Girafa с принтом ара", label: "Модель Araras" }],
    },
    spolpas: {
      sector: "Продукты · ритейл", location: "Сан-Паулу · Бразилия", status: "Айдентика в разработке", headline: "От морозильника до стакана.",
      summary: "Свежее коммерческое направление, мгновенно показывающее вкус, удобство и разнообразие.",
      challenge: "Объединить разные вкусы и форматы контента, сохраняя продукт главным героем.",
      direction: "Я разработал светлую базу, фруктовые цвета, крупную типографику и органичные линии, которые организуют информацию и не конкурируют с продуктом.",
      result: "Айдентика получает гибкий язык для упаковки, адресов, продуктов и кампаний, сохраняя узнаваемость разных материалов.",
      services: ["Креативное направление", "Визуальная айдентика", "Контент"],
      deliverables: ["Визуальное направление", "Цветовая система", "Продуктовые макеты", "Материалы для Instagram", "Применения бренда"],
      cover: { alt: "Визуальное направление Spolpas", label: "Визуальная айдентика" },
      gallery: [{ alt: "Пост с адресами магазинов Spolpas", label: "Сервисный контент" }],
    },
    "oli-marketing": {
      sector: "Авторский проект · маркетинг", location: "Гуарульюс · Сан-Паулу", status: "Проект развивается", headline: "Стратегия, которая становится присутствием.",
      summary: "Авторский проект, объединяющий стратегию, визуальную айдентику, контент и цифровой опыт в практичной маркетинговой работе рядом с клиентом.",
      challenge: "Создать бренд, способный объединить разные компетенции и не выглядеть как типовое агентство или набор несвязанных услуг.",
      direction: "Я создал OLI как рабочую структуру, которая сближает коммерческий взгляд и креативное направление, превращая диагностику, сообщение, бренд и digital-реализацию в единую систему.",
      result: "OLI работает как авторский проект и лаборатория применения: способ превращать мой мультидисциплинарный опыт в понятные результаты для бизнеса разных отраслей.",
      services: ["Стратегия", "Креативное направление", "Визуальная айдентика", "Контент", "Сайты"],
      deliverables: ["Позиционирование и ценностное предложение", "Визуальная айдентика", "Система презентации проектов", "Направление контента", "Цифровое портфолио"],
      cover: { alt: "Визуальная айдентика OLI Marketing", label: "Авторский проект" },
      gallery: [{ alt: "Тёмная версия логотипа OLI Marketing", label: "Визуальная подпись" }, { alt: "Светлая версия логотипа OLI Marketing", label: "Вариант бренда" }],
    },
  },
};

export function localizeCase(item: PortfolioCase, language: Language): PortfolioCase {
  if (language === "pt") return item;

  const translation = caseTranslations[language][item.slug];
  if (!translation) return item;

  return {
    ...item,
    ...translation,
    cover: { ...item.cover, ...translation.cover },
    hero: item.hero ? { ...item.hero, ...(translation.hero ?? {}) } : undefined,
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
