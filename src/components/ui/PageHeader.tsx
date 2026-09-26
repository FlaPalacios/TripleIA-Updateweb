import type { ReactNode } from "react";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

/** Cabecera de las páginas internas, sobre fondo sand (#D1C2A5). */
export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-sand py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 animate-drift rounded-full bg-beige-light/80 blur-3xl"
      />
      <Container className="relative">
        <Reveal>
          <SectionHeader as="h1" tone="beige" eyebrow={eyebrow} title={title} description={description} />
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
