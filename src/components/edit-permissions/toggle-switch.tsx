import React from "react";

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: (checked: boolean) => void;
}

const ToggleSwitch = ({ isOn, onToggle }: ToggleSwitchProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onToggle(e.target.checked);
  };

  return (
    <label className="relative w-[48px] h-[26px] cursor-pointer shrink-0">
      <input 
        type="checkbox" 
        className="opacity-0 w-0 h-0 absolute"
        checked={isOn}
        onChange={handleChange}
      />
      <span className={`absolute inset-0 rounded-[13px] transition-all ${
        isOn ? 'bg-[#3B82F6]' : 'bg-[#334155]'
      }`}></span>
      <span className={`absolute top-[3px] left-[3px] w-[20px] h-[20px] rounded-full bg-white shadow-md transition-transform duration-200 ${
        isOn ? 'transform translate-x-[22px]' : ''
      }`}></span>
    </label>
  );
};

export default ToggleSwitch;