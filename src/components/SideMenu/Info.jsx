import React from "react";
import { useNavigate } from "react-router-dom";  // useNavigateをインポート

export default function Info() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/info");  // /infoに遷移
  };

  return (
    <div>
      <h1 className="filter-item">INFO</h1>
      <button
        onClick={handleClick}
        className="bg-[#444444] text-white p-2 rounded mb-4 hover:bg-[#777777] rounded-xl"
      >
        当サイトについて
      </button>
    </div>
  );
}
