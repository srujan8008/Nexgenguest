interface PageHeaderProps {
  onAddProperty: () => void;
}

const PageHeader = ({ onAddProperty }: PageHeaderProps) => {
  return (
    <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
      <div>
        <div className="text-[0.6875rem] font-bold tracking-wider uppercase text-[#3B82F6] mb-1.5">
          Master Admin
        </div>
        <h1 className="text-[1.875rem] font-extrabold text-[#F1F5F9] tracking-tight">
          All Properties
        </h1>
        <p className="text-[0.9375rem] text-[#64748B] mt-1">
          Manage and monitor your NexGen hotel portfolio.
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <button className="flex items-center gap-2 bg-transparent text-[#94A3B8] px-4 py-2.5 rounded-lg text-[0.8125rem] font-semibold border border-[#334155] hover:text-[#F1F5F9] hover:border-[#475569] hover:bg-[#1E2D42]/10 transition-all">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          Search
        </button>
        <button
          onClick={onAddProperty}
          className="flex items-center gap-2 bg-[#3B82F6] text-white px-5 py-2.5 rounded-lg text-[0.875rem] font-bold hover:bg-[#4F90F8] hover:shadow-lg hover:shadow-[#3B82F6]/20 transition-all"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          New Property
        </button>
      </div>
    </div>
  );
};

export default PageHeader;