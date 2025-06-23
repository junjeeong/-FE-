import CategoryItem from "@/app/boards/components/CategoryItem";

const CategoryList = () => {
  const list = ["공지", "자유", "Q&A", "기타"];

  return (
    <ul className="flex gap-8">
      {list.map((el, index) => (
        <li key={index}>
          <CategoryItem name={el} />
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
