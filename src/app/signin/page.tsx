import Image from "next/image";
import Link from "next/link";
import AuthButton from "@/components/button/AuthButton";
import FormInput from "@/components/input/FormInput";

export default function SignInPage() {
  return (
    <section className="w-[343px] h-auto flex flex-col items-center justify-center bg-white shadow-xl rounded-lg p-8">
      <Image src="/icon/logo.jpeg" alt="회사 로고" width={120} height={120} />
      <div className="w-full rounded-lg">
        <form action="submit" className="flex flex-col gap-2 mt-2">
          <FormInput
            id="id"
            label="아이디"
            type="email"
            placeholder="아이디를 입력해 주세요."
            required={true}
          />
          <FormInput
            id="password"
            label="패스워드"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            required={true}
          />
          <AuthButton type="로그인" />
        </form>
        <Link
          href="signup"
          className="text-[#3b82f6] block text-center mt-4 hover:underline"
        >
          회원가입
        </Link>
      </div>
    </section>
  );
}
