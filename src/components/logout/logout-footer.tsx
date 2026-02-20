import { LOGOUT_FOOTER } from "./logout-constants";

export const LogoutFooter = () => {
  return (
    <div className="px-10 py-5 flex flex-col items-center gap-1 animate-[fadeUp_0.5s_0.3s_ease_both]">
      <span className="text-[0.75rem] font-semibold tracking-wider uppercase text-[#334155]">
        {LOGOUT_FOOTER.COPYRIGHT}
      </span>
      <span className="flex items-center gap-1.5 text-[0.8125rem] text-[#475569] font-medium">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
        {LOGOUT_FOOTER.BRAND}
      </span>
    </div>
  );
};