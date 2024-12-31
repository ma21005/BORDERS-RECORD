import React from "react";
import { RiResetLeftFill } from "react-icons/ri";

const FilterStatus = ({ filterStatuses, setFilterStatuses, isSmartPhone }) => {
  const tickValues = [0, 2, 4, 6, 8, 10]; // 目盛りの値
  const statusLabels = ["トリオン", "攻撃", "防御・援護", "機動", "技術", "射程", "指揮", "特殊戦術"];
  const statusLabelsOperator = ["機器操作", "情報分析", "並列処理", "戦術"];

  // スライダー値の変更を処理する関数
  const handleSliderChange = (index, value, isOperator = false) => {
    const newFilterStatuses = [...filterStatuses];
    const offset = isOperator ? statusLabels.length : 0; // 二つ目の配列の開始位置を計算
    newFilterStatuses[index + offset] = value;
    setFilterStatuses(newFilterStatuses); // App.jsxで管理しているスライダー値を更新
  };

  // スライダーの目盛りクリックを処理する関数
  const handleTickClick = (index, value, isOperator = false) => {
    handleSliderChange(index, value, isOperator);
  };

  // スライダーのゲージを塗りつぶす部分のスタイルを計算
  const getSliderBackground = (value) => {
    const percentage = (value / 10) * 100; // 最大値10を基準にして割合を計算
    return `linear-gradient(to right, #166f8f ${percentage}%, #444444 ${percentage}%)`;
  };

  const renderSliders = (labels, isOperator = false) => (
    labels.map((label, index) => (
      <div key={index} className="mb-3">
        {/* ステータス名とスライダー値 */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg text-gray-400 font-bold">{label}</h2>
          <h2 className="text-lg text-[#166f8f] font-bold">
            {filterStatuses[isOperator ? index + statusLabels.length : index]}以上
          </h2>
        </div>
        {/* スライダー */}
        <input
          type="range"
          min={0}
          max={10}
          step={2}
          value={filterStatuses[isOperator ? index + statusLabels.length : index]}
          onChange={(e) =>
            handleSliderChange(index, parseInt(e.target.value, 10), isOperator)
          }
          style={{
            background: getSliderBackground(
              filterStatuses[isOperator ? index + statusLabels.length : index]
            ), // 動的にスライダー背景を設定
          }}
          className="slider w-full appearance-none h-2 rounded-full outline-none"
        />
        {/* スライダーの目盛り */}
        <div className="flex justify-between">
          {tickValues.map((value) => (
            <div
              key={value}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleTickClick(index, value, isOperator)}
            >
              <div
                className="h-2 w-1"
                style={{
                  backgroundColor:
                    filterStatuses[isOperator ? index + statusLabels.length : index] === value
                      ? "#166f8f"
                      : "#444444",
                }}
              />
              <span
                className="text-xl font-bold"
                style={{
                  color:
                    filterStatuses[isOperator ? index + statusLabels.length : index] === value
                      ? "#166f8f"
                      : "#444444",
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    ))
  );

  return (
    <div className="relative w-full mx-auto">
      <div className="filter-item-container">
        <h1 className="filter-item-with-reset-button">STATUS</h1>
        <div
          onClick={() => setFilterStatuses([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])}
          style={{
            cursor: 'pointer',
          }}
          className="flex mt-1"
        >
          <RiResetLeftFill className="text-xl mr-1 mt-0.5 text-[#166f8f]" />
          <p className="font-bold text-[#166f8f]">RESET</p>
        </div>
      </div>
      <div className={`${isSmartPhone ? "w-10/12" : "w-full"}`}>
        <div>
          {renderSliders(statusLabels)}
        </div>
        <div className="border-t-2 border-[#444444] mt-8 pt-4">
          {/* オペレーター専用のステータス */}
          {renderSliders(statusLabelsOperator, true)}
        </div>
      </div>
    </div>
  );
};

export default FilterStatus;
