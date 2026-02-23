interface SearchFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchFilter = ({ searchTerm, setSearchTerm }: SearchFilterProps) => {
  return (
    <div className="flex gap-3 mb-6">
      <div className="relative flex-1">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#475569] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search roles by name or status..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[#1A2332] border border-[#1E293B] text-[#F8FAFC] py-3.5 pl-11 pr-4 rounded-lg text-[0.9375rem] focus:border-[#3B82F6] focus:ring-3 focus:ring-[#3B82F6]/10 transition-all outline-none placeholder:text-[#475569]"
        />
      </div>
      <button className="inline-flex items-center gap-2 bg-[#1E293B] text-[#94A3B8] px-5 py-3 rounded-lg text-[0.875rem] font-semibold border border-[#334155] hover:text-[#F8FAFC] hover:border-[#475569] hover:bg-[#334155] transition-all whitespace-nowrap">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
        Filter
      </button>
    </div>
  );
};

export default SearchFilter;