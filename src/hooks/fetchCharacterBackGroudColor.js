// APIから取得したキャラクターの部隊 と 背景色 の紐付けを行う

const backGroudColor = {
  "玉狛第二" : "#066e91",
  "太刀川隊" : "#211a18",
  "冬島隊" : "#671e29",
  "風間隊" : "#2e5573",
  "草壁隊" : "#6a5b27",
  "嵐山隊" : "#9e2d33",
  "加古隊" : "#7d3890",
  "三輪隊" : "#534962",
  "片桐隊" : "#f0ede8",
  "二宮隊" : "#0f0e0f",
  "影浦隊" : "#1e1d1f",
  "弓場隊" : "#f0ede8",
  "王子隊" : "#21202f",
  "生駒隊" : "#c44830",
  "鈴鳴第一" : "#2c594d",
  "東隊" : "#1e4253",
  "香取隊" : "#9f447f",
  "諏訪隊" : "#5d663a",
  "荒船隊" : "#1b1e23",
  "那須隊" : "#ebeaef",
  "柿崎隊" : "#E17730",
  "漆間隊" : "#24394a",
  "海老名隊" : "#bb6d61",
  "甲田隊" : "#f2f2f2",
  "アフトクラトル" : "#3d1a3d",
  "ガロプラ" : "#555243",

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
    if (character.組織 === 'アフトクラトル' || character.組織 === 'ガロプラ') {
      return backGroudColor[character.組織]
    }
    return backGroudColor[character.名前] || "#888888";
  } else if (characterTeam === '玉狛第一') { // 玉狛第一はキャラごとに指定
    return backGroudColor[character.名前]
  }

  return backGroudColor[characterTeam] || "#888888";
}
