import { AxiosError } from "axios";
import { authInstance } from "@/lib/axios";
import { PatchArticlePayload } from "@/types/article";

const patchArticleById = async (id: number, body: PatchArticlePayload) => {
  try {
    const res = await authInstance.patch(`/boards/${id}`, body);
    return res.data;
  } catch (err) {
    const axiosErr = err as AxiosError;
    throw new Error(`게시글 수정에 실패했습니다 : ${axiosErr.message}`);
  }
};

export default patchArticleById;
