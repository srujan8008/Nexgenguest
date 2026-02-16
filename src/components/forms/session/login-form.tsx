import React, { useState } from "react";
import { Copyright, AlertCircle } from "lucide-react";
import logoImage from "@/assets/logow.webp";
import StarsEffect from "../../../utils/starseffect";
import SubmitButton from "../../controls/button";
import InputLabel from "../../form-fields/input-field";
import PasswordLabel from "../../form-fields/password-field";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

// Define validation schema with Zod
const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters")
});

type FormData = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitError, setSubmitError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");
    const result = loginSchema.safeParse(formData);
  if (!result.success) {
  const formattedErrors: Partial<FormData> = {};
  result.error.issues.forEach((err: z.ZodIssue) => {
    if (err.path[0]) {
      formattedErrors[err.path[0] as keyof FormData] = err.message;
    }
  });
  
  setErrors(formattedErrors);
  return;
}
    setErrors({});
    if (formData.email === "you@nexgenguest.com" && formData.password === "password123") {
  console.log('Login successful:', formData);
  navigate('/account-settings');
}else {
      setSubmitError("Invalid email or password. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  
    
    // Clear field-specific error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
    
    // Clear submit error when user makes changes
    if (submitError) {
      setSubmitError("");
    }
  };

  const handleForgotPassword = () => {
    navigate('/reset-password');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-950 relative overflow-hidden font-['Outfit',-apple-system,BlinkMacSystemFont,sans-serif]">
      {/* Radial gradient background effect */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] 
                    bg-[radial-gradient(circle_at_center,rgba(30,41,59,0.3)_0%,rgba(30,41,59,0.1)_40%,transparent_70%)] 
                    blur-[80px] animate-pulse" />

      <StarsEffect />

      {/* Login form container */}
      <div className="relative w-full max-w-lg animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
        <div className="relative bg-[#202A38] text-[#A7A8A9] pt-12 pb-6 px-12 rounded-3xl">
          
          {/* Logo and title */}
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

          {/* Error Alert - Shows when credentials are invalid */}
         {submitError && (
  <div className="relative z-10 mb-6 text-red-500 text-sm font-medium text-center animate-[fadeIn_0.3s_ease-out] flex items-center justify-center gap-2">
    <AlertCircle className="w-5 h-5 text-red-500" />
    {submitError}
  </div>
)}

          {/* Login form */}
          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div>
              <InputLabel
                label="Email"
                type="email"
                id="email"
                name="email"
                placeholder="you@nexgenguest.com"
                value={formData.email}
                onChange={handleChange}
                error={!!submitError || !!errors.email}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-2 animate-[fadeIn_0.3s_ease-out]">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <PasswordLabel
                label="Password"
                id="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                onForgotPassword={handleForgotPassword}
                error={!!submitError || !!errors.password}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-2 animate-[fadeIn_0.3s_ease-out]">
                  {errors.password}
                </p>
              )}
            </div>

            <SubmitButton text="SUBMIT" />
          </form>

          {/* Footer */}
          <div className="relative z-10 text-center mt-12">
            <p className="text-slate-500 text-xs">
              2026 ALL RIGHTS RESERVED<br />
              <span className="inline-flex items-center gap-1 mt-1">
                <Copyright className="w-3 h-3" />
                NexGen Guest Inc.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default LoginForm;