interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
}

const Pagination = ({ currentPage, totalPages, totalItems, pageSize }: PaginationProps) => {
  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="flex items-center justify-between px-1">
      <div className="text-[0.875rem] text-[#64748B]">
        Showing <strong className="text-[#94A3B8]">{start}–{end}</strong> of <strong className="text-[#94A3B8]">{totalItems}</strong> users
      </div>
      <div className="flex items-center gap-1.5">
        <button className="w-9 h-9 flex items-center justify-center rounded-md text-[0.875rem] font-semibold bg-[#3B82F6] border border-[#3B82F6] text-white">
          1
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded-md text-[0.875rem] font-semibold border border-[#334155] bg-[#1E293B] text-[#64748B] hover:bg-[#334155] hover:text-[#F8FAFC] transition-all">
          2
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded-md text-[0.875rem] font-semibold border border-[#334155] bg-[#1E293B] text-[#64748B] hover:bg-[#334155] hover:text-[#F8FAFC] transition-all">
          3
        </button>
        <span className="text-[#475569] px-1 text-[0.875rem]">...</span>
        <button className="w-9 h-9 flex items-center justify-center rounded-md text-[0.875rem] font-semibold border border-[#334155] bg-[#1E293B] text-[#64748B] hover:bg-[#334155] hover:text-[#F8FAFC] transition-all">
          12
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded-md text-[0.875rem] font-semibold border border-[#334155] bg-[#1E293B] text-[#64748B] hover:bg-[#334155] hover:text-[#F8FAFC] transition-all">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;