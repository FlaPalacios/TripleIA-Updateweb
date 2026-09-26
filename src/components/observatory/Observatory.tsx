import { ExternalLink } from "lucide-react";
import { observatory } from "../../data/site";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";

export function Observatory() {
  return (
    <section id="dashboards" className="scroll-mt-20 bg-off-white py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Datos y seguimiento"
            title="Dashboards interactivos"
            description="Analiza, monitorea y visualiza el impacto de la inversión pública en ciencia, tecnología e innovación en el Perú."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {observatory.map((dashboard, index) => (
            <Reveal key={dashboard.title} delay={index * 0.1}>
              <a
                href={dashboard.url}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-blue/10 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-beige hover:shadow-2xl"
              >
                <div className="aspect-[16/10] overflow-hidden border-b-4 border-beige bg-beige-light">
                  <img
                    src={dashboard.image}
                    alt={`Vista previa del dashboard ${dashboard.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-6 p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-blue">{dashboard.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-blue-muted">
                      {dashboard.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-blue">
                    Ver dashboard
                    <ExternalLink
                      size={16}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
