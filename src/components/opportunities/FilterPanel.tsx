import type { OpportunityFilters, SortOrder } from "../../lib/filters";

interface FilterPanelProps {
  filters: OpportunityFilters;
  onChange: (filters: OpportunityFilters) => void;
  sort: SortOrder;
  onSortChange: (sort: SortOrder) => void;
  sectors: string[];
  fundTypes: string[];
  currencies: string[];
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string | null;
  onChange: (value: string | null) => void;
  options: string[];
}) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      <span className="text-xs font-medium uppercase tracking-wide text-blue-muted">
        {label}
      </span>
      <select
        value={value ?? ""}
        onChange={(event) => onChange(event.target.value || null)}
        className="rounded-xl border border-blue/20 bg-white px-3 py-2.5 text-blue focus:border-blue"
      >
        <option value="">Todos</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export function FilterPanel({
  filters,
  onChange,
  sort,
  onSortChange,
  sectors,
  fundTypes,
  currencies,
}: FilterPanelProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Select
        label="Sector"
        value={filters.sector}
        onChange={(sector) => onChange({ ...filters, sector })}
        options={sectors}
      />
      <Select
        label="Tipo de fondo"
        value={filters.fundType}
        onChange={(fundType) => onChange({ ...filters, fundType })}
        options={fundTypes}
      />
      <Select
        label="Moneda"
        value={filters.currency}
        onChange={(currency) => onChange({ ...filters, currency })}
        options={currencies}
      />
      <label className="flex flex-col gap-1 text-sm">
        <span className="text-xs font-medium uppercase tracking-wide text-blue-muted">
          Ordenar por
        </span>
        <select
          value={sort}
          onChange={(event) => onSortChange(event.target.value as SortOrder)}
          className="rounded-xl border border-blue/20 bg-white px-3 py-2.5 text-blue focus:border-blue"
        >
          <option value="deadline">Fecha límite</option>
          <option value="score">Más relevantes</option>
          <option value="amount">Monto</option>
        </select>
      </label>
    </div>
  );
}
