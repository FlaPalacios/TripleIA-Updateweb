import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { company } from "../../data/site";

const TAGS = ["Oportunidades", "Proyectos", "Innovación", "Investigación aplicada", "Tecnología"];

// Palabras del tagline que se resaltan en beige.
const HIGHLIGHT = /^(oportunidades|innovación|tecnología)/i;

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const words = company.tagline.split(" ");

  return (
    <section className="relative overflow-hidden bg-blue text-off-white">
      {/* Retícula sutil + destellos que flotan */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(var(--color-beige)_1px,transparent_1px),linear-gradient(90deg,var(--color-beige)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 animate-drift rounded-full bg-beige/30 blur-3xl sm:h-[28rem] sm:w-[28rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-64 w-64 animate-drift-slow rounded-full bg-blue-lighter/50 blur-3xl sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-16 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pb-32 lg:pt-24">
        <div className="lg:col-span-8">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-beige">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-beige opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-beige" />
              </span>
              Triple IA Consultores
            </p>
          </Reveal>

          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[4rem]">
            {words.map((word, index) => (
              <span key={`${word}-${index}`} className="inline-block overflow-hidden pb-1 align-bottom">
                <motion.span
                  className={`inline-block ${HIGHLIGHT.test(word) ? "text-beige" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 + index * 0.06, ease: EASE }}
                >
                  {word}
                </motion.span>
                {index < words.length - 1 && " "}
              </span>
            ))}
          </h1>

          <Reveal delay={0.5}>
            <div className="mt-10 flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-beige/40 px-3.5 py-1 text-xs font-medium text-beige-light transition-colors duration-300 hover:border-beige hover:bg-beige hover:text-blue"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button as={Link} to="/oportunidades" variant="accent">
                Ver oportunidades
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                />
              </Button>
              <Button as={Link} to="/#servicios" variant="inverse">
                Nuestros servicios
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-4 lg:flex lg:items-end">
          <Reveal delay={0.75} className="w-full">
            <div className="w-full border-l-2 border-beige py-1 pl-6 pr-20 lg:pr-0">
              <p className="text-base leading-relaxed text-off-white/75">
                Identificamos fondos, formulamos proyectos y acompañamos su
                ejecución, mientras difundimos ciencia e innovación en el
                ecosistema donde participamos activamente.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
