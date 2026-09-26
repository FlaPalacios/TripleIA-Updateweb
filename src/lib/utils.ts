const MONTHS: Record<string, number> = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

const DATE_PATTERNS = {
  // "12-Aug-2026", opcionalmente seguido de una nota: "11-Nov-2026 (revisión continua…)"
  dayMonthName: /^(\d{1,2})-([A-Za-z]{3})-(\d{4})\b/,
  // "10/25/2026" (formato M/D/YYYY que exporta Google Sheets)
  monthDayYear: /^(\d{1,2})\/(\d{1,2})\/(\d{4})\b/,
};

function matchDeadline(raw: string): { date: Date; rest: string } | null {
  const value = raw.trim();

  const named = value.match(DATE_PATTERNS.dayMonthName);
  if (named) {
    const [full, day, monthAbbr, year] = named;
    const month = MONTHS[monthAbbr.toLowerCase()];
    if (month === undefined) return null;
    return {
      date: new Date(Number(year), month, Number(day)),
      rest: value.slice(full.length).trim(),
    };
  }

  const numeric = value.match(DATE_PATTERNS.monthDayYear);
  if (numeric) {
    const [full, month, day, year] = numeric;
    return {
      date: new Date(Number(year), Number(month) - 1, Number(day)),
      rest: value.slice(full.length).trim(),
    };
  }

  return null;
}

/**
 * La hoja mezcla fechas reales ("12-Aug-2026", "10/25/2026") con valores no
 * vencidos ("ABIERTO", "Sin fecha limite"/"Sin fecha límite"). Solo las
 * primeras son parseables; el resto se trata como "sin vencimiento" en vez
 * de romper el ordenamiento.
 */
export function parseDeadline(raw: string | undefined | null): Date | null {
  if (!raw) return null;
  return matchDeadline(raw)?.date ?? null;
}

export function formatDeadline(raw: string | undefined | null): string {
  if (!raw) return "No especificado";
  const match = matchDeadline(raw);
  if (!match) return raw.trim();

  const formatted = match.date.toLocaleDateString("es-PE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return match.rest ? `${formatted} ${match.rest}` : formatted;
}

export function isExpired(deadline: Date | null, today = startOfToday()): boolean {
  return deadline !== null && deadline.getTime() < today.getTime();
}

export function startOfToday(): Date {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

/**
 * "Monto Financiamiento" es texto libre (monto limpio, rango, o explicación).
 * Se intenta extraer el primer número para permitir ordenar; si no hay
 * ningún número, se devuelve null y el registro se trata como "sin monto".
 */
export function parseAmount(raw: string | undefined | null): number | null {
  if (!raw) return null;
  const match = raw.replace(/,/g, "").match(/(\d+(?:\.\d+)?)/);
  if (!match) return null;
  return Number(match[1]);
}

/**
 * "Enlace Principal" es casi siempre una URL limpia, pero alguna fila
 * agrega texto extra despues (ej. "... (bases en PDF compartido)").
 * Se extrae solo la URL utilizable como href.
 */
export function extractUrl(raw: string | undefined | null): string | null {
  if (!raw) return null;
  const match = raw.match(/https?:\/\/\S+/);
  if (!match) return null;
  return match[0].replace(/[).,]+$/, "");
}

export function splitList(raw: string | undefined | null): string[] {
  if (!raw) return [];
  return raw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function stripDiacritics(value: string): string {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function slugify(value: string): string {
  return stripDiacritics(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
