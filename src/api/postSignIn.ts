import axios, { AxiosResponse } from "axios";

interface SignInPayload {
  username: string;
  password: string;
}

interface SignInResponse {
  accessToken: string;
  refreshToken: string;
}

export const postSignIn = async (body: SignInPayload): Promise<AxiosResponse<SignInResponse>> => {
  return await axios.post("/api/auth/signin", body);
};
