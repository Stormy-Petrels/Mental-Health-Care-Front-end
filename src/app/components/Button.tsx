import React from "react";

interface ButtonProps {
  type: "submit" | "reset" | "button" | undefined;
  text: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({ type, text, className, onClick }: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-block rounded-lg px-5 py-3 text-sm font-medium ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}