export type CaseImage = {
  src: string;
  alt: string;
  label: string;
  position?: string;
  fit?: "cover" | "contain";
};

export type OliCase = {
  slug: string;
  number: string;
  client: string;
  shortName: string;
  sector: string;
  location: string;
  year: string;
  status: string;
  headline: string;
  summary: string;
  challenge: string;
  direction: string;
  result: string;
  services: string[];
  deliverables: string[];
  cover: CaseImage;
  gallery: CaseImage[];
  accent: string;
  accentSoft: string;
  ink: string;
  cardTone: "light" | "dark";
  size: "wide" | "standard" | "compact";
  liveUrl?: string;
};

export const cases: OliCase[] = [
  {
    slug: "gru-kpop-anime",
    number: "01",
    client: "GRU KPOP Anime",
    shortName: "GRU KPOP",
    sector: "Varejo · cultura pop",
    location: "Guarulhos · SP",
    year: "2026",
    status: "Marca e site publicados",
    headline: "Fandom que vira estilo.",
    summary:
      "Uma marca completa para reunir K-pop, anime, moda, cosplay e colecionáveis em uma experiência jovem, comercial e reconhecível.",
    challenge:
      "Organizar universos visuais muito diferentes sem deixar a loja genérica, infantilizada ou presa a uma única categoria de produto.",
    direction:
      "Criamos o território Universo Pop: base clara, energia quente, grafismos editoriais e uma camada kawai controlada. A mesma lógica orienta marca, conteúdo, cartão e navegação do site.",
    result:
      "A GRU KPOP passou a se apresentar como uma marca inteira — com assinatura própria, sistema visual consistente e experiência digital preparada para vender e criar comunidade.",
    services: ["Estratégia", "Identidade visual", "Sistema de marca", "Conteúdo", "Site"],
    deliverables: [
      "Direção criativa Universo Pop",
      "Logotipo vetorizado e variações",
      "Paleta, tipografia, grafismos e stickers",
      "Assinatura e bordão de campanha",
      "Cartões horizontal e vertical",
      "Kit inicial de Instagram",
      "Site responsivo publicado",
    ],
    cover: {
      src: "/cases/gru-kpop-anime/site-home.jpg",
      alt: "Página inicial do site publicado da GRU KPOP Anime",
      label: "Site publicado",
      position: "top center",
    },
    gallery: [
      {
        src: "/portfolio/gru-sistema-visual.webp",
        alt: "Sistema visual desenvolvido para a GRU KPOP Anime",
        label: "Sistema visual",
        position: "top center",
      },
      {
        src: "/portfolio/gru-kpop-feed-aprovado.jpg",
        alt: "Feed aprovado para a GRU KPOP Anime",
        label: "Conteúdo para Instagram",
        position: "top center",
      },
    ],
    accent: "#eba32d",
    accentSoft: "#f7f1e7",
    ink: "#323131",
    cardTone: "light",
    size: "wide",
    liveUrl: "https://gru-kpop-anime.vercel.app/",
  },
  {
    slug: "studio-e",
    number: "02",
    client: "Studio E",
    shortName: "Studio E",
    sector: "Beleza · autocuidado",
    location: "Guarulhos · SP",
    year: "2026",
    status: "Marca e site publicados",
    headline: "Sofisticação antes do atendimento.",
    summary:
      "Uma presença elegante e acolhedora para traduzir a qualidade do atendimento em cada ponto de contato.",
    challenge:
      "Fazer a percepção de valor começar antes do agendamento e manter o mesmo refinamento no material físico e na experiência digital.",
    direction:
      "Partimos de uma paleta vinho profunda, tipografia de assinatura e composições limpas para construir uma marca feminina sem clichês e premium sem distância.",
    result:
      "Cartão e site agora trabalham juntos para apresentar o Studio E com clareza, delicadeza e uma sensação consistente de cuidado.",
    services: ["Identidade visual", "Direção de arte", "Cartão", "Site"],
    deliverables: [
      "Sistema visual",
      "Cartões horizontal e vertical",
      "Direção de acabamento premium",
      "Apresentação comercial",
      "Site responsivo publicado",
    ],
    cover: {
      src: "/portfolio/studio-e-cartao.webp",
      alt: "Mockup realista do cartão premium desenvolvido para o Studio E",
      label: "Mockup do cartão",
    },
    gallery: [
      {
        src: "/cases/studio-e/site.jpg",
        alt: "Página inicial do site do Studio E",
        label: "Experiência digital",
        position: "top center",
      },
      {
        src: "/portfolio/studio-e-cartao.jpg",
        alt: "Detalhes do cartão criado para o Studio E",
        label: "Aplicação da identidade",
      },
    ],
    accent: "#8b173b",
    accentSoft: "#ead9dc",
    ink: "#4c0015",
    cardTone: "light",
    size: "standard",
    liveUrl: "https://studio-e-two.vercel.app/",
  },
  {
    slug: "rico-games",
    number: "03",
    client: "Rico Games",
    shortName: "Rico Games",
    sector: "Games · tecnologia",
    location: "Brasil",
    year: "2026",
    status: "Identidade em desenvolvimento",
    headline: "Gamer sem cair no gamer genérico.",
    summary:
      "Uma direção tecnológica e comercial para transformar um nome forte em presença de marca.",
    challenge:
      "Criar energia gamer sem repetir o repertório óbvio de neon, excesso de efeitos e comunicação visual desorganizada.",
    direction:
      "Construímos um sistema modular de alto contraste, com códigos de cor, tipografia condensada e peças que organizam informação e produto com ritmo.",
    result:
      "A rota criativa dá à Rico Games um território próprio, preparado para campanhas, lançamentos e uma futura experiência digital.",
    services: ["Direção criativa", "Identidade visual", "Conteúdo"],
    deliverables: [
      "Direção visual",
      "Logotipo e assinatura",
      "Sistema cromático",
      "Templates de campanha",
      "Conteúdo comercial",
    ],
    cover: {
      src: "/portfolio/rico-games-hyperpop.jpg",
      alt: "Sistema visual desenvolvido para a Rico Games",
      label: "Identidade visual",
      position: "top center",
      fit: "contain",
    },
    gallery: [
      {
        src: "/portfolio/rico-games-gta6-preview.jpg",
        alt: "Peça de campanha criada para a Rico Games",
        label: "Campanha de produto",
      },
      {
        src: "/portfolio/rico-games-logo-oficial.png",
        alt: "Logotipo da Rico Games",
        label: "Assinatura visual",
      },
    ],
    accent: "#b9d932",
    accentSoft: "#151817",
    ink: "#f5f3ec",
    cardTone: "dark",
    size: "wide",
  },
  {
    slug: "josucas-eletronicos",
    number: "04",
    client: "Josucas Eletrônicos",
    shortName: "Josucas",
    sector: "Tecnologia · varejo",
    location: "Guarulhos · SP",
    year: "2026",
    status: "Identidade e site publicados",
    headline: "Tecnologia ligada à vida real.",
    summary:
      "Uma atualização de presença para uma loja local que reúne produtos, assistência e condições acessíveis de compra.",
    challenge:
      "Evoluir a comunicação sem romper o reconhecimento da marca já conhecida e equilibrar tecnologia premium com apelo comercial popular.",
    direction:
      "A rota Tech Acessível em Movimento combina base grafite, vermelho luminoso, produto em primeiro plano e uma hierarquia direta para ofertas e serviços.",
    result:
      "O sistema mantém a identidade original, mas eleva o acabamento de site, conteúdo e materiais para apresentar uma operação mais organizada e confiável.",
    services: ["Estratégia", "Refinamento visual", "Conteúdo", "Site"],
    deliverables: [
      "Auditoria e direção criativa",
      "Vetorização técnica do logo",
      "Sistema visual e slogan",
      "Cartão de visita",
      "Kit inicial de Instagram",
      "Apresentação de identidade",
      "Site responsivo publicado",
    ],
    cover: {
      src: "/cases/josucas/produtos.avif",
      alt: "Direção de produto para o site da Josucas Eletrônicos",
      label: "E-commerce local",
    },
    gallery: [
      {
        src: "/cases/josucas/assistencia.avif",
        alt: "Comunicação do serviço de assistência da Josucas",
        label: "Arquitetura de serviços",
      },
      {
        src: "/cases/josucas/atendimento.avif",
        alt: "Imagem de atendimento no site da Josucas",
        label: "Presença local",
      },
      {
        src: "/cases/josucas/logo.webp",
        alt: "Logotipo da Josucas Eletrônicos",
        label: "Marca preservada",
      },
    ],
    accent: "#ef1f32",
    accentSoft: "#111113",
    ink: "#f4f3ef",
    cardTone: "dark",
    size: "standard",
    liveUrl: "https://josucas-eletronicos-guarulhos.suporte-oligrupo.chatgpt.site",
  },
  {
    slug: "manifesto-bar",
    number: "05",
    client: "Manifesto Bar",
    shortName: "Manifesto",
    sector: "Entretenimento · rock",
    location: "São Paulo · SP",
    year: "2026",
    status: "Site publicado",
    headline: "Onde o rock vive no Brasil.",
    summary:
      "Uma experiência digital cinematográfica para um palco com história, agenda intensa e identidade própria.",
    challenge:
      "Transformar décadas de memória e energia ao vivo em uma navegação contemporânea, sem perder a força crua do rock.",
    direction:
      "Usamos palco, fumaça, dourado envelhecido, preto e movimento para criar uma experiência que começa como show e conduz para agenda, história e visita.",
    result:
      "O novo site apresenta o Manifesto como destino cultural, organiza sua programação e transforma arquivo, atmosfera e serviço em uma única narrativa.",
    services: ["Estratégia digital", "UX/UI", "Direção de arte", "Desenvolvimento"],
    deliverables: [
      "Arquitetura de informação",
      "Direção visual cinematográfica",
      "Página inicial imersiva",
      "Agenda de eventos",
      "Arquivo de artistas",
      "Site responsivo publicado",
    ],
    cover: {
      src: "/cases/manifesto/palco.webp",
      alt: "Palco usado na experiência digital do Manifesto Bar",
      label: "Experiência imersiva",
    },
    gallery: [
      {
        src: "/cases/manifesto/ambiente.webp",
        alt: "Ambiente do Manifesto Bar",
        label: "O espaço",
      },
      {
        src: "/cases/manifesto/evento.jpg",
        alt: "Evento apresentado na agenda do Manifesto Bar",
        label: "Agenda ao vivo",
      },
      {
        src: "/cases/manifesto/simbolo.webp",
        alt: "Símbolo dourado do Manifesto Bar",
        label: "Memória de marca",
      },
    ],
    accent: "#c39b53",
    accentSoft: "#100f0e",
    ink: "#f2ece2",
    cardTone: "dark",
    size: "standard",
    liveUrl: "https://manifesto-bar-sp-2026.suporte-oligrupo.chatgpt.site",
  },
  {
    slug: "metro-case",
    number: "06",
    client: "Metro Case",
    shortName: "Metro Case",
    sector: "Celulares · acessórios",
    location: "São Paulo · SP",
    year: "2026",
    status: "Landing page publicada",
    headline: "Da estação para a compra.",
    summary:
      "Uma landing page de varejo construída para transformar localização, condição de pagamento e produto em ação imediata.",
    challenge:
      "Explicar uma oferta sensível de crédito com clareza, destacar as lojas físicas e evitar que a campanha parecesse apenas mais uma promoção de celular.",
    direction:
      "A estética usa o ritmo da Linha Azul, preto e amarelo como sinalização e uma jornada curta: entender, consultar e encontrar a unidade.",
    result:
      "A página organiza argumento, condições e contato com responsabilidade, criando um caminho comercial direto para a equipe da Metro Case.",
    services: ["Landing page", "UX/UI", "Copy", "Desenvolvimento"],
    deliverables: [
      "Estratégia da campanha",
      "Copy e hierarquia da oferta",
      "Direção visual inspirada no metrô",
      "Seção de localização das lojas",
      "Landing page responsiva publicada",
    ],
    cover: {
      src: "/cases/metro-case/site-home.jpg",
      alt: "Página inicial da landing page publicada da Metro Case",
      label: "Landing page publicada",
      position: "top center",
    },
    gallery: [
      {
        src: "/cases/metro-case/marca.jpg",
        alt: "Marca da Metro Case",
        label: "Identidade",
      },
      {
        src: "/cases/metro-case/campanha.webp",
        alt: "Peça da campanha de acessórios Metro Case",
        label: "Conteúdo comercial",
      },
    ],
    accent: "#f0c400",
    accentSoft: "#111210",
    ink: "#fffdf4",
    cardTone: "dark",
    size: "compact",
    liveUrl: "https://metro-case-sao-paulo.suporte-oligrupo.chatgpt.site",
  },
  {
    slug: "oliveira-transportes",
    number: "07",
    client: "Oliveira Transportes",
    shortName: "Oliveira",
    sector: "Logística · transportes",
    location: "Grande São Paulo",
    year: "2026",
    status: "Site publicado",
    headline: "Movemos o que importa.",
    summary:
      "Uma presença simples, firme e próxima para apresentar fretes, mudanças, coletas e entregas com clareza.",
    challenge:
      "Dar forma profissional a um serviço baseado em confiança, cuidado e resposta rápida, sem complicar a solicitação de orçamento.",
    direction:
      "Construímos uma experiência objetiva, com fotografia de rota, tipografia robusta e chamadas que conduzem naturalmente ao contato.",
    result:
      "O site reúne serviços, processo, abrangência e dúvidas em uma narrativa comercial que reduz incerteza e aproxima a conversa.",
    services: ["Posicionamento", "UX/UI", "Copy", "Site"],
    deliverables: [
      "Arquitetura de conteúdo",
      "Mensagem comercial",
      "Direção visual",
      "Jornada de orçamento",
      "Site responsivo publicado",
    ],
    cover: {
      src: "/cases/oliveira-transportes/hero.webp",
      alt: "Caminhão usado na comunicação da Oliveira Transportes",
      label: "Site institucional",
    },
    gallery: [
      {
        src: "/cases/oliveira-transportes/logo.jpg",
        alt: "Logotipo da Oliveira Transportes",
        label: "Marca original",
      },
    ],
    accent: "#d9ff43",
    accentSoft: "#18221c",
    ink: "#f5f7ef",
    cardTone: "dark",
    size: "standard",
    liveUrl: "https://oliveira-transportes.suporte-oligrupo.chatgpt.site",
  },
  {
    slug: "score-business-school",
    number: "08",
    client: "Score Business School",
    shortName: "Score",
    sector: "Educação executiva",
    location: "Guarulhos · SP",
    year: "2026",
    status: "Conceito digital desenvolvido",
    headline: "Decida com números. Conduza com clareza.",
    summary:
      "Um conceito digital de autoridade para uma escola de negócios voltada a quem responde pelo resultado.",
    challenge:
      "Apresentar formação econômico-financeira com profundidade e desejo, sem recorrer à estética genérica de cursos online.",
    direction:
      "A experiência combina fotografia urbana, linguagem editorial, brasão e uma jornada organizada a partir dos problemas reais de gestão.",
    result:
      "O conceito posiciona a Score como escola presencial de alto nível e transforma catálogo, metodologia e autoridade em decisão de matrícula.",
    services: ["Estratégia", "UX/UI", "Copy", "Conceito de site"],
    deliverables: [
      "Posicionamento digital",
      "Arquitetura por desafios de negócio",
      "Direção visual editorial",
      "Páginas de formações",
      "Protótipo responsivo navegável",
    ],
    cover: {
      src: "/cases/score/hero.webp",
      alt: "Direção visual do conceito digital da Score Business School",
      label: "Conceito de autoridade",
    },
    gallery: [
      {
        src: "/cases/score/mobile.webp",
        alt: "Versão mobile do conceito Score Business School",
        label: "Experiência mobile",
      },
      {
        src: "/cases/score/brasao.png",
        alt: "Brasão da Score Business School",
        label: "Ativo de marca",
      },
    ],
    accent: "#ba7b35",
    accentSoft: "#101719",
    ink: "#f2eee4",
    cardTone: "dark",
    size: "wide",
  },
  {
    slug: "eletrotech-isa",
    number: "09",
    client: "Eletrotech ISA",
    shortName: "Eletrotech",
    sector: "Assistência técnica · games",
    location: "Guarulhos · SP",
    year: "2026",
    status: "Marca e site publicados",
    headline: "Precisão que protege o desempenho.",
    summary:
      "Uma identidade técnica e premium para manutenção de consoles, controles e acessórios.",
    challenge:
      "Padronizar uma comunicação já existente e demonstrar especialização sem cair no visual agressivo ou no neon gamer de sempre.",
    direction:
      "A rota Precisão de Alta Performance usa carbono, grafite, laranja ISA, microgrades e linguagem de diagnóstico para construir autoridade técnica.",
    result:
      "Marca, cartão, conteúdo e site passaram a compartilhar a mesma lógica visual: ordem, controle, detalhe e confiança no reparo.",
    services: ["Identidade visual", "Sistema de marca", "Conteúdo", "Site"],
    deliverables: [
      "Direção criativa",
      "Vetorização fiel do logo",
      "Sistema visual completo",
      "Cartão com especificação de acabamento",
      "Kit inicial de Instagram",
      "Apresentação da identidade",
      "Site responsivo publicado",
    ],
    cover: {
      src: "/cases/eletrotech-isa/sistema-visual.jpg",
      alt: "Sistema visual aprovado para a Eletrotech ISA",
      label: "Identidade visual",
      fit: "contain",
    },
    gallery: [
      {
        src: "/cases/eletrotech-isa/feed.jpg",
        alt: "Feed desenvolvido para a Eletrotech ISA",
        label: "Conteúdo para Instagram",
      },
      {
        src: "/cases/eletrotech-isa/post-controle.webp",
        alt: "Post sobre manutenção de controle da Eletrotech ISA",
        label: "Conteúdo educativo",
      },
    ],
    accent: "#e24c13",
    accentSoft: "#0b0d0f",
    ink: "#f4f1e8",
    cardTone: "dark",
    size: "wide",
    liveUrl: "https://eletrotech-isa-guarulhos.vercel.app/",
  },
  {
    slug: "dona-girafa",
    number: "10",
    client: "Dona Girafa",
    shortName: "Dona Girafa",
    sector: "Moda profissional · e-commerce",
    location: "Guarulhos · SP",
    year: "2026",
    status: "E-commerce publicado",
    headline: "Vista o cuidado.",
    summary:
      "Uma experiência de compra acolhedora e expressiva para uniformes que acompanham a rotina de quem cuida.",
    challenge:
      "Organizar catálogo, personalização e compra sem perder a personalidade afetiva da marca ou deixar a navegação pesada.",
    direction:
      "A experiência equilibra produto, histórias e utilidade com uma paleta quente, formas orgânicas e uma linguagem próxima de quem vive a profissão.",
    result:
      "O novo e-commerce transforma produto em expressão pessoal e cria uma jornada mais clara do primeiro olhar à escolha da peça.",
    services: ["Estratégia digital", "UX/UI", "Direção de arte", "E-commerce"],
    deliverables: [
      "Arquitetura do catálogo",
      "Direção visual",
      "Jornada de produto",
      "Conteúdo institucional",
      "Experiência responsiva publicada",
    ],
    cover: {
      src: "/cases/dona-girafa/site-home.jpg",
      alt: "Página inicial do e-commerce publicado da Dona Girafa",
      label: "E-commerce publicado",
      position: "top center",
    },
    gallery: [
      {
        src: "https://dona-girafa-vista-o-cuidado.vercel.app/assets/dona-girafa/fachada-loja-guarulhos.webp",
        alt: "Fachada da loja Dona Girafa",
        label: "Presença física",
      },
      {
        src: "https://dona-girafa-vista-o-cuidado.vercel.app/assets/dona-girafa/dona-girafa-bastidores.webp",
        alt: "Bastidores da Dona Girafa",
        label: "História da marca",
      },
    ],
    accent: "#e86f5a",
    accentSoft: "#f6f0e8",
    ink: "#181713",
    cardTone: "light",
    size: "standard",
    liveUrl: "https://dona-girafa-vista-o-cuidado.vercel.app/",
  },
  {
    slug: "spolpas",
    number: "11",
    client: "Spolpas",
    shortName: "Spolpas",
    sector: "Alimentos · varejo",
    location: "São Paulo · SP",
    year: "2026",
    status: "Identidade em desenvolvimento",
    headline: "Do congelador ao copo.",
    summary:
      "Uma direção fresca e comercial para tornar sabor, praticidade e variedade imediatamente visíveis.",
    challenge:
      "Dar unidade a diferentes sabores e formatos de conteúdo mantendo o produto como protagonista.",
    direction:
      "Criamos uma base clara com cores de fruta, tipografia grande e curvas orgânicas que organizam informação sem competir com o apetite visual.",
    result:
      "A identidade ganha uma linguagem flexível para embalagem, endereço, produto e campanha, mantendo reconhecimento entre peças diferentes.",
    services: ["Direção criativa", "Identidade visual", "Conteúdo"],
    deliverables: [
      "Direção visual",
      "Sistema de cores",
      "Layouts de produto",
      "Peças para Instagram",
      "Aplicações de marca",
    ],
    cover: {
      src: "/cases/spolpas/identidade.jpg",
      alt: "Direção visual criada para a Spolpas",
      label: "Identidade visual",
    },
    gallery: [
      {
        src: "/cases/spolpas/enderecos.jpg",
        alt: "Post de endereços criado para a Spolpas",
        label: "Conteúdo de serviço",
        position: "top center",
      },
    ],
    accent: "#a70f2d",
    accentSoft: "#f4ede0",
    ink: "#183a2c",
    cardTone: "light",
    size: "compact",
  },
];

export function getCase(slug: string) {
  return cases.find((item) => item.slug === slug);
}

export function getNextCase(slug: string) {
  const index = cases.findIndex((item) => item.slug === slug);
  return cases[(index + 1) % cases.length];
}
