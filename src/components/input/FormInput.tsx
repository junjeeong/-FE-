"use client";

import { MouseEvent, useState } from "react";
import Image from "next/image";

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: () => void;
  required?: boolean;
}

const FormInput = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}: FormInputProps) => {
  const isPasswordInput = type === "password" || type === "passwordConfirm";
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
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          className="mt-2 w-full h-14 py-4 px-6 bg-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-[12px]"
        />
        {isPasswordInput && (
          <button
            onClick={togglePasswordView}
            className="absolute right-4 top-1/2 -translate-y-1/3"
          >
            <Image
              src={view ? "/icon/visible.svg" : "/icon/unvisible.svg"}
              width={24}
              height={24}
              alt="비밀번호 보기"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default FormInput;
