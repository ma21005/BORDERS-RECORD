import CardContainer from "./CardContainer";
import  { fetchCharacterBackGroudColor } from "../../hooks/fetchCharacterBackGroudColor";

export default function CharacterTitleCard({ character }) {
  const characterBackGroudColor = fetchCharacterBackGroudColor(character.部隊);

  return (
    <CardContainer>
      <h2 className="text-lg font-bold">{character.名前}</h2>
      <div className="h-[80%] rounded-xl">
        <img
          src={`https://borders-records.s3.ap-northeast-1.amazonaws.com/characters/${character.名前}.png`}
          alt={`${character.名前}`}
          style={{ backgroundColor: characterBackGroudColor }}
          className="object-cover w-full h-full"
        />
      </div>
    </CardContainer>
  );
}