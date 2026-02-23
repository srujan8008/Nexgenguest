import React, { useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import NavigationMenu from "./nav-menu";
import PageHeader from "./page-header";
import SearchFilter from "./search-filter";
import RolesTable from "./roles-table";
import AuditBox from "./audit-box";
import { mockRoles } from "./mock-roles";

const RoleManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [roles] = useState(mockRoles);

  const filteredRoles = roles.filter(role => 
    role.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
 <div className="min-h-screen bg-[#020617] fixed inset-0 overflow-y-auto font-['Outfit',-apple-system,BlinkMacSystemFont,sans-serif]">
      <Header />
      
      <div className="flex pt-[72px]">
        <Sidebar />
        <NavigationMenu />
        
        {/* Main Content */}
        <main className="ml-[360px] flex-1 p-10 bg-[#0F1922] min-h-[calc(100vh-72px)]">
          <PageHeader />
          <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <RolesTable roles={filteredRoles} />
          <AuditBox />
        </main>
      </div>
    </div>
  );
};

export default RoleManagement;