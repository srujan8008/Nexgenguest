import { useState, useRef, useEffect, useCallback } from "react";
import { Search, SlidersHorizontal, Download, X, Check } from "lucide-react";
import logoImage from "@/assets/logow.webp";


// ── Types ──────────────────────────────────────────────────
type FilterType = "role" | "status";
type RoleBadge  = "ADMIN" | "EDITOR" | "VIEWER";
type StatusType = "Active" | "Inactive" | "Pending";

interface Chip { label: string; type: FilterType; }
interface FilterOptionProps { label: string; selected: boolean; onClick: () => void; }
interface ChipProps { label: string; onRemove: () => void; }
interface User {
  id: string; initials: string; name: string; joined: string;
  email: string; role: RoleBadge; status: StatusType; avatarGrad: string;
}

// ── Constants ──────────────────────────────────────────────
const ROLES    = ["All Roles",  "Admin",  "Editor", "Viewer"]                    as const;
const STATUSES = ["All Status", "Active", "Inactive", "Pending"]                 as const;

const ROLE_STYLES: Record<RoleBadge, string> = {
  ADMIN:  "text-blue-400  bg-blue-500/10  border border-blue-500/30",
  EDITOR: "text-slate-300 bg-slate-500/10 border border-slate-500/20",
  VIEWER: "text-slate-300 bg-slate-500/10 border border-slate-500/20",
};
const STATUS_STYLES: Record<StatusType, { text: string; dot: string }> = {
  Active:   { text: "text-emerald-400", dot: "bg-emerald-400" },
  Inactive: { text: "text-slate-500",   dot: "bg-slate-500"   },
  Pending:  { text: "text-amber-400",   dot: "bg-amber-400"   },
};

const USERS: User[] = [
  { id:"1", initials:"AR", name:"Alex Rivera",   joined:"Joined 2 days ago",   email:"alex.r@nexgen.com",   role:"ADMIN",  status:"Active",   avatarGrad:"from-blue-500 to-blue-700"    },
  { id:"2", initials:"SC", name:"Sarah Chen",    joined:"Joined Oct 12, 2026", email:"s.chen@nexgen.com",   role:"EDITOR", status:"Active",   avatarGrad:"from-indigo-500 to-indigo-700" },
  { id:"3", initials:"MW", name:"Marcus Wright", joined:"Joined Sep 30, 2026", email:"m.wright@nexgen.com", role:"VIEWER", status:"Inactive", avatarGrad:"from-slate-500 to-slate-700"   },
  { id:"4", initials:"JS", name:"Jordan Smyth",  joined:"Pending Invitation",  email:"j.smyth@nexgen.com",  role:"EDITOR", status:"Pending",  avatarGrad:"from-slate-500 to-slate-700"   },
];

