import type { InvitationDetails } from "./invitation-types";

interface InfoTableProps {
  details: InvitationDetails;
}

const InfoTable = ({ details }: InfoTableProps) => {
  return (
    <div className="w-full bg-[#0A1220] border border-[#1E2D42] rounded-[0.625rem] overflow-hidden mb-6 animate-[fadeUp_0.35s_0.3s_ease_both]">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#1E2D42]">
        <span className="text-[0.875rem] text-[#64748B]">Recipient Email</span>
        <span className="text-[0.9375rem] text-[#F1F5F9] font-bold">{details.email}</span>
      </div>
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#1E2D42]">
        <span className="text-[0.875rem] text-[#64748B]">Assigned Role</span>
        <span className="text-[0.9375rem] text-[#F1F5F9] font-bold flex items-center gap-2">
          <span className="w-[7px] h-[7px] rounded-full bg-[#3B82F6] shadow-[0_0_6px_rgba(59,130,246,0.7)]"></span>
          {details.role}
        </span>
      </div>
      <div className="flex items-center justify-between px-5 py-3.5">
        <span className="text-[0.875rem] text-[#64748B]">Selected Scope</span>
        <span className="text-[0.9375rem] text-[#F1F5F9] font-bold">{details.scope}</span>
      </div>
    </div>
  );
};

export default InfoTable;