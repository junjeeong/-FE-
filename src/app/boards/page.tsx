import BoardListContainer from "@/app/boards/components/BoardListContainer";
import PaginationBar from "@/app/boards/components/PaginationBar";

const BoardsPage = () => {
  return (
    <main className="relative flex flex-col gap-8 justify-center w-full bg-white p-8 ">
      <BoardListContainer />
      <PaginationBar />
    </main>
  );
};

export default BoardsPage;
