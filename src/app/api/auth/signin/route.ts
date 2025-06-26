import { cookies } from "next/headers";
import { instance } from "@/lib/axios";
import { SignInResponse } from "@/types/auth";

export async function POST(req: Request) {
  const payload = await req.json();
  const cookieStore = await cookies();

  try {
    const res = await instance.post<SignInResponse>("/auth/signin", payload);
    const { refreshToken, accessToken } = res.data;

    cookieStore.set("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 5, // accessToken의 유효기간인 5분과 동일시
    });

    cookieStore.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return Response.json({ accessToken });
  } catch (err) {
    throw new Error("signin route 서버에서 로그인 요청 중 에러가 발생했습니다.");
  }
}
