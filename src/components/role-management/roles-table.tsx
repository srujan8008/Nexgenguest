import RoleRow from "./role-row";
import TableFooter from "./table-footer";
import type { Role } from "./types";

interface RolesTableProps {
  roles: Role[];
}

const RolesTable = ({ roles }: RolesTableProps) => {
  const handleEditRole = (roleName: string) => {
    alert(`Editing permissions for: ${roleName}`);
  };

  return (
    <div className="bg-[#1E293B] border border-[#1E2D42] rounded-xl overflow-hidden mb-6">
      {/* Table Header */}
      <div className="grid grid-cols-[2.5fr_1.8fr_1.8fr_1.6fr] px-7 py-3.5 bg-[#162032] border-b border-[#1E2D42]">
        <span className="text-[0.6875rem] font-bold tracking-wider uppercase text-[#64748B]">Role Name</span>
        <span className="text-[0.6875rem] font-bold tracking-wider uppercase text-[#64748B]">Users Assigned</span>
        <span className="text-[0.6875rem] font-bold tracking-wider uppercase text-[#64748B]">Last Updated</span>
        <span className="text-[0.6875rem] font-bold tracking-wider uppercase text-[#64748B] text-right">Actions</span>
      </div>

      {/* Role Rows */}
      {roles.map((role) => (
        <RoleRow key={role.id} role={role} onEdit={handleEditRole} />
      ))}

      {/* Table Footer */}
      <TableFooter totalRoles={roles.length} />
    </div>
  );
};

export default RolesTable;