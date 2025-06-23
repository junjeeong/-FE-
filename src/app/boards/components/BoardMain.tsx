import Title from "@/app/boards/components/Title";
import CategoryList from "@/app/boards/components/CategoryList";
import SearchArticleBar from "@/app/boards/components/SearchArticleBar";
import ArticleList from "@/app/boards/components/ArticleList";
import getAllArticles from "@/api/getAllArticles";

const BoardMain = async ({ currentPage }: { currentPage: number }) => {
  let boardList = [];

  try {
    const res = await getAllArticles(Number(currentPage));
    console.log("받아온 res는?", res);

    boardList = res.data;
    console.log("받아온 boardList", boardList);
  } catch (err) {
    console.error(err);
  }

  return (
    <div className="flex flex-col gap-6 w-full max-w-[1200px]">
      <Title />
      <CategoryList />
      <SearchArticleBar />
      <ArticleList list={boardList} />
    </div>
  );
};

export default BoardMain;
