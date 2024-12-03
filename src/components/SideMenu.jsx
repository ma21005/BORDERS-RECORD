export default function SideMenu({ setSearchName, triggerNameAndType, filterTriggers, setFilterTriggers, filterPositions, setFilterPositions }) {
  const attackTriggers = triggerNameAndType["ATTACK TRIGGER"];
  const gunnerTriggers = triggerNameAndType["GUNNER TRIGGER"];
  const sniperTriggers = triggerNameAndType["SNIPER TRIGGER"];
  const deffenseTriggers = triggerNameAndType["DEFFENSE TRIGGER"];
  const optionTriggers = triggerNameAndType["OPTION TRIGGER"];
  const positions = ["アタッカー", "シューター", "ガンナー", "スナイパー", "オールラウンダー", "トラッパー", "オペレーター"]

  const handleSearch = (event) => {
    setSearchName(event.target.value); // 検索文字列を更新
  };

  const handleTriggerFilter = (trigger) => {
    setFilterTriggers((prevFilters) => {
      // 黒トリガーの場合
      if (trigger === "黒トリガー") {
        return prevFilters.includes("黒トリガー")
          ? prevFilters.filter((filter) => filter !== "黒トリガー") // 既に黒トリガーのフィルタリング済みであれば解除
          : ["黒トリガー"]; // 黒トリガーのみでフィルタリング

      // 通常トリガーの場合
      } else {
        // 通常トリガーのみのフィルタリング（黒トリガーのフィルタリングは解除）
        const normalTrigger = prevFilters.filter((filter) => filter !== "黒トリガー");

        if (normalTrigger.includes(trigger)) {
          return normalTrigger.filter((filter) => filter !== trigger); // 既にクリックした通常トリガーのフィルタリング済みであれば解除
        } else {
          return [...normalTrigger, trigger]; // クリックした通常トリガーのフィルタリングを追加
        }
      }
    });
  };

  const handlePositionFilter = (position) => {
    setFilterPositions((prevPosition) =>
      prevPosition === position ? "" : position // 同じポジションを選択した場合は解除
    );
  };

  // トリガーボタンの色を動的に変更するための関数
  const getTriggerButtonClass = (trigger) => {
    return filterTriggers.includes(trigger)
      ? "bg-[#166f8f] text-white p-2 rounded mb-4" // フィルタリングされていれば青色
      : "bg-[#444444] text-white p-2 rounded mb-4 hover:bg-[#777777]"; // フィルタリングされていなければ灰色
  };

  // ポジションボタンの色を動的に変更するための関数
  const getPositionButtonClass = (position) => {
    return filterPositions === position
      ? "bg-[#166f8f] text-white p-2 rounded mb-4"
      : "bg-[#444444] text-white p-2 rounded mb-4 hover:bg-[#777777]";
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

      {/* ========= フィルタリング用ボタン（トリガー）========= */}
      <h1 className="filter-item">TRIGGER</h1>
      <h2 className="text-sm text-gray-400">ATTACK TRIGGER</h2>
      {attackTriggers.map((trigger, index) => (
        <button
          key={`attack-${index}`}
          className={`${getTriggerButtonClass(trigger)} rounded-xl`}
          onClick={() => handleTriggerFilter(trigger)}
        >
          {trigger}
        </button>
      ))}

      <h2 className="text-sm text-gray-400">GUNNER TRIGGER</h2>
      {gunnerTriggers.map((trigger, index) => (
        <button
          key={`gunner-${index}`}
          className={`${getTriggerButtonClass(trigger)} rounded-xl`}
          onClick={() => handleTriggerFilter(trigger)}
        >
          {trigger}
        </button>
      ))}

      <h2 className="text-sm text-gray-400">SNIPER TRIGGER</h2>
      {sniperTriggers.map((trigger, index) => (
        <button
          key={`sniper-${index}`}
          className={`${getTriggerButtonClass(trigger)} rounded-xl`}
          onClick={() => handleTriggerFilter(trigger)}
        >
          {trigger}
        </button>
      ))}

      <h2 className="text-sm text-gray-400">DEFFENSE TRIGGER</h2>
      {deffenseTriggers.map((trigger, index) => (
        <button
          key={`defense-${index}`}
          className={`${getTriggerButtonClass(trigger)} rounded-xl`}
          onClick={() => handleTriggerFilter(trigger)}
        >
          {trigger}
        </button>
      ))}

      <h2 className="text-sm text-gray-400">OPTION TRIGGER</h2>
      {optionTriggers.map((trigger, index) => (
        <button
          key={`option-${index}`}
          className={`${getTriggerButtonClass(trigger)} rounded-xl`}
          onClick={() => handleTriggerFilter(trigger)}
        >
          {trigger}
        </button>
      ))}

      <h2 className="text-sm text-gray-400">BLACK TRIGGER</h2>
      <button
        className={`${getTriggerButtonClass("黒トリガー")} rounded-xl`}
        onClick={() => handleTriggerFilter("黒トリガー")}
      >
        黒トリガー
      </button>

      {/* ========= フィルタリング用ボタン（ポジション）========= */}     
      <h1 className="filter-item">POSITION</h1>
      {positions.map((position, index) => (
        <button
          key={`position-${index}`}
          className={`${getPositionButtonClass(position)} rounded-xl`}
          onClick={() => handlePositionFilter(position)}
        >
          {position}
        </button>
      ))}

      <h2 className="mb-20">ステータス</h2>
    </div>
  );
}
