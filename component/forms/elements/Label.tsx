import React from "react";

function Label({ text, className = "" }: { text: string; className?: string }) {
  return (
    <label className={`text-16 lh-1 fw-500 text-dark-1 mb-10 ${className}`}>
      {text}
    </label>
  );
}

export default Label;
