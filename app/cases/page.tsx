import type { Metadata } from "next";
import CasesIndexContent from "../../components/cases-index-content";
import { reviewPortfolioCases } from "../data/case-editorial";
import { publicCases } from "../data/cases";

export const metadata: Metadata = {
  title: "Trabalhos selecionados — Lucas de Oliveira Andrade",
  description: "Trabalhos visuais selecionados com a atuação de Lucas de Oliveira Andrade, o que foi construído e o status real de cada projeto.",
  alternates: { canonical: "/cases/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/cases/",
    title: "Trabalhos selecionados — Lucas de Oliveira Andrade",
    description: "Trabalhos visuais selecionados com a atuação de Lucas de Oliveira Andrade e o status real de cada projeto.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Lucas de Oliveira Andrade — Portfólio pessoal" }],
  },
};

export default function CasesPage() {
  return <CasesIndexContent items={reviewPortfolioCases(publicCases)} />;
}
