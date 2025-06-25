"use client";

import { useRouter } from "next/navigation";
import postLogout from "@/api/postLogout";

const MyMenu = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await postLogout();
      alert("로그아웃 되었습니다.");
      localStorage.removeItem("accessToken");
      router.push("/signin");
    } catch (err) {
      console.error("로그아웃 실패:", err);
    }
  };

  return (
    <div className="absolute top-full right-0 z-50 mt-2 flex w-[170px] flex-col overflow-hidden rounded-lg border border-gray-200 bg-white text-black shadow-xl">
      <div className="flex h-[45%] w-full flex-col border-b-2 border-b-gray-200 p-4">
        <span className="self-start">이름</span>
        <span className="self-start">username</span>
      </div>
      <div className="h-[55%] w-full text-sm">
        <div className="h-[50%] px-4 py-2 hover:bg-gray-100">⚙️ 설정</div>
        <div className="v h-[50%] px-4 py-2 text-red-400 hover:bg-gray-100" onClick={handleLogout}>
          🚪 로그아웃
        </div>
      </div>
    </div>
  );
};

export default MyMenu;
