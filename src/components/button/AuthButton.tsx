interface AuthButtonProps {
  type: "로그인" | "회원가입";
}

const AuthButton = ({ type = "로그인" }: AuthButtonProps) => {
  const isType = type === "로그인" ? "로그인" : "회원가입";

  return (
    <button
      type="submit"
      className="mt-4 w-full h-14 rounded-full flex justify-center bg-[#9CA3AF] text-lg font-semibold items-center text-white ative:bg-[#3b82f6] hover:bg-[#3b82f6] cursor-pointer"
    >
      {isType}
    </button>
  );
};

export default AuthButton;
