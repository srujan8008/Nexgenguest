import type { Invitation, StatsData } from "./invitations-types";

export const mockInvitations: Invitation[] = [
  {
    id: '1',
    initials: 'SH',
    avatarClass: 'sh',
    email: 'sarah.h@nexgen.com',
    role: 'admin',
    scope: 'All Hotels',
    sentDate: 'Oct 24',
    sentYear: '2023',
    expirationDate: 'Oct 31, 2023',
    isUrgent: false
  },
  {
    id: '2',
    initials: 'MK',
    avatarClass: 'mk',
    email: 'm.king@tech-resorts.com',
    role: 'editor',
    scope: 'Grand Plaza Hotel',
    sentDate: 'Oct 26',
    sentYear: '2023',
    expirationDate: 'In 12 hours',
    isUrgent: true
  },
  {
    id: '3',
    initials: 'JD',
    avatarClass: 'jd',
    email: 'j.devlin@nexgen.com',
    role: 'viewer',
    scope: 'Ocean View Suites',
    sentDate: 'Oct 27',
    sentYear: '2023',
    expirationDate: 'Nov 03, 2023',
    isUrgent: false
  },
  {
    id: '4',
    initials: 'LW',
    avatarClass: 'lw',
    email: 'l.wu@nexgen.com',
    role: 'admin',
    scope: 'Central Park Lofts',
    sentDate: 'Oct 28',
    sentYear: '2023',
    expirationDate: 'Nov 04, 2023',
    isUrgent: false
  }
];

export const statsData: StatsData = {
  totalPending: 4,
  pendingIncrease: '+12%',
  expiringSoon: 5,
  expiringText: 'Invitations expire in less than 48h',
  avgWaitTime: '2.4 Days',
  avgWaitText: 'Time before acceptance'
};