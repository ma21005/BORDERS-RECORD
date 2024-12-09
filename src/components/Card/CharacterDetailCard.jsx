// キャラクターカードの詳細情報画面にあたるコンポーネント

import CardContainer from "./CardContainer";

export default function CharacterDetailCard({ character }) {
  // 誕生日を日本の日付フォーマットで表示させる
  const formatBirthday = (characterBirthday) => {
    if (characterBirthday === '不明') {
      return characterBirthday
    }
    const birthday = new Date(characterBirthday);
    return birthday.toLocaleDateString("ja-JP", {
      month: "long", // 月名をフル表示（例: "6月"）
      day: "numeric", // 日を表示（例: "12"）
    });
  };

  const detailColumn = [
    { label: "組織", value: character.組織 },
    { label: "部隊", value: character.部隊 },
    { label: "ポジション", value: character.ポジション },
    { label: "年齢", value: character.年齢 },
    { label: "誕生日", value: formatBirthday(character.誕生日) },
    { label: "身長", value: character.身長 },
    { label: "血液型", value: character.血液型 },
    { label: "星座", value: character.星座 },
    { label: "職業", value: character.職業 },
    { label: "好きなもの", value: character.好きなもの },
  ];

  return (
    <CardContainer>
      <div className="h-[10%] character-name-container mt-2 mb-1">
        <p className="text-lg font-bold text-center text-white">{character.名前}</p>
      </div>

      <div className="detail-container h-[85%] text-white hidden-scrollbar">
        {detailColumn.map((column, index) => (
          <div key={index}>
            <p className="detail-column mr-3">
              <span className="font-bold">{column.label}：</span>{column.value}
            </p>
          </div>
        ))}
      </div>
    </CardContainer>
  );
}