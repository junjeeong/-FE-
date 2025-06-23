const BoardListContainer = () => {
  return (
    <div>
      <div>
        <h1>게시글</h1>
        <CreateArticleButton />
      </div>
      <div>
        <SearchArticleBar />
        <SelectCategoryDropDown />
      </div>
      <BoardItemList />
    </div>
  );
};

export default BoardListContainer;
