import { ReactNode } from "react";

const BoardsPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-14 overflow-hidden bg-white w-full max-w-[1200px] rounded-xl shadow-xl">
      {children}
    </div>
  );
};

export default BoardsPageLayout;
