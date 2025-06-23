import { BoardDetailData } from "@/types/boards";
import Image from "next/image";

const Article = ({ info }: { info: BoardDetailData }) => {
  const { title, content, boardCategory, imageUrl, createdAt } = info;
  const formattedContent = content.length > 12 ? content.slice(0, 12) + "..." : content;

  return (
    <article className="group flex flex-col w-[260px] h-[260px] transition-transform duration-200 cursor-pointer">
      <div className="overflow-hidden rounded-lg shadow-xl h-[170px]">
        <Image
          src={imageUrl}
          width={250}
          height={250}
          style={{ height: "170px", width: "100%", objectFit: "cover" }}
          alt="게시글 이미지"
          className="transition-transform duration-200 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col p-2">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xs font-light">{formattedContent}</p>
      </div>
    </article>
  );
};

export default Article;
