import React, { useState } from "react";

// const FilterStatus = () => {
const FilterStatus = ({ setSliderValue }) => {
  const [localSliderValue, setLocalSliderValue] = useState(0); // Local state for the slider value
  const tickValues = [0, 2, 4, 6, 8, 10]; // 目盛りの値

  const handleTickClick = (value) => {
    setLocalSliderValue(value);
    setSliderValue(value); // クリックされた目盛りの値をスライダーに反映
  };

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setLocalSliderValue(value);
    setSliderValue(value); // スライダーを動かしたときに値を更新
  };

  return (
    <div className="relative w-full mx-auto">
      <h1 className="mb-6 filter-item">STATUS</h1>
      <div>
        <div className="flex">
          <h2 className="text-lg text-gray-400 font-bold mr-4">トリオン</h2>
          <h2 className="text-lg text-gray-400">{localSliderValue}以上</h2>
        </div>
        <input
          type="range"
          min={0}
          max={10}
          step={2}
          value={localSliderValue}
          onChange={handleSliderChange}
          className="slider w-full appearance-none h-2 bg-[#444444] rounded-full outline-none"
        />
        <div className="left-0 right-0 flex justify-between">
          {tickValues.map((value) => (
            <div
              key={value}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleTickClick(value)}
            >
              <div className="h-2 w-1 bg-[#444444]" />
              <span className="text-xl text-[#166f8f] font-bold">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterStatus;
