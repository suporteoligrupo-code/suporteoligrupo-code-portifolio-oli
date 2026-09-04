import type { CareerLanguage, LocalizedCareerEntry } from "./career";

export type CareerVerification = "confirmed" | "partial";

export type CareerEditorialCopy = {
  relationshipNote?: string;
  context: string;
  disconnected: string;
  relation: string;
  solution: string;
  value: string;
  summary?: string;
  directActions?: string[];
  initiatives?: string[];
  highlights?: string[];
};

type CareerEditorialRecord = {
  verification: CareerVerification;
  withheldClaims?: string[];
  copy: Record<CareerLanguage, CareerEditorialCopy>;
};

export const careerNarrativeLabels: Record<
  CareerLanguage,
  {
    context: string;
    connection: string;
    disconnected: string;
    relation: string;
    solution: string;
    value: string;
  }
> = {
  pt: {
    context: "O contexto",
    connection: "A conexão que identifiquei",
    disconnected: "O que estava desconectado",
    relation: "Qual relação identifiquei",
    solution: "Como virou solução",
    value: "Valor buscado para o negócio",
  },
  en: {
    context: "The context",
    connection: "The connection I identified",
    disconnected: "What was disconnected",
    relation: "The relationship I identified",
    solution: "How it became a solution",
    value: "Value intended for the business",
  },
  ru: {
    context: "Контекст",
    connection: "Связь, которую я выявил",
    disconnected: "Что было разрознено",
    relation: "Какую взаимосвязь я увидел",
    solution: "Как это стало решением",
    value: "Ценность, заложенная для бизнеса",
  },
};

