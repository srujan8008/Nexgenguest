interface AddPropertyCardProps {
  onClick: () => void;
  delay: number;
}

const AddPropertyCard = ({ onClick, delay }: AddPropertyCardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-[#0F172A] border-2 border-dashed border-[#1E2D42] rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center min-h-[330px] flex-col gap-3.5 hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/5 hover:-translate-y-1 transition-all group fade-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-16 h-16 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6] group-hover:bg-[#3B82F6]/20 group-hover:scale-105 transition-all">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[26px] h-[26px]">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
          <line x1="19" y1="2" x2="19" y2="8" strokeWidth="2.5" />
          <line x1="16" y1="5" x2="22" y2="5" strokeWidth="2.5" />
        </svg>
      </div>
      <div className="text-[1.125rem] font-bold text-[#F1F5F9]">Add Property</div>
      <div className="text-[0.875rem] text-[#475569] text-center max-w-[200px] leading-relaxed">
        Onboard a new hotel to the NexGen ecosystem
      </div>
    </div>
  );
};

export default AddPropertyCard;