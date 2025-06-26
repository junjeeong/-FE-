import { create } from "zustand";
import { ArticlesByCategory, ArticleStore } from "@/types/article";

const initialState: ArticlesByCategory = {
  NOTICE: { list: [], totalCount: 0 },
  FREE: { list: [], totalCount: 0 },
  "Q&A": { list: [], totalCount: 0 },
  ETC: { list: [], totalCount: 0 },
};

export const useArticleStore = create<ArticleStore>((set, get) => ({
  allArticles: { list: [], totalCount: 0 },
  articlesByCategory: initialState,

  updateAllArticles: (articles) => {
    set(() => ({
      allArticles: {
        list: articles,
        totalCount: articles.length,
      },
    }));
  },

  updateArticlesByCategory: (category, articles) => {
    const filtered = articles.filter((article) => article.category === category);
    set((state) => ({
      articlesByCategory: {
        ...state.articlesByCategory,
        [category]: {
          list: filtered,
          totalCount: filtered.length,
        },
      },
    }));
  },

  selectAllArticles: () => {
    return get().allArticles ?? { list: [], totalCount: 0 };
  },
  selectArticlesByCategory: (category) => {
    return get().articlesByCategory[category] ?? { list: [], totalCount: 0 };
  },
}));
