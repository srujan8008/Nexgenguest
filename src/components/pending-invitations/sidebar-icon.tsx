interface SidebarIconProps {
  href: string;
  active?: boolean;
  paths: string[];
}

const SidebarIcon = ({ href, active = false, paths }: SidebarIconProps) => {
  return (
    <a 
      href={href} 
      className={`w-full h-[42px] flex items-center justify-center rounded-lg transition-all ${
        active 
          ? 'bg-[#3B82F6] text-white' 
          : 'text-[#475569] hover:text-[#3B82F6] hover:bg-[#3B82F6]/10'
      }`}
    >
      <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        {paths.map((path, idx) => (
          <path key={idx} d={path} />
        ))}
      </svg>
    </a>
  );
};

export default SidebarIcon;