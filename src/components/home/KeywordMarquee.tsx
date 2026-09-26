import { Sparkle } from "lucide-react";

const KEYWORDS = [
  "Fondos concursables",
  "Innovación abierta",
  "Investigación aplicada",
  "Inteligencia artificial",
  "Ciencia de datos",
  "Formulación de proyectos",
  "Cooperación internacional",
  "I+D+i",
];

/** Cinta infinita: el contenido se duplica y se desplaza -50%. */
export function KeywordMarquee() {
  const items = [...KEYWORDS, ...KEYWORDS];

  return (
    <div className="overflow-hidden border-y border-blue/10 bg-blue-dark py-5" aria-hidden="true">
      <div className="flex w-max animate-marquee items-center gap-8 hover:[animation-play-state:paused]">
        {items.map((keyword, index) => (
          <span
            key={`${keyword}-${index}`}
            className="inline-flex items-center gap-8 whitespace-nowrap font-display text-lg font-semibold text-off-white/85 sm:text-xl"
          >
            {keyword}
            <Sparkle size={16} className="text-beige" />
          </span>
        ))}
      </div>
    </div>
  );
}
