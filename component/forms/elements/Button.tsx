import React, { Children, ReactNode } from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  name: string;
  disabled?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  Children: ReactNode;
}

function Button({
  type,
  name,
  disabled = false,
  className = "",
  onClick,
  Children,
}: ButtonProps) {
  return (
    <button
      type={type}
      name={name}
      disabled={disabled}
      className={`button -md -green-1 text-dark-1 fw-500 w-1/1 ${className}`}
    >
      {Children}
    </button>
  );
}

export default Button;
