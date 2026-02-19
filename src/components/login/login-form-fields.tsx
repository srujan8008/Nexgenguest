import InputLabel from "../form-fields/input-field";
import PasswordLabel from "../form-fields/password-field";
import SubmitButton from "../controls/button";
import type { LoginFormData, LoginFormErrors } from "./login-types";

interface LoginFormFieldsProps {
  formData: LoginFormData;
  errors: LoginFormErrors;
  submitError: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onForgotPassword: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const LoginFormFields = ({
  formData,
  errors,
  submitError,
  onChange,
  onForgotPassword,
  onSubmit
}: LoginFormFieldsProps) => {
  return (
    <form onSubmit={onSubmit} className="relative z-10 space-y-6">
      <div>
        <InputLabel
          label="Email"
          type="email"
          id="email"
          name="email"
          placeholder="you@nexgenguest.com"
          value={formData.email}
          onChange={onChange}
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
          onChange={onChange}
          onForgotPassword={onForgotPassword}
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
  );
};