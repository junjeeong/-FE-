import { AxiosError } from "axios";
import { authInstance } from "@/lib/axios";

const patchArticleById = async (body: FormData, id: number) => {
  try {
    const res = await authInstance.patch(`/boards/${id}`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (err) {
    const axiosErr = err as AxiosError;
    console.log(axiosErr.response?.data);

    throw new Error(`게시글 수정에 실패했습니다 : ${axiosErr.message}`);
  }
};

export default patchArticleById;
