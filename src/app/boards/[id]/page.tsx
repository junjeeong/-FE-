import getArticleById from "@/api/getArticleById";

const BoardDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const info = await getArticleById(Number(id));

  return <div>/* Your JSX here */</div>;
};

export default BoardDetailPage;
