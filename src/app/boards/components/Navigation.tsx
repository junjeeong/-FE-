"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const Navigation = () => {
  const pathname = usePathname();

  const isBoardsPage = pathname === "/boards";

  return (
    <Link
      href="/boards"
      className={clsx(
        "flex-1 text-lg font-bold h-full flex items-center text-[#4B5563] ml-6 hover:text-blue-400",
        isBoardsPage ? "text-blue-400 pointer-events-none" : "",
      )}
    >
      게시판
    </Link>
  );
};

export default Navigation;
