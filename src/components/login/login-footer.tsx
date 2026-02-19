import { Copyright } from "lucide-react";

export const LoginFooter = () => {
  return (
    <div className="relative z-10 text-center mt-12">
      <p className="text-slate-500 text-xs">
        2026 ALL RIGHTS RESERVED<br />
        <span className="inline-flex items-center gap-1 mt-1">
          <Copyright className="w-3 h-3" />
          NexGen Guest Inc.
        </span>
      </p>
    </div>
  );
};