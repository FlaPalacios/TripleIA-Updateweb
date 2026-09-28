import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CalendarDays, MonitorPlay, Sparkles } from "lucide-react";
import { tiktokHighlight, trainings, type Training } from "../data/site";
import { startOfToday } from "../lib/utils";
import { PageHeader } from "../components/ui/PageHeader";
import { Container } from "../components/ui/Container";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Button } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";

// Mientras no haya al menos 2 capacitaciones próximas, se rellenan con avisos.
const MIN_UPCOMING = 2;

const COMING_SOON = [
  {
    title: "Nueva capacitación en camino",
    description: "Estamos preparando el próximo taller. Muy pronto anunciaremos fecha y temática.",
  },
  {
    title: "Se vienen más capacitaciones",
    description: "Más contenidos en IA, innovación y fondos. Síguenos para enterarte primero.",
  },
];

type Status = "past" | "today" | "upcoming";

function parseDate(iso: string): Date {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function statusOf(training: Training, today: Date): Status {
  const diff = parseDate(training.date).getTime() - today.getTime();
  if (diff < 0) return "past";
  return diff === 0 ? "today" : "upcoming";
}

const STATUS_LABEL: Record<Status, string> = {
  past: "Realizada",
  today: "Hoy",
  upcoming: "Próxima",
};

function TrainingCard({ training, status }: { training: Training; status: Status }) {
  const date = parseDate(training.date).toLocaleDateString("es-PE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-off-white transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-2xl">
      <div className="relative aspect-[17/10] overflow-hidden border-b-4 border-beige bg-blue">
        {training.image ? (
          <img
            src={training.image}
            alt={`Imagen de la capacitación ${training.title}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-beige">
            <MonitorPlay size={40} aria-hidden="true" />
          </div>
        )}
        <span
          className={`absolute left-4 top-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold shadow-lg ${
            status === "past" ? "bg-sand text-blue" : "bg-blue text-beige"
          }`}
        >
          {status !== "past" && (
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-beige opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-beige" />
            </span>
          )}
          {STATUS_LABEL[status]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl font-bold leading-snug text-blue">{training.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-blue-muted">{training.description}</p>

        <dl className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-blue/10 pt-5 text-sm text-blue">
          <div className="flex items-center gap-2">
            <dt className="sr-only">Fecha</dt>
            <CalendarDays size={16} className="text-blue-muted" aria-hidden="true" />
            <dd>{date}</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="sr-only">Modalidad</dt>
            <MonitorPlay size={16} className="text-blue-muted" aria-hidden="true" />
            <dd>{training.modality}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

function ComingSoonCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border-2 border-dashed border-blue/15 bg-sand/25">
      <div
        aria-hidden="true"
        className="relative flex aspect-[17/10] items-center justify-center overflow-hidden bg-sand/60 [background-image:radial-gradient(var(--color-blue)_1px,transparent_1px)] [background-size:18px_18px] [background-position:center] bg-blend-soft-light"
      >
        <span className="absolute h-40 w-40 animate-drift rounded-full bg-beige-light/80 blur-2xl" />
        <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-blue text-beige shadow-xl">
          <Sparkles size={28} />
        </span>
      </div>
      <div className="p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-light">
          Próximamente
        </p>
        <h3 className="mt-2 text-xl font-bold leading-snug text-blue">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-blue-muted">{description}</p>
      </div>
    </article>
  );
}

function TikTokSection() {
  const params = "description=0&music_info=0&rel=0&autoplay=0";

  return (
    <section id="tiktok" className="scroll-mt-20 bg-sand py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionHeader
              tone="beige"
              eyebrow="Síguenos en TikTok"
              title="IA, trucos y fondos en formato corto"
              description="En nuestro TikTok compartimos herramientas de inteligencia artificial, trucos prácticos, convocatorias abiertas y los anuncios de nuestras próximas capacitaciones."
            />
            <Button
              as="a"
              href={tiktokHighlight.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8"
            >
              Ver más en TikTok
              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
              />
            </Button>
          </Reveal>

          <Reveal delay={0.12} className="flex justify-center lg:col-span-5">
            <div className="w-full max-w-[260px] overflow-hidden rounded-3xl bg-blue shadow-2xl shadow-blue/30 ring-4 ring-off-white/60">
              <iframe
                src={`https://www.tiktok.com/player/v1/${tiktokHighlight.videoId}?${params}`}
                title="Video de Triple IA en TikTok"
                loading="lazy"
                allow="encrypted-media; fullscreen; picture-in-picture"
                className="aspect-[9/16] w-full"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function TrainingPage() {
  const today = startOfToday();
  // Orden cronológico: realizadas → próximas → avisos de "Próximamente".
  const items = [...trainings]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((training) => ({ training, status: statusOf(training, today) }));
  const upcomingCount = items.filter((item) => item.status !== "past").length;
  const placeholders = COMING_SOON.slice(0, Math.max(0, MIN_UPCOMING - upcomingCount));

  return (
    <>
      <PageHeader
        compact
        eyebrow="Capacitaciones"
        title="Fortalece las capacidades de tu equipo"
        description="Talleres y programas en inteligencia artificial, innovación y formulación de proyectos."
      />

      <section id="programas" className="scroll-mt-20 bg-white pb-20 pt-14 lg:pb-28 lg:pt-16">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Programas"
              title="Nuestras capacitaciones"
              description="Contenidos prácticos basados en nuestra experiencia en innovación, inteligencia artificial y proyectos financiados."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map(({ training, status }, index) => (
              <Reveal key={training.title} delay={index * 0.08}>
                <TrainingCard training={training} status={status} />
              </Reveal>
            ))}
            {placeholders.map((item, index) => (
              <Reveal key={item.title} delay={(trainings.length + index) * 0.08}>
                <ComingSoonCard {...item} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-blue-muted">
              ¿Necesitas una capacitación para tu organización? También diseñamos
              programas a medida.
              <Link
                to="/#contacto"
                className="inline-flex items-center gap-1 font-semibold text-blue underline-offset-4 hover:underline"
              >
                Conversemos
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </p>
          </Reveal>
        </Container>
      </section>

      <TikTokSection />
    </>
  );
}
