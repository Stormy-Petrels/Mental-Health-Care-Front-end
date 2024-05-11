import React from "react";

export default function Input({ label, type, placeholder }) {
  return (
    <div>
      <label htmlFor={type} className="text-sm">
        {label}
      </label>

      <div className="relative">
        <input
          type={type}
          className="w-full rounded-lg border-none p-4 pe-12 text-sm shadow-sm"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}



