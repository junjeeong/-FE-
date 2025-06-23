"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const Navigation = () => {
  const pathname = usePathname();

  const isMainPage = pathname === "/boards";
  const isNoticePage = pathname === "/boards/notice";
  const isFreePage = pathname === "/boards/free";
  const isQnaPage = pathname === "/boards/qna";
  const isEtcPage = pathname === "/boards/etc";

  return (
    <div className="flex gap-2 mr-auto">
      <Link
        href="/boards"
        className={clsx(
          "flex-1 text-lg font-bold h-full flex items-center text-[#4B5563] ml-6 hover:text-blue-400",
          isMainPage ? "text-blue-400 pointer-events-none" : "",
        )}
      >
        전체
      </Link>
      <Link
        href="/boards/notice"
        className={clsx(
          "flex-1 text-lg font-bold h-full flex items-center text-[#4B5563] ml-6 hover:text-blue-400",
          isNoticePage ? "text-blue-400 pointer-events-none" : "",
        )}
      >
        공지
      </Link>
      <Link
        href="/boards/free"
        className={clsx(
          "flex-1 text-lg font-bold h-full flex items-center text-[#4B5563] ml-6 hover:text-blue-400",
          isFreePage ? "text-blue-400 pointer-events-none" : "",
        )}
      >
        자유
      </Link>
      <Link
        href="/boards/qna"
        className={clsx(
          "flex-1 text-lg font-bold h-full flex items-center text-[#4B5563] ml-6 hover:text-blue-400",
          isQnaPage ? "text-blue-400 pointer-events-none" : "",
        )}
      >
        질문
      </Link>
      <Link
        href="/boards/etc"
        className={clsx(
          "flex-1 text-lg font-bold h-full flex items-center text-[#4B5563] ml-6 hover:text-blue-400",
          isEtcPage ? "text-blue-400 pointer-events-none" : "",
        )}
      >
        기타
      </Link>
    </div>
  );
};

export default Navigation;
