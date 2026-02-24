import type { ToolbarProps, FilterType } from "./types/property-types";

const Toolbar = ({
  searchQuery,
  onSearchChange,
  currentFilter,
  onFilterChange,
  sortMode,
  sortModes,
  onSortCycle,
  totalCounts
}: ToolbarProps) => {
  const filters: { label: string; value: FilterType; count: number }[] = [
    { label: 'All', value: 'all', count: totalCounts.all },
    { label: 'Active', value: 'active', count: totalCounts.active },
    { label: 'Maintenance', value: 'maintenance', count: totalCounts.maintenance },
    { label: 'Inactive', value: 'inactive', count: totalCounts.inactive }
  ];

  return (
    <div className="flex items-center gap-3.5 flex-wrap mb-7">
      {/* Search */}
      <div className="relative flex-[0_0_280px]">
        <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#475569] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search properties, cities..."
          className="w-full bg-[#0F172A] border border-[#1E2D42] text-[#F1F5F9] py-2.5 pl-10 pr-4 rounded-[0.625rem] text-[0.875rem] focus:border-[#3B82F6] focus:ring-3 focus:ring-[#3B82F6]/10 transition-all outline-none placeholder:text-[#334155]"
        />
      </div>

      {/* Filter Pills */}
      <div className="flex gap-2 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={`px-4 py-2 rounded-full text-[0.8125rem] font-semibold cursor-pointer transition-all border ${
              currentFilter === filter.value
                ? 'bg-[#3B82F6]/20 border-[#3B82F6]/40 text-[#60A5FA]'
                : 'bg-[#0F172A] border-[#1E2D42] text-[#64748B] hover:border-[#3B82F6] hover:text-[#3B82F6]'
            }`}
          >
            {filter.label} ({filter.count})
          </button>
        ))}
      </div>

      {/* Sort Button */}
      <div className="ml-auto">
        <button
          onClick={onSortCycle}
          className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0F172A] border border-[#1E2D42] text-[#64748B] text-[0.8125rem] font-semibold hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
          <span>{sortModes[sortMode]}</span>
        </button>
      </div>
    </div>
  );
};

export default Toolbar;