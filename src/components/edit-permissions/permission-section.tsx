import { useState } from "react";
import type { PermissionSection as PermissionSectionType, PermissionStatus } from "./permissions-types";
import PermissionRow from "./permission-row";

interface PermissionSectionProps {
  section: PermissionSectionType;
}

const PermissionSection = ({ section }: PermissionSectionProps) => {
  const [permissions, setPermissions] = useState(section.permissions);

  const handleToggle = (id: string, status: PermissionStatus) => {
    setPermissions(prev =>
      prev.map(p => p.id === id ? { ...p, defaultStatus: status } : p)
    );
  };

  return (
    <div className="mb-7">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-[1.0625rem] font-bold text-[#F1F5F9] whitespace-nowrap">{section.title}</span>
        <div className="flex-1 h-px bg-[#1E2D42]"></div>
      </div>
      
      <div className="flex flex-col gap-2">
        {permissions.map(permission => (
          <PermissionRow 
            key={permission.id} 
            permission={permission} 
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default PermissionSection;