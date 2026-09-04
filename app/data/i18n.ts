import { ProjectStatus, type CaseImage, type PortfolioCase } from "./cases";

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

type ValueAxisCopy = {
  number: string;
  title: string;
  text: string;
  tags: string[];
};

type MethodStepCopy = [string, string, string];

type ProjectStatusClosingCopy = {
  index: string;
  title: string;
  description: string;
};

type SiteCopy = {
  header: {
    homeLabel: string;
    navLabel: string;
    home: string;
    journey: string;
    companies: string;
    projects: string;
    partnerships: string;
    contact: string;
    profileCta: string;
    chooseLanguage: string;
    openMenu: string;
    closeMenu: string;
  };
  footer: string;
  home: {
    pageTitle: string;
    regions: string;
    heroEyebrow: string;
    heroName: string;
    heroTitle: string;
    heroText: string;
    positioning: string;
    journeyCta: string;
    workCta: string;
    proofAria: string;
    proofs: string[];
    summaryIndex: string;
    summaryEyebrow: string;
    summaryTitle: string;
    summaryText: string;
    summaryCta: string;
    companiesIndex: string;
    companiesEyebrow: string;
    companiesTitle: string;
    companiesText: string;
    companiesCta: string;
    careerCardCta: string;
    worksIndex: string;
    worksEyebrow: string;
    worksTitle: string;
    worksText: string;
    worksCta: string;
    projectCardCta: string;
    partnershipsIndex: string;
    partnershipsEyebrow: string;
    partnershipsTitle: string;
    partnershipsText: string;
    partnershipNames: string[];
    valueIndex: string;
    valueEyebrow: string;
    valueTitle: string;
    valueText: string;
    valueAxes: ValueAxisCopy[];
    methodIndex: string;
    methodEyebrow: string;
    methodTitle: string;
    methodText: string;
    method: MethodStepCopy[];
    impactIndex: string;
    impactLabel: string;
    impactMetric: string;
    impactTitle: string;
    impactText: string;
    catAlt: string;
    catCaption: string;
    contactEyebrow: string;
    contactTitle: string;
    contactText: string;
    contactCta: string;
    profileLabel: string;
  };
  index: {
    pageTitle: string;
    eyebrow: string;
    countSuffix: string;
    title: string;
    text: string;
  };
  card: {
    openProject: string;
    viewProject: string;
    roleLabel: string;
    statusLabel: string;
  };
  project: {
    titleSuffix: string;
    allProjects: string;
    projectLabel: string;
    viewPublished: string;
    viewCareer: string;
    company: string;
    field: string;
    role: string;
    status: string;
    contextIndex: string;
    contextEyebrow: string;
    contextTitle: string;
    context: string;
    myRole: string;
    whatTookShape: string;
    workIndex: string;
    workTitle: string;
    workText: string;
    roleCallout: string;
    responsibilitiesIndex: string;
    responsibilitiesTitle: string;
    statusClosing: Record<ProjectStatus, ProjectStatusClosingCopy>;
    evidenceTitle: string;
    projectColors: string;
    nextProject: string;
    contactEyebrow: string;
    contactTitle: string;
    contactCta: string;
  };
  career: {
    titleSuffix: string;
    allExperiences: string;
    experienceLabel: string;
    period: string;
    relationship: string;
    roles: string;
    viewRole: string;
    relationshipTitle: string;
    roleTitle: string;
    directActionsTitle: string;
    initiativesTitle: string;
    mediaTitle: string;
    competenciesTitle: string;
    evidenceTitle: string;
    relatedProjectsTitle: string;
    nextExperience: string;
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
      home: "Início",
      journey: "Trajetória",
      companies: "Empresas",
      projects: "Projetos",
      partnerships: "Parcerias",
      contact: "Contato",
      profileCta: "Ver meu LinkedIn",
      chooseLanguage: "Selecionar idioma",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
    },
    footer: "Estratégia · Marketing · Gestão · Direção criativa",
    home: {
      pageTitle: "Lucas de Oliveira Andrade — Portfólio pessoal de carreira",
      regions: "São Paulo · Brasil",
      heroEyebrow: "Portfólio pessoal de carreira",
      heroName: "Lucas de Oliveira Andrade",
      heroTitle: "Estratégia, marketing, gestão e direção criativa.",
      heroText: "Desde 2010, atuo dentro de negócios — da venda e do atendimento à gestão, à criação de marcas, campanhas, produtos, parcerias, conteúdos e experiências.",
      positioning: "Conecto pontos que parecem não ter relação e transformo em uma direção que funciona.",
      journeyCta: "Conheça minha trajetória",
      workCta: "Ver trabalhos selecionados",
      proofAria: "Provas rápidas da trajetória de Lucas de Oliveira Andrade",
      proofs: ["Desde 2010", "Gestão + marketing + execução", "Varejo, entretenimento, serviços e B2B"],
      summaryIndex: "01 / Trajetória",
      summaryEyebrow: "Negócios por dentro",
      summaryTitle: "Uma carreira construída na operação e ampliada pela criação.",
      summaryText: "Comecei em vendas e atendimento em 2010. Ao longo da carreira, ampliei minha atuação para gestão, marketing, consultoria, marcas, conteúdo, audiovisual, produtos, parcerias e experiências digitais — sempre conectado ao que precisa funcionar na prática.",
      summaryCta: "Percorrer minha trajetória",
      companiesIndex: "02 / Empresas",
      companiesEyebrow: "Experiências em destaque",
      companiesTitle: "Onde atuei e o que executei",
      companiesText: "Cada experiência mostra minha relação com a empresa, as funções que assumi, o que executei diretamente e as competências que desenvolvi no processo.",
      companiesCta: "Ver todas as experiências",
      careerCardCta: "Ver minha atuação",
      worksIndex: "03 / Projetos",
      worksEyebrow: "Trabalhos visuais selecionados",
      worksTitle: "Ideias que ganharam forma",
      worksText: "Uma seleção de marcas, campanhas, conteúdos, sites e experiências em que atuei. Cada trabalho identifica minha participação e o estágio real do projeto.",
      worksCta: "Explorar todos os trabalhos",
      projectCardCta: "Ver trabalho",
      partnershipsIndex: "04 / Parcerias",
      partnershipsEyebrow: "Ações e ativações",
      partnershipsTitle: "Parcerias, ações e ativações",
      partnershipsText: "Marcas, canais, artistas e eventos com os quais participei de lançamentos, campanhas, divulgações ou colaborações no contexto dos projetos em que atuei.",
      partnershipNames: ["PlayStation", "Flow", "Flow Games", "4 Amigos", "Afonso Padilha", "David Jones", "Canal Peewee", "BGS"],
      valueIndex: "05 / Como gero valor",
      valueEyebrow: "Experiência integrada",
      valueTitle: "Como minha experiência gera valor.",
      valueText: "Uno leitura comercial, organização, comunicação e execução criativa para transformar situações dispersas em decisões mais claras.",
      valueAxes: [
        { number: "01", title: "Estratégia e visão comercial", text: "Leio contexto, público e oportunidade com o olhar de quem começou em vendas e conhece a operação.", tags: ["Negócios", "Vendas", "Posicionamento"] },
        { number: "02", title: "Gestão e estrutura", text: "Organizo prioridades, rotinas e pontos de decisão para dar forma ao trabalho e sustentar a execução.", tags: ["Gestão", "Processos", "Operação"] },
        { number: "03", title: "Marketing e comunicação", text: "Transformo objetivos de negócio em mensagens, campanhas e ações coerentes com cada público e momento.", tags: ["Marketing", "Campanhas", "Relacionamento"] },
        { number: "04", title: "Marca e direção criativa", text: "Crio conceitos, identidades e sistemas visuais que tornam posicionamento e personalidade reconhecíveis.", tags: ["Marca", "Identidade", "Direção de arte"] },
        { number: "05", title: "Conteúdo e audiovisual", text: "Desenvolvo narrativas, vídeos, lives e peças que aproximam projetos de pessoas sem perder intenção comercial.", tags: ["Conteúdo", "Vídeo", "Lançamentos"] },
        { number: "06", title: "Digital e e-commerce", text: "Estruturo sites, jornadas e experiências digitais para tornar informação, oferta e contato mais claros.", tags: ["Sites", "UX/UI", "E-commerce"] },
      ],
      methodIndex: "06 / Como trabalho",
      methodEyebrow: "Direção pessoal",
      methodTitle: "Do ponto solto à execução que funciona.",
      methodText: "Meu método nasce da operação: entender o que está acontecendo, conectar os elementos relevantes, organizar uma direção e participar da execução.",
      method: [
        ["01", "Entender", "Escuto, observo a operação e identifico a necessidade real antes de definir uma resposta."],
        ["02", "Conectar", "Aproximo negócio, público, comunicação e repertório para encontrar relações que ainda não estavam visíveis."],
        ["03", "Estruturar", "Transformo essas conexões em prioridades, conceito, mensagem, sistema e próximos passos."],
        ["04", "Executar", "Participo da construção, acompanho decisões e ajusto o trabalho até ele funcionar no contexto real."],
      ],
      impactIndex: "07 / Marca autoral e impacto",
      impactLabel: "Urly Marketing",
      impactMetric: "10%",
      impactTitle: "da renda bruta é destinada a iniciativas de proteção animal.",
      impactText: "Criei a Urly Marketing para atuar em estratégia e comunicação. A marca também assume um compromisso direto: destinar 10% da renda bruta a iniciativas de proteção animal.",
      catAlt: "Gatinho ruivo em uma fotografia clara e natural",
      catCaption: "Criar valor também pode gerar impacto.",
      contactEyebrow: "Contato profissional",
      contactTitle: "Vamos conversar sobre experiência, negócios e novas oportunidades.",
      contactText: "Se minha trajetória fizer sentido para uma empresa, um projeto ou uma colaboração, estou disponível para conversar diretamente.",
      contactCta: "Falar com Lucas no LinkedIn",
      profileLabel: "LinkedIn · Lucas de Oliveira Andrade",
    },
    index: {
      pageTitle: "Trabalhos selecionados — Lucas de Oliveira Andrade",
      eyebrow: "Arquivo de projetos",
      countSuffix: "trabalhos selecionados",
      title: "Projetos",
      text: "Marcas, campanhas, conteúdos, sites e experiências apresentados com minha atuação e o estágio real de cada trabalho.",
    },
    card: { openProject: "Abrir o trabalho", viewProject: "Ver trabalho", roleLabel: "Minha atuação", statusLabel: "Status" },
    project: {
      titleSuffix: "Trabalho de Lucas de Oliveira Andrade",
      allProjects: "Todos os trabalhos",
      projectLabel: "Projeto",
      viewPublished: "Ver trabalho publicado",
      viewCareer: "Ver experiência relacionada",
      company: "Empresa ou marca",
      field: "Área",
      role: "Minha atuação",
      status: "Status",
      contextIndex: "01 / Contexto e atuação",
      contextEyebrow: "O trabalho em contexto",
      contextTitle: "O que encontrei, como participei e o que ganhou forma.",
      context: "O contexto",
      myRole: "Minha atuação",
      whatTookShape: "O que ganhou forma",
      workIndex: "02 / Trabalhos e registros",
      workTitle: "Da direção à aplicação",
      workText: "Os registros mostram o trabalho em diferentes formatos, preservando o contexto e a participação que tive em cada construção.",
      roleCallout: "Minha atuação",
      responsibilitiesIndex: "03 / Responsabilidades",
      responsibilitiesTitle: "Responsabilidades e execuções.",
      statusClosing: {
        [ProjectStatus.Realized]: {
          index: "03 / Resultado construído",
          title: "O que ganhou forma.",
          description: "O trabalho foi executado e chegou ao estágio registrado nesta página.",
        },
        [ProjectStatus.Professional]: {
          index: "03 / Atuação profissional",
          title: "Participação, execução e evidências.",
          description: "Esta página documenta minha participação profissional, o papel descrito e o trabalho realizado nesse contexto.",
        },
        [ProjectStatus.Consulting]: {
          index: "03 / Consultoria em prática",
          title: "Atuação, direção e execução.",
          description: "Esta página documenta minha atuação em consultoria e as execuções descritas neste trabalho.",
        },
        [ProjectStatus.Concept]: {
          index: "03 / Escopo conceitual",
          title: "O que foi explorado e desenvolvido.",
          description: "Esta página apresenta uma exploração conceitual; não a trata como contratação ou entrega comercial concluída.",
        },
        [ProjectStatus.Proposal]: {
          index: "03 / Escopo da proposta",
          title: "O que foi proposto.",
          description: "Esta página apresenta uma proposta desenvolvida; não a trata como projeto contratado ou concluído.",
        },
        [ProjectStatus.InDevelopment]: {
          index: "03 / Em desenvolvimento",
          title: "O que já ganhou forma.",
          description: "Este trabalho segue em desenvolvimento; a página registra o estágio atual e o que já ganhou forma.",
        },
      },
      evidenceTitle: "Resultados e evidências",
      projectColors: "Cores do trabalho",
      nextProject: "Próximo trabalho",
      contactEyebrow: "Contato profissional",
      contactTitle: "Quer conhecer melhor minha trajetória?",
      contactCta: "Falar com Lucas",
    },
    career: {
      titleSuffix: "Experiência de Lucas de Oliveira Andrade",
      allExperiences: "Todas as experiências",
      experienceLabel: "Experiência",
      period: "Período",
      relationship: "Relação",
      roles: "Funções",
      viewRole: "Ver minha atuação",
      relationshipTitle: "Minha relação com a empresa",
      roleTitle: "Meu papel",
      directActionsTitle: "O que executei diretamente",
      initiativesTitle: "Iniciativas e decisões",
      mediaTitle: "Trabalhos e registros visuais",
      competenciesTitle: "Competências demonstradas",
      evidenceTitle: "Resultados e evidências",
      relatedProjectsTitle: "Projetos relacionados",
      nextExperience: "Próxima experiência",
      contactEyebrow: "Contato profissional",
      contactTitle: "Minha trajetória pode contribuir com o próximo desafio.",
      contactCta: "Falar com Lucas",
    },
  },
  en: {
    header: {
      homeLabel: "Lucas de Oliveira Andrade — home",
      navLabel: "Main navigation",
      home: "Home",
      journey: "Journey",
      companies: "Companies",
      projects: "Projects",
      partnerships: "Partnerships",
      contact: "Contact",
      profileCta: "View my LinkedIn",
      chooseLanguage: "Select language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    footer: "Strategy · Marketing · Management · Creative direction",
    home: {
      pageTitle: "Lucas de Oliveira Andrade — Personal career portfolio",
      regions: "São Paulo · Brazil",
      heroEyebrow: "Personal career portfolio",
      heroName: "Lucas de Oliveira Andrade",
      heroTitle: "Strategy, marketing, management and creative direction.",
      heroText: "Since 2010, I have worked inside businesses — from sales and customer service to management, brand creation, campaigns, products, partnerships, content and experiences.",
      positioning: "I connect points that seem unrelated and turn them into a direction that works.",
      journeyCta: "Explore my journey",
      workCta: "View selected work",
      proofAria: "Quick evidence of Lucas de Oliveira Andrade's career",
      proofs: ["Since 2010", "Management + marketing + execution", "Retail, entertainment, services and B2B"],
      summaryIndex: "01 / Journey",
      summaryEyebrow: "Business from the inside",
      summaryTitle: "A career built in operations and expanded through creation.",
      summaryText: "I began in sales and customer service in 2010. Over the years, I expanded into management, marketing, consulting, brands, content, audiovisual work, products, partnerships and digital experiences — always connected to what needs to work in practice.",
      summaryCta: "Explore my journey",
      companiesIndex: "02 / Companies",
      companiesEyebrow: "Featured experiences",
      companiesTitle: "Where I worked and what I executed",
      companiesText: "Each experience shows my relationship with the company, the roles I held, what I executed directly and the capabilities I developed along the way.",
      companiesCta: "View all experiences",
      careerCardCta: "View my role",
      worksIndex: "03 / Projects",
      worksEyebrow: "Selected visual work",
      worksTitle: "Ideas that took shape",
      worksText: "A selection of brands, campaigns, content, websites and experiences I worked on. Each project identifies my contribution and its actual stage.",
      worksCta: "Explore all work",
      projectCardCta: "View work",
      partnershipsIndex: "04 / Partnerships",
      partnershipsEyebrow: "Actions and activations",
      partnershipsTitle: "Connections built in context.",
      partnershipsText: "Brands, channels, artists and events with which I took part in actions, launches, campaigns or collaborations within the projects I worked on.",
      partnershipNames: ["PlayStation", "Flow", "Flow Games", "4 Amigos", "Afonso Padilha", "David Jones", "Canal Peewee", "BGS"],
      valueIndex: "05 / How I create value",
      valueEyebrow: "Integrated experience",
      valueTitle: "How my experience creates value.",
      valueText: "I combine commercial thinking, organization, communication and creative execution to turn scattered situations into clearer decisions.",
      valueAxes: [
        { number: "01", title: "Strategy and commercial vision", text: "I read context, audience and opportunity through the perspective of someone who began in sales and understands operations.", tags: ["Business", "Sales", "Positioning"] },
        { number: "02", title: "Management and structure", text: "I organize priorities, routines and decision points to give work shape and support execution.", tags: ["Management", "Processes", "Operations"] },
        { number: "03", title: "Marketing and communication", text: "I turn business goals into messages, campaigns and actions suited to each audience and moment.", tags: ["Marketing", "Campaigns", "Relationships"] },
        { number: "04", title: "Brand and creative direction", text: "I create concepts, identities and visual systems that make positioning and personality recognizable.", tags: ["Brand", "Identity", "Art direction"] },
        { number: "05", title: "Content and audiovisual", text: "I develop narratives, videos, live streams and assets that bring projects closer to people without losing commercial intent.", tags: ["Content", "Video", "Launches"] },
        { number: "06", title: "Digital and e-commerce", text: "I structure websites, journeys and digital experiences to make information, offers and contact clearer.", tags: ["Websites", "UX/UI", "E-commerce"] },
      ],
      methodIndex: "06 / How I work",
      methodEyebrow: "Personal direction",
      methodTitle: "From scattered points to execution that works.",
      methodText: "My method comes from operations: understand what is happening, connect the relevant elements, organize a direction and take part in the execution.",
      method: [
        ["01", "Understand", "I listen, observe the operation and identify the real need before defining a response."],
        ["02", "Connect", "I bring business, audience, communication and repertoire together to uncover relationships that were not yet visible."],
        ["03", "Structure", "I turn those connections into priorities, concept, message, system and next steps."],
        ["04", "Execute", "I take part in the build, follow decisions and refine the work until it functions in its real context."],
      ],
      impactIndex: "07 / Personal brand and impact",
      impactLabel: "Urly Marketing",
      impactMetric: "10%",
      impactTitle: "of gross revenue is allocated to animal protection initiatives.",
      impactText: "I created Urly Marketing to work in strategy and communication. The brand also makes a direct commitment: allocating 10% of gross revenue to animal protection initiatives.",
      catAlt: "Ginger cat in a bright, natural photograph",
      catCaption: "Creating value can create impact too.",
      contactEyebrow: "Professional contact",
      contactTitle: "Let's talk about experience, business and new opportunities.",
      contactText: "If my background could contribute to a company, project or collaboration, I am available for a direct conversation.",
      contactCta: "Talk to Lucas on LinkedIn",
      profileLabel: "LinkedIn · Lucas de Oliveira Andrade",
    },
    index: {
      pageTitle: "Selected work — Lucas de Oliveira Andrade",
      eyebrow: "Project archive",
      countSuffix: "selected projects",
      title: "Projects",
      text: "Brands, campaigns, content, websites and experiences presented with my role and the actual stage of each project.",
    },
    card: { openProject: "Open work", viewProject: "View work", roleLabel: "My role", statusLabel: "Status" },
    project: {
      titleSuffix: "Work by Lucas de Oliveira Andrade",
      allProjects: "All work",
      projectLabel: "Project",
      viewPublished: "View published work",
      viewCareer: "View related experience",
      company: "Company or brand",
      field: "Field",
      role: "My role",
      status: "Status",
      contextIndex: "01 / Context and role",
      contextEyebrow: "The work in context",
      contextTitle: "What I found, how I took part and what took shape.",
      context: "The context",
      myRole: "My role",
      whatTookShape: "What took shape",
      workIndex: "02 / Work and records",
      workTitle: "From direction to application",
      workText: "These records show the work across different formats while preserving its context and the role I played in each build.",
      roleCallout: "My role",
      responsibilitiesIndex: "03 / Responsibilities",
      responsibilitiesTitle: "Responsibilities and execution.",
      statusClosing: {
        [ProjectStatus.Realized]: {
          index: "03 / Built result",
          title: "What took shape.",
          description: "The work was carried out and reached the stage recorded on this page.",
        },
        [ProjectStatus.Professional]: {
          index: "03 / Professional role",
          title: "Contribution, execution and evidence.",
          description: "This page documents my professional contribution, the role described and the work carried out in that context.",
        },
        [ProjectStatus.Consulting]: {
          index: "03 / Consulting in practice",
          title: "Role, direction and execution.",
          description: "This page documents my consulting role and the work described here.",
        },
        [ProjectStatus.Concept]: {
          index: "03 / Concept scope",
          title: "What was explored and developed.",
          description: "This page presents a conceptual exploration; it is not presented as a contracted or completed commercial engagement.",
        },
        [ProjectStatus.Proposal]: {
          index: "03 / Proposal scope",
          title: "What was proposed.",
          description: "This page presents a developed proposal; it is not presented as a contracted or completed project.",
        },
        [ProjectStatus.InDevelopment]: {
          index: "03 / In development",
          title: "What has taken shape so far.",
          description: "This work is still in development; the page records its current stage and what has already taken shape.",
        },
      },
      evidenceTitle: "Results and evidence",
      projectColors: "Project colors",
      nextProject: "Next project",
      contactEyebrow: "Professional contact",
      contactTitle: "Would you like to learn more about my journey?",
      contactCta: "Talk to Lucas",
    },
    career: {
      titleSuffix: "Experience of Lucas de Oliveira Andrade",
      allExperiences: "All experiences",
      experienceLabel: "Experience",
      period: "Period",
      relationship: "Relationship",
      roles: "Roles",
      viewRole: "View my role",
      relationshipTitle: "My relationship with the company",
      roleTitle: "My role",
      directActionsTitle: "What I executed directly",
      initiativesTitle: "Initiatives and decisions",
      mediaTitle: "Work and visual records",
      competenciesTitle: "Capabilities demonstrated",
      evidenceTitle: "Results and evidence",
      relatedProjectsTitle: "Related projects",
      nextExperience: "Next experience",
      contactEyebrow: "Professional contact",
      contactTitle: "My experience can contribute to the next challenge.",
      contactCta: "Talk to Lucas",
    },
  },
  ru: {
    header: {
      homeLabel: "Lucas de Oliveira Andrade — главная",
      navLabel: "Основная навигация",
      home: "Главная",
      journey: "Карьера",
      companies: "Компании",
      projects: "Проекты",
      partnerships: "Партнёрства",
      contact: "Контакты",
      profileCta: "Открыть LinkedIn",
      chooseLanguage: "Выбрать язык",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
    },
    footer: "Стратегия · Маркетинг · Управление · Креативное направление",
    home: {
      pageTitle: "Lucas de Oliveira Andrade — Личное карьерное портфолио",
      regions: "Сан-Паулу · Бразилия",
      heroEyebrow: "Личное карьерное портфолио",
      heroName: "Lucas de Oliveira Andrade",
      heroTitle: "Стратегия, маркетинг, управление и креативное направление.",
      heroText: "С 2010 года я работаю внутри бизнеса — от продаж и клиентского сервиса до управления, создания брендов, кампаний, продуктов, партнёрств, контента и опыта.",
      positioning: "Я соединяю точки, которые кажутся несвязанными, и превращаю их в работающий курс.",
      journeyCta: "Узнать о моей карьере",
      workCta: "Смотреть избранные работы",
      proofAria: "Краткие подтверждения опыта Lucas de Oliveira Andrade",
      proofs: ["С 2010 года", "Управление + маркетинг + реализация", "Ритейл, развлечения, услуги и B2B"],
      summaryIndex: "01 / Карьера",
      summaryEyebrow: "Бизнес изнутри",
      summaryTitle: "Карьера, построенная в операционной работе и расширенная креативом.",
      summaryText: "Я начал с продаж и клиентского сервиса в 2010 году. Со временем моя работа охватила управление, маркетинг, консалтинг, бренды, контент, видео, продукты, партнёрства и цифровой опыт — с постоянным вниманием к тому, что должно работать на практике.",
      summaryCta: "Проследить мой путь",
      companiesIndex: "02 / Компании",
      companiesEyebrow: "Ключевой опыт",
      companiesTitle: "Где я работал и что выполнял",
      companiesText: "Каждый опыт показывает мои отношения с компанией, выполняемые функции, мою непосредственную работу и компетенции, которые я развивал в процессе.",
      companiesCta: "Смотреть весь опыт",
      careerCardCta: "Смотреть мою роль",
      worksIndex: "03 / Проекты",
      worksEyebrow: "Избранные визуальные работы",
      worksTitle: "Идеи, получившие форму",
      worksText: "Подборка брендов, кампаний, контента, сайтов и цифрового опыта, над которыми я работал. Для каждого проекта указаны моя роль и его фактический этап.",
      worksCta: "Смотреть все работы",
      projectCardCta: "Открыть работу",
      partnershipsIndex: "04 / Партнёрства",
      partnershipsEyebrow: "Акции и интеграции",
      partnershipsTitle: "Связи, созданные в контексте.",
      partnershipsText: "Бренды, каналы, артисты и события, с которыми я участвовал в акциях, запусках, кампаниях или коллаборациях в рамках проектов, над которыми работал.",
      partnershipNames: ["PlayStation", "Flow", "Flow Games", "4 Amigos", "Afonso Padilha", "David Jones", "Canal Peewee", "BGS"],
      valueIndex: "05 / Как я создаю ценность",
      valueEyebrow: "Комплексный опыт",
      valueTitle: "Как мой опыт создаёт ценность.",
      valueText: "Я соединяю коммерческое мышление, организацию, коммуникацию и креативную реализацию, чтобы превращать разрозненные ситуации в более ясные решения.",
      valueAxes: [
        { number: "01", title: "Стратегия и коммерческое видение", text: "Я анализирую контекст, аудиторию и возможности с позиции человека, который начинал в продажах и знает операционную работу.", tags: ["Бизнес", "Продажи", "Позиционирование"] },
        { number: "02", title: "Управление и структура", text: "Я организую приоритеты, процессы и точки принятия решений, чтобы работа получила форму и устойчивую реализацию.", tags: ["Управление", "Процессы", "Операции"] },
        { number: "03", title: "Маркетинг и коммуникация", text: "Я превращаю бизнес-цели в сообщения, кампании и действия, соответствующие аудитории и моменту.", tags: ["Маркетинг", "Кампании", "Отношения"] },
        { number: "04", title: "Бренд и креативное направление", text: "Я создаю концепции, айдентику и визуальные системы, делающие позиционирование и характер узнаваемыми.", tags: ["Бренд", "Айдентика", "Арт-дирекшн"] },
        { number: "05", title: "Контент и видео", text: "Я разрабатываю истории, видео, прямые эфиры и материалы, которые сближают проекты с людьми, сохраняя коммерческую цель.", tags: ["Контент", "Видео", "Запуски"] },
        { number: "06", title: "Digital и e-commerce", text: "Я структурирую сайты, пользовательские пути и цифровой опыт, чтобы информация, предложение и контакт стали понятнее.", tags: ["Сайты", "UX/UI", "E-commerce"] },
      ],
      methodIndex: "06 / Как я работаю",
      methodEyebrow: "Личный подход",
      methodTitle: "От разрозненных точек к работающей реализации.",
      methodText: "Мой метод вырос из операционной работы: понять происходящее, соединить важные элементы, выстроить направление и участвовать в реализации.",
      method: [
        ["01", "Понять", "Я слушаю, наблюдаю за процессом и определяю реальную потребность до выбора ответа."],
        ["02", "Соединить", "Я сближаю бизнес, аудиторию, коммуникацию и опыт, чтобы увидеть ещё неочевидные связи."],
        ["03", "Структурировать", "Я превращаю эти связи в приоритеты, концепцию, сообщение, систему и следующие шаги."],
        ["04", "Реализовать", "Я участвую в создании, сопровождаю решения и корректирую работу, пока она не начнёт действовать в реальном контексте."],
      ],
      impactIndex: "07 / Авторский бренд и влияние",
      impactLabel: "Urly Marketing",
      impactMetric: "10%",
      impactTitle: "валового дохода направляется инициативам по защите животных.",
      impactText: "Я создал Urly Marketing для работы в стратегии и коммуникации. Бренд также взял на себя прямое обязательство: направлять 10% валового дохода инициативам по защите животных.",
      catAlt: "Рыжий кот на светлой естественной фотографии",
      catCaption: "Создание ценности может создавать и добро.",
      contactEyebrow: "Профессиональный контакт",
      contactTitle: "Поговорим об опыте, бизнесе и новых возможностях.",
      contactText: "Если мой опыт может быть полезен компании, проекту или коллаборации, я открыт для прямого разговора.",
      contactCta: "Написать Lucas в LinkedIn",
      profileLabel: "LinkedIn · Lucas de Oliveira Andrade",
    },
    index: {
      pageTitle: "Избранные работы — Lucas de Oliveira Andrade",
      eyebrow: "Архив проектов",
      countSuffix: "избранных работ",
      title: "Проекты",
      text: "Бренды, кампании, контент, сайты и цифровой опыт с указанием моей роли и фактического этапа каждого проекта.",
    },
    card: { openProject: "Открыть работу", viewProject: "Смотреть работу", roleLabel: "Моя роль", statusLabel: "Статус" },
    project: {
      titleSuffix: "Работа Lucas de Oliveira Andrade",
      allProjects: "Все работы",
      projectLabel: "Проект",
      viewPublished: "Открыть опубликованную работу",
      viewCareer: "Смотреть связанный опыт",
      company: "Компания или бренд",
      field: "Сфера",
      role: "Моя роль",
      status: "Статус",
      contextIndex: "01 / Контекст и роль",
      contextEyebrow: "Работа в контексте",
      contextTitle: "Что я увидел, как участвовал и что получило форму.",
      context: "Контекст",
      myRole: "Моя роль",
      whatTookShape: "Что получило форму",
      workIndex: "02 / Работы и материалы",
      workTitle: "От направления к применению",
      workText: "Материалы показывают работу в разных форматах, сохраняя её контекст и моё участие в каждом этапе.",
      roleCallout: "Моя роль",
      responsibilitiesIndex: "03 / Ответственность",
      responsibilitiesTitle: "Ответственность и реализация.",
      statusClosing: {
        [ProjectStatus.Realized]: {
          index: "03 / Созданный результат",
          title: "Что получило форму.",
          description: "Работа была выполнена и достигла этапа, указанного на этой странице.",
        },
        [ProjectStatus.Professional]: {
          index: "03 / Профессиональная роль",
          title: "Участие, реализация и подтверждения.",
          description: "На странице представлены мой профессиональный вклад, указанная роль и выполненная в этом контексте работа.",
        },
        [ProjectStatus.Consulting]: {
          index: "03 / Консалтинг на практике",
          title: "Роль, направление и реализация.",
          description: "На странице представлены моя консультационная роль и выполненная в её рамках работа.",
        },
        [ProjectStatus.Concept]: {
          index: "03 / Концептуальный объём",
          title: "Что было исследовано и разработано.",
          description: "На странице представлена концептуальная разработка; она не позиционируется как заказанная или завершённая коммерческая работа.",
        },
        [ProjectStatus.Proposal]: {
          index: "03 / Объём предложения",
          title: "Что было предложено.",
          description: "На странице представлено разработанное предложение; оно не позиционируется как заказанный или завершённый проект.",
        },
        [ProjectStatus.InDevelopment]: {
          index: "03 / В разработке",
          title: "Что уже получило форму.",
          description: "Работа находится в разработке; страница отражает её текущий этап и уже созданные элементы.",
        },
      },
      evidenceTitle: "Результаты и подтверждения",
      projectColors: "Цвета проекта",
      nextProject: "Следующая работа",
      contactEyebrow: "Профессиональный контакт",
      contactTitle: "Хотите узнать больше о моей карьере?",
      contactCta: "Связаться с Lucas",
    },
    career: {
      titleSuffix: "Опыт Lucas de Oliveira Andrade",
      allExperiences: "Весь опыт",
      experienceLabel: "Опыт",
      period: "Период",
      relationship: "Формат работы",
      roles: "Функции",
      viewRole: "Смотреть мою роль",
      relationshipTitle: "Мои отношения с компанией",
      roleTitle: "Моя роль",
      directActionsTitle: "Что я выполнял непосредственно",
      initiativesTitle: "Инициативы и решения",
      mediaTitle: "Работы и визуальные материалы",
      competenciesTitle: "Продемонстрированные компетенции",
      evidenceTitle: "Результаты и подтверждения",
      relatedProjectsTitle: "Связанные проекты",
      nextExperience: "Следующий опыт",
      contactEyebrow: "Профессиональный контакт",
      contactTitle: "Мой опыт может быть полезен в следующей задаче.",
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
> & Partial<Pick<PortfolioCase, "personalRole" | "built">> & {
  cover: LocalizedImage;
  hero?: LocalizedImage;
  gallery: LocalizedImage[];
};

const caseTranslations: Record<"en" | "ru", Record<string, CaseTranslation>> = {
  en: {
    "gru-kpop-anime": {
      sector: "Retail · pop culture", location: "Guarulhos · São Paulo", status: "Brand and website live", headline: "Fandom turned into style.",
      summary: "A complete brand bringing K-pop, anime, fashion, cosplay and collectibles together in a youthful, commercial and recognizable experience.",
      personalRole: "I connected strategy, creative direction and execution to organize the brand, content and digital presence.",
      built: "Visual system, logo and variations, cards, an Instagram starter kit and a published responsive website.",
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
      personalRole: "I led the art direction and connected identity, physical materials and digital experience.",
      built: "Visual system, cards, finishing direction, commercial presentation and a published responsive website.",
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
      personalRole: "I worked across commercial thinking, marketing and creative direction to build this visual route.",
      built: "Visual direction, signature, color system, campaign templates and commercial content in development.",
      challenge: "Create gaming energy without repeating the usual neon language, excessive effects and disorganized visual communication.",
      direction: "My role brings commercial thinking, marketing and creative direction together in a high-contrast modular system with color codes, condensed typography and rhythmic layouts.",
      result: "The creative direction proposes a distinctive visual territory for Rico Games, designed for campaigns, launches and a future digital experience.",
      services: ["Creative direction", "Visual identity", "Content"],
      deliverables: ["Visual direction", "Logo and signature", "Color system", "Campaign templates", "Sales content"],
      cover: { alt: "Visual system created for Rico Games", label: "Visual identity" },
      gallery: [{ alt: "Campaign asset study for Rico Games", label: "Campaign template in development" }, { alt: "Rico Games logo", label: "Visual signature" }],
    },
    "josucas-eletronicos": {
      sector: "Technology · retail", location: "Guarulhos · São Paulo", status: "Identity and website live", headline: "Technology connected to real life.",
      summary: "A refreshed presence for a local store combining products, repair services and accessible payment options.",
      personalRole: "I worked on process and structure consulting, marketing and creative direction to update the operation's presence.",
      built: "Visual system, vectorized logo, commercial materials, Instagram content and a published responsive website.",
      challenge: "Evolve the communication without losing recognition of the established brand, balancing premium technology with broad commercial appeal.",
      direction: "In my direction, the Accessible Tech in Motion route combines a graphite base, bright red, products in the foreground and direct hierarchy for offers and services.",
      result: "The original identity was preserved while the website, content and materials were organized to communicate greater clarity and confidence in the operation.",
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
      personalRole: "I work in communication and marketing consulting, paid media, audiovisual production and programming analysis.",
      built: "Information architecture, cinematic visual direction, homepage, calendar, artist archive and a published website.",
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
      personalRole: "I created and structured the brand and its digital presence, connecting concept, offer, communication and experience.",
      built: "Identity, campaign strategy and copy, visual direction, store locations and a published landing page.",
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
      personalRole: "I worked on brand creation and on process, communication and marketing consulting.",
      built: "Brand concept, identity, content architecture, commercial message, quote journey and a published website.",
      challenge: "Give professional form to a service built on trust, care and quick response without complicating the quote request.",
      direction: "My role organized a straightforward experience with route photography, robust typography and calls to action that naturally lead to contact.",
      result: "The website was structured to bring services, process, coverage and questions into a commercial narrative designed to reduce uncertainty and start the conversation.",
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
      personalRole: "I structured the digital concept, experience architecture, editorial language and decision journey.",
      built: "Digital positioning, challenge-led architecture, visual direction, course pages and a responsive prototype.",
      challenge: "Present economic and financial education with depth and aspiration without relying on the generic look of online courses.",
      direction: "I structured an experience that combines urban photography, editorial language, a crest and a journey organized around real management challenges.",
      result: "The concept was structured to present Score as a high-level in-person school and guide the enrollment decision through its curriculum, method and authority.",
      services: ["Strategy", "UX/UI", "Copy", "Website concept"],
      deliverables: ["Digital positioning", "Architecture by business challenge", "Editorial visual direction", "Program pages", "Navigable responsive prototype"],
      cover: { alt: "Visual direction for the Score Business School digital concept", label: "Authority concept" },
      gallery: [{ alt: "Mobile version of the Score Business School concept", label: "Mobile experience" }, { alt: "Score Business School crest", label: "Brand asset" }],
    },
    "eletrotech-isa": {
      sector: "Technical repair · gaming", location: "Guarulhos · São Paulo", status: "Visual direction in development", headline: "Precision that protects performance.",
      summary: "A technical, premium identity for console, controller and accessory maintenance.",
      personalRole: "I preserved the existing brand and developed a creative-direction proposal to organize a consistent technical language.",
      built: "Logo vectorization, visual-system studies, card, Instagram content, presentation and a responsive website concept.",
      challenge: "Standardize an existing communication system and demonstrate expertise without the usual aggressive visuals or gaming neon.",
      direction: "My direction preserves the existing brand while organizing the High-Performance Precision route through carbon, graphite, ISA orange, micro-grids and diagnostic language.",
      result: "The proposal organizes brand, card, content and digital concept under one visual logic and is recorded here as work in development.",
      services: ["Visual identity", "Brand system", "Content", "Website"],
      deliverables: ["Creative direction", "Faithful logo vectorization", "Visual-system studies", "Card and finishing study", "Initial Instagram kit", "Identity presentation", "Responsive website concept"],
      cover: { alt: "Visual-direction preview for Eletrotech ISA", label: "Visual-direction preview" },
      gallery: [{ alt: "Instagram feed created for Eletrotech ISA", label: "Instagram content" }, { alt: "Educational post about controller repair for Eletrotech ISA", label: "Educational content" }],
    },
    "dona-girafa": {
      sector: "Professional apparel · e-commerce", location: "Guarulhos · São Paulo", status: "Conceptual commercial demo", headline: "Wear the care.",
      summary: "A warm, expressive shopping experience for uniforms that follow the routine of people who care for others.",
      personalRole: "I worked on digital strategy, art direction and the organization of the shopping experience.",
      built: "Conceptual catalog architecture, visual direction, product journey and institutional content in a navigable demo.",
      challenge: "Organize catalog, customization and purchase without losing the brand's affectionate personality or making navigation heavy.",
      direction: "My role balances product, stories and utility through a warm palette, organic shapes and language close to the people who live the profession.",
      result: "The demo explores a possible journey from first look to product choice; products, prices, inventory and checkout remain illustrative.",
      services: ["Digital strategy", "UX/UI", "Art direction", "E-commerce"],
      deliverables: ["Conceptual catalog architecture", "Visual direction", "Product journey", "Institutional content", "Navigable responsive demo"],
      cover: { alt: "Conceptual e-commerce demo for Dona Girafa", label: "Conceptual demo" },
      gallery: [{ alt: "Dona Girafa professional uniform with Saruê print", label: "Saruê product" }, { alt: "Dona Girafa professional uniform with macaw print", label: "Macaw product" }],
    },
    spolpas: {
      sector: "Food · retail", location: "São Paulo · Brazil", status: "Identity in development", headline: "From freezer to glass.",
      summary: "A fresh, commercial direction that makes flavor, convenience and variety immediately visible.",
      personalRole: "I developed the visual direction and content system to organize product, flavor and information.",
      built: "Color system, product layouts, Instagram assets and brand applications in development.",
      challenge: "Unify different flavors and content formats while keeping the product as the protagonist.",
      direction: "I developed a light base with fruit colors, large typography and organic curves that organize information without competing with visual appetite.",
      result: "The identity in development establishes a flexible language designed for future applications across packaging, locations, products and campaigns.",
      services: ["Creative direction", "Visual identity", "Content"],
      deliverables: ["Visual direction", "Color system", "Product layouts", "Instagram assets", "Brand applications"],
      cover: { alt: "Visual direction created for Spolpas", label: "Visual identity" },
      gallery: [{ alt: "Store-location post study for Spolpas", label: "Content in development" }],
    },
  },
  ru: {
    "gru-kpop-anime": {
      sector: "Ритейл · поп-культура", location: "Гуарульюс · Сан-Паулу", status: "Бренд и сайт опубликованы", headline: "Фандом, ставший стилем.",
      summary: "Цельный бренд, объединяющий K-pop, аниме, моду, косплей и коллекционные товары в молодом, коммерческом и узнаваемом опыте.",
      personalRole: "Я соединил стратегию, креативное направление и реализацию, чтобы организовать бренд, контент и цифровое присутствие.",
      built: "Визуальная система, логотип и вариации, карточки, стартовый набор Instagram и опубликованный адаптивный сайт.",
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
      personalRole: "Я руководил арт-дирекшном и соединил айдентику, физические материалы и цифровой опыт.",
      built: "Визуальная система, карточки, направление отделки, коммерческая презентация и опубликованный адаптивный сайт.",
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
      personalRole: "Я работал на пересечении коммерческого видения, маркетинга и креативного направления при разработке этого визуального маршрута.",
      built: "Визуальное направление, подпись, цветовая система, шаблоны кампаний и коммерческий контент в разработке.",
      challenge: "Создать геймерскую энергию без привычного неона, избытка эффектов и хаотичной визуальной коммуникации.",
      direction: "Моя роль объединила коммерческий взгляд, маркетинг и креативное направление в модульной контрастной системе с цветовыми кодами и выразительной типографикой.",
      result: "Креативное направление предлагает Rico Games собственную визуальную территорию, рассчитанную на кампании, запуски и будущий цифровой опыт.",
      services: ["Креативное направление", "Визуальная айдентика", "Контент"],
      deliverables: ["Визуальное направление", "Логотип и подпись", "Цветовая система", "Шаблоны кампаний", "Коммерческий контент"],
      cover: { alt: "Визуальная система Rico Games", label: "Визуальная айдентика" },
      gallery: [{ alt: "Исследование рекламного материала Rico Games", label: "Шаблон кампании в разработке" }, { alt: "Логотип Rico Games", label: "Визуальная подпись" }],
    },
    "josucas-eletronicos": {
      sector: "Технологии · ритейл", location: "Гуарульюс · Сан-Паулу", status: "Айдентика и сайт опубликованы", headline: "Технологии для реальной жизни.",
      summary: "Обновлённое присутствие локального магазина, объединяющего товары, ремонт и доступные условия покупки.",
      personalRole: "Я консультировал по процессам и структуре, маркетингу и креативному направлению, обновляя присутствие бизнеса.",
      built: "Визуальная система, векторный логотип, коммерческие материалы, контент Instagram и опубликованный адаптивный сайт.",
      challenge: "Развить коммуникацию, сохранив узнаваемость известного бренда и баланс между премиальными технологиями и массовой коммерческой привлекательностью.",
      direction: "В моём направлении маршрут «Доступные технологии в движении» объединяет графитовую базу, яркий красный, продукт на первом плане и прямую иерархию предложений и услуг.",
      result: "Оригинальная айдентика была сохранена, а сайт, контент и материалы организованы так, чтобы яснее и убедительнее представить работу компании.",
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
      personalRole: "Я работаю в консалтинге по коммуникации и маркетингу, платном продвижении, видео и анализе программы.",
      built: "Информационная архитектура, кинематографичное визуальное направление, главная страница, афиша, архив артистов и опубликованный сайт.",
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
      personalRole: "Я создал и структурировал бренд и его цифровое присутствие, соединив концепцию, предложение, коммуникацию и опыт.",
      built: "Айдентика, стратегия и тексты кампании, визуальное направление, адреса магазинов и опубликованный лендинг.",
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
      personalRole: "Я участвовал в создании бренда и консультировал по процессам, коммуникации и маркетингу.",
      built: "Концепция бренда, айдентика, архитектура контента, коммерческое сообщение, путь запроса расчёта и опубликованный сайт.",
      challenge: "Профессионально оформить сервис, основанный на доверии, заботе и быстром ответе, не усложняя запрос расчёта.",
      direction: "Моя роль организовала прямой опыт с фотографиями маршрутов, выразительной типографикой и призывами, естественно ведущими к контакту.",
      result: "Сайт был структурирован так, чтобы объединить услуги, процесс, географию работы и вопросы в коммерческое повествование, способное снизить неопределённость и начать диалог.",
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
      personalRole: "Я структурировал цифровую концепцию, архитектуру опыта, редакционный язык и путь принятия решения.",
      built: "Цифровое позиционирование, архитектура по задачам, визуальное направление, страницы программ и адаптивный прототип.",
      challenge: "Представить экономическое и финансовое образование глубоко и привлекательно, не используя шаблонную эстетику онлайн-курсов.",
      direction: "Я структурировал цельный опыт через городскую фотографию, редакционный язык, герб и путь, выстроенный вокруг реальных задач управления.",
      result: "Концепция была структурирована так, чтобы представить Score как очную школу высокого уровня и помочь принять решение об обучении через программу, методику и авторитет.",
      services: ["Стратегия", "UX/UI", "Копирайтинг", "Концепция сайта"],
      deliverables: ["Цифровое позиционирование", "Архитектура по бизнес-задачам", "Редакционное визуальное направление", "Страницы программ", "Интерактивный адаптивный прототип"],
      cover: { alt: "Визуальное направление цифровой концепции Score Business School", label: "Концепция авторитета" },
      gallery: [{ alt: "Мобильная версия концепции Score Business School", label: "Мобильный опыт" }, { alt: "Герб Score Business School", label: "Актив бренда" }],
    },
    "eletrotech-isa": {
      sector: "Технический ремонт · игры", location: "Гуарульюс · Сан-Паулу", status: "Визуальное направление в разработке", headline: "Точность, сохраняющая производительность.",
      summary: "Техническая премиальная айдентика для обслуживания консолей, контроллеров и аксессуаров.",
      personalRole: "Я сохранил существующий бренд и разработал предложение креативного направления для последовательного технического языка.",
      built: "Векторизация логотипа, исследования визуальной системы, карточка, контент Instagram, презентация и концепт адаптивного сайта.",
      challenge: "Стандартизировать существующую коммуникацию и показать экспертизу без агрессивного визуала и привычного геймерского неона.",
      direction: "Моё направление сохраняет существующий бренд и организует маршрут «Высокопроизводительная точность» через карбон, графит, оранжевый ISA, микросетки и язык диагностики.",
      result: "Предложение объединяет бренд, карточку, контент и digital-концепт в одной визуальной логике и представлено здесь как работа в разработке.",
      services: ["Визуальная айдентика", "Система бренда", "Контент", "Сайт"],
      deliverables: ["Креативное направление", "Точная векторизация логотипа", "Исследования визуальной системы", "Исследование карточки и отделки", "Стартовый набор Instagram", "Презентация айдентики", "Концепт адаптивного сайта"],
      cover: { alt: "Предварительное визуальное направление Eletrotech ISA", label: "Предварительное направление" },
      gallery: [{ alt: "Лента Instagram для Eletrotech ISA", label: "Контент для Instagram" }, { alt: "Образовательный пост о ремонте контроллера Eletrotech ISA", label: "Образовательный контент" }],
    },
    "dona-girafa": {
      sector: "Профессиональная одежда · e-commerce", location: "Гуарульюс · Сан-Паулу", status: "Концептуальная коммерческая демонстрация", headline: "Носите заботу.",
      summary: "Тёплый и выразительный опыт покупки униформы для повседневной работы тех, кто заботится о других.",
      personalRole: "Я работал над цифровой стратегией, арт-дирекшном и организацией опыта покупки.",
      built: "Концептуальная архитектура каталога, визуальное направление, путь выбора продукта и корпоративный контент в навигационной демонстрации.",
      challenge: "Организовать каталог, персонализацию и покупку, не теряя душевный характер бренда и не перегружая навигацию.",
      direction: "Моя роль создаёт баланс между продуктом, историями и пользой через тёплую палитру, органичные формы и близкий профессионалам язык.",
      result: "Демонстрация исследует возможный путь от первого взгляда до выбора вещи; продукты, цены, наличие и checkout остаются иллюстративными.",
      services: ["Цифровая стратегия", "UX/UI", "Арт-дирекшн", "E-commerce"],
      deliverables: ["Концептуальная архитектура каталога", "Визуальное направление", "Путь выбора продукта", "Корпоративный контент", "Навигационная адаптивная демонстрация"],
      cover: { alt: "Концептуальная демонстрация e-commerce Dona Girafa", label: "Концептуальная демонстрация" },
      gallery: [{ alt: "Профессиональная униформа Dona Girafa с принтом Saruê", label: "Модель Saruê" }, { alt: "Профессиональная униформа Dona Girafa с принтом ара", label: "Модель Araras" }],
    },
    spolpas: {
      sector: "Продукты · ритейл", location: "Сан-Паулу · Бразилия", status: "Айдентика в разработке", headline: "От морозильника до стакана.",
      summary: "Свежее коммерческое направление, мгновенно показывающее вкус, удобство и разнообразие.",
      personalRole: "Я разработал визуальное направление и систему контента, организовав продукт, вкус и информацию.",
      built: "Цветовая система, продуктовые макеты, материалы Instagram и применения бренда в разработке.",
      challenge: "Объединить разные вкусы и форматы контента, сохраняя продукт главным героем.",
      direction: "Я разработал светлую базу, фруктовые цвета, крупную типографику и органичные линии, которые организуют информацию и не конкурируют с продуктом.",
      result: "Разрабатываемая айдентика формирует гибкий язык, рассчитанный на будущие применения в упаковке, адресных материалах, продуктовой коммуникации и кампаниях.",
      services: ["Креативное направление", "Визуальная айдентика", "Контент"],
      deliverables: ["Визуальное направление", "Цветовая система", "Продуктовые макеты", "Материалы для Instagram", "Применения бренда"],
      cover: { alt: "Визуальное направление Spolpas", label: "Визуальная айдентика" },
      gallery: [{ alt: "Исследование поста с адресами Spolpas", label: "Контент в разработке" }],
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
