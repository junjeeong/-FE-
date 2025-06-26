"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Category } from "@/types/article";
import ImageUploader from "@/app/(board)/boards/components/ImageUploader";
import postArticle from "@/api/postArticle";

interface FormData {
  title: string;
  content: string;
  category: Category;
  file: File;
}

const AddBoardPage = () => {
  const commonLabelStyle = "text-lg font-bold text-[#1F2937]";
  const commonInputStyle = "w-full rounded-xl bg-[#F3F4F6] px-4 py-3 text-sm";
  const commonErrorStyle = "ml-2 mt-1 text-red-500 text-sm";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();

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

    if (data.file) {
      formData.append("file", data.file);
    }

    try {
      const res = await postArticle(formData);

      alert("게시글이 성공적으로 등록되었습니다.");
      router.push(`/boards/${res.id}`);
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleCancle = () => {
    const confirm = window.confirm("게시글 작성을 취소하시겠습니까?");
    if (confirm) history.go(-1);
  };

  // 중간에 confirm을 넣은 래퍼 함수
  const handleConfirmAndSubmit = () => {
    const confirmed = window.confirm("게시글을 등록하시겠습니까?");
    if (confirmed) {
      handleSubmit(onSubmit)(); // handleSubmit은 함수를 반환하므로 바로 실행해야 함
    }
  };

  return (
    <form
      className="relative flex flex-col gap-3 overflow-scroll"
      onSubmit={(e) => e.preventDefault()}
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
      <div>
        <label htmlFor="image" className={commonLabelStyle}>
          이미지
        </label>
        <ImageUploader />
      </div>

      <div className="mt-4 flex w-full gap-2">
        <button
          onClick={handleCancle}
          className="flex-1 rounded-xl bg-[#9CA3AF] px-6 py-3 text-base font-semibold text-white hover:bg-blue-400 active:bg-blue-400"
        >
          취소
        </button>
        <button
          type="submit"
          onClick={handleConfirmAndSubmit}
          className="flex-1 rounded-xl bg-[#9CA3AF] px-6 py-3 text-base font-semibold text-white hover:bg-blue-400 active:bg-blue-400"
        >
          등록
        </button>
      </div>
    </form>
  );
};

export default AddBoardPage;
