const Title = ({ category }: { category: string }) => {
  let content = "전체";

  switch (category) {
    case "all":
      content = "전체";
      break;
    case "notice":
      content = "공지";
      break;
    case "free":
      content = "자유";
      break;
    case "qna":
      content = "Q&A";
      break;
    case "etc":
      content = "기타";
      break;
    default:
      content = "전체";
      break;
  }

  return <h1 className="text-2xl font-bold text-[#1F2937]">{content}</h1>;
};

export default Title;
