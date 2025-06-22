import { AxiosResponse } from "axios";
import { instance } from "@/lib/axios";

interface SignInPayload {
  username: string;
  password: string;
}

interface SignInResponse {
  accessToken: string;
  refreshToken: string;
}

export const postSignIn = async (body: SignInPayload): Promise<AxiosResponse<SignInResponse>> => {
  return await instance.post("/auth/signin", body);
};
