import NavMenuItem from "./nav-menu-item";

interface MenuItem {
  href: string;
  label: string;
  icon: string[];
  active: boolean;
}

const NavigationMenu = () => {
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
      active: true
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
      active: false
    }
  ];

  return (
    <nav className="w-[272px] bg-[#0F172A] border-r border-[#1E2D42] fixed top-[72px] bottom-0 left-[88px] p-7 overflow-y-auto z-30 hidden md:block">
      <a href="#" className="flex items-center gap-2 text-[#64748B] text-sm font-medium hover:text-[#F1F5F9] transition-colors mb-7 px-1.5">
        <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back to Dashboard
      </a>

      <div className="text-[0.6875rem] font-bold tracking-wider uppercase text-[#94A3B8] mb-3.5 px-1.5 text-left">
        User Management
      </div>

      {menuItems.map((item, index) => (
        <NavMenuItem 
          key={index} 
          href={item.href} 
          label={item.label} 
          icon={item.icon} 
          active={item.active} 
        />
      ))}
    </nav>
  );
};

export default NavigationMenu;