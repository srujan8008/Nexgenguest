interface SearchFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onFilter: () => void;
  onExport: () => void;
}

const SearchFilter = ({ searchTerm, setSearchTerm, onFilter, onExport }: SearchFilterProps) => {
  return (
    <div className="flex gap-3 mb-6">
      <div className="relative flex-1">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#475569] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search users by name, email or role..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[#1A2332] border border-[#1E293B] text-[#F8FAFC] py-3 pl-11 pr-4 rounded-lg text-[0.9375rem] focus:border-[#3B82F6] focus:ring-3 focus:ring-[#3B82F6]/10 transition-all outline-none placeholder:text-[#475569]"
        />
      </div>
      <button 
        onClick={onFilter}
        className="inline-flex items-center gap-2 bg-[#1E293B] text-[#94A3B8] px-5 py-3 rounded-lg text-[0.875rem] font-semibold border border-[#334155] hover:text-[#F8FAFC] hover:border-[#475569] hover:bg-[#334155] transition-all whitespace-nowrap"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
          <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
          <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
        </svg>
        Filters
      </button>
      <button 
        onClick={onExport}
        className="inline-flex items-center gap-2 bg-[#1E293B] text-[#94A3B8] px-5 py-3 rounded-lg text-[0.875rem] font-semibold border border-[#334155] hover:text-[#F8FAFC] hover:border-[#475569] hover:bg-[#334155] transition-all whitespace-nowrap"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Export
      </button>
    </div>
  );
};

export default SearchFilter;