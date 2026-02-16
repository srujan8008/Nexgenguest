import React, { type HTMLInputTypeAttribute } from 'react';
import Input from '../controls/input';

interface InputLabelProps {
  label?: string;
  type?: HTMLInputTypeAttribute;
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

const InputLabel: React.FC<InputLabelProps> = ({ 
  label = "Email",
  type = "email",
  id = "email",
  name = "email",
  placeholder = "you@nexgenguest.com",
  value,
  onChange,
  error = false 
}) => {
  return (
    <div>
      <label 
        htmlFor={id}
        className="block text-xs font-medium text-slate-400 mb-2 text-left"
      >
        {label}
      </label>
      <div className={error ? 'bg-red-950/70 rounded-xl border border-red-700/90' : ''}>
      <Input 
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
    </div>
  );
};

export default InputLabel;
