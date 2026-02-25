interface TableFooterProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
}

const TableFooter = ({ currentPage, totalItems, pageSize }: TableFooterProps) => {
  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="flex items-center justify-between px-7 py-4 border-t border-[#1E2D42]">
      <span className="text-[0.8125rem] text-[#475569]">
        Showing {start}-{end} of {totalItems} pending invitations
      </span>
      <div className="flex items-center gap-1">
        <button className="min-w-[28px] h-7 px-1 flex items-center justify-center rounded-md text-[0.8125rem] font-semibold text-[#475569] hover:bg-[#3B82F6]/10 hover:text-[#F1F5F9] hover:border-[#3B82F6]/20 border border-transparent transition-all">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="min-w-[28px] h-7 px-1 flex items-center justify-center rounded-md text-[0.8125rem] font-semibold bg-[#3B82F6] text-white border border-[#3B82F6]">
          1
        </button>
        <button className="min-w-[28px] h-7 px-1 flex items-center justify-center rounded-md text-[0.8125rem] font-semibold text-[#475569] hover:bg-[#3B82F6]/10 hover:text-[#F1F5F9] hover:border-[#3B82F6]/20 border border-transparent transition-all">
          2
        </button>
        <button className="min-w-[28px] h-7 px-1 flex items-center justify-center rounded-md text-[0.8125rem] font-semibold text-[#475569] hover:bg-[#3B82F6]/10 hover:text-[#F1F5F9] hover:border-[#3B82F6]/20 border border-transparent transition-all">
          3
        </button>
        <span className="min-w-[28px] h-7 px-1 flex items-center justify-center text-[#334155] cursor-default">...</span>
        <button className="min-w-[28px] h-7 px-1 flex items-center justify-center rounded-md text-[0.8125rem] font-semibold text-[#475569] hover:bg-[#3B82F6]/10 hover:text-[#F1F5F9] hover:border-[#3B82F6]/20 border border-transparent transition-all">
          6
        </button>
        <button className="min-w-[28px] h-7 px-1 flex items-center justify-center rounded-md text-[0.8125rem] font-semibold text-[#475569] hover:bg-[#3B82F6]/10 hover:text-[#F1F5F9] hover:border-[#3B82F6]/20 border border-transparent transition-all">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TableFooter;