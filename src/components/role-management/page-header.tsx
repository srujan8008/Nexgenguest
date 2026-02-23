const PageHeader = () => {
  return (
    <div className="flex items-start justify-between mb-8">
      <div>
        <h1 className="text-[1.875rem] font-bold text-[#F1F5F9] mb-1">Role Management</h1>
        <p className="text-[0.875rem] text-[#64748B]">
          Define and manage system-wide access levels and user permissions.
        </p>
      </div>
      <button className="inline-flex items-center gap-2 bg-[#3B82F6] text-white px-5 py-3 rounded-lg text-[0.9rem] font-semibold hover:bg-[#2563EB] hover:shadow-lg hover:shadow-[#3B82F6]/35 transition-all whitespace-nowrap">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        Create New Role
      </button>
    </div>
  );
};

export default PageHeader;