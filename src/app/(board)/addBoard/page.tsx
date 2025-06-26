import ImageUploader from "@/app/(board)/boards/components/ImageUploader";

const AddBoardPage = () => {
  return (
    <form className="relative flex flex-col gap-2">
      <label htmlFor="title" className="text-xl font-bold text-[##1F2937]">
        * 제목
      </label>
      <input
        id="title"
        type="text"
        placeholder="제목을 입력해 주세요."
        className="w-full rounded-xl bg-[#F3F4F6] px-4 py-2 text-sm"
      />
      <label htmlFor="content" className="text-xl font-bold text-[##1F2937]">
        * 내용
      </label>
      <textarea
        id="content"
        placeholder="내용을 입력해 주세요."
        className="min-h-[280px] w-full resize-none overflow-scroll rounded-xl bg-[#F3F4F6] px-4 py-2 text-sm"
      />
      <label htmlFor="image" className="text-xl font-bold text-[##1F2937]">
        이미지
      </label>
      <ImageUploader />
      <button className="absolute right-2 bottom-2 rounded-xl bg-[#9CA3AF] px-6 py-3 text-base font-semibold text-white hover:bg-blue-400 active:bg-blue-400">
        등록
      </button>
    </form>
  );
};

export default AddBoardPage;
