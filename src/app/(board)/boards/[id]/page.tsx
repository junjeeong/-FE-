import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { BoardDetailData } from "@/types/boards";
import Image from "next/image";
import isoStringToCreatedTime from "@/util/isoStringToCreatedTime";
import EditNDeleteButtons from "@/app/(board)/boards/components/EditNDeleteButtons";

interface BoardDetailPageProps {
  params: Promise<{ id: string }>;
}

const BoardDetailPage = async ({ params }: BoardDetailPageProps) => {
  const { id } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const isMine = true;
  let data: BoardDetailData | null = null;

  try {
    const res = await fetch(`https://front-mission.bigs.or.kr/boards/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: {
        tags: [`board-${id}`],
      },
    });

    if (!res.ok) throw new Error("게시글 데이터를 불러오는 데 실패했습니다.");
    data = await res.json();
  } catch (err) {
    redirect("/boards");
  }

  if (!data) {
    return <div className="p-8">데이터가 존재하지 않습니다.</div>;
  }

  const { title, content, boardCategory, imageUrl, createdAt } = data;
  const formattedImageUrl = `https://front-mission.bigs.or.kr${imageUrl}`;

  return (
    <article className="flex h-full w-full flex-col justify-between overflow-scroll bg-white p-8">
      <header className="mt-5 flex flex-col justify-center gap-4">
        <h2 className="text-5xl font-bold text-[#212529] sm:text-3xl">
          {title ? title : "제목없음"}
        </h2>
        <div className="mt-auto flex gap-2 text-gray-500 sm:text-sm">
          <span>{boardCategory} </span>
          <span>•</span>
          <span> {isoStringToCreatedTime(createdAt)}</span>
        </div>
      </header>

      {imageUrl && (
        <figure className="relative mt-10 h-[300px] w-[300px] overflow-hidden rounded-md">
          <Image src={formattedImageUrl} alt="게시글 이미지" fill className="object-contain" />
        </figure>
      )}

      <p className="mt-10 mb-auto text-base text-[#171719] sm:text-xs">{content}</p>

      {isMine && <EditNDeleteButtons id={id} />}
    </article>
  );
};

export default BoardDetailPage;
