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

export function fetchCharacterBackGroudColor(character) {
  let characterTeam = character.部隊
  if (characterTeam === '-') {
    characterTeam = character.組織
  }

  if (character.黒トリガー) {
    return "#111111"; // 黒トリガーの場合は黒背景
  } if (characterTeam === '玉狛第一') { // 玉狛第一はキャラごとに指定
    switch (character.名前) {
      case 'h':
        return "#044974";
      case 'g':
        return "#044974";
      case '烏丸 京介':
        return "#054a74";
      default:
        return "gray";
    }
  }

  return backGroudColor[characterTeam] || "gray";
}
