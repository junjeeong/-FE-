"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { SignInPayload } from "@/types/auth";
import { postSignIn } from "@/api/postSignIn";
import Link from "next/link";
import AuthButton from "@/components/button/AuthButton";
import FormInput from "@/components/input/FormInput";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<SignInPayload>({ mode: "onBlur" });

  const router = useRouter();
  const isUnauthorized = useSearchParams().get("redirect") === "unauthorized";

  const onSubmit = async (body: SignInPayload) => {
    try {
      const res = await postSignIn(body);
      const { accessToken } = res.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("profile", JSON.stringify({ username: body.username }));
      toast.success("로그인에 성공했습니다.");
      router.push("/");
    } catch (err) {
      toast.error("로그인에 실패했습니다.");
    }
  };

  useEffect(() => {
    if (isUnauthorized) {
      toast.warning("로그인 세션이 만료되어 로그아웃 되었습니다.");
    }
  }, [isUnauthorized]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-2 flex flex-col">
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

      <AuthButton type="로그인" isValid={isValid} />
      <Link href="signup" className="mt-4 block text-center text-[#3b82f6] hover:underline">
        회원가입
      </Link>
    </form>
  );
};

export default LoginForm;
