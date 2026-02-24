const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-8 gap-4 text-center">
      <div className="w-[60px] h-[60px] rounded-2xl bg-[#1E293B] border border-[#1E2D42] flex items-center justify-center text-[#475569] mb-2">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[26px] h-[26px]">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
      <div className="text-[1.0625rem] font-bold text-[#CBD5E1]">No properties found</div>
      <div className="text-[0.9rem] text-[#475569]">Try a different search or filter.</div>
    </div>
  );
};

export default EmptyState;