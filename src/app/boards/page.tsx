import BoardListContainer from "@/app/boards/components/BoardListContainer";
import CreateAritcleFloatingButton from "@/app/boards/components/CreateAritcleFloatingButton";
import Header from "@/app/boards/components/Header";
import PaginationBar from "@/app/boards/components/PaginationBar";

const BoardsPage = () => {
  return (
    <>
      <Header />
      <main className="relative flex justify-center w-full bg-white p-8 mt-[70px]">
        <BoardListContainer />
        <PaginationBar />
      </main>
      <CreateAritcleFloatingButton />
    </>
  );
};

export default BoardsPage;
