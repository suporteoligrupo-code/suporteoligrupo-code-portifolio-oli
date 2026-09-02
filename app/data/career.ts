import { cases, type CaseImage } from "./cases";
import { localizeCase } from "./i18n";

export type CareerLanguage = "pt" | "en" | "ru";

export type CareerRelationship =
  | "Experiência profissional"
  | "Gerência"
  | "Consultoria"
  | "Projeto"
  | "Marca autoral"
  | "Música e entretenimento"
  | "Parceria";

export type CareerMedia = CaseImage;

type CareerMediaCopy = Pick<CareerMedia, "alt" | "label">;

type CareerTranslation = {
  company?: string;
  period?: string;
  relationship: string;
  relationshipDetail?: string;
  roles: string[];
  summary: string;
  directActions: string[];
  initiatives?: string[];
  competencies: string[];
  highlights?: string[];
  status?: string;
  relatedCompany?: string;
  cover?: CareerMediaCopy;
  hero?: CareerMediaCopy;
  media?: CareerMediaCopy[];
};

export type CareerEntry = {
  slug: string;
  company: string;
  period?: string;
  relationship: CareerRelationship;
  relationshipDetail?: string;
  roles: string[];
  summary: string;
  directActions: string[];
  initiatives?: string[];
  competencies: string[];
  highlights?: string[];
  cover?: CareerMedia;
  hero?: CareerMedia;
  media: CareerMedia[];
  featured: boolean;
  status?: string;
  relatedCompany?: string;
  relatedProjectSlugs?: string[];
  published: boolean;
  translations: Record<Exclude<CareerLanguage, "pt">, CareerTranslation>;
};

export type LocalizedCareerEntry = Omit<CareerEntry, "relationship" | "translations"> & {
  relationship: string;
};

const projectMedia = (slug: string): Pick<CareerEntry, "cover" | "hero" | "media"> => {
  const project = cases.find((item) => item.slug === slug);

  if (!project) return { media: [] };

  return {
    cover: project.cover,
    hero: project.hero ?? project.cover,
    media: project.gallery,
  };
};

