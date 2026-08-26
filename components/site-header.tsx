import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const instagramUrl = "https://www.instagram.com/oli.marketing7/";

export default function SiteHeader({ inner = false }: { inner?: boolean }) {
  return (
    <header className={`site-header${inner ? " site-header--inner" : ""}`}>
      <Link className="brand" href="/" aria-label="OLI — início">
        <img src="/portfolio/oli-logo-oficial-claro.png" alt="OLI" width={6000} height={1842} />
      </Link>

      <nav aria-label="Navegação principal">
        <Link href={inner ? "/#cases" : "#cases"}>Cases.</Link>
        <Link href={inner ? "/#servicos" : "#servicos"}>Serviços</Link>
        <Link href={inner ? "/#processo" : "#processo"}>Processo</Link>
      </nav>

      <a className="header-cta" href={instagramUrl} target="_blank" rel="noreferrer">
        Começar um projeto
        <ArrowUpRight aria-hidden="true" size={15} />
      </a>
    </header>
  );
}
