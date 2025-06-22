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
      <label htmlFor={id} className="text-[#1F2937] font-semibold">
        {label}
      </label>
      <div className="relative w-full">
        <input
          id={id}
          type={isPasswordInput ? (view ? "text" : "password") : type}
          placeholder={placeholder}
          {...register}
          className={clsx(
            "mt-2 w-full h-14 py-4 px-6 bg-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-[12px] ",
            error && "border border-red-500",
          )}
        />
        {isPasswordInput && (
          <button onClick={togglePasswordView} className="absolute right-4 top-[24px]">
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
            "text-red-500 text-xs pt-2 pl-2 min-h-[1.25rem]",
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
