import { cookies } from "next/headers";
import { instance } from "@/lib/axios";

export async function POST(req: Request) {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (!refreshToken) {
    return new Response(JSON.stringify({ message: "refreshToken이 존재하지 않습니다." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const res = await instance.post("/auth/refresh", { refreshToken });
    const { accessToken: newAccessToken, refreshToken: newRefreshToken } = res.data;

    cookieStore.set("accessToken", newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 5, // 유통 기한 -> 5분(백엔드 설정과 동일)
    });

    cookieStore.set("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 1, // 유통 기한 -> 하루
    });

    return Response.json({ accessToken: newAccessToken }); // client에서 로컬 스토리지에 저장시키기 위함
  } catch (err) {
    console.error("Error eccured In /refresh/route.ts : ", err);

    return new Response(JSON.stringify({ message: "AccessToken 재발급 실패" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
}
