"use client";

export default function OpportunitiesError({ reset }: { reset: () => void }) {
  return (
    <main className="data-state-page">
      <h1>No pudimos cargar las oportunidades.</h1>
      <p>El archivo sigue disponible; intenta cargarlo nuevamente.</p>
      <button type="button" onClick={reset}>Volver a intentar</button>
    </main>
  );
}
