"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "../../content/site";

interface SiteHeaderProps {
  tone?: "dark" | "light";
}

export function SiteHeader({ tone = "dark" }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`site-header site-header--${tone} ${scrolled ? "is-scrolled" : ""}`}
    >
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Triple IA, página de inicio">
          <Image
            src={
              tone === "dark"
                ? "/assets/brand/LOGO_header.svg"
                : "/assets/brand/LOGO_global.svg"
            }
            alt="Triple IA Consultores"
            width={172}
            height={48}
            priority={tone === "dark"}
            unoptimized
          />
        </Link>

        <nav className="desktop-navigation" aria-label="Navegación principal">
          {siteContent.navigation.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="header-cta" href="/#contacto">
          Conversemos
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-navigation ${menuOpen ? "is-open" : ""}`}
        aria-label="Navegación móvil"
      >
        {siteContent.navigation.map((item) => (
          <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link href="/#contacto" onClick={() => setMenuOpen(false)}>
          Conversemos
        </Link>
      </nav>
    </header>
  );
}
