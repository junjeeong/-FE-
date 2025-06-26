"use client";

import { authInstance } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const EditNDeleteButtons = ({ id }: { id: string }) => {
  if (typeof window === "undefined") return null;

  const router = useRouter();

  const goEditPage = () => {
    router.push(`/edit-board/${id}`);
  };

  const deleteAritcle = async () => {
    toast.warning("게시글을 삭제했습니다.");

    const res = await authInstance.delete(`/boards/${id}`);
    if (res.status >= 200 && res.status < 300) router.push("/boards");
    else if (res.status == 400) toast.error("권한이 없습니다.");
    else toast.error("네트워크 에러로 게시글 삭제에 실패했습니다.");
  };

  return (
    <div className="ml-auto flex gap-4">
      <button
        onClick={goEditPage}
        className="rounded-lg bg-gray-500 px-6 py-2 text-white hover:bg-blue-400 sm:text-sm"
      >
        수정
      </button>
      <button
        onClick={deleteAritcle}
        className="rounded-lg bg-red-300 px-6 py-2 text-white hover:bg-red-400 sm:text-sm"
      >
        삭제
      </button>
    </div>
  );
};

export default EditNDeleteButtons;