export const careerEntries: CareerEntry[] = [
  {
    slug: "rico-games",
    company: "Rico Games",
    period: "2010–atual",
    relationship: "Experiência profissional",
    roles: ["Comercial", "Marketing", "Gerência"],
    summary:
      "Minha principal escola de negócios. Comecei no atendimento e nas vendas e ampliei minha atuação para marketing, gestão, produtos, conteúdo, parcerias e experiência de loja.",
    directActions: [
      "Atendi clientes e procurei compreender suas necessidades.",
      "Atuei em vendas e na construção de argumentos comerciais.",
      "Participei da criação de campanhas e promoções.",
      "Avaliei e participei do desenvolvimento de produtos.",
      "Atuei na criação de sites.",
      "Produzi vídeos e lives.",
      "Participei de ações de lançamento.",
      "Desenvolvi parcerias.",
      "Participei da viabilização da distribuição oficial de produtos PlayStation.",
      "Participei da reforma e da evolução da experiência de loja.",
      "Atuei na estruturação de um espaço para conteúdo e podcast.",
    ],
    initiatives: [
      "Desenvolvimento de produtos e parcerias.",
      "Evolução da experiência de loja.",
      "Estrutura para conteúdo e podcast.",
    ],
    competencies: [
      "Atendimento e vendas",
      "Estratégia comercial",
      "Gestão",
      "Marketing e campanhas",
      "Produtos",
      "Parcerias",
      "Conteúdo e audiovisual",
      "Digital",
      "Experiência de loja",
    ],
    highlights: [
      "Trajetória contínua desde 2010.",
      "Participação na viabilização da distribuição oficial de produtos PlayStation.",
      "Reforma da loja e estruturação de espaço para conteúdo e podcast.",
    ],
    ...projectMedia("rico-games"),
    featured: true,
    status: "Atual",
    relatedProjectSlugs: ["rico-games"],
    published: true,
    translations: {
      en: {
        period: "2010–present",
        relationship: "Professional experience",
        roles: ["Sales", "Marketing", "Management"],
        summary:
          "My main school of business. I started in customer service and sales, then expanded my work into marketing, management, products, content, partnerships and the in-store experience.",
        directActions: [
          "Served customers and worked to understand their needs.",
          "Worked in sales and helped build commercial arguments.",
          "Contributed to campaigns and promotions.",
          "Evaluated and contributed to product development.",
          "Worked on websites.",
          "Produced videos and live streams.",
          "Took part in launches.",
          "Developed partnerships.",
          "Contributed to enabling the official distribution of PlayStation products.",
          "Contributed to the store renovation and in-store experience.",
          "Helped structure a content and podcast space.",
        ],
        initiatives: [
          "Product and partnership development.",
          "Evolution of the in-store experience.",
          "A dedicated space for content and podcasts.",
        ],
        competencies: [
          "Customer service and sales",
          "Commercial strategy",
          "Management",
          "Marketing and campaigns",
          "Products",
          "Partnerships",
          "Audiovisual content",
          "Digital",
          "Retail experience",
        ],
        highlights: [
          "A continuous career path since 2010.",
          "Contribution to enabling the official distribution of PlayStation products.",
          "Store renovation and creation of a content and podcast space.",
        ],
        status: "Current",
      },
      ru: {
        period: "2010–н. в.",
        relationship: "Профессиональный опыт",
        roles: ["Продажи", "Маркетинг", "Управление"],
        summary:
          "Моя главная школа бизнеса. Я начал с обслуживания клиентов и продаж, а затем расширил свою работу на маркетинг, управление, продукты, контент, партнёрства и клиентский опыт в магазине.",
        directActions: [
          "Работал с клиентами и изучал их потребности.",
          "Участвовал в продажах и разработке коммерческой аргументации.",
          "Участвовал в создании кампаний и промоакций.",
          "Оценивал продукты и участвовал в их разработке.",
          "Работал над сайтами.",
          "Создавал видео и прямые эфиры.",
          "Участвовал в запусках.",
          "Развивал партнёрства.",
          "Участвовал в обеспечении официальной дистрибуции продуктов PlayStation.",
          "Участвовал в обновлении магазина и клиентского опыта.",
          "Помогал создавать пространство для контента и подкастов.",
        ],
        initiatives: [
          "Разработка продуктов и партнёрств.",
          "Развитие клиентского опыта в магазине.",
          "Пространство для контента и подкастов.",
        ],
        competencies: [
          "Клиентский сервис и продажи",
          "Коммерческая стратегия",
          "Управление",
          "Маркетинг и кампании",
          "Продукты",
          "Партнёрства",
          "Аудиовизуальный контент",
          "Digital",
          "Розничный опыт",
        ],
        highlights: [
          "Непрерывный профессиональный путь с 2010 года.",
          "Участие в обеспечении официальной дистрибуции продуктов PlayStation.",
          "Обновление магазина и создание пространства для контента и подкастов.",
        ],
        status: "Сейчас",
      },
    },
  },
  {
    slug: "toy-show",
    company: "Toy Show",
    period: "Aproximadamente dois anos",
    relationship: "Experiência profissional",
    relationshipDetail: "Experiência profissional e prestação de serviço",
    roles: ["Gerência", "Operação", "Marketing", "Conteúdo", "Comunicação comercial"],
    summary:
      "Atuei por aproximadamente dois anos entre a gerência presencial e o marketing, acompanhando a operação e produzindo comunicação comercial, conteúdo e vídeos.",
    directActions: [
      "Atuei na gerência presencial.",
      "Acompanhei a operação.",
      "Atuei no marketing.",
      "Produzi conteúdo.",
      "Produzi vídeos.",
      "Desenvolvi comunicação comercial.",
    ],
    competencies: ["Gerência", "Operação", "Marketing", "Conteúdo", "Audiovisual", "Comunicação comercial"],
    highlights: ["Experiência que combinou acompanhamento presencial da operação, gerência e comunicação."],
    media: [],
    featured: true,
    published: true,
    translations: {
      en: {
        period: "Approximately two years",
        relationship: "Professional experience",
        relationshipDetail: "Professional experience and service delivery",
        roles: ["Management", "Operations", "Marketing", "Content", "Commercial communication"],
        summary:
          "For approximately two years, I worked across on-site management and marketing, following the operation and producing commercial communication, content and videos.",
        directActions: [
          "Worked in on-site management.",
          "Followed the operation.",
          "Worked in marketing.",
          "Produced content.",
          "Produced videos.",
          "Developed commercial communication.",
        ],
        competencies: ["Management", "Operations", "Marketing", "Content", "Audiovisual", "Commercial communication"],
        highlights: ["An experience combining on-site operations, management and communication."],
      },
      ru: {
        period: "Около двух лет",
        relationship: "Профессиональный опыт",
        relationshipDetail: "Профессиональный опыт и оказание услуг",
        roles: ["Управление", "Операционная работа", "Маркетинг", "Контент", "Коммерческие коммуникации"],
        summary:
          "Около двух лет я совмещал управление на месте и маркетинг, сопровождал операционную работу и создавал коммерческие коммуникации, контент и видео.",
        directActions: [
          "Работал в управлении на месте.",
          "Сопровождал операционную работу.",
          "Занимался маркетингом.",
          "Создавал контент.",
          "Создавал видео.",
          "Разрабатывал коммерческие коммуникации.",
        ],
        competencies: ["Управление", "Операционная работа", "Маркетинг", "Контент", "Аудиовизуальные материалы", "Коммерческие коммуникации"],
        highlights: ["Опыт, объединивший операционную работу на месте, управление и коммуникации."],
      },
    },
  },
  {
    slug: "manifesto-bar",
    company: "Manifesto Bar",
    period: "Atual",
    relationship: "Consultoria",
    roles: ["Comunicação", "Marketing", "Tráfego pago", "Audiovisual", "Análise de programação"],
    summary:
      "Atuo atualmente na consultoria de comunicação e marketing do Manifesto Bar, conectando divulgação, mídia, conteúdo audiovisual e análise da programação da casa.",
    directActions: [
      "Presto consultoria de comunicação e marketing.",
      "Atuo em tráfego pago.",
      "Crio artes.",
      "Produzo vídeos.",
      "Avalio bandas.",
      "Analiso eventos e formatos para a casa.",
    ],
    initiatives: [
      "Avaliação de bandas.",
      "Análise de eventos e formatos.",
      "Integração entre comunicação, mídia e programação.",
    ],
    competencies: [
      "Estratégia de comunicação",
      "Marketing",
      "Mídia paga",
      "Direção criativa",
      "Audiovisual",
      "Análise de programação",
    ],
    highlights: [
      "Consultoria atual com atuação em comunicação e também na avaliação de conteúdos e formatos da casa.",
    ],
    ...projectMedia("manifesto-bar"),
    featured: true,
    status: "Atual",
    relatedProjectSlugs: ["manifesto-bar"],
    published: true,
    translations: {
      en: {
        period: "Current",
        relationship: "Consulting",
        roles: ["Communication", "Marketing", "Paid media", "Audiovisual", "Programming analysis"],
        summary:
          "I currently advise Manifesto Bar on communication and marketing, connecting promotion, media, audiovisual content and venue-programming analysis.",
        directActions: [
          "Provide communication and marketing consulting.",
          "Work with paid media.",
          "Create artwork.",
          "Produce videos.",
          "Evaluate bands.",
          "Analyze events and formats for the venue.",
        ],
        initiatives: ["Band evaluation.", "Event and format analysis.", "Integration of communication, media and programming."],
        competencies: ["Communication strategy", "Marketing", "Paid media", "Creative direction", "Audiovisual", "Programming analysis"],
        highlights: ["Current consulting work spanning communication as well as the evaluation of content and venue formats."],
        status: "Current",
      },
      ru: {
        period: "Сейчас",
        relationship: "Консалтинг",
        roles: ["Коммуникации", "Маркетинг", "Платное продвижение", "Аудиовизуальный контент", "Анализ программы"],
        summary:
          "Сейчас я консультирую Manifesto Bar по коммуникациям и маркетингу, связывая продвижение, медиа, аудиовизуальный контент и анализ программы площадки.",
        directActions: [
          "Консультирую по коммуникациям и маркетингу.",
          "Работаю с платным продвижением.",
          "Создаю графические материалы.",
          "Создаю видео.",
          "Оцениваю музыкальные группы.",
          "Анализирую события и форматы для площадки.",
        ],
        initiatives: ["Оценка музыкальных групп.", "Анализ событий и форматов.", "Интеграция коммуникаций, медиа и программы площадки."],
        competencies: ["Коммуникационная стратегия", "Маркетинг", "Платное продвижение", "Креативное руководство", "Аудиовизуальный контент", "Анализ программы"],
        highlights: ["Текущий консалтинг в сфере коммуникаций, контента и форматов площадки."],
        status: "Сейчас",
      },
    },
  },
  {
    slug: "urly-marketing",
    company: "Urly Marketing",
    relationship: "Marca autoral",
    roles: ["Criação de marca", "Estratégia", "Comunicação"],
    summary:
      "Criei a Urly Marketing como uma marca autoral de estratégia e comunicação, com 10% da renda bruta destinados a iniciativas de proteção animal.",
    directActions: [
      "Criei a marca.",
      "Estruturei seu posicionamento.",
      "Desenvolvi sua atuação em estratégia e comunicação.",
      "Defini a destinação de 10% da renda bruta para iniciativas de proteção animal.",
    ],
    initiatives: ["Integração entre trabalho de comunicação e apoio à causa animal."],
    competencies: ["Criação de marca", "Posicionamento", "Estratégia", "Comunicação", "Construção de impacto"],
    highlights: ["Compromisso de destinar 10% da renda bruta a iniciativas de proteção animal."],
    media: [
      {
        src: "/impact/gatinho-ruivo.jpg",
        width: 700,
        height: 936,
        kind: "photo",
        alt: "Gato ruivo em imagem editorial ligada ao compromisso da Urly Marketing com a proteção animal",
        label: "Impacto e proteção animal",
        placements: {
          card: {
            fit: "cover",
            position: "50% 42%",
            scale: 1,
            background: "#c64731",
            frame: "bleed",
            overlay: "soft",
            motion: "subtle",
            aspectRatio: "4 / 3",
            layout: "feature",
            mobile: {
              fit: "cover",
              position: "50% 38%",
              scale: 1,
              aspectRatio: "4 / 5",
            },
          },
          hero: {
            fit: "cover",
            position: "50% 38%",
            scale: 1,
            background: "#c64731",
            frame: "bleed",
            overlay: "cinematic",
            motion: "none",
            aspectRatio: "16 / 9",
            layout: "feature",
            mobile: {
              fit: "cover",
              position: "50% 34%",
              scale: 1,
              aspectRatio: "4 / 5",
            },
          },
          gallery: {
            fit: "contain",
            position: "50% 50%",
            scale: 1,
            background: "#c64731",
            inset: "clamp(12px, 2vw, 28px)",
            maxWidth: "700px",
            frame: "portrait-stage",
            overlay: "none",
            motion: "none",
            aspectRatio: "3 / 4",
            layout: "portrait",
            span: 6,
            mobile: {
              fit: "contain",
              position: "50% 50%",
              scale: 1,
              inset: "10px",
              maxWidth: "100%",
              aspectRatio: "3 / 4",
            },
          },
        },
      },
    ],
    featured: true,
    published: true,
    translations: {
      en: {
        relationship: "Own brand",
        roles: ["Brand creation", "Strategy", "Communication"],
        summary:
          "I created Urly Marketing as my own strategy and communication brand, with 10% of gross revenue allocated to animal-protection initiatives.",
        directActions: [
          "Created the brand.",
          "Structured its positioning.",
          "Developed its strategy and communication work.",
          "Defined the allocation of 10% of gross revenue to animal-protection initiatives.",
        ],
        initiatives: ["Connection between communication work and support for animal protection."],
        competencies: ["Brand creation", "Positioning", "Strategy", "Communication", "Impact building"],
        highlights: ["Commitment to allocate 10% of gross revenue to animal-protection initiatives."],
        media: [
          {
            alt: "An orange cat in an editorial image connected to Urly Marketing's commitment to animal protection",
            label: "Impact and animal protection",
          },
        ],
      },
      ru: {
        relationship: "Авторский бренд",
        roles: ["Создание бренда", "Стратегия", "Коммуникации"],
        summary:
          "Я создал Urly Marketing как собственный бренд в сфере стратегии и коммуникаций, направляющий 10% валового дохода на инициативы по защите животных.",
        directActions: [
          "Создал бренд.",
          "Сформировал его позиционирование.",
          "Развивал стратегию и коммуникации.",
          "Определил направление 10% валового дохода на инициативы по защите животных.",
        ],
        initiatives: ["Связь коммуникационной работы с поддержкой защиты животных."],
        competencies: ["Создание бренда", "Позиционирование", "Стратегия", "Коммуникации", "Создание общественной ценности"],
        highlights: ["Обязательство направлять 10% валового дохода на инициативы по защите животных."],
        media: [
          {
            alt: "Рыжий кот в редакционном изображении, связанном с поддержкой защиты животных со стороны Urly Marketing",
            label: "Общественная ценность и защита животных",
          },
        ],
      },
    },
  },
  {
    slug: "divertida-geek",
    company: "Divertida Geek",
    relationship: "Projeto",
    roles: ["Identidade visual", "Conceito visual", "Produção de vídeos"],
    summary: "Criei a identidade visual e o conceito da Divertida Geek e produzi vídeos para dar forma à presença da marca.",
    directActions: ["Criei a identidade visual.", "Desenvolvi o conceito visual.", "Produzi vídeos."],
    competencies: ["Criação de marca", "Identidade visual", "Direção criativa", "Audiovisual"],
    highlights: ["Sistema visual e conteúdos em vídeo desenvolvidos para a marca."],
    media: [],
    featured: true,
    published: true,
    translations: {
      en: {
        relationship: "Project",
        roles: ["Visual identity", "Visual concept", "Video production"],
        summary: "I created Divertida Geek's visual identity and concept and produced videos to shape the brand's presence.",
        directActions: ["Created the visual identity.", "Developed the visual concept.", "Produced videos."],
        competencies: ["Brand creation", "Visual identity", "Creative direction", "Audiovisual"],
        highlights: ["A visual system and video content developed for the brand."],
      },
      ru: {
        relationship: "Проект",
        roles: ["Визуальная айдентика", "Визуальная концепция", "Производство видео"],
        summary: "Я создал визуальную айдентику и концепцию Divertida Geek, а также видео, формирующие присутствие бренда.",
        directActions: ["Создал визуальную айдентику.", "Разработал визуальную концепцию.", "Создал видео."],
        competencies: ["Создание бренда", "Визуальная айдентика", "Креативное руководство", "Аудиовизуальный контент"],
        highlights: ["Визуальная система и видеоконтент, разработанные для бренда."],
      },
    },
  },
  {
    slug: "josucas-eletronicos",
    company: "Josucas Eletrônicos",
    relationship: "Consultoria",
    relationshipDetail: "Consultoria e projeto",
    roles: ["Processos", "Estrutura", "Marketing", "Comunicação comercial"],
    summary:
      "Atuei em consultoria de processos, estrutura e marketing, desenvolvi materiais comerciais e conectei uma oportunidade de venda de celulares no boleto para pessoas com restrição de crédito à solução PayJoy.",
    directActions: [
      "Prestei consultoria de processos.",
      "Prestei consultoria de estrutura.",
      "Atuei no marketing.",
      "Criei cartões, folhetos e materiais comerciais.",
      "Desenvolvi o conceito de venda de celulares no boleto para pessoas com restrição de crédito.",
      "Conectei a oportunidade à solução PayJoy.",
    ],
    initiatives: [
      "Conceito comercial voltado a pessoas com restrição de crédito.",
      "Conexão da oportunidade com a solução PayJoy.",
    ],
    competencies: [
      "Consultoria de processos",
      "Estrutura de negócio",
      "Marketing",
      "Comunicação comercial",
      "Desenvolvimento de oportunidades",
      "Conexão entre problema e solução",
    ],
    highlights: [
      "Materiais comerciais e sistema visual.",
      "Conceito comercial desenvolvido.",
      "Conexão da oportunidade à PayJoy.",
    ],
    ...projectMedia("josucas-eletronicos"),
    featured: true,
    relatedProjectSlugs: ["josucas-eletronicos"],
    published: true,
    translations: {
      en: {
        relationship: "Consulting",
        relationshipDetail: "Consulting and project",
        roles: ["Processes", "Structure", "Marketing", "Commercial communication"],
        summary:
          "I advised on processes, structure and marketing, developed commercial materials and connected an installment-payment mobile-phone opportunity for customers with credit restrictions to the PayJoy solution.",
        directActions: [
          "Advised on processes.",
          "Advised on structure.",
          "Worked in marketing.",
          "Created cards, leaflets and commercial materials.",
          "Developed the mobile-phone payment concept for customers with credit restrictions.",
          "Connected the opportunity to PayJoy.",
        ],
        initiatives: ["A commercial concept for people with credit restrictions.", "Connection of the opportunity to the PayJoy solution."],
        competencies: ["Process consulting", "Business structure", "Marketing", "Commercial communication", "Opportunity development", "Connecting problems and solutions"],
        highlights: ["Commercial materials and visual system.", "A developed commercial concept.", "Connection of the opportunity to PayJoy."],
      },
      ru: {
        relationship: "Консалтинг",
        relationshipDetail: "Консалтинг и проект",
        roles: ["Процессы", "Структура", "Маркетинг", "Коммерческие коммуникации"],
        summary:
          "Я консультировал по процессам, структуре и маркетингу, создавал коммерческие материалы и связал идею продажи телефонов в рассрочку клиентам с ограничениями по кредитной истории с решением PayJoy.",
        directActions: [
          "Консультировал по процессам.",
          "Консультировал по структуре.",
          "Работал над маркетингом.",
          "Создавал карточки, листовки и коммерческие материалы.",
          "Разработал концепцию оплаты телефонов для клиентов с ограничениями по кредитной истории.",
          "Связал возможность с решением PayJoy.",
        ],
        initiatives: ["Коммерческая концепция для людей с ограничениями по кредитной истории.", "Связь возможности с решением PayJoy."],
        competencies: ["Консалтинг по процессам", "Структура бизнеса", "Маркетинг", "Коммерческие коммуникации", "Развитие возможностей", "Связь проблем и решений"],
        highlights: ["Коммерческие материалы и визуальная система.", "Разработанная коммерческая концепция.", "Связь возможности с PayJoy."],
      },
    },
  },
  {
    slug: "metro-case",
    company: "Metro Case",
    relationship: "Projeto",
    relationshipDetail: "Criação e estruturação de marca",
    roles: ["Estratégia de marca", "Identidade", "Comunicação", "Presença digital", "Projeto de site"],
    summary:
      "Criei e estruturei a Metro Case, construindo marca, conceito, comunicação, presença digital e projeto de site. A empresa pertence ao mesmo grupo/proprietário da Josucas.",
    directActions: [
      "Criei a marca.",
      "Desenvolvi o conceito.",
      "Estruturei a comunicação.",
      "Trabalhei na presença digital.",
      "Desenvolvi o projeto de site.",
    ],
    competencies: ["Estratégia de marca", "Identidade", "Posicionamento", "Comunicação", "Digital", "Experiência web"],
    highlights: [
      "Sistema de marca, comunicação e projeto digital.",
      "Relação com a Josucas registrada de forma contextual.",
    ],
    ...projectMedia("metro-case"),
    featured: true,
    relatedCompany: "Josucas Eletrônicos",
    relatedProjectSlugs: ["metro-case"],
    published: true,
    translations: {
      en: {
        relationship: "Project",
        relationshipDetail: "Brand creation and structuring",
        roles: ["Brand strategy", "Identity", "Communication", "Digital presence", "Website project"],
        summary:
          "I created and structured Metro Case, developing its brand, concept, communication, digital presence and website project. It belongs to the same group/owner as Josucas.",
        directActions: [
          "Created the brand.",
          "Developed the concept.",
          "Structured communication.",
          "Worked on its digital presence.",
          "Developed the website project.",
        ],
        competencies: ["Brand strategy", "Identity", "Positioning", "Communication", "Digital", "Web experience"],
        highlights: ["Brand system, communication and digital project.", "The relationship to Josucas recorded with context."],
        relatedCompany: "Josucas Eletrônicos",
      },
      ru: {
        relationship: "Проект",
        relationshipDetail: "Создание и структурирование бренда",
        roles: ["Бренд-стратегия", "Айдентика", "Коммуникации", "Digital-присутствие", "Проект сайта"],
        summary:
          "Я создал и структурировал Metro Case: бренд, концепцию, коммуникации, цифровое присутствие и проект сайта. Компания относится к той же группе/владельцу, что и Josucas.",
        directActions: [
          "Создал бренд.",
          "Разработал концепцию.",
          "Структурировал коммуникации.",
          "Работал над цифровым присутствием.",
          "Разработал проект сайта.",
        ],
        competencies: ["Бренд-стратегия", "Айдентика", "Позиционирование", "Коммуникации", "Digital", "Веб-опыт"],
        highlights: ["Система бренда, коммуникации и digital-проект.", "Связь с Josucas представлена в соответствующем контексте."],
        relatedCompany: "Josucas Eletrônicos",
      },
    },
  },
  {
    slug: "reserva-ibirapitanga-revista-saua",
    company: "Reserva Ibirapitanga / Revista Sauá",
    relationship: "Consultoria",
    relationshipDetail: "Consultoria e produção editorial",
    roles: ["Comunicação", "Marketing", "Produção editorial", "Organização de conteúdo"],
    summary:
      "Atuei na consultoria de comunicação e marketing da Reserva Ibirapitanga e na produção editorial de edições da Revista Sauá.",
    directActions: [
      "Prestei consultoria de comunicação.",
      "Prestei consultoria de marketing.",
      "Produzi edições da Revista Sauá.",
      "Organizei e apresentei editorialmente o conteúdo.",
    ],
    competencies: [
      "Estratégia de comunicação",
      "Marketing",
      "Produção editorial",
      "Organização de informação",
      "Apresentação visual",
    ],
    highlights: ["Edições da Revista Sauá e respectivos registros editoriais."],
    media: [],
    featured: true,
    published: true,
    translations: {
      en: {
        relationship: "Consulting",
        relationshipDetail: "Consulting and editorial production",
        roles: ["Communication", "Marketing", "Editorial production", "Content organization"],
        summary:
          "I advised Reserva Ibirapitanga on communication and marketing and worked on the editorial production of Revista Sauá editions.",
        directActions: [
          "Provided communication consulting.",
          "Provided marketing consulting.",
          "Produced Revista Sauá editions.",
          "Organized and presented the content editorially.",
        ],
        competencies: ["Communication strategy", "Marketing", "Editorial production", "Information organization", "Visual presentation"],
        highlights: ["Revista Sauá editions and their editorial records."],
      },
      ru: {
        relationship: "Консалтинг",
        relationshipDetail: "Консалтинг и редакционное производство",
        roles: ["Коммуникации", "Маркетинг", "Редакционное производство", "Организация контента"],
        summary:
          "Я консультировал Reserva Ibirapitanga по коммуникациям и маркетингу и участвовал в редакционном производстве выпусков Revista Sauá.",
        directActions: [
          "Консультировал по коммуникациям.",
          "Консультировал по маркетингу.",
          "Создавал выпуски Revista Sauá.",
          "Организовывал и оформлял содержание издания.",
        ],
        competencies: ["Коммуникационная стратегия", "Маркетинг", "Редакционное производство", "Организация информации", "Визуальная презентация"],
        highlights: ["Выпуски Revista Sauá и соответствующие редакционные материалы."],
      },
    },
  },
  {
    slug: "oliveira-transportes",
    company: "Oliveira Transportes e Mudanças",
    relationship: "Consultoria",
    relationshipDetail: "Criação de marca e consultoria",
    roles: ["Conceito de marca", "Identidade", "Comunicação", "Processos", "Marketing"],
    summary:
      "Criei o conceito de marca e a identidade da Oliveira Transportes e Mudanças e atuei em comunicação e consultoria de processos e marketing.",
    directActions: [
      "Criei o conceito de marca.",
      "Desenvolvi a identidade.",
      "Estruturei a comunicação.",
      "Prestei consultoria de processos.",
      "Prestei consultoria de marketing.",
    ],
    competencies: ["Estratégia de marca", "Identidade visual", "Comunicação", "Consultoria de processos", "Marketing"],
    highlights: ["Sistema de identidade e aplicações de comunicação."],
    ...projectMedia("oliveira-transportes"),
    featured: true,
    relatedProjectSlugs: ["oliveira-transportes"],
    published: true,
    translations: {
      en: {
        relationship: "Consulting",
        relationshipDetail: "Brand creation and consulting",
        roles: ["Brand concept", "Identity", "Communication", "Processes", "Marketing"],
        summary:
          "I created the brand concept and identity for Oliveira Transportes e Mudanças and worked on communication, process consulting and marketing.",
        directActions: [
          "Created the brand concept.",
          "Developed the identity.",
          "Structured communication.",
          "Advised on processes.",
          "Advised on marketing.",
        ],
        competencies: ["Brand strategy", "Visual identity", "Communication", "Process consulting", "Marketing"],
        highlights: ["An identity system and communication applications."],
      },
      ru: {
        relationship: "Консалтинг",
        relationshipDetail: "Создание бренда и консалтинг",
        roles: ["Концепция бренда", "Айдентика", "Коммуникации", "Процессы", "Маркетинг"],
        summary:
          "Я создал концепцию бренда и айдентику Oliveira Transportes e Mudanças, а также работал над коммуникациями и консультировал по процессам и маркетингу.",
        directActions: [
          "Создал концепцию бренда.",
          "Разработал айдентику.",
          "Структурировал коммуникации.",
          "Консультировал по процессам.",
          "Консультировал по маркетингу.",
        ],
        competencies: ["Бренд-стратегия", "Визуальная айдентика", "Коммуникации", "Консалтинг по процессам", "Маркетинг"],
        highlights: ["Система айдентики и коммуникационные материалы."],
      },
    },
  },
  {
    slug: "bsb-abrasivos",
    company: "BSB Abrasivos",
    relationship: "Consultoria",
    relationshipDetail: "Consultoria e projeto digital",
    roles: ["Criação visual", "Conceito", "Marketing", "Consultoria", "E-commerce"],
    summary:
      "Atuei na criação visual, no conceito e no apoio de marketing da BSB Abrasivos, além de prestar consultoria e participar da montagem do e-commerce.",
    directActions: [
      "Criei artes.",
      "Desenvolvi o conceito.",
      "Apoiei o marketing.",
      "Prestei consultoria.",
      "Participei da montagem do e-commerce.",
    ],
    competencies: ["Direção criativa", "Comunicação visual", "Marketing", "Consultoria", "Digital", "E-commerce"],
    highlights: ["Artes, conceito e estrutura de e-commerce."],
    media: [],
    featured: true,
    published: true,
    translations: {
      en: {
        relationship: "Consulting",
        relationshipDetail: "Consulting and digital project",
        roles: ["Visual creation", "Concept", "Marketing", "Consulting", "E-commerce"],
        summary:
          "I worked on visual creation, concept and marketing support for BSB Abrasivos, while also providing consulting and contributing to the e-commerce build.",
        directActions: [
          "Created artwork.",
          "Developed the concept.",
          "Supported marketing.",
          "Provided consulting.",
          "Contributed to the e-commerce build.",
        ],
        competencies: ["Creative direction", "Visual communication", "Marketing", "Consulting", "Digital", "E-commerce"],
        highlights: ["Artwork, concept and e-commerce structure."],
      },
      ru: {
        relationship: "Консалтинг",
        relationshipDetail: "Консалтинг и digital-проект",
        roles: ["Визуальные материалы", "Концепция", "Маркетинг", "Консалтинг", "Электронная коммерция"],
        summary:
          "Я работал над визуальными материалами, концепцией и маркетинговой поддержкой BSB Abrasivos, а также консультировал и участвовал в создании интернет-магазина.",
        directActions: [
          "Создавал графические материалы.",
          "Разработал концепцию.",
          "Поддерживал маркетинг.",
          "Консультировал.",
          "Участвовал в создании интернет-магазина.",
        ],
        competencies: ["Креативное руководство", "Визуальные коммуникации", "Маркетинг", "Консалтинг", "Digital", "Электронная коммерция"],
        highlights: ["Графические материалы, концепция и структура интернет-магазина."],
      },
    },
  },
];

