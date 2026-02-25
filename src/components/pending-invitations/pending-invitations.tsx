import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import NavigationMenu from "./nav-menu";
import StatsCards from "./stats-card";
import InvitationsTable from "./invitations-table";
import { statsData } from "./mock-invitations";

const PendingInvitations: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617] fixed inset-0 overflow-y-auto font-['Outfit',-apple-system,BlinkMacSystemFont,sans-serif]">
      <Header />
      
      <div className="flex pt-[72px] min-h-screen">
        <Sidebar />
        <NavigationMenu />
        
        {/* Main Content */}
        <main className="ml-[344px] flex-1 bg-[#060D1A] p-9">
          <StatsCards stats={statsData} />
          <InvitationsTable />
        </main>
      </div>
    </div>
  );
};

export default PendingInvitations;