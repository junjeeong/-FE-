"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useArticleStore } from "@/store/useArticleStore";
import { Category, ReponseArticles } from "@/types/article";
import clsx from "clsx";

const PaginationBar = ({ currentPage }: { currentPage: number }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const category = (searchParams.get("category") ?? "ALL") as Category;

  const data: ReponseArticles =
    category === "ALL"
      ? useArticleStore.getState().selectAllArticles()
      : useArticleStore.getState().selectArticlesByCategory(category);

  const { totalCount } = data;
  const totalPages = Math.ceil(totalCount / 10);
  if (totalPages < 2) return;
  const pageList = Array.from({ length: totalPages }, (_, i) => i + 1);
  const list = ["<", ...pageList, ">"];

  const navigatePage = (el: string | number) => {
    const params = new URLSearchParams(searchParams);

    if (el === "<") {
      if (currentPage > 1) {
        params.set("page", String(currentPage - 1));
        router.push(`${pathname}?${params.toString()}`);
      }
    } else if (el === ">") {
      if (currentPage < totalPages) {
        params.set("page", String(currentPage + 1));
        router.push(`${pathname}?${params.toString()}`);
      }
    } else {
      params.set("page", el.toString());
      router.push(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <ol className="mx-auto mt-8 flex gap-1">
      {list.map((el) => (
        <button
          key={el}
          onClick={() => navigatePage(el)}
          className={clsx(
            "flex h-12 w-12 items-center justify-center rounded-full border-1 border-gray-300 font-semibold text-[#6B7280] hover:bg-blue-400 hover:text-white",
            typeof el === "number" && currentPage === el ? "bg-blue-400 text-white" : "",
          )}
        >
          {el}
        </button>
      ))}
    </ol>
  );
};

export default PaginationBar;
