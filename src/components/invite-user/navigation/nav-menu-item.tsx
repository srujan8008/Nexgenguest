// components/nav-menu-item.tsx
interface NavMenuItemProps {
  href: string;
  label: string;
  icon: string[];
  active: boolean;
}

const NavMenuItem = ({ href, label, icon, active }: NavMenuItemProps) => {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 px-2.5 py-3.5 rounded-[0.625rem] border w-full mb-1 cursor-pointer transition-all relative group ${
        active
          ? 'border-[#3B82F6]/40 bg-[#3B82F6]/20 text-[#3B82F6] font-semibold shadow-lg shadow-[#3B82F6]/15'
          : 'border-transparent text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#3B82F6]/10 hover:border-[#3B82F6]/20'
      }`}
    >
      <svg className="w-[17px] h-[17px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        {icon.map((path, idx) => (
          <path key={idx} d={path} />
        ))}
      </svg>
      <span className="text-[0.9375rem]">{label}</span>
      <span className={`absolute right-3 w-1.5 h-1.5 rounded-full ${
        active 
          ? 'bg-[#3B82F6]' 
          : 'bg-[#334155] group-hover:bg-[#60A5FA] group-hover:opacity-50 transition-all'
      }`} />
    </a>
  );
};

export default NavMenuItem;