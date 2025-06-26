import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import BoardsContent from "@/app/(board)/boards/BoardsContent";

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <BoardsContent />
    </Suspense>
  );
};

export default Page;
