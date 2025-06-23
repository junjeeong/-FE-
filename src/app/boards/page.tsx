import BoardListContainer from "@/app/boards/components/BoardListContainer";
import Header from "@/app/boards/components/Header";
import PaginationBar from "@/app/boards/components/PaginationBar";

const BoardsPage = () => {
  return (
    <>
      <Header />
      <div className="mt-[70px]" />
      <main className="flex justify-center w-full bg-white p-8">
        <BoardListContainer />
        {/* <PaginationBar /> */}
      </main>
    </>
  );
};

export default BoardsPage;
