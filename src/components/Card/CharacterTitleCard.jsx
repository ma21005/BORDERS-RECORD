import CardContainer from "./CardContainer";
import  { fetchCharacterBackGroudColor } from "../../hooks/fetchCharacterBackGroudColor";

export default function CharacterTitleCard({ character }) {
  const characterBackGroudColor = fetchCharacterBackGroudColor(character.部隊);

  return (
    <CardContainer>
      <h2 className="text-lg font-bold">{character.名前}</h2>
      <img
        src={`https://borders-records.s3.ap-northeast-1.amazonaws.com/characters/${character.名前}.png`}
        alt={`${character.名前}`}
        className="w-3/4 rounded-xl"
        style={{ backgroundColor: characterBackGroudColor }}
      />
      <p>ポジション: {character.ポジション}</p>
    </CardContainer>
  );
}