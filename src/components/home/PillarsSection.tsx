import { siteContent } from "../../content/site";
import { Reveal } from "../ui/Reveal";

export function PillarsSection() {
  return (
    <section className="section pillars-section" aria-labelledby="pillars-title">
      <div className="container">
        <Reveal>
          <div className="pillars-heading">
            <p className="section-kicker">El significado detrás del nombre</p>
            <h2 id="pillars-title">Tres perspectivas. Una forma de trabajar.</h2>
          </div>
        </Reveal>

        <div className="pillars-grid">
          {siteContent.pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 70}>
              <article className="pillar">
                <span>IA.{index + 1}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <div className="pillar-line" aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
