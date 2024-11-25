// トリガーの名前を渡すとそのトリガーの種類を返す

export const triggerNameAndType = {
  "ATTACK TRIGGER" : [
    "弧月",
    "スコーピオン",
    "レイガスト"
  ],
  "GUNNER TRIGGER" : [
    "アステロイド",
    "ハウンド",
    "メテオラ",
    "バイパー",
    "アステロイド：拳銃",
    "バイパー：拳銃",
    "アステロイド：突撃銃",
    "ハウンド：突撃銃",
    "バイパー：突撃銃",
    "アステロイド：機関砲",
  ],
  "SNIPER TRIGGER" : [
    "アイビス",
    "イーグレット",
    "ライトニング"
  ],
  "DEFFENSE TRIGGER" : [
    "シールド",
    "エスクード"
  ],
  "OPTION TRIGGER" : [
    "バッグワーム",
    "カメレオン",
    "グラスホッパー",
    "スパイダー",
    "スラスター",
    "旋空",
    "鉛弾",
    "ダミービーコン(試作)",
    "ガイスト(試作)",
    "フルアームズ(試作)"
  ]
};

export function fetchTriggerType(triggerName) {
  for (const [type, names] of Object.entries(triggerNameAndType)) {
    if (names.includes(triggerName)) {
      return type;
    }
  }
  return "未登録タイプ";
}