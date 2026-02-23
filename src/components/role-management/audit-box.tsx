const AuditBox = () => {
  return (
    <div className="bg-[#1E293B] border border-[#1E2D42] rounded-xl p-6 flex items-start gap-4">
      <div className="w-[36px] h-[36px] shrink-0 rounded-full bg-[#3B82F6]/20 border border-[#3B82F6]/40 flex items-center justify-center mt-px">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[17px] h-[17px] text-[#60A5FA]">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <div>
        <div className="text-[0.9375rem] font-bold text-[#F1F5F9] mb-1.5">Permission Auditing</div>
        <div className="text-[0.875rem] text-[#64748B] leading-relaxed">
          Changes to system roles are logged in the Global Activity Feed. We recommend reviewing
          high-level permissions monthly to maintain enterprise security compliance standards.
        </div>
      </div>
    </div>
  );
};

export default AuditBox;