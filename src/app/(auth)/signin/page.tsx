import { Suspense } from "react";
import Image from "next/image";
import LoadingSpinner from "@/components/LoadingSpinner";
import LoginForm from "@/app/(auth)/signin/components/LoginForm";

export default function SignInPage() {
  return (
    <section className="flex h-auto w-[343px] flex-col items-center justify-center rounded-lg bg-white p-8 shadow-xl">
      <Image src="/icon/logo.png" alt="회사 로고" width={120} height={120} />
      <Suspense fallback={<LoadingSpinner />}>
        <LoginForm />
      </Suspense>
    </section>
  );
}
