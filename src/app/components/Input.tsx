import React from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}
const Input: React.FC<InputProps> = ({ label, name, placeholder, ...props }) => {
  return (
    <div>
      <label htmlFor={name} className="text-sm">
        {label}
      </label>

      <div className="relative">
        <input
          name={name}
          type={name}
          className="w-full rounded-lg border-none p-4 pe-12 text-sm shadow-sm"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default Input;




