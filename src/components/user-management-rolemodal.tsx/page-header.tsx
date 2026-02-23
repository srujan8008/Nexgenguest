interface PageHeaderProps {
  onAddUser: () => void;
}

const PageHeader = ({ onAddUser }: PageHeaderProps) => {
  return (
    <div className="flex items-start justify-between mb-8">
      <div>
        <h1 className="text-[1.875rem] font-bold text-[#F1F5F9] mb-1">User Management</h1>
        <p className="text-[0.875rem] text-[#64748B]">
          Manage system access, define roles and monitor active sessions across your organization.
        </p>
      </div>
      <button 
        onClick={onAddUser}
        className="inline-flex items-center gap-2 bg-[#3B82F6] text-white px-5 py-3 rounded-lg text-[0.875rem] font-semibold hover:bg-[#2563EB] hover:shadow-lg hover:shadow-[#3B82F6]/35 transition-all whitespace-nowrap"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <line x1="20" y1="8" x2="20" y2="14" />
          <line x1="23" y1="11" x2="17" y2="11" />
        </svg>
        Add New User
      </button>
    </div>
  );
};

export default PageHeader;