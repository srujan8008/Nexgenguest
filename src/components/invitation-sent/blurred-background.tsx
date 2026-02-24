import logoImage from "@/assets/logow.webp";

const BlurredBackground = () => {
  return (
    <>
      {/* Page background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0A1628] to-[#060D1A] z-0"></div>

      {/* Fake header bar */}
      <div className="fixed top-0 left-0 right-0 h-[72px] bg-[#0F172A] border-b border-[#1E2D42] flex items-center justify-between px-7 z-10 filter blur-[2px] opacity-60">
        <img src={logoImage} alt="NexGen Guest" className="h-[34px] opacity-70" />
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1E3A5F]"></div>
          <div className="flex flex-col gap-1">
            <div className="w-20 h-2.5 bg-[#1E293B] rounded"></div>
            <div className="w-14 h-2 bg-[#162032] rounded"></div>
          </div>
        </div>
      </div>

      {/* Fake sidebar */}
      <div className="fixed top-[72px] bottom-0 left-0 w-[88px] bg-[#0F172A] border-r border-[#1E2D42] flex flex-col items-center py-4 px-3 gap-1.5 z-10 filter blur-[2px] opacity-50">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className={`w-full h-[46px] rounded-lg ${i === 2 ? 'bg-[#3B82F6]' : 'bg-[#1E2D42]'}`}
          ></div>
        ))}
      </div>

      {/* Fake nav panel */}
      <div className="fixed top-[72px] bottom-0 left-[88px] w-[272px] bg-[#0F172A] border-r border-[#1E2D42] p-7 flex flex-col gap-2.5 z-10 filter blur-[2px] opacity-45">
        <div className="w-24 h-2.5 bg-[#1E293B] rounded mb-1"></div>
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className={`w-full h-10 rounded-lg ${i === 1 ? 'bg-[#3B82F6]/20 border border-[#3B82F6]/40' : 'bg-[#1E2D42]'}`}
          ></div>
        ))}
      </div>

      {/* Fake main content */}
      <div className="fixed top-[72px] bottom-0 left-[360px] right-0 bg-[#0F1922] p-10 z-10 filter blur-[2px] opacity-45 overflow-hidden">
        <div className="w-44 h-6 bg-[#1E293B] rounded mb-2"></div>
        <div className="w-64 h-3 bg-[#162032] rounded mb-8"></div>
        <div className="w-36 h-11 bg-[#3B82F6] rounded float-right"></div>
        <div className="mt-14 bg-[#162032] rounded-xl overflow-hidden">
          <div className="h-11 bg-[#0F1922] border-b border-[#1E2D42]"></div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-[58px] border-b border-[#1E2D42]"></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlurredBackground;