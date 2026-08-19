import Link from "next/link";
import type { Opportunity } from "../../features/opportunities/types";
import { formatDeadline } from "../../lib/opportunities";
import { Reveal } from "../ui/Reveal";

interface FeaturedOpportunitiesProps {
  opportunities: Opportunity[];
}

export function FeaturedOpportunities({
  opportunities,
}: FeaturedOpportunitiesProps) {
  return (
    <section className="section opportunities-preview" aria-labelledby="featured-title">
      <div className="container">
        <div className="section-heading section-heading--split">
          <Reveal>
            <p className="section-kicker">Radar de financiamiento</p>
            <h2 id="featured-title">Oportunidades que merecen una mirada.</h2>
          </Reveal>
          <Reveal delay={80}>
            <p>
              Convocatorias revisadas para innovación, investigación,
              emprendimiento y proyectos con impacto. La información es libre;
              el acompañamiento es opcional.
            </p>
          </Reveal>
        </div>

        <div className="opportunity-preview-list">
          {opportunities.map((opportunity, index) => (
            <Reveal key={opportunity.id} delay={index * 55}>
              <Link
                className="opportunity-preview-row"
                href={`/oportunidades/${opportunity.id.toLowerCase()}`}
              >
                <span className="opportunity-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="opportunity-preview-copy">
                  <p>{opportunity.donor}</p>
                  <h3>{opportunity.title}</h3>
                  <span>{opportunity.sectorGroups.join(" · ")}</span>
                </div>
                <div className="opportunity-preview-meta">
                  <span>Cierre</span>
                  <strong>{formatDeadline(opportunity)}</strong>
                  <small>
                    {opportunity.amount} {opportunity.currency !== "No aplica" ? opportunity.currency : ""}
                  </small>
                </div>
                <span className="row-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Link className="section-link" href="/oportunidades">
          Explorar todas las oportunidades <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
