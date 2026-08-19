import Link from "next/link";
import { SiteHeader } from "../../../src/components/layout/SiteHeader";

export default function OpportunityNotFound() {
  return (
    <>
      <SiteHeader tone="light" />
      <main className="data-state-page">
        <h1>Esta oportunidad no está disponible.</h1>
        <p>Puede haber cambiado de identificador o ya no formar parte del archivo.</p>
        <Link href="/oportunidades">Volver a oportunidades</Link>
      </main>
    </>
  );
}