export function localizeCareerEntry(
  item: CareerEntry,
  language: CareerLanguage,
): LocalizedCareerEntry {
  const { translations, ...base } = item;

  if (language === "pt") return base;

  const translation = translations[language];
  const relatedProject = item.relatedProjectSlugs?.length === 1
    ? cases.find((project) => project.slug === item.relatedProjectSlugs?.[0])
    : undefined;
  const localizedProject = relatedProject
    ? localizeCase(relatedProject, language)
    : undefined;

  return {
    ...base,
    company: translation.company ?? base.company,
    period: translation.period ?? base.period,
    relationship: translation.relationship,
    relationshipDetail: translation.relationshipDetail ?? base.relationshipDetail,
    roles: translation.roles,
    summary: translation.summary,
    directActions: translation.directActions,
    initiatives: translation.initiatives ?? base.initiatives,
    competencies: translation.competencies,
    highlights: translation.highlights ?? base.highlights,
    status: translation.status ?? base.status,
    relatedCompany: translation.relatedCompany ?? base.relatedCompany,
    cover: base.cover
      ? {
          ...base.cover,
          ...(localizedProject?.cover ?? {}),
          ...(translation.cover ?? {}),
        }
      : undefined,
    hero: base.hero
      ? {
          ...base.hero,
          ...(localizedProject?.hero ?? localizedProject?.cover ?? {}),
          ...(translation.hero ?? {}),
        }
      : undefined,
    media: base.media.map((media, index) => ({
      ...media,
      ...(localizedProject?.gallery[index] ?? {}),
      ...(translation.media?.[index] ?? {}),
    })),
  };
}

