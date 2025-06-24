import { AxiosError } from "axios";
import { authInstance } from "@/lib/axios";
import { PostArticlePayload } from "@/types/article";

const postArticle = async (body: PostArticlePayload) => {
  try {
    const res = await authInstance.post("/boards", body);
    return res.data;
  } catch (err) {
    const axiosErr = err as AxiosError;
    throw new Error(`게시글 작성에 실패했습니다 : ${axiosErr.message}`);
  }
};

export default postArticle;
