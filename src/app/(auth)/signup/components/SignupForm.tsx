"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { postSignUp } from "@/api/postSignUp";
import { SignUpPayload } from "@/types/auth";
import Link from "next/link";
import AuthButton from "@/components/button/AuthButton";
import FormInput from "@/components/input/FormInput";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    watch,
    formState: { errors, isValid },
  } = useForm<SignUpPayload>({ mode: "onBlur" });

  const router = useRouter();

  const onSubmit = async (data: SignUpPayload) => {
    try {
      const res = await postSignUp(data);
      if (res.status >= 200 && res.status < 300) {
        toast.success("회원가입에 성공했습니다. 다시 로그인 해주세요.");
        localStorage.setItem(
          "profile",
          JSON.stringify({ name: data.name, username: data.username }),
        );
        router.push("/signin");
      }
    } catch (err) {
      console.error("회원가입 실패", err);
      toast.error("회원가입에 실패했습니다.");
    }
  };

  return (
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
          id="username"
          label="아이디"
          type="text"
          placeholder="아이디를 입력해 주세요."
          register={register("username", {
            required: "아이디는 필수입니다.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.(com|net)$/,
              message: "이메일 형식으로 입력해주세요.",
            },
            onChange: () => clearErrors("username"),
          })}
          error={errors.username}
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
          id="confirmPassword"
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          register={register("confirmPassword", {
            required: "비밀번호는 필수입니다.",
            validate: (value) => value === watch("password") || "비밀번호가 일치하지 않습니다.",
            onChange: () => clearErrors("confirmPassword"),
          })}
          error={errors.confirmPassword}
        />
        <AuthButton type="회원가입" isValid={isValid} />
      </form>
      <Link href="signin" className="mt-4 block text-center text-[#3b82f6] hover:underline">
        로그인
      </Link>
    </div>
  );
};

export default SignupForm;
