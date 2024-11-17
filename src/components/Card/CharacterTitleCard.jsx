import React, { useState } from 'react';
import CardContainer from "./CardContainer";
import  { fetchCharacterBackGroudColor } from "../../hooks/fetchCharacterBackGroudColor";
import CharacterComment from './CharacterComment';

export default function CharacterTitleCard({ character }) {
  const [isHovered, setIsHovered] = useState(false);

  let characterTeam = character.部隊
  if (characterTeam === '-') {
    characterTeam = character.組織
  }

  const characterBackGroudColor = fetchCharacterBackGroudColor(characterTeam, character.黒トリガー);

  let imageName = character.名前
  if (character.黒トリガー && character.名前 === '空閑 遊真') {
    imageName = '空閑 遊真_2'
  } else if (character.黒トリガー && character.名前 === '迅 悠一') {
    imageName = '迅 悠一_2'
  } else if (character.特殊トリガー && character.名前 === 'ヒュース') {
    imageName = 'ヒュース_2'
  }

  return (
    <CardContainer>
      <div
        className="character-image-frame w-[74%] h-auto mx-auto mt-5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <CharacterComment character={character}/>
        ) : (
          <img
            src={`https://borders-records.s3.ap-northeast-1.amazonaws.com/characters/${imageName}.png`}
            alt={`${character.名前}`}
            style={{ backgroundColor: characterBackGroudColor }}
            className="object-cover w-full h-full"
          />
        )}
      </div>
      <div style={{ padding: '3px 0' }} className="character-name-container mt-1.5">
        <h1 className="text-3xl font-bold text-center text-white">{character.名前}</h1>
      </div>
    </CardContainer>
  );
}
