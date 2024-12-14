import React, { useState } from "react";

const StatusSlider = () => {
  const [sliderValue, setSliderValue] = useState(0); // スライダーの現在の値
  const tickValues = [0, 2, 4, 6, 8, 10]; // 目盛りの値

  const handleTickClick = (value) => {
    setSliderValue(value); // クリックされた目盛りの値をスライダーに反映
  };

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setSliderValue(value); // スライダーを動かしたときに値を更新
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* スライダー */}
      <input
        type="range"
        min={0}
        max={10}
        step={2}
        value={sliderValue}
        onChange={handleSliderChange}
        className="w-full appearance-none h-2 bg-blue-100 rounded-full outline-none"
      />

      {/* スライダーの目盛り */}
      <div className="absolute top-6 left-0 right-0 flex justify-between">
        {tickValues.map((value) => (
          <div
            key={value}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleTickClick(value)}
          >
            <div className="h-2 w-1 bg-blue-200" />
            <span className="text-xs text-blue-600 mt-1">{value}</span>
          </div>
        ))}
      </div>

      {/* スライダーの値を表示 */}
      <div className="mt-4 text-center text-blue-600">
        Selected Value: {sliderValue}
      </div>
    </div>
  );
};

export default StatusSlider;
