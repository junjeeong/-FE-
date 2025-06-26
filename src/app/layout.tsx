import type { Metadata } from "next";
import { pretendard } from "@/fonts/pretendard";
import { ToastContainer } from "react-toastify";
import MainLayout from "@/components/layout/MainLayout";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "정준영 - FE 과제",
  description: "FE 개발자 지원자 정준영의 더드림 솔루션 과제 제출 페이지입니다.",
  icons: {
    icon: "/favicon.ico",
  },
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
        <ToastContainer // 보통 최하단에 위치
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </body>
    </html>
  );
}
