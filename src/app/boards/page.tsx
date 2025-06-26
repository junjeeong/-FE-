"use client";

import { useSearchParams } from "next/navigation";
import { Category } from "@/types/article";
import BoardMain from "@/app/boards/components/BoardMain";
import PaginationBar from "@/app/boards/components/PaginationBar";
import useInitializeArticles from "@/hook/useInitializeArticles";

const BoardsPage = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") ?? "1");
  const category = searchParams.get("category") ?? "ALL";

  // 최초 마운트 시, 전역 store에 allArticles, ArticlesByCategory를 set해줌
  const isInitialized = useInitializeArticles();

  if (!isInitialized) {
    return <div>로딩 중...</div>;
  }

  return (
    <main className="flex w-full flex-col justify-center bg-white p-8">
      <BoardMain currentPage={page} category={category as Category} />
      <PaginationBar currentPage={page} />
    </main>
  );
};

export default BoardsPage;
