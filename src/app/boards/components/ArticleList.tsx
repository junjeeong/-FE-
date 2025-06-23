import { BoardDetailData } from "@/types/boards";
import Article from "@/app/boards/components/Article";

const ArticleList = ({ list }: { list: BoardDetailData[] }) => {
  return (
    <ul className="w-full grid grid-cols-4 grid-rows-4 gap-4">
      {list.map((el) => (
        <li key={el.id} className="flex justify-center items-center w-full h-full">
          <Article info={el} />
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
