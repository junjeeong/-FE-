"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import AuthButton from "@/components/button/AuthButton";
import FormInput from "@/components/input/FormInput";

interface SignInFormValues {
  id: string;
  password: string;
}

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    clearErrors,
    trigger,
    formState: { errors },
  } = useForm<SignInFormValues>({ mode: "onBlur" });

  const onSubmit = async () => {
    const isOkay = await trigger(); // 제출하기 이전에 마지막 검증!
    if (!isOkay) alert("이메일과 비밀번호를 입력해 주세요.");
  };

  return (
    <section className="w-[343px] h-auto flex flex-col items-center justify-center bg-white shadow-xl rounded-lg p-8">
      <Image src="/icon/logo.jpeg" alt="회사 로고" width={120} height={120} />
      <div className="w-full rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 mt-2">
          <FormInput
            id="id"
            label="아이디"
            type="email"
            placeholder="아이디를 입력해 주세요."
            required={true}
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
            label="패스워드"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            required={true}
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

          <AuthButton type="로그인" handleSubmit={onSubmit} />
        </form>

        <Link href="signup" className="text-[#3b82f6] block text-center mt-4 hover:underline">
          회원가입
        </Link>
      </div>
    </section>
  );
}
