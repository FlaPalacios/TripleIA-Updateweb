import { LayoutDashboard, Rocket, Search, GraduationCap, BrainCircuit } from 'lucide-react';

import img1 from '@/assets/img1.jpg';
import img2 from '@/assets/img2.jpg';
import prociencia from '@/assets/dashboard_prociencia.jpg';
import proinnovate from '@/assets/dashboard_proinnovate.jpg';
import quienesSomos from '@/assets/quienes_somos.jpg';

export const content = {
    company: {
        name: "TRIPLE IA CONSULTORES",
        slogan: "Innovación, Transformación Digital e Inteligencia Artificial",
        description: "Somos una firma de consultoría orientada a innovación, transformación digital, inteligencia artificial y ciencia de datos.",
        email: "contacto@tripleiaconsultores.com",
        phone: "+51 956 307 219",
        location: "Lima, Perú - Madrid, España",
        schedule: "Lunes a Viernes, 9:00 AM - 6:00 PM",
        socials: {
            instagram: "https://www.instagram.com/triple_ia_consultores",
            linkedin: "https://www.linkedin.com/company/triple-ia-consultores/posts/?feedView=all",
            tiktok: "https://www.tiktok.com/@triple.ia.innovation?lang=es",
            whatsapp: "https://wa.me/51956307219"
        }
    },
    navigation: [
        { name: "Inicio", href: "#home" },
        { name: "Nosotros", href: "#about" },
        { name: "Servicios", href: "#services" },
        { name: "Observatorio", href: "#observatory" },
        { name: "Casos de Éxito", href: "#projects" },
        { name: "Contacto", href: "#contact" },
    ],
    hero: {
        title: "Convertimos ideas en proyectos tecnológicos con impacto real",
        subtitle: "Soluciones estratégicas potenciadas con IA",
        ctaPrimary: "Conversemos",
        ctaSecondary: "Nuestros Servicios",
    },
    about: {
        title: "Quiénes Somos",
        description: "Somos una firma de consultoría especializada en el diseño, formulación y ejecución de proyectos de innovación, investigación aplicada e inteligencia artificial para organizaciones públicas y privadas. Trabajamos bajo un enfoque integral basado en tres pilares estratégicos: Innovación abierta, para conectar desafíos reales con soluciones tecnológicas viables. Investigación aplicada, orientada a resultados concretos y transferencia de valor. Inteligencia artificial y ciencia de datos, para resolver problemas complejos con precisión y escalabilidad. Nuestro propósito es ser el aliado estratégico de las organizaciones en la captación y gestión de fondos concursables, así como en el desarrollo de proyectos tecnológicos de alto impacto, generando valor económico, social y ambiental con estándares de excelencia.",
        image: quienesSomos,
    },


    //-----------------------------------SERVICIOS Links Formularios----------------------------------------
    services: [
        {
            title: "Identificación de oportunidades de financiamiento",
            description: "Scouting estratégico de fondos nacionales e internacionales para proyectos de I+D+i.",
            icon: Search,
            formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScldxc2B_Og7UQuKkTrzz7appZEC2iK0iShpIDfT9z31fhh8Q/viewform",
        },
        {
            title: "Formulación de proyectos",
            description: "Diseño técnico, económico y estratégico de propuestas competitivas, alineadas a las bases de fondos concursables y objetivos institucionales.",
            icon: LayoutDashboard,
            formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScldxc2B_Og7UQuKkTrzz7appZEC2iK0iShpIDfT9z31fhh8Q/viewform",
        },
        {
            title: "Asesoría y ejecución de proyectos financiados",
            description: "Acompañamiento integral en la gestión, ejecución, monitoreo y cumplimiento de hitos técnicos y financieros de proyectos adjudicados.",
            icon: Rocket,
            formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScldxc2B_Og7UQuKkTrzz7appZEC2iK0iShpIDfT9z31fhh8Q/viewform",
        },
        {
            title: "Capacitación en Innovación e IA",
            description: "Programas y talleres especializados para el fortalecimiento de capacidades en innovación, IA y toma de decisiones basadas en datos.",
            icon: GraduationCap,
            formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScldxc2B_Og7UQuKkTrzz7appZEC2iK0iShpIDfT9z31fhh8Q/viewform",
        },
        {
            title: "Consultorías especializadas en IA",
            description: "Diseño e implementación de soluciones analíticas, modelos predictivos y sistemas inteligentes orientados a resultados de negocio.",
            icon: BrainCircuit,
            formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScldxc2B_Og7UQuKkTrzz7appZEC2iK0iShpIDfT9z31fhh8Q/viewform",
        },
    ],
    projects: [
        {
            title: "Más de S/ 20 millones captados en fondos no reembolsables",
            description: "Para proyectos de investigación, desarrollo tecnológico e innovación (I+D+i), a nivel nacional e internacional.",
            image: img1,
        },
        {
            title: "Más de 10 organizaciones con ahorros y eficiencias comprobadas",
            description: "Optimización de procesos operativos mediante analítica avanzada, automatización y modelos predictivos.",
            image: img2,
        },
        // Add more mock projects as needed
    ],
    contact: {
        formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScldxc2B_Og7UQuKkTrzz7appZEC2iK0iShpIDfT9z31fhh8Q/viewform",
        calendlyUrl: "https://calendly.com/", // Placeholder Calendly
    },
    observatory: {
        title: "Observatorio Global de Proyectos",
        description: "Accede a dashboards interactivos que permiten analizar, monitorear y visualizar el impacto de la inversión en ciencia, tecnología e innovación.",
        dashboards: [
            {
                title: "Análisis PROCIENCIA",
                description: "Análisis detallado y seguimiento estratégico de concursos del Programa Nacional de Investigación Científica y Estudios Avanzados.",
                image: prociencia,
                url: "https://lookerstudio.google.com/u/0/reporting/d83fe444-ee04-42fe-adf1-13dbdfea575b/page/p_moit94wc0d", // Placeholder for dashboard URL
            },
            {
                title: "Análisis PROINNOVATE",
                description: "Análisis detallado y seguimiento estratégico de concursos del Programa Nacional de Desarrollo Tecnológico e Innovación.",
                image: proinnovate,
                url: "https://lookerstudio.google.com/u/0/reporting/53139621-9244-4220-b970-795d0084496b/page/p_b4jsfh7k0d", // Placeholder for dashboard URL
            }
        ]
    }
};
