import BoardItem from "@/app/boards/components/BoardItem";

const BoardItemList = () => {
  const list = [
    {
      id: 18,
      title: "공지8",
      content: "공지입니다요",
      boardCategory: "NOTICE",
      imageUrl: "https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png",
      createdAt: "2024-11-13T10:46:29.278927",
    },
    {
      id: 19,
      title: "공지8",
      content: "공지입니다요",
      boardCategory: "NOTICE",
      imageUrl: "/media/images/519617e7-9742-4693-ab05-cd8c88c31dcf.png",
      createdAt: "2024-11-13T10:46:29.278927",
    },
    {
      id: 20,
      title: "공지8",
      content: "공지입니다요",
      boardCategory: "NOTICE",
      imageUrl: "/media/images/519617e7-9742-4693-ab05-cd8c88c31dcf.png",
      createdAt: "2024-11-13T10:46:29.278927",
    },
    {
      id: 21,
      title: "공지8",
      content: "공지입니다요",
      boardCategory: "NOTICE",
      imageUrl: "/media/images/519617e7-9742-4693-ab05-cd8c88c31dcf.png",
      createdAt: "2024-11-13T10:46:29.278927",
    },
  ];

  return (
    <ul className="w-full grid grid-cols-4 grid-rows-4 gap-4">
      {list.map((el) => (
        <li key={el.id} className="flex justify-center items-center w-full h-full">
          <BoardItem info={el} />
        </li>
      ))}
    </ul>
  );
};

export default BoardItemList;
