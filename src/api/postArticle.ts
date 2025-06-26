import { AxiosError } from "axios";
import { authInstance } from "@/lib/axios";

const postArticle = async (body: FormData) => {
  try {
    const res = await authInstance.post("/boards", body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (err) {
    const axiosErr = err as AxiosError;
    console.error("게시글 작성 실패 응답:", axiosErr.response?.data);
    throw new Error(`게시글 작성에 실패했습니다 : ${axiosErr.message}`);
  }
};

export default postArticle;
