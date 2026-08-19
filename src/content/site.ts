export const siteContent = {
  company: {
    name: "TRIPLE IA CONSULTORES",
    shortName: "Triple IA",
    email: "contacto@tripleiaconsultores.com",
    phone: "+51 956 307 219",
    location: "Lima, Perú – Madrid, España",
    schedule: "Lunes a viernes, 9:00 a. m. – 6:00 p. m.",
    description:
      "Firma de consultoría especializada en innovación, investigación aplicada, inteligencia artificial y ciencia de datos.",
  },
  navigation: [
    { label: "Inicio", href: "/" },
    { label: "Oportunidades", href: "/oportunidades" },
    { label: "Servicios", href: "/#servicios" },
    { label: "Proyectos", href: "/#proyectos" },
    { label: "Nosotros", href: "/#nosotros" },
  ],
  services: [
    {
      title: "Identificación de oportunidades de financiamiento",
      description:
        "Scouting estratégico de fondos nacionales e internacionales para iniciativas de investigación, innovación y desarrollo.",
    },
    {
      title: "Formulación de proyectos",
      description:
        "Diseño técnico, económico y estratégico de propuestas competitivas, alineadas con las bases y los objetivos institucionales.",
    },
    {
      title: "Asesoría y ejecución de proyectos financiados",
      description:
        "Acompañamiento en gestión, ejecución, monitoreo y cumplimiento de hitos técnicos y financieros.",
    },
    {
      title: "Capacitación en Innovación e IA",
      description:
        "Talleres y programas para fortalecer capacidades en innovación, inteligencia artificial y decisiones basadas en datos.",
    },
    {
      title: "Consultorías especializadas en IA",
      description:
        "Soluciones analíticas, modelos predictivos y sistemas inteligentes orientados a resultados concretos.",
    },
  ],
  pillars: [
    {
      title: "Innovación abierta",
      description: "Conectamos necesidades, capacidades y oportunidades.",
    },
    {
      title: "Investigación aplicada",
      description: "Transformamos conocimiento en soluciones y proyectos concretos.",
    },
    {
      title: "Inteligencia artificial y ciencia de datos",
      description: "Usamos tecnología y evidencia para resolver problemas y mejorar decisiones.",
    },
  ],
  evidence: [
    {
      value: "+S/ 20 M",
      label: "captados en fondos no reembolsables",
      context: "Para proyectos de investigación, desarrollo tecnológico e innovación.",
    },
    {
      value: "+10",
      label: "organizaciones con eficiencias comprobadas",
      context: "Mediante analítica, automatización y modelos predictivos.",
    },
    {
      value: "2",
      label: "observatorios de financiamiento activos",
      context: "PROCIENCIA y PROINNOVATE convertidos en información navegable.",
    },
  ],
  dashboards: [
    {
      title: "Análisis PROCIENCIA",
      description:
        "Seguimiento de concursos, fondos, proyectos seleccionados y distribución territorial de la inversión en investigación.",
      image: "/assets/observatory/dashboard-prociencia.jpg",
      url: "https://lookerstudio.google.com/u/0/reporting/d83fe444-ee04-42fe-adf1-13dbdfea575b/page/p_moit94wc0d",
    },
    {
      title: "Análisis PROINNOVATE",
      description:
        "Lectura comparada de fondos, inversión RNR, duración, cofinanciamiento y comportamiento regional de los proyectos.",
      image: "/assets/observatory/dashboard-proinnovate.jpg",
      url: "https://lookerstudio.google.com/u/0/reporting/53139621-9244-4220-b970-795d0084496b/page/p_b4jsfh7k0d",
    },
  ],
  socials: {
    instagram: "https://www.instagram.com/triple_ia_consultores",
    linkedin: "https://www.linkedin.com/company/triple-ia-consultores/posts/?feedView=all",
    tiktok: "https://www.tiktok.com/@triple.ia.innovation?lang=es",
    tiktokVideo:
      "https://www.tiktok.com/@triple.ia.innovation/video/7673936386105429266",
    whatsapp: "https://wa.me/51956307219",
  },
  contactForm:
    "https://docs.google.com/forms/d/e/1FAIpQLScldxc2B_Og7UQuKkTrzz7appZEC2iK0iShpIDfT9z31fhh8Q/viewform",
} as const;
