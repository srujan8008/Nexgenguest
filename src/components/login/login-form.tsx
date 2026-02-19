import React from "react";
import { BackgroundEffects } from "./background-effects";
import { LoginHeader } from "./login-header";
import { LoginFormFields } from "./login-form-fields";
import { LoginFooter } from "./login-footer";
import { ErrorAlert } from "./error-alert";
import { useLoginForm } from "./use-login-form";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit
}: LoginFormProps) => {
  const {
    formData,
    errors,
    submitError,
    handleSubmit,
    handleChange,
    handleForgotPassword,
  } = useLoginForm();

  onSubmit('', '');

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-slate-950 fixed inset-0 overflow-y-auto font-['Outfit',-apple-system,BlinkMacSystemFont,sans-serif]">
      <BackgroundEffects />

      {/* Login form container */}
      <div className="relative w-full max-w-lg my-auto animate-fadeInUp">
        <div className="relative bg-[#202A38] text-[#A7A8A9] pt-12 pb-6 px-4 sm:px-8 md:px-12 rounded-3xl">
          <LoginHeader />

          <ErrorAlert message={submitError} />

          <LoginFormFields
            formData={formData}
            errors={errors}
            submitError={submitError}
            onChange={handleChange}
            onForgotPassword={handleForgotPassword}
            onSubmit={handleSubmit}
          />

          <LoginFooter />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
