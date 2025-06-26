import { Suspense } from "react";
import BoardsContent from "@/app/(board)/boards/BoardsContent";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Page() {
  return (
    <Suspense>
      <BoardsContent />
    </Suspense>
  );
}
