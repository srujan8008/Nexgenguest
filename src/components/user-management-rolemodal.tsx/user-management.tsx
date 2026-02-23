import React, { useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import NavigationMenu from "./nav-menu";
import PageHeader from "./page-header";
import StatsCards from "./stats-cards";
import SearchFilter from "./search-filter";
import UsersTable from "./users-table";
import Pagination from "./pagination";
import CreateUserModal from "./create-user-modal";
import { mockUsers } from "./mock-users";

const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users] = useState(mockUsers);

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    totalUsers: 1284,
    activeNow: 42,
    pendingInvites: 8
  };

  return (
    <div className="min-h-screen bg-[#020617] fixed inset-0 overflow-y-auto font-['Outfit',-apple-system,BlinkMacSystemFont,sans-serif]">
      <Header />
      
      <div className="flex pt-[72px] min-h-screen">
        <Sidebar />
        <NavigationMenu />
        
        {/* Main Content */}
        <main className="ml-[360px] flex-1 bg-[#0F1922] p-10">
          <PageHeader onAddUser={() => setIsModalOpen(true)} />
          <StatsCards stats={stats} />
          <SearchFilter 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            onFilter={() => {}} 
            onExport={() => {}} 
          />
          <UsersTable users={filteredUsers} />
          <Pagination 
            currentPage={1} 
            totalPages={12} 
            totalItems={124} 
            pageSize={4} 
          />
        </main>
      </div>

      {/* Create User Modal */}
      <CreateUserModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default UserManagement;