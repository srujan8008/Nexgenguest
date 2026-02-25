interface SearchFilterProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onFilterClick: () => void;
}

const SearchFilter = ({ searchQuery, onSearchChange, onFilterClick }: SearchFilterProps) => {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative">
        <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[15px] h-[15px] text-[#475569] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search recipients..."
          className="w-[220px] bg-[#0A1220] border border-[#1E2D42] text-[#F1F5F9] py-2 pl-9 pr-4 rounded-lg text-[0.8125rem] focus:border-[#3B82F6] focus:ring-3 focus:ring-[#3B82F6]/10 transition-all outline-none placeholder:text-[#334155]"
        />
      </div>
      <button
        onClick={onFilterClick}
        className="w-9 h-9 rounded-lg bg-[#0A1220] border border-[#1E2D42] flex items-center justify-center text-[#64748B] hover:text-[#F1F5F9] hover:border-[#1E2D42]/40 transition-all"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      </button>
    </div>
  );
};

export default SearchFilter;