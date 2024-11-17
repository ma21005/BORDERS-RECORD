// トリガーの名前を渡すとそのトリガーの種類を返す

export const triggerType = {
  "ATTACK TRIGGER" : [
    "弧月",
    "スコーピオン",
    "レイガスト"
  ],
  "GUNNER TRIGGER" : [
    "アステロイド",
    "バイパー",
    "アステロイド：拳銃",
    "バイパー：拳銃",
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
    "ガイスト(試作)"
  ]
};

export function fetchTriggerType(triggerName) {
  for (const [type, names] of Object.entries(triggerType)) {
    if (names.includes(triggerName)) {
      return type;
    }
  }
  return "未登録タイプ";
}