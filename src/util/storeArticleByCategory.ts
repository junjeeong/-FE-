import { useArticleStore } from "@/store/useArticleStore";
import { Article, Category } from "@/types/article";

export function storeArticlesByCategory(allArticles: Article[]) {
  const categorized: any = {
    NOTICE: [],
    FREE: [],
    QNA: [],
    ETC: [],
  };

  allArticles.forEach((a) => {
    if (a.category in categorized) {
      categorized[a.category as Category].push(a);
    }
  });

  const store = useArticleStore.getState();

  (Object.keys(categorized) as Category[]).forEach((category) => {
    store.updateArticlesByCategory(category, categorized[category]);
  });
}
