// components/mobile-icon-grid.tsx
interface MobileIcon {
  href: string;
  label: string;
  active?: boolean;
  icon: string[];
}

const MobileIconGrid = () => {
  const icons: MobileIcon[] = [
    {
      href: "#",
      label: "Dashboard",
      icon: [
        "M3 3h7v7H3z",
        "M14 3h7v7h-7z",
        "M14 14h7v7h-7z",
        "M3 14h7v7H3z"
      ]
    },
    {
      href: "#",
      label: "Messages",
      icon: ["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"]
    },
    {
      href: "#",
      label: "Users",
      active: true,
      icon: [
        "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
        "M9 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0",
        "M23 21v-2a4 4 0 0 0-3-3.87",
        "M16 3.13a4 4 0 0 1 0 7.75"
      ]
    },
    {
      href: "#",
      label: "Settings",
      icon: [
        "M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
        "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
      ]
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {icons.map((item, index) => (
        <a 
          key={index}
          href={item.href} 
          className={`flex flex-col items-center gap-1 p-2 rounded-lg ${
            item.active ? 'text-[#3B82F6]' : 'text-[#64748B] hover:text-[#3B82F6]'
          }`}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {item.icon.map((path, idx) => (
              <path key={idx} d={path} />
            ))}
          </svg>
          <span className="text-[0.625rem]">{item.label}</span>
        </a>
      ))}
    </div>
  );
};

export default MobileIconGrid;