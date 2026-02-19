// components/access-control-section.tsx
interface AccessControlSectionProps {
  role: 'staff' | 'admin' | 'superadmin';
  setRole: (role: 'staff' | 'admin' | 'superadmin') => void;
  roleDescriptions: Record<string, string>;
}

const AccessControlSection = ({ role, setRole, roleDescriptions }: AccessControlSectionProps) => {
  return (
    <div className="px-8 py-7 border-t border-[#1E2D42]">
      <div className="flex items-center gap-2.5 mb-6">
        <span className="text-[#3B82F6]">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </span>
        <span className="text-[0.75rem] font-extrabold tracking-wider uppercase text-[#F1F5F9]">
          Access Control
        </span>
      </div>

      <div className="mb-4">
        <label className="flex items-center gap-1.5 text-[0.9375rem] font-semibold text-[#CBD5E1] mb-2">
          User Role
          <span className="text-[#475569] cursor-pointer">
            <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </span>
        </label>
        <div className="relative">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as 'staff' | 'admin' | 'superadmin')}
            className="w-full bg-[#0F1922] border border-[#1E2D42] text-[#F1F5F9] py-3.5 px-4 rounded-lg text-[0.9375rem] appearance-none focus:border-[#3B82F6] focus:ring-3 focus:ring-[#3B82F6]/20 transition-all outline-none cursor-pointer"
          >
            <option value="staff">Staff</option>
            <option value="admin">Hotel Admin</option>
            <option value="superadmin">Super Admin</option>
          </select>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#475569] pointer-events-none">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </div>
      </div>

      <div
        className="bg-[#0F1922] border border-[#1E2D42] rounded-lg p-3.5 text-[0.875rem] text-[#64748B] leading-relaxed"
        dangerouslySetInnerHTML={{ __html: roleDescriptions[role] }}
      />
    </div>
  );
};

export default AccessControlSection;