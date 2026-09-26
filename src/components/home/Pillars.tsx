import { pillars } from "../../data/site";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";

export function Pillars() {
  return (
    <section className="bg-blue py-20 text-off-white lg:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            tone="dark"
            eyebrow="Triple IA"
            title="Tres pilares, un mismo propósito"
            description="Así entendemos y ejecutamos cada proyecto en el que participamos."
          />
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.1}>
              <div className="border-t border-beige pt-6 transition-colors duration-300 hover:border-off-white">
                <span className="text-sm font-semibold text-beige">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-off-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-off-white/70">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
