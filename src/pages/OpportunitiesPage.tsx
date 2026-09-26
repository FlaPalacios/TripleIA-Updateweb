import { useMemo, useState } from "react";
import { useOpportunities } from "../hooks/useOpportunities";
import {
  EMPTY_FILTERS,
  filterOpportunities,
  sortOpportunities,
  uniqueCurrencies,
  uniqueFundTypes,
  uniqueSectors,
  type SortOrder,
} from "../lib/filters";
import { OpportunityCard } from "../components/opportunities/OpportunityCard";
import { FilterPanel } from "../components/opportunities/FilterPanel";
import { SearchInput } from "../components/ui/SearchInput";
import { Container } from "../components/ui/Container";
import { PageHeader } from "../components/ui/PageHeader";
import { isExpired } from "../lib/utils";

export function OpportunitiesPage() {
  const { opportunities: all, loading, error } = useOpportunities();
  // Las convocatorias con fecha límite pasada no se listan (siguen
  // accesibles por su URL de detalle).
  const opportunities = useMemo(
    () => all.filter((o) => !isExpired(o.deadlineDate)),
    [all]
  );
  const [filters, setFilters] = useState(EMPTY_FILTERS);
  const [sort, setSort] = useState<SortOrder>("deadline");

  const sectors = useMemo(() => uniqueSectors(opportunities), [opportunities]);
  const fundTypes = useMemo(() => uniqueFundTypes(opportunities), [opportunities]);
  const currencies = useMemo(() => uniqueCurrencies(opportunities), [opportunities]);

  const results = useMemo(() => {
    const filtered = filterOpportunities(opportunities, filters);
    return sortOpportunities(filtered, sort);
  }, [opportunities, filters, sort]);

  return (
    <>
      <PageHeader
        eyebrow="Radar de fondos"
        title="Oportunidades de financiamiento"
        description="Triple IA recopila y difunde convocatorias vigentes para innovación, investigación, emprendimiento y proyectos."
      />
      <Container className="py-12 lg:py-16">
        <div className="flex flex-col gap-6">
          <SearchInput
            value={filters.query}
            onChange={(query) => setFilters({ ...filters, query })}
            placeholder="Buscar por título, donante, sector o país…"
          />
          <FilterPanel
            filters={filters}
            onChange={setFilters}
            sort={sort}
            onSortChange={setSort}
            sectors={sectors}
            fundTypes={fundTypes}
            currencies={currencies}
          />
        </div>

        <div className="mt-10">
          {loading && (
            <p className="text-sm text-blue-muted">Cargando oportunidades…</p>
          )}
          {error && (
            <p className="text-sm text-blue-muted">
              No pudimos cargar las oportunidades en este momento.
            </p>
          )}
          {!loading && !error && (
            <>
              <p className="mb-6 text-sm text-blue-muted">
                {results.length}{" "}
                {results.length === 1
                  ? "oportunidad encontrada"
                  : "oportunidades encontradas"}
              </p>
              {results.length === 0 ? (
                <p className="text-sm text-blue-muted">
                  No encontramos oportunidades con esos criterios. Prueba
                  ajustando la búsqueda o los filtros.
                </p>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {results.map((opportunity) => (
                    <OpportunityCard key={opportunity.id} opportunity={opportunity} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </Container>
    </>
  );
}
