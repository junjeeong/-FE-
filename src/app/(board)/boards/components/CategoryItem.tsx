const CategoryItem = ({ name }: { name: string }) => {
  return (
    <button className="flex h-[78px] w-[48px] flex-col items-center justify-center gap-2 transition-transform duration-200 hover:scale-105 hover:text-blue-400">
      <img src={`/icon/${name}.png`} alt={`카테고리 아이콘 - ${name}`} sizes="40px" />
      <span className="text-xs">{name}</span>
    </button>
  );
};

export default CategoryItem;
