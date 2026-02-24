interface ModalFooterProps {
  onInviteAnother: () => void;
  onViewPending: () => void;
}

const ModalFooter = ({ onInviteAnother, onViewPending }: ModalFooterProps) => {
  return (
    <div className="px-8 pb-7 flex flex-col items-center gap-4 animate-[fadeUp_0.35s_0.35s_ease_both]">
      <button
        onClick={onInviteAnother}
        className="flex items-center justify-center gap-2 w-full bg-[#3B82F6] text-white py-3.5 px-6 rounded-[0.625rem] text-[0.9375rem] font-bold hover:bg-[#2563EB] hover:shadow-lg hover:shadow-[#3B82F6]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" className="w-[17px] h-[17px]">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <line x1="20" y1="8" x2="20" y2="14" />
          <line x1="23" y1="11" x2="17" y2="11" />
        </svg>
        Invite Another User
      </button>

      <button
        onClick={onViewPending}
        className="flex items-center gap-1.5 text-[0.875rem] text-[#64748B] font-medium hover:text-[#94A3B8] transition-colors bg-transparent border-none cursor-pointer"
      >
        View Pending Invitations
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </div>
  );
};

export default ModalFooter;