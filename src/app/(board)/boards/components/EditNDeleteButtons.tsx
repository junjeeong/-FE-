"use client";

import { authInstance } from "@/lib/axios";
import { useRouter } from "next/navigation";

const EditNDeleteButtons = ({ id }: { id: string }) => {
  const router = useRouter();

  const goEditPage = () => {
    if (confirm("게시글을 수정하겠습니까?")) {
      router.push(`/edit-board/${id}`);
    } else return;
  };

  const deleteAritcle = async () => {
    if (confirm("게시글을 삭제하겠습니까?")) {
      const res = await authInstance.delete(`/boards/${id}`);
      if (res.status >= 200 && res.status < 300) window.location.href = "/boards";
      else if (res.status == 400) alert("권한이 없습니다.");
      else alert("네트워크 에러로 게시글 삭제에 실패했습니다.");
    } else return;
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
