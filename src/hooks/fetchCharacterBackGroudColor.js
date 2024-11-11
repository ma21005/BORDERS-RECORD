// APIから取得したキャラクターの部隊 と 背景色 の紐付けを行う

const backGroudColor = {
  "玉狛第二" : "#066e91",
  "アフトクラトル" : "#663366"
};

export function fetchCharacterBackGroudColor(characterTeam, blackTrigger) {
  if (blackTrigger) {
    return "#111111"; // 黒トリガーの場合は黒背景
  }
  return backGroudColor[characterTeam] || "gray";
}