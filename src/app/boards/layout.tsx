import React from "react";
import CreateAritcleFloatingButton from "@/app/boards/components/CreateAritcleFloatingButton";
import Header from "@/app/boards/components/Header";
import BoardsPageLayout from "@/components/layout/BoardsPageLayout";

export default function BoardsLayout({ children }: { children: React.ReactNode }) {
  return (
    <BoardsPageLayout>
      <Header />
      <main className="flex h-[600px] w-full flex-col bg-white p-8">{children}</main>
      <CreateAritcleFloatingButton />
    </BoardsPageLayout>
  );
}
