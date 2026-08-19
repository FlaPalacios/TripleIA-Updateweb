import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../../src/components/layout/SiteFooter";
import { SiteHeader } from "../../../src/components/layout/SiteHeader";
import { WhatsAppButton } from "../../../src/components/layout/WhatsAppButton";
import { siteContent } from "../../../src/content/site";
import {
  formatDeadline,
  getOpportunities,
  getOpportunityById,
} from "../../../src/lib/opportunities";

interface OpportunityDetailProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return getOpportunities().map((item) => ({ id: item.id.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: OpportunityDetailProps): Promise<Metadata> {
  const { id } = await params;
  const opportunity = getOpportunityById(id);
  if (!opportunity) return {};

  const description = `${opportunity.donor}. ${opportunity.fundType}. Fecha límite: ${formatDeadline(opportunity)}.`;
  return {
    title: `${opportunity.title} | Triple IA`,
    description,
    openGraph: {
      title: opportunity.title,
      description,
      images: [],
      type: "article",
    },
    twitter: {
      card: "summary",
      title: opportunity.title,
      description,
      images: [],
    },
  };
}

export default async function OpportunityDetailPage({ params }: OpportunityDetailProps) {
  const { id } = await params;
  const opportunity = getOpportunityById(id);
  if (!opportunity) notFound();

  const facts = [
    ["Donante o institución", opportunity.donor],
    ["Fecha límite", formatDeadline(opportunity)],
    ["Financiamiento", `${opportunity.amount} ${opportunity.currency}`],
    ["Modalidad", opportunity.fundType],
    ["Alcance", opportunity.scope],
    ["Sector", opportunity.sector],
  ];

  return (
    <>
      <SiteHeader tone="light" />
      <main className="opportunity-detail-page">
        <div className="container detail-breadcrumb">
          <Link href="/oportunidades">Oportunidades</Link>
          <span>/</span>
          <span>{opportunity.id}</span>
        </div>

        <header className="container detail-hero">
          <div>
            <div className="detail-tags">
              <span>{opportunity.fundGroup}</span>
              <span>{opportunity.scopeGroup}</span>
              <span className={`status-${opportunity.deadlineStatus}`}>
                {opportunity.deadlineStatus === "expired" ? "Vencida" : "Disponible"}
              </span>
            </div>
            <h1>{opportunity.title}</h1>
          </div>
          <aside>
            <span>Institución</span>
            <strong>{opportunity.donor}</strong>
            <small>Registrada el {opportunity.registeredAt}</small>
          </aside>
        </header>

        <div className="container detail-layout">
          <article className="detail-content">
            <section aria-labelledby="summary-title">
              <p className="section-kicker">Resumen de la convocatoria</p>
              <h2 id="summary-title">Lo esencial para evaluar esta oportunidad.</h2>
              <p className="detail-description">{opportunity.additionalInfo}</p>
            </section>

            <section aria-labelledby="eligibility-title">
              <p className="section-kicker">Elegibilidad</p>
              <h2 id="eligibility-title">Quiénes pueden postular</h2>
              <p>{opportunity.eligibility}</p>
            </section>
          </article>

          <aside className="detail-facts">
            {facts.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
            {opportunity.officialUrl && (
              <a href={opportunity.officialUrl} target="_blank" rel="noreferrer">
                Ver convocatoria oficial <span aria-hidden="true">↗</span>
              </a>
            )}
          </aside>
        </div>

        <section className="detail-support">
          <div className="container">
            <div>
              <p className="section-kicker">Acompañamiento opcional</p>
              <h2>¿Necesitas apoyo para postular?</h2>
            </div>
            <div>
              <p>
                Podemos revisar el encaje, estructurar la propuesta y acompañar
                la formulación sin limitar tu acceso a la información gratuita.
              </p>
              <a href={siteContent.contactForm} target="_blank" rel="noreferrer">
                Cuéntanos sobre tu postulación <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
