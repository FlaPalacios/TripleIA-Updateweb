import { pillars, purpose } from "../../data/site";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";

const ITEMS = [
  { label: "Misión", text: purpose.mission },
  { label: "Visión", text: purpose.vision },
];

export function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-blue py-20 text-off-white lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 animate-drift rounded-full bg-beige/15 blur-3xl"
      />

      <Container className="relative">
        <Reveal>
          <SectionHeader tone="dark" eyebrow="Nuestro propósito" title="Misión y visión" />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {ITEMS.map(({ label, text }, index) => (
            <Reveal key={label} delay={index * 0.1}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-off-white/10 bg-blue-dark/60 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-beige/40 hover:bg-blue-dark sm:p-10">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-6 -right-2 font-display text-[7rem] font-extrabold leading-none text-off-white/[0.04] transition-transform duration-700 group-hover:-translate-x-2"
                >
                  {label}
                </span>
                <h3 className="relative text-2xl font-bold text-beige">{label}</h3>
                <p className="relative mt-4 text-lg leading-relaxed text-off-white/85">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-off-white/60">
              Nuestros pilares
            </span>
            {pillars.map((pillar) => (
              <span
                key={pillar.title}
                title={pillar.description}
                className="rounded-full border border-beige/40 px-3.5 py-1 text-xs font-medium text-beige-light"
              >
                {pillar.title}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