// ── Sub-components ─────────────────────────────────────────
const FilterOption = ({ label, selected, onClick }: FilterOptionProps) => (
  <button onClick={onClick}
    className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-sm transition-colors
      ${selected ? "bg-blue-500/10 text-blue-400" : "text-slate-400 hover:bg-slate-700/50 hover:text-slate-200"}`}>
    {label}
    {selected && <Check size={13} strokeWidth={2.5} />}
  </button>
);

const Chip = ({ label, onRemove }: ChipProps) => (
  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/25 text-blue-400">
    {label}
    <button onClick={onRemove} className="opacity-60 hover:opacity-100 transition-opacity" aria-label={`Remove ${label}`}>
      <X size={11} strokeWidth={2.5} />
    </button>
  </span>
);

// ── Sidebar Icon Link ──────────────────────────────────────
const SbLink = ({ active, title, children }: { active?: boolean; title: string; children: React.ReactNode }) => (
  <a href="#" title={title} onClick={(e) => e.preventDefault()}
    className={`w-full h-12 flex items-center justify-center rounded-lg transition-all duration-200
      ${active ? "bg-blue-600 text-white" : "text-slate-500 hover:text-blue-400 hover:bg-blue-500/8"}`}>
    {children}
  </a>
);

// ── Stat Card ──────────────────────────────────────────────
const StatCard = ({ iconBg, icon, label, value }: { iconBg: string; icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex-1 flex items-center gap-4 bg-[#1E293B] border border-slate-700/30 rounded-xl p-6">
    <div className={`w-[50px] h-[50px] rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg}`}>
      {icon}
    </div>
    <div>
      <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-slate-500 mb-1">{label}</p>
      <p className="text-[1.875rem] font-bold text-slate-100 leading-none">{value}</p>
    </div>
  </div>
);

// ── User Row ───────────────────────────────────────────────
const EditIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);
const TrashIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
    <path d="M10 11v6"/><path d="M14 11v6"/>
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
  </svg>
);

const UserRow = ({ user, onDelete }: { user: User; onDelete: (id: string) => void }) => {
  const st = STATUS_STYLES[user.status];
  return (
    <tr className="border-b border-slate-700/30 hover:bg-blue-500/[0.03] transition-colors group">
      {/* User Details */}
      <td className="px-6 py-[19px] text-left">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${user.avatarGrad} flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0`}>
            {user.initials}
          </div>
          <div>
            <p className="text-[0.9rem] font-semibold text-slate-100">{user.name}</p>
            <p className="text-[0.75rem] text-slate-500 mt-0.5">{user.joined}</p>
          </div>
        </div>
      </td>
      {/* Email */}
      <td className="px-6 py-[19px] text-[0.875rem] text-slate-300 text-left">{user.email}</td>
      {/* Role */}
      <td className="px-6 py-[19px] text-left">
        <span className={`inline-flex px-2.5 py-1 rounded text-[11px] font-bold tracking-[0.06em] uppercase ${ROLE_STYLES[user.role]}`}>
          {user.role}
        </span>
      </td>
      {/* Status */}
      <td className="px-6 py-[19px]">
        <span className={`flex items-center gap-1.5 text-[0.875rem] font-medium ${st.text}`}>
          <span className={`w-2 h-2 rounded-full flex-shrink-0 ${st.dot}`} />
          {user.status}
        </span>
      </td>
      {/* Actions */}
      <td className="px-6 py-[19px] text-right">
        <div className="inline-flex items-center gap-2">
          <button className="w-[34px] h-[34px] flex items-center justify-center rounded-md border border-transparent text-slate-500 hover:text-slate-300 hover:bg-[#0F172A] hover:border-slate-600 transition-all duration-150">
            <EditIcon />
          </button>
          <button onClick={() => onDelete(user.id)}
            className="w-[34px] h-[34px] flex items-center justify-center rounded-md border border-transparent text-slate-500 hover:text-red-400 hover:bg-red-500/8 hover:border-red-500/20 transition-all duration-150">
            <TrashIcon />
          </button>
        </div>
      </td>
    </tr>
  );
};

