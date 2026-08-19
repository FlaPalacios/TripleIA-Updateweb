import { siteContent } from "../../content/site";
import { Reveal } from "../ui/Reveal";

export function EvidenceSection() {
  return (
    <section id="proyectos" className="section evidence-section" aria-labelledby="evidence-title">
      <div className="container">
        <Reveal>
          <div className="evidence-heading">
            <p className="section-kicker">Evidencia antes que promesas</p>
            <h2 id="evidence-title">Experiencia que se puede poner en contexto.</h2>
          </div>
        </Reveal>

        <div className="evidence-grid">
          {siteContent.evidence.map((item, index) => (
            <Reveal key={item.value} delay={index * 70}>
              <article className="evidence-item">
                <strong>{item.value}</strong>
                <h3>{item.label}</h3>
                <p>{item.context}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
