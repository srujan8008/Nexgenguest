import React from 'react';

interface SubmitButtonProps {
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onSubmit, text = "Submit" }) => {
  return (
    <button 
      type="submit" 
      onClick={onSubmit}
      className="relative w-full py-4 rounded-xl font-medium text-sm 
               uppercase tracking-widest mt-8 
               bg-slate-800 border border-slate-600 text-slate-50
               transition-all duration-300 overflow-hidden group
               hover:bg-blue-600 hover:border-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
    >
      <span className="relative z-10">
        {text}
      </span>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-0 h-0 rounded-full bg-blue-600/20 
                    group-hover:w-[300px] group-hover:h-[300px] 
                    transition-all duration-600">
      </div>
    </button>
  );
};

export default SubmitButton;
