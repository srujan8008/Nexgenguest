// components/user-details-section.tsx
const UserDetailsSection = () => {
  return (
    <div className="px-8 py-7">
      <div className="flex items-center gap-2.5 mb-6">
        <span className="text-[#3B82F6]">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <line x1="20" y1="8" x2="20" y2="14" />
            <line x1="23" y1="11" x2="17" y2="11" />
          </svg>
        </span>
        <span className="text-[0.75rem] font-extrabold tracking-wider uppercase text-[#F1F5F9]">
          User Details
        </span>
      </div>

      <div className="mb-4">
        <label className="flex items-center gap-1.5 text-[0.9375rem] font-semibold text-[#CBD5E1] mb-2">
          Email Address
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#475569]">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </span>
          <input
            type="email"
            placeholder="e.g. name@company.com"
            className="w-full bg-[#0F1922] border border-[#1E2D42] text-[#F1F5F9] py-3.5 pl-11 pr-4 rounded-lg text-[0.9375rem] focus:border-[#3B82F6] focus:ring-3 focus:ring-[#3B82F6]/20 transition-all outline-none placeholder:text-[#2D3F56]"
          />
        </div>
        <p className="text-[0.8125rem] text-[#475569] mt-1.5 text-left">
          A secure invitation link will be sent to this email address.
        </p>
      </div>
    </div>
  );
};

export default UserDetailsSection;