// components/form-footer.tsx
const FormFooter = () => {
  return (
    <div className="flex items-center justify-between px-8 py-5 border-t border-[#1E2D42] bg-[#0A121E]/40">
      <button className="bg-transparent text-[#94A3B8] px-6 py-3 rounded-lg text-[0.9375rem] font-semibold border border-[#1E2D42] hover:text-[#F1F5F9] hover:border-[#334155] transition-all">
        Cancel
      </button>
      <button className="inline-flex items-center gap-2 bg-[#3B82F6] text-white px-6 py-3 rounded-lg text-[0.9375rem] font-bold hover:bg-[#2563EB] hover:shadow-lg hover:shadow-[#3B82F6]/40 transition-all">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
        Send Invitation
      </button>
    </div>
  );
};

export default FormFooter;