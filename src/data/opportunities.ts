import {
  extractUrl,
  parseAmount,
  parseDeadline,
  slugify,
  splitList,
} from "../lib/utils";

/** Fila cruda tal como la entrega papaparse con header:true, usando los
 * nombres de columna reales de la hoja Oportunidades_TripleIA. */
export interface RawOpportunityRow {
  "ID Convocatoria": string;
  "Titulo Convocatoria": string;
  Donante: string;
  "Quienes Pueden Postular": string;
  "Pais o Alcance": string;
  "Monto Financiamiento": string;
  Moneda: string;
  "Fecha Limite": string;
  Sector: string;
  "Tipo de Fondo": string;
  "Informacion Adicional": string;
  "Score Estrategico Triple IA": string;
  "Enlace Principal": string;
  "Fecha de Registro": string;
}

export interface Opportunity {
  id: string;
  title: string;
  donor: string;
  whoCanApply: string;
  scope: string;
  amountRaw: string;
  amountValue: number | null;
  currency: string;
  deadlineRaw: string;
  deadlineDate: Date | null;
  sectorRaw: string;
  sectors: string[];
  fundType: string;
  additionalInfo: string;
  score: number | null;
  urlRaw: string;
  urlHref: string | null;
  registeredAt: string;
}

function clean(value: string | undefined | null): string {
  return (value ?? "").trim();
}

export function normalizeOpportunity(row: RawOpportunityRow): Opportunity {
  const idRaw = clean(row["ID Convocatoria"]);
  const title = clean(row["Titulo Convocatoria"]);
  const sectorRaw = clean(row.Sector);
  const scoreRaw = clean(row["Score Estrategico Triple IA"]);

  return {
    id: idRaw ? slugify(idRaw) : slugify(title),
    title,
    donor: clean(row.Donante),
    whoCanApply: clean(row["Quienes Pueden Postular"]),
    scope: clean(row["Pais o Alcance"]),
    amountRaw: clean(row["Monto Financiamiento"]) || "No especificado",
    amountValue: parseAmount(row["Monto Financiamiento"]),
    // La hoja usa tanto "No especificado" como "No aplica" para "sin moneda".
    currency:
      !clean(row.Moneda) || /^no aplica$/i.test(clean(row.Moneda))
        ? "No especificado"
        : clean(row.Moneda),
    deadlineRaw: clean(row["Fecha Limite"]) || "No especificado",
    deadlineDate: parseDeadline(row["Fecha Limite"]),
    sectorRaw,
    sectors: splitList(sectorRaw),
    fundType: clean(row["Tipo de Fondo"]),
    additionalInfo: clean(row["Informacion Adicional"]),
    score: scoreRaw ? Number(scoreRaw) : null,
    urlRaw: clean(row["Enlace Principal"]),
    urlHref: extractUrl(row["Enlace Principal"]),
    registeredAt: clean(row["Fecha de Registro"]),
  };
}
