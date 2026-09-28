import { MapPin } from "lucide-react";
import { about, company, team } from "../data/site";
import { PageHeader } from "../components/ui/PageHeader";
import { Pillars } from "../components/home/Pillars";
import { Container } from "../components/ui/Container";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Reveal } from "../components/ui/Reveal";

export function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="Nosotros" title={about.title} description={about.description}>
        <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue">
          <MapPin size={16} aria-hidden="true" />
          {company.location}
        </p>
      </PageHeader>

      <Pillars />

      <section id="equipo" className="scroll-mt-20 bg-white py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Nuestro equipo"
              title="Experiencia complementaria para convertir ideas en resultados"
              description="Perfiles que combinan visión de negocio, gestión de proyectos, criterio legal, innovación y tecnología para acompañar cada iniciativa de principio a fin."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-blue/10 bg-off-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl">
                  <div className="aspect-square overflow-hidden bg-white">
                    <img
                      src={member.photo}
                      alt={`Retrato de ${member.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: member.photoPosition }}
                    />
                  </div>
                  <div className="flex-1 border-t-4 border-beige p-6">
                    <h3 className="text-xl font-bold text-blue">{member.name}</h3>
                    <p className="mt-1 text-sm font-medium text-blue-light">{member.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-blue-muted">{member.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
