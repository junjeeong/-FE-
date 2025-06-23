import { BoardPreviewData } from "@/types/boards";

const ArticleList = ({ list }: { list: BoardPreviewData[] }) => {
  return (
    <ul className="w-full grid grid-cols-4 grid-rows-4 gap-4">
      {list ? (
        list.map((el) => (
          <li key={el.id} className="flex justify-center items-center w-full h-full">
            <h3>{el.title}</h3>
            <p>{el.category}</p>
            <p>{el.createdAt}</p>
          </li>
        ))
      ) : (
        <div>list가 없습니다.</div>
      )}
    </ul>
  );
};

export default ArticleList;
