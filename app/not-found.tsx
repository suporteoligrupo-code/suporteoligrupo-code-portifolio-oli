import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = {
  title: "Página não encontrada — Lucas de Oliveira Andrade",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="site-page not-found-page">
      <SiteHeader inner />
      <main className="not-found-stage section-shell">
        <p>404 / Portfólio pessoal</p>
        <h1>Página não encontrada.</h1>
        <span>O endereço pode ter mudado ou o conteúdo ainda não está publicado.</span>
        <Link href="/">
          <ArrowLeft aria-hidden="true" size={18} /> Voltar ao início
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
