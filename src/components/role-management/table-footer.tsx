import { useState } from "react";

interface TableFooterProps {
  totalRoles: number;
}

const TableFooter = ({ totalRoles }: TableFooterProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex items-center justify-between px-7 py-4 border-t border-[#1E2D42]">
      <div className="text-[0.875rem] text-[#64748B]">
        Showing <strong className="text-[#94A3B8]">{totalRoles}</strong> of{" "}
        <strong className="text-[#94A3B8]">{totalRoles}</strong> results
      </div>
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          className="w-[34px] h-[34px] flex items-center justify-center rounded-md text-[0.875rem] font-semibold border border-[#334155] bg-[#1A2332] text-[#64748B] hover:bg-[#334155] hover:text-[#F8FAFC] transition-all"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="w-[34px] h-[34px] flex items-center justify-center rounded-md text-[0.875rem] font-semibold bg-[#3B82F6] border border-[#3B82F6] text-white">
          1
        </button>
        <button
          onClick={() => setCurrentPage(prev => prev + 1)}
          className="w-[34px] h-[34px] flex items-center justify-center rounded-md text-[0.875rem] font-semibold border border-[#334155] bg-[#1A2332] text-[#64748B] hover:bg-[#334155] hover:text-[#F8FAFC] transition-all"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TableFooter;