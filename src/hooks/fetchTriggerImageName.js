// APIから取得したトリガー名 と S3に保存されている画像名 の紐付けを行う

const optionTrigger = ["バッグワーム", "グラスホッパー", "スラスター", "スパイダー", "旋空", "鉛弾"];

export function getImageName(trigger) {
  return optionTrigger.includes(trigger) ? "オプション" : trigger;
}