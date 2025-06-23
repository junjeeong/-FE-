import { authInstance } from "@/lib/axios";
import { AxiosError } from "axios";

const getAllArticles = async (page: number = 0, pageSize: number = 10) => {
  try {
    const res = await authInstance.get(`/boards?page=${page}&size=${pageSize}`);
    return res.data;
  } catch (err) {
    const axiosErr = err as AxiosError;
    throw new Error(`전체 게시글 조회에 실패했습니다 : ${axiosErr.message}`);
  }
};

export default getAllArticles;
