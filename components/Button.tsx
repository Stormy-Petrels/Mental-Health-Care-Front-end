import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      type="button"
      className="inline-block rounded-lg bg-[#E61F57] px-5 py-3 text-sm font-medium text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
}