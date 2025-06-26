import axios, { AxiosResponse } from "axios";
import { SignInPayload, SignInResponse } from "@/types/auth";

export const postSignIn = async (body: SignInPayload): Promise<AxiosResponse<SignInResponse>> => {
  return await axios.post("/api/auth/signin", body);
};
