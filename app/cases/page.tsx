import type { Metadata } from "next";
import CaseCard from "../../components/case-card";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";
import { cases } from "../data/cases";

export const metadata: Metadata = {
  title: "Projetos — OLI Marketing Digital",
  description: "Conheça os projetos de identidade visual, sites, landing pages e conteúdo desenvolvidos pela OLI.",
};

export default function CasesPage() {
  return (
    <div className="site-page cases-index-page">
      <SiteHeader inner />
      <main>
        <header className="cases-index-hero section-shell">
          <span>Portfólio por empresa · {String(cases.length).padStart(2, "0")} projetos</span>
          <h1>Projetos<span>.</span></h1>
          <p>
            Entre em cada empresa para conhecer o contexto, a direção e o conjunto de
            entregas — não apenas uma imagem bonita fora de contexto.
          </p>
        </header>
        <div className="case-grid section-shell cases-index-grid">
          {cases.map((item) => <CaseCard item={item} key={item.slug} />)}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
