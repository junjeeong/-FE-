"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import WriteIcon from "@/app/(board)/boards/components/WriteIcon";

const CreateAritcleFloatingButton = () => {
  const pathname = usePathname();

  if (pathname.includes("add") || pathname.includes("edit")) return;

  return (
    <Link href={"/add-board"}>
      <button className="duraition-200 fixed right-6 bottom-6 flex h-[60px] w-[140px] items-center justify-between gap-2 rounded-full bg-white p-5 shadow-2xl transition-transform hover:scale-110 hover:text-blue-400">
        <span className="font-bold">글쓰기</span>
        <div className="absolute -top-2 -right-2 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-blue-400">
          <WriteIcon className="size-8 text-white" />
        </div>
      </button>
    </Link>
  );
};

export default CreateAritcleFloatingButton;
