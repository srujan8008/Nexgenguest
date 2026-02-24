import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Add this import
import BlurredBackground from "./blurred-background";
import SuccessModal from "./success-modal";

const InvitationSent: React.FC = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate()
  
  // Get invitation details from navigation state
  const invitationDetails = location.state || {
    email: "teammate@company.com",
    role: "Editor",
    scope: "All Hotels"
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Optionally navigate back to user management
    // navigate('/user-management');
  };

  const handleInviteAnother = () => {
    // Navigate back to invite user page
    navigate('/invite-user');
  };

  const handleViewPending = () => {
    // Navigate to pending invitations page
    navigate('/user-management?filter=pending');
  };

  return (
    <div className="min-h-screen bg-[#020617] font-['Outfit',-apple-system,BlinkMacSystemFont,sans-serif]">
      <BlurredBackground />
      
      {isModalOpen && (
        <SuccessModal
          onClose={handleCloseModal}
          onInviteAnother={handleInviteAnother}
          onViewPending={handleViewPending}
          invitationDetails={invitationDetails}
        />
      )}
    </div>
  );
};

export default InvitationSent;