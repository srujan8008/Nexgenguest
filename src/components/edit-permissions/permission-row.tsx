import { useState, useEffect } from "react";
import type { PermissionRowProps } from "./permissions-types";
import ToggleSwitch from "./toggle-switch";

const PermissionRow = ({ permission, onToggle }: PermissionRowProps) => {
  const [isOn, setIsOn] = useState(permission.defaultStatus === 'on');

  useEffect(() => {
    setIsOn(permission.defaultStatus === 'on');
  }, [permission.defaultStatus]);

  const handleToggle = (checked: boolean) => {
    setIsOn(checked);
    onToggle(permission.id, checked ? 'on' : 'off');
  };

  return (
    <div 
      className={`bg-[#1E293B] border border-[#1E2D42] rounded-xl p-4 flex items-center gap-4 transition-all ${
        isOn ? 'border-[#3B82F6]/30' : ''
      }`}
    >
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all ${
        isOn 
          ? 'bg-[#3B82F6]/20 border-[#3B82F6]/30 text-[#60A5FA]' 
          : 'bg-[#1E2D42] border border-[#334155] text-[#64748B]'
      }`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]">
          {permission.icon.map((path, idx) => (
            <path key={idx} d={path} />
          ))}
        </svg>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className={`text-[0.9375rem] font-semibold mb-0.5 transition-all ${
          isOn ? 'text-[#F1F5F9]' : 'text-[#CBD5E1]'
        }`}>
          {permission.name}
        </div>
        <div className="text-[0.8125rem] text-[#475569] leading-relaxed">
          {permission.description}
        </div>
      </div>

      <ToggleSwitch isOn={isOn} onToggle={handleToggle} />
    </div>
  );
};

export default PermissionRow;