const careerEditorialEntries: Record<string, CareerEditorialRecord> = {
  "rico-games": {
    verification: "partial",
    withheldClaims: [
      "Relações externas ainda sem evidência proporcional permanecem fora da publicação.",
    ],
    copy: {
      pt: {
        relationshipNote:
          "Minha relação com a Rico Games é uma experiência profissional contínua desde 2010. Comecei no atendimento e nas vendas e, ao longo do tempo, ampliei minha atuação para marketing, gerência, decisões comerciais, produtos, conteúdo, parcerias e experiência de loja.",
        context:
          "A trajetória começou na linha de frente, ouvindo dúvidas, objeções e necessidades reais de quem comprava. Com a ampliação das responsabilidades, essas informações passaram a orientar decisões de comunicação, oferta, produto, conteúdo e ambiente físico.",
        disconnected:
          "Atendimento, argumentos de venda, escolha de produtos, promoções, conteúdo, parcerias e experiência de loja apareciam como frentes diferentes da operação.",
        relation:
          "Percebi que as dúvidas e objeções do cliente eram a matéria-prima para melhorar ofertas, campanhas, demonstrações, conteúdo e decisões dentro da loja.",
        solution:
          "Transformei essa leitura em participação na criação de campanhas e promoções, avaliação e desenvolvimento de produtos e ofertas, sites, vídeos, lives, lançamentos, ativações, melhorias na loja e estrutura para produção de conteúdo.",
        value:
          "A atuação foi estruturada para aproximar operação comercial, marketing e execução em torno da jornada do cliente e das necessidades do negócio.",
        summary:
          "Minha principal escola de negócios. Comecei no atendimento e nas vendas e ampliei minha atuação para marketing, gestão, produtos, conteúdo, parcerias e experiência de loja.",
        directActions: [
          "Atendi clientes e procurei compreender necessidades, dúvidas e objeções.",
          "Atuei em vendas e na construção de argumentos comerciais.",
          "Participei da criação de campanhas, promoções e testes comerciais.",
          "Avaliei e participei do desenvolvimento de produtos e ofertas.",
          "Atuei na criação de sites e experiências digitais.",
          "Produzi e apresentei vídeos, lives e conteúdos.",
          "Participei de lançamentos, ações e ativações.",
          "Desenvolvi parcerias no contexto da Rico Games.",
          "Participei do projeto de reforma e da evolução da experiência física da loja.",
          "Atuei na estruturação de ambiente e estúdio para produção de conteúdo.",
        ],
        initiatives: [
          "Desenvolvimento de produtos, ofertas e parcerias.",
          "Evolução da experiência física da loja.",
          "Estruturação de ambiente para produção de conteúdo.",
        ],
        highlights: [
          "Trajetória profissional contínua desde 2010.",
          "Ampliação da atuação da linha de frente comercial para marketing, gestão e decisões do negócio.",
          "Participação em campanhas, conteúdo, produtos, parcerias e evolução da experiência de loja.",
        ],
      },
      en: {
        relationshipNote:
          "My relationship with Rico Games is a continuous professional experience that began in 2010. I started in customer service and sales, then expanded into marketing, management, commercial decisions, products, content, partnerships and the in-store experience.",
        context:
          "My path began on the front line, listening to real customer questions, objections and needs. As my responsibilities grew, those insights began to inform communication, offers, products, content and the physical environment.",
        disconnected:
          "Customer service, sales arguments, product selection, promotions, content, partnerships and the in-store experience initially appeared to be separate parts of the operation.",
        relation:
          "I recognized that customer questions and objections could become practical input for better offers, campaigns, demonstrations, content and in-store decisions.",
        solution:
          "I turned that reading into hands-on participation in campaigns and promotions, product and offer development, websites, videos, live streams, launches, activations, store improvements and a dedicated content-production environment.",
        value:
          "The work was structured to connect commercial operations, marketing and execution around the customer journey and business needs.",
        summary:
          "My main school of business. I started in customer service and sales, then expanded into marketing, management, products, content, partnerships and the in-store experience.",
        directActions: [
          "Served customers and worked to understand their needs, questions and objections.",
          "Worked in sales and helped build commercial arguments.",
          "Contributed to campaigns, promotions and commercial tests.",
          "Evaluated and contributed to the development of products and offers.",
          "Worked on websites and digital experiences.",
          "Produced and presented videos, live streams and other content.",
          "Took part in launches, actions and activations.",
          "Developed partnerships in the context of Rico Games.",
          "Contributed to the store-renovation concept and the evolution of the physical retail experience.",
          "Helped structure an environment and studio for content production.",
        ],
        initiatives: [
          "Product, offer and partnership development.",
          "Evolution of the physical retail experience.",
          "A dedicated environment for content production.",
        ],
        highlights: [
          "A continuous professional path since 2010.",
          "A progression from front-line sales into marketing, management and business decisions.",
          "Participation in campaigns, content, products, partnerships and the evolution of the in-store experience.",
        ],
      },
      ru: {
        relationshipNote:
          "Моя работа с Rico Games — это непрерывный профессиональный опыт с 2010 года. Я начал с обслуживания клиентов и продаж, а затем расширил свою роль до маркетинга, управления, коммерческих решений, продуктов, контента, партнёрств и развития опыта в магазине.",
        context:
          "Мой путь начался на первой линии: я слышал реальные вопросы, сомнения и потребности покупателей. По мере роста ответственности эти наблюдения стали влиять на коммуникации, предложения, продукты, контент и физическое пространство магазина.",
        disconnected:
          "Обслуживание, аргументация в продажах, выбор продуктов, акции, контент, партнёрства и опыт в магазине поначалу воспринимались как отдельные направления.",
        relation:
          "Я увидел, что вопросы и возражения покупателей могут становиться практической основой для более точных предложений, кампаний, демонстраций, контента и решений в магазине.",
        solution:
          "Эта логика воплотилась в моём участии в кампаниях и промоакциях, разработке продуктов и предложений, сайтах, видео, прямых эфирах, запусках, активациях, обновлении магазина и создании пространства для производства контента.",
        value:
          "Работа была выстроена так, чтобы связать коммерческую деятельность, маркетинг и исполнение вокруг пути клиента и задач бизнеса.",
        summary:
          "Моя главная школа бизнеса. Я начал с обслуживания клиентов и продаж, а затем расширил работу на маркетинг, управление, продукты, контент, партнёрства и опыт в магазине.",
        directActions: [
          "Работал с клиентами и изучал их потребности, вопросы и возражения.",
          "Занимался продажами и участвовал в разработке коммерческой аргументации.",
          "Участвовал в создании кампаний, промоакций и коммерческих тестов.",
          "Оценивал продукты и участвовал в разработке продуктов и предложений.",
          "Работал над сайтами и цифровыми форматами.",
          "Создавал и представлял видео, прямые эфиры и другой контент.",
          "Участвовал в запусках, акциях и активациях.",
          "Развивал партнёрства в рамках Rico Games.",
          "Участвовал в концепции обновления магазина и развитии физического клиентского опыта.",
          "Помогал организовать пространство и студию для производства контента.",
        ],
        initiatives: [
          "Разработка продуктов, предложений и партнёрств.",
          "Развитие физического опыта в магазине.",
          "Пространство для производства контента.",
        ],
        highlights: [
          "Непрерывный профессиональный путь с 2010 года.",
          "Переход от работы с клиентами и продаж к маркетингу, управлению и бизнес-решениям.",
          "Участие в кампаниях, контенте, продуктах, партнёрствах и развитии опыта в магазине.",
        ],
      },
    },
  },
  "toy-show": {
    verification: "confirmed",
    copy: {
      pt: {
        relationshipNote:
          "Atuei por aproximadamente dois anos entre a gerência presencial e a prestação de serviço de marketing, enquanto mantinha minha continuidade profissional na Rico Games.",
        context:
          "A operação exigia acompanhamento presencial e, ao mesmo tempo, uma comunicação comercial capaz de apresentar produtos e manter a marca ativa em conteúdo e vídeo.",
        disconnected:
          "A rotina da loja, as necessidades da gerência e a comunicação de marketing poderiam seguir como trabalhos separados.",
        relation:
          "O acompanhamento diário da operação fornecia contexto real para decidir o que comunicar e como apresentar a marca.",
        solution:
          "Combinei gerência presencial, acompanhamento da operação, marketing, comunicação comercial, produção de conteúdo e apresentação de vídeos.",
        value:
          "O trabalho conectou a leitura direta da operação às decisões de comunicação, aproximando gestão e execução de marketing.",
      },
      en: {
        relationshipNote:
          "For approximately two years, I combined on-site management with marketing services while continuing my professional work at Rico Games.",
        context:
          "The operation required on-site oversight and, at the same time, commercial communication capable of presenting products and keeping the brand active through content and video.",
        disconnected:
          "Store routines, management needs and marketing communication could easily have remained separate streams of work.",
        relation:
          "Daily exposure to the operation provided concrete context for deciding what to communicate and how to present the brand.",
        solution:
          "I combined on-site management, operational follow-up, marketing, commercial communication, content production and video presentation.",
        value:
          "The work connected direct operational insight to communication decisions, bringing management and marketing execution closer together.",
      },
      ru: {
        relationshipNote:
          "Около двух лет я совмещал управление на месте с оказанием маркетинговых услуг, продолжая при этом профессиональную работу в Rico Games.",
        context:
          "Бизнесу требовалось присутствие в операционной работе и одновременно коммерческая коммуникация, способная представлять продукты и поддерживать активность бренда через контент и видео.",
        disconnected:
          "Повседневная работа магазина, управленческие задачи и маркетинговые коммуникации могли существовать как отдельные направления.",
        relation:
          "Ежедневное понимание операционной работы давало реальную основу для решений о том, что и как сообщать аудитории.",
        solution:
          "Я объединил управление на месте, сопровождение операционной работы, маркетинг, коммерческие коммуникации, производство контента и участие в видео.",
        value:
          "Работа связала непосредственное понимание операции с коммуникационными решениями, сближая управление и маркетинговое исполнение.",
      },
    },
  },
  "manifesto-bar": {
    verification: "confirmed",
    copy: {
      pt: {
        relationshipNote:
          "Atuo atualmente como consultor e prestador de serviço em comunicação e marketing, com participação em mídia, conteúdo audiovisual e análise de atrações e formatos para a casa.",
        context:
          "Uma casa com história, repertório de rock e experiência presencial precisa equilibrar tradição, programação, público, divulgação e capacidade de movimentar cada evento.",
        disconnected:
          "História da marca, bandas, formatos de evento, mídia paga, artes, vídeos e experiência presencial poderiam ser tratados como frentes isoladas.",
        relation:
          "A força da comunicação depende de conectar a identidade do Manifesto ao perfil do público e às decisões de programação da casa.",
        solution:
          "Atuo em consultoria de comunicação e marketing, tráfego pago, artes, vídeos, avaliação de bandas e análise de formatos de eventos.",
        value:
          "A atuação busca manter a divulgação coerente com a história da marca, a programação e a experiência presencial.",
      },
      en: {
        relationshipNote:
          "I currently work as a communication and marketing consultant and service provider, contributing to media, audiovisual content and the assessment of artists and event formats for the venue.",
        context:
          "A venue with a long history, a rock identity and a strong in-person experience must balance heritage, programming, audience, promotion and the ability to build momentum around each event.",
        disconnected:
          "Brand history, bands, event formats, paid media, artwork, videos and the in-person experience could be treated as isolated streams.",
        relation:
          "Communication becomes stronger when the Manifesto identity, audience profile and programming decisions are considered together.",
        solution:
          "I work across communication and marketing consulting, paid media, artwork, video, band assessment and the analysis of event formats.",
        value:
          "The work aims to keep promotion coherent with the venue's history, programming and in-person experience.",
      },
      ru: {
        relationshipNote:
          "Сейчас я работаю как консультант и исполнитель в сфере коммуникаций и маркетинга, участвуя в медиа, аудиовизуальном контенте, оценке артистов и форматов мероприятий для площадки.",
        context:
          "Площадке с историей, рок-идентичностью и сильным офлайн-опытом необходимо сочетать наследие бренда, программу, аудиторию, продвижение и способность создавать интерес к каждому событию.",
        disconnected:
          "История бренда, группы, форматы событий, платное продвижение, графика, видео и опыт на площадке могли восприниматься как отдельные направления.",
        relation:
          "Коммуникация становится сильнее, когда идентичность Manifesto, профиль аудитории и решения по программе рассматриваются вместе.",
        solution:
          "Я работаю с консалтингом по коммуникациям и маркетингу, платным продвижением, графикой, видео, оценкой групп и анализом форматов событий.",
        value:
          "Работа направлена на согласование продвижения с историей бренда, программой и офлайн-опытом.",
      },
    },
  },
  "urly-marketing": {
    verification: "confirmed",
    copy: {
      pt: {
        relationshipNote:
          "Criei a Urly Marketing como minha marca autoral para reunir estratégia, consultoria e comunicação em projetos de diferentes empresas.",
        context:
          "A marca precisava expressar uma atuação multidisciplinar sem se limitar à produção de peças e, ao mesmo tempo, assumir um compromisso social de forma objetiva e verificável.",
        disconnected:
          "Estratégia de negócio, comunicação criativa, consultoria e apoio à proteção animal poderiam parecer temas sem relação direta.",
        relation:
          "O valor gerado pelo trabalho também poderia sustentar um compromisso recorrente com uma causa importante para a marca.",
        solution:
          "Estruturei posicionamento, conceito e atuação da Urly Marketing e defini a destinação de 10% da renda bruta a iniciativas de proteção animal.",
        value:
          "A marca conecta trabalho profissional e impacto social por meio de uma regra simples, clara e incorporada ao próprio modelo de atuação.",
      },
      en: {
        relationshipNote:
          "I created Urly Marketing as my own brand, bringing strategy, consulting and communication together across projects for different companies.",
        context:
          "The brand needed to express multidisciplinary work without being reduced to visual production, while also making a clear and accountable social commitment.",
        disconnected:
          "Business strategy, creative communication, consulting and support for animal protection could appear to have little direct relationship.",
        relation:
          "The value created through professional work could also sustain a recurring commitment to a cause embedded in the brand.",
        solution:
          "I structured Urly Marketing's positioning, concept and work model and defined the allocation of 10% of gross revenue to animal-protection initiatives.",
        value:
          "The brand connects professional work and social impact through a simple, transparent rule built into the way it operates.",
      },
      ru: {
        relationshipNote:
          "Я создал Urly Marketing как собственный бренд, объединяющий стратегию, консалтинг и коммуникации в проектах для разных компаний.",
        context:
          "Бренду было важно показать многопрофильную работу, не сводя её только к созданию визуальных материалов, и одновременно зафиксировать понятное социальное обязательство.",
        disconnected:
          "Бизнес-стратегия, креативные коммуникации, консалтинг и поддержка защиты животных могли казаться не связанными между собой.",
        relation:
          "Ценность, создаваемая профессиональной работой, может также поддерживать постоянное обязательство перед важной для бренда инициативой.",
        solution:
          "Я сформировал позиционирование, концепцию и модель работы Urly Marketing и определил направление 10% валового дохода на инициативы по защите животных.",
        value:
          "Бренд связывает профессиональную работу и социальное влияние через простое и прозрачное правило, встроенное в саму модель деятельности.",
      },
    },
  },
  "divertida-geek": {
    verification: "confirmed",
    copy: {
      pt: {
        relationshipNote:
          "Minha relação com a Divertida Geek foi um projeto de marca em que atuei diretamente na identidade, no conceito visual e na produção de vídeos.",
        context:
          "A marca precisava deixar de depender de peças desconectadas e ganhar uma linguagem reconhecível também quando aparecesse em movimento.",
        disconnected:
          "Identidade visual, conceito de marca e vídeos poderiam ser produzidos sem uma mesma direção.",
        relation:
          "A presença da marca seria mais consistente se o sistema visual também orientasse ritmo, enquadramento e linguagem audiovisual.",
        solution:
          "Criei a identidade e o conceito visual e produzi vídeos alinhados à mesma direção.",
        value:
          "A base visual foi criada para dar coerência à apresentação da Divertida Geek em peças estáticas e conteúdo audiovisual.",
      },
      en: {
        relationshipNote:
          "My relationship with Divertida Geek was a brand project in which I worked directly on the identity, visual concept and video production.",
        context:
          "The brand needed to move beyond disconnected pieces and gain a recognizable language that would also work in motion.",
        disconnected:
          "Visual identity, brand concept and video could have been produced without a shared direction.",
        relation:
          "The brand would become more consistent if the visual system also informed the rhythm, framing and audiovisual language.",
        solution:
          "I created the identity and visual concept and produced videos aligned with the same direction.",
        value:
          "The visual foundation was created to give Divertida Geek consistency across static materials and audiovisual content.",
      },
      ru: {
        relationshipNote:
          "Моя работа с Divertida Geek была проектом бренда, в котором я непосредственно занимался айдентикой, визуальной концепцией и производством видео.",
        context:
          "Бренду было важно уйти от разрозненных материалов и получить узнаваемый язык, который работает и в движении.",
        disconnected:
          "Айдентика, концепция бренда и видео могли создаваться без единого направления.",
        relation:
          "Присутствие бренда становилось более цельным, если визуальная система также задавала ритм, кадрирование и язык видео.",
        solution:
          "Я создал айдентику и визуальную концепцию, а затем разработал видео в рамках той же системы.",
        value:
          "Визуальная основа была создана для последовательной подачи Divertida Geek в статичных и аудиовизуальных материалах.",
      },
    },
  },
  "josucas-eletronicos": {
    verification: "partial",
    withheldClaims: [
      "Negociação, implantação e operação da solução de crédito não são atribuídas a Lucas sem confirmação adicional.",
    ],
    copy: {
      pt: {
        relationshipNote:
          "Atuei em consultoria e prestação de serviço, conectando processos, estrutura, marketing e materiais comerciais da Josucas Eletrônicos.",
        context:
          "A operação precisava organizar comunicação e presença comercial e também avaliava formas de atender pessoas que encontravam barreiras para comprar um celular pelos meios tradicionais de crédito.",
        disconnected:
          "Processos internos, materiais de venda, comunicação digital e a dificuldade de acesso ao produto eram tratados como problemas distintos.",
        relation:
          "A barreira de crédito também era uma questão de oferta, jornada comercial e clareza de comunicação — não apenas de publicidade.",
        solution:
          "Prestei consultoria de processos, estrutura e marketing, criei materiais comerciais e desenvolvi o conceito de venda de celulares no boleto para pessoas com restrição de crédito, relacionando a oportunidade à PayJoy como solução a ser avaliada.",
        value:
          "A proposta foi estruturada para aproximar operação, comunicação e desenvolvimento da oportunidade comercial.",
        summary:
          "Atuei em consultoria de processos, estrutura e marketing, desenvolvi materiais comerciais e formulei um conceito de venda de celulares no boleto para pessoas com restrição de crédito, relacionando a oportunidade à PayJoy para avaliação.",
        directActions: [
          "Prestei consultoria de processos.",
          "Prestei consultoria de estrutura.",
          "Atuei no marketing e no apoio à presença digital.",
          "Criei cartões, folhetos e outros materiais comerciais.",
          "Desenvolvi o conceito de venda de celulares no boleto para pessoas com restrição de crédito.",
          "Relacionei a oportunidade à PayJoy como solução a ser avaliada.",
        ],
        initiatives: [
          "Conceito comercial voltado a pessoas com restrição de crédito.",
          "Indicação da PayJoy como referência de solução a ser avaliada pela operação.",
        ],
        highlights: [
          "Consultoria conectando processos, estrutura, marketing e comunicação comercial.",
          "Criação de materiais comerciais e apoio à presença digital.",
          "Desenvolvimento do conceito de oferta; negociação, implantação e operação não são atribuídas a mim nesta versão.",
        ],
      },
      en: {
        relationshipNote:
          "I worked as a consultant and service provider, connecting processes, business structure, marketing and commercial materials for Josucas Eletrônicos.",
        context:
          "The operation needed clearer communication and commercial presence while also considering ways to serve people who faced barriers when buying a mobile phone through traditional credit channels.",
        disconnected:
          "Internal processes, sales materials, digital communication and access to the product were being treated as separate problems.",
        relation:
          "The credit barrier was also a matter of offer design, commercial journey and communication clarity — not advertising alone.",
        solution:
          "I advised on processes, structure and marketing, created commercial materials and developed a mobile-phone payment concept for customers with credit restrictions, presenting PayJoy as a solution for the operation to assess.",
        value:
          "The proposal was structured to connect operations, communication and commercial-opportunity development.",
        summary:
          "I advised on processes, structure and marketing, developed commercial materials and formulated a mobile-phone payment concept for customers with credit restrictions, presenting PayJoy as a solution to be assessed.",
        directActions: [
          "Advised on processes.",
          "Advised on business structure.",
          "Worked on marketing and supported the digital presence.",
          "Created cards, leaflets and other commercial materials.",
          "Developed a mobile-phone payment concept for people with credit restrictions.",
          "Presented PayJoy as a solution for the operation to assess.",
        ],
        initiatives: [
          "A commercial concept for people with credit restrictions.",
          "PayJoy identified as a reference solution for operational assessment.",
        ],
        highlights: [
          "Consulting that connected processes, structure, marketing and commercial communication.",
          "Commercial materials and support for the digital presence.",
          "Development of the offer concept; negotiation, implementation and operation are not attributed to me in this version.",
        ],
      },
      ru: {
        relationshipNote:
          "Я работал как консультант и исполнитель, связывая процессы, структуру бизнеса, маркетинг и коммерческие материалы Josucas Eletrônicos.",
        context:
          "Компании требовались более организованные коммуникации и коммерческое присутствие, а также способы работать с людьми, которым было сложно купить телефон через традиционные кредитные каналы.",
        disconnected:
          "Внутренние процессы, материалы продаж, цифровые коммуникации и доступность продукта воспринимались как отдельные проблемы.",
        relation:
          "Кредитный барьер был также вопросом структуры предложения, коммерческого пути и ясности коммуникации, а не только рекламы.",
        solution:
          "Я консультировал по процессам, структуре и маркетингу, создавал коммерческие материалы и разработал концепцию покупки телефона с оплатой по boleto для людей с ограничениями по кредитной истории, предложив PayJoy как решение для оценки компанией.",
        value:
          "Предложение было выстроено так, чтобы связать операционную работу, коммуникации и развитие коммерческой возможности.",
        summary:
          "Я консультировал по процессам, структуре и маркетингу, создавал коммерческие материалы и сформулировал концепцию покупки телефона с оплатой по boleto для людей с ограничениями по кредитной истории, предложив PayJoy для дальнейшей оценки.",
        directActions: [
          "Консультировал по процессам.",
          "Консультировал по структуре бизнеса.",
          "Работал над маркетингом и поддерживал цифровое присутствие.",
          "Создавал карточки, листовки и другие коммерческие материалы.",
          "Разработал концепцию покупки телефона с оплатой по boleto для людей с ограничениями по кредитной истории.",
          "Предложил PayJoy как решение для оценки компанией.",
        ],
        initiatives: [
          "Коммерческая концепция для людей с ограничениями по кредитной истории.",
          "PayJoy как ориентир решения для дальнейшей оценки операцией.",
        ],
        highlights: [
          "Консалтинг, связавший процессы, структуру, маркетинг и коммерческие коммуникации.",
          "Коммерческие материалы и поддержка цифрового присутствия.",
          "Разработка концепции предложения; переговоры, внедрение и операционная работа в этой версии мне не приписываются.",
        ],
      },
    },
  },
  "metro-case": {
    verification: "confirmed",
    copy: {
      pt: {
        relationshipNote:
          "Criei e estruturei a Metro Case como uma marca com identidade própria, ligada ao mesmo grupo ou proprietário da Josucas Eletrônicos.",
        context:
          "A nova marca precisava ter conceito, comunicação, posicionamento e presença digital próprios, mantendo o vínculo empresarial com a Josucas apenas como contexto.",
        disconnected:
          "O vínculo empresarial com a Josucas e a necessidade de diferenciação da nova marca pareciam objetivos opostos.",
        relation:
          "Identidade, posicionamento e comunicação poderiam diferenciar a Metro Case sem esconder a relação empresarial com a Josucas.",
        solution:
          "Criei marca, conceito, comunicação, posicionamento, presença digital e projeto de site, registrando o vínculo com a Josucas de forma secundária.",
        value:
          "O sistema foi estruturado para apresentar a Metro Case com identidade própria e registrar o vínculo com a Josucas de forma secundária.",
      },
      en: {
        relationshipNote:
          "I created and structured Metro Case as a distinct brand connected to the same group or owner as Josucas Eletrônicos, while giving it independent positioning and presence.",
        context:
          "The new brand needed its own concept, communication, positioning and digital presence while keeping its business link to Josucas as secondary context.",
        disconnected:
          "The corporate link to Josucas and the need to differentiate the new brand could appear to be opposing goals.",
        relation:
          "Identity, positioning and communication could differentiate Metro Case without hiding its business relationship with Josucas.",
        solution:
          "I created the brand, concept, communication, positioning, digital presence and website project, keeping the Josucas relationship as secondary context.",
        value:
          "The system was structured to present Metro Case with its own identity while recording the Josucas link as secondary context.",
      },
      ru: {
        relationshipNote:
          "Я создал и структурировал Metro Case как самостоятельный бренд, связанный с той же группой или владельцем, что и Josucas Eletrônicos, но с собственным позиционированием и присутствием.",
        context:
          "Новому бренду были нужны собственные концепция, коммуникации, позиционирование и цифровое присутствие, а связь с Josucas оставалась вторичным контекстом.",
        disconnected:
          "Корпоративная связь с Josucas и необходимость отличать новый бренд могли казаться противоположными задачами.",
        relation:
          "Айдентика, позиционирование и коммуникации могли отличать Metro Case, не скрывая деловую связь с Josucas.",
        solution:
          "Я создал бренд, концепцию, коммуникации, позиционирование, цифровое присутствие и проект сайта, оставив связь с Josucas вторичным контекстом.",
        value:
          "Система была выстроена для самостоятельной подачи Metro Case с деликатным указанием связи с Josucas.",
      },
    },
  },
  "reserva-ibirapitanga-revista-saua": {
    verification: "confirmed",
    copy: {
      pt: {
        relationshipNote:
          "Atuei em consultoria de comunicação e marketing para a Reserva Ibirapitanga e participei da produção editorial e da diagramação da Revista Sauá.",
        context:
          "O projeto reunia comunicação institucional, organização de conteúdo e apresentação editorial em uma publicação que precisava manter clareza e identidade entre diferentes materiais.",
        disconnected:
          "Consultoria de comunicação, conteúdo, hierarquia de informação e diagramação poderiam avançar sem uma direção editorial comum.",
        relation:
          "A revista poderia funcionar como o ponto de encontro entre estratégia de comunicação, organização do conteúdo e experiência de leitura.",
        solution:
          "Participei da produção editorial e da diagramação da Revista Sauá, organizei conteúdos e trabalhei sua apresentação visual.",
        value:
          "O trabalho foi estruturado para dar forma editorial, sequência e legibilidade aos conteúdos da publicação.",
      },
      en: {
        relationshipNote:
          "I advised Reserva Ibirapitanga on communication and marketing and contributed to Revista Sauá's editorial production and layout.",
        context:
          "The project brought together institutional communication, content organization and editorial presentation in a publication that needed clarity and consistency across different materials.",
        disconnected:
          "Communication consulting, content, information hierarchy and layout could have developed without a shared editorial direction.",
        relation:
          "The magazine could become the meeting point between communication strategy, content organization and the reading experience.",
        solution:
          "I contributed to Revista Sauá's editorial production and layout, organized content and worked on its visual presentation.",
        value:
          "The work was structured to give the publication's content editorial form, sequence and readability.",
      },
      ru: {
        relationshipNote:
          "Я консультировал Reserva Ibirapitanga по коммуникациям и маркетингу и участвовал в редакционном производстве и вёрстке Revista Sauá.",
        context:
          "Проект объединял институциональные коммуникации, организацию контента и редакционную подачу в издании, которому были нужны ясность и последовательность между разными материалами.",
        disconnected:
          "Консалтинг по коммуникациям, содержание, иерархия информации и вёрстка могли развиваться без общей редакционной логики.",
        relation:
          "Журнал мог стать точкой соединения стратегии коммуникации, организации содержания и читательского опыта.",
        solution:
          "Я участвовал в редакционном производстве и вёрстке Revista Sauá, организовывал контент и работал над его визуальной подачей.",
        value:
          "Работа была выстроена так, чтобы придать содержанию издания редакционную форму, последовательность и удобство чтения.",
      },
    },
  },
  "oliveira-transportes": {
    verification: "confirmed",
    copy: {
      pt: {
        relationshipNote:
          "Minha atuação reuniu criação de marca, identidade, comunicação e consultoria de processos, estrutura e marketing para a Oliveira Transportes e Mudanças.",
        context:
          "Em serviços de transporte e mudança, a decisão do cliente depende tanto da capacidade operacional quanto da percepção de cuidado, confiança, proximidade e organização.",
        disconnected:
          "Caminhão, logística, atendimento, cuidado com os bens e apresentação da empresa poderiam parecer apenas atributos separados do serviço.",
        relation:
          "Esses elementos formavam uma mesma promessa: organizar uma mudança com segurança, proximidade e responsabilidade.",
        solution:
          "Transformei essa promessa em conceito de marca, identidade, comunicação e recomendações de processos e marketing.",
        value:
          "A solução foi estruturada para apresentar organização, cuidado e clareza antes mesmo do primeiro atendimento.",
      },
      en: {
        relationshipNote:
          "My work for Oliveira Transportes e Mudanças combined brand creation, identity, communication and consulting on processes, structure and marketing.",
        context:
          "In transport and moving services, a customer's decision depends on operational capability as well as the perception of care, trust, proximity and organization.",
        disconnected:
          "Vehicles, logistics, customer service, care for belongings and company presentation could appear to be separate attributes of the service.",
        relation:
          "Together, those elements formed one promise: to organize a move with safety, proximity and responsibility.",
        solution:
          "I translated that promise into a brand concept, identity, communication and recommendations for processes and marketing.",
        value:
          "The solution was structured to communicate organization, care and clarity before the first customer interaction.",
      },
      ru: {
        relationshipNote:
          "Моя работа для Oliveira Transportes e Mudanças объединила создание бренда, айдентику, коммуникации и консалтинг по процессам, структуре и маркетингу.",
        context:
          "В услугах перевозки и переезда решение клиента зависит не только от операционных возможностей, но и от ощущения заботы, доверия, близости и организованности.",
        disconnected:
          "Транспорт, логистика, обслуживание, бережное отношение к вещам и презентация компании могли казаться отдельными характеристиками услуги.",
        relation:
          "Вместе они формировали единое обещание: организовать переезд безопасно, внимательно и ответственно.",
        solution:
          "Я превратил это обещание в концепцию бренда, айдентику, коммуникации и рекомендации по процессам и маркетингу.",
        value:
          "Решение было выстроено так, чтобы передавать организованность, внимание и ясность ещё до первого контакта с клиентом.",
      },
    },
  },
  "bsb-abrasivos": {
    verification: "confirmed",
    copy: {
      pt: {
        relationshipNote:
          "Atuei em consultoria e projeto digital, com criação visual, desenvolvimento de conceito, marketing, projeto de e-commerce e organização comercial da comunicação da BSB Abrasivos.",
        context:
          "Produtos técnicos precisam preservar precisão e variedade sem obrigar o comprador a decifrar uma comunicação excessivamente especializada.",
        disconnected:
          "Características técnicas, aplicações do produto, materiais comerciais, marketing e jornada do e-commerce poderiam ser organizados por lógicas diferentes.",
        relation:
          "A comunicação precisava traduzir informação técnica em entendimento comercial sem perder credibilidade.",
        solution:
          "Criei artes e conceito, apoiei o marketing, prestei consultoria e atuei no projeto de e-commerce e na organização comercial da comunicação.",
        value:
          "O trabalho foi estruturado para tornar comunicação, navegação e entendimento comercial do portfólio técnico mais claros.",
      },
      en: {
        relationshipNote:
          "I worked on consulting and a digital project for BSB Abrasivos, covering visual creation, concept development, marketing, the e-commerce project and the commercial organization of communication.",
        context:
          "Technical products need to preserve precision and variety without forcing buyers to decode overly specialized communication.",
        disconnected:
          "Technical characteristics, product applications, commercial materials, marketing and the e-commerce journey could have been organized through different logics.",
        relation:
          "Communication needed to translate technical information into commercial understanding without losing credibility.",
        solution:
          "I created artwork and concept, supported marketing, provided consulting and worked on the e-commerce project and commercial organization of communication.",
        value:
          "The work was structured to clarify communication, navigation and the commercial understanding of the technical portfolio.",
      },
      ru: {
        relationshipNote:
          "Я работал над консалтингом и digital-проектом BSB Abrasivos: создавал визуальные материалы и концепцию, поддерживал маркетинг, проект интернет-магазина и коммерческую организацию коммуникаций.",
        context:
          "Технические продукты должны сохранять точность и разнообразие, не заставляя покупателя разбираться в чрезмерно специализированной коммуникации.",
        disconnected:
          "Технические характеристики, области применения, коммерческие материалы, маркетинг и путь в интернет-магазине могли быть организованы по разным принципам.",
        relation:
          "Коммуникации должны были переводить техническую информацию в понятную коммерческую форму, не теряя доверия.",
        solution:
          "Я создавал графические материалы и концепцию, поддерживал маркетинг, консультировал и работал над проектом интернет-магазина и коммерческой организацией коммуникаций.",
        value:
          "Работа была выстроена для более ясной коммуникации, навигации и коммерческого понимания технического ассортимента.",
      },
    },
  },
};

export function getCareerEditorial(slug: string, language: CareerLanguage) {
  return careerEditorialEntries[slug]?.copy[language];
}

export function getCareerVerification(slug: string) {
  const record = careerEditorialEntries[slug];

  if (!record) return undefined;

  return {
    verification: record.verification,
    withheldClaims: record.withheldClaims ?? [],
  };
}

export function reviewCareerEntry(
  entry: LocalizedCareerEntry,
  language: CareerLanguage,
): LocalizedCareerEntry {
  const editorial = getCareerEditorial(entry.slug, language);

  if (!editorial) return entry;

  return {
    ...entry,
    summary: editorial.summary ?? entry.summary,
    directActions: editorial.directActions ?? entry.directActions,
    initiatives: editorial.initiatives ?? entry.initiatives,
    highlights: editorial.highlights ?? entry.highlights,
  };
}
