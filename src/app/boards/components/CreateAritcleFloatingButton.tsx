import WriteIcon from "@/app/boards/components/WriteIcon";

const CreateAritcleFloatingButton = () => {
  return (
    <button className="bg-white fixed bottom-6 right-6 w-[140px] h-[60px] flex items-center gap-2 rounded-full justify-between p-5 shadow-2xl hover:scale-110 hover:text-blue-400 transition-transform duraition-200">
      <span className="font-bold">글쓰기</span>
      <div className="absolute -top-2 -right-2 bg-blue-400 flex items-center justify-center w-[70px] h-[70px] rounded-full">
        <WriteIcon className="text-white size-8" />
      </div>
    </button>
  );
};

export default CreateAritcleFloatingButton;
