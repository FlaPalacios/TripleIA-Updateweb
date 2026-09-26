import { Link } from "react-router-dom";
import type { Opportunity } from "../../data/opportunities";
import { formatDeadline } from "../../lib/utils";

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  return (
    <Link
      to={`/oportunidades/${opportunity.id}`}
      className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-blue/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-beige hover:shadow-xl"
    >
      <span className="absolute left-0 top-0 h-1 w-0 bg-beige transition-all duration-500 group-hover:w-full" />

      <div className="flex items-start justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-muted">
          {opportunity.sectorRaw || "Sector no especificado"}
        </p>
        {opportunity.score !== null && (
          <span className="shrink-0 rounded-full bg-beige-light px-2.5 py-0.5 text-xs font-semibold text-blue">
            Score {opportunity.score}
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold leading-snug text-blue transition-colors group-hover:text-blue-light">
        {opportunity.title}
      </h3>

      <p className="text-sm text-blue-muted">{opportunity.donor}</p>

      <dl className="mt-auto grid grid-cols-2 gap-x-4 gap-y-2 border-t border-blue/10 pt-4 text-sm">
        <div>
          <dt className="text-xs uppercase tracking-wide text-blue-muted">
            Fecha límite
          </dt>
          <dd className="text-blue">{formatDeadline(opportunity.deadlineRaw)}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-blue-muted">Monto</dt>
          <dd className="text-blue">
            {opportunity.amountRaw}
            {opportunity.currency && opportunity.currency !== "No especificado"
              ? ` ${opportunity.currency}`
              : ""}
          </dd>
        </div>
      </dl>
    </Link>
  );
}
