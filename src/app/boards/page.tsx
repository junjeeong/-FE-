"use server";

import BoardMain from "@/app/boards/components/BoardMain";
import PaginationBar from "@/app/boards/components/PaginationBar";

interface BoardsPageProps {
  searchParams: Promise<{
    page?: string;
    category?: string;
  }>;
}
const BoardsPage = async ({ searchParams }: BoardsPageProps) => {
  const params = await searchParams;
  const page = Number(params.page ?? "1");
  const category = params.category ?? "ALL";

  return (
    <main className="flex w-full flex-col justify-center bg-white p-8">
      <BoardMain currentPage={page} category={category} />
      <PaginationBar currentPage={page} />
    </main>
  );
};

export default BoardsPage;
