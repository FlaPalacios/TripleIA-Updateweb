import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useOpportunities } from "../hooks/useOpportunities";
import { formatDeadline } from "../lib/utils";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { company } from "../data/site";

function Field({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null;
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-blue-muted">
        {label}
      </dt>
      <dd className="mt-1 text-sm leading-relaxed text-blue">{value}</dd>
    </div>
  );
}

export function OpportunityDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { opportunities, loading, error } = useOpportunities();

  const opportunity = opportunities.find((o) => o.id === id);

  return (
    <div className="py-16 lg:py-20">
      <Container>
        <Link
          to="/oportunidades"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-muted hover:text-blue"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Volver a oportunidades
        </Link>

        {loading && (
          <p className="mt-10 text-sm text-blue-muted">Cargando oportunidad…</p>
        )}
        {error && (
          <p className="mt-10 text-sm text-blue-muted">
            No pudimos cargar la información de esta oportunidad.
          </p>
        )}
        {!loading && !error && !opportunity && (
          <div className="mt-10">
            <p className="text-sm text-blue-muted">
              No encontramos esta oportunidad. Puede que ya no esté disponible.
            </p>
            <Button as={Link} to="/oportunidades" className="mt-6">
              Ver todas las oportunidades
            </Button>
          </div>
        )}

        {!loading && !error && opportunity && (
          <article className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-muted">
                {opportunity.sectorRaw || "Sector no especificado"}
              </p>
              <h1 className="mt-3 text-4xl font-bold leading-[1.08] tracking-tight text-blue sm:text-5xl">
                {opportunity.title}
              </h1>
              <p className="mt-4 text-base text-blue-muted">{opportunity.donor}</p>

              <dl className="mt-10 grid gap-6 border-y border-blue/10 py-8 sm:grid-cols-2">
                <Field label="Fecha límite" value={formatDeadline(opportunity.deadlineRaw)} />
                <Field
                  label="Financiamiento"
                  value={
                    opportunity.currency && opportunity.currency !== "No especificado"
                      ? `${opportunity.amountRaw} ${opportunity.currency}`
                      : opportunity.amountRaw
                  }
                />
                <Field label="Alcance" value={opportunity.scope} />
                <Field label="Tipo de fondo" value={opportunity.fundType} />
                <Field label="Quiénes pueden postular" value={opportunity.whoCanApply} />
                <Field label="Sector" value={opportunity.sectorRaw} />
              </dl>

              {opportunity.additionalInfo && (
                <div className="mt-8">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-muted">
                    Información adicional
                  </h2>
                  <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-blue">
                    {opportunity.additionalInfo}
                  </p>
                </div>
              )}

              {opportunity.urlHref && (
                <Button
                  as="a"
                  href={opportunity.urlHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10"
                >
                  Ver convocatoria oficial
                  <ExternalLink size={16} aria-hidden="true" />
                </Button>
              )}
            </div>

            <aside className="lg:col-span-4">
              <div className="rounded-3xl bg-sand p-8 lg:sticky lg:top-28">
                <h2 className="text-xl font-bold text-blue">
                  ¿Necesitas apoyo para postular?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-blue-light">
                  Podemos ayudarte a formular y presentar tu propuesta para
                  esta convocatoria.
                </p>
                <Button
                  as="a"
                  href={company.formUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 w-full"
                >
                  Conversemos
                </Button>
              </div>
            </aside>
          </article>
        )}
      </Container>
    </div>
  );
}
