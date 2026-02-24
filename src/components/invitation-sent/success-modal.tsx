import React, { useEffect } from "react";
import ModalHeader from "./modal-header";
import SuccessIcon from "./success-icon";
import InfoTable from "./info-table";
import ModalFooter from "./modal-footer";
import type { SuccessModalProps } from "./invitation-types";

const SuccessModal = ({ 
  onClose, 
  onInviteAnother, 
  onViewPending,
  invitationDetails 
}: SuccessModalProps) => {
  
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes modalOut {
        from { opacity: 1; transform: scale(1) translateY(0); }
        to   { opacity: 0; transform: scale(0.95) translateY(8px); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleClose = () => {
    const modal = document.getElementById('success-modal');
    if (modal) {
      modal.style.animation = 'modalOut 0.2s ease forwards';
      setTimeout(() => {
        onClose();
      }, 200);
    } else {
      onClose();
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-[#020617]/72 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div 
        id="success-modal"
        className="w-full max-w-[460px] bg-[#0F172A] border border-[#1E2D42] rounded-2xl overflow-hidden animate-[modalIn_0.3s_cubic-bezier(0.34,1.56,0.64,1)_both]"
      >
        <ModalHeader onClose={handleClose} />
        
        <div className="px-8 pt-9 pb-0 flex flex-col items-center">
          <SuccessIcon />
          
          <h2 className="text-[1.375rem] font-extrabold text-[#F1F5F9] text-center mb-3 animate-[fadeUp_0.35s_0.2s_ease_both]">
            Invitation Sent!
          </h2>
          
          <p className="text-[0.9375rem] text-[#64748B] text-center leading-relaxed max-w-[340px] mb-7 animate-[fadeUp_0.35s_0.25s_ease_both]">
            Your invitation has been successfully sent to the user. They will receive an email shortly to join the platform.
          </p>

          <InfoTable details={invitationDetails} />
        </div>

        <ModalFooter 
          onInviteAnother={onInviteAnother}
          onViewPending={onViewPending}
        />
      </div>
    </div>
  );
};

export default SuccessModal;