import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {
  const navigate = useNavigate();

  const handleReturnToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="px-10 py-8 border-b border-[#1E2D42] animate-[fadeUp_0.5s_0.25s_ease_both]">
      <button
        onClick={handleReturnToLogin}
        className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold py-3.5 px-6 rounded-[0.625rem] flex items-center justify-center gap-2.5 transition-all duration-200 hover:shadow-lg hover:shadow-[#3B82F6]/35 hover:-translate-y-0.5 active:translate-y-0"
      >
        Return to Login
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </div>
  );
};