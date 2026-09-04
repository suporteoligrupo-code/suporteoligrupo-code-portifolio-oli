import HomeContent from "../components/home-content";
import { featuredCareerEntries } from "./data/career";
import { sortCareerEntries } from "./data/career-order";
import { sanitizeCareerEntries } from "./data/career-sanitizer";

const homeCareerSlugs = [
  "rico-games",
  "toy-show",
  "manifesto-bar",
  "urly-marketing",
  "josucas-eletronicos",
  "metro-case",
  "reserva-ibirapitanga-revista-saua",
];

export default function Home() {
  const entries = sortCareerEntries(sanitizeCareerEntries(featuredCareerEntries))
    .filter((entry) => homeCareerSlugs.includes(entry.slug))
    .slice(0, 7);

  return <HomeContent featuredCareerEntries={entries} />;
}
