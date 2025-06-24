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
    const res = await instance.post("/auth/refresh", refreshToken);
    const { accessToken } = res.data;

    cookieStore.set("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 14,
    });

    return Response.json({ accessToken });
  } catch (err) {
    console.error("refresh route api 에러", err);

    return new Response(JSON.stringify({ message: "AccessToken 재발급 실패" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
}
