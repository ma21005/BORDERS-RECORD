import CardContainer from "./CardContainer";
import  { fetchCharacterBackGroudColor } from "../../hooks/fetchCharacterBackGroudColor";

export default function CharacterTitleCard({ character }) {
  const characterBackGroudColor = fetchCharacterBackGroudColor(character.部隊);

  return (
    <CardContainer>
      <div className="character-image-frame w-[74%] h-auto mx-auto mt-5">
        <img
          src={`https://borders-records.s3.ap-northeast-1.amazonaws.com/characters/${character.名前}.png`}
          alt={`${character.名前}`}
          style={{ backgroundColor: characterBackGroudColor }}
          className="object-cover w-full h-full"
        />
      </div>
      <div style={{ padding: '3px 0' }} className="character-name-container mt-1.5">
        <h1 className="text-3xl font-bold text-center text-white">{character.名前}</h1>
      </div>
    </CardContainer>
  );
}