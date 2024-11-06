import CharacterStatusCard from "./CharacterStatusCard";
import CharacterTitleCard from "./CharacterTitleCard";
import React, { useState } from 'react';
import CharacterTriggerCard from "./CharacterTriggerCard";
import CharacterDetailCard from "./CharacterDetailCard";
import '../../App.css';

export default function CharacterCard({ character }) {
  const characterCardTypes = [
    { name: "CharacterTitleCard", component: CharacterTitleCard },
    { name: "CharacterStatusCard", component: CharacterStatusCard },
    { name: "CharacterTriggerCard", component: CharacterTriggerCard },
    { name: "CharacterDetailCard", component: CharacterDetailCard },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0); // 現在表示されているカードのインデックス
  const [isFlipping, setIsFlipping] = useState(false); // フリップアニメーション中かどうか

  const handleCardFlip = () => {
    setIsFlipping(true);
    setTimeout(() => {
      // 次のカードに切り替え、循環させる
      const nextIndex = (currentCardIndex + 1) % characterCardTypes.length;
      setCurrentCardIndex(nextIndex); // インデックス更新
      setIsFlipping(false); // フリップアニメーション終了
    }, 300); // 300msのフリップアニメーション
  };

  const CurrentCard = characterCardTypes[currentCardIndex].component; // 現在のカードコンポーネント

  return (
    <div onClick={handleCardFlip} className='cursor-pointer h-full w-full'>
      <div className={`w-full h-full ${isFlipping ? "flip-card" : ""}`}>
        {/* 現在のカードコンポーネントを動的にレンダリング */}
        <CurrentCard character={character} />
      </div>
    </div>
  );
}
