import type { Opportunity } from "../data/opportunities";
import { stripDiacritics } from "./utils";

export interface OpportunityFilters {
  query: string;
  sector: string | null;
  fundType: string | null;
  currency: string | null;
}

export const EMPTY_FILTERS: OpportunityFilters = {
  query: "",
  sector: null,
  fundType: null,
  currency: null,
};

export type SortOrder = "deadline" | "score" | "amount";

function normalizeText(value: string): string {
  return stripDiacritics(value).toLowerCase();
}

export function searchOpportunities(
  opportunities: Opportunity[],
  query: string
): Opportunity[] {
  const term = normalizeText(query.trim());
  if (!term) return opportunities;

  return opportunities.filter((opportunity) => {
    const haystack = normalizeText(
      [
        opportunity.title,
        opportunity.donor,
        opportunity.sectorRaw,
        opportunity.scope,
        opportunity.additionalInfo,
      ].join(" ")
    );
    return haystack.includes(term);
  });
}

export function filterOpportunities(
  opportunities: Opportunity[],
  filters: OpportunityFilters
): Opportunity[] {
  let result = searchOpportunities(opportunities, filters.query);

  if (filters.sector) {
    result = result.filter((o) => o.sectors.includes(filters.sector as string));
  }
  if (filters.fundType) {
    result = result.filter((o) => o.fundType === filters.fundType);
  }
  if (filters.currency) {
    result = result.filter((o) => o.currency === filters.currency);
  }

  return result;
}

export function sortOpportunities(
  opportunities: Opportunity[],
  order: SortOrder
): Opportunity[] {
  const list = [...opportunities];

  if (order === "deadline") {
    return list.sort((a, b) => {
      if (!a.deadlineDate && !b.deadlineDate) return 0;
      if (!a.deadlineDate) return 1;
      if (!b.deadlineDate) return -1;
      return a.deadlineDate.getTime() - b.deadlineDate.getTime();
    });
  }

  if (order === "score") {
    return list.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
  }

  return list.sort((a, b) => (b.amountValue ?? 0) - (a.amountValue ?? 0));
}

export function uniqueSectors(opportunities: Opportunity[]): string[] {
  const set = new Set<string>();
  opportunities.forEach((o) => o.sectors.forEach((sector) => set.add(sector)));
  return Array.from(set).sort();
}

export function uniqueFundTypes(opportunities: Opportunity[]): string[] {
  const set = new Set<string>();
  opportunities.forEach((o) => {
    if (o.fundType) set.add(o.fundType);
  });
  return Array.from(set).sort();
}

export function uniqueCurrencies(opportunities: Opportunity[]): string[] {
  const set = new Set<string>();
  opportunities.forEach((o) => {
    if (o.currency) set.add(o.currency);
  });
  return Array.from(set).sort();
}
