"use client";

import { useState } from "react";
import { Article, Category } from "@/types/article";
import { useArticleStore } from "@/store/useArticleStore";
import Title from "@/app/(board)/boards/components/Title";
import SearchArticleBar from "@/app/(board)/boards/components/SearchArticleBar";
import ArticleList from "@/app/(board)/boards/components/ArticleList";
import useDisplayedArticles from "@/hook/useDisplayedArticles";

interface BoardMainProps {
  currentPage: number;
  category: Category;
}

const BoardMain = ({ currentPage, category }: BoardMainProps) => {
  const data =
    category === "ALL"
      ? useArticleStore.getState().selectAllArticles()
      : useArticleStore.getState().selectArticlesByCategory(category);

  const [displayedArticles, setDisplayedArticles] = useState<Article[] | null>(null);

  // 페이지 또는 카테고리가 바뀔 때마다 displayedArticles를 업데이트 해줌
  useDisplayedArticles(setDisplayedArticles, category, currentPage);

  return (
    <div className="flex w-full max-w-[1200px] flex-col gap-6">
      <div className="flex items-center">
        <Title category={category} />
        <SearchArticleBar />
      </div>
      <ArticleList list={displayedArticles} />
    </div>
  );
};

export default BoardMain;
