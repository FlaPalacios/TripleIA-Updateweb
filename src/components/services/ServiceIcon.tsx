import { createElement } from "react";
import {
  BrainCircuit,
  ClipboardCheck,
  FilePenLine,
  GraduationCap,
  Radar,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

/** Ícono de cada servicio, por `slug` (ver `services` en data/site.ts). */
const SERVICE_ICONS: Record<string, LucideIcon> = {
  fondos: Radar,
  formulacion: FilePenLine,
  ejecucion: ClipboardCheck,
  capacitacion: GraduationCap,
  "consultoria-ia": BrainCircuit,
};

export function ServiceIcon({ slug, ...props }: { slug: string } & LucideProps) {
  return createElement(SERVICE_ICONS[slug] ?? Radar, { "aria-hidden": true, ...props });
}
