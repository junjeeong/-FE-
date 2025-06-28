import SignupForm from "@/app/(auth)/signup/components/SignupForm";

export default function SignUpPage() {
  return (
    <section className="flex h-auto w-[343px] flex-col items-center justify-center rounded-lg bg-white p-8 shadow-xl">
      <SignupForm />
    </section>
  );
}
