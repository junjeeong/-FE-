import { AxiosResponse } from "axios";
import { instance } from "@/lib/axios";
import { SignUpPayload } from "@/types/auth";

export const postSignUp = async (body: SignUpPayload): Promise<AxiosResponse<void>> => {
  return await instance.post("/auth/signup", body);
};
