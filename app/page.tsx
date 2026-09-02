import HomeContent from "../components/home-content";
import { featuredCareerEntries } from "./data/career";
import { sortCareerEntries } from "./data/career-order";
import { sanitizeCareerEntries } from "./data/career-sanitizer";

export default function Home() {
  const entries = sortCareerEntries(sanitizeCareerEntries(featuredCareerEntries));

  return <HomeContent featuredCareerEntries={entries} />;
}
