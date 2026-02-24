import  { useState } from "react";
import { ROLE_INFO, KNOWLEDGE_LEVELS } from "./permissions-constants";

const RoleHeaderCard = () => {
  const [displayName, setDisplayName] = useState(ROLE_INFO.displayName);
  const [description, setDescription] = useState(ROLE_INFO.description);
  const [knowledgeLevel, setKnowledgeLevel] = useState(ROLE_INFO.defaultKnowledgeLevel);

  return (
    <div className="bg-[#1E293B] border border-[#1E2D42] rounded-xl p-7 mb-8">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-[1.375rem] font-bold text-[#F1F5F9]">Role:</span>
          <span className="text-[1.375rem] font-extrabold text-[#3B82F6]">{ROLE_INFO.name}</span>
          <span className="inline-flex items-center px-2 py-1 rounded-md text-[0.6875rem] font-bold tracking-wider bg-[#10B981]/20 text-[#34D399] border border-[#10B981]/40">
            ACTIVE
          </span>
          <span className="inline-flex items-center px-2 py-1 rounded-md text-[0.6875rem] font-bold tracking-wider bg-[#3B82F6]/20 text-[#60A5FA] border border-[#3B82F6]/40">
            GLOBAL
          </span>
        </div>
        <button className="flex items-center gap-2 bg-transparent text-[#94A3B8] px-4 py-2.5 rounded-lg text-[0.8125rem] font-semibold border border-[#334155] hover:text-[#F1F5F9] hover:border-[#475569] hover:bg-[#1E2D42]/10 transition-all whitespace-nowrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          View Audit Log
        </button>
      </div>
      
      <p className="text-[0.875rem] text-[#64748B] leading-relaxed mb-6">
        Configure specific access levels and operational constraints for users assigned to the Hotel Staff role.
      </p>

      <div className="grid grid-cols-2 gap-5 mb-5">
        <div className="flex flex-col gap-2">
          <label className="text-[0.6875rem] font-bold tracking-wider uppercase text-[#64748B]">Display Name</label>
          <input 
            type="text" 
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full bg-[#0F1922] border border-[#334155] text-[#F1F5F9] px-4 py-3 rounded-lg text-[0.9375rem] focus:border-[#3B82F6] focus:ring-3 focus:ring-[#3B82F6]/10 transition-all outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[0.6875rem] font-bold tracking-wider uppercase text-[#64748B]">Default Knowledge Level</label>
          <div className="relative">
            <select 
              value={knowledgeLevel}
              onChange={(e) => setKnowledgeLevel(e.target.value)}
              className="w-full bg-[#0F1922] border border-[#334155] text-[#F1F5F9] px-4 py-3 rounded-lg text-[0.9375rem] appearance-none focus:border-[#3B82F6] focus:ring-3 focus:ring-[#3B82F6]/10 transition-all outline-none cursor-pointer"
            >
              {KNOWLEDGE_LEVELS.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[0.6875rem] font-bold tracking-wider uppercase text-[#64748B]">Description</label>
        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full bg-[#0F1922] border border-[#334155] text-[#F1F5F9] px-4 py-3 rounded-lg text-[0.9375rem] focus:border-[#3B82F6] focus:ring-3 focus:ring-[#3B82F6]/10 transition-all outline-none resize-none"
        />
      </div>
    </div>
  );
};

export default RoleHeaderCard;