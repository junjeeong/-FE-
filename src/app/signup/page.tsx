import Link from "next/link";
import AuthButton from "@/components/button/AuthButton";
import FormInput from "@/components/input/FormInput";

export default function SignInPage() {
  return (
    <section className="w-[343px] h-auto flex flex-col items-center justify-center bg-white shadow-xl rounded-lg p-8">
      <div className="w-full rounded-lg">
        <form action="submit" className="flex flex-col gap-2">
          <FormInput
            id="name"
            label="이름"
            type="text"
            placeholder="이름을 입력해 주세요."
            required={true}
          />
          <FormInput
            id="id"
            label="아이디"
            type="email"
            placeholder="아이디를 입력해 주세요."
            required={true}
          />
          <FormInput
            id="password"
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            required={true}
          />
          <FormInput
            id="passwordConfirm"
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            required={true}
          />
          <AuthButton type="회원가입" />
        </form>
        <Link
          href="signin"
          className="text-[#3b82f6] block text-center mt-4 hover:underline"
        >
          로그인
        </Link>
      </div>
    </section>
  );
}
