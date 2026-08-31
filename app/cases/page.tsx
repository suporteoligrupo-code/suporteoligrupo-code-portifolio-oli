import type { Metadata } from "next";
import CasesIndexContent from "../../components/cases-index-content";

export const metadata: Metadata = {
  title: "Projetos — Lucas de Oliveira Andrade",
  description: "Conheça projetos de estratégia, marketing, identidade visual, conteúdo e experiências digitais com atuação de Lucas de Oliveira Andrade.",
};

export default function CasesPage() {
  return <CasesIndexContent />;
}
