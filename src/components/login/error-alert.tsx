import { AlertCircle } from "lucide-react";

interface ErrorAlertProps {
  message: string;
}

export const ErrorAlert = ({ message }: ErrorAlertProps) => {
  if (!message) return null;

  return (
    <div className="relative z-10 mb-6 text-red-500 text-sm font-medium text-center animate-[fadeIn_0.3s_ease-out] flex items-center justify-center gap-2">
      <AlertCircle className="w-5 h-5 text-red-500" />
      {message}
    </div>
  );
};