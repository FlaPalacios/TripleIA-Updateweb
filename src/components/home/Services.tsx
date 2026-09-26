import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "../../data/site";
import { ServiceIcon } from "../services/ServiceIcon";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

/** Versión compacta para el home: el detalle completo vive en /servicios. */
export function Services() {
  const [featured, ...rest] = services;

  return (
    <section id="servicios" className="relative scroll-mt-20 overflow-hidden bg-sand py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 animate-drift rounded-full bg-beige-light/80 blur-3xl"
      />

      <Container className="relative">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Qué hacemos"
              title="Nuestros Servicios"
              tone="beige"
              description="Te acompañamos desde encontrar el fondo correcto hasta ejecutar tu proyecto con éxito."
            />
            <Button as={Link} to="/servicios" className="shrink-0 self-start md:self-auto">
              Ver todos los servicios
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </Button>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <Reveal y={40} className="col-span-2 lg:row-span-2">
            <Link
              to={`/servicios#${featured.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-blue p-8 text-off-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue/30"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full border border-beige/20 transition-transform duration-700 group-hover:scale-125 before:absolute before:inset-10 before:rounded-full before:border before:border-beige/20 before:content-[''] after:absolute after:inset-20 after:rounded-full after:border after:border-beige/30 after:content-['']"
              />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-beige text-blue transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                <ServiceIcon slug={featured.slug} size={24} />
              </span>
              <h3 className="relative mt-6 max-w-sm text-2xl font-bold leading-tight sm:text-3xl">
                {featured.title}
              </h3>
              <p className="relative mt-3 max-w-md flex-1 text-sm leading-relaxed text-off-white/75">
                {featured.description}
              </p>
              <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-beige">
                Saber más
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </Reveal>

          {rest.map((service, index) => (
            <Reveal key={service.slug} delay={(index + 1) * 0.08} y={40}>
              <Link
                to={`/servicios#${service.slug}`}
                className="group flex h-full flex-col justify-between gap-6 rounded-3xl bg-off-white p-5 text-blue transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-2xl hover:shadow-blue/15 sm:p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue text-beige transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <ServiceIcon slug={service.slug} size={22} />
                  </span>
                  <ArrowUpRight
                    size={20}
                    aria-hidden="true"
                    className="text-blue-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue"
                  />
                </div>
                <h3 className="text-base font-bold leading-snug sm:text-lg">{service.shortTitle}</h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
