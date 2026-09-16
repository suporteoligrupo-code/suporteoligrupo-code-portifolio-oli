const careerPrioritySlugs = [
  "rico-games",
  "toy-show",
  "josucas-eletronicos",
  "metro-case",
  "divertida-geek",
  "manifesto-bar",
  "urly-marketing",
  "reserva-ibirapitanga-revista-saua",
  "oliveira-transportes",
  "bsb-abrasivos",
] as const;

const careerPriority = new Map<string, number>(
  careerPrioritySlugs.map((slug, index) => [slug, index]),
);

export function getCareerPriority(slug: string) {
  return careerPriority.get(slug) ?? careerPrioritySlugs.length + 100;
}

export function sortCareerEntries<T extends { slug: string }>(entries: readonly T[]) {
  return [...entries].sort(
    (left, right) => getCareerPriority(left.slug) - getCareerPriority(right.slug),
  );
}
