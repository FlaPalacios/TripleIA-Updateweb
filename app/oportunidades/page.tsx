import type { Metadata } from "next";
import { headers } from "next/headers";
import { OpportunitiesExplorer } from "../../src/components/opportunities/OpportunitiesExplorer";
import { SiteFooter } from "../../src/components/layout/SiteFooter";
import { SiteHeader } from "../../src/components/layout/SiteHeader";
import { WhatsAppButton } from "../../src/components/layout/WhatsAppButton";
import { getOpportunities } from "../../src/lib/opportunities";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/og.png`;
  const title = "Oportunidades y fondos | Triple IA Consultores";
  const description =
    "Explora convocatorias, fondos y programas para innovación, investigación, emprendimiento y proyectos con impacto.";

  return {
    title,
    description,
    openGraph: {
      title: "Oportunidades y fondos | Triple IA",
      description,
      images: [{ url: socialImage, width: 1734, height: 908, alt: "Triple IA Consultores" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Oportunidades y fondos | Triple IA",
      description,
      images: [socialImage],
    },
  };
}

export default function OpportunitiesPage() {
  const opportunities = getOpportunities();

  return (
    <>
      <SiteHeader tone="light" />
      <main className="opportunities-page">
        <section className="opportunities-heading container">
          <p className="section-kicker">Radar Triple IA</p>
          <div>
            <h1>Oportunidades y fondos</h1>
            <p>
              Recopilamos y ordenamos convocatorias para que puedas evaluar
              rápidamente dónde vale la pena profundizar.
            </p>
          </div>
          <span>{opportunities.length} registros disponibles</span>
        </section>
        <div className="container">
          <OpportunitiesExplorer opportunities={opportunities} />
        </div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
