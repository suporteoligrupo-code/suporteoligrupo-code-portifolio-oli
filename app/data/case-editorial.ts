import { ProjectStatus, type PortfolioCase } from "./cases";

export type CaseLanguage = "pt" | "en" | "ru";

const manifestoEditorial: Record<
  CaseLanguage,
  Pick<
    PortfolioCase,
    | "status"
    | "personalRole"
    | "built"
    | "summary"
    | "challenge"
    | "direction"
    | "result"
    | "services"
    | "deliverables"
  >
> = {
  pt: {
    status: "Conceito digital navegável",
    personalRole:
      "No contexto da consultoria de comunicação e marketing, desenvolvi uma proposta conceitual de experiência digital para organizar história, programação e atmosfera da casa.",
    built:
      "Arquitetura de informação, direção visual cinematográfica, conceito de página inicial, agenda e arquivo de artistas em um protótipo responsivo navegável.",
    summary:
      "Um conceito digital cinematográfico para explorar como história, agenda e identidade poderiam formar uma experiência coerente para o Manifesto Bar.",
    challenge:
      "Investigar como décadas de memória e energia ao vivo poderiam ganhar uma navegação contemporânea sem perder a força crua do rock.",
    direction:
      "Como estudo conceitual, conectei palco, fumaça, dourado envelhecido, preto e movimento em uma jornada que parte da atmosfera da casa e conduz para agenda, história e visita.",
    result:
      "O protótipo demonstra uma direção possível para organizar arquivo, programação, atmosfera e serviço. Ele é apresentado como conceito navegável, não como site oficial contratado.",
    services: [
      "Consultoria de comunicação",
      "Estratégia digital",
      "UX/UI",
      "Direção de arte",
    ],
    deliverables: [
      "Arquitetura de informação",
      "Direção visual cinematográfica",
      "Conceito de página inicial",
      "Conceito de agenda",
      "Conceito de arquivo de artistas",
      "Protótipo responsivo navegável",
    ],
  },
  en: {
    status: "Navigable digital concept",
    personalRole:
      "Within my communication and marketing consulting work, I developed a conceptual digital experience to organize the venue's history, programming and atmosphere.",
    built:
      "Information architecture, cinematic visual direction, homepage, schedule and artist-archive concepts in a navigable responsive prototype.",
    summary:
      "A cinematic digital concept exploring how history, programming and identity could form a coherent experience for Manifesto Bar.",
    challenge:
      "Explore how decades of memory and live energy could become a contemporary navigation experience without losing the raw force of rock.",
    direction:
      "As a concept study, I connected stage imagery, smoke, aged gold, black and motion in a journey that begins with the venue's atmosphere and leads into programming, history and visiting information.",
    result:
      "The prototype demonstrates one possible direction for organizing the archive, programming, atmosphere and service. It is presented as a navigable concept, not as a commissioned official website.",
    services: [
      "Communication consulting",
      "Digital strategy",
      "UX/UI",
      "Art direction",
    ],
    deliverables: [
      "Information architecture",
      "Cinematic visual direction",
      "Homepage concept",
      "Schedule concept",
      "Artist-archive concept",
      "Navigable responsive prototype",
    ],
  },
  ru: {
    status: "Навигационный digital-концепт",
    personalRole:
      "В рамках консалтинга по коммуникациям и маркетингу я разработал концепцию цифрового опыта, объединяющую историю, программу и атмосферу площадки.",
    built:
      "Информационная архитектура, кинематографичное визуальное направление, концепции главной страницы, афиши и архива артистов в адаптивном навигационном прототипе.",
    summary:
      "Кинематографичный digital-концепт, исследующий, как история, программа и идентичность могут образовать цельный опыт Manifesto Bar.",
    challenge:
      "Исследовать, как десятилетия истории и энергия живых выступлений могут получить современную навигацию, не теряя сырой силы рока.",
    direction:
      "В концептуальном исследовании я соединил сцену, дым, состаренное золото, чёрный цвет и движение в маршруте от атмосферы площадки к программе, истории и информации для посетителей.",
    result:
      "Прототип показывает возможное направление организации архива, программы, атмосферы и сервиса. Он представлен как навигационный концепт, а не как официальный сайт, созданный по заказу.",
    services: [
      "Консалтинг по коммуникациям",
      "Digital-стратегия",
      "UX/UI",
      "Арт-дирекшн",
    ],
    deliverables: [
      "Информационная архитектура",
      "Кинематографичное визуальное направление",
      "Концепция главной страницы",
      "Концепция афиши",
      "Концепция архива артистов",
      "Адаптивный навигационный прототип",
    ],
  },
};

export function reviewPortfolioCase(
  item: PortfolioCase,
  language: CaseLanguage,
): PortfolioCase {
  if (item.slug !== "manifesto-bar") return item;

  const editorial = manifestoEditorial[language];

  return {
    ...item,
    ...editorial,
    projectStatus: ProjectStatus.Concept,
    cover: {
      ...item.cover,
      label:
        language === "pt"
          ? "Referência de atmosfera da casa"
          : language === "en"
            ? "Venue atmosphere reference"
            : "Референс атмосферы площадки",
    },
  };
}

export function reviewPortfolioCases(
  items: readonly PortfolioCase[],
  language: CaseLanguage = "pt",
) {
  return items.map((item) => reviewPortfolioCase(item, language));
}
