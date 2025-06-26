"use client";

import Image from "next/image";

const Logo = () => {
  return (
    // 홈으로 이동할 때에는 기존 클라이언트 상태를 유지하지 않고, 서버에서 fresh한 데이터를 새로 패칭하도록 함.
    <button onClick={() => (window.location.href = "/")} className="relative h-[80px] w-[80px]">
      <Image
        src={"/icon/logo.png"}
        fill
        className="object-contain"
        sizes="80px"
        alt="로고"
        priority
      />
    </button>
  );
};

export default Logo;
