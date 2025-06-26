"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { SignInPayload } from "@/types/auth";
import { postSignIn } from "@/api/postSignIn";
import Image from "next/image";
import Link from "next/link";
import AuthButton from "@/components/button/AuthButton";
import FormInput from "@/components/input/FormInput";

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<SignInPayload>({ mode: "onBlur" });

  const redirectMessage = useSearchParams().get("redirect");
  const router = useRouter();

  const onSubmit = async (body: SignInPayload) => {
    try {
      const res = await postSignIn(body);
      const { accessToken } = res.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("profile", JSON.stringify({ username: body.username }));
      alert("로그인에 성공했습니다. 홈페이지로 이동합니다.");
      router.push("/");
    } catch (err) {
      alert("로그인에 실패했습니다.");
    }
  };

  useEffect(() => {
    if (redirectMessage === "unauthorized") alert("로그인 세션이 만료되어 로그아웃 되었습니다.");
  }, []);

  return (
    <section className="flex h-auto w-[343px] flex-col items-center justify-center rounded-lg bg-white p-8 shadow-xl">
      <Image src="/icon/logo.png" alt="회사 로고" width={120} height={120} />
      <div className="w-full rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-2 flex flex-col gap-2">
          <FormInput
            id="id"
            label="아이디"
            type="text"
            placeholder="아이디를 입력해 주세요."
            register={register("username", {
              required: "아이디는 필수입니다.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "이메일 형식으로 입력해주세요.",
              },
              onChange: () => clearErrors("username"),
            })}
            error={errors.username}
          />

          <FormInput
            id="password"
            label="패스워드"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            register={register("password", {
              required: "비밀번호는 필수입니다.",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                message: "8자 이상, 영문자/숫자/특수문자를 포함해야 합니다.",
              },
              onChange: () => clearErrors("password"),
            })}
            error={errors.password}
          />

          <AuthButton type="로그인" />
        </form>

        <Link href="signup" className="mt-4 block text-center text-[#3b82f6] hover:underline">
          회원가입
        </Link>
      </div>
    </section>
  );
}
