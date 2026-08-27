import type { Metadata } from "next";
import CasesIndexContent from "../../components/cases-index-content";

export const metadata: Metadata = {
  title: "Projetos — OLI Marketing Digital",
  description: "Conheça os projetos de identidade visual, sites, landing pages e conteúdo desenvolvidos pela OLI.",
};

export default function CasesPage() {
  return <CasesIndexContent />;
}
