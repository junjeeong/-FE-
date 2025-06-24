import BoardMain from "@/app/boards/components/BoardMain";
import PaginationBar from "@/app/boards/components/PaginationBar";

interface BoardsPageProps {
  searchParams: {
    page: string;
    category: string;
  };
}

const BoardsPage = async ({ searchParams }: BoardsPageProps) => {
  const page = Number(searchParams.page ?? "1");
  const category = searchParams.category ?? "all";

  return (
    <main className="relative flex w-full flex-col justify-center bg-white p-8">
      <BoardMain currentPage={page} category={category} />
      <PaginationBar currentPage={page} />
    </main>
  );
};

export default BoardsPage;
