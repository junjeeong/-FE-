interface AuthButtonProps {
  type: "로그인" | "회원가입";
  isValid: boolean;
}

const AuthButton = ({ type = "로그인", isValid }: AuthButtonProps) => {
  const isType = type === "로그인" ? "로그인" : "회원가입";

  return (
    <button
      type="submit"
      disabled={!isValid}
      className="disabled:hover-none mt-4 flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-[#3b82f6] text-lg font-semibold text-white hover:bg-[#3b82f6] disabled:bg-gray-300"
    >
      {isType}
    </button>
  );
};

export default AuthButton;
