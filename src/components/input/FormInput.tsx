"use client";

import { MouseEvent, useState } from "react";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";
import Image from "next/image";
import clsx from "clsx";

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
}

const FormInput = ({ id, label, type = "text", placeholder, register, error }: FormInputProps) => {
  const isPasswordInput = type === "password" || type === "confirmPassword";
  const [view, setView] = useState(false);

  const togglePasswordView = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setView((view) => !view);
  };

  return (
    <div>
      <label htmlFor={id} className="font-semibold text-[#1F2937]">
        {label}
      </label>
      <div className="relative w-full">
        <input
          id={id}
          type={isPasswordInput ? (view ? "text" : "password") : type}
          placeholder={placeholder}
          {...register}
          className={clsx(
            "mt-2 h-14 w-full rounded-[12px] bg-[#F3F4F6] px-6 py-4 placeholder:text-[#9CA3AF]",
            error && "border border-red-500",
          )}
        />
        {isPasswordInput && (
          <button onClick={togglePasswordView} className="absolute top-[24px] right-4">
            <Image
              src={view ? "/icon/visible.svg" : "/icon/unvisible.svg"}
              width={24}
              height={24}
              alt="비밀번호 보기"
            />
          </button>
        )}
        <p
          className={clsx(
            "min-h-[1.25rem] pt-2 pl-2 text-xs text-red-500",
            !error?.message && "invisible",
          )}
        >
          {error?.message || ""}
        </p>
      </div>
    </div>
  );
};

export default FormInput;
