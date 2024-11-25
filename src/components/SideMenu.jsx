export default function SideMenu({ setSearchName, triggerNameAndType, filterTriggers, setFilterTriggers }) {
  const attackTriggers = triggerNameAndType["ATTACK TRIGGER"];
  const gunnerTriggers = triggerNameAndType["GUNNER TRIGGER"];
  const sniperTriggers = triggerNameAndType["SNIPER TRIGGER"];
  const deffenseTriggers = triggerNameAndType["DEFFENSE TRIGGER"];
  const optionTriggers = triggerNameAndType["OPTION TRIGGER"];

  const handleSearch = (event) => {
    setSearchName(event.target.value); // 検索文字列を更新
  };

  const handleFilter = (trigger) => {
    // 同じフィルタを再度押すと解除
    setFilterTriggers((prevFilters) => {
      if (prevFilters.includes(trigger)) {
        return prevFilters.filter((filter) => filter !== trigger);
      } else {
        return [...prevFilters, trigger];
      }
    });
  };

  // ボタンの色を動的に変更するための関数
  const getButtonClass = (trigger) => {
    return filterTriggers.includes(trigger)
      ? "bg-blue-500 text-white p-2 rounded mb-4" // フィルタリングされていれば青色
      : "bg-gray-500 text-white p-2 rounded mb-4"; // フィルタリングされていなければ灰色
  };

  return (
    <div className="side-menu-container h-full w-full">
      <h1 className="filter-item">NAME</h1>
      <input
        type="text"
        placeholder="キャラクター名を入力"
        className="border w-72 p-2 mb-4 rounded text-black"
        onChange={handleSearch} // 入力値を処理
      />

      <h1 className="filter-item">TRIGGER</h1>
      {/* ========= フィルタリング用ボタン（トリガー）========= */}
      <h2 className="text-sm text-gray-400">ATTACK TRIGGER</h2>
      {attackTriggers.map((trigger, index) => (
        <button
          key={`attack-${index}`} // indexをキーとして追加
          className={getButtonClass(trigger)}
          onClick={() => handleFilter(trigger)}
        >
          {trigger}
        </button>
      ))}

      <h2 className="text-sm text-gray-400">GUNNER TRIGGER</h2>
      {gunnerTriggers.map((trigger, index) => (
        <button
          key={`gunner-${index}`} // indexをキーとして追加
          className={getButtonClass(trigger)}
          onClick={() => handleFilter(trigger)}
        >
          {trigger}
        </button>
      ))}

      <h2 className="text-sm text-gray-400">SNIPER TRIGGER</h2>
      {sniperTriggers.map((trigger, index) => (
        <button
          key={`sniper-${index}`} // indexをキーとして追加
          className={getButtonClass(trigger)}
          onClick={() => handleFilter(trigger)}
        >
          {trigger}
        </button>
      ))}

      <h2 className="text-sm text-gray-400">DEFFENSE TRIGGER</h2>
      {deffenseTriggers.map((trigger, index) => (
        <button
          key={`defense-${index}`} // indexをキーとして追加
          className={getButtonClass(trigger)}
          onClick={() => handleFilter(trigger)}
        >
          {trigger}
        </button>
      ))}

      <h2 className="text-sm text-gray-400">OPTION TRIGGER</h2>
      {optionTriggers.map((trigger, index) => (
        <button
          key={`option-${index}`} // indexをキーとして追加
          className={getButtonClass(trigger)}
          onClick={() => handleFilter(trigger)}
        >
          {trigger}
        </button>
      ))}

      <h2>ポジション</h2>
      <h2 className="mb-20">ステータス</h2>
    </div>
  );
}
