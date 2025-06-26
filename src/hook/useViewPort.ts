import { useEffect, useState } from "react";

type Viewport = "mobile" | "tablet" | "desktop";

const getViewport = (width: number): Viewport => {
  if (width < 768) return "mobile";
  if (width < 1280) return "tablet";
  return "desktop";
};

export default function useViewport(): Viewport {
  const [viewport, setViewport] = useState<Viewport>(() => getViewport(window.innerWidth));

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeout); // 타이머가 누적되면 이전에 것들은 제거
      timeout = setTimeout(() => {
        // 이전에 것들은 지워지고 마지막 타이머 0.2초 뒤에 실행
        const newViewport = getViewport(window.innerWidth);
        setViewport((prev) => (prev === newViewport ? prev : newViewport));
      }, 200); // 200ms 디바운스
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return viewport;
}
