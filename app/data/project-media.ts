import type { CaseImage, PortfolioCase } from "./cases";

// Covers identify the company. Project screenshots and campaigns keep their
// original treatments inside the case; career media is a separate structure.
function logo(
  client: string,
  src: string,
  width: number,
  height: number,
  background: string,
  maxWidth = "60%",
  maxHeight = "54%",
): CaseImage {
  return {
    src, width, height, kind: "logo",
    alt: `Logo de ${client}`,
    label: `Marca ${client}`,
    placements: {
      card: {
        fit: "contain", position: "50% 50%", scale: 1,
        background, inset: "24px", maxWidth, maxHeight,
        frame: "bleed", overlay: "none", motion: "none",
        mobile: {
          inset: "20px",
          maxWidth: maxWidth.endsWith("px") ? maxWidth : "72%",
          maxHeight: maxHeight.endsWith("px") ? maxHeight : "62%",
        },
      },
    },
  };
}

export const projectBrandCovers: Record<string, CaseImage> = {
  "rico-games": logo("Rico Games", "/brandmarks/rico-games-approved-v05.webp", 1200, 473, "#151718"),
  "gru-kpop-anime": logo("GRU KPOP Anime", "/brandmarks/gru-kpop-light.png", 720, 253, "#f7f1e7", "70%"),
  "studio-e": logo("Studio E", "/brandmarks/studio-e-light.png", 356, 280, "#f7f1e7", "54%", "66%"),
  "josucas-eletronicos": logo("Josucas Eletrônicos", "/cases/josucas/logo-oficial.svg", 1000, 640, "#171819", "62%", "68%"),
  "manifesto-bar": logo("Manifesto Bar", "/brandmarks/manifesto-oficial.png", 340, 278, "#171819", "56%", "74%"),
  "metro-case": logo("Metro Case", "/brandmarks/metro-case-light.png", 720, 157, "#f7f1e7", "72%"),
  "oliveira-transportes": logo("Oliveira Transportes", "/cases/oliveira-transportes/logo.jpg", 150, 150, "#fff", "150px", "150px"),
  "score-business-school": logo("Score Business School", "/cases/score/brasao.png", 500, 500, "#171819", "48%", "65%"),
  "eletrotech-isa": logo("Eletrotech ISA", "/brandmarks/eletrotech-isa.svg", 109, 114, "#0b0d0f", "52%", "66%"),
  "dona-girafa": logo("Dona Girafa", "/brandmarks/dona-girafa.jpg", 300, 300, "#fff", "200px", "74%"),
};

export type ProjectVisual = {
  image: CaseImage;
  description?: string;
};

function social(src: string, width: number, height: number, label: string, alt: string): CaseImage {
  return {
    src, width, height, label, alt, kind: "social",
    placements: {
      gallery: {
        fit: "contain", position: "50% 50%", scale: 1,
        background: "#171a1e", inset: "0px", maxHeight: "100%",
        frame: "stage", overlay: "none", motion: "none",
        aspectRatio: `${width} / ${height}`, layout: "portrait", span: 6,
        mobile: { fit: "contain", inset: "0px", aspectRatio: `${width} / ${height}` },
      },
    },
  };
}

const selectedSocial: Record<string, ProjectVisual[]> = {
  "rico-games": [
    {
      image: social("/cases/rico-games/dia-do-cliente-2026.webp", 1080, 1350,
        "Relacionamento · Dia do Cliente",
        "Peça da Rico Games para o Dia do Cliente: Hoje, o nosso player 1 é você"),
      description: "A linguagem de games aproxima a mensagem de relacionamento do repertório de quem acompanha a loja. Peça de setembro de 2026.",
    },
    {
      image: social("/cases/rico-games/grupo-promocoes.webp", 1080, 1350,
        "Comunidade · Grupo de promoções",
        "Capa de carrossel da Rico Games com convite para o grupo de promoções no WhatsApp"),
      description: "Capa de carrossel com gancho comercial e convite direto para o grupo no WhatsApp. Registro da campanha, sem representar uma oferta vigente.",
    },
  ],
  "eletrotech-isa": [
    {
      image: social("/cases/eletrotech-isa/controle-molhado.webp", 1200, 1200,
        "Conteúdo útil · Cuidados com o controle",
        "Arte da Eletrotech ISA sobre cuidados imediatos com um controle molhado"),
      description: "Uma dúvida concreta do público vira orientação curta e convite à avaliação técnica. Arte para redes sociais.",
    },
    {
      image: social("/cases/eletrotech-isa/transporte-console.webp", 1200, 1200,
        "Conteúdo educativo · Transporte do console",
        "Arte da Eletrotech ISA com três cuidados ao transportar um console"),
      description: "Checklist de leitura rápida pensado como conteúdo para consultar e compartilhar. Arte para redes sociais.",
    },
  ],
};

const descriptions: Record<string, string> = {
  "/portfolio/gru-kpop-feed-aprovado.jpg": "Seleção de peças para apresentar o universo da loja, os produtos e a relação com os fãs. Painel de conteúdo aprovado.",
  "/cases/josucas/instagram-kit-aprovado.jpg": "Peças de comunicação comercial que aproximam produtos, necessidades do público e atendimento. Kit visual aprovado.",
  "/cases/josucas/instagram-carrossel-aprovado.jpg": "Sequência para organizar a mensagem comercial em etapas, com uma ideia principal por tela. Carrossel aprovado.",
  "/cases/metro-case/campanha.webp": "Uma aplicação da identidade à comunicação de acessórios, com o produto e a mensagem comercial em destaque.",
  "/cases/oliveira-transportes/feed-6-posts.jpg": "Conteúdo para explicar o serviço, os cuidados com a mudança e os próximos passos do atendimento.",
  "/portfolio/rico-games-gta6-preview.jpg": "Estudo anterior de template, apresentado como material em desenvolvimento.",
};

export function getProjectVisuals(item: PortfolioCase): ProjectVisual[] {
  // Keep the original files while avoiding generic scenes and duplicated work.
  const omittedByProject: Record<string, string[]> = {
    "josucas-eletronicos": ["/cases/josucas/assistencia.avif", "/cases/josucas/atendimento.avif", "/cases/josucas/logo-oficial.svg"],
    "eletrotech-isa": ["/cases/eletrotech-isa/feed.jpg"],
  };
  const omitted = new Set(omittedByProject[item.slug] ?? []);
  const gallery = item.gallery.filter((image) => !omitted.has(image.src));
  const ordered = [...gallery].sort((a, b) => Number(b.kind === "social") - Number(a.kind === "social"));
  return [
    ...(selectedSocial[item.slug] ?? []),
    ...ordered.map((image) => ({ image, description: descriptions[image.src] })),
  ];
}
