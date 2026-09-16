import HomeContent from "../components/home-content";
import { publishedCareerEntries } from "./data/career";
import { sanitizeCareerEntries } from "./data/career-sanitizer";
import { homeCareerSlugs } from "./data/positioning";

export default function Home() {
  const published = sanitizeCareerEntries(publishedCareerEntries);
  const entries = homeCareerSlugs.flatMap((slug) => published.filter((entry) => entry.slug === slug));

  return <HomeContent featuredCareerEntries={entries} />;
}
