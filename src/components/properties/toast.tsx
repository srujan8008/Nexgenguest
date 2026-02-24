interface ToastProps {
  message: string;
  isVisible: boolean;
}

const Toast = ({ message, isVisible }: ToastProps) => {
  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#1E293B] text-[#F1F5F9] border border-[#3B82F6]/30 px-6 py-3.5 rounded-full text-[0.9rem] font-semibold flex items-center gap-2.5 shadow-2xl transition-all duration-400 z-[400] ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-[#3B82F6]">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span>{message}</span>
    </div>
  );
};

export default Toast;