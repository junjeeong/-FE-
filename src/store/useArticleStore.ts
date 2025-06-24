import { create } from "zustand";
import { ArticlesByCategory, ArticleStore } from "@/types/article";

const initialState: ArticlesByCategory = {
  NOTICE: [],
  FREE: [],
  "Q&A": [],
  ETC: [],
};

export const useArticleStore = create<ArticleStore>((set, get) => ({
  articlesByCategory: initialState,

  setArticles: (category, articles) =>
    set((state) => ({
      articlesByCategory: {
        ...state.articlesByCategory,
        [category]: articles,
      },
    })),

  getArticles: (category) => get().articlesByCategory[category],
}));
