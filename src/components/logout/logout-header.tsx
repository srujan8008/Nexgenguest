import logoImage from "@/assets/logow.webp";

export const LogoutHeader = () => {
  return (
    <div className="px-10 py-11 flex flex-col items-center border-b border-[#1E2D42]">
      {/* Logo */}
      <div className="flex items-center gap-2.5 mb-10">
        <img 
          src={logoImage} 
          alt="NexGen Guest" 
          className="h-9 block"
        />
      </div>

      <h1 className="text-[1.375rem] font-bold text-[#F1F5F9] mb-2.5 text-center animate-[fadeUp_0.5s_0.15s_ease_both]">
        You have been logged out
      </h1>
      
      <p className="text-[0.9375rem] text-[#64748B] text-center leading-relaxed animate-[fadeUp_0.5s_0.2s_ease_both]">
        Thank you for using NEXGEN GUEST.<br />
        Your session has safely ended.
      </p>
    </div>
  );
};