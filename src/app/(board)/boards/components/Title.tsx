const Title = ({ category }: { category: string }) => {
  let content = "전체";

  switch (category) {
    case "ALL":
      content = "전체";
      break;
    case "NOTICE":
      content = "공지";
      break;
    case "FREE":
      content = "자유";
      break;
    case "QNA":
      content = "Q&A";
      break;
    case "ETC":
      content = "기타";
      break;
    default:
      content = "전체";
      break;
  }

  return <h1 className="text-2xl font-bold text-[#1F2937]">{content}</h1>;
};

export default Title;
