import { NextResponse } from "next/server";

export const POST = async () => {
  const response = NextResponse.json(
    { message: "정상적으로 로그아웃 되었습니다." },
    { status: 200 },
  );

  response.cookies.set("accessToken", "", { maxAge: 0 });
  response.cookies.set("refreshToken", "", { maxAge: 0 });

  return response;
};
