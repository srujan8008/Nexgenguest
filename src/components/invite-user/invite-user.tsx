import { useState } from 'react';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import NavigationMenu from './navigation/navigation-menu';
import MobileMenu from './mobile/mobile-menu';
import Content from './content';

const InviteUser = () => {
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
      <Content />
    </>
  );
};

export default InviteUser;