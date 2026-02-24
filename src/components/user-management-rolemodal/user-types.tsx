export type UserRole = 'Admin' | 'Editor' | 'Viewer';
export type UserStatus = 'Active' | 'Inactive' | 'Pending';

export interface User {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  joinedDate: string;
}

export interface StatsProps {
  totalUsers: number;
  activeNow: number;
  pendingInvites: number;
}

export interface UserRowProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}