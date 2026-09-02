const careerPrioritySlugs = [
  "rico-games",
  "toy-show",
  "manifesto-bar",
  "through-to-the-wolves",
  "urly-marketing",
  "josucas-eletronicos",
  "metro-case",
  "reserva-ibirapitanga-revista-saua",
  "divertida-geek",
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
