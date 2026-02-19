// components/mobile-menu-item.tsx
interface MobileMenuItemProps {
  href: string;
  label: string;
  icon: string[];
  active: boolean;
}

const MobileMenuItem = ({ href, label, icon, active }: MobileMenuItemProps) => {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 px-2.5 py-3.5 rounded-[0.625rem] border w-full mb-1 cursor-pointer transition-all ${
        active
          ? 'border-[#3B82F6]/40 bg-[#3B82F6]/20 text-[#3B82F6] font-semibold'
          : 'border-transparent text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#3B82F6]/10 hover:border-[#3B82F6]/20'
      }`}
    >
      <svg className="w-[17px] h-[17px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        {icon.map((path, idx) => (
          <path key={idx} d={path} />
        ))}
      </svg>
      <span className="text-[0.9375rem]">{label}</span>
    </a>
  );
};

export default MobileMenuItem;