"use client";

import { useRouter } from "next/navigation";
import { BoardPreviewData } from "@/types/boards";
import isoStringToTime from "@/util/isoStringToTime";

const ArticleList = ({ list }: { list: BoardPreviewData[] }) => {
  const goDetailPage = (id: number) => {
    const router = useRouter();
    router.push(`/boards/${id}`);
  };

  return (
    <table className="w-full table-fixed text-center min-h-[350px]">
      <thead className="text-center border-t-2 border-b">
        <tr>
          <th className="w-[10%] py-2">카테고리</th>
          <th className="w-[70%]">제목</th>
          <th className="w-[20%]">날짜</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        {list.map((el) => (
          <tr
            key={el.id}
            onClick={() => goDetailPage(el.id)}
            className="border-b border-gray-300 text-gray-500 hover:bg-gray-100 cursor-pointer"
          >
            <td className="px-1 py-2 ">{el.category}</td>
            <td className="px-1 py-2 text-left">{el.title}</td>
            <td className="px-1 py-2 ">{isoStringToTime(el.createdAt)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ArticleList;
