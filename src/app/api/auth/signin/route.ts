import { cookies } from "next/headers";
import { instance } from "@/lib/axios";
import { SignInResponse } from "@/types/auth";

export async function POST(req: Request) {
  const payload = await req.json();

  console.log(payload);

  try {
    const res = await instance.post<SignInResponse>("/auth/signin", payload);
    const { refreshToken, accessToken } = res.data;

    cookies().set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 14,
    });

    return Response.json({ accessToken });
  } catch (err) {
    console.error("sigin route 에러", err);
    throw new Error("signin route 서버에서 로그인 요청 중 에러가 발생했습니다.");
  }
}
