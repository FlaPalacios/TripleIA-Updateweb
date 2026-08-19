"use client";

import { useMemo, useState } from "react";
import type { Opportunity } from "../../features/opportunities/types";

interface OpportunitiesExplorerProps {
  opportunities: Opportunity[];
}

function normalizeSearch(value: string): string {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function formatDate(date?: string): string {
  if (!date) return "Abierta permanentemente";
  return new Intl.DateTimeFormat("es-PE", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function OpportunitiesExplorer({ opportunities }: OpportunitiesExplorerProps) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("active");
  const [sector, setSector] = useState("all");
  const [fund, setFund] = useState("all");
  const [scope, setScope] = useState("all");
  const [currency, setCurrency] = useState("all");
  const [sort, setSort] = useState("deadline");

  const sectors = useMemo(
    () => [...new Set(opportunities.flatMap((item) => item.sectorGroups))].sort(),
    [opportunities],
  );
  const fundGroups = useMemo(
    () => [...new Set(opportunities.map((item) => item.fundGroup))].sort(),
    [opportunities],
  );
  const scopes = useMemo(
    () => [...new Set(opportunities.map((item) => item.scopeGroup))].sort(),
    [opportunities],
  );
  const currencies = useMemo(
    () =>
      [...new Set(opportunities.map((item) => item.currency))]
        .filter((item) => !item.toLowerCase().includes("especificado") && item !== "No aplica")
        .sort(),
    [opportunities],
  );

  const results = useMemo(() => {
    const normalizedQuery = normalizeSearch(query.trim());
    const filtered = opportunities.filter((item) => {
      const matchesQuery = !normalizedQuery || item.searchIndex.includes(normalizedQuery);
      const matchesStatus =
        status === "all" ||
        (status === "active" && item.deadlineStatus !== "expired") ||
        item.deadlineStatus === status;
      const matchesSector = sector === "all" || item.sectorGroups.includes(sector);
      const matchesFund = fund === "all" || item.fundGroup === fund;
      const matchesScope = scope === "all" || item.scopeGroup === scope;
      const matchesCurrency = currency === "all" || item.currency === currency;

      return (
        matchesQuery &&
        matchesStatus &&
        matchesSector &&
        matchesFund &&
        matchesScope &&
        matchesCurrency
      );
    });

    return filtered.sort((left, right) => {
      if (sort === "score") return right.strategicScore - left.strategicScore;
      if (sort === "recent") {
        return (right.registeredDate ?? "") .localeCompare(left.registeredDate ?? "");
      }
      if (!left.deadlineDate && !right.deadlineDate) return 0;
      if (!left.deadlineDate) return 1;
      if (!right.deadlineDate) return -1;
      return left.deadlineDate.localeCompare(right.deadlineDate);
    });
  }, [opportunities, query, status, sector, fund, scope, currency, sort]);

  const clearFilters = () => {
    setQuery("");
    setStatus("active");
    setSector("all");
    setFund("all");
    setScope("all");
    setCurrency("all");
    setSort("deadline");
  };

  return (
    <div className="opportunity-tool">
      <aside className="filter-panel" aria-label="Filtros de oportunidades">
        <label className="search-field">
          <span>Buscar</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Fondo, sector, país o institución"
          />
        </label>

        <label>
          <span>Estado</span>
          <select value={status} onChange={(event) => setStatus(event.target.value)}>
            <option value="active">Vigentes</option>
            <option value="all">Todas</option>
            <option value="upcoming">Con fecha próxima</option>
            <option value="open">Abiertas</option>
            <option value="expired">Vencidas</option>
          </select>
        </label>

        <label>
          <span>Sector</span>
          <select value={sector} onChange={(event) => setSector(event.target.value)}>
            <option value="all">Todos los sectores</option>
            {sectors.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Modalidad</span>
          <select value={fund} onChange={(event) => setFund(event.target.value)}>
            <option value="all">Todas las modalidades</option>
            {fundGroups.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Alcance</span>
          <select value={scope} onChange={(event) => setScope(event.target.value)}>
            <option value="all">Todos los alcances</option>
            {scopes.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Moneda</span>
          <select value={currency} onChange={(event) => setCurrency(event.target.value)}>
            <option value="all">Todas las monedas</option>
            {currencies.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>

        <button type="button" className="clear-filters" onClick={clearFilters}>
          Restablecer filtros
        </button>
      </aside>

      <section className="results-panel" aria-live="polite">
        <div className="results-toolbar">
          <p>
            <strong>{results.length}</strong>{" "}
            {results.length === 1 ? "oportunidad encontrada" : "oportunidades encontradas"}
          </p>
          <label>
            <span>Ordenar</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="deadline">Fecha límite</option>
              <option value="recent">Más recientes</option>
              <option value="score">Relevancia Triple IA</option>
            </select>
          </label>
        </div>

        {results.length === 0 ? (
          <div className="empty-results">
            <h2>No encontramos una coincidencia.</h2>
            <p>Prueba con menos filtros o busca por una palabra más general.</p>
            <button type="button" onClick={clearFilters}>Ver oportunidades vigentes</button>
          </div>
        ) : (
          <div className="results-list">
            {results.map((item, index) => (
              <article className="opportunity-result" key={item.id}>
                <a href={`/oportunidades/${item.id.toLowerCase()}`}>
                  <div className="result-index">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <small>{item.id}</small>
                  </div>
                  <div className="result-copy">
                    <div className="result-tags">
                      <span>{item.fundGroup}</span>
                      <span>{item.scopeGroup}</span>
                      {item.deadlineStatus === "expired" && <span>Vencida</span>}
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.donor}</p>
                    <small>{item.sectorGroups.join(" · ")}</small>
                  </div>
                  <div className="result-funding">
                    <span>Financiamiento</span>
                    <strong>{item.amount}</strong>
                    <small>{item.currency}</small>
                  </div>
                  <div className="result-deadline">
                    <span>Fecha límite</span>
                    <strong>{formatDate(item.deadlineDate)}</strong>
                    <small>Ver detalle ↗</small>
                  </div>
                </a>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
