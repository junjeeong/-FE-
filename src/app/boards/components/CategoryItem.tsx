const CategoryItem = ({ name }: { name: string }) => {
  return (
    <button className="flex flex-col gap-2 justify-center items-center w-[48px] h-[78px] hover:scale-105 hover:text-blue-400 transition-transform duration-200">
      <img src={`/icon/${name}.png`} alt={`카테고리 아이콘 - ${name}`} width={40} height={40} />
      <span className="text-xs">{name}</span>
    </button>
  );
};

export default CategoryItem;
