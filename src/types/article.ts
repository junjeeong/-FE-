import { BoardData } from "@/types/boards";

export type Category = "NOTICE" | "FREE" | "Q&A" | "ETC" | "ALL";
export type PostArticlePayload = BoardData;
export type PatchArticlePayload = BoardData;
export type ArticlesByCategory = {
  [K in string]: {
    list: Article[];
    totalCount: number;
  };
};

export interface Article {
  id: number;
  title: string;
  category: Category;
  createdAt: string;
}

export interface ArticleStore {
  allArticles: {
    list: Article[];
    totalCount: number;
  };
  articlesByCategory: ArticlesByCategory;

  updateAllArticles: (articles: Article[]) => void;
  updateArticlesByCategory: (category: string, articles: Article[]) => void;
  selectAllArticles: () => {
    list: Article[];
    totalCount: number;
  };
  selectArticlesByCategory: (category: Category) => {
    list: Article[];
    totalCount: number;
  };
}
