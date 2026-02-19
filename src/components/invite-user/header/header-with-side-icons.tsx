// header-with-side-icons.tsx
import { useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import NavigationMenu from './navigation-menu';
import MobileMenu from './mobile-menu';
import MainContent from './content';

const HeaderWithSideIcons = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <Sidebar />
      <NavigationMenu />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MainContent />
    </>
  );
};

export default HeaderWithSideIcons;