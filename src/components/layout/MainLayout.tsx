import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#f3f4f6] px-5">
      {children}
    </div>
  );
};

export default MainLayout;
