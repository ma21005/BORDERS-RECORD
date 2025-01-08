import React from "react";
import { useNavigate } from "react-router-dom";  // useNavigateをインポート

export default function Calendar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/calendar");
  };

  return (
    <div>
      <h1 className="filter-item">CALENDAR</h1>
      <button
        onClick={handleClick}
        className="bg-[#444444] text-white p-2 rounded mb-4 hover:bg-[#777777] rounded-xl"
      >
        誕生日カレンダー
      </button>
    </div>
  );
}
