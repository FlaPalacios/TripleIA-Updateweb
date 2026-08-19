import { readFileSync } from "node:fs";
import { join } from "node:path";
import type {
  DeadlineStatus,
  Opportunity,
} from "../features/opportunities/types";

const csvSource = readFileSync(
  join(process.cwd(), "public", "data", "oportunidades.csv"),
  "utf8",
);

const monthNumbers: Record<string, string> = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};

function parseCsv(source: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;

  for (let index = 0; index < source.length; index += 1) {
    const character = source[index];

    if (character === '"') {
      if (quoted && source[index + 1] === '"') {
        field += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
      continue;
    }

    if (character === "," && !quoted) {
      row.push(field);
      field = "";
      continue;
    }

    if ((character === "\n" || character === "\r") && !quoted) {
      if (character === "\r" && source[index + 1] === "\n") {
        index += 1;
      }
      row.push(field);
      if (row.some((value) => value.trim() !== "")) {
        rows.push(row);
      }
      row = [];
      field = "";
      continue;
    }

    field += character;
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows;
}

function toIsoDate(value: string): string | undefined {
  const match = value.trim().match(/^(\d{1,2})-([A-Za-z]{3})-(\d{4})$/);
  if (!match) return undefined;

  const [, day, month, year] = match;
  const monthNumber = monthNumbers[month];
  if (!monthNumber) return undefined;

  return `${year}-${monthNumber}-${day.padStart(2, "0")}`;
}

function getDeadlineStatus(deadlineDate?: string): DeadlineStatus {
  if (!deadlineDate) return "open";

  const today = new Date();
  const todayIso = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  return deadlineDate < todayIso ? "expired" : "upcoming";
}

function normalizeSector(value: string): string[] {
  const lower = value.toLocaleLowerCase("es");
  const groups = new Set<string>();

  if (/salud|cáncer|hemofilia/.test(lower)) groups.add("Salud");
  if (/ambiente|clima|biodiversidad|conservación|agua|agricultura|energía/.test(lower)) {
    groups.add("Ambiente y clima");
  }
  if (/tecnología|i\+d|innovación|datos|ia|chips/.test(lower)) {
    groups.add("Tecnología e innovación");
  }
  if (/emprendimiento|empresa|cadenas de valor/.test(lower)) {
    groups.add("Emprendimiento");
  }
  if (/cultura/.test(lower)) groups.add("Cultura");
  if (/empleo|social|comunitario|crisis|educación/.test(lower)) {
    groups.add("Desarrollo social");
  }
  if (/multisectorial/.test(lower)) groups.add("Multisectorial");

  return groups.size > 0 ? [...groups] : ["Otros"];
}

function normalizeFundType(value: string): string {
  const lower = value.toLocaleLowerCase("es");
  if (/préstamo/.test(lower)) return "Préstamo";
  if (/capital|inversión|equity/.test(lower)) return "Inversión";
  if (/asistencia|cooperación técnica/.test(lower)) return "Asistencia técnica";
  if (/premio|beca|reconocimiento/.test(lower)) return "Beca o premio";
  return "Subvención";
}

function normalizeScope(value: string): string {
  const lower = value.toLocaleLowerCase("es");
  if (/global|sin restricción geográfica/.test(lower)) return "Global";
  if (/américa latina|latam|caribe/.test(lower)) return "Latinoamérica";
  if (/perú/.test(lower)) return "Perú";
  return "Otros países";
}

function sanitizeUrl(value: string): string {
  const match = value.match(/^https?:\/\/\S+/);
  return match ? match[0].replace(/[),.;]+$/, "") : "";
}

function stripAccents(value: string): string {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

const parsedRows = parseCsv(csvSource);
const [headers, ...dataRows] = parsedRows;
const columnIndex = new Map(headers.map((header, index) => [header.trim(), index]));

function valueFor(row: string[], column: string): string {
  const index = columnIndex.get(column);
  return index === undefined ? "" : (row[index] ?? "").trim();
}

const opportunities: Opportunity[] = dataRows.map((row) => {
  const title = valueFor(row, "Titulo Convocatoria");
  const donor = valueFor(row, "Donante");
  const eligibility = valueFor(row, "Quienes Pueden Postular");
  const scope = valueFor(row, "Pais o Alcance");
  const sector = valueFor(row, "Sector");
  const fundType = valueFor(row, "Tipo de Fondo");
  const additionalInfo = valueFor(row, "Informacion Adicional");
  const deadline = valueFor(row, "Fecha Limite");
  const deadlineDate = toIsoDate(deadline);
  const registeredAt = valueFor(row, "Fecha de Registro");
  const currency = valueFor(row, "Moneda");

  return {
    id: valueFor(row, "ID Convocatoria"),
    title,
    donor,
    eligibility,
    scope,
    scopeGroup: normalizeScope(scope),
    amount: valueFor(row, "Monto Financiamiento"),
    currency,
    deadline,
    deadlineDate,
    deadlineStatus: getDeadlineStatus(deadlineDate),
    sector,
    sectorGroups: normalizeSector(sector),
    fundType,
    fundGroup: normalizeFundType(fundType),
    additionalInfo,
    strategicScore: Number(valueFor(row, "Score Estrategico Triple IA")) || 0,
    officialUrl: sanitizeUrl(valueFor(row, "Enlace Principal")),
    registeredAt,
    registeredDate: toIsoDate(registeredAt),
    searchIndex: stripAccents(
      [title, donor, eligibility, scope, sector, fundType, additionalInfo].join(" "),
    ),
  };
});

export function getOpportunities(): Opportunity[] {
  return opportunities;
}

export function getOpportunityById(id: string): Opportunity | undefined {
  const normalizedId = id.toLocaleLowerCase("es");
  return opportunities.find(
    (opportunity) => opportunity.id.toLocaleLowerCase("es") === normalizedId,
  );
}

export function formatDeadline(opportunity: Opportunity): string {
  if (!opportunity.deadlineDate) return "Convocatoria abierta";
  return new Intl.DateTimeFormat("es-PE", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${opportunity.deadlineDate}T00:00:00Z`));
}
