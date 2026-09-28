interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** "dark" para fondos azules, "beige" para fondos sand (#D1C2A5). */
  tone?: "light" | "dark" | "beige";
  as?: "h1" | "h2";
  /** Tamaño del título; por defecto "lg" para h1 y "md" para h2. */
  size?: "sm" | "md" | "lg";
}

const TITLE_SIZES = {
  sm: "text-3xl sm:text-4xl",
  md: "text-4xl sm:text-5xl",
  lg: "text-4xl sm:text-5xl lg:text-6xl",
};

const TONES = {
  light: { eyebrow: "text-blue-muted", rule: "bg-beige", title: "text-blue", body: "text-blue-muted" },
  dark: { eyebrow: "text-beige", rule: "bg-beige", title: "text-off-white", body: "text-off-white/70" },
  beige: { eyebrow: "text-blue-light", rule: "bg-blue", title: "text-blue", body: "text-blue-light" },
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  as: Heading = "h2",
  size = Heading === "h1" ? "lg" : "md",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const colors = TONES[tone];

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p
          className={`mb-4 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] ${colors.eyebrow}`}
        >
          <span aria-hidden="true" className={`h-0.5 w-8 rounded-full ${colors.rule}`} />
          {eyebrow}
        </p>
      )}
      <Heading
        className={`font-bold leading-[1.08] tracking-tight ${TITLE_SIZES[size]} ${colors.title}`}
      >
        {title}
      </Heading>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${colors.body}`}>
          {description}
        </p>
      )}
    </div>
  );
}
