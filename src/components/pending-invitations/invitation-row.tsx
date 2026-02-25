import type { InvitationRowProps } from "./invitations-types";
import { ROLE_BADGE_CLASSES } from "./invitations-constants";

const InvitationRow = ({ invitation, onResend, onRevoke }: InvitationRowProps) => {
  const roleBadgeClass = ROLE_BADGE_CLASSES[invitation.role];
  
  return (
    <tr className="border-b border-[#1E2D42] last:border-b-0 hover:bg-[#3B82F6]/5 transition-colors">
      <td className="px-7 py-3">
        <div className="flex items-center gap-2.5">
          <div className={`w-[30px] h-[30px] rounded-full flex items-center justify-center text-[0.6875rem] font-bold shrink-0 avatar ${invitation.avatarClass}`}>
            {invitation.initials}
          </div>
          <span className="text-[0.875rem] text-[#CBD5E1] font-medium">{invitation.email}</span>
        </div>
      </td>
      <td className="px-7 py-3">
        <span className={`inline-flex items-center justify-center px-3 py-1 rounded-md text-[0.6875rem] font-bold tracking-wider uppercase role-badge ${roleBadgeClass}`}>
          {invitation.role}
        </span>
      </td>
      <td className="px-7 py-3 text-[0.875rem] text-[#94A3B8]">{invitation.scope}</td>
      <td className="px-7 py-3 text-[0.875rem] text-[#94A3B8]">
        {invitation.sentDate}<br />
        {invitation.sentYear}
      </td>
      <td className={`px-7 py-3 text-[0.875rem] ${invitation.isUrgent ? 'text-[#F87171] font-semibold' : 'text-[#94A3B8]'}`}>
        {invitation.expirationDate}
      </td>
      <td className="px-7 py-3">
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => onResend(invitation.id)}
            className="h-7 px-3 rounded-md text-[0.75rem] font-semibold bg-[#3B82F6]/10 text-[#60A5FA] border border-[#3B82F6]/20 hover:bg-[#3B82F6]/20 hover:border-[#3B82F6]/40 transition-all"
          >
            Resend
          </button>
          <button
            onClick={() => onRevoke(invitation.id)}
            className="h-7 px-3 rounded-md text-[0.75rem] font-semibold bg-[#EF4444]/10 text-[#F87171] border border-[#EF4444]/20 hover:bg-[#EF4444]/20 hover:border-[#EF4444]/30 transition-all"
          >
            Revoke
          </button>
        </div>
      </td>
    </tr>
  );
};

export default InvitationRow;