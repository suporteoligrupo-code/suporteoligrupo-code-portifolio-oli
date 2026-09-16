// Editorial selection, separate from career facts and visual-project status.
export const homeCareerSlugs = [
  "rico-games",
  "toy-show",
  "josucas-eletronicos",
  "metro-case",
] as const;

export const focusedCareerSlugs: readonly string[] = [...homeCareerSlugs, "divertida-geek"];

export const homeProjectSlugs = [
  "rico-games",
  "josucas-eletronicos",
  "metro-case",
  "eletrotech-isa",
] as const;

const projectPriority: readonly string[] = [...homeProjectSlugs, "gru-kpop-anime"];

export function sortPositionedProjects<T extends { slug: string }>(items: readonly T[]): T[] {
  const priority = (slug: string) => {
    const index = projectPriority.indexOf(slug);
    return index < 0 ? projectPriority.length : index;
  };
  return [...items].sort((left, right) => priority(left.slug) - priority(right.slug));
}

// Portuguese-only interface; keep this proposed positioning distinct from
// historical translations and from confirmed experience records.
export const oliPositioning = {
  index: "02 / Lucas + OLI",
  eyebrow: "Uma atuação, duas dimensões",
  title: "Experiência pessoal. Direção para o seu negócio.",
  text: "Eu trago a vivência de quem vende, atende, cria e participa das decisões. A OLI é a marca pela qual organizo essa atuação em estratégia, marketing e direção criativa para negócios de games e tecnologia.",
  scope: "Meu foco é conectar produto, público, operação e comunicação — da leitura do negócio à execução de campanhas, conteúdos, marcas e experiências digitais.",
  audienceTitle: "Para quem faz sentido",
  audiences: [
    { title: "Games e cultura geek", text: "Lojas, marcas e negócios ligados a consoles, jogos, acessórios e cultura geek." },
    { title: "Tecnologia e eletrônicos", text: "Varejo e e-commerce de celulares, informática, periféricos e produtos de tecnologia." },
    { title: "Serviços especializados", text: "Assistências técnicas e negócios que precisam comunicar com clareza o valor do que fazem." },
  ],
};
