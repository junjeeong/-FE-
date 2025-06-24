"use client";

import { useParams, usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const Navigation = () => {
  const category = useParams().category;

  return (
    <div className="mr-auto flex gap-2">
      <Link
        href="/boards"
        className={clsx(
          "ml-6 flex h-full flex-1 items-center text-lg font-bold text-[#4B5563] hover:text-blue-400",
          category === "all" ? "pointer-events-none text-blue-400" : "",
        )}
      >
        전체
      </Link>
      <Link
        href="/boards?category=NOTICE"
        className={clsx(
          "ml-6 flex h-full flex-1 items-center text-lg font-bold text-[#4B5563] hover:text-blue-400",
          category === "NOTICE" ? "pointer-events-none text-blue-400" : "",
        )}
      >
        공지
      </Link>
      <Link
        href="/boards?category=FREE"
        className={clsx(
          "ml-6 flex h-full flex-1 items-center text-lg font-bold text-[#4B5563] hover:text-blue-400",
          category === "FREE" ? "pointer-events-none text-blue-400" : "",
        )}
      >
        자유
      </Link>
      <Link
        href="/boards?category=Q&A"
        className={clsx(
          "ml-6 flex h-full flex-1 items-center text-lg font-bold text-[#4B5563] hover:text-blue-400",
          category === "Q&A" ? "pointer-events-none text-blue-400" : "",
        )}
      >
        질문
      </Link>
      <Link
        href="/boards?category=ETC"
        className={clsx(
          "ml-6 flex h-full flex-1 items-center text-lg font-bold text-[#4B5563] hover:text-blue-400",
          category === "ETC" ? "pointer-events-none text-blue-400" : "",
        )}
      >
        기타
      </Link>
    </div>
  );
};

export default Navigation;
