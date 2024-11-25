export default function SideMenu({ setSearchName }) {
  const handleSearch = (event) => {
    setSearchName(event.target.value); // 検索文字列を更新
  };

  return (
    <div className="side-menu-container h-full w-full">
      <h2>検索</h2>
      <input
        type="text"
        placeholder="キャラクター名を入力"
        className="border p-2 w-full mb-4 text-black"
        onChange={handleSearch} // 入力値を処理
      />
      <h2>ポジション</h2>
      <h2 className="mb-20">ステータス</h2>
    </div>
  );
}