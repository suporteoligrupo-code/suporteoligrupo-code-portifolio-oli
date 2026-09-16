"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, BriefcaseBusiness, House, Layers3, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { siteCopy, withLanguage } from "../app/data/i18n";
import { useLanguage } from "./language-provider";

export const linkedinUrl = "https://br.linkedin.com/in/lucas-oliveira-790508310";

const destinations = [
  { label: "Início", href: "/", key: "home", icon: House },
  { label: "Trajetória", href: "/career", key: "career", icon: BriefcaseBusiness },
  { label: "Projetos", href: "/cases", key: "cases", icon: Layers3 },
  { label: "Contato", href: "/#contato", key: "contact", icon: MessageCircle },
] as const;

export default function SiteHeader({ inner = false }: { inner?: boolean }) {
  const { language } = useLanguage();
  const copy = siteCopy[language].header;
  const pathname = usePathname() ?? "/";
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;
    const contact = document.getElementById("contato");
    if (!contact) return;
    const observer = new IntersectionObserver(([entry]) => setContactVisible(entry.isIntersecting), {
      rootMargin: "-10% 0px -20% 0px",
    });
    observer.observe(contact);
    return () => observer.disconnect();
  }, [pathname]);

  const active = pathname.startsWith("/career") ? "career"
    : pathname.startsWith("/cases") ? "cases"
    : pathname === "/" ? (contactVisible ? "contact" : "home") : null;

  return (
    <>
      <a className="skip-link" href="#main-content">Ir para o conteúdo</a>
      <header className={`site-header${inner ? " site-header--inner" : ""}`}>
        <Link className="brand" href={withLanguage("/", language)} aria-label={copy.homeLabel}>
          <span className="brand-name">Lucas de Oliveira Andrade</span>
        </Link>
        <div className="header-actions">
          <Link className="header-about" href={withLanguage("/#oli", language)}>Lucas + OLI</Link>
          <a className="header-cta" href={linkedinUrl} target="_blank" rel="noreferrer" aria-label={copy.profileCta}>
            <span className="header-cta-label">LinkedIn</span><ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      </header>
      <nav className="app-dock" aria-label={copy.navLabel}>
        {destinations.map(({ label, href, key, icon: Icon }) => (
          <Link key={key} href={withLanguage(href, language)} className={active === key ? "is-active" : undefined}
            aria-current={active === key ? (key === "contact" ? "location" : "page") : undefined}>
            <Icon aria-hidden="true" size={19} strokeWidth={1.7} /><span>{label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
