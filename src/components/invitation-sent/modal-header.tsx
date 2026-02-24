interface ModalHeaderProps {
  onClose: () => void;
}

const ModalHeader = ({ onClose }: ModalHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-5 py-4 border-b border-[#1E2D42]">
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#3B82F6]">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <span className="text-[0.75rem] font-bold tracking-wider uppercase text-[#94A3B8]">
          User Management
        </span>
      </div>
      <button 
        onClick={onClose}
        className="w-[30px] h-[30px] rounded-md flex items-center justify-center text-[#64748B] hover:bg-[#1E2D42] hover:text-[#F1F5F9] transition-all"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
};

export default ModalHeader;