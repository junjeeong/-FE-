const PaginationBar = ({ currentPage }: { currentPage: number }) => {
  const list = ["<", "1", "2", "3", "4", "5", ">"];

  return (
    <ol className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-1">
      {list.map((el) => (
        <button
          key={el}
          className="rounded-full border-gray-200 border-1 font-semibold text-[#6B7280] flex justify-center items-center w-12 h-12"
        >
          {el}
        </button>
      ))}
    </ol>
  );
};

export default PaginationBar;
