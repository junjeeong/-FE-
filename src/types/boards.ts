export type Category = "NOTICE" | "FREE" | "QNA" | "ETC";

interface BoardData {
  title: string;
  content: string;
  category: Category;
}

export type PostBoardData = BoardData;
export type PatchBoardData = BoardData;

export interface GetBoardListData {
  page?: number;
  size?: number;
}
