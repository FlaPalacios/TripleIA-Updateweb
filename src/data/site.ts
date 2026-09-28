// Contenido institucional real de Triple IA Consultores.
// Fuente: repositorio anterior (src/config/content.ts) — reutilizado y adaptado
// al nuevo posicionamiento de marca definido en TRIPLE_IA_CODEX_MASTER_SPEC.md.

export interface NavLink {
  label: string;
  href: string;
}

export interface Pillar {
  title: string;
  description: string;
}

export interface Service {
  /** Ancla en /servicios (ej. /servicios#formulacion). */
  slug: string;
  title: string;
  /** Título corto para los bloques compactos del home. */
  shortTitle: string;
  description: string;
  /** Qué incluye el servicio (se muestra en /servicios). */
  includes: string[];
  /** Adónde lleva el bloque en "Nuestros Servicios". */
  href: string;
  cta: string;
}

export interface Project {
  title: string;
  description: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface ObservatoryDashboard {
  title: string;
  description: string;
  image: string;
  url: string;
}

export const company = {
  name: "Triple IA Consultores",
  tagline:
    "Conectamos oportunidades, innovación y tecnología para hacer crecer proyectos.",
  email: "contacto@tripleiaconsultores.com",
  whatsappNumber: "+51 956 307 219",
  whatsappUrl: "https://wa.me/51956307219",
  location: "Lima, Perú - Madrid, España",
  schedule: "Lunes a Viernes, 9:00 AM - 6:00 PM",
  formUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLScldxc2B_Og7UQuKkTrzz7appZEC2iK0iShpIDfT9z31fhh8Q/viewform",
};

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  photoPosition: string;
}

export interface Training {
  title: string;
  description: string;
  /** Fecha en formato AAAA-MM-DD. Si ya pasó, se muestra como "Realizada". */
  date: string;
  modality: string;
  /** Imagen de la capacitación (proporción aprox. 16:9). */
  image?: string;
}

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Nuestros Servicios", href: "/servicios" },
  { label: "Oportunidades de financiamiento", href: "/oportunidades" },
  { label: "Observatorio de proyectos", href: "/proyectos" },
  { label: "Capacitaciones", href: "/capacitaciones" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/#contacto" },
];

export const about = {
  title: "Quiénes Somos",
  description:
    "Somos una firma de consultoría especializada en el diseño, formulación y ejecución de proyectos de innovación, investigación aplicada e inteligencia artificial para organizaciones públicas y privadas. Trabajamos bajo un enfoque integral basado en tres pilares estratégicos, con el propósito de ser el aliado estratégico de las organizaciones en la captación y gestión de fondos concursables, así como en el desarrollo de proyectos tecnológicos de alto impacto, generando valor económico, social y ambiental con estándares de excelencia.",
};

export const pillars: Pillar[] = [
  {
    title: "Innovación abierta",
    description: "Conectar necesidades, capacidades y oportunidades.",
  },
  {
    title: "Investigación aplicada",
    description:
      "Transformar conocimiento en soluciones y proyectos concretos.",
  },
  {
    title: "Inteligencia artificial y ciencia de datos",
    description:
      "Usar tecnología y datos para resolver problemas y mejorar decisiones.",
  },
];

