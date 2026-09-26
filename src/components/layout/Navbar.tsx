import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { company, navLinks } from "../../data/site";
import logoBlue from "../../assets/brand/logo-blue.png";
import logoWhite from "../../assets/brand/logo-white.png";

/** NavLink de react-router ignora el hash, así que "/#servicios" y "/"
 * quedarían activos a la vez. Se compara ruta y hash manualmente. */
function useIsActive() {
  const { pathname, hash } = useLocation();

  return (href: string) => {
    const [path, anchor] = href.split("#");
    const target = path || "/";
    if (anchor) return pathname === target && hash === `#${anchor}`;
    if (target === "/") return pathname === "/" && !hash;
    return pathname === target || pathname.startsWith(`${target}/`);
  };
}

/** Nombres largos ("Observatorio de proyectos") se parten en dos líneas
 * tras la primera palabra para que el menú se vea más limpio. */
function NavLabel({ label }: { label: string }) {
  const [first, ...rest] = label.split(" ");
  if (label.length <= 14 || rest.length === 0) return <>{label}</>;
  return (
    <>
      {first}
      <br />
      {rest.join(" ")}
    </>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isActive = useIsActive();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // En la portada el encabezado se funde con el hero azul hasta hacer scroll.
  const dark = pathname === "/" && !scrolled && !open;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-150 ${
        dark
          ? "bg-blue text-off-white"
          : "bg-off-white/90 text-blue shadow-[0_1px_0_rgba(32,45,79,0.08)] backdrop-blur-md"
      }`}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link
          to="/"
          className="relative flex h-10 shrink-0 items-center sm:h-11"
          onClick={() => setOpen(false)}
          aria-label={`${company.name} — inicio`}
        >
          <img
            src={logoBlue}
            alt={company.name}
            className={`h-full w-auto transition-opacity duration-150 ${dark ? "opacity-0" : "opacity-100"}`}
          />
          <img
            src={logoWhite}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-auto transition-opacity duration-150 ${dark ? "opacity-100" : "opacity-0"}`}
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Principal">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                to={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative text-center text-sm font-medium leading-tight transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded-full after:bg-beige after:transition-all after:duration-300 after:content-[''] ${
                  dark ? "hover:text-beige" : "hover:text-blue-lighter"
                } ${active ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
              >
                <NavLabel label={link.label} />
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-beige"
        style={{ scaleX: progress }}
      />

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-blue/10 bg-off-white px-6 py-5 lg:hidden"
          aria-label="Principal móvil"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`text-base font-medium text-blue ${
                    isActive(link.href) ? "border-l-2 border-beige pl-3" : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Button
                as="a"
                href={company.formUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                Conversemos
              </Button>
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
