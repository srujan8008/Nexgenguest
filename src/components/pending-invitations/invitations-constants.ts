import type { RoleType } from "./invitations-types";

export const ROLE_BADGE_CLASSES: Record<RoleType, string> = {
  admin: 'admin',
  editor: 'editor',
  viewer: 'viewer'
};

export const AVATAR_CLASSES: Record<string, string> = {
  SH: 'sh',
  MK: 'mk',
  JD: 'jd',
  LW: 'lw'
};