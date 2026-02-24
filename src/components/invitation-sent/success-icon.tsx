const SuccessIcon = () => {
  return (
    <div className="w-[74px] h-[74px] rounded-full bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] flex items-center justify-center mb-6 shadow-[0_0_0_8px_rgba(59,130,246,0.12),0_8px_24px_rgba(59,130,246,0.3)] animate-[popIn_0.4s_0.15s_cubic-bezier(0.34,1.56,0.64,1)_both]">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[34px] h-[34px] text-white">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    </div>
  );
};

export default SuccessIcon;