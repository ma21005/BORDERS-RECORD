// APIから取得したキャラクターの部隊 と 背景色 の紐付けを行う

const backGroudColor = {
  "玉狛第二" : "#066e91",
  "太刀川隊" : "#211a18",
  "二宮隊" : "#252429",
  "弓場隊" : "#f0ede8",
  "東隊" : "#1e4253",
  "生駒隊" : "#c44830",
  "鈴鳴第一" : "#2c594d",
  "アフトクラトル" : "#663366"
};

export function fetchCharacterBackGroudColor(characterTeam, blackTrigger) {
  if (blackTrigger) {
    return "#111111"; // 黒トリガーの場合は黒背景
  }
  return backGroudColor[characterTeam] || "gray";
}
