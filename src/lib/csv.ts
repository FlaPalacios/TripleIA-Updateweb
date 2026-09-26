import Papa from "papaparse";
import {
  normalizeOpportunity,
  type Opportunity,
  type RawOpportunityRow,
} from "../data/opportunities";

// Exportado directamente desde la hoja "Oportunidades_TripleIA" (formato TSV).
// Para actualizar los fondos basta con reemplazar este archivo.
const DATA_PATH = "/data/oportunidades.tsv";

export async function loadOpportunities(): Promise<Opportunity[]> {
  const response = await fetch(DATA_PATH);
  if (!response.ok) {
    throw new Error(`No se pudo cargar el archivo de oportunidades (${response.status})`);
  }
  const text = await response.text();

  const { data, errors } = Papa.parse<RawOpportunityRow>(text, {
    header: true,
    delimiter: "\t",
    skipEmptyLines: true,
    transformHeader: (header) => header.trim(),
  });

  if (errors.length > 0) {
    // eslint-disable-next-line no-console
    console.warn("Advertencias al leer el CSV de oportunidades:", errors);
  }

  return data
    .filter((row) => Boolean(row["Titulo Convocatoria"]))
    .map(normalizeOpportunity);
}
