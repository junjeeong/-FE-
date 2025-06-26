import React from "react";
import CreateAritcleFloatingButton from "@/app/(board)/boards/components/CreateAritcleFloatingButton";
import Header from "@/app/(board)/boards/components/Header";
import BoardsPageLayout from "@/components/layout/BoardsPageLayout";

export default function BoardsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <BoardsPageLayout>
        <main className="relative flex h-[600px] w-full flex-col bg-white p-8 sm:h-[500px]">
          {children}
        </main>
        <CreateAritcleFloatingButton />
      </BoardsPageLayout>
    </>
  );
}
