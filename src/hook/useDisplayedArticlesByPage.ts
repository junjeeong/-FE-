import { Dispatch, SetStateAction, useEffect } from "react";
import { useArticleStore } from "@/store/useArticleStore";
import { Article } from "@/types/article";
import seperateArticlesByPage from "@/util/seperateArticlesByPage";

const useDisplayedArticlesByPage = (
  setDisplayedArticles: Dispatch<SetStateAction<Article[]>>,
  currentPage: number,
) => {
  const { allArticles } = useArticleStore.getState();

  useEffect(() => {
    if (allArticles.length === 0) return;
    const articles = seperateArticlesByPage(allArticles, currentPage);
    setDisplayedArticles(articles);
  }, [currentPage, allArticles]);
};

export default useDisplayedArticlesByPage;
