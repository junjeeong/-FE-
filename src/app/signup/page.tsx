"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import AuthButton from "@/components/button/AuthButton";
import FormInput from "@/components/input/FormInput";

interface SignUpFormValues {
  name: string;
  id: string;
  password: string;
  passwordConfirm: string;
}
export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm<SignUpFormValues>({ mode: "onBlur" });

  const onSubmit = async () => {};

  return (
    <section className="w-[343px] h-auto flex flex-col items-center justify-center bg-white shadow-xl rounded-lg p-8">
      <div className="w-full rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <FormInput
            id="name"
            label="이름"
            type="text"
            placeholder="이름을 입력해 주세요."
            register={register("name", {
              required: "이름은 필수입니다.",
              pattern: {
                value: /^[a-zA-Z가-힣]+$/,
                message: "한글 또는 영문으로만 입력해주세요.",
              },
              onChange: () => clearErrors("name"),
            })}
            error={errors.name}
          />
          <FormInput
            id="id"
            label="아이디"
            type="text"
            placeholder="아이디를 입력해 주세요."
            register={register("id", {
              required: "아이디는 필수입니다.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.(com|net)$/,
                message: "이메일 형식으로 입력해주세요.",
              },
              onChange: () => clearErrors("id"),
            })}
            error={errors.id}
          />
          <FormInput
            id="password"
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            register={register("password", {
              required: "비밀번호는 필수입니다.",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!%*#?&])[A-Za-z\d!%*#?&]{8,}$/,
                message: "8자 이상, 영문자/숫자/특수문자를 포함해야 합니다.",
              },
              onChange: () => clearErrors("password"),
            })}
            error={errors.password}
          />
          <FormInput
            id="passwordConfirm"
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            register={register("passwordConfirm", {
              required: "비밀번호는 필수입니다.",
              validate: (value) => value === watch("password") || "비밀번호가 일치하지 않습니다.",
              onChange: () => clearErrors("passwordConfirm"),
            })}
            error={errors.passwordConfirm}
          />
          <AuthButton type="회원가입" />
        </form>
        <Link href="signin" className="text-[#3b82f6] block text-center mt-4 hover:underline">
          로그인
        </Link>
      </div>
    </section>
  );
}
