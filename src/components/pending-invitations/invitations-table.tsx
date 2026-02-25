import { useState } from "react";
import TableHeader from "./table-header";
import InvitationRow from "./invitation-row";
import TableFooter from "./table-footer";
import { mockInvitations } from "./mock-invitations";

const InvitationsTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [invitations] = useState(mockInvitations);

  const handleResend = (id: string) => {
    console.log("Resend invitation:", id);
    // Implement resend logic
  };

  const handleRevoke = (id: string) => {
    console.log("Revoke invitation:", id);
    // Implement revoke logic
  };

  const handleFilter = () => {
    console.log("Filter clicked");
    // Implement filter logic
  };

  const filteredInvitations = invitations.filter(inv => 
    inv.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#0D1A2D] border border-[#1E2D42] rounded-xl overflow-hidden">
      <TableHeader
        title="Pending Invitations"
        subtitle="Manage and track sent invitations that haven't been accepted yet."
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onFilterClick={handleFilter}
      />

      <table className="w-full border-collapse">
        <thead className="bg-[#081018]">
          <tr>
            <th className="px-7 py-2.5 text-left text-[0.625rem] font-bold tracking-wider uppercase text-[#475569] whitespace-nowrap">Recipient Email</th>
            <th className="px-7 py-2.5 text-left text-[0.625rem] font-bold tracking-wider uppercase text-[#475569] whitespace-nowrap">Role<br />Assigned</th>
            <th className="px-7 py-2.5 text-left text-[0.625rem] font-bold tracking-wider uppercase text-[#475569] whitespace-nowrap">Scope</th>
            <th className="px-7 py-2.5 text-left text-[0.625rem] font-bold tracking-wider uppercase text-[#475569] whitespace-nowrap">Sent Date</th>
            <th className="px-7 py-2.5 text-left text-[0.625rem] font-bold tracking-wider uppercase text-[#475569] whitespace-nowrap">Expiration<br />Date</th>
            <th className="px-7 py-2.5 text-right text-[0.625rem] font-bold tracking-wider uppercase text-[#475569] whitespace-nowrap">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredInvitations.map(invitation => (
            <InvitationRow
              key={invitation.id}
              invitation={invitation}
              onResend={handleResend}
              onRevoke={handleRevoke}
            />
          ))}
        </tbody>
      </table>

      <TableFooter 
        currentPage={1}
        totalPages={6}
        totalItems={24}
        pageSize={4}
      />
    </div>
  );
};

export default InvitationsTable;