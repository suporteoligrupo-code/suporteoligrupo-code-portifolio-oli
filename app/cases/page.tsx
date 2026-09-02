import type { Metadata } from "next";
import CasesIndexContent from "../../components/cases-index-content";

export const metadata: Metadata = {
  title: "Trabalhos selecionados — Lucas de Oliveira Andrade",
  description: "Trabalhos visuais selecionados com a atuação de Lucas de Oliveira Andrade, o que foi construído e o status real de cada projeto.",
  alternates: { canonical: "/cases" },
  openGraph: { url: "/cases" },
};

export default function CasesPage() {
  return <CasesIndexContent />;
}
