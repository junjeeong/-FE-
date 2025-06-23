import { cookies } from "next/headers";
import { instance } from "@/lib/axios";

export async function POST(req: Request) {
  const cookieStore = cookies(); // 여기에 req를 명시할 수 없음: next/headers가 자체 context 기반
  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (!refreshToken) {
    return new Response("refreshToken을 찾을 수 없습니다.", { status: 401 });
  }

  try {
    const res = await instance.post("/auth/refresh", refreshToken);

    const { accessToken } = res.data;

    cookies().set("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 14,
    });

    return Response.json({ accessToken });
  } catch (err) {
    console.error("/refresh route.ts 에러", err);
    throw new Error("AccessToken 재갱신에 실패했습니다.");
  }
}
