import type { Metadata } from "next";
import { pretendard } from "@/fonts/pretendard";
import MainLayout from "@/components/layout/MainLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "정준영 - FE 과제",
  description:
    "FE 개발자 지원자 정준영의 더드림 솔루션 과제 제출 페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