export const publishedCareerEntries = careerEntries.filter((item) => item.published);

export const featuredCareerEntries = publishedCareerEntries.filter((item) => item.featured);

export function getCareerEntry(slug: string) {
  return publishedCareerEntries.find((item) => item.slug === slug);
}

export function getNextCareerEntry(slug: string) {
  const index = publishedCareerEntries.findIndex((item) => item.slug === slug);

  if (index === -1 || publishedCareerEntries.length === 0) return undefined;

  return publishedCareerEntries[(index + 1) % publishedCareerEntries.length];
}

type CareerUiCopy = {
  index: {
    pageTitle: string;
    eyebrow: string;
    title: string;
    text: string;
    featuredLabel: string;
    featuredTitle: string;
    otherLabel: string;
    otherTitle: string;
  };
  card: {
    openEntry: string;
    viewRole: string;
    competenciesLabel: string;
    periodUnspecified: string;
  };
  page: {
    titleSuffix: string;
    allEntries: string;
    relationship: string;
    role: string;
    directActions: string;
    initiatives: string;
    workAndRecords: string;
    competencies: string;
    evidence: string;
    relatedProjects: string;
    relatedCompany: string;
    status: string;
    period: string;
    noInitiatives: string;
    noMedia: string;
    noEvidence: string;
    noRelatedProjects: string;
    nextEntry: string;
    contactEyebrow: string;
    contactTitle: string;
    contactCta: string;
  };
};

