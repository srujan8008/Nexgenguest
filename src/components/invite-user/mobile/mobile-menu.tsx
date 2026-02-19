// components/mobile-menu.tsx
import MobileMenuItem from './mobile-menu-item';
import MobileIconGrid from './mobile-icon-grid';

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

interface MenuItem {
  href: string;
  label: string;
  icon: string[];
  active: boolean;
}

const MobileMenu = ({ isMenuOpen }: MobileMenuProps) => {
  const menuItems: MenuItem[] = [
    {
      href: "#",
      label: "User List",
      icon: [
        "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
        "M9 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0",
        "M23 21v-2a4 4 0 0 0-3-3.87",
        "M16 3.13a4 4 0 0 1 0 7.75"
      ],
      active: false
    },
    {
      href: "#",
      label: "Roles & Permissions",
      icon: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"],
      active: false
    },
    {
      href: "#",
      label: "Invite User",
      icon: [
        "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
        "M8.5 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0",
        "M20 8v6",
        "M23 11h-6"
      ],
      active: true
    }
  ];

  return (
    <div className={`
      fixed inset-y-0 left-0 top-[72px] w-[300px] bg-[#0F172A] border-r border-[#1E2D42] 
      transform transition-transform duration-300 ease-in-out z-50
      ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      md:hidden overflow-y-auto
    `}>
      <div className="p-6">
        {/* Back to Dashboard */}
        <a href="#" className="flex items-center gap-2 text-[#64748B] text-sm font-medium hover:text-[#F1F5F9] transition-colors mb-7">
          <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Dashboard
        </a>

        {/* User Management Section Title */}
        <div className="text-[0.6875rem] font-bold tracking-wider uppercase text-[#94A3B8] mb-3.5">
          User Management
        </div>

        {menuItems.map((item, index) => (
          <MobileMenuItem 
            key={index} 
            href={item.href} 
            label={item.label} 
            icon={item.icon} 
            active={item.active} 
          />
        ))}

        <div className="h-px bg-[#1E2D42] my-6" />

        <MobileIconGrid />
        
        <div className="mt-6">
          <a href="#" className="flex items-center gap-2 p-2 rounded-lg text-[#64748B] hover:text-[#3B82F6]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span className="text-sm">Help</span>
          </a>
          <a href="#" className="flex items-center gap-2 p-2 rounded-lg text-[#64748B] hover:text-[#3B82F6]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            <span className="text-sm">Logout</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;