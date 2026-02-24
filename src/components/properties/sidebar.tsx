import SidebarIcon from "./sidebar-icon";

interface IconItem {
  href: string;
  tip: string;
  active?: boolean;
  paths: string[];
}

const Sidebar = () => {
  const topIcons: IconItem[] = [
    { 
      href: "#", 
      tip: "Dashboard",
      paths: [
        "M3 3h7v7H3z",
        "M14 3h7v7h-7z",
        "M14 14h7v7h-7z",
        "M3 14h7v7H3z"
      ]
    },
    { 
      href: "#", 
      tip: "Messages",
      paths: ["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"]
    },
    { 
      href: "#", 
      tip: "Users",
      paths: [
        "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
        "M9 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0",
        "M23 21v-2a4 4 0 0 0-3-3.87",
        "M16 3.13a4 4 0 0 1 0 7.75"
      ]
    },
    { 
      href: "#", 
      tip: "Settings",
      paths: [
        "M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
        "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
      ]
    },
    { 
      href: "#", 
      tip: "Analytics",
      paths: [
        "M18 20V10",
        "M12 20V4",
        "M6 20v-6"
      ]
    },
    { 
      href: "#", 
      tip: "Properties",
      active: true,
      paths: [
        "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        "M9 22V12h6v10"
      ]
    }
  ];

  const bottomIcons: IconItem[] = [
    {
      href: "#",
      tip: "Help",
      paths: [
        "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
        "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
        "M12 17h.01"
      ]
    },
    {
      href: "#",
      tip: "Logout",
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
          <SidebarIcon key={index} href={item.href} tip={item.tip} active={item.active} paths={item.paths} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 items-center w-full px-3">
        {bottomIcons.map((item, index) => (
          <SidebarIcon key={index} href={item.href} tip={item.tip} paths={item.paths} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;