export const careerUiCopy: Record<CareerLanguage, CareerUiCopy> = {
  pt: {
    index: {
      pageTitle: "Trajetória — Lucas de Oliveira Andrade",
      eyebrow: "Carreira desde 2010",
      title: "Experiências construídas dentro dos negócios",
      text: "Da venda e do atendimento à gestão, ao marketing, à consultoria e à direção criativa — cada experiência mostra onde atuei e o que executei diretamente.",
      featuredLabel: "Experiências em destaque",
      featuredTitle: "Empresas e experiências em destaque",
      otherLabel: "Outras experiências",
      otherTitle: "Outras experiências e projetos",
    },
    card: {
      openEntry: "Ver minha atuação",
      viewRole: "Ver minha atuação",
      competenciesLabel: "Competências",
      periodUnspecified: "Período a confirmar",
    },
    page: {
      titleSuffix: "Trajetória de Lucas de Oliveira Andrade",
      allEntries: "Ver toda a trajetória",
      relationship: "Minha relação com a empresa",
      role: "Meu papel",
      directActions: "O que executei diretamente",
      initiatives: "Iniciativas e decisões",
      workAndRecords: "Trabalhos e registros visuais",
      competencies: "Competências demonstradas",
      evidence: "Resultados e evidências",
      relatedProjects: "Projetos relacionados",
      relatedCompany: "Empresa relacionada",
      status: "Status",
      period: "Período",
      noInitiatives: "As decisões confirmadas desta atuação estão registradas nas responsabilidades acima; não acrescentei iniciativas sem documentação.",
      noMedia: "Esta experiência permanece em formato editorial de texto enquanto os registros visuais originais não estão disponíveis para publicação.",
      noEvidence: "As evidências publicadas nesta versão são as responsabilidades e execuções descritas acima; não adicionei métricas sem documentação.",
      noRelatedProjects: "Não há outro projeto visual publicado e vinculado a esta experiência nesta versão.",
      nextEntry: "Próxima experiência",
      contactEyebrow: "Contato",
      contactTitle: "Minha trajetória pode contribuir com o próximo desafio.",
      contactCta: "Falar com Lucas",
    },
  },
  en: {
    index: {
      pageTitle: "Career — Lucas de Oliveira Andrade",
      eyebrow: "Career since 2010",
      title: "Experience built from inside real businesses",
      text: "From sales and customer service to management, marketing, consulting and creative direction — each experience shows where I worked and what I executed directly.",
      featuredLabel: "Featured experience",
      featuredTitle: "Featured companies and experience",
      otherLabel: "Other experience",
      otherTitle: "Other experience and projects",
    },
    card: {
      openEntry: "View my role",
      viewRole: "View my role",
      competenciesLabel: "Capabilities",
      periodUnspecified: "Period to be confirmed",
    },
    page: {
      titleSuffix: "Career of Lucas de Oliveira Andrade",
      allEntries: "View the full career",
      relationship: "My relationship with the company",
      role: "My role",
      directActions: "What I executed directly",
      initiatives: "Initiatives and decisions",
      workAndRecords: "Work and visual records",
      competencies: "Demonstrated capabilities",
      evidence: "Results and evidence",
      relatedProjects: "Related projects",
      relatedCompany: "Related company",
      status: "Status",
      period: "Period",
      noInitiatives: "The confirmed decisions in this role are recorded in the responsibilities above; I have not added undocumented initiatives.",
      noMedia: "This experience remains text-led while the original visual records are not available for publication.",
      noEvidence: "The evidence published in this version is represented by the responsibilities and execution described above; no undocumented metrics were added.",
      noRelatedProjects: "No other published visual project is linked to this experience in this version.",
      nextEntry: "Next experience",
      contactEyebrow: "Contact",
      contactTitle: "My experience can contribute to the next challenge.",
      contactCta: "Talk to Lucas",
    },
  },
  ru: {
    index: {
      pageTitle: "Карьера — Lucas de Oliveira Andrade",
      eyebrow: "Карьера с 2010 года",
      title: "Опыт, полученный внутри реального бизнеса",
      text: "От продаж и обслуживания клиентов до управления, маркетинга, консалтинга и креативного руководства — каждый этап показывает мою роль и работу, которую я выполнял лично.",
      featuredLabel: "Ключевой опыт",
      featuredTitle: "Ключевые компании и профессиональный опыт",
      otherLabel: "Другой опыт",
      otherTitle: "Другой опыт и проекты",
    },
    card: {
      openEntry: "Посмотреть мою роль",
      viewRole: "Посмотреть мою роль",
      competenciesLabel: "Компетенции",
      periodUnspecified: "Период уточняется",
    },
    page: {
      titleSuffix: "Карьера Lucas de Oliveira Andrade",
      allEntries: "Вся карьера",
      relationship: "Моя связь с компанией",
      role: "Моя роль",
      directActions: "Что я выполнял лично",
      initiatives: "Инициативы и решения",
      workAndRecords: "Работы и визуальные материалы",
      competencies: "Подтверждённые компетенции",
      evidence: "Результаты и подтверждения",
      relatedProjects: "Связанные проекты",
      relatedCompany: "Связанная компания",
      status: "Статус",
      period: "Период",
      noInitiatives: "Подтверждённые решения в этой работе отражены в обязанностях выше; неподтверждённые инициативы не добавлены.",
      noMedia: "Этот опыт представлен текстом, пока оригинальные визуальные материалы недоступны для публикации.",
      noEvidence: "В этой версии подтверждением служат описанные выше обязанности и выполненная работа; неподтверждённые метрики не добавлены.",
      noRelatedProjects: "В этой версии к данному опыту не привязан другой опубликованный визуальный проект.",
      nextEntry: "Следующий опыт",
      contactEyebrow: "Контакт",
      contactTitle: "Мой опыт может быть полезен в следующей профессиональной задаче.",
      contactCta: "Связаться с Lucas",
    },
  },
};
