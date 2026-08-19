import Image from "next/image";
import { siteContent } from "../../content/site";
import { Reveal } from "../ui/Reveal";

export function ObservatorySection() {
  return (
    <section className="section observatory-section" aria-labelledby="observatory-title">
      <div className="container">
        <div className="section-heading section-heading--split">
          <Reveal>
            <p className="section-kicker">Observatorio Global</p>
            <h2 id="observatory-title">Los fondos también cuentan una historia.</h2>
          </Reveal>
          <Reveal delay={80}>
            <p>
              Organizamos datos públicos para seguir la inversión, comparar
              resultados y comprender mejor el ecosistema de financiamiento.
            </p>
          </Reveal>
        </div>

        <div className="dashboard-list">
          {siteContent.dashboards.map((dashboard, index) => (
            <Reveal key={dashboard.title} delay={index * 80}>
              <article className="dashboard-row">
                <a href={dashboard.url} target="_blank" rel="noreferrer">
                  <Image
                    src={dashboard.image}
                    alt={`Vista del ${dashboard.title}`}
                    fill
                    sizes="(max-width: 820px) 100vw, 65vw"
                  />
                </a>
                <div className="dashboard-copy">
                  <span>Observatorio 0{index + 1}</span>
                  <h3>{dashboard.title}</h3>
                  <p>{dashboard.description}</p>
                  <a href={dashboard.url} target="_blank" rel="noreferrer">
                    Abrir dashboard <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
