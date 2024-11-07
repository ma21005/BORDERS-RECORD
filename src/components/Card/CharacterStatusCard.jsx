import CardContainer from "./CardContainer";
import StatusGraph from "./StatusGraph";

export default function CharacterStatusCard({ character }) {
  // 受け取ったデータからパラメーター用のステータスを取り出す
  const status = [
    { name: "トリオン", value: character.トリオン },
    { name: "攻撃力", value: character.攻撃 },
    { name: "防御・援護", value: character["防御・援護"] },
    { name: "機動", value: character.機動 },
    { name: "技術", value: character.技術 },
    { name: "射程", value: character.射程 },
    { name: "指揮", value: character.指揮 },
    { name: "特殊戦術", value: character.特殊戦術 },
  ];

  return (
    <CardContainer>
      <h2 className="text-lg font-bold">{character.名前}</h2>
      <div className="h-[80%]">
        <StatusGraph status={status}/>
      </div>
    </CardContainer>
  );
}