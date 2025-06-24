import { create } from "zustand";
import { ArticlesByCategory, ArticleStore } from "@/types/article";

const initialState: ArticlesByCategory = {
  NOTICE: [],
  FREE: [],
  "Q&A": [],
  ETC: [],
};

export const useArticleStore = create<ArticleStore>((set, get) => ({
  allArticles: [],
  articlesByCategory: initialState,

  setAllArticles: (articles) =>
    set(() => ({
      allArticles: articles,
    })),

  setArticlesByCategory: (category, articles) =>
    set((state) => ({
      articlesByCategory: {
        ...state.articlesByCategory,
        [category]: articles,
      },
    })),

  getArticles: (category) => get().articlesByCategory[category],
}));
