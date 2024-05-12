import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({ text, className, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className={`inline-block rounded-lg px-5 py-3 text-sm font-medium ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}