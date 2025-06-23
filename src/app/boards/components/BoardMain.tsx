import Title from "@/app/boards/components/Title";
import SearchArticleBar from "@/app/boards/components/SearchArticleBar";
import ArticleList from "@/app/boards/components/ArticleList";
import getAllArticles from "@/api/getAllArticles";

const BoardMain = async ({ currentPage }: { currentPage: number }) => {
  let boardList = [];

  try {
    const res = await getAllArticles(Number(currentPage));
    console.log("받아온 res는?", res.content);

    boardList = res.content;
    console.log("받아온 boardList", boardList);
  } catch (err) {
    console.error(err);
  }

  return (
    <div className="flex w-full max-w-[1200px] flex-col gap-6">
      <div className="flex items-center">
        <Title content="전체" />
        <SearchArticleBar />
      </div>
      <ArticleList list={boardList} />
    </div>
  );
};

export default BoardMain;
