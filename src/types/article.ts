import { BoardData } from "@/types/boards";

export type PostArticlePayload = BoardData;
export type PatchArticlePayload = BoardData;
export type ArticlesByCategory = {
  [K in string]: Article[];
};
export type Category = "all" | "NOTICE" | "FREE" | "Q&A" | "ETC";

export interface Article {
  id: number;
  title: string;
  category: Category;
  createdAt: string;
}

export interface ArticleStore {
  allArticles: Article[];
  articlesByCategory: ArticlesByCategory;
  setAllArticles: (articles: Article[]) => void;
  setArticlesByCategory: (category: string, articles: Article[]) => void;
  getArticles: (category: string) => Article[];
}
