import { Article } from "@/types/article";

const seperateArticlesByPage = (allArticles: Article[], page: number) => {
  let startIndex = (page - 1) * 9;
  return allArticles.slice(startIndex, startIndex + 10);
};

export default seperateArticlesByPage;
