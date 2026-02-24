import { useState, useEffect, useRef } from "react";

const HeaderDropdowns = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(e.target as Node)) {
        setShowNotifications(false);
      }
      if (userRef.current && !userRef.current.contains(e.target as Node)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-4">
      {/* Notifications */}
      <div ref={notificationRef} className="relative">
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative w-10 h-10 rounded-lg bg-[#1E2D42] border border-[#334155] flex items-center justify-center cursor-pointer hover:bg-[#334155] transition-all"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0F172A]"></span>
        </button>

        {/* Notification dropdown */}
        {showNotifications && (
          <div className="absolute right-0 top-[calc(100%+8px)] w-80 bg-[#0F172A] border border-[#334155] rounded-xl shadow-2xl overflow-hidden z-[9999]">
            <div className="px-5 py-3 border-b border-[#1E293B] bg-[#1E293B] flex justify-between items-center">
              <span className="font-bold text-[#F8FAFC] text-sm">Notifications</span>
              <span className="text-xs text-[#3B82F6] cursor-pointer">Mark all read</span>
            </div>
            
            <NotificationItem
              icon={<MessageIcon />}
              title="New message from Room 304"
              description="Can you bring a water bottle?"
              time="2 min ago"
              bgColor=""
            />
            <NotificationItem
              icon={<AlertIcon />}
              title="Late Checkout Request"
              description="Room 101 requested 2 PM checkout."
              time="15 min ago"
              bgColor="rgba(59,130,246,0.04)"
            />
            <NotificationItem
              icon={<CheckIcon />}
              title="System Update"
              description="Guide config synced successfully."
              time="1 hour ago"
              bgColor=""
            />
            
            <div className="p-3 text-center border-t border-[#1E293B]">
              <button className="text-xs font-bold text-[#94A3B8] hover:text-white transition-colors">
                View All Activity
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Profile / User Dropdown */}
      <div ref={userRef} className="relative">
        <button
          onClick={() => setShowUserMenu(!showUserMenu)}
          className="flex items-center gap-3 bg-transparent border border-transparent rounded-full py-1.5 pl-1.5 pr-3.5 cursor-pointer hover:bg-[#1E2D42] hover:border-[#334155] transition-all"
        >
          <img
            src="https://i.pravatar.cc/150?img=68"
            className="w-9 h-9 rounded-full object-cover border-2 border-[#334155]"
            alt="Caleb"
          />
          <div className="text-left">
            <div className="text-[0.8125rem] font-bold text-[#F8FAFC] leading-tight">Caleb Griffin</div>
            <div className="text-[0.6875rem] text-[#64748B]">Master Admin</div>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {/* User dropdown */}
        {showUserMenu && (
          <div className="absolute right-0 top-[calc(100%+8px)] w-[234px] bg-[#0F172A] border border-[#334155] rounded-xl shadow-2xl p-1.5 z-[9999]">
            {/* Hotel switcher */}
            <div className="px-1.5 pb-2.5 border-b border-[#1E293B] mb-1">
              <p className="text-[0.625rem] font-bold text-[#475569] uppercase tracking-wider ml-1.5 mb-1.5">
                Select Hotel
              </p>
              <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg cursor-pointer bg-[#3B82F6]/20 text-[#3B82F6] hover:bg-[#3B82F6]/30 transition-all">
                <CheckIconSmall />
                <span className="text-sm font-medium">Souma Hotel Lima</span>
              </div>
              <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg cursor-pointer text-[#F8FAFC] hover:bg-[#1E2D42] transition-all">
                <span className="w-[14px]"></span>
                <span className="text-sm font-medium">Souma Resort Cusco</span>
              </div>
            </div>

            <DropdownItem icon={<GuidesIcon />} label="My Guides" />
            <DropdownItem icon={<SettingsIcon />} label="UI Settings" />
            <DropdownItem icon={<PasswordIcon />} label="Password Reset" />
            
            <div className="h-px bg-[#1E293B] my-1"></div>
            
            <DropdownItem icon={<LogoutIcon />} label="Logout" color="#EF4444" />
          </div>
        )}
      </div>
    </div>
  );
};

// Helper Components
const NotificationItem = ({ icon, title, description, time, bgColor }: any) => (
  <div
    className="p-4 border-b border-[#1E293B] flex gap-3 cursor-pointer hover:bg-[#1E293B] transition-colors"
    style={{ background: bgColor }}
  >
    <div className="w-8 h-8 rounded-full bg-[#3B82F6]/15 text-[#60A5FA] flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-[0.8125rem] text-[#F8FAFC] font-semibold leading-tight">{title}</p>
      <p className="text-[0.75rem] text-[#64748B] mt-0.5">{description}</p>
      <p className="text-[0.6875rem] text-[#475569] font-bold mt-1">{time}</p>
    </div>
  </div>
);

const DropdownItem = ({ icon, label, color = "#F8FAFC" }: any) => (
  <button
    className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-[#1E2D42] transition-colors"
    style={{ color }}
  >
    {icon}
    {label}
  </button>
);

// Icons
const MessageIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const AlertIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CheckIconSmall = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const GuidesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const PasswordIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const LogoutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

export default HeaderDropdowns;