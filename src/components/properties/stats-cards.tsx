import type { StatsData } from "./types/property-types";

interface StatsCardsProps {
  stats: StatsData;
}

const StatsCards = ({ stats }: StatsCardsProps) => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      {/* Total Properties */}
      <div className="bg-[#0F172A] border border-[#1E2D42] rounded-xl p-5 flex flex-col gap-2 hover:border-[#3B82F6]/20 transition-all">
        <div className="flex justify-between items-start">
          <div className="w-9 h-9 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[17px] h-[17px]">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <span className="text-[0.625rem] font-extrabold tracking-wider px-2 py-1 rounded-full bg-[#10B981]/20 text-[#34D399]">
            +{stats.newCount} new
          </span>
        </div>
        <div className="text-[1.875rem] font-extrabold text-[#F1F5F9] tracking-tight leading-none">
          {stats.total}
        </div>
        <div className="text-[0.75rem] text-[#64748B] font-medium">Total Properties</div>
      </div>

      {/* Active */}
      <div className="bg-[#0F172A] border border-[#1E2D42] rounded-xl p-5 flex flex-col gap-2 hover:border-[#3B82F6]/20 transition-all">
        <div className="flex justify-between items-start">
          <div className="w-9 h-9 rounded-lg bg-[#10B981]/20 flex items-center justify-center text-[#10B981]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[17px] h-[17px]">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <span className="text-[0.625rem] font-extrabold tracking-wider px-2 py-1 rounded-full bg-[#10B981]/20 text-[#34D399]">
            {stats.activeChange}
          </span>
        </div>
        <div className="text-[1.875rem] font-extrabold text-[#F1F5F9] tracking-tight leading-none">
          {stats.active}
        </div>
        <div className="text-[0.75rem] text-[#64748B] font-medium">Active</div>
      </div>

      {/* In Maintenance */}
      <div className="bg-[#0F172A] border border-[#1E2D42] rounded-xl p-5 flex flex-col gap-2 hover:border-[#3B82F6]/20 transition-all">
        <div className="flex justify-between items-start">
          <div className="w-9 h-9 rounded-lg bg-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[17px] h-[17px]">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>
          <span className="text-[0.625rem] font-extrabold tracking-wider px-2 py-1 rounded-full bg-[#EF4444]/20 text-[#F87171]">
            {stats.maintenanceChange}
          </span>
        </div>
        <div className="text-[1.875rem] font-extrabold text-[#F1F5F9] tracking-tight leading-none">
          {stats.maintenance}
        </div>
        <div className="text-[0.75rem] text-[#64748B] font-medium">In Maintenance</div>
      </div>

      {/* Avg Occupancy */}
      <div className="bg-[#0F172A] border border-[#1E2D42] rounded-xl p-5 flex flex-col gap-2 hover:border-[#3B82F6]/20 transition-all">
        <div className="flex justify-between items-start">
          <div className="w-9 h-9 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[17px] h-[17px]">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <span className="text-[0.625rem] font-extrabold tracking-wider px-2 py-1 rounded-full bg-[#10B981]/20 text-[#34D399]">
            {stats.occupancyChange}
          </span>
        </div>
        <div className="text-[1.875rem] font-extrabold text-[#F1F5F9] tracking-tight leading-none">
          {stats.avgOccupancy}%
        </div>
        <div className="text-[0.75rem] text-[#64748B] font-medium">Avg. Occupancy</div>
      </div>
    </div>
  );
};

export default StatsCards;