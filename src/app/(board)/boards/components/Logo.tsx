"use client";

import useViewport from "@/hook/useViewPort";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  if (typeof window === "undefined") return null;

  const view = useViewport();

  return (
    // 홈으로 이동할 때에는 기존 클라이언트 상태를 유지하지 않고, 서버에서 fresh한 데이터를 새로 패칭하도록 함.
    <Link href="/">
      <Image
        src={view === "mobile" ? "/logo/logo.png" : "/icon/logo.png"}
        width={view === "mobile" ? 50 : 80}
        height={view === "mobile" ? 40 : 80}
        alt="로고"
        priority
      />
    </Link>
  );
};

export default Logo;
