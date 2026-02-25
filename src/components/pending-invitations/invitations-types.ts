export type RoleType = 'admin' | 'editor' | 'viewer';

export interface Invitation {
  id: string;
  initials: string;
  avatarClass: string;
  email: string;
  role: RoleType;
  scope: string;
  sentDate: string;
  sentYear?: string;
  expirationDate: string;
  isUrgent?: boolean;
}

export interface StatsData {
  totalPending: number;
  pendingIncrease: string;
  expiringSoon: number;
  expiringText: string;
  avgWaitTime: string;
  avgWaitText: string;
}

export interface InvitationRowProps {
  invitation: Invitation;
  onResend: (id: string) => void;
  onRevoke: (id: string) => void;
}