"use client";

import { useRef, useState } from "react";

const ImageUploader = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        id="image"
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
      <div
        onClick={() => inputRef.current?.click()}
        className="flex size-[100px] items-center justify-center rounded bg-[#f3f4f6] px-4 py-2 text-white"
      >
        <div className="flex flex-col items-center gap-2">
          <img src="/icon/ic_plus.svg" alt="이미지 업로드 버튼" width={36} height={36} />
          <span className="text-xs text-gray-500">이미지 업로드</span>
        </div>
      </div>

      {preview && (
        <div className="mt-4">
          <img src={preview} alt="미리보기" className="h-40 w-40 rounded object-cover" />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
