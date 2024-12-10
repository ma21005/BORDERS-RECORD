import CharacterStatusCard from "./CharacterStatusCard";
import CharacterTitleCard from "./CharacterTitleCard";
import React, { useState, useEffect } from 'react';
import CharacterTriggerCard from "./CharacterTriggerCard";
import CharacterDetailCard from "./CharacterDetailCard";
import CharacterCardBack from "./CharacterCardBack";

export default function CharacterCard({ character, flipTrigger, flipToIndex  }) {
  const characterCardTypes = [
    { name: "CharacterTitleCard", component: CharacterTitleCard },
    { name: "CharacterStatusCard", component: CharacterStatusCard },
    { name: "CharacterTriggerCard", component: CharacterTriggerCard },
    { name: "CharacterDetailCard", component: CharacterDetailCard },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0); // 現在表示されているカードのインデックス
  const [isFlipping, setIsFlipping] = useState(false); // フリップアニメーション中かどうか

  useEffect(() => {
    if (flipTrigger) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentCardIndex(flipToIndex);
        setIsFlipping(false);
      }, 300); // 300msのフリップアニメーション
    }
  }, [flipTrigger, flipToIndex]);

  const handleCardFlip = () => {
    setIsFlipping(true);
    setTimeout(() => {
      const nextIndex = (currentCardIndex + 1) % characterCardTypes.length;
      setCurrentCardIndex(nextIndex);
      setIsFlipping(false);
    }, 300);
  };

  const CurrentCard = characterCardTypes[currentCardIndex].component;

  return (
    <div onClick={handleCardFlip} className="relative cursor-pointer w-full h-full">
      <div className={`absolute w-full h-full ${isFlipping ? 'flip-card' : ''}`}>
        {/* フリップ中なら専用のカードを表示、それ以外は通常のカード */}
        {isFlipping ? (
          <CharacterCardBack /> // フリップ中に表示するコンポーネント
        ) : (
          <CurrentCard character={character} />
        )}
      </div>
    </div>
  );
}
