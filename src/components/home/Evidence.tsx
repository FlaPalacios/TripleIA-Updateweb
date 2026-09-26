import { projects } from "../../data/site";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";

export function Evidence() {
  return (
    <section id="resultados" className="scroll-mt-20 bg-blue py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            tone="dark"
            eyebrow="Evidencia"
            title="Resultados que respaldan nuestro trabajo"
            description="Cifras concretas de proyectos que hemos acompañado hasta su ejecución."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <div className="h-full rounded-3xl border-t-4 border-beige bg-blue-dark p-8 transition-all duration-500 hover:-translate-y-1.5 hover:bg-blue-light sm:p-10">
                <p className="text-2xl font-semibold leading-snug text-off-white sm:text-3xl">
                  {project.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-off-white/70">
                  {project.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
