import type { RoleRowProps } from "./types";

const RoleRow = ({ role, onEdit }: RoleRowProps) => {
  return (
    <div className="grid grid-cols-[2.5fr_1.8fr_1.8fr_1.6fr] px-7 py-5 items-center border-b border-[#1E2D42] last:border-b-0 hover:bg-[#3B82F6]/5 transition-colors">
      {/* Role Name */}
      <div className="flex items-center gap-3.5">
        <div 
          className="w-[38px] h-[38px] rounded-lg flex items-center justify-center shrink-0"
          style={{ background: role.iconBg, border: `1px solid ${role.iconBg}` }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke={role.iconColor} strokeWidth="2" className="w-5 h-5">
            {role.icon.split(' ').map((path, idx) => (
              <path key={idx} d={path} />
            ))}
          </svg>
        </div>
        <span className="text-[1rem] font-bold text-[#F1F5F9]">{role.name}</span>
      </div>

      {/* Users Count */}
      <div className="flex items-center gap-1.5">
        <span className="text-[0.9375rem] font-bold text-[#F1F5F9]">{role.usersCount}</span>
        <span className="text-[0.875rem] text-[#64748B]">active users</span>
      </div>

      {/* Last Updated */}
      <div className="text-[0.9375rem] text-[#94A3B8]">{role.lastUpdated}</div>

      {/* Actions */}
      <div className="flex justify-end">
        <button
          onClick={() => onEdit(role.name)}
          className="inline-flex items-center gap-2 bg-[#3B82F6]/20 text-[#60A5FA] px-4 py-2 rounded-md text-[0.8125rem] font-semibold border border-[#3B82F6]/40 hover:bg-[#3B82F6]/30 hover:border-[#3B82F6]/60 hover:text-[#93C5FD] transition-all"
        >
          Edit Permissions
        </button>
      </div>
    </div>
  );
};

export default RoleRow;