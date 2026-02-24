export type PermissionStatus = 'on' | 'off';

export interface Permission {
  id: string;
  name: string;
  description: string;
  icon: string[];
  defaultStatus: PermissionStatus;
}

export interface PermissionSection {
  title: string;
  permissions: Permission[];
}

export interface PermissionRowProps {
  permission: Permission;
  onToggle: (id: string, status: PermissionStatus) => void;
}