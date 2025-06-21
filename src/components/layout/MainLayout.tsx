import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[#f3f4f6]">
      {children}
    </div>
  );
};

export default MainLayout;
