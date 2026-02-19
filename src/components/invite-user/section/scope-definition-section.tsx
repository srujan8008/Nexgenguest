// components/scope-definition-section.tsx
interface ScopeDefinitionSectionProps {
  scope: string;
  setScope: (scope: string) => void;
  properties: string[];
  inputValue: string;
  setInputValue: (value: string) => void;
  handleAddProperty: (e: any) => void;
  removeProperty: (index: number) => void;
}

const ScopeDefinitionSection = ({
  scope,
  setScope,
  properties,
  inputValue,
  setInputValue,
  handleAddProperty,
  removeProperty
}: ScopeDefinitionSectionProps) => {
  return (
    <div className="px-8 py-7 border-t border-[#1E2D42]">
      <div className="flex items-center gap-2.5 mb-6">
        <span className="text-[#3B82F6]">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
        </span>
        <span className="text-[0.75rem] font-extrabold tracking-wider uppercase text-[#F1F5F9]">
          Scope Definition
        </span>
      </div>

      <div className="mb-4">
        <label className="text-[0.9375rem] font-semibold text-[#CBD5E1] mb-2 block">
          Assignment Scope
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setScope('all')}
            className={`flex flex-col items-center justify-center gap-2 p-5 rounded-[0.625rem] border-2 transition-all ${
              scope === 'all'
                ? 'border-[#3B82F6] bg-[#3B82F6]/10 shadow-[inset_0_0_0_1px_rgba(59,130,246,0.2)]'
                : 'border-[#1E2D42] bg-[#0F1922] hover:border-[#3B82F6]/30 hover:bg-[#3B82F6]/5'
            }`}
          >
            <svg
              className={`w-[22px] h-[22px] ${scope === 'all' ? 'text-[#60A5FA]' : 'text-[#475569]'}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            <span className={`text-[0.9375rem] font-bold ${scope === 'all' ? 'text-[#F1F5F9]' : 'text-[#94A3B8]'}`}>
              All Hotels
            </span>
          </button>
          <button
            onClick={() => setScope('specific')}
            className={`flex flex-col items-center justify-center gap-2 p-5 rounded-[0.625rem] border-2 transition-all ${
              scope === 'specific'
                ? 'border-[#3B82F6] bg-[#3B82F6]/10 shadow-[inset_0_0_0_1px_rgba(59,130,246,0.2)]'
                : 'border-[#1E2D42] bg-[#0F1922] hover:border-[#3B82F6]/30 hover:bg-[#3B82F6]/5'
            }`}
          >
            <svg
              className={`w-[22px] h-[22px] ${scope === 'specific' ? 'text-[#60A5FA]' : 'text-[#475569]'}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className={`text-[0.9375rem] font-bold ${scope === 'specific' ? 'text-[#F1F5F9]' : 'text-[#94A3B8]'}`}>
              Specific Hotels
            </span>
          </button>
        </div>
      </div>

      <div>
        <label className="text-[0.9375rem] font-semibold text-[#CBD5E1] mb-2 block">
          Select Properties
        </label>
        <div className="bg-[#0F1922] border border-[#1E2D42] rounded-lg focus-within:border-[#3B82F6] focus-within:ring-3 focus-within:ring-[#3B82F6]/20 transition-all">
          <div className="flex flex-wrap items-center gap-1.5 p-2.5 cursor-text min-h-[52px]">
            {properties.map((prop, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 bg-[#3B82F6] text-white rounded-md py-[0.3rem] px-2.5 text-[0.8125rem] font-semibold"
              >
                {prop}
                <span onClick={() => removeProperty(index)} className="cursor-pointer opacity-70 hover:opacity-100">
                  <svg className="w-[11px] h-[11px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </span>
              </span>
            ))}
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleAddProperty}
              className="flex-1 min-w-[120px] bg-transparent outline-none text-[#F1F5F9] text-[0.9375rem] p-1 placeholder:text-[#2D3F56]"
              placeholder=""
            />
          </div>
          <div className="flex items-center justify-between px-3.5 py-2 border-t border-[#1A2A3A]">
            <span className="text-[0.8125rem] text-[#475569]">64 Properties Total</span>
            <span className="text-[#475569]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScopeDefinitionSection;