import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center w-screen h-screen bg-[#f3f4f6]">
      <div className="bg-white w-full max-w-[1200px]">{children}</div>
    </div>
  );
};

export default MainLayout;
