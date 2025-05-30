// キャラクターカードのタイトル画面にあたるコンポーネント

import React, { useState } from 'react';
import CardContainer from "./CardContainer";
import  { fetchCharacterBackGroudColor } from "../../hooks/fetchCharacterBackGroudColor";
import CharacterComment from './CharacterComment';

export default function CharacterTitleCard({ character }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDefaultImage, setIsDefaultImage] = useState(false);

  const characterBackGroudColor = fetchCharacterBackGroudColor(character);

  let imageName = character.名前;
  if (character.黒トリガー && character.名前 === '空閑 遊真') {
    imageName = '空閑 遊真_2';
  } else if (character.黒トリガー && character.名前 === '迅 悠一') {
    imageName = '迅 悠一_2';
  } else if (character.黒トリガー && character.名前 === "天羽 月彦") {
    imageName = "天羽 月彦_2";
  } else if (character.特殊トリガー && character.名前 === 'ヒュース') {
    imageName = 'ヒュース_2';
  }

  return (
    <CardContainer>
      <div
        className="character-image-frame w-[74%] h-auto mx-auto mt-5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && !isDefaultImage ? (
          <CharacterComment character={character} />
        ) : (
          <img
            src={`https://borders-records.s3.ap-northeast-1.amazonaws.com/characters/${imageName}.png`}
            alt={`${character.名前}`}
            style={{ backgroundColor: characterBackGroudColor }}
            className="image-protect object-cover w-full h-full"
            onError={(e) => {
              e.target.src = 'https://borders-records.s3.ap-northeast-1.amazonaws.com/characters/no-image.png';
              setIsDefaultImage(true);
            }}
          />
        )}
      </div>
      <div style={{ padding: '3px 0' }} className="character-name-container mt-1.5">
        <h1 className="text-3xl font-bold text-center text-white">{character.名前}</h1>
      </div>
    </CardContainer>
  );
}
