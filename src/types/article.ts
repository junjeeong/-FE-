import { BoardData } from "@/types/boards";

export type PostArticlePayload = BoardData;
export type PatchArticlePayload = BoardData;

export type ArticlesByCategory = {
  [K in string]: Article[];
};

export interface Article {
  id: number;
  title: string;
  category: string;
  createdAt: string;
}

export interface ArticleStore {
  articlesByCategory: ArticlesByCategory;
  setArticles: (category: string, articles: Article[]) => void;
  getArticles: (category: string) => Article[];
}
