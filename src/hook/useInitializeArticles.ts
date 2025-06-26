import { useEffect } from "react";
import { useArticleStore } from "@/store/useArticleStore";
import { storeArticlesByCategory } from "@/util/storeArticleByCategory";
import getAllArticles from "@/api/getAllArticles";

const useInitializeArticles = () => {
  const { setAllArticles } = useArticleStore();

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getAllArticles();
        setAllArticles(res.content.list);
        storeArticlesByCategory(res.content.list);
      } catch (err) {
        console.error("getAllArticles 실행 도중 오류 발생", err);
      }
    };

    fetch();
  }, []);
};

export default useInitializeArticles;
