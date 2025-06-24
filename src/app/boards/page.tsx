import BoardMain from "@/app/boards/components/BoardMain";
import PaginationBar from "@/app/boards/components/PaginationBar";

const BoardsPage = async ({ searchParams }: { searchParams: { page: string } }) => {
  const page = Number(searchParams.page ?? "1");

  return (
    <main className="relative flex flex-col justify-center w-full bg-white p-8 ">
      <BoardMain currentPage={page} />
      <PaginationBar currentPage={page} />
    </main>
  );
};

export default BoardsPage;
