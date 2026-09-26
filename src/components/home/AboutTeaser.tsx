import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { pillars, team } from "../../data/site";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

/** Resumen de "Nosotros" para el home; el detalle vive en /nosotros. */
export function AboutTeaser() {
  return (
    <section id="nosotros" className="scroll-mt-20 bg-white py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <SectionHeader
              eyebrow="Nosotros"
              title="Quiénes somos"
              description="Somos una firma de consultoría especializada en proyectos de innovación, investigación aplicada e inteligencia artificial para organizaciones públicas y privadas."
            />
            <ul className="mt-6 flex flex-wrap gap-2">
              {pillars.map((pillar) => (
                <li
                  key={pillar.title}
                  className="rounded-full bg-sand/60 px-3.5 py-1.5 text-xs font-semibold text-blue"
                >
                  {pillar.title}
                </li>
              ))}
            </ul>
            <Button as={Link} to="/nosotros" variant="secondary" className="mt-8">
              Conoce más sobre nosotros
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </Button>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-5">
            <Link
              to="/nosotros#equipo"
              className="group block rounded-3xl bg-off-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue/10 sm:p-8"
            >
              <div className="flex -space-x-4">
                {team.map((member) => (
                  <img
                    key={member.name}
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className="h-16 w-16 rounded-full border-4 border-off-white object-cover transition-transform duration-500 group-hover:translate-x-1 sm:h-20 sm:w-20"
                    style={{ objectPosition: member.photoPosition }}
                  />
                ))}
              </div>
              <p className="mt-6 font-display text-xl font-bold text-blue">
                Un equipo multidisciplinario
              </p>
              <p className="mt-2 text-sm leading-relaxed text-blue-muted">
                Gestión de proyectos, criterio legal, innovación y tecnología
                desde Lima y Madrid.
              </p>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
