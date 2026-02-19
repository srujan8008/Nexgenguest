import logoImage from "@/assets/logow.webp";

export const LoginHeader = () => {
  return (
    <div className="relative z-10 text-center mb-8 animate-[fadeInDown_0.8s_ease-out]">
      <img 
        src={logoImage}
        alt="NEXGEN GUEST" 
        className="w-48 mx-auto mb-4 opacity-75"
        style={{ maxWidth: '37%' }}
      />
      <p className="text-slate-400 text-sm font-light tracking-wide">
        Sign in to your account
      </p>
    </div>
  );
};