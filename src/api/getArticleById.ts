import { AxiosError } from "axios";
import { authInstance } from "@/lib/axios";

const getArticleById = async (id: number) => {
  try {
    const res = await authInstance.get(`/boards/${id}`);
    return res.data;
  } catch (err) {
    const axiosErr = err as AxiosError;
    throw new Error(`게시글 조회에 실패했습니다 : ${axiosErr.message}`);
  }
};

export default getArticleById;
