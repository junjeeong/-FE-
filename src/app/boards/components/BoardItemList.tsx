"use client";

import { useRouter } from "next/navigation";
import isoStringToTime from "@/util/isoStringToTime";

const BoardItemList = () => {
  const list = [
    {
      id: 18,
      title: "공지8",
      category: "NOTICE",
      createdAt: "2024-11-13T10:46:29.278927",
    },
    {
      id: 19,
      title: "공지8",
      category: "FREE",
      createdAt: "2024-11-13T10:46:29.278927",
    },
    {
      id: 20,
      title: "공지8",
      category: "Q&A",
      createdAt: "2024-11-13T10:46:29.278927",
    },
    {
      id: 21,
      title: "공지8",
      category: "Q&A",
      createdAt: "2024-11-13T10:46:29.278927",
    },
    {
      id: 22,
      title: "공지8",
      category: "NOTICE",
      createdAt: "2024-11-13T10:46:29.278927",
    },
    {
      id: 23,
      title: "공지8",
      category: "NOTICE",
      createdAt: "2024-11-13T10:46:29.278927",
    },
    {
      id: 24,
      title: "공지8",
      category: "NOTICE",
      createdAt: "2024-11-13T10:46:29.278927",
    },
    {
      id: 25,
      title: "공지8",
      category: "NOTICE",
      createdAt: "2024-11-13T10:46:29.278927",
    },
    {
      id: 26,
      title: "공지8",
      category: "FREE",
      createdAt: "2024-11-13T10:46:29.278927",
    },
  ];

  const goDetailPage = (id: number) => {
    const router = useRouter();
    router.push(`/boards/${id}`);
  };

  return (
    <table className="w-full table-fixed text-center">
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

export default BoardItemList;
