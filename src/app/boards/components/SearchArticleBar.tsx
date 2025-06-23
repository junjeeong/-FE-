const SearchArticleBar = () => {
  return (
    <div className="bg-[#F3F4F6] flex flex-1 items-center py-2 px-4 rounded-xl text-[#9CA3AF]">
      <img src="/icon/ic_search.svg" alt="검색 아이콘" width={24} height={24} />
      <input type="text" placeholder="키워드를 입력해주세요." className="flex-1" />
    </div>
  );
};

export default SearchArticleBar;