// ── Main Component ──────────────────────────────────────────
export default function UserManagement() {
  const [query,       setQuery]       = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [role,        setRole]        = useState("All Roles");
  const [status,      setStatus]      = useState("All Status");
  const [chips,       setChips]       = useState<Chip[]>([]);
  const [exported,    setExported]    = useState(false);
  const [users,       setUsers]       = useState<User[]>(USERS);
  const [activeNav,   setActiveNav]   = useState("User List");

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setShowFilters(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const applyFilters = useCallback(() => {
    setChips([
      ...(role   !== "All Roles"  ? [{ label: role,   type: "role"   as FilterType }] : []),
      ...(status !== "All Status" ? [{ label: status, type: "status" as FilterType }] : []),
    ]);
    setShowFilters(false);
  }, [role, status]);

  const clearFilters = useCallback(() => {
    setRole("All Roles"); setStatus("All Status"); setChips([]);
  }, []);

  const removeChip = useCallback((chip: Chip) => {
    if (chip.type === "role")   setRole("All Roles");
    if (chip.type === "status") setStatus("All Status");
    setChips(prev => prev.filter(c => c.label !== chip.label));
  }, []);

  const handleExport = useCallback(() => {
    setExported(true);
    setTimeout(() => setExported(false), 2000);
  }, []);

  const handleDelete = useCallback((id: string) => {
    const user = users.find(u => u.id === id);
    if (user && confirm(`Remove ${user.name} from the organization?`))
      setUsers(prev => prev.filter(u => u.id !== id));
  }, [users]);

  const filtered = users.filter(u => {
    const q = query.toLowerCase();
    const matchQ = !q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.role.toLowerCase().includes(q);
    const matchR = role   === "All Roles"  || u.role   === role.toUpperCase();
    const matchS = status === "All Status" || u.status === status;
    return matchQ && matchR && matchS;
  });

  const NAV_ITEMS = [
    { label: "User List", icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
    { label: "Roles & Permissions", icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
    { label: "Invite User", icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg> },
  ];

  return (
    <div className="font-['Outfit',sans-serif] bg-[#020617] text-slate-100 min-h-screen">

      {/* ── TOP HEADER ── */}
      <header className="fixed top-0 left-0 right-0 h-[72px] bg-[#0F172A] border-b border-slate-700/30 flex items-center justify-between px-7 z-[100]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white text-sm">N</div>
          <div>
            <img src={logoImage} alt="NexGen Guest" className="h-10" />
          </div>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <img src="https://i.pravatar.cc/150?img=12" alt="Caleb Griffin" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="text-[0.875rem] font-semibold text-slate-100 leading-tight">Caleb Griffin</p>
            <p className="text-[0.75rem] text-slate-500 text-left">Admin Access</p>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </header>

      <div className="flex pt-[72px] min-h-screen">

        {/* ── ICON SIDEBAR ── */}
        <aside className="w-[88px] bg-[#0F172A] border-r border-slate-700/30 fixed top-[72px] bottom-0 left-0 flex flex-col items-center py-4 z-[90]">
          <div className="flex flex-col gap-0.5 flex-1 items-center w-full px-3">
            <SbLink title="Dashboard">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            </SbLink>
            <SbLink title="Messages">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </SbLink>
            <SbLink title="Users" active>
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </SbLink>
            <SbLink title="Settings">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            </SbLink>
            <SbLink title="Analytics">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
            </SbLink>
          </div>
          <div className="flex flex-col gap-0.5 items-center w-full px-3">
            <SbLink title="Help">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </SbLink>
            <SbLink title="Logout">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            </SbLink>
          </div>
        </aside>

        {/* ── LEFT NAV PANEL ── */}
        <nav className="w-[272px] bg-[#0F172A] border-r border-slate-700/30 fixed top-[72px] bottom-0 left-[88px] p-7 overflow-y-auto z-[80]">
          <a href="#" onClick={e => e.preventDefault()}
            className="flex items-center gap-2 text-slate-500 text-[0.875rem] font-medium mb-7 px-1.5 hover:text-slate-100 transition-colors">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            Back to Dashboard
          </a>
          <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-slate-400 mb-3.5 px-1.5 text-left">User Management</p>
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map(item => (
              <button key={item.label} onClick={() => setActiveNav(item.label)}
                className={`flex items-center gap-3 w-full px-4 py-3.5 rounded-[10px] border text-[0.9375rem] font-medium transition-all duration-200 relative
                  ${activeNav === item.label
                    ? "text-blue-400 bg-blue-500/12 border-blue-500/40 font-semibold shadow-[0_2px_8px_rgba(59,130,246,0.15)]"
                    : "text-slate-400 border-transparent hover:text-slate-100 hover:bg-blue-500/8 hover:border-blue-500/20"
                  }`}>
                <span className={activeNav === item.label ? "text-blue-400" : ""}>{item.icon}</span>
                {item.label}
                {activeNav === item.label && (
                  <span className="absolute right-3 w-1.5 h-1.5 bg-blue-400 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* ── MAIN CONTENT ── */}
        <main className="ml-[360px] flex-1 p-10 bg-[#0F1922] min-h-[calc(100vh-72px)]">

          {/* Page Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-[1.875rem] font-bold text-slate-100 mb-1 text-left">User Management</h1>
              <p className="text-[0.875rem] text-slate-500">Manage system access, define roles and monitor active sessions across your organization.</p>
            </div>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 hover:shadow-[0_4px_14px_rgba(59,130,246,0.35)] text-white px-5 py-3 rounded-lg text-[0.875rem] font-semibold transition-all duration-200 whitespace-nowrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
              Add New User
            </button>
          </div>

          {/* Stat Cards */}
          <div className="flex gap-5 mb-8 text-left">
            <StatCard iconBg="bg-blue-500/12" label="Total Users" value="1,284"
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
            />
            <StatCard iconBg="bg-emerald-500/12" label="Active Now" value="42"
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg>}
            />
            <StatCard iconBg="bg-amber-500/12" label="Pending Invitations" value="8"
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="12" y2="16"/></svg>}
            />
          </div>

          {/* ── Search + Filters + Export ── */}
          <div className="flex flex-col gap-2.5 mb-6">
            <div className="flex items-center gap-3">

              {/* Search */}
              <div className="relative flex-1">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                <input type="text" value={query} onChange={e => setQuery(e.target.value)}
                  placeholder="Search users by name, email or role..."
                  className="w-full bg-[#1A2332] border border-[#1E293B] rounded-lg text-slate-100 text-[0.9375rem] placeholder-slate-600 pl-11 pr-10 py-[13px] outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] transition-all duration-200 font-['Outfit',sans-serif]"
                />
                {query && (
                  <button onClick={() => setQuery("")} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors">
                    <X size={14} strokeWidth={2.5} />
                  </button>
                )}
              </div>

              {/* Filters */}
              <div className="relative" ref={dropdownRef}>
                <button onClick={() => setShowFilters(v => !v)}
                  className={`flex items-center gap-2 px-[18px] py-3 rounded-lg border text-[0.875rem] font-semibold transition-all duration-200 whitespace-nowrap
                    ${showFilters || chips.length > 0
                      ? "bg-blue-500/10 border-blue-500/40 text-blue-400"
                      : "bg-[#1E293B] border-[#334155] text-slate-400 hover:text-slate-100 hover:border-slate-500 hover:bg-[#334155]"
                    }`}>
                  <SlidersHorizontal size={16} />
                  Filters
                  {chips.length > 0 && (
                    <span className="flex items-center justify-center bg-blue-600 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] px-1">
                      {chips.length}
                    </span>
                  )}
                </button>

                {showFilters && (
                  <div className="absolute top-[calc(100%+6px)] left-0 z-50 w-56 bg-[#1E293B] border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden">
                    <div className="p-3.5 border-b border-slate-700/50">
                      <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-slate-500 mb-2.5">Role Type</p>
                      {ROLES.map(r => <FilterOption key={r} label={r} selected={role === r} onClick={() => setRole(r)} />)}
                    </div>
                    <div className="p-3.5">
                      <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-slate-500 mb-2.5">Status</p>
                      {STATUSES.map(s => <FilterOption key={s} label={s} selected={status === s} onClick={() => setStatus(s)} />)}
                    </div>
                    <div className="flex gap-2 px-3.5 py-3 border-t border-slate-700/50">
                      <button onClick={clearFilters} className="flex-1 py-2 rounded-md text-[12.5px] font-semibold border border-slate-600 text-slate-400 hover:border-slate-500 hover:text-slate-200 transition-colors">Clear</button>
                      <button onClick={applyFilters} className="flex-1 py-2 rounded-md text-[12.5px] font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-colors">Apply</button>
                    </div>
                  </div>
                )}
              </div>

              {/* Export */}
              <button onClick={handleExport}
                className={`flex items-center gap-2 px-[18px] py-3 rounded-lg border text-[0.875rem] font-semibold transition-all duration-200 whitespace-nowrap
                  ${exported
                    ? "bg-emerald-500/10 border-emerald-600/40 text-emerald-400"
                    : "bg-[#1E293B] border-[#334155] text-slate-400 hover:text-slate-100 hover:border-slate-500 hover:bg-[#334155]"
                  }`}>
                <Download size={16} />
                {exported ? "Exported!" : "Export"}
              </button>
            </div>

            {/* Active Chips */}
            {chips.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {chips.map(chip => <Chip key={chip.label} label={chip.label} onRemove={() => removeChip(chip)} />)}
              </div>
            )}
          </div>

          {/* ── Table ── */}
          <div className="bg-[#1E293B] border border-slate-700/30 rounded-xl overflow-hidden mb-6">
            <table className="w-full border-collapse table-fixed">
              <colgroup>
                <col className="w-[29%]" />
                <col className="w-[25%]" />
                <col className="w-[14%]" />
                <col className="w-[16%]" />
                <col className="w-[16%]" />
              </colgroup>
              <thead>
                <tr className="bg-[#162032] border-b border-slate-700/40">
                  {["User Details","Email Address","Role Type","Status","Actions"].map((h, i) => (
                    <th key={h} className={`px-6 py-[15px] text-[11px] font-bold tracking-[0.1em] uppercase text-slate-500 ${i === 4 ? "text-right" : "text-left"}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.length > 0
                  ? filtered.map(user => <UserRow key={user.id} user={user} onDelete={handleDelete} />)
                  : (
                    <tr>
                      <td colSpan={5} className="px-6 py-16 text-center text-slate-500 text-sm">
                        No users match your search or filters.
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>

          {/* ── Pagination ── */}
          <div className="flex items-center justify-between">
            <p className="text-[0.875rem] text-slate-500">
              Showing <strong className="text-slate-400 font-semibold">1–{filtered.length}</strong> of{" "}
              <strong className="text-slate-400 font-semibold">124</strong> users
            </p>
            <div className="flex items-center gap-1.5">
              {([1, 2, 3] as const).map(p => (
                <button key={p}
                  className={`w-9 h-9 flex items-center justify-center rounded-md border text-[0.875rem] font-semibold transition-all duration-150
                    ${p === 1 ? "bg-blue-600 border-blue-600 text-white" : "bg-[#1E293B] border-[#334155] text-slate-500 hover:bg-[#334155] hover:text-slate-100"}`}>
                  {p}
                </button>
              ))}
              <span className="text-slate-500 px-1 text-sm">...</span>
              <button className="w-9 h-9 flex items-center justify-center rounded-md border bg-[#1E293B] border-[#334155] text-slate-500 hover:bg-[#334155] hover:text-slate-100 text-[0.875rem] font-semibold transition-all duration-150">
                12
              </button>
              <button className="w-9 h-9 flex items-center justify-center rounded-md border bg-[#1E293B] border-[#334155] text-slate-500 hover:bg-[#334155] hover:text-slate-100 transition-all duration-150">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}