import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import NavigationMenu from "./nav-menu";
import RoleHeaderCard from "./role-header-card";
import PermissionSection from "./permission-section";
import StickyFooter from "./sticky-footer";
import { permissionSections } from "./mock-permissions";

const EditPermissions: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617] fixed inset-0 overflow-y-auto font-['Outfit',-apple-system,BlinkMacSystemFont,sans-serif]">
      <Header />
      
      <div className="flex pt-[72px] min-h-screen">
        <Sidebar />
        <NavigationMenu />
        
        {/* Main Content */}
        <main className="ml-[360px] flex-1 bg-[#0F1922] p-10 pb-24">
          <RoleHeaderCard />
          
          {permissionSections.map((section, index) => (
            <PermissionSection key={index} section={section} />
          ))}
        </main>
      </div>

      <StickyFooter />
    </div>
  );
};

export default EditPermissions;