// トリガーの名前を渡すとそのトリガーの種類を返す

const triggerType = {
  "ATTACK TRIGGER" : [
    "弧月",
    "スコーピオン",
    "レイガスト"
  ],
  "GUNNER TRIGGER" : [
    "アステロイド",
    "バイパー"
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
    "鉛弾"
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