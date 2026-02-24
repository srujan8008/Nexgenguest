interface StickyFooterProps {
  onSave?: () => void;
  onCancel?: () => void;
}

const StickyFooter = ({ onSave, onCancel }: StickyFooterProps) => {
  return (
    <div className="fixed bottom-0 left-[360px] right-0 bg-[#0F172A] border-t border-[#1E2D42] py-4 px-10 flex items-center justify-center gap-3 z-50">
      <button 
        onClick={onSave}
        className="inline-flex items-center gap-2 bg-[#3B82F6] text-white px-7 py-3 rounded-lg text-[0.9375rem] font-semibold hover:bg-[#2563EB] hover:shadow-lg hover:shadow-[#3B82F6]/40 transition-all"
      >
        Save Role Details
      </button>
      <button 
        onClick={onCancel}
        className="inline-flex items-center bg-transparent text-[#94A3B8] px-7 py-3 rounded-lg text-[0.9375rem] font-semibold border border-[#334155] hover:text-[#F1F5F9] hover:border-[#475569] hover:bg-[#1E2D42]/10 transition-all"
      >
        Cancel Changes
      </button>
    </div>
  );
};

export default StickyFooter;