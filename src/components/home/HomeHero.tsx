interface HomeHeroProps {
  total: number;
  upcoming: number;
  open: number;
}

export function HomeHero({ total, upcoming, open }: HomeHeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Innovación aplicada desde Perú</p>
        <h1 id="hero-title">
          Conectamos <span>oportunidades</span>, innovación y tecnología para
          hacer crecer proyectos.
        </h1>
        <p className="hero-lead">
          Identificamos fondos, formulamos iniciativas y convertimos datos y
          conocimiento en decisiones que pueden ejecutarse.
        </p>
        <div className="hero-actions">
          <Link className="primary-cta" href="/oportunidades">
            Ver oportunidades
            <span aria-hidden="true">↗</span>
          </Link>
          <a className="text-link" href="#nosotros">
            Conocer Triple IA
          </a>
        </div>
      </div>

      <aside className="hero-index" aria-label="Panorama de oportunidades">
        <div className="index-heading">
          <span>Radar activo</span>
          <span>Actualizado</span>
        </div>
        <div className="index-stat">
          <strong>{total}</strong>
          <span>oportunidades registradas y revisadas</span>
        </div>
        <div className="index-row">
          <span>Próximos cierres</span>
          <strong>{upcoming}</strong>
        </div>
        <div className="index-row">
          <span>Convocatorias abiertas</span>
          <strong>{open}</strong>
        </div>
        <div className="index-row">
          <span>Alcance</span>
          <strong>Perú + Global</strong>
        </div>
        <Link href="/oportunidades">Explorar el radar completo</Link>
      </aside>
    </section>
  );
}
import Link from "next/link";
