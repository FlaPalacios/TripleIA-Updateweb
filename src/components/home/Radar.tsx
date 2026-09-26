import type { RefObject } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Radar as RadarIcon, Timer, CircleDot } from "lucide-react";
import { useOpportunities } from "../../hooks/useOpportunities";
import { isExpired, startOfToday } from "../../lib/utils";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { useCountUp } from "../../hooks/useCountUp";

const CLOSING_SOON_DAYS = 30;
const DAY_MS = 1000 * 60 * 60 * 24;

// Posiciones (en %) de los puntos del radar; cada uno se enciende con un
// retraso distinto para que parezca que el barrido los va detectando.
const BLIPS = [
  { top: 22, left: 58, delay: 0.3 },
  { top: 35, left: 76, delay: 0.7 },
  { top: 62, left: 80, delay: 1.2 },
  { top: 78, left: 55, delay: 1.9 },
  { top: 70, left: 28, delay: 2.5 },
  { top: 45, left: 18, delay: 3.0 },
  { top: 26, left: 32, delay: 3.6 },
  { top: 50, left: 62, delay: 1.0 },
];

function useRadarStats() {
  const { opportunities, loading, error } = useOpportunities();
  const today = startOfToday();

  const active = opportunities.filter((o) => !isExpired(o.deadlineDate, today));

  const closingSoon = active.filter(
    (o) =>
      o.deadlineDate &&
      Math.ceil((o.deadlineDate.getTime() - today.getTime()) / DAY_MS) <= CLOSING_SOON_DAYS
  ).length;

  const openEnded = active.filter((o) => !o.deadlineDate).length;

  return { total: active.length, closingSoon, openEnded, ready: !loading && !error };
}

interface StatProps {
  icon: typeof RadarIcon;
  value: number;
  label: string;
}

function Stat({ icon: Icon, value, label }: StatProps) {
  const { ref, value: animated } = useCountUp(value);

  return (
    <div className="group flex items-center gap-4 rounded-2xl bg-off-white/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-off-white">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue text-beige transition-transform duration-300 group-hover:scale-110">
        <Icon size={20} aria-hidden="true" />
      </span>
      <div ref={ref as RefObject<HTMLDivElement>}>
        <p className="font-display text-3xl font-bold text-blue">{animated}</p>
        <p className="text-sm text-blue-light">{label}</p>
      </div>
    </div>
  );
}

function RadarVisual({ total }: { total: number | null }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
      <div className="absolute inset-0 overflow-hidden rounded-full bg-blue shadow-2xl shadow-blue/30">
        {/* Anillos y ejes */}
        {[0, 1, 2].map((ring) => (
          <div
            key={ring}
            className="absolute rounded-full border border-beige/20"
            style={{ inset: `${(ring + 1) * 12.5}%` }}
          />
        ))}
        <div className="absolute inset-x-0 top-1/2 h-px bg-beige/15" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-beige/15" />

        {/* Barrido */}
        <div className="absolute inset-0 animate-sweep rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_280deg,rgba(209,189,155,0.55)_360deg)]" />

        {BLIPS.map((blip) => (
          <span
            key={`${blip.top}-${blip.left}`}
            className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-blip rounded-full bg-beige opacity-0 shadow-[0_0_16px_4px_rgba(209,189,155,0.6)]"
            style={{ top: `${blip.top}%`, left: `${blip.left}%`, animationDelay: `${blip.delay}s` }}
          />
        ))}
      </div>

      {/* Centro con el total */}
      <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-beige/40 bg-blue-dark/90 text-center backdrop-blur">
        <span className="font-display text-3xl font-bold text-beige">{total ?? "—"}</span>
        <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-off-white/70">
          activas
        </span>
      </div>
    </div>
  );
}

export function Radar() {
  const { total, closingSoon, openEnded, ready } = useRadarStats();

  return (
    <section id="radar" className="relative scroll-mt-20 overflow-hidden bg-sand py-24 lg:py-32">
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-6">
            <p className="mb-4 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-light">
              <RadarIcon size={16} className="text-blue" aria-hidden="true" />
              Radar de fondos
            </p>
            <h2 className="text-4xl font-bold leading-[1.08] tracking-tight text-blue sm:text-5xl">
              Convocatorias vigentes, en un solo lugar
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-blue-light">
              Monitoreamos fondos concursables, grants y programas de
              cooperación nacionales e internacionales para innovación,
              investigación y emprendimiento. Cada convocatoria incluye
              requisitos, montos, fechas y nuestra evaluación estratégica.
            </p>

            {ready && (
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <Stat icon={RadarIcon} value={total} label="Activas" />
                <Stat icon={Timer} value={closingSoon} label="Cierran en 30 días" />
                <Stat icon={CircleDot} value={openEnded} label="Ventanilla abierta" />
              </div>
            )}

            <Button as={Link} to="/oportunidades" className="mt-10">
              Ver oportunidades de financiamiento
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </Button>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-8">
            <RadarVisual total={ready ? total : null} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
