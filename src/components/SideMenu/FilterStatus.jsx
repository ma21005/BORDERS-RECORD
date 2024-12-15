import React from "react";

const FilterStatus = ({ filterStatuses, setFilterStatuses, isSmartPhone }) => {
  const tickValues = [0, 2, 4, 6, 8, 10]; // 目盛りの値
  const statusLabels = ["トリオン", "攻撃", "防御・援護", "機動", "技術", "射程", "指揮", "特殊戦術"];

  // スライダー値の変更を処理する関数
  const handleSliderChange = (index, value) => {
    const newFilterStatuses = [...filterStatuses];
    newFilterStatuses[index] = value;
    setFilterStatuses(newFilterStatuses); // App.jsxで管理しているスライダー値を更新
  };

  // スライダーの目盛りクリックを処理する関数
  const handleTickClick = (index, value) => {
    handleSliderChange(index, value);
  };

  // スライダーのゲージを塗りつぶす部分のスタイルを計算
  const getSliderBackground = (value) => {
    const percentage = (value / 10) * 100; // 最大値10を基準にして割合を計算
    return `linear-gradient(to right, #166f8f ${percentage}%, #444444 ${percentage}%)`;
  };

  return (
    <div className="relative w-full mx-auto">
      <h1 className="mb-6 filter-item">STATUS</h1>
      <div
        className={`${isSmartPhone ? "w-10/12" : "w-full"}`}
      >
        {statusLabels.map((label, index) => (
          <div key={index} className="mb-3">
            {/* ステータス名とスライダー値 */}
            <div className="flex justify-between items-center">
              <h2 className="text-lg text-gray-400 font-bold">{label}</h2>
              <h2 className="text-lg text-[#166f8f] font-bold">{filterStatuses[index]}以上</h2>
            </div>
            {/* スライダー */}
            <input
              type="range"
              min={0}
              max={10}
              step={2}
              value={filterStatuses[index]}
              onChange={(e) => handleSliderChange(index, parseInt(e.target.value, 10))}
              style={{
                background: getSliderBackground(filterStatuses[index]), // 動的にスライダー背景を設定
              }}
              className="slider w-full appearance-none h-2 rounded-full outline-none"
            />
            {/* スライダーの目盛り */}
            <div className="flex justify-between">
              {tickValues.map((value) => (
                <div
                  key={value}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => handleTickClick(index, value)}
                >
                  <div
                    className="h-2 w-1"
                    style={{
                      backgroundColor: filterStatuses[index] === value ? "#166f8f" : "#444444",
                    }}
                  />
                  <span
                    className="text-xl font-bold"
                    style={{
                      color: filterStatuses[index] === value ? "#166f8f" : "#444444",
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterStatus;
