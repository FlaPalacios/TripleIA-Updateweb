import type { ComponentPropsWithoutRef, ElementType } from "react";

type Variant = "primary" | "secondary" | "ghost" | "accent" | "inverse";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-blue text-off-white hover:bg-blue-light border border-blue",
  secondary:
    "bg-transparent text-blue border border-blue hover:bg-blue hover:text-off-white",
  ghost: "bg-transparent text-blue underline-offset-4 hover:underline",
  // Para usar sobre fondos oscuros (bg-blue).
  accent: "bg-beige text-blue border border-beige hover:bg-beige-light",
  inverse:
    "bg-transparent text-off-white border border-off-white/40 hover:bg-off-white hover:text-blue",
};

interface ButtonOwnProps<T extends ElementType> {
  as?: T;
  variant?: Variant;
  className?: string;
}

type ButtonProps<T extends ElementType> = ButtonOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>;

export function Button<T extends ElementType = "button">({
  as,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps<T>) {
  const Component = as || "button";

  return (
    <Component
      className={`group/btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    />
  );
}
