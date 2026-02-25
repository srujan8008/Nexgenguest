import type { StatsData } from "./invitations-types";

interface StatsCardsProps {
  stats: StatsData;
}

const StatsCards = ({ stats }: StatsCardsProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {/* Total Pending */}
      <div className="bg-[#0D1A2D] border border-[#1E2D42] rounded-xl p-5 flex flex-col gap-1.5 relative overflow-hidden">
        <div className="flex items-start justify-between">
          <span className="text-[0.625rem] font-bold tracking-wider uppercase text-[#64748B]">
            Total Pending
          </span>
          <div className="w-[30px] h-[30px] rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#60A5FA]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <line x1="9" y1="15" x2="9.01" y2="15" />
              <line x1="15" y1="15" x2="15.01" y2="15" />
            </svg>
          </div>
        </div>
        <div className="text-3xl font-extrabold text-[#F1F5F9] leading-none">{stats.totalPending}</div>
        <div className="text-[0.75rem] text-[#34D399] flex items-center gap-1">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
          {stats.pendingIncrease} increase from last week
        </div>
      </div>

      {/* Expiring Soon */}
      <div className="bg-[#0D1A2D] border border-[#1E2D42] rounded-xl p-5 flex flex-col gap-1.5">
        <div className="flex items-start justify-between">
          <span className="text-[0.625rem] font-bold tracking-wider uppercase text-[#64748B]">
            Expiring Soon
          </span>
          <div className="w-[30px] h-[30px] rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center text-[#FBBF24]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
        </div>
        <div className="text-3xl font-extrabold text-[#F1F5F9] leading-none">{stats.expiringSoon}</div>
        <div className="text-[0.75rem] text-[#64748B]">{stats.expiringText}</div>
      </div>

      {/* Avg Wait Time */}
      <div className="bg-[#0D1A2D] border border-[#1E2D42] rounded-xl p-5 flex flex-col gap-1.5">
        <div className="flex items-start justify-between">
          <span className="text-[0.625rem] font-bold tracking-wider uppercase text-[#64748B]">
            Avg. Wait Time
          </span>
          <div className="w-[30px] h-[30px] rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#A78BFA]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
        </div>
        <div className="text-3xl font-extrabold text-[#F1F5F9] leading-none">{stats.avgWaitTime}</div>
        <div className="text-[0.75rem] text-[#64748B]">{stats.avgWaitText}</div>
      </div>
    </div>
  );
};

export default StatsCards;