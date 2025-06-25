"use client";

import { useEffect, useState } from "react";
import { BoardDetailData } from "@/types/boards";
import { useParams } from "next/navigation";
import getArticleById from "@/api/getArticleById";

const BoardDetailPage = () => {
  const { id } = useParams();
  const [info, setInfo] = useState<BoardDetailData>({
    id: 0,
    title: "",
    content: "",
    boardCategory: "",
    imageUrl: "",
    createdAt: "",
  });

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getArticleById(Number(id));
        setInfo(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchData();
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!info) return <div>로딩 중...</div>;

  return <div>{/* info를 바탕으로 JSX 렌더링 */}</div>;
};

export default BoardDetailPage;
