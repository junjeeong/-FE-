import { Dispatch, SetStateAction, useEffect } from "react";
import { useArticleStore } from "@/store/useArticleStore";
import { Article, Category } from "@/types/article";
import seperateArticlesByPage from "@/util/seperateArticlesByPage";

const useDisplayedArticlesByCategory = (
  setDisplayedArticles: Dispatch<SetStateAction<Article[]>>,
  category: Category,
  currentPage: number,
) => {
  const { allArticles } = useArticleStore();

  useEffect(() => {
    // 카테고리가 all이면 전체 article을 보여주고, 그 외라면 category에 해당하는 article을 보여주기
    if (category == "ALL") {
      setDisplayedArticles(allArticles.list);
    } else {
      const { articlesByCategory } = useArticleStore.getState();
      const data = articlesByCategory[category] || [];
      const paged = seperateArticlesByPage(data.list, currentPage);
      setDisplayedArticles(paged);
    }
  }, [category, currentPage]);
};

export default useDisplayedArticlesByCategory;
