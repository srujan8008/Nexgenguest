import React from "react";
import { LogoutHeader } from "./logout-header";
import { LogoutButton } from "./logout-button";
import { LogoutFooter } from "./logout-footer";

const LogoutPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-slate-950 fixed inset-0 overflow-y-auto font-['Outfit',-apple-system,BlinkMacSystemFont,sans-serif]">
      {/* Subtle background glow */}
      <div className="fixed w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(30,58,138,0.18)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Logout Card */}
      <div className="relative w-full max-w-lg my-auto animate-[fadeUp_0.5s_ease_both]">
        <div className="relative bg-[#0F172A] border border-[#1E2D42] rounded-[1.25rem] overflow-hidden">
          
          <LogoutHeader />
          <LogoutButton />
          <LogoutFooter />

        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default LogoutPage;