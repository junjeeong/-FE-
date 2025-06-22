import { AxiosResponse } from "axios";
import { instance } from "@/lib/axios";

interface SignUpPayload {
  username: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export const postSignUp = async (body: SignUpPayload): Promise<AxiosResponse<void>> => {
  return await instance.post("/auth/signup", body);
};
