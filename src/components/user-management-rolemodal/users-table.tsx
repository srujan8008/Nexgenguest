import UserRow from "./user-row";
import type { User } from "./user-types";

interface UsersTableProps {
  users: User[];
}

const UsersTable = ({ users }: UsersTableProps) => {
  const handleEdit = (user: User) => {
    alert(`Edit user: ${user.name}`);
  };

  const handleDelete = (user: User) => {
    if (confirm(`Remove ${user.name} from the organization?`)) {
      // Handle delete logic here
      console.log("Delete user:", user);
    }
  };

  return (
    <div className="bg-[#1E293B] border border-[#1E2D42] rounded-xl overflow-hidden mb-6">
      <table className="w-full border-collapse table-fixed">
        <colgroup>
          <col className="w-[29%]" />
          <col className="w-[25%]" />
          <col className="w-[14%]" />
          <col className="w-[16%]" />
          <col className="w-[16%]" />
        </colgroup>
        <thead>
          <tr className="bg-[#162032] border-b border-[#1E2D42]">
            <th className="px-6 py-3.5 text-left text-[0.6875rem] font-bold tracking-wider uppercase text-[#64748B]">User Details</th>
            <th className="px-6 py-3.5 text-left text-[0.6875rem] font-bold tracking-wider uppercase text-[#64748B]">Email Address</th>
            <th className="px-6 py-3.5 text-left text-[0.6875rem] font-bold tracking-wider uppercase text-[#64748B]">Role Type</th>
            <th className="px-6 py-3.5 text-left text-[0.6875rem] font-bold tracking-wider uppercase text-[#64748B]">Status</th>
            <th className="px-6 py-3.5 text-right text-[0.6875rem] font-bold tracking-wider uppercase text-[#64748B]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow 
              key={user.id} 
              user={user} 
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;