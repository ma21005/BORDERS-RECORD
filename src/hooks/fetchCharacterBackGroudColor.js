// APIから取得したキャラクターの部隊 と 背景色 の紐付けを行う

const backGroudColor = {
  "玉狛第二" : "#066e91",
  "アフトクラトル" : "#444444"
};

export function fetchCharacterBackGroudColor(characterTeam) {
  return backGroudColor[characterTeam] || "gray";
}