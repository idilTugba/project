import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import Label from "./Label";

interface InputProps {
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  errors: FieldErrors;
}

function Input({ type, placeholder, register, name, errors }: InputProps) {
  return (
    <>
      {/* <Label text={placeholder} /> */}
      <input
        {...register(name)}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      {errors[name] && errors[name]?.message && (
        <p className="text-error-2 text-13">
          {errors[name]?.message as string}
        </p>
      )}
    </>
  );
}

export default Input;
