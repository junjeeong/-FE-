"use client";

import { useState } from "react";
import { Article, Category } from "@/types/article";
import Title from "@/app/boards/components/Title";
import SearchArticleBar from "@/app/boards/components/SearchArticleBar";
import ArticleList from "@/app/boards/components/ArticleList";
import useInitializeArticles from "@/hook/useInitializeArticles";
import useDisplayedArticlesByPage from "@/hook/useDisplayedArticlesByPage";
import useDisplayedArticlesByCategory from "@/hook/useDisplayedArticlesByCategory";

interface BoardMainProps {
  currentPage: number;
  category: string;
}

const BoardMain = ({ currentPage, category }: BoardMainProps) => {
  const [displayedArticles, setDisplayedArticles] = useState<Article[]>([]);

  // 최초 마운트 시, 전역 store에 allArticles, ArticlesByCategory를 set해줌
  useInitializeArticles();

  // 페이지가 바뀔 때마다 displayedArticles를 업데이트 해줌
  useDisplayedArticlesByPage(setDisplayedArticles, currentPage);

  // category가 변경될 때마다 displayedArticles를 카테고리에 해당하는 내용으로 업데이트 해줌
  useDisplayedArticlesByCategory(setDisplayedArticles, category as Category, currentPage);

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
