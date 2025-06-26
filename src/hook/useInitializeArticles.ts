import { useEffect, useState } from "react";
import { useArticleStore } from "@/store/useArticleStore";
import { storeArticlesByCategory } from "@/util/storeArticleByCategory";
import getAllArticles from "@/api/getAllArticles";

const useInitializeArticles = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const { updateAllArticles } = useArticleStore();

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getAllArticles();
        updateAllArticles(res.content);
        storeArticlesByCategory(res.content);
      } catch (err) {
        console.error("getAllArticles 실행 도중 오류 발생", err);
      } finally {
        setIsInitialized(true);
      }
    };

    fetch();
  }, []);

  return isInitialized;
};

export default useInitializeArticles;
