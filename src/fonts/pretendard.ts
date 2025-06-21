import localFont from "next/font/local";

export const pretendard = localFont({
  src: [
    {
      path: "./files/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./files/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-pretendard",
});
