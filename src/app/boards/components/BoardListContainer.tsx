import BoardItemList from "@/app/boards/components/BoardItemList";
import CategoryList from "@/app/boards/components/CategoryList";
import CreateArticleButton from "@/app/boards/components/CreateArticleButton";
import SearchArticleBar from "@/app/boards/components/SearchArticleBar";
import SelectCategoryDropDown from "@/app/boards/components/SelectCategoryDropDown";

const BoardListContainer = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[1200px]">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl text-[#1F2937] font-bold">게시글</h1>
        <CreateArticleButton />
      </div>
      <CategoryList />
      <div className="flex gap-4">
        <SearchArticleBar />
      </div>
      {/* <BoardItemList /> */}
    </div>
  );
};

export default BoardListContainer;
