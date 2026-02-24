import type { UserRowProps } from "./user-types";

const UserRow = ({ user, onEdit, onDelete }: UserRowProps) => {
  const getRoleBadge = (role: string) => {
    switch(role) {
      case 'Admin':
        return {
          bg: 'bg-[#3B82F6]/10',
          border: 'border-[#3B82F6]/30',
          text: 'text-[#60A5FA]'
        };
      case 'Editor':
      case 'Viewer':
      default:
        return {
          bg: 'bg-[#94A3B8]/10',
          border: 'border-[#94A3B8]/20',
          text: 'text-[#94A3B8]'
        };
    }
  };

  const getStatus = (status: string) => {
    switch(status) {
      case 'Active':
        return {
          dot: 'bg-[#10B981]',
          text: 'text-[#10B981]'
        };
      case 'Inactive':
        return {
          dot: 'bg-[#475569]',
          text: 'text-[#64748B]'
        };
      case 'Pending':
        return {
          dot: 'bg-[#F59E0B]',
          text: 'text-[#F59E0B]'
        };
      default:
        return {
          dot: 'bg-[#475569]',
          text: 'text-[#64748B]'
        };
    }
  };

  const roleStyle = getRoleBadge(user.role);
  const statusStyle = getStatus(user.status);

  return (
    <tr className="border-b border-[#1E2D42] last:border-b-0 hover:bg-[#3B82F6]/5 transition-colors">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center text-[0.8125rem] font-bold text-white shrink-0"
            style={{ background: user.avatarColor }}
          >
            {user.initials}
          </div>
          <div>
            <div className="text-[0.9rem] font-semibold text-[#F1F5F9]">{user.name}</div>
            <div className="text-[0.75rem] text-[#64748B] mt-0.5">{user.joinedDate}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-[0.875rem] text-[#CBD5E1]">{user.email}</td>
      <td className="px-6 py-4">
        <span className={`inline-flex px-2 py-1 rounded-[0.3rem] text-[0.6875rem] font-bold tracking-wider uppercase border ${roleStyle.bg} ${roleStyle.border} ${roleStyle.text}`}>
          {user.role}
        </span>
      </td>
      <td className="px-6 py-4">
        <span className={`inline-flex items-center gap-1.5 text-[0.875rem] font-medium ${statusStyle.text}`}>
          <span className={`w-2 h-2 rounded-full ${statusStyle.dot}`} />
          {user.status}
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        <div className="inline-flex items-center gap-2">
          <button 
            onClick={() => onEdit(user)}
            className="w-[34px] h-[34px] flex items-center justify-center rounded-md text-[#64748B] hover:text-[#94A3B8] hover:bg-[#0F172A] hover:border-[#334155] border border-transparent transition-all"
            title="Edit"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
          <button 
            onClick={() => onDelete(user)}
            className="w-[34px] h-[34px] flex items-center justify-center rounded-md text-[#64748B] hover:text-[#EF4444] hover:bg-[#EF4444]/10 hover:border-[#EF4444]/20 border border-transparent transition-all"
            title="Delete"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6" /><path d="M14 11v6" />
              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;