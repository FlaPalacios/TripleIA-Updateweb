import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, MonitorPlay, Sparkles } from "lucide-react";
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

type SessionStatus = "past" | "today" | "upcoming";
type CourseStatus = "upcoming" | "today" | "ongoing" | "past";

function parseDate(iso: string): Date {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function sessionStatus(iso: string, today: Date): SessionStatus {
  const diff = parseDate(iso).getTime() - today.getTime();
  if (diff < 0) return "past";
  return diff === 0 ? "today" : "upcoming";
}

function courseStatus(statuses: SessionStatus[]): CourseStatus {
  if (statuses.includes("today")) return "today";
  if (statuses.every((s) => s === "past")) return "past";
  if (statuses.every((s) => s === "upcoming")) return "upcoming";
  return "ongoing";
}

const COURSE_LABEL: Record<CourseStatus, string> = {
  upcoming: "Próxima",
  today: "Hoy",
  ongoing: "En curso",
  past: "Realizada",
};

/** "Miércoles 30 de setiembre" */
function formatSession(iso: string): string {
  const text = parseDate(iso).toLocaleDateString("es-PE", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  return (text.charAt(0).toUpperCase() + text.slice(1)).replace(",", "");
}

function sessionLabel(status: SessionStatus, isFinal: boolean): string {
  if (status === "past") return "Realizada";
  if (status === "today") return "Hoy";
  return isFinal ? "Última sesión" : "Próxima";
}

function LiveDot({ dark = false }: { dark?: boolean }) {
  const color = dark ? "bg-blue" : "bg-beige";
  return (
    <span className="relative flex h-2 w-2">
      <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${color}`} />
      <span className={`relative inline-flex h-2 w-2 rounded-full ${color}`} />
    </span>
  );
}

interface TrainingCardProps {
  training: Training;
  sessions: { date: string; status: SessionStatus }[];
  status: CourseStatus;
}

function TrainingCard({ training, sessions, status }: TrainingCardProps) {
  const done = sessions.filter((s) => s.status === "past").length;
  const nextIndex = sessions.findIndex((s) => s.status !== "past");
  const multi = sessions.length > 1;

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
            status === "past" ? "bg-sand text-blue" : "bg-beige text-blue"
          }`}
        >
          {status !== "past" && <LiveDot dark />}
          {COURSE_LABEL[status]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl font-bold leading-snug text-blue">{training.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-blue-muted">{training.description}</p>

        <div className="mt-6 flex-1 border-t border-blue/10 pt-5">
          <div className="mb-4 flex items-center justify-between text-xs font-semibold text-blue-light">
            <span>
              {multi
                ? `${done} de ${sessions.length} sesiones realizadas`
                : done === 1
                  ? "Sesión realizada"
                  : "Sesión única"}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MonitorPlay size={14} aria-hidden="true" />
              {training.modality}
            </span>
          </div>
          {multi && (
            <div className="-mt-2 mb-5 h-1.5 overflow-hidden rounded-full bg-sand/60">
              <div
                className="h-full rounded-full bg-blue transition-all duration-700"
                style={{ width: `${(done / sessions.length) * 100}%` }}
              />
            </div>
          )}

          <ol className="relative flex flex-col gap-3">
            {multi && (
              <span aria-hidden="true" className="absolute bottom-3 left-[11px] top-3 w-px bg-blue/15" />
            )}
            {sessions.map((session, index) => {
              const past = session.status === "past";
              const isNext = index === nextIndex;
              return (
                <li key={session.date} className="relative flex items-center gap-3">
                  <span
                    className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                      past
                        ? "bg-sand text-blue"
                        : isNext
                          ? "bg-blue text-beige ring-4 ring-beige/40"
                          : "border-2 border-blue/25 bg-off-white"
                    }`}
                  >
                    {past ? <Check size={13} strokeWidth={3} aria-hidden="true" /> : isNext ? <LiveDot /> : null}
                  </span>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <p className={`text-sm ${past ? "text-blue-muted" : "font-semibold text-blue"}`}>
                      {multi && <span className="font-semibold">Sesión {index + 1} · </span>}
                      {formatSession(session.date)}
                    </p>
                    <span className={`text-xs font-semibold ${past ? "text-blue-muted" : "text-blue"}`}>
                      {sessionLabel(session.status, multi && index === sessions.length - 1)}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
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
      <div className="flex flex-1 flex-col p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-light">
          Próximamente
        </p>
        <h3 className="mt-2 text-xl font-bold leading-snug text-blue">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-blue-muted">{description}</p>
        <a
          href="#tiktok"
          className="group/link mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-blue underline-offset-4 hover:underline"
        >
          Enterarme en TikTok
          <ArrowRight
            size={14}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </a>
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
  // Orden cronológico por la primera sesión, seguido de los avisos de "Próximamente".
  const items = trainings
    .map((training) => {
      const sessions = [...training.sessions]
        .sort()
        .map((date) => ({ date, status: sessionStatus(date, today) }));
      return { training, sessions, status: courseStatus(sessions.map((s) => s.status)) };
    })
    .sort((a, b) => a.sessions[0].date.localeCompare(b.sessions[0].date));
  // Solo los cursos que aún no empiezan reemplazan a los avisos.
  const upcomingCount = items.filter((item) => item.status === "upcoming").length;
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
            {items.map(({ training, sessions, status }, index) => (
              <Reveal key={training.title} delay={index * 0.08}>
                <TrainingCard training={training} sessions={sessions} status={status} />
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
