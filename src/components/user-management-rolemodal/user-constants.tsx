import type { UserRole, UserStatus } from "./user-types"

export const ROLE_BADGE_CONFIG: Record<UserRole, { className: string; label: string }> = {
  Admin: { className: "badge-admin", label: "Admin" },
  Editor: { className: "badge-editor", label: "Editor" },
  Viewer: { className: "badge-viewer", label: "Viewer" }
};

export const STATUS_CONFIG: Record<UserStatus, { dotClass: string; textClass: string; label: string }> = {
  Active: { dotClass: "dot-active", textClass: "st-active", label: "Active" },
  Inactive: { dotClass: "dot-inactive", textClass: "st-inactive", label: "Inactive" },
  Pending: { dotClass: "dot-pending", textClass: "st-pending", label: "Pending" }
};

export const AVATAR_GRADIENTS = [
  "linear-gradient(135deg,#3B82F6,#1D4ED8)",
  "linear-gradient(135deg,#6366F1,#4338CA)",
  "linear-gradient(135deg,#475569,#334155)"
];