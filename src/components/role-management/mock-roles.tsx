import type { Role } from "./types";
import { ROLE_COLORS } from "./constants";

export const mockRoles: Role[] = [
  {
    id: "1",
    name: "Super Admin",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    iconColor: ROLE_COLORS.SUPER_ADMIN.stroke,
    iconBg: ROLE_COLORS.SUPER_ADMIN.bg,
    usersCount: 12,
    lastUpdated: "Oct 24, 2025"
  },
  {
    id: "2",
    name: "Hotel Admin",
    icon: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7 M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
    iconColor: ROLE_COLORS.HOTEL_ADMIN.stroke,
    iconBg: ROLE_COLORS.HOTEL_ADMIN.bg,
    usersCount: 45,
    lastUpdated: "Oct 20, 2025"
  },
  {
    id: "3",
    name: "Hotel Staff",
    icon: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    iconColor: ROLE_COLORS.HOTEL_STAFF.stroke,
    iconBg: ROLE_COLORS.HOTEL_STAFF.bg,
    usersCount: 128,
    lastUpdated: "Sep 15, 2025"
  }
];