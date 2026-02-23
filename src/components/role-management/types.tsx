export interface Role {
  id: string;
  name: string;
  icon: string;
  iconColor: string;
  iconBg: string;
  usersCount: number;
  lastUpdated: string;
}

export interface RoleRowProps {
  role: Role;
  onEdit: (roleName: string) => void;
}