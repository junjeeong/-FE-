import { Dispatch, SetStateAction, useEffect } from "react";
import { useArticleStore } from "@/store/useArticleStore";
import { Article, Category } from "@/types/article";
import seperateArticlesByPage from "@/util/seperateArticlesByPage";

const useDisplayedArticlesByCategory = (
  setDisplayedArticles: Dispatch<SetStateAction<Article[]>>,
  category: Category,
  currentPage: number,
) => {
  useEffect(() => {
    if (category == "all") return;
    const { articlesByCategory } = useArticleStore.getState();
    const filtered = articlesByCategory[category] || [];
    const paged = seperateArticlesByPage(filtered, currentPage);
    setDisplayedArticles(paged);
  }, [category, currentPage]);
};

export default useDisplayedArticlesByCategory;
