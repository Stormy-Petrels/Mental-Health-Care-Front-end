import React from "react";

export default function Button({ text, className, onClick }) {
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