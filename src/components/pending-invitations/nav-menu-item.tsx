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
      className={`flex items-center gap-3 px-2.5 py-3 rounded-[0.625rem] border w-full mb-1 cursor-pointer transition-all relative group ${
        active
          ? 'border-[#3B82F6]/40 bg-[#3B82F6]/20 text-[#60A5FA] font-semibold'
          : 'border-transparent text-[#64748B] hover:text-[#F8FAFC] hover:bg-[#3B82F6]/10 hover:border-[#3B82F6]/20'
      }`}
    >
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        {icon.map((path, idx) => (
          <path key={idx} d={path} />
        ))}
      </svg>
      <span className="text-[0.875rem]">{label}</span>
      <span className={`absolute right-3 w-1.5 h-1.5 rounded-full ${
        active 
          ? 'bg-[#3B82F6] shadow-[0_0_5px_rgba(59,130,246,0.7)]' 
          : 'bg-[#1E3A5F]'
      }`} />
    </a>
  );
};

export default NavMenuItem;