import { useRef, useState, type FormEvent } from "react";
import { CheckCircle2, GraduationCap, Mail } from "lucide-react";
import { company, trainings } from "../data/site";
import { PageHeader } from "../components/ui/PageHeader";
import { Container } from "../components/ui/Container";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Button } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { WHATSAPP_ICON } from "../components/social/WhatsAppButton";

const CUSTOM_TRAINING = "Programa a medida para mi organización";

const FIELD_CLASSES =
  "w-full rounded-xl border border-blue/20 bg-white px-4 py-3 text-sm text-blue placeholder:text-blue-muted/70 focus:border-blue focus:outline-none";

interface Registration {
  name: string;
  email: string;
  phone: string;
  organization: string;
  training: string;
  message: string;
}

function readForm(form: HTMLFormElement): Registration {
  const data = new FormData(form);
  const get = (key: string) => String(data.get(key) ?? "").trim();
  return {
    name: get("name"),
    email: get("email"),
    phone: get("phone"),
    organization: get("organization"),
    training: get("training"),
    message: get("message"),
  };
}

function buildMessage(r: Registration): string {
  const details = [
    `Nombre: ${r.name}`,
    `Correo: ${r.email}`,
    r.phone && `Teléfono: ${r.phone}`,
    r.organization && `Organización: ${r.organization}`,
    `Capacitación de interés: ${r.training}`,
    r.message && `Comentarios: ${r.message}`,
  ].filter(Boolean);

  return ["Hola Triple IA, quiero registrarme en una capacitación.", "", ...details].join("\n");
}

export function TrainingPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const handleWhatsApp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = buildMessage(readForm(event.currentTarget));
    window.open(
      `${company.whatsappUrl}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  };

  const handleEmail = () => {
    const form = formRef.current;
    if (!form || !form.reportValidity()) return;
    const registration = readForm(form);
    const subject = `Registro a capacitación: ${registration.training}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(buildMessage(registration))}`;
    setSent(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Capacitaciones"
        title="Fortalece las capacidades de tu equipo"
        description="Programas y talleres en innovación, formulación de proyectos e inteligencia artificial. Regístrate y te avisaremos de las próximas fechas."
      >
        <Button as="a" href="#registro" className="mt-8">
          Quiero registrarme
        </Button>
      </PageHeader>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Programas"
              title="¿Qué puedes aprender con nosotros?"
              description="Contenidos prácticos basados en nuestra experiencia formulando y ejecutando proyectos financiados."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {trainings.map((training, index) => (
              <Reveal key={training.title} delay={index * 0.08}>
                <article className="group flex h-full flex-col rounded-3xl border-t-4 border-beige bg-off-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-2xl">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue text-beige transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <GraduationCap size={26} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold leading-snug text-blue">{training.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-blue-muted">
                    {training.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {training.topics.map((topic) => (
                      <li
                        key={topic}
                        className="rounded-full bg-beige-light px-3 py-1 text-xs font-medium text-blue"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-8 text-sm text-blue-muted">
              ¿Necesitas algo específico? También diseñamos programas a medida
              para instituciones y empresas.
            </p>
          </Reveal>
        </Container>
      </section>

      <section id="registro" className="scroll-mt-20 bg-sand py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-4">
              <SectionHeader
                tone="beige"
                eyebrow="Registro"
                title="Inscríbete"
                description="Completa tus datos y envíanos tu registro por WhatsApp o correo. Te contactaremos con fechas, modalidad y detalles."
              />
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-8">
              {sent && (
                <div
                  role="status"
                  className="mb-6 flex items-start gap-3 rounded-2xl border border-blue/20 bg-off-white/70 p-4 text-sm text-blue"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <p>
                    ¡Gracias! Solo falta que envíes el mensaje que se abrió con
                    tus datos. Te responderemos a la brevedad.
                  </p>
                </div>
              )}

              <form
                ref={formRef}
                onSubmit={handleWhatsApp}
                className="grid gap-5 rounded-3xl bg-off-white p-6 shadow-xl shadow-blue/10 sm:grid-cols-2 sm:p-10"
              >
                <label className="flex flex-col gap-2 text-sm font-medium text-blue">
                  Nombre completo *
                  <input name="name" required autoComplete="name" className={FIELD_CLASSES} />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-blue">
                  Correo electrónico *
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={FIELD_CLASSES}
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-blue">
                  Teléfono / WhatsApp
                  <input name="phone" type="tel" autoComplete="tel" className={FIELD_CLASSES} />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-blue">
                  Organización
                  <input name="organization" autoComplete="organization" className={FIELD_CLASSES} />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-blue sm:col-span-2">
                  Capacitación de interés *
                  <select name="training" required defaultValue="" className={FIELD_CLASSES}>
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    {trainings.map((training) => (
                      <option key={training.title} value={training.title}>
                        {training.title}
                      </option>
                    ))}
                    <option value={CUSTOM_TRAINING}>{CUSTOM_TRAINING}</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-blue sm:col-span-2">
                  Comentarios
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Cuéntanos qué te interesa aprender o cuántas personas participarían."
                    className={FIELD_CLASSES}
                  />
                </label>

                <div className="flex flex-wrap gap-4 sm:col-span-2">
                  <Button type="submit">
                    <img src={WHATSAPP_ICON} alt="" className="h-5 w-5" />
                    Registrarme por WhatsApp
                  </Button>
                  <Button type="button" variant="secondary" onClick={handleEmail}>
                    <Mail size={16} aria-hidden="true" />
                    Registrarme por correo
                  </Button>
                </div>
              </form>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
