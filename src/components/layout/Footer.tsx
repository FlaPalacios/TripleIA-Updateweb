import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { company, navLinks, socialLinks } from "../../data/site";
import logo from "../../assets/brand/logo-white.png";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-off-white/10 bg-blue text-off-white">
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div>
          <img src={logo} alt={company.name} className="h-16 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-off-white/70">
            {company.tagline}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-beige">
            Navegación
          </h3>
          <ul className="mt-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-sm text-off-white/80 transition-colors hover:text-off-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-beige">
            Contacto
          </h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-off-white/80">
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-off-white">
                {company.email}
              </a>
            </li>
            <li>
              <a href={company.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-off-white">
                {company.whatsappNumber}
              </a>
            </li>
            <li>{company.location}</li>
          </ul>
          <div className="mt-6 flex gap-4">
            {socialLinks
              .filter((s) => s.label !== "WhatsApp")
              .map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-off-white/70 transition-colors hover:text-off-white"
                >
                  {social.label}
                </a>
              ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-off-white/10 py-6">
        <Container>
          <p className="text-xs text-off-white/50">
            © {year} {company.name}. Todos los derechos reservados.
          </p>
        </Container>
      </div>
    </footer>
  );
}
