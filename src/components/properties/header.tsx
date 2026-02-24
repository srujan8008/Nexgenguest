import HeaderDropdowns from "./header-dropdowns";
import logoImage from "@/assets/logow.webp";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-[72px] bg-[#0F172A] border-b border-[#1E2D42] flex items-center justify-between px-7 z-50">
      {/* Logo */}
      <img src={logoImage} alt="NexGen Guest" className="h-[34px]" />

      {/* Right side */}
      <HeaderDropdowns />
    </header>
  );
};

export default Header;