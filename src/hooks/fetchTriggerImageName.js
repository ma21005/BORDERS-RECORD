// APIから取得したトリガー名 と S3に保存されている画像名 の紐付けを行う
import { triggerNameAndType } from './fetchTriggerType';

const optionTrigger = triggerNameAndType["OPTION TRIGGER"];

export function getImageName(trigger) {
  if (trigger.includes("スパイダー(改)：拳銃")) {
    return "拳銃_改";
  } else if (trigger.includes("拳銃")) {
    return "拳銃";
  } else if (trigger.includes("突撃銃")) {
    return "突撃銃";
  } else if (trigger.includes("機関砲")) {
    return "機関砲";
  } else if (trigger.includes("擲弾銃")) {
    return "擲弾銃"
  } else if (trigger.includes("槍")) {
    return "弧月_槍";
  } else if (trigger.includes("スコーピオン(改)")) {
    return "スコーピオン";
  } else if (trigger.includes("ハウンド(改)")) {
    return "ハウンド";
  }

  return optionTrigger.includes(trigger) ? "オプション" : trigger;
}
