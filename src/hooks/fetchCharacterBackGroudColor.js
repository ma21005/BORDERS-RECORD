// APIから取得したキャラクターの部隊 と 背景色 の紐付けを行う

const backGroudColor = {
  "玉狛第二" : "#066e91",
  "太刀川隊" : "#211a18",
  "冬島隊" : "#671e29",
  "風間隊" : "#2e5573",
  "嵐山隊" : "#9e2d33",
  "二宮隊" : "#252429",
  "弓場隊" : "#f0ede8",
  "東隊" : "#1e4253",
  "生駒隊" : "#c44830",
  "鈴鳴第一" : "#2c594d",
  "アフトクラトル" : "#663366",

  "迅 悠一" : "#066284",
  "木崎 レイジ" : "#303d32",
  "小南 桐絵" : "#7b9b2c",
  "烏丸 京介" : "#054a74",
};

export function fetchCharacterBackGroudColor(character) {
  let characterTeam = character.部隊

  if (character.黒トリガー) {
    return "#000000"; // 黒トリガーの場合は黒背景
  } else if (characterTeam === '-') {
    if (character.組織 === 'アフトクラトル') {
      return backGroudColor[character.組織]
    }
    return backGroudColor[character.名前]

  } else if (characterTeam === '玉狛第一') { // 玉狛第一はキャラごとに指定
    return backGroudColor[character.名前]
  }

  return backGroudColor[characterTeam] || "gray";
}
