"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if (auth) {
      const currentTime = Date.now();
      const { expiresAt } = JSON.parse(auth);

      if (currentTime > expiresAt) {
        localStorage.removeItem("auth");
        alert("로그인 세션이 만료되었습니다. 다시 로그인 해주세요.");
        router.push("/signin");
      } else {
        router.push("/boards");
      }
    } else router.push("/signin");
  }, [router]);

  return null;
}
