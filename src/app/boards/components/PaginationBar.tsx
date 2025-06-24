import clsx from "clsx";

const PaginationBar = ({ currentPage }: { currentPage: number }) => {
  const list = ["<", "1", "2", "3", "4", "5", ">"];

  return (
    <ol className="mx-auto flex gap-1 mt-8 ">
      {list.map((el) => (
        <button
          key={el}
          className={clsx(
            "rounded-full border-gray-300 border-1 font-semibold text-[#6B7280] flex justify-center items-center w-12 h-12 hover:bg-blue-400 hover:text-white",
            currentPage === Number(el) ? "text-white bg-blue-400" : "",
          )}
        >
          {el}
        </button>
      ))}
    </ol>
  );
};

export default PaginationBar;
