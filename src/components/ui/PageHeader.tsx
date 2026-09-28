import type { ReactNode } from "react";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  /** Menos alto, para que el contenido de la página se vea antes. */
  compact?: boolean;
}

/** Cabecera de las páginas internas, sobre fondo sand (#D1C2A5). */
export function PageHeader({ eyebrow, title, description, children, compact = false }: PageHeaderProps) {
  return (
    <section className={`relative overflow-hidden bg-sand ${compact ? "py-12 lg:py-14" : "py-20 lg:py-28"}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 animate-drift rounded-full bg-beige-light/80 blur-3xl"
      />
      <Container className="relative">
        <Reveal>
          <SectionHeader
            as="h1"
            size={compact ? "sm" : "lg"}
            tone="beige"
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
