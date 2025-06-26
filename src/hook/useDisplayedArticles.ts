import { useEffect } from "react";
import { useArticleStore } from "@/store/useArticleStore";
import { Article, Category } from "@/types/article";
import seperateArticlesByPage from "@/util/seperateArticlesByPage";

const useDisplayedArticles = (
  setDisplayedArticles: React.Dispatch<React.SetStateAction<Article[] | null>>,
  category: Category,
  currentPage: number,
) => {
  useEffect(() => {
    const store = useArticleStore.getState();

    const data =
      category === "ALL" ? store.selectAllArticles() : store.selectArticlesByCategory(category);

    if (data.totalCount === 0) return;

    const paged = seperateArticlesByPage(data.list, currentPage);
    setDisplayedArticles(paged);
  }, [category, currentPage]);
};

export default useDisplayedArticles;
