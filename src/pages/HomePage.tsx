import { Hero } from "../components/home/Hero";
import { KeywordMarquee } from "../components/home/KeywordMarquee";
import { Services } from "../components/home/Services";
import { AboutTeaser } from "../components/home/AboutTeaser";
import { Radar } from "../components/home/Radar";
import { FinalCta } from "../components/home/FinalCta";

// La portada muestra solo lo esencial: cada sección tiene un botón hacia su
// página completa (/servicios, /nosotros, /oportunidades).
export function HomePage() {
  return (
    <>
      <Hero />
      <KeywordMarquee />
      <Services />
      <AboutTeaser />
      <Radar />
      <FinalCta />
    </>
  );
}
