import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { services } from "../data/site";
import { ServiceIcon } from "../components/services/ServiceIcon";
import { PageHeader } from "../components/ui/PageHeader";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { FinalCta } from "../components/home/FinalCta";

export function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Qué hacemos"
        title="Nuestros Servicios"
        description="Acompañamos a organizaciones públicas y privadas en todo el ciclo de un proyecto: desde encontrar el fondo correcto hasta ejecutarlo con éxito."
      />

      <section className="py-20 lg:py-28">
        <Container className="flex flex-col gap-6">
          {services.map((service, index) => {
            // Los servicios sin página propia llevan a Contacto: botón secundario.
            const toContact = service.href.startsWith("/#");

            return (
              // El ancla va fuera de <Reveal>: su desplazamiento de entrada
              // alteraría el cálculo del scroll al llegar con #slug.
              <div
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28"
              >
                <Reveal y={32}>
                  <article className="group grid gap-8 rounded-3xl bg-white p-8 transition-shadow duration-500 hover:shadow-2xl hover:shadow-blue/10 sm:p-10 lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-4">
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue text-beige transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                          <ServiceIcon slug={service.slug} size={26} />
                        </span>
                        <span className="font-display text-sm font-bold text-blue-muted">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-blue sm:text-4xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 max-w-xl text-lg leading-relaxed text-blue-muted">
                        {service.description}
                      </p>
                      <Button
                        as={Link}
                        to={service.href}
                        variant={toContact ? "secondary" : "primary"}
                        className="mt-8"
                      >
                        {service.cta}
                        <ArrowRight
                          size={16}
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover/btn:translate-x-1"
                        />
                      </Button>
                    </div>

                    <div className="rounded-2xl bg-sand/50 p-6 sm:p-8 lg:col-span-5">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-light">
                        Qué incluye
                      </h3>
                      <ul className="mt-5 flex flex-col gap-4">
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-relaxed text-blue"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue text-beige">
                              <Check
                                size={12}
                                strokeWidth={3}
                                aria-hidden="true"
                              />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              </div>
            );
          })}
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
