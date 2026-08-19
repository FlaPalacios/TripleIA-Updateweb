import { siteContent } from "../../content/site";
import { Reveal } from "../ui/Reveal";

export function AboutAndContact() {
  return (
    <>
      <section id="nosotros" className="section about-section" aria-labelledby="about-title">
        <div className="container about-layout">
          <Reveal>
            <p className="section-kicker">Quiénes somos</p>
            <h2 id="about-title">Un equipo que entiende proyectos desde varios ángulos.</h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="about-copy">
              <p>
                Triple IA es una firma de consultoría que diseña, formula y
                ejecuta proyectos de innovación, investigación aplicada e
                inteligencia artificial para organizaciones públicas y privadas.
              </p>
              <p>
                Combinamos lectura del ecosistema, criterio técnico y capacidad
                de implementación para generar valor económico, social y
                ambiental con resultados medibles.
              </p>
              <span>{siteContent.company.location}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contacto" className="section contact-section" aria-labelledby="contact-title">
        <div className="container contact-layout">
          <Reveal>
            <p className="section-kicker">Hablemos de tu siguiente paso</p>
            <h2 id="contact-title">Una oportunidad sirve cuando puede convertirse en proyecto.</h2>
          </Reveal>
          <Reveal className="contact-actions" delay={90}>
            <p>
              Cuéntanos qué estás construyendo, qué fondo estás evaluando o qué
              problema quieres resolver con innovación y datos.
            </p>
            <a className="contact-primary" href={siteContent.contactForm} target="_blank" rel="noreferrer">
              Cuéntanos tu proyecto <span aria-hidden="true">↗</span>
            </a>
            <div className="contact-details">
              <a href={`mailto:${siteContent.company.email}`}>{siteContent.company.email}</a>
              <a href={siteContent.socials.whatsapp} target="_blank" rel="noreferrer">
                {siteContent.company.phone}
              </a>
              <span>{siteContent.company.schedule}</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
