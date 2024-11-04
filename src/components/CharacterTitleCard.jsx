export default function CharacterTitleCard({ character }) {
  return (
    <div className="rounded-xl border-4 w-full max-w-[320px] mx-auto">
      <h2 className="text-lg font-bold">{character.名前}</h2>
      <img
        src={`https://borders-records.s3.ap-northeast-1.amazonaws.com/characters/${character.名前}.png`}
        alt={`${character.名前}`}
        className="w-full h-full rounded-t-xl"
      />
      {/* <p>部隊: {character.部隊}</p> */}
      <p>ポジション: {character.ポジション}</p>
      {/* <p>年齢: {character.年齢}</p>
      <p>誕生日: {character.誕生日}</p>
      <p>身長: {character.身長} cm</p>
      <p>血液型: {character.血液型}</p>
      <p>星座: {character.星座}</p>
      <p>職業: {character.職業}</p>
      <p>好きな食べ物: {character.好きな食べ物}</p>
      <p>トリオン: {character.トリオン}</p>
      <p>攻撃力: {character.攻撃}</p>
      <p>防御・援護: {character["防御・援護"]}</p>
      <p>機動: {character.機動}</p>
      <p>技術: {character.技術}</p>
      <p>射程: {character.射程}</p>
      <p>指揮: {character.指揮}</p>
      <p>特殊戦術: {character.特殊戦術}</p>
      <p>メイン1: {character.メイン1}</p>
      <p>メイン2: {character.メイン2}</p>
      <p>メイン3: {character.メイン3}</p>
      <p>メイン4: {character.メイン4}</p>
      <p>サブ1: {character.サブ1}</p>
      <p>サブ2: {character.サブ2}</p>
      <p>サブ3: {character.サブ3}</p>
      <p>サブ4: {character.サブ4}</p> */}
    </div>
  );
}