export const services: Service[] = [
  {
    slug: "capacitacion",
    title: "Capacitación en Innovación e IA",
    shortTitle: "Capacitación",
    description:
      "Programas y talleres especializados para el fortalecimiento de capacidades en innovación, IA y toma de decisiones basadas en datos.",
    href: "/capacitaciones",
    cta: "Ver capacitaciones",
    includes: [
      "Talleres de formulación de proyectos e innovación",
      "Programas de IA y toma de decisiones basadas en datos",
      "Programas a medida para instituciones y empresas",
    ],
  },
  {
    slug: "consultoria-ia",
    title: "Consultorías especializadas en IA",
    shortTitle: "Consultoría en IA",
    description:
      "Diseño e implementación de soluciones analíticas, modelos predictivos y sistemas inteligentes orientados a resultados de negocio.",
    href: "/#contacto",
    cta: "Conversemos",
    includes: [
      "Diagnóstico de datos y oportunidades de automatización",
      "Modelos predictivos y analítica avanzada",
      "Soluciones con IA generativa y sistemas inteligentes",
    ],
  },
  {
    slug: "fondos",
    title: "Identificación de oportunidades de financiamiento",
    shortTitle: "Identificación de fondos",
    description:
      "Scouting estratégico de fondos nacionales e internacionales para proyectos de I+D+i.",
    href: "/oportunidades",
    cta: "Ver oportunidades",
    includes: [
      "Monitoreo de fondos nacionales e internacionales: concursos públicos, grants y cooperación",
      "Evaluación de elegibilidad y encaje estratégico con tu organización",
      "Priorización de convocatorias según plazos, montos y probabilidad de éxito",
    ],
  },
  {
    slug: "formulacion",
    title: "Formulación de proyectos",
    shortTitle: "Formulación de proyectos",
    description:
      "Diseño técnico, económico y estratégico de propuestas competitivas, alineadas a las bases de fondos concursables y objetivos institucionales.",
    href: "/#contacto",
    cta: "Formular mi proyecto",
    includes: [
      "Análisis de bases y criterios de evaluación de la convocatoria",
      "Diseño técnico: objetivos, metodología, marco lógico y cronograma",
      "Presupuesto y estructura financiera alineados al fondo",
      "Redacción, revisión y presentación de la propuesta",
    ],
  },
  {
    slug: "ejecucion",
    title: "Asesoría y ejecución de proyectos financiados",
    shortTitle: "Asesoría y ejecución",
    description:
      "Acompañamiento integral en la gestión, ejecución, monitoreo y cumplimiento de hitos técnicos y financieros de proyectos adjudicados.",
    href: "/#contacto",
    cta: "Conversemos",
    includes: [
      "Gestión y monitoreo de hitos técnicos y financieros",
      "Preparación de informes técnicos y rendiciones de cuentas",
      "Soporte en la relación con la entidad financiadora",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Más de S/ 20 millones captados en fondos no reembolsables",
    description:
      "Para proyectos de investigación, desarrollo tecnológico e innovación (I+D+i), a nivel nacional e internacional.",
  },
  {
    title: "Más de 10 organizaciones con ahorros y eficiencias comprobadas",
    description:
      "Optimización de procesos operativos mediante analítica avanzada, automatización y modelos predictivos.",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", url: "https://www.instagram.com/triple_ia_consultores" },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/triple-ia-consultores/posts/?feedView=all",
  },
  { label: "TikTok", url: "https://www.tiktok.com/@triple.ia.innovation?lang=es" },
  { label: "WhatsApp", url: "https://wa.me/51956307219" },
];

export const observatory: ObservatoryDashboard[] = [
  {
    title: "Análisis PROCIENCIA",
    description:
      "Análisis detallado y seguimiento estratégico de concursos del Programa Nacional de Investigación Científica y Estudios Avanzados.",
    image: "/assets/observatory/dashboard-prociencia.jpg",
    url: "https://lookerstudio.google.com/u/0/reporting/d83fe444-ee04-42fe-adf1-13dbdfea575b/page/p_moit94wc0d",
  },
  {
    title: "Análisis PROINNOVATE",
    description:
      "Análisis detallado y seguimiento estratégico de concursos del Programa Nacional de Desarrollo Tecnológico e Innovación.",
    image: "/assets/observatory/dashboard-proinnovate.jpg",
    url: "https://lookerstudio.google.com/u/0/reporting/53139621-9244-4220-b970-795d0084496b/page/p_b4jsfh7k0d",
  },
];

export const team: TeamMember[] = [
  {
    name: "Fernando Cárdenas",
    role: "CEO",
    bio: "Ingeniero Industrial con más de 10 años de experiencia liderando la formulación y ejecución de proyectos financiados por CONCYTEC, ProCiencia y USAID.",
    photo: "/assets/team/fernando-tripleia.webp",
    photoPosition: "center top",
  },
  {
    name: "Katherine Cárdenas",
    role: "Abogada Tributarista",
    bio: "Responsable de la asesoría legal y tributaria de la consultora, así como del soporte normativo para los proyectos de nuestros clientes.",
    photo: "/assets/team/katherine-tripleia.webp",
    photoPosition: "center top",
  },
  {
    name: "Max Escalante",
    role: "Marketing, Innovación y Gestión de Proyectos",
    bio: "Desarrolla contenidos, analiza información y participa en la gestión de proyectos e iniciativas de innovación de la consultora.",
    photo: "/assets/team/max-tripleia.webp",
    photoPosition: "center top",
  },
  {
    name: "Flavio Palacios",
    role: "Desarrollo Web, Automatización e IA",
    bio: "Desarrolla soluciones web, automatizaciones y herramientas de inteligencia artificial para los proyectos y servicios de Triple IA.",
    photo: "/assets/team/flavio-tripleia.webp",
    photoPosition: "center top",
  },
];

// Capacitaciones realizadas y próximas. Para anunciar una nueva, agrégala
// aquí: el estado (Realizada / Próxima) se calcula solo según la fecha.
export const trainings: Training[] = [
  {
    title: "De preguntas a soluciones: Domina Claude",
    description:
      "Taller práctico para aprovechar Claude en el trabajo diario: formular buenas preguntas, analizar información y convertir ideas en soluciones con IA.",
    date: "2026-09-30",
    modality: "Virtual",
    image: "/assets/trainings/sesion-01-domina-claude.webp",
  },
];

/** Video de TikTok destacado en la página de Capacitaciones. */
export const tiktokHighlight = {
  videoId: "7687014906750618898",
  url: "https://www.tiktok.com/@triple.ia.innovation/video/7687014906750618898",
  profileUrl: "https://www.tiktok.com/@triple.ia.innovation",
};
