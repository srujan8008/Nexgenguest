// components/sidebar.tsx
import SidebarIcon from "./sidebar-icon";

interface IconItem {
  href: string;
  icon: string;
  active?: boolean;
  paths: string[];
}

const Sidebar = () => {
  const topIcons: IconItem[] = [
    { 
      href: "#", 
      icon: "dashboard",
      active: false,
      paths: [
        "M3 3h7v7H3z",
        "M14 3h7v7h-7z",
        "M14 14h7v7h-7z",
        "M3 14h7v7H3z"
      ]
    },
    { 
      href: "#", 
      icon: "messages",
      active: false,
      paths: ["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"]
    },
    { 
      href: "#", 
      icon: "users",
      active: true,
      paths: [
        "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
        "M9 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0",
        "M23 21v-2a4 4 0 0 0-3-3.87",
        "M16 3.13a4 4 0 0 1 0 7.75"
      ]
    },
    { 
      href: "#", 
      icon: "settings",
      active: false,
      paths: [
        "M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
        "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
      ]
    },
    { 
      href: "#", 
      icon: "analytics",
      active: false,
      paths: [
        "M18 20V10",
        "M12 20V4",
        "M6 20v-6"
      ]
    },
    { 
      href: "#", 
      icon: "branding",
      active: false,
      paths: [
        "M13.5 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z",
        "M17.5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z",
        "M8.5 7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z",
        "M6.5 12.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z",
        "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.21-.64-1.67-.41-.46-.63-1.05-.63-1.67 0-1.38 1.12-2.5 2.5-2.5H18c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z"
      ]
    }
  ];

  const bottomIcons: IconItem[] = [
    {
      href: "#",
      icon: "help",
      paths: [
        "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
        "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
        "M12 17h.01"
      ]
    },
    {
      href: "#",
      icon: "logout",
      paths: [
        "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
        "M16 17l5-5-5-5",
        "M21 12H9"
      ]
    }
  ];

  return (
    <aside className="w-[88px] bg-[#0F172A] border-r border-[#1E2D42] fixed top-[72px] bottom-0 left-0 flex-col items-center py-4 z-40 hidden md:flex">
      <div className="flex flex-col gap-0.5 flex-1 items-center w-full px-3">
        {topIcons.map((item, index) => (
          <SidebarIcon key={index} href={item.href} active={item.active} paths={item.paths} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 items-center w-full px-3">
        {bottomIcons.map((item, index) => (
          <SidebarIcon key={index} href={item.href} paths={item.paths} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;