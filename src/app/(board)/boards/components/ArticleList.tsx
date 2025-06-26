"use client";

import { useRouter } from "next/navigation";
import { BoardPreviewData } from "@/types/boards";
import isoStringToTime from "@/util/isoStringToTime";

const ArticleList = ({ list }: { list: BoardPreviewData[] | null }) => {
  const router = useRouter();

  const goDetailPage = (id: number) => {
    router.push(`/boards/${id}`);
  };

  return (
    <section className="h-[400px] w-[full] overflow-scroll">
      <table className="w-full text-center">
        <thead className="border-t-2 border-b text-center sm:text-sm">
          <tr>
            <th className="w-[10%] py-2">카테고리</th>
            <th className="w-[70%]">제목</th>
            <th className="w-[20%]">날짜</th>
          </tr>
        </thead>
        <tbody className="text-sm sm:text-xs">
          {list?.map((el) => (
            <tr
              key={el.id}
              onClick={() => goDetailPage(el.id)}
              className="cursor-pointer border-b border-gray-300 text-gray-500 hover:bg-gray-100"
            >
              <td className="px-1 py-2">{el.category}</td>
              <td className="px-1 py-2 text-left">{el.title}</td>
              <td className="px-1 py-2">{isoStringToTime(el.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ArticleList;
