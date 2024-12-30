import React from "react";

export default function FilterButtons({ triggerNameAndType, filterTriggers, setFilterTriggers, filterPositions, setFilterPositions, filterOrganizations, setFilterOrganizations, filterOthers, setFilterOthers }) {
  const attackTriggers = triggerNameAndType["ATTACK TRIGGER"];
  const gunnerTriggers = triggerNameAndType["GUNNER TRIGGER"];
  const sniperTriggers = triggerNameAndType["SNIPER TRIGGER"];
  const deffenseTriggers = triggerNameAndType["DEFFENSE TRIGGER"];
  const trapTriggers = triggerNameAndType["TRAP TRIGGER"];
  const optionTriggers = triggerNameAndType["OPTION TRIGGER"];
  const positions = ["アタッカー", "シューター", "ガンナー", "スナイパー", "オールラウンダー", "トラッパー", "スポッター", "オペレーター", "オペレーター以外"];
  const organizations = ["BORDER", "アフトクラトル", "ガロプラ"];
  const others = ["サイドエフェクト", "近界民"]; // その他のフィルタリング

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

  const handleOrganizationFilter = (organization) => {
    setFilterOrganizations((prevOrganization) =>
      prevOrganization === organization ? "" : organization // 同じ組織を選択した場合は解除
    );
  };

  const handleOtherFilter = (filter) => {
    setFilterOthers((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((item) => item !== filter); // 既に選択済みなら解除
      } else {
        return [...prevFilters, filter]; // クリックされたフィルタを追加
      }
    });
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

  const getOrganizationButtonClass = (organization) => {
    return filterOrganizations.includes(organization)
      ? "bg-[#166f8f] text-white p-2 rounded mb-4"
      : "bg-[#444444] text-white p-2 rounded mb-4 hover:bg-[#777777]";
  };

  const getOtherButtonClass = (filter) => {
    return filterOthers.includes(filter)
      ? "bg-[#166f8f] text-white p-2 rounded mb-4"
      : "bg-[#444444] text-white p-2 rounded mb-4 hover:bg-[#777777]";
  };

  return (
    <div>
      {/* ========= フィルタリング用ボタン（トリガー）========= */}
      <div className="filter-item-container">
        <h1 className="filter-item-with-reset-button">TRIGGER</h1>
        <div
          onClick={() => setFilterTriggers([])}
          style={{
            cursor: 'pointer',
          }}
        >
          リセット
        </div>
      </div>
      {/* <h1 className="filter-item">TRIGGER</h1> */}
      <h2 className="text-sm text-gray-400">ATTACK TRIGGER</h2>
      <div className="flex flex-wrap space-x-1 gap-x-3">
        {attackTriggers.map((trigger, index) => (
          <button
            key={`attack-${index}`}
            className={`${getTriggerButtonClass(trigger)} rounded-xl`}
            onClick={() => handleTriggerFilter(trigger)}
          >
            {trigger}
          </button>
        ))}
      </div>

      <h2 className="text-sm text-gray-400">GUNNER TRIGGER</h2>
      <div className="flex flex-wrap gap-x-3">
        {gunnerTriggers.map((trigger, index) => (
          <button
            key={`gunner-${index}`}
            className={`${getTriggerButtonClass(trigger)} rounded-xl`}
            onClick={() => handleTriggerFilter(trigger)}
          >
            {trigger}
          </button>
        ))}
      </div>

      <h2 className="text-sm text-gray-400">SNIPER TRIGGER</h2>
      <div className="flex flex-wrap gap-x-3">
        {sniperTriggers.map((trigger, index) => (
          <button
            key={`sniper-${index}`}
            className={`${getTriggerButtonClass(trigger)} rounded-xl`}
            onClick={() => handleTriggerFilter(trigger)}
          >
            {trigger}
          </button>
        ))}
      </div>

      <h2 className="text-sm text-gray-400">DEFFENSE TRIGGER</h2>
      <div className="flex flex-wrap gap-x-3">
        {deffenseTriggers.map((trigger, index) => (
          <button
            key={`defense-${index}`}
            className={`${getTriggerButtonClass(trigger)} rounded-xl`}
            onClick={() => handleTriggerFilter(trigger)}
          >
            {trigger}
          </button>
        ))}
      </div>

      <h2 className="text-sm text-gray-400">TRAP TRIGGER</h2>
      <div className="flex flex-wrap gap-x-3">
        {trapTriggers.map((trigger, index) => (
          <button
            key={`defense-${index}`}
            className={`${getTriggerButtonClass(trigger)} rounded-xl`}
            onClick={() => handleTriggerFilter(trigger)}
          >
            {trigger}
          </button>
        ))}
      </div>

      <h2 className="text-sm text-gray-400">OPTION TRIGGER</h2>
      <div className="flex flex-wrap gap-x-3">
        {optionTriggers.map((trigger, index) => (
          <button
            key={`option-${index}`}
            className={`${getTriggerButtonClass(trigger)} rounded-xl`}
            onClick={() => handleTriggerFilter(trigger)}
          >
            {trigger}
          </button>
        ))}
      </div>

      <h2 className="text-sm text-gray-400">BLACK TRIGGER</h2>
      <button
        className={`${getTriggerButtonClass("黒トリガー")} rounded-xl`}
        onClick={() => handleTriggerFilter("黒トリガー")}
      >
        黒トリガー
      </button>

      {/* ========= フィルタリング用ボタン（ポジション）========= */}     
      <h1 className="filter-item">POSITION</h1>
      <div className="flex flex-wrap gap-x-3">
        {positions.map((position, index) => (
          <button
            key={`position-${index}`}
            className={`${getPositionButtonClass(position)} rounded-xl`}
            onClick={() => handlePositionFilter(position)}
          >
            {position}
          </button>
        ))}
      </div>

      {/* ========= フィルタリング用ボタン（組織）========= */}
      <h1 className="filter-item">ORGANIZATIONS</h1>
      <div className="flex flex-wrap gap-x-3">

        {organizations.map((organization, index) => (
          <button
            key={`organization-${index}`}
            className={`${getOrganizationButtonClass(organization)} rounded-xl`}
            onClick={() => handleOrganizationFilter(organization)}
          >
            {organization}
          </button>
        ))}
      </div>

      {/* ========= フィルタリング用ボタン（その他）========= */}
      <h1 className="filter-item">OTHERS</h1>
      <div className="flex flex-wrap gap-x-3">

        {others.map((other, index) => (
          <button
            key={`other-${index}`}
            className={`${getOtherButtonClass(other)} rounded-xl`}
            onClick={() => handleOtherFilter(other)}
          >
            {other}
          </button>
        ))}
      </div>
    </div>
  );
}
