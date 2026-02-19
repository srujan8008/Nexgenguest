import StarsEffect from "../../utils/starseffect";

export const BackgroundEffects = () => {
  return (
    <>
      {/* Radial gradient background effect */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] 
                    bg-[radial-gradient(circle_at_center,rgba(30,41,59,0.3)_0%,rgba(30,41,59,0.1)_40%,transparent_70%)] 
                    blur-[80px] animate-pulse" />
      <StarsEffect />
    </>
  );
};