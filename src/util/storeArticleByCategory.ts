import { useArticleStore } from "@/store/useArticleStore";
import { Article, Category } from "@/types/article";

export function storeArticlesByCategory(allArticles: Article[]) {
  const categorized = {
    NOTICE: [] as Article[],
    FREE: [] as Article[],
    QNA: [] as Article[],
    ETC: [] as Article[],
  };

  allArticles.forEach((a) => {
    if (categorized[a.category]) {
      categorized[a.category].push(a);
    }
  });

  const store = useArticleStore.getState();

  (Object.keys(categorized) as Category[]).forEach((category) => {
    store.updateArticlesByCategory(category, categorized[category]);
  });
}
