import type { StatsProps } from "./user-types";

const StatsCards = ({ stats }: { stats: StatsProps }) => {
  return (
    <div className="flex gap-5 mb-8">
      {/* Total Users */}
      <div className="flex-1 bg-[#1E293B] border border-[#1E2D42] rounded-xl p-6 flex items-center gap-4">
        <div className="w-[50px] h-[50px] rounded-[0.625rem] bg-[#3B82F6]/20 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" className="w-6 h-6">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <div>
          <div className="text-[0.6875rem] font-bold tracking-wider uppercase text-[#64748B] mb-1.5">Total Users</div>
          <div className="text-[1.875rem] font-bold text-[#F1F5F9] leading-none">{stats.totalUsers}</div>
        </div>
      </div>

      {/* Active Now */}
      <div className="flex-1 bg-[#1E293B] border border-[#1E2D42] rounded-xl p-6 flex items-center gap-4">
        <div className="w-[50px] h-[50px] rounded-[0.625rem] bg-[#10B981]/20 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2" className="w-6 h-6">
            <circle cx="12" cy="12" r="2" />
            <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
          </svg>
        </div>
        <div>
          <div className="text-[0.6875rem] font-bold tracking-wider uppercase text-[#64748B] mb-1.5">Active Now</div>
          <div className="text-[1.875rem] font-bold text-[#F1F5F9] leading-none">{stats.activeNow}</div>
        </div>
      </div>

      {/* Pending Invitations */}
      <div className="flex-1 bg-[#1E293B] border border-[#1E2D42] rounded-xl p-6 flex items-center gap-4">
        <div className="w-[50px] h-[50px] rounded-[0.625rem] bg-[#F59E0B]/20 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2" className="w-6 h-6">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
            <line x1="9" y1="12" x2="15" y2="12" />
            <line x1="9" y1="16" x2="12" y2="16" />
          </svg>
        </div>
        <div>
          <div className="text-[0.6875rem] font-bold tracking-wider uppercase text-[#64748B] mb-1.5">Pending Invitations</div>
          <div className="text-[1.875rem] font-bold text-[#F1F5F9] leading-none">{stats.pendingInvites}</div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;