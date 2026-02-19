import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "./login-schema";
import type { LoginFormData, LoginFormErrors } from "./login-types";
import { ERROR_MESSAGES, VALID_CREDENTIALS } from "./login-constants";

export const useLoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [submitError, setSubmitError] = useState<string>("");
  const navigate = useNavigate();

  const validateForm = () => {
    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      const formattedErrors: LoginFormErrors = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          formattedErrors[err.path[0] as keyof LoginFormData] = err.message;
        }
      });
      setErrors(formattedErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) return;

    if (formData.email === VALID_CREDENTIALS.email && 
        formData.password === VALID_CREDENTIALS.password) {
      navigate('/account-settings');
    } else {
      setSubmitError(ERROR_MESSAGES.INVALID_CREDENTIALS);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear field-specific error when user starts typing
    if (errors[name as keyof LoginFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    
    // Clear submit error when user makes changes
    if (submitError) {
      setSubmitError("");
    }
  };

  const handleForgotPassword = () => {
    navigate('/reset-password');
  };

  return {
    formData,
    errors,
    submitError,
    handleSubmit,
    handleChange,
    handleForgotPassword
  };
};