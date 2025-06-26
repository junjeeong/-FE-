"use client";

import { useSearchParams } from "next/navigation";
import { Category } from "@/types/article";
import BoardMain from "@/app/(board)/boards/components/BoardMain";
import PaginationBar from "@/app/(board)/boards/components/PaginationBar";
import useInitializeArticles from "@/hook/useInitializeArticles";
import LoadingSpinner from "@/components/LoadingSpinner";

const BoardsPage = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") ?? "1");
  const category = searchParams.get("category") ?? "ALL";

  // 최초 마운트 시, 전역 store에 allArticles, ArticlesByCategory를 set해줌
  const isInitialized = useInitializeArticles();

  if (!isInitialized) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <BoardMain currentPage={page} category={category as Category} />
      <PaginationBar currentPage={page} />
    </>
  );
};

export default BoardsPage;
