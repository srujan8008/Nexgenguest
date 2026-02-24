import React, { useState, useEffect } from "react";

const ContextMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // This will be controlled by the PropertyCard component
  // We'll use a global event or context in a real app
  React.useEffect(() => {
    const handleShowMenu = (e: any) => {
      setIsOpen(true);
      const menu = document.getElementById('ctxMenu');
      if (menu) {
        menu.style.left = e.detail.left + 'px';
        menu.style.top = e.detail.top + 'px';
      }
    };
    document.addEventListener('showContextMenu', handleShowMenu as EventListener);
    return () => document.removeEventListener('showContextMenu', handleShowMenu as EventListener);
  }, []);

  return (
    <div 
      id="ctxMenu"
      className={`fixed bg-[#1E293B] border border-[#1E2D42] rounded-xl p-1.5 z-[300] w-[188px] shadow-2xl transition-all origin-top-right ${
    isOpen ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-95'
  }`}
    >
      <MenuItem icon={<ViewIcon />} label="View Details" />
      <MenuItem icon={<EditIcon />} label="Edit Property" />
      <MenuItem icon={<ChatIcon />} label="Open Chat" />
      <MenuItem icon={<DuplicateIcon />} label="Duplicate" />
      <div className="h-px bg-[#1E2D42] my-1"></div>
      <MenuItem icon={<DeleteIcon />} label="Delete Property" danger />
    </div>
  );
};

const MenuItem = ({ icon, label, danger = false }: any) => (
  <div
    className={`flex items-center gap-2.5 px-3.5 py-3 rounded-lg text-sm cursor-pointer transition-all ${
      danger 
        ? 'text-[#EF4444] hover:bg-[#EF4444]/10' 
        : 'text-[#94A3B8] hover:bg-[#1E2D42] hover:text-[#F1F5F9]'
    }`}
  >
    {icon}
    {label}
  </div>
);

// Icons
const ViewIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EditIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const ChatIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const DuplicateIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const DeleteIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);

export default ContextMenu;