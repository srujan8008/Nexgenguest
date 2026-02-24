// types/invitation.types.ts
export interface InvitationDetails {
  email: string;
  role: string;
  scope: string;
}

export interface SuccessModalProps {
  onClose: () => void;
  onInviteAnother: () => void;
  onViewPending: () => void;
  invitationDetails: InvitationDetails;
}

export interface InfoTableProps {
  details: InvitationDetails;
}

export interface ModalFooterProps {
  onInviteAnother: () => void;
  onViewPending: () => void;
}

export interface ModalHeaderProps {
  onClose: () => void;
}