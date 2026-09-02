"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { languageOptions, siteCopy, withLanguage } from "../app/data/i18n";
import { useLanguage } from "./language-provider";

export const linkedinUrl = "https://br.linkedin.com/in/lucas-oliveira-790508310";

export default function SiteHeader({ inner = false }: { inner?: boolean }) {
  const { language, setLanguage } = useLanguage();
  const copy = siteCopy[language].header;
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navItems = [
    [copy.home, "/#inicio"],
    [copy.journey, "/#trajetoria"],
    [copy.companies, "/#empresas"],
    [copy.projects, "/#projetos"],
    [copy.partnerships, "/#parcerias"],
    [copy.contact, "/#contato"],
  ] as const;

  useEffect(() => {
    if (!menuOpen) return;

    navRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      toggleRef.current?.focus();
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className={`site-header${inner ? " site-header--inner" : ""}`}>
      <Link className="brand" href={withLanguage("/", language)} aria-label={copy.homeLabel}>
        <span className="brand-monogram" aria-hidden="true">LOA</span>
        <span className="brand-name">Lucas de Oliveira Andrade</span>
      </Link>

      <nav
        ref={navRef}
        className={`site-header__nav${menuOpen ? " is-open" : ""}`}
        id="site-navigation"
        aria-label={copy.navLabel}
      >
        {navItems.map(([label, href]) => (
          <Link href={withLanguage(href, language)} key={href} onClick={() => setMenuOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <div className="language-switcher" role="group" aria-label={copy.chooseLanguage}>
          {languageOptions.map((option) => (
            <button
              className={option.code === language ? "is-active" : undefined}
              type="button"
              key={option.code}
              onClick={() => setLanguage(option.code)}
              aria-label={option.label}
              aria-pressed={option.code === language}
              title={option.label}
            >
              <img src={option.flagSrc} alt="" width={24} height={16} aria-hidden="true" />
            </button>
          ))}
        </div>
        <a
          className="header-cta"
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={copy.profileCta}
        >
          <span className="header-cta-label">{copy.profileCta}</span>
          <ArrowUpRight aria-hidden="true" size={15} />
        </a>
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-controls="site-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? copy.closeMenu : copy.openMenu}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
        </button>
      </div>
    </header>
  );
}
