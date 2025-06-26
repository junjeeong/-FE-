import { BoardData } from "@/types/boards";

export type Category = "NOTICE" | "FREE" | "Q&A" | "ETC" | "ALL";
export type PostArticlePayload = BoardData;
export type PatchArticlePayload = BoardData;
export type ReponseArticles = {
  list: Article[];
  totalCount: number;
};
export type ArticlesByCategory = {
  [K in string]: ReponseArticles;
};

export interface Article {
  id: number;
  title: string;
  category: Category;
  createdAt: string;
}

export interface ArticleStore {
  allArticles: ReponseArticles;
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
