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
    <div className="rounded-xl border-4 w-full max-w-[320px] mx-auto">
      <h2 className="text-lg font-bold">{character.名前}</h2>
      <StatusGraph status={status}/>
      <p>トリオン: {character.トリオン}</p>
      <p>攻撃力: {character.攻撃}</p>
      <p>防御・援護: {character["防御・援護"]}</p>
      <p>機動: {character.機動}</p>
      <p>技術: {character.技術}</p>
      <p>射程: {character.射程}</p>
      <p>指揮: {character.指揮}</p>
      <p>特殊戦術: {character.特殊戦術}</p>
    </div>
  );
}