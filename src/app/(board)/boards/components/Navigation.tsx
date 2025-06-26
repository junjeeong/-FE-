"use client";

import { useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";

const Navigation = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  const navigateToCategory = (newCategory: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", newCategory);
    params.set("page", "1");
    router.push(`/boards?${params.toString()}`);
  };

  return (
    <div className="mr-auto flex gap-2">
      {["NOTICE", "FREE", "QNA", "ETC"].map((cat) => (
        <button
          key={cat}
          onClick={() => navigateToCategory(cat)}
          className={clsx(
            "ml-6 flex h-full flex-1 items-center text-lg font-bold text-[#4B5563] hover:text-blue-400",
            currentCategory === cat ? "pointer-events-none text-blue-400" : "",
          )}
        >
          {
            {
              NOTICE: "공지",
              FREE: "자유",
              QNA: "질문",
              ETC: "기타",
            }[cat]
          }
        </button>
      ))}
    </div>
  );
};

export default Navigation;
