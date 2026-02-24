interface SectionLabelProps {
  label: string;
  color: string;
  count: number;
}

const SectionLabel = ({ label, color, count }: SectionLabelProps) => {
  return (
    <div className="flex items-center gap-3.5 mt-6 mb-4">
      <span className="text-[0.6875rem] font-bold tracking-wider uppercase whitespace-nowrap" style={{ color }}>
        {label}
      </span>
      <div className="flex-1 h-px bg-[#1E2D42]"></div>
      <span className="text-[0.6875rem] font-bold px-2 py-1 rounded-full bg-[#1E293B] text-[#94A3B8] border border-[#1E2D42]">
        {count}
      </span>
    </div>
  );
};

export default SectionLabel;