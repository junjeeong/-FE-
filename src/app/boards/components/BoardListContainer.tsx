import Title from "@/app/boards/components/Title";
import SearchArticleBar from "@/app/boards/components/SearchArticleBar";
import BoardItemList from "@/app/boards/components/BoardItemList";

const BoardListContainer = () => {
  return (
    <section className="flex flex-col gap-6 w-full max-w-[1200px]">
      <div className="flex items-center">
        <Title content="전체 목록" />
        <SearchArticleBar />
      </div>
      <BoardItemList />
    </section>
  );
};

export default BoardListContainer;
