import clsx from "clsx";

const PaginationBar = ({ currentPage }: { currentPage: number }) => {
  const list = ["<", "1", "2", "3", "4", "5", ">"];

  return (
    <ol className="mx-auto mt-8 flex gap-1">
      {list.map((el) => (
        <button
          key={el}
          className={clsx(
            "flex h-12 w-12 items-center justify-center rounded-full border-1 border-gray-300 font-semibold text-[#6B7280] hover:bg-blue-400 hover:text-white",
            currentPage === Number(el) ? "bg-blue-400 text-white" : "",
          )}
        >
          {el}
        </button>
      ))}
    </ol>
  );
};

export default PaginationBar;
