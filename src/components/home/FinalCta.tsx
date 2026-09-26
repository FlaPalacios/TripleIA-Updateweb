import { Mail, Clock } from "lucide-react";
import { company } from "../../data/site";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { WHATSAPP_ICON } from "../social/WhatsAppButton";

export function FinalCta() {
  return (
    <section id="contacto" className="scroll-mt-20 relative overflow-hidden bg-blue py-24 text-off-white lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 animate-drift rounded-full bg-beige/20 blur-3xl"
      />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
          <Reveal className="lg:col-span-7">
            <p className="mb-4 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-beige">
              <span aria-hidden="true" className="h-0.5 w-8 rounded-full bg-beige" />
              Contacto
            </p>
            <h2 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Cuéntanos tu <span className="text-beige">proyecto</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-off-white/70">
              Si tienes una idea, un proyecto en marcha o necesitas apoyo para
              postular a una convocatoria, conversemos.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="a" href={company.formUrl} target="_blank" rel="noreferrer" variant="accent">
                Conversemos
              </Button>
              <Button
                as="a"
                href={company.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                variant="inverse"
              >
                <img src={WHATSAPP_ICON} alt="" className="h-5 w-5" />
                Escribir por WhatsApp
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="flex flex-col gap-4 text-sm text-off-white/80 lg:col-span-5">
            <div className="flex items-center gap-3">
              <Mail size={18} aria-hidden="true" />
              <a href={`mailto:${company.email}`} className="hover:text-off-white">
                {company.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={18} aria-hidden="true" />
              <span>{company.schedule}</span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
