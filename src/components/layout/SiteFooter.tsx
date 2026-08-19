import Image from "next/image";
import { siteContent } from "../../content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main container">
        <div className="footer-intro">
          <Image
            src="/assets/brand/LOGO_header.svg"
            alt="Triple IA Consultores"
            width={190}
            height={56}
            unoptimized
          />
          <p>{siteContent.company.description}</p>
        </div>

        <div className="footer-column">
          <span>Navegar</span>
          {siteContent.navigation.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="footer-column">
          <span>Conectar</span>
          <a href={`mailto:${siteContent.company.email}`}>{siteContent.company.email}</a>
          <a href={siteContent.socials.whatsapp} target="_blank" rel="noreferrer">
            {siteContent.company.phone}
          </a>
          <p>{siteContent.company.location}</p>
        </div>

        <div className="footer-column">
          <span>Actividad</span>
          <a href={siteContent.socials.tiktok} target="_blank" rel="noreferrer">
            TikTok
          </a>
          <a href={siteContent.socials.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={siteContent.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} Triple IA Consultores</span>
        <span>Innovación abierta · Investigación aplicada · Inteligencia artificial</span>
      </div>
    </footer>
  );
}
