interface SidebarIconProps {
  href: string;
  tip: string;
  active?: boolean;
  paths: string[];
}

const SidebarIcon = ({ href, tip, active = false, paths }: SidebarIconProps) => {
  return (
    <a 
      href={href} 
      data-tip={tip}
      className={`relative w-full h-12 flex items-center justify-center rounded-lg transition-all group ${
        active 
          ? 'bg-[#3B82F6] text-white' 
          : 'text-[#64748B] hover:text-[#3B82F6] hover:bg-[#3B82F6]/10'
      }`}
    >
      <svg className="w-[21px] h-[21px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        {paths.map((path, idx) => (
          <path key={idx} d={path} />
        ))}
      </svg>
      {/* Tooltip */}
      <span className="absolute left-[calc(100%+10px)] top-1/2 -translate-y-1/2 bg-[#1E293B] text-[#F1F5F9] text-xs font-semibold py-1 px-3 rounded-md whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity border border-[#1E2D42] shadow-xl z-[200]">
        {tip}
      </span>
    </a>
  );
};

export default SidebarIcon;