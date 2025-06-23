import BoardMain from "@/app/boards/components/BoardMain";
import CreateAritcleFloatingButton from "@/app/boards/components/CreateAritcleFloatingButton";
import Header from "@/app/boards/components/Header";
import PaginationBar from "@/app/boards/components/PaginationBar";

const BoardsPage = ({ searchParams }: { searchParams: { page: string } }) => {
  const page = Number(searchParams.page ?? "1");

  return (
    <>
      <Header />
      <main className="relative flex justify-center w-full bg-white p-8 mt-[70px]">
        <BoardMain currentPage={page} />
        <PaginationBar currentPage={page} />
      </main>
      <CreateAritcleFloatingButton />
    </>
  );
};

export default BoardsPage;
