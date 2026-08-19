import { siteContent } from "../../content/site";
import { Reveal } from "../ui/Reveal";

export function ServicesSection() {
  return (
    <section id="servicios" className="section services-section" aria-labelledby="services-title">
      <div className="container services-layout">
        <div className="services-intro">
          <Reveal>
            <p className="section-kicker">Del hallazgo a la ejecución</p>
            <h2 id="services-title">No ofrecemos paquetes. Construimos rutas.</h2>
            <p>
              Entramos donde el proyecto lo necesita: encontrar el fondo,
              diseñar la propuesta, ejecutar con rigor o incorporar tecnología
              y datos.
            </p>
          </Reveal>
        </div>

        <div className="services-index">
          {siteContent.services.map((service, index) => (
            <Reveal key={service.title} delay={index * 45}>
              <article className="service-row">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <a href="#contacto" aria-label={`Consultar sobre ${service.title}`}>
                  Consultar
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
