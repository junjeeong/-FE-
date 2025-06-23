interface BoardData {
  title: string;
  content: string;
  category: string;
}

export interface BoardDetailData {
  id: number;
  title: string;
  content: string;
  boardCategory: string;
  imageUrl: string;
  createdAt: string;
}

export type PostBoardData = BoardData;
export type PatchBoardData = BoardData;

export interface GetBoardListData {
  page?: number;
  size?: number;
}
