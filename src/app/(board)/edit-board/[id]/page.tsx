"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { BoardData } from "@/types/boards";
import { authInstance } from "@/lib/axios";
import { Category } from "@/types/article";
import patchArticleById from "@/api/patchArticleById";

interface FormData {
  title: string;
  content: string;
  category: Category;
  file: File;
}

const EditBoardPage = () => {
  if (typeof window === "undefined") return null;

  const commonLabelStyle = "text-lg font-bold text-[#1F2937]";
  const commonInputStyle = "w-full rounded-xl bg-[#F3F4F6] px-4 py-3 text-sm";
  const commonErrorStyle = "ml-2 mt-1 text-red-500 text-sm";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await authInstance.get<BoardData>(`/boards/${id}`);

        reset({
          title: res.data.title,
          content: res.data.content,
          category: res.data.category as Category,
        });
      } catch (err) {
        console.error("이전 데이터 불러오기 실패", err);
      }
    };

    fetchData();
  }, [id]);

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();

    // FormData.append()의 두 번째 인자에는 문자열 또는 Blob/File만 들어갈 수 있음. JSON 문자열로 바꿔줘야 함
    const requestPayload = {
      title: data.title,
      content: data.content,
      category: data.category,
    };

    formData.append(
      "request",
      new Blob([JSON.stringify(requestPayload)], { type: "application/json" }),
    );

    try {
      const res = await patchArticleById(formData, Number(id));

      alert("게시글이 성공적으로 수정되었습니다.");
      router.push(`/boards/${id}`);
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleCancle = () => {
    const confirm = window.confirm("게시글 수정을 취소하시겠습니까?");
    if (confirm) history.go(-1);
  };

  return (
    <form
      className="relative flex flex-col gap-3 overflow-scroll"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className="flex">
          <label htmlFor="title" className={commonLabelStyle}>
            * 제목
          </label>
          {errors.title && <p className={commonErrorStyle}>{errors.title.message}</p>}
        </div>
        <input
          id="title"
          type="text"
          placeholder="제목을 입력해 주세요."
          {...register("title", { required: "제목은 필수 항목입니다." })}
          className={commonInputStyle}
        />
      </div>

      <div>
        <div className="flex">
          <label htmlFor="category" className={commonLabelStyle}>
            * 카테고리
          </label>
          {errors.category && <p className={commonErrorStyle}>{errors.category.message}</p>}
        </div>
        <div className="relative w-[120px]">
          <select
            {...register("category", { required: "카테고리는 필수 항목입니다." })}
            className="w-full appearance-none rounded-xl bg-[#F3F4F6] px-4 py-2 text-sm text-gray-900"
          >
            <option value="NOTICE">공지</option>
            <option value="FREE">자유</option>
            <option value="QNA">질문</option>
            <option value="ETC">기타</option>
          </select>
          <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-500">
            ▾
          </div>
        </div>
      </div>

      <div>
        <div className="flex">
          <label htmlFor="content" className={commonLabelStyle}>
            * 내용
          </label>
          {errors.content && <p className={commonErrorStyle}>{errors.content.message}</p>}
        </div>
        <textarea
          id="content"
          placeholder="내용을 입력해 주세요."
          {...register("content", { required: "내용은 필수 항목입니다." })}
          className="min-h-[280px] w-full resize-none overflow-scroll rounded-xl bg-[#F3F4F6] px-4 py-2 text-sm"
        />
      </div>

      <div className="mt-4 flex w-full gap-2">
        <button
          type="button"
          onClick={handleCancle}
          className="flex-1 rounded-xl bg-[#9CA3AF] px-6 py-3 text-base font-semibold text-white hover:bg-blue-400 active:bg-blue-400"
        >
          취소
        </button>
        <button
          type="submit"
          className="flex-1 rounded-xl bg-[#9CA3AF] px-6 py-3 text-base font-semibold text-white hover:bg-blue-400 active:bg-blue-400"
        >
          수정
        </button>
      </div>
    </form>
  );
};

export default EditBoardPage;
