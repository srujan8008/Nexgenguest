import logoImage from "@/assets/logow.webp";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-[72px] bg-[#0F172A] border-b border-[#1E2D42] flex items-center justify-between px-4 md:px-7 z-50">
      <div className="flex items-center gap-3">
        {/* Hamburger Menu - visible only on mobile */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#64748B] hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Logo */}
        <img src={logoImage} alt="NexGen Guest" className="h-[34px]" />
      </div>
      
      {/* Profile button */}
      <ProfileButton />
    </header>
  );
};

const ProfileButton = () => (
  <div className="flex items-center gap-2 md:gap-3 cursor-pointer hover:opacity-80 transition-opacity">
    <img 
      src="https://i.pravatar.cc/150?img=12" 
      alt="Caleb Griffin" 
      className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" 
    />
    <div className="hidden md:block">
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
);

export default Header;