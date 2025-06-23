import Title from "@/app/boards/components/Title";
import CategoryList from "@/app/boards/components/CategoryList";
import SearchArticleBar from "@/app/boards/components/SearchArticleBar";
import BoardItemList from "@/app/boards/components/BoardItemList";

const BoardListContainer = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[1200px]">
      <Title />
      <CategoryList />
      <SearchArticleBar />
      <BoardItemList />
    </div>
  );
};

export default BoardListContainer;
