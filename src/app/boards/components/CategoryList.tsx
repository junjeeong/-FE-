import CategoryItem from "@/app/boards/components/CategoryItem";

const CategoryList = () => {
  const list = ["공지", "자유", "Q&A", "기타"];

  return (
    <section className="flex gap-8">
      {list.map((el) => (
        <CategoryItem name={el} />
      ))}
    </section>
  );
};

export default CategoryList;
