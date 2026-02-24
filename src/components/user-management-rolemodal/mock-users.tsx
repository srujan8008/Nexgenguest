import type { User } from "./user-types";

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Alex Rivera",
    initials: "AR",
    avatarColor: "linear-gradient(135deg,#3B82F6,#1D4ED8)",
    email: "alex.r@nexgen.com",
    role: "Admin",
    status: "Active",
    joinedDate: "Joined 2 days ago"
  },
  {
    id: "2",
    name: "Sarah Chen",
    initials: "SC",
    avatarColor: "linear-gradient(135deg,#6366F1,#4338CA)",
    email: "s.chen@nexgen.com",
    role: "Editor",
    status: "Active",
    joinedDate: "Joined Oct 12, 2026"
  },
  {
    id: "3",
    name: "Marcus Wright",
    initials: "MW",
    avatarColor: "linear-gradient(135deg,#475569,#334155)",
    email: "m.wright@nexgen.com",
    role: "Viewer",
    status: "Inactive",
    joinedDate: "Joined Sep 30, 2026"
  },
  {
    id: "4",
    name: "Jordan Smyth",
    initials: "JS",
    avatarColor: "linear-gradient(135deg,#475569,#334155)",
    email: "j.smyth@nexgen.com",
    role: "Editor",
    status: "Pending",
    joinedDate: "Pending Invitation"
  }
];