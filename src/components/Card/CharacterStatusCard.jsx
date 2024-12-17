// キャラクターカードのステータス画面にあたるコンポーネント

import CardContainer from "./CardContainer";
import StatusGraph from "./StatusGraph/StatusGraph";
import StatusGraphOperator from "./StatusGraph/StatusGraphOperator";
import StatusGraphWithNoData from "./StatusGraph/StatusGraphWithNoData";

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
    { name: "特殊戦術", value: character.特殊戦術 }
  ];

  const statusOperator = [
    { name: "トリオン", value: character.トリオン },
    { name: "機器操作", value: character.機器操作 },
    { name: "情報分析", value: character.情報分析 },
    { name: "並列処理", value: character.並列処理 },
    { name: "戦術", value: character.戦術 },
    { name: "指揮", value: character.指揮},
  ]

  // 全ステータスの value が空文字かをチェックする関数
  const isAllValuesEmpty = (data) => data.every((item) => item.value === "");
  // 全ステータスが全て空の場合のフラグ
  const isNoData = isAllValuesEmpty(status) && isAllValuesEmpty(statusOperator);

  return (
    <CardContainer>
      <div className="h-[10%] character-name-container mt-2 mb-1">
        <p className="text-lg font-bold text-center text-white">{character.名前}</p>
      </div>
      <div className="h-[85%]">
        {isNoData ? (
          <StatusGraphWithNoData status={status} /> // ステータスが無い場合
        ) : character.ポジション !== "オペレーター" ? (
          <StatusGraph status={status} />
        ) : (
          <StatusGraphOperator status={statusOperator} /> // オペレーター専用のステータスグラフ
        )}
      </div>
    </CardContainer>
  );
}