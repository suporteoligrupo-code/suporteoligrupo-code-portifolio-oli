import type { Metadata } from "next";
import CareerIndexContent from "../../components/career-index-content";

export const metadata: Metadata = {
  title: "Trajetória — Lucas de Oliveira Andrade",
  description:
    "Conheça a trajetória profissional de Lucas de Oliveira Andrade em vendas, gestão, marketing, consultoria, conteúdo e direção criativa desde 2010.",
  alternates: { canonical: "/career" },
  openGraph: { url: "/career" },
};

export default function CareerPage() {
  return <CareerIndexContent />;
}
