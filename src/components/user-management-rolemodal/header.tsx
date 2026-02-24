import logoImage from "@/assets/logow.webp";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-[72px] bg-[#0F172A] border-b border-[#1E2D42] flex items-center justify-between px-7 z-50">
      <img src={logoImage} alt="NexGen Guest" className="h-[34px]" />
      
      <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
        <img 
          src="https://i.pravatar.cc/150?img=12" 
          alt="Caleb Griffin" 
          className="w-10 h-10 rounded-full object-cover" 
        />
        <div>
          <div className="text-sm font-semibold text-[#F1F5F9]">Caleb Griffin</div>
          <div className="text-xs text-[#64748B]">Admin Access</div>
        </div>
        <svg 
          className="w-4 h-4 text-[#64748B]" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </header>
  );
};

export default Header;