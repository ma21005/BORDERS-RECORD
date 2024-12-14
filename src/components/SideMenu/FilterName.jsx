import React from "react";

export default function FilterName({ searchName, setSearchName }) {
  const handleSearch = (event) => {
    setSearchName(event.target.value); // 検索文字列を更新
  };

  const handleClear = () => {
    setSearchName(""); // 検索文字列をクリア
  };

  return (
    <div>
      <h1 className="filter-item">NAME</h1>
      <div className="w-4/5 relative">
        <input
          type="text"
          value={searchName}
          placeholder="キャラクター名を入力"
          className="w-full border p-2 mb-4 rounded text-black"
          onChange={handleSearch} // 入力値を処理
        />
        {searchName && (
          <button
            onClick={handleClear}
            className="absolute right-1 top-1/3 transform -translate-y-1/2 text-gray-700 hover:text-black w-10 h-10 flex items-center justify-center text-3xl"